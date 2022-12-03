import { createBrowserRouter } from 'react-router-dom'
import UseContextForElements from '../context/UseContextForElements'
import MainLayout from '../layout/layout/MainLayout'
import Content from '../page/content/Content'
import Elements from '../page/elements/Elements'
import CSS from '../page/preview/CSS'
import HTML from '../page/preview/HTML'
import JS from '../page/preview/JS'
import JSX from '../page/preview/JSX'
import Preview from '../page/preview/Preview'

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <UseContextForElements>
        <MainLayout />
      </UseContextForElements>
    ),
    children: [
      {
        path: '/',
        element: <Content />,
        loader: async () =>
          fetch(`http://localhost:5000/get-elements-by-query/v1`),
      },
      {
        path: 'elements/:id',
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?category_id=${params.id}`,
          ),
        element: <Elements />,
      },
      {
        path: '/preview/:id',
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?preview=${params.id}`,
          ),
        element: <Preview />,
      },
      {
        path: '/html/:id',
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?preview=${params.id}`,
          ),
        element: <HTML />,
      },
      {
        path: '/css/:id',
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?preview=${params.id}`,
          ),
        element: <CSS />,
      },
      {
        path: '/js/:id',
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?preview=${params.id}`,
          ),
        element: <JS />,
      },
      {
        path: '/jsx/:id',
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/get-elements-by-query/v1?preview=${params.id}`,
          ),
        element: <JSX />,
      },
    ],
  },
])
export default route
