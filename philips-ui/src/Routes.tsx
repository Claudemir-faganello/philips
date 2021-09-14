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
        <Route path="/clients" exact>
          <DashBoard />
        </Route>
        <Route path="/clients/form" exact>
          <FormClient />
        </Route>
        <Route path="/clients/form/:id" exact>
          <FormClient />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
