(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./documentation/documentation.module": [
		"./src/app/documentation/documentation.module.ts",
		"documentation-documentation-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_bar_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/components/landing/landing.component */ "./src/app/nav-bar/components/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _nav_bar_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'documentation', loadChildren: './documentation/documentation.module#DocumentationModule' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'sug-root' }),
                _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar-section{\r\n  z-index: 10000;\r\n  width: 100vw;\r\n  display: block;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.page-wrapper{\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /*justify-content: space-between;*/\r\n  box-sizing: content-box;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.page-section{\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.page-section.padding-top {\r\n    padding-top: 2.5rem;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-wrapper\">\n  <sug-nav-bar class=\"nav-bar-section\"></sug-nav-bar>\n  <section class=\"page-section\" [ngClass]=\"{'padding-top':(navBarToggle$|async)}\">\n    <router-outlet></router-outlet>\n  </section>\n  <sug-footer></sug-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/toggle.service */ "./src/app/services/toggle.service.ts");
/* harmony import */ var _constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/toggle-subjects */ "./src/app/constants/toggle-subjects.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_toggle) {
        this.navBarToggle$ = _toggle.get(_constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_2__["ToggleSubjects"].NAVBAR).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) { return !!status; }));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sug-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [_services_toggle_service__WEBPACK_IMPORTED_MODULE_1__["ToggleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.module */ "./src/app/nav-bar/nav-bar.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["NgtUniversalModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
                _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_4__["NavBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/toggle-subjects.ts":
/*!**********************************************!*\
  !*** ./src/app/constants/toggle-subjects.ts ***!
  \**********************************************/
/*! exports provided: ToggleSubjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSubjects", function() { return ToggleSubjects; });
var ToggleSubjects;
(function (ToggleSubjects) {
    ToggleSubjects["LOADER"] = "loader";
    ToggleSubjects["NAVBAR"] = "navbar";
})(ToggleSubjects || (ToggleSubjects = {}));


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"footer-wrapper\">\n  <section class=\"content-wrapper\">\n    <span class=\"icons\">\n            <a href=\"https://github.com/sugoiJS\"><img class=\"icon\" alt=\"github repository\" src=\"/assets/images/github/GitHub-Mark-64px.png\"/></a>\n    </span>\n    <span class=\"copyright\">\n      Released under the MIT License<br/>\n      Copyright © {{currentYear}}\n    </span>\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-wrapper {\n  position: relative;\n  bottom: 0;\n  background: #bfdff6;\n  padding: 3rem;\n  width: 100vw;\n  z-index: 0;\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box; }\n  .footer-wrapper .content-wrapper {\n    display: flex;\n    flex-direction: column; }\n  .footer-wrapper .content-wrapper .icons {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n  .footer-wrapper .content-wrapper .icons .icon {\n        cursor: pointer;\n        height: 3.5rem;\n        opacity: .5;\n        transition: opacity ease-in-out 500ms; }\n  .footer-wrapper .content-wrapper .icons .icon:hover {\n          opacity: 1; }\n  .footer-wrapper .copyright {\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = (new Date()).getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sug-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/components/landing/landing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/nav-bar/components/landing/landing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"landing-wrapper-no-bg\">\n  <section class=\"landing-wrapper\">\n    <section class=\"landing-content\">\n      <section class=\"content\">\n      <img class=\"landing-icon\" src=\"/assets/logo_inverse.png\"/>\n      <div class=\"text-wrapper\">\n        <span class=\"description title\">\n          SUGOI\n        </span>\n      <span class=\"description second-title\">Minimal modular framework\n        <br/>Use only what you need, fast.</span>\n      </div>\n    </section>\n    </section>\n  </section>\n  <section class=\"snippets-wrapper\">\n    <div class=\"snippet card\" *ngFor=\"let snippet of snippets\">\n      <span class=\"title\">{{snippet.title}}</span>\n      <span class=\"description\">{{snippet.description}}</span>\n    </div>\n  </section>\n  <span class=\"getting-started-button option\"\n        routerLink=\"/documentation\">\n      Getting Started\n    </span>\n</section>\n\n"

/***/ }),

/***/ "./src/app/nav-bar/components/landing/landing.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/nav-bar/components/landing/landing.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-wrapper-no-bg {\n  padding-bottom: 15%;\n  display: flex;\n  flex-direction: column; }\n  .landing-wrapper-no-bg .landing-wrapper {\n    display: flex;\n    flex-direction: column;\n    background: #053c50;\n    background: linear-gradient(180deg, #053c50, #0db2ba);\n    height: auto;\n    align-items: center;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content {\n      -webkit-transform: translateY(25%);\n              transform: translateY(25%);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content {\n        display: flex;\n        flex-direction: row;\n        align-items: center; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content .text-wrapper {\n          padding-bottom: 2.5rem; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content .description {\n          font-size: 2.5rem;\n          color: white;\n          display: inherit;\n          align-items: center;\n          text-align: center; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content .description.title {\n            font-size: 4rem;\n            color: #053c50;\n            text-align: left;\n            font-weight: 600;\n            padding-bottom: .5rem; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content .description .second-title {\n            font-size: 2em; }\n  .landing-wrapper-no-bg .landing-wrapper .landing-content .content .landing-icon {\n          width: 20rem; }\n  .landing-wrapper-no-bg .getting-started-button {\n    background: white;\n    padding: 1rem 3rem;\n    border: 2px solid #9db1c0;\n    border-radius: 4rem;\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26);\n    font-size: 2rem;\n    transition: 300ms ease-out all;\n    margin-top: 2rem;\n    width: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .landing-wrapper-no-bg .getting-started-button:active {\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n  .landing-wrapper-no-bg .snippets-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 3rem;\n    flex-direction: row;\n    flex: 1 0 15%;\n    padding: 2rem 5rem; }\n  .landing-wrapper-no-bg .snippets-wrapper .snippet {\n      background: white;\n      display: flex;\n      flex-direction: column;\n      padding: 2rem;\n      min-height: 16rem;\n      height: auto;\n      min-width: 11vw;\n      margin: 0 1rem;\n      width: -webkit-min-content;\n      width: -moz-min-content;\n      width: min-content;\n      font-size: 1.5rem;\n      border-radius: 1rem; }\n  .landing-wrapper-no-bg .snippets-wrapper .snippet .title {\n        font-weight: 600; }\n  .landing-wrapper-no-bg .snippets-wrapper .snippet .description {\n        padding-top: 0.8rem; }\n  @media screen and (max-width: 1024px) {\n  .landing-wrapper .landing-content {\n    -webkit-transform: translateY(10%) !important;\n            transform: translateY(10%) !important; }\n    .landing-wrapper .landing-content .content {\n      flex-direction: column !important;\n      margin-bottom: 3rem; }\n  .snippets-wrapper {\n    flex-direction: column !important; }\n    .snippets-wrapper > .snippet {\n      flex: 1;\n      width: 70vw !important;\n      margin: 0.5rem 0 !important;\n      min-height: 8rem !important;\n      font-size: 2rem !important; }\n  .getting-started-button {\n    font-size: 4rem !important; } }\n"

/***/ }),

/***/ "./src/app/nav-bar/components/landing/landing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nav-bar/components/landing/landing.component.ts ***!
  \*****************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/toggle-subjects */ "./src/app/constants/toggle-subjects.ts");
