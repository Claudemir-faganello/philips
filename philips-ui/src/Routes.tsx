
import DataTable from 'components/DataTable';
import FormClient from 'components/FormClient';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <DataTable />
            </Route>
            <Route path="/form" exact>
                <FormClient />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;