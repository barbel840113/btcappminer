"use strict";
var canLoadGuard_1 = require('./../shared/guards/canLoadGuard');
var contact_component_1 = require('./components/contact/contact.component');
var canDeactivateGuard_1 = require('./../shared/guards/canDeactivateGuard');
var authenticationGuard_1 = require('./../shared/guards/authenticationGuard');
var router_1 = require('@angular/router');
var routes = [
    {
        path: 'contact',
        component: contact_component_1.ContactComponent,
        canActivate: [authenticationGuard_1.AuthenticationGuard],
        canDeactivate: [canDeactivateGuard_1.CanDeactivateGuard],
        canLoad: [canLoadGuard_1.CanLoadGuard]
    }
];
//routes for child module = Contact
exports.ContactRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=contact.routes.js.map