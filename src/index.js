import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/RootLayout";
import ErrorPage from "./Pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routes} />
);
