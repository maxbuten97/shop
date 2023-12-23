import { ModuleOptions, runtime } from 'webpack';
import { BuildOptions } from './types/types';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from './babel/buildBabelLoader';
export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

	const isDev = options.mode === 'development';

	const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', 
		options: {
			icon: true,
			svgoConfig: {
				plugins: [
					{
						name:'convertColors',
						params: {
							currentColor: true,
						}
					}
				]
			}
		} }],
      }

	const assetLoader = {
			test: /\.(png|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		  }
	

	const cssLoaderWithModules = {
		loader: "css-loader",
		options: {
		  modules: {
			localIdentName: "[name]__[local]" 
		  }
		  
		},
	  }

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			 isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoaderWithModules, "sass-loader"
			],
	  }

	  const babelLoader = buildBabelLoader(options)

	const tsLoader = {
		exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
			  getCustomTransformers: () => {
				before:[isDev && ReactRefreshTypeScript()].filter(Boolean)
			  }
            }
          }
        ]
      }
	
return [
	assetLoader,
	scssLoader,
	// tsLoader,
	babelLoader,
	svgrLoader,
	
]
}