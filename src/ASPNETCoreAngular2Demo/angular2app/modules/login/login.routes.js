"use strict";
var canLoadGuard_1 = require('./../shared/guards/canLoadGuard');
var login_component_1 = require('./components/login/login.component');
var canDeactivateGuard_1 = require('./../shared/guards/canDeactivateGuard');
var authenticationGuard_1 = require('./../shared/guards/authenticationGuard');
var router_1 = require('@angular/router');
var routes = [
    {
        path: 'contact',
        component: login_component_1.LoginComponent,
        canActivate: [authenticationGuard_1.AuthenticationGuard],
        canDeactivate: [canDeactivateGuard_1.CanDeactivateGuard],
        canLoad: [canLoadGuard_1.CanLoadGuard]
    }
];
//routes for child module = Contact
exports.LoginRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=login.routes.js.map