import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = lazy(() => import('./App'))
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'))
import Loading from './components/Loading/Loading'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/pro/:proId',
    element: <ProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