/* harmony import */ var _services_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/toggle.service */ "./src/app/services/toggle.service.ts");
/* harmony import */ var _constants_navigation_options_contant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/navigation-options.contant */ "./src/app/nav-bar/constants/navigation-options.contant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(_toggle) {
        this._toggle = _toggle;
        this.options = _constants_navigation_options_contant__WEBPACK_IMPORTED_MODULE_3__["NavigationOptions"];
        this.snippets = [
            {
                icon: '',
                title: 'Enhanch your structure',
                description: 'Sugoi gives you ORM with lifecycle, singleton services and decorators support.'
            },
            {
                icon: '',
                title: 'Optimized development',
                description: 'By using Sugoi you can focus on your business logic and optimize your development.'
            },
            {
                icon: '',
                title: 'Modular',
                description: 'Each Sugoi module is standalone and by the size of 800KB.'
            }
        ];
    }
    LandingComponent.prototype.ngOnInit = function () {
        this._toggle.dispatch(_constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__["ToggleSubjects"].NAVBAR, false);
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this._toggle.dispatch(_constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__["ToggleSubjects"].NAVBAR, true);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sug-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/nav-bar/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/nav-bar/components/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_toggle_service__WEBPACK_IMPORTED_MODULE_2__["ToggleService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/components/nav-bar/nav-bar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/nav-bar/components/nav-bar/nav-bar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"nav-bar-wrapper card\">\n  <section class=\"icon-wrapper\" routerLink=\"/\">\n    <img class=\"icon\" src=\"/assets/icon_inverse.png\"/>\n    <span class=\"text\">UGOI</span>\n  </section>\n  <section class=\"inline-options options-wrapper\">\n    <ng-container *ngFor=\"let option of options\" [ngSwitch]=\"option.external\">\n    <span *ngSwitchDefault class=\"option\">\n      <img *ngIf=\"option.image\" [src]=\"option.image\"/>\n      {{option.label}}\n    </span>\n      <a data-pass=\"true\" *ngSwitchCase=\"true\"\n         class=\"option\"\n         target=\"_blank\"\n         rel=\"noopener noreferrer\"\n         [href]=\"option?.navigation\">\n        <img *ngIf=\"option.image\" [src]=\"option.image\"/>\n        {{option.label}}\n      </a>\n\n    </ng-container>\n  </section>\n  <i class=\"toggle-button fa fa-bars\" (click)=\"toggleOptions = !toggleOptions\"></i>\n</section>\n<section class=\"column-options options-wrapper\" [ngClass]=\"{'hidden':!toggleOptions}\">\n  <ng-container *ngFor=\"let option of options\" [ngSwitch]=\"option.external\">\n    <span *ngSwitchDefault class=\"option\">\n      <img *ngIf=\"option.image\" [src]=\"option.image\"/>\n      {{option.label}}\n    </span>\n    <a data-pass=\"true\" *ngSwitchCase=\"true\"\n       class=\"option\"\n       target=\"_blank\"\n       rel=\"noopener noreferrer\"\n       [href]=\"option?.navigation\">\n      <img *ngIf=\"option.image\" [src]=\"option.image\"/>\n      {{option.label}}\n    </a>\n\n  </ng-container>\n</section>\n\n"

/***/ }),

/***/ "./src/app/nav-bar/components/nav-bar/nav-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/nav-bar/components/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 100%;\n  align-items: center;\n  background: #053c50;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  padding: 0 1rem;\n  justify-content: space-between;\n  box-sizing: border-box;\n  color: #94abbb; }\n  .nav-bar-wrapper .icon-wrapper {\n    display: flex;\n    flex-direction: row;\n    font-size: 3rem;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n  .nav-bar-wrapper .icon-wrapper .icon {\n      height: 5rem; }\n  .nav-bar-wrapper .icon-wrapper .text {\n      -webkit-transform: translateX(-0.5rem);\n              transform: translateX(-0.5rem); }\n  .nav-bar-wrapper .toggle-button {\n    font-size: 3rem;\n    display: none; }\n  .column-options {\n  display: none; }\n  .options-wrapper {\n  background: #053c50;\n  align-items: center;\n  color: #94abbb;\n  margin: 0 25% 0 1%;\n  display: flex;\n  width: 80%;\n  justify-content: flex-start; }\n  .options-wrapper.column-options {\n    flex-direction: column;\n    position: fixed;\n    width: 100vw;\n    padding: 1rem;\n    align-items: flex-start; }\n  .options-wrapper .option {\n    text-decoration: none;\n    color: inherit;\n    font-size: 1.6rem;\n    font-weight: 700;\n    cursor: pointer;\n    padding: 1.2rem; }\n  .options-wrapper .option:hover {\n      text-decoration: underline; }\n  .options-wrapper .option > img {\n      height: 3.5rem;\n      padding: .5rem;\n      cursor: pointer;\n      background: white;\n      border-radius: 100%;\n      opacity: .75; }\n  .hidden {\n  display: none !important; }\n  @media screen and (max-width: 1024px) {\n  .toggle-button {\n    display: block !important; }\n  .icon-wrapper {\n    -ms-grid-row-align: center;\n        align-self: center; }\n  .options-wrapper {\n    margin: 0 !important; }\n    .options-wrapper.column-options {\n      display: flex; }\n    .options-wrapper.inline-options {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/nav-bar/components/nav-bar/nav-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nav-bar/components/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_navigation_options_contant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/navigation-options.contant */ "./src/app/nav-bar/constants/navigation-options.contant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(window) {
        this.window = window;
        this.options = _constants_navigation_options_contant__WEBPACK_IMPORTED_MODULE_2__["NavigationOptions"];
        this.toggleOptions = false;
    }
    NavBarComponent.prototype.toggleOff = function () {
        this.toggleOptions = false;
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavBarComponent.prototype, "toggleOff", null);
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sug-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/components/nav-bar/nav-bar.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_0__["WINDOW"])),
        __metadata("design:paramtypes", [Window])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/constants/navigation-options.contant.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nav-bar/constants/navigation-options.contant.ts ***!
  \*****************************************************************/
