import React from "react";
import { Route, IndexRoute, Router, browserHistory }from "react-router";

import Main from "../components/Main.js";
import New from "../components/NewAppl.js";
import Search from "../components/SearchAppl.js";
import Update from "../components/UpdateAppl.js";
import ViewAll from "../components/ViewAllAppl.js";

module.exports = (
    <Router history={browserHistory}>
        <Route path = "/" component={Main}>
            <Route path="New" component={New} />
            <Route path="Search" component={Search} />
            <Route path="Update" component={Update} />
            <Route path="ViewAll" component={ViewAll} />

        </Route>
    </Router>
);
