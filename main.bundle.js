webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/apps.module": [
		"./src/app/apps/apps.module.ts",
		"common",
		"apps.module"
	],
	"./chartlib/chartlib.module": [
		"./src/app/chartlib/chartlib.module.ts",
		"common",
		"chartlib.module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./dragndrop/dragndrop.module": [
		"./src/app/dragndrop/dragndrop.module.ts",
		"common",
		"dragndrop.module"
	],
	"./ecommerce/ecommerce.module": [
		"./src/app/ecommerce/ecommerce.module.ts",
		"ecommerce.module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"common",
		"forms.module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./material/material.module": [
		"./src/app/material/material.module.ts",
		"material.module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"common",
		"pages.module"
	],
	"./session/session.module": [
		"./src/app/session/session.module.ts",
		"common",
		"session.module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"common",
		"taskboard.module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"common",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_router__ = __webpack_require__("./node_modules/@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["f" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["j" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["h" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["i" /* OptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["g" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["d" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["e" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core__["a" /* AccordionAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_14__core__["c" /* AccordionLinkDirective */],
                __WEBPACK_IMPORTED_MODULE_14__core__["b" /* AccordionDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["N" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["M" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'YOURAPIKEY' }),
                __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__["c" /* PerfectScrollbarModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/app/core/index.ts");

var AppRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__core__["d" /* AdminLayoutComponent */],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'apps',
                loadChildren: './apps/apps.module#AppsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'material',
                loadChildren: './material/material.module#MaterialComponentsModule'
            }, {
                path: 'ecommerce',
                loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
            }, {
                path: 'taskboard',
                loadChildren: './taskboard/taskboard.module#TaskboardModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormModule'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'charts',
                loadChildren: './chartlib/chartlib.module#ChartlibModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapModule'
            }, {
                path: 'dragndrop',
                loadChildren: './dragndrop/dragndrop.module#DragndropModule'
            }, {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__core__["e" /* AuthLayoutComponent */],
        children: [{
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }]
    }, {
        path: '**',
        redirectTo: 'session/404'
    }];


/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app mat-typography\" [dir]=\"options.dir\" [ngClass]=\"{'app-dark': options.dark, 'boxed': options.boxed, 'collapsed-sidebar': options.collapsed, 'compact-sidebar': options.compact, 'side-panel-opened': sidePanelOpened, 'side-panel-closed': !sidePanelOpened }\">\n  <ngx-loading-bar color=\"#009688\"></ngx-loading-bar>\n  <app-header (toggleSidenav)=\"sidemenu.toggle()\" (toggleNotificationSidenav)=\"notifications.toggle()\"></app-header>\n\n  <mat-sidenav-container class=\"app-inner\">\n    <mat-sidenav #sidemenu class=\"sidebar-panel\" id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" (open)=\"sidePanelOpened = true\"\n    (close)=\"sidePanelOpened = false\" (mouseover)=\"menuMouseOver()\" (mouseout)=\"menuMouseOut()\" [perfectScrollbar]=\"config\" [disabled]=\"mediaMatcher.matches\">\n      <app-sidebar (click)=\"updatePS()\"></app-sidebar>\n    </mat-sidenav>\n    <mat-sidenav #notifications position=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\n      <app-notification></app-notification>\n    </mat-sidenav>\n    <div [perfectScrollbar]=\"config\" [disabled]=\"mediaMatcher.matches\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-container>\n\n  <!-- Demo Purposes Only -->\n  <app-options (messageEvent)=\"receiveOptions($event)\"></app-options>\n  <!-- /Demo Purposes Only -->\n</div>\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMALL_WIDTH_BREAKPOINT = 960;
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(_element, router, zone) {
        var _this = this;
        this._element = _element;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.options = {
            collapsed: false,
            compact: false,
            boxed: false,
            dark: false,
            dir: 'ltr'
        };
        this.config = {};
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () {
            _this.mediaMatcher = mql;
        }); });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.router.url;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
            _this.url = event.url;
            _this.runOnRouteChange();
        });
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (this.isOver()) {
            this.sidemenu.close();
        }
        this.updatePS();
    };
    AdminLayoutComponent.prototype.receiveOptions = function ($event) {
        this.options = $event;
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' ||
            this.url === '/apps/calendar' ||
            this.url === '/apps/media' ||
            this.url === '/maps/leaflet' ||
            this.url === '/taskboard') {
            return true;
        }
        else {
            return this.mediaMatcher.matches;
        }
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.updatePS = function () {
        var _this = this;
        if (!this.mediaMatcher.matches && !this.options.compact) {
            setTimeout(function () {
                _this.directiveScroll.update();
            }, 350);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidemenu'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["b" /* PerfectScrollbarDirective */])
    ], AdminLayoutComponent.prototype, "directiveScroll", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/core/admin-layout/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            styles: [':host .mat-drawer-content {padding: 0;} .mat-drawer-container {z-index: 1000}'],
            template: __webpack_require__("./src/app/core/auth-layout/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\" color=\"primary\">\n  <button (click)=\"toggleSidenav.emit()\" mat-icon-button>\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"branding\">\n    <div class=\"logo\"></div>\n  </div>\n  <div class=\"search-bar\" fxFlex>\n    <form class=\"search-form\" [ngStyle.xs]=\"{display: 'none'}\">\n      <mat-icon>search</mat-icon>\n      <input type=\"text\" placeholder=\"Search\" autofocus=\"true\" />\n    </form>\n  </div>\n  <button (click)=\"fullScreenToggle()\" mat-icon-button>\n    <mat-icon>fullscreen</mat-icon>\n  </button>\n  <button (click)=\"toggleNotificationSidenav.emit()\" mat-icon-button class=\"ml-xs overflow-visible\">\n    <mat-icon>notifications</mat-icon>\n    <span class=\"notification-label\">5</span>\n  </button>\n  <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\n    <mat-icon>person</mat-icon>\n  </button>\n  <mat-menu #user=\"matMenu\" x-position=\"before\">\n    <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      Settings\n    </button>\n    <button mat-menu-item>\n      <mat-icon>account_box</mat-icon>\n      Profile\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      Disable notifications\n    </button>\n    <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      Sign Out\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleNotificationSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.fullScreenToggle = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleNotificationSidenav", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_layout_admin_layout_component__ = __webpack_require__("./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_layout_admin_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_layout_auth_layout_component__ = __webpack_require__("./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_layout_auth_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("./src/app/core/sidebar/sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__ = __webpack_require__("./src/app/core/notification/notification.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("./src/app/core/menu/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_accordion__ = __webpack_require__("./src/app/core/menu-accordion/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_accordion__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_options_component__ = __webpack_require__("./src/app/core/options/options.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__options_options_component__["a"]; });










/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });





/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__("./src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
    MenuComponent.prototype.addMenuItem = function () {
        this.menuService.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: "\n    <mat-nav-list appAccordion class=\"navigation\">\n      <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuService.getAll()\" group=\"{{menuitem.state}}\">\n        <a appAccordionToggle class=\"relative\" [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n          <mat-icon>{{ menuitem.icon }}</mat-icon>\n          <span>{{ menuitem.name | translate }}</span>\n          <span fxFlex></span>\n          <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a appAccordionToggle class=\"relative\" href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\n          <mat-icon>{{ menuitem.icon }}</mat-icon>\n          <span>{{ menuitem.name | translate }}</span>\n          <span fxFlex></span>\n          <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a appAccordionToggle class=\"relative\" href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\n          <mat-icon>{{ menuitem.icon }}</mat-icon>\n          <span>{{ menuitem.name | translate }}</span>\n          <span fxFlex></span>\n          <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n        </a>\n        <a appAccordionToggle class=\"relative\" href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\n          <mat-icon>{{ menuitem.icon }}</mat-icon>\n          <span>{{ menuitem.name | translate }}</span>\n          <span fxFlex></span>\n          <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n        </a>\n        <mat-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\n          <mat-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n            <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\">{{ childitem.name | translate }}</a>\n          </mat-list-item>\n        </mat-nav-list>\n      </mat-list-item>\n    </mat-nav-list>",
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: '/',
        name: 'HOME',
        type: 'link',
        icon: 'explore'
    },
    {
        state: 'apps',
        name: 'APPS',
        type: 'sub',
        icon: 'apps',
        badge: [
            { type: 'red', value: '5' }
        ],
        children: [
            { state: 'calendar', name: 'CALENDAR' },
            { state: 'media', name: 'MEDIA' },
            { state: 'messages', name: 'MESSAGES' },
            { state: 'social', name: 'SOCIAL' },
            { state: 'chat', name: 'CHAT' }
        ]
    },
    {
        state: 'widgets',
        name: 'WIDGETS',
        type: 'link',
        icon: 'photo'
    },
    {
        state: 'material',
        name: 'MATERIAL',
        type: 'sub',
        icon: 'equalizer',
        badge: [
            { type: 'purple', value: '10' }
        ],
        children: [
            { state: 'autocomplete', name: 'AUTOCOMPLETE' },
            { state: 'button', name: 'BUTTON' },
            { state: 'button-toggle', name: 'BUTTONTOGGLE' },
            { state: 'card', name: 'CARDS' },
            { state: 'checkbox', name: 'CHECKBOX' },
            { state: 'chips', name: 'CHIPS' },
            { state: 'datepicker', name: 'DATEPICKER' },
            { state: 'dialog', name: 'DIALOG' },
            { state: 'drawer', name: 'DRAWER' },
            { state: 'expansion', name: 'EXPANSION' },
            { state: 'grid-list', name: 'GRID' },
            { state: 'input', name: 'INPUT' },
            { state: 'list', name: 'LISTS' },
            { state: 'menu', name: 'MENU' },
            { state: 'progress-bar', name: 'PROGRESSBAR' },
            { state: 'progress-spinner', name: 'PROGRESSSPINNER' },
            { state: 'radio', name: 'RADIO' },
            { state: 'ripple', name: 'RIPPLE' },
            { state: 'select', name: 'SELECT' },
            { state: 'slide-toggle', name: 'SLIDETOGGLE' },
            { state: 'slider', name: 'SLIDER' },
            { state: 'snack-bar', name: 'SNACKBAR' },
            { state: 'stepper', name: 'STEPPER' },
            { state: 'table', name: 'TABLE' },
            { state: 'tabs', name: 'TABS' },
            { state: 'toolbar', name: 'TOOLBAR' },
            { state: 'tooltip', name: 'TOOLTIP' },
            { state: 'typography', name: 'TYPOGRAPHY' }
        ]
    },
    {
        state: 'forms',
        name: 'FORMS',
        type: 'sub',
        icon: 'looks_3',
        children: [
            // {state: 'editor', name: 'EDITOR'},
            { state: 'validation', name: 'VALIDATION' },
            { state: 'upload', name: 'UPLOAD' },
            { state: 'tree', name: 'TREE' },
        ]
    },
    {
        state: 'tables',
        name: 'DATATABLE',
        type: 'sub',
        icon: 'format_line_spacing',
        badge: [
            { type: 'blue-grey', value: '8'
            }
        ],
        children: [
            { state: 'fullscreen', name: 'FULLSCREEN' },
            { state: 'editing', name: 'EDITING' },
            { state: 'filter', name: 'FILTER' },
            { state: 'paging', name: 'PAGING' },
            { state: 'sorting', name: 'SORTING' },
            { state: 'pinning', name: 'PINNING' },
            { state: 'selection', name: 'SELECTION' },
        ]
    },
    {
        state: 'ecommerce',
        name: 'ECOMMERCE',
        type: 'sub',
        icon: 'looks_3',
        badge: [
            { type: 'red', value: 'new'
            }
        ],
        children: [
            { state: 'products', name: 'PRODUCTS' },
            { state: 'compact', name: 'COMPACT' },
            { state: 'detail', name: 'DETAIL' },
        ]
    },
    {
        state: 'taskboard',
        name: 'TASKBOARD',
        type: 'link',
        icon: 'view_column',
    },
    {
        state: 'charts',
        name: 'CHARTS',
        type: 'link',
        icon: 'show_chart',
    },
    {
        state: 'maps',
        name: 'MAPS',
        type: 'sub',
        icon: 'navigation',
        children: [
            { state: 'google', name: 'GOOGLE' },
            { state: 'leaflet', name: 'LEAFLET' }
        ]
    },
    {
        state: 'dragndrop',
        name: 'DND',
        type: 'link',
        icon: 'show_chart',
    },
    {
        state: 'pages',
        name: 'PAGES',
        type: 'sub',
        icon: 'pages',
        children: [
            { state: 'invoice', name: 'INVOICE' },
            { state: 'timeline', name: 'TIMELINE' },
            { state: 'user', name: 'USER' },
            { state: 'blank', name: 'BLANK' },
            { state: 'pricing', name: 'PRICING' },
        ]
    },
    {
        state: 'session',
        name: 'SESSION',
        type: 'sub',
        icon: 'face',
        children: [
            { state: '404', name: '404' },
            { state: 'error', name: 'ERROR' },
            { state: 'signin', name: 'SIGNIN' },
            { state: 'signup', name: 'SIGNUP' },
            { state: 'forgot', name: 'FORGOT' },
            { state: 'lockscreen', name: 'LOCKSCREEN' },
        ]
    },
    {
        state: 'http://primer.nyasha.me/docs',
        name: 'DOCS',
        type: 'extTabLink',
        icon: 'local_library'
    }
];
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuService.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/core/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"1\" mat-stretch-tabs>\n  <mat-tab>\n    <ng-template matTabLabel>Today</ng-template>\n    <div class=\"scroll\">\n      <mat-list class=\"pt-1 pb-1\">\n        <mat-list-item>\n          <div fxLayout=\"column\">\n            <h1 class=\"ma-0\">{{ today | date:'EEEE' }}</h1>\n            <h3 class=\"mat-text-muted ma-0\"><span>{{ today | date:'dd' }}</span>&nbsp;<span>{{ today | date:'MMMM' }}</span></h3>\n          </div>\n        </mat-list-item>\n      </mat-list>\n      <mat-nav-list>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Stocks</h3>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">NASDAQ</a>\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">4,492.87</span>\n            <span>-0.29%</span>\n        </mat-list-item>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">NYSE</a>\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">10,692.07</span>\n            <span>-0.53%</span>\n        </mat-list-item>\n        <mat-list-item>\n            <a matLine href=javascript:;>DOW J</a>\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">17,046.81</span>\n            <span>-0.14%</span>\n        </mat-list-item>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">APPL</a>\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">100,89</span>\n            <span>+0.75%</span>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Weather</h3>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">{{ today | date:'shortTime' }}</a>\n            <p matLine class=\"mat-text-muted\">London</p>\n            <span class=\"mat-h1 mr-1\">\n              <span class=\"pe-is-w-blizzard\"></span>\n            </span>\n            <span class=\"mat-h1\">26°</span>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Todo</h3>\n        <mat-list-item>\n          <a matLine href=\"javascript:;\">Learn Angular 2.0</a>\n          <p matLine class=\"mat-text-muted text-md\">2:45PM</p>\n        </mat-list-item>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">Learn Angular Material</a>\n            <p matLine class=\"mat-text-muted text-md\">3:20PM</p>\n        </mat-list-item>\n        <mat-list-item>\n            <a matLine href=\"javascript:;\">Write documentation</a>\n            <p matLine class=\"mat-text-muted text-md\">6:00PM</p>\n        </mat-list-item>\n        <mat-divider class=\"mt-xs mb-xs\"></mat-divider>\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Stats</h3>\n        <mat-list-item>\n          <p class=\"text-md\" matLine>Local Storage (4023 / 10690)</p>\n          <mat-progress-bar  matLine mode=\"determinate\" color=\"warn\" value=\"40\"></mat-progress-bar>\n        </mat-list-item>\n        <mat-list-item>\n          <p class=\"text-md\" matLine>Cloud Storage (700 / 1030)</p>\n          <mat-progress-bar  matLine mode=\"determinate\" color=\"accent\" value=\"70\"></mat-progress-bar>\n        </mat-list-item>\n        <mat-list-item>\n          <p class=\"text-md\" matLine>Local Storage (20 / 100)</p>\n          <mat-progress-bar  matLine mode=\"determinate\" value=\"20\"></mat-progress-bar>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </mat-tab>\n  <mat-tab>\n    <ng-template matTabLabel>Notifications</ng-template>\n    <div class=\"scroll\">\n      <mat-nav-list>\n        <mat-list-item>\n          <mat-icon mat-list-avatar class=\"mat-text-primary\">people</mat-icon>\n          <h4 matLine>Social</h4>\n          <p matLine>Ligula Purus Adipiscing</p>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar class=\"mat-text-warn\">local_offer</mat-icon>\n          <h4 matLine>Promotions</h4>\n          <p matLine>Etiam Ligula Dapibus</p>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar class=\"mat-text-accent\">info</mat-icon>\n          <h4 matLine>Updates</h4>\n          <p matLine>Sollicitudin Euismod Fringilla</p>\n        </mat-list-item>\n\n        <mat-list-item>\n          <mat-icon mat-list-avatar class=\"mat-indigo\">delete_sweep</mat-icon>\n          <h4 matLine>Removed 6 items from task list</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427207139000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar>check_circle</mat-icon>\n          <h4 matLine>Completed 2 projects</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427412725000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar>notifications_paused</mat-icon>\n          <h4 matLine>Muted notifications</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427546580000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar>person_add</mat-icon>\n          <h4 matLine>Added Joel to contact list</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1428275520000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar>phone_missed</mat-icon>\n          <h4 matLine>Missed live call from Ellie</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1428830580000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n        <mat-list-item>\n          <mat-icon mat-list-avatar>group_add</mat-icon>\n          <h4 matLine>You've been added to HR group</h4>\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1429363920000 | date: 'fullDate' }}</span>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/core/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.today = Date.now();
    }
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/core/notification/notification.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Demo Purposes Only -->\n<button mat-fab color=\"warn\" class=\"mat-fab-bottom-right\" (click)=\"showSettings = true\" style=\"z-index: 9;\">\n  <mat-icon class=\"mat-24\">settings</mat-icon>\n</button>\n<mat-card class=\"settings-panel\" *ngIf=\"showSettings\">\n  <mat-toolbar color=\"warn\">\n    <span fxFlex>Options</span>\n    <button mat-icon-button (click)=\"showSettings = false\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-toolbar>\n  <mat-card-content class=\"demo-checkbox\">\n    <div class=\"pb-1\">\n      <mat-checkbox [(ngModel)]=\"options.collapsed\" (change)=\"sendOptions()\" [align]=\"end\">Collapsed Sidebar</mat-checkbox>\n    </div>\n    <div class=\"pb-1\">\n      <mat-checkbox [(ngModel)]=\"options.compact\" (change)=\"sendOptions()\" [align]=\"end\">Compact Sidebar</mat-checkbox>\n    </div>\n    <div class=\"pb-1\">\n      <mat-checkbox [(ngModel)]=\"options.boxed\" (change)=\"sendOptions()\" [align]=\"end\">Boxed Layout</mat-checkbox>\n    </div>\n    <div class=\"pb-1\">\n      <mat-checkbox [(ngModel)]=\"options.dark\" (change)=\"sendOptions()\" [align]=\"end\">Dark Mode</mat-checkbox>\n    </div>\n    <div class=\"pb-1\">\n      <mat-checkbox (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\" [align]=\"end\">RTL</mat-checkbox>\n    </div>\n    <div class=\"pb-0\">\n      <mat-select placeholder=\"Language\" class=\"mt-1\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\">\n        <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</mat-option>\n      </mat-select>\n   </div>\n  </mat-card-content>\n</mat-card>\n<!-- /Demo Purposes Only -->"

/***/ }),

/***/ "./src/app/core/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.showSettings = false;
        this.options = {
            collapsed: false,
            compact: false,
            boxed: false,
            dark: false,
            dir: 'ltr'
        };
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    OptionsComponent.prototype.sendOptions = function () {
        if (this.options.collapsed === true) {
            this.options.compact = false;
        }
        if (this.options.compact === true) {
            this.options.collapsed = false;
        }
        this.messageEvent.emit(this.options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OptionsComponent.prototype, "messageEvent", void 0);
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-options',
            template: __webpack_require__("./src/app/core/options/options.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/core/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map