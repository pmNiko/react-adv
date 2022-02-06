import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name }, index) => (
              <li key={index + to}>
                <NavLink to={to} activeClassName="nav-active" exact>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map(({ path, Component }, index) => (
            <Route key={index + path} path={path} exact>
              <Component />
            </Route>
          ))}

          <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
  );
};