/*! exports provided: NavigationOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationOptions", function() { return NavigationOptions; });
var NavigationOptions = [
    {
        label: 'Documentation',
        navigation: '/documentation'
    },
    {
        label: 'Wiki',
        external: true,
        navigation: 'https://sugoijs.gitbook.io/framework/'
    },
    {
        label: 'Demo',
        external: true,
        navigation: 'http://demo.sugoijs.com'
    }
];


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.module.ts ***!
  \*******************************************/
/*! exports provided: NavBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarModule", function() { return NavBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/nav-bar/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/nav-bar/components/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavBarModule = /** @class */ (function () {
    function NavBarModule() {
    }
    NavBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            exports: [
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
            ],
            entryComponents: [_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]],
            providers: []
        })
    ], NavBarModule);
    return NavBarModule;
}());



/***/ }),

/***/ "./src/app/services/toggle.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/toggle.service.ts ***!
  \********************************************/
/*! exports provided: ToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleService", function() { return ToggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/toggle-subjects */ "./src/app/constants/toggle-subjects.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToggleService = /** @class */ (function () {
    function ToggleService() {
        this.toggles$ = new Map();
        this.init(_constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__["ToggleSubjects"].NAVBAR);
        this.init(_constants_toggle_subjects__WEBPACK_IMPORTED_MODULE_1__["ToggleSubjects"].LOADER);
    }
    ToggleService.prototype.get = function (subject) {
        return this.toggles$.has(subject)
            ? this.toggles$.get(subject).asObservable()
            : this.init(subject).asObservable();
    };
    ToggleService.prototype.init = function (subjectKey) {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.toggles$.set(subjectKey, subject);
        return subject;
    };
    ToggleService.prototype.dispatch = function (subject, status) {
        if (this.toggles$.has(subject)) {
            this.toggles$.get(subject).next(status);
        }
    };
    ToggleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToggleService);
    return ToggleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Orel Balilti\Documents\Projects\sugoi-documentation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map