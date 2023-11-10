import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import { Dashboard } from "./Pages/Dashboard";
import ProjectDetails from "./Pages/ProjectDetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Dashboard/>},
      {
        path: 'project/:id',
        element: <ProjectDetails/>
      },
      {
        path: 'signin',
        element: <SignIn/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routes} />
);
