import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path= "/" component={Home}/>
        <Route  path= "/ranking" component={() => <h1>Ranking</h1>}/>
        <Route  path= "/historico " component={() => <h1>Historico de busca</h1>}/>
    </Switch>
    </BrowserRouter>
)
export default Routes; 