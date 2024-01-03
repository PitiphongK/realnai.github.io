import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";

const loadingMarkup = (
  <div>
    <h1>Loading...</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Router basename="/myWeb">
        <Switch>
          <Route path="/" component={App} />
          <Route path="/en" component={App} />
          <Route path="/th" component={App} />
          <Route path="/jp" component={App} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Suspense>
);
