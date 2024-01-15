import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jaelen from "./components/pages/Jaelen.jsx";
import Home from "./components/pages/Home.jsx";
import Josiah from "./components/pages/Josiah.jsx";
import Caleb from "./components/pages/Caleb.jsx";
import Samuel from "./components/pages/Samuel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/samuel",
        element: <Samuel />,
      },
      {
        path: "/josiah",
        element: <Josiah />,
      },
      {
        path: "/caleb",
        element: <Caleb />,
      },
      {
        path: "/jaelen",
        element: <Jaelen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
