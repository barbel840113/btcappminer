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
var dataService_1 = require('./../../../../services/dataService');
var core_1 = require('@angular/core');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var ng2_loading_bar_1 = require("ng2-loading-bar");
var HomeComponent = (function () {
    function HomeComponent(_dataService, _toasterService, _slimLoadingBarService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._slimLoadingBarService = _slimLoadingBarService;
        this.message = 'Hello from HomeComponent constructor';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._slimLoadingBarService.start();
        this._dataService
            .GetAll()
            .subscribe(function (data) { return _this.values = data; }, function (error) { return console.log(error); }, function () {
            _this._toasterService.pop('success', 'Complete', 'Getting all values complete');
            _this._slimLoadingBarService.complete();
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, angular2_toaster_1.ToasterService, ng2_loading_bar_1.LoadingBarService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map