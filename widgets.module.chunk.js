webpackJsonp(["widgets.module"],{

/***/ "./src/app/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget\">\n      <div mat-card-widget>\n        <button mat-mini-fab color=\"primary\" mat-card-icon class=\"shadow-none\">\n          <mat-icon>local_offer</mat-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h2 mat-card-widget-title>103</h2>\n          <p class=\"mat-text-muted text-md\">Campaigns</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget\">\n      <div mat-card-widget>\n        <button mat-mini-fab disabled=\"\" mat-card-icon class=\"shadow-none\">\n          <mat-icon>phone</mat-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h2 mat-card-widget-title>230</h2>\n          <p class=\"mat-text-muted text-md\">Customers</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget\">\n      <div mat-card-widget>\n        <button mat-mini-fab color=\"warn\" mat-card-icon class=\"shadow-none\">\n          <mat-icon>notifications</mat-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h2 mat-card-widget-title>323</h2>\n          <p class=\"mat-text-muted text-md\">Queries</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget\">\n      <div mat-card-widget>\n        <button mat-mini-fab mat-card-icon class=\"shadow-none\">\n          <mat-icon>email</mat-icon>\n        </button>\n        <div class=\"pl-1 pr-1\">\n          <h2 mat-card-widget-title>870</h2>\n          <p class=\"mat-text-muted text-md\">Opens</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n\n<div fxLayout=\"row wrap\">\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget mat-teal\">\n      <div mat-card-widget>\n        <div mat-card-float-icon>\n          <mat-icon>local_offer</mat-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h2 mat-card-widget-title>103</h2>\n          <p>Campaigns</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget mat-purple\">\n      <div mat-card-widget>\n        <div mat-card-float-icon>\n          <mat-icon>phone</mat-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h2 mat-card-widget-title>230</h2>\n          <p>Customers</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget mat-red\">\n      <div mat-card-widget>\n        <div mat-card-float-icon>\n          <mat-icon>notifications</mat-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h2 mat-card-widget-title>323</h2>\n          <p>Queries</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card class=\"card-widget mat-indigo\">\n      <div mat-card-widget>\n        <div mat-card-float-icon>\n          <mat-icon>email</mat-icon>\n        </div>\n        <div class=\"pl-0\">\n          <h2 mat-card-widget-title>870</h2>\n          <p>Opens</p>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n\n<div fxLayout=\"row wrap\">\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Newsfeed</mat-card-title>\n      <mat-card-subtitle>Stories posted today</mat-card-subtitle>\n      <hr>\n      <mat-list>\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n          <mat-list-item>\n            <img mat-list-avatar src=\"{{item.photo}}\" alt=\"\">\n            <h3 matLine> {{item.from}} </h3>\n            <p matLine> {{item.subject}} - {{item.message}} </p>\n          </mat-list-item>\n        </ng-template>\n      </mat-list>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <div class=\"card-image-header\" style=\"background-image: url(assets/images/unsplash/1.jpg); height: 213px;\"></div>\n      <mat-card-content class=\"text-xs-center\">\n        <div fxLayout=\"row wrap\" class=\"text-uppercase\">\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">24</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Comments</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">45</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Likes</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">984</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Shares</p>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-content class=\"text-xs-center\">\n        <div fxLayout=\"row\"  fxLayoutAlign=\"center center\" class=\"mt-1\">\n          <div fxFlex>\n            <button mat-icon-button>\n              <mat-icon>email</mat-icon>\n            </button>\n          </div>\n          <div fxFlex>\n            <img src=\"assets/images/face1.jpg\" class=\"radius-circle\">\n          </div>\n          <div fxFlex>\n            <button mat-icon-button>\n              <mat-icon>phone</mat-icon>\n            </button>\n          </div>\n        </div>\n        <p class=\"mb-1\">\n          <a href=\"\" class=\"block text-lg\">Michael Obrien</a>\n          <span class=\"mat-text-muted\">London, UK</span>\n        </p>\n\n        <div fxLayout=\"row wrap\" class=\"mt-1 text-uppercase\">\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">89</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Photos</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">354</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Followers</p>\n          </div>\n          <div fxFlex=\"33.33%\">\n            <h2 class=\"mt-0 mb-0\">945</h2>\n            <p class=\"mt-0 mb-0 text-md mat-text-muted\">Following</p>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<div fxLayout=\"row wrap\">\n  <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <div fxLayout=\"column wrap\">\n      <div fxFlex>\n        <mat-card>\n          <mat-card-header>\n            <img matCardAvatar src=\"assets/images/avatar.jpg\">\n            <mat-card-subtitle>24 Mins ago</mat-card-subtitle>\n            <mat-card-title>Gerald Morris</mat-card-title>\n          </mat-card-header>\n          <agm-map mat-card-image [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"></agm-map>\n        </mat-card>\n      </div>\n      <div fxFlex>\n        <mat-card>\n          <mat-card-content class=\"pb-0\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n              <div fxFlex>\n                <h1 class=\"mt-0 mb-0\">London, UK</h1>\n                <h2 class=\"mt-0 mb-0\">Saturday 2:00 AM</h2>\n                <p class=\"mat-text-muted mt-0 mb-0\">Mostly Sunny</p>\n              </div>\n              <span fxFlex></span>\n              <div fxFlex class=\"text-xs-right\">\n                <h1 class=\"text-xxl mt-0 mb-0\">\n                  <span class=\"pe-is-w-moon-sea mat-text-accent\"></span>\n                  <span>6<sup></sup></span>\n                </h1>\n              </div>\n            </div>\n            <div fxLayout=\"row\" layout-align=\"center\" class=\"mb-2 text-md\">\n              <div class=\"pr-1\" fxFlex>\n                <div fxLayout=\"row\">\n                  <span>Pressure</span>\n                  <span fxFlex></span>\n                  <span>30.09</span>\n                  <span>hPa</span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Visibility</span>\n                  <span fxFlex></span>\n                  <span>11.27</span>\n                  <span>km</span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Light</span>\n                  <span fxFlex></span>\n                  <span>0.00</span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Light</span>\n                  <span fxFlex></span>\n                  <span>16</span>\n                  <span>C</span>\n                </div>\n              </div>\n              <div class=\"pl-1\" fxFlex>\n                <div fxLayout=\"row\">\n                  <span>Humidity</span>\n                  <span fxFlex></span>\n                  <span>94</span>\n                  <span>%</span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Precp.</span>\n                  <span fxFlex></span>\n                  <span></span>\n                  <span>mm</span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Snow Depth</span>\n                  <span fxFlex></span>\n                  <span></span>\n                </div>\n\n                <div fxLayout=\"row\">\n                  <span>Wind Gust</span>\n                  <span fxFlex></span>\n                  <span></span>\n                </div>\n              </div>\n            </div>\n          </mat-card-content>\n          <mat-card-content class=\"mat-indigo\">\n            <div fxLayout=\"row\" class=\"text-xs-center\">\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\n                <div class=\"text-md\">MON</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-blizzard\"></i></h1>\n                <strong class=\"degree-value\">10</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\n                <div class=\"text-md\">TUE</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-eclipse-1\"></i></h1>\n                <strong class=\"degree-value\">8</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>call_made</mat-icon></div>\n                <div class=\"text-md\">WED</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-fog-3\"></i></h1>\n                <strong class=\"degree-value\">6</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>arrow_upward</mat-icon></div>\n                <div class=\"text-md\">THU</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-hail-day-2\"></i></h1>\n                <strong class=\"degree-value\">6</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\n                <div class=\"text-md\">FRI</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-mix-rainfall-1\"></i></h1>\n                <strong class=\"degree-value\">9</strong>\n              </div>\n              <div fxFlex>\n                <div class=\"text-md\">6 km/h</div>\n                <div class=\"text-md pb-xs\"><mat-icon>arrow_forward</mat-icon></div>\n                <div class=\"text-md\">SAT</div>\n                <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-moon-sea\"></i></h1>\n                <strong class=\"degree-value\">8</strong>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n    <div fxLayout=\"column wrap\">\n      <div>\n        <mat-card>\n          <mat-card-header>\n            <img matCardAvatar src=\"assets/images/avatar.jpg\">\n            <mat-card-subtitle>Yesterday</mat-card-subtitle>\n            <mat-card-title>Gerald Morris</mat-card-title>\n          </mat-card-header>\n          <img mat-card-image src=\"assets/images/unsplash/22.jpg\">\n          <mat-card-content>\n            <button mat-fab mat-fab-card-float class=\"mr-1\" color=\"warn\"><mat-icon>share</mat-icon></button>\n            <p class=\"ma-0\">Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp.</p>\n          </mat-card-content>\n          <hr>\n          <mat-card-actions>\n            <div fxLayout=\"row\">\n              <button mat-icon-button>\n                <mat-icon>share</mat-icon>\n              </button>\n              <button mat-icon-button>\n                <mat-icon>favorite</mat-icon>\n              </button>\n              <span fxFlex></span>\n              <button mat-button>More info</button>\n              <button mat-button>Download</button>\n            </div>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div>\n        <div fxLayout=\"row wrap\">\n          <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n            <mat-card>\n              <mat-card-title fxLayout=\"row\">\n                <span>Fashion</span>\n                <span fxFlex></span>\n                <span class=\"mat-text-primary\">$83.00</span>\n              </mat-card-title>\n              <div class=\"card-image-header\" style=\"background-image: url(assets/images/unsplash/21.jpg); height: 290px;\"></div>\n              <mat-card-actions>\n                <div fxLayout=\"row\">\n                  <button mat-icon-button>\n                    <mat-icon>share</mat-icon>\n                  </button>\n                  <button mat-icon-button>\n                    <mat-icon>favorite</mat-icon>\n                  </button>\n                  <span fxFlex></span>\n                  <button mat-raised-button color=\"warn\">Add to cart</button>\n                </div>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n          <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n            <mat-card>\n              <mat-card-title class=\"text-xs-center\">4.30TB</mat-card-title>\n              <mat-card-subtitle class=\"text-xs-center\">Storage Space</mat-card-subtitle>\n              <mat-card-content>\n                <canvas height=\"220\" baseChart\n                    [data]=\"pieChartData\"\n                    [options]=\"pieOptions\"\n                    [colors]=\"pieChartColors\"\n                   [labels]=\"pieChartLabels\"\n                   [chartType]=\"pieChartType\"></canvas>\n              </mat-card-content>\n              <mat-card-content>\n                <div fxLayout=\"row\">\n                  <div fxFlex class=\"pr-xs pl-xs text-xs-right\">\n                    <h5 class=\"ma-0\">Used Space</h5>\n                    <h3 class=\"ma-0\">1.92TB</h3>\n                    <span>30%</span>\n                  </div>\n                  <div fxFlex class=\"pl-xs pr-xs\">\n                    <h5 class=\"ma-0\">Free Space</h5>\n                    <h3 class=\"ma-0\">3.23TB</h3>\n                    <span>30%</span>\n                  </div>\n                </div>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets/widgets.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .sebm-google-map-container {\n  width: 100%;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
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

var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 11;
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
            }];
        // Doughnut
        this.pieChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.pieOptions = Object.assign({
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        });
        this.pieChartLabels = ['Used', 'Free'];
        this.pieChartData = [400, 500];
        this.pieChartType = 'pie';
    }
    WidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widgets',
            template: __webpack_require__("./src/app/widgets/widgets.component.html"),
            styles: [__webpack_require__("./src/app/widgets/widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_component__ = __webpack_require__("./src/app/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widgets_routing__ = __webpack_require__("./src/app/widgets/widgets.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__widgets_routing__["a" /* WidgetsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__widgets_component__["a" /* WidgetsComponent */]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_component__ = __webpack_require__("./src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__widgets_component__["a" /* WidgetsComponent */]
    }];


/***/ })

});
//# sourceMappingURL=widgets.module.chunk.js.map