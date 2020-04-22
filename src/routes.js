import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import History from './Pages/History';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path= "/" component={Home}/>
            <Route  path="/historico" component={History}/>
        </Switch>
    </BrowserRouter>
)
export default Routes; 