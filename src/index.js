import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const store = configureStore({
  reducer: reducers,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <ProductPage />,
      },
      {
        path: "/products/:productId/confirm-order",
        element: <ConfirmOrder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
