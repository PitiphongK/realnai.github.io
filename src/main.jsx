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

//https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
//A url like http://user.github.io/todomvc/todos/42, where /todos/42 is a frontend route, the GitHub Pages server returns 404 because it knows nothing of /todos/42. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:
