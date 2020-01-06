import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Forms-Prof/Signup';
import SignupFinish from './pages/Forms-Prof/Stepfour';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signup} />
                <Route path="/signup/finish" component={SignupFinish} />
            </Switch>
        </BrowserRouter>
    );
}