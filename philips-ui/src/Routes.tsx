import FormClient from "components/FormClient";
import Home from "pages/Home";
import DashBoard from "pages/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/lista">
          <DashBoard />
        </Route>
        <Route path="/form">
          <FormClient />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
