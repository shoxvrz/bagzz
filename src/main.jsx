import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import store from "./toolkit/store";
import {Provider} from 'react-redux'

const App = lazy(() => import("./App"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const FavItemsPage = lazy(() => import('./pages/FavItemsPage/FavItemsPage'))
const Main = lazy(() => import("./components/Main/Main"));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const SignPage = lazy(() => import('./pages/SignPage/SignPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Main />,
      },
      {
        path: "pro/:proId",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: '/favItems',
        element: <FavItemsPage/>
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: 'sign',
    element: <SignPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
    </Provider>
  </React.StrictMode>
);
