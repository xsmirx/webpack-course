import {createRoot} from 'react-dom/client'
import {App} from '@/components/App'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Suspense} from 'react'
import {LazyAbout} from '@/pages/about/About.lazy'
import {LazyShop} from '@/pages/shop/Shop.lazy'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('root not found')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
])

const container = createRoot(root)

container.render(<RouterProvider router={router} />)
