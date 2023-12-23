import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { Suspense } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import { Shop } from '@/pages/shop';
import { About } from '@/pages/about';

const root = document.getElementById('root');

if(!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	  children: [
		{
			path: '/about',
			element: <Suspense fallback={'Загрузка страницы...'}><About /></Suspense>,
		},
		{
			path: '/shop',
			element: <Suspense fallback={'Загрузка страницы...'}><Shop /></Suspense>,		
			},
	]
	},
  ]);
  
container.render(
	<RouterProvider router={router} />
	);
