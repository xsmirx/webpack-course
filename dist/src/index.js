import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
const root = document.querySelector('#root');
if (!root) {
    throw new Error('root not found');
}
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: (_jsx(Suspense, { fallback: 'Loading...', children: _jsx(LazyAbout, {}) })),
            },
            {
                path: '/shop',
                element: (_jsx(Suspense, { fallback: 'Loading...', children: _jsx(LazyShop, {}) })),
            },
        ],
    },
]);
const container = createRoot(root);
container.render(_jsx(RouterProvider, { router: router }));
