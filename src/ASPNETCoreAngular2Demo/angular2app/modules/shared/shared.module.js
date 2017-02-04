"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var canLoadGuard_1 = require('./guards/canLoadGuard');
var canDeactivateGuard_1 = require('./guards/canDeactivateGuard');
var authenticationGuard_1 = require('./guards/authenticationGuard');
var footer_component_1 = require('./components/footer/footer.component');
var dataService_1 = require('./../../services/dataService');
var app_constants_1 = require('./../../app.constants');
var navigation_component_1 = require('./components/navigation/navigation.component');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                ng2_bs3_modal_1.Ng2Bs3ModalModule
            ],
            declarations: [
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent
            ],
            exports: [
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent
            ],
            providers: [
                dataService_1.DataService,
                app_constants_1.Configuration,
                authenticationGuard_1.AuthenticationGuard,
                canDeactivateGuard_1.CanDeactivateGuard,
                canLoadGuard_1.CanLoadGuard,
                canDeactivateGuard_1.CanDeactivateGuardContact
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map