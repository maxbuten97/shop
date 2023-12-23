import webpack from 'webpack';
import path from 'path';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolver } from './buildResolver';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const {mode, port, paths} = options;
	const isDev = options.mode === 'development';
	
	return {
		mode: mode ?? 'development',
		
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		optimization: {
			runtimeChunk: 'single',
		  },
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolver(options),
		devtool: isDev ? 'inline-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined, 
	}

}