import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";

const loadingMarkup = (
  <div>
    <h1>Loading...</h1>
  </div>
);

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>
);
