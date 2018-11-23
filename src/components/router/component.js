import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PageHome } from '../page-home/component';
import { PageProfile } from '../page-profile/component';

export const AppRoute = () => (
    <Router>
      <div>
        <Route exact path="/" component={PageHome} />
        <Route path="/profile" component={PageProfile} />
      </div>
    </Router>
);

export default AppRoute;
