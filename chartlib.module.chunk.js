webpackJsonp(["chartlib.module"],{

/***/ "./src/app/chartlib/chartlib.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <!-- bar -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Bar</mat-card-title>\n      <mat-card-subtitle>Basic</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- bar -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Bar</mat-card-title>\n      <mat-card-subtitle>Horizontal</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartHorizontalOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartHorizontalType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- bar -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Bar</mat-card-title>\n      <mat-card-subtitle>Stacked</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartStackedOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- line -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Line</mat-card-title>\n      <mat-card-subtitle>Basic</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"lineChartData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- line -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Line</mat-card-title>\n      <mat-card-subtitle>Stepped</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"lineChartSteppedData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- line -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Line</mat-card-title>\n      <mat-card-subtitle>Points</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"lineChartPointsData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartPointsOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- mixed -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Mixed</mat-card-title>\n      <mat-card-subtitle>Mix different charts</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"ComboChartData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"ComboChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"barChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- bubble -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Bubble</mat-card-title>\n      <mat-card-subtitle>Display three dimensions of data</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"bubbleChartData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"bubbleChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- doughnut -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Doughnut</mat-card-title>\n      <mat-card-subtitle>Pie chart with a cutout</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [data]=\"doughnutChartData\"\n          [labels]=\"doughnutChartLabels\"\n          [options]=\"doughnutOptions\"\n          [colors]=\"doughnutChartColors\"\n          [chartType]=\"doughnutChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- pie -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Pie</mat-card-title>\n      <mat-card-subtitle>Without the cutout</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [data]=\"pieChartData\"\n          [options]=\"doughnutOptions\"\n          [colors]=\"doughnutChartColors\"\n          [labels]=\"pieChartLabels\"\n          [chartType]=\"pieChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- polar -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Polar area</mat-card-title>\n      <mat-card-subtitle>Each segment has the same angle</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [data]=\"polarAreaChartData\"\n          [options]=\"doughnutOptions\"\n          [colors]=\"doughnutChartColors\"\n          [labels]=\"polarAreaChartLabels\"\n          [legend]=\"polarAreaLegend\"\n          [chartType]=\"polarAreaChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- radar -->\n  <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-title>Radar</mat-card-title>\n      <mat-card-subtitle>Multiple data points and the variation between them</mat-card-subtitle>\n      <mat-card-content>\n        <canvas height=\"200\" baseChart class=\"chart\"\n          [datasets]=\"radarChartData\"\n          [options]=\"globalChartOptions\"\n          [colors]=\"lineChartColors\"\n          [labels]=\"radarChartLabels\"\n          [chartType]=\"radarChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chartlib/chartlib.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chartlib/chartlib.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartlibComponent; });
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

var ChartlibComponent = /** @class */ (function () {
    function ChartlibComponent() {
        this.globalChartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        // Bar
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Horizontal Bar Chart
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Bar Chart Stacked
        this.barChartStackedOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.globalChartOptions);
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = Object.assign({
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }, this.globalChartOptions);
        // Line Chart
        this.lineChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        this.lineChartColors = [{
                backgroundColor: '#7986cb',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartSteppedData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }];
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.globalChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        // Combo Chart
        this.ComboChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.ComboChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.ComboChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [{
                data: [65, 59, 90, 81, 56, 55, 40],
                label: 'Series A'
            }, {
                data: [28, 48, 40, 19, 96, 27, 100],
                label: 'Series B'
            }];
        this.radarChartType = 'radar';
    }
    ChartlibComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chartlib',
            template: __webpack_require__("./src/app/chartlib/chartlib.component.html"),
            styles: [__webpack_require__("./src/app/chartlib/chartlib.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartlibComponent);
    return ChartlibComponent;
}());



/***/ }),

/***/ "./src/app/chartlib/chartlib.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartlibModule", function() { return ChartlibModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chartlib_component__ = __webpack_require__("./src/app/chartlib/chartlib.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chartlib_routing__ = __webpack_require__("./src/app/chartlib/chartlib.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChartlibModule = /** @class */ (function () {
    function ChartlibModule() {
    }
    ChartlibModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__chartlib_routing__["a" /* ChartlibRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__chartlib_component__["a" /* ChartlibComponent */]]
        })
    ], ChartlibModule);
    return ChartlibModule;
}());



/***/ }),

/***/ "./src/app/chartlib/chartlib.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartlibRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chartlib_component__ = __webpack_require__("./src/app/chartlib/chartlib.component.ts");

var ChartlibRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__chartlib_component__["a" /* ChartlibComponent */]
    }];


/***/ })

});
//# sourceMappingURL=chartlib.module.chunk.js.map