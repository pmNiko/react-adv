import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../../../routes/routes";

export const LinksMatch = () => {
  return (
    /*A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
    <Switch>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index + path} path={path} exact>
          <Component />
        </Route>
      ))}

      <Redirect to={routes[0].path} />
    </Switch>
  );
};
