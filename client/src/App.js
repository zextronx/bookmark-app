import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./layouts/Header";
import { routes } from "./routes";
import { history } from "./utils/helpers";
import "./App.css";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={`route_${index}`}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
