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
var home_module_1 = require('./modules/home/home.module');
var about_module_1 = require('./modules/about/about.module');
var contact_module_1 = require('./modules/contact/contact.module');
var shared_module_1 = require('./modules/shared/shared.module');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var ng2_loading_bar_1 = require("ng2-loading-bar");
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.AppRouting,
                http_1.HttpModule,
                angular2_toaster_1.ToasterModule,
                ng2_loading_bar_1.LoadingBarModule,
                contact_module_1.ContactModule,
                shared_module_1.SharedModule,
                about_module_1.AboutModule,
                home_module_1.HomeModule,
                ng2_bs3_modal_1.Ng2Bs3ModalModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map