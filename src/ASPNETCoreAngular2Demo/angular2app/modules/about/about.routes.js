"use strict";
var canLoadGuard_1 = require('./../shared/guards/canLoadGuard');
var canDeactivateGuard_1 = require('./../shared/guards/canDeactivateGuard');
var authenticationGuard_1 = require('./../shared/guards/authenticationGuard');
var about_component_1 = require('./components/about/about.component');
var router_1 = require('@angular/router');
var routes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [authenticationGuard_1.AuthenticationGuard],
        canDeactivate: [canDeactivateGuard_1.CanDeactivateGuard],
        canLoad: [canLoadGuard_1.CanLoadGuard]
    }
];
exports.AboutRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=about.routes.js.map