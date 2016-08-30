"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var core_2 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                _1.AppComponent
            ],
            bootstrap: [_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent);
//# sourceMappingURL=main.js.map