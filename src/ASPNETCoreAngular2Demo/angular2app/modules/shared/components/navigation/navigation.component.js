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
var core_1 = require('@angular/core');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.isLogged = true;
    }
    NavigationComponent.prototype.onLogging = function () {
        this.modalComponent.open();
        this.isLogged = false;
    };
    NavigationComponent.prototype.onLoggout = function () {
        this.isLogged = true;
    };
    //implement open function(params:type) 
    NavigationComponent.prototype.open = function () {
        this.modalComponent.open();
    };
    ///implement close function
    NavigationComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    //output
    NavigationComponent.prototype.output = function () {
        console.log("output" + "username = " + this.username + "passowrd = " + this.password);
        this.modalComponent.close();
    };
    __decorate([
        core_1.ViewChild('validationModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], NavigationComponent.prototype, "modalComponent", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'starterTemplateNavigation',
            //directives: [Modal], 
            styles: [' >>> .modal-xl { width: 500px; } #password{width:200px;}'],
            templateUrl: './navigation.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map