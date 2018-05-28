webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var slideAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0, position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translate3d(0%,0,0)' })),
]);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n<!--\n<script>\nfunction update_radio(){\n            var checked = document.getElementById(\"location_radio\").checked;\n            console.log(\"checked: \" + checked);\n            if (checked == 1){\n                document.getElementById(\"radio_text\").disabled = false;\n                document.getElementById(\"radio_text\").required = true;\n                document.getElementById(\"radio_text\").focus();\n            }\n            else {\n                document.getElementById(\"radio_text\").disabled = true;\n                document.getElementById(\"radio_text\").required = false;\n            }\n            \n        }\n\n</script>\n-->\n<div class=\"container\">\n  <div class=\"container mx-auto mt-3 border rounded bg-light\" id=\"main_box\" style=\"border-color:gainsboro\">\n      <div class=\"container col-9\">\n      <h1 class=\"h4 text-dark text-center\">Travel and Entertainment Search</h1>\n      <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit(form.value)\">\n            <div class=\"form-group row\">\n              <label class=\"form-control-label col-sm-3\">Keyword</label> \n                <div class=\"col-sm-9\">\n                  <input formControlName=\"keyword\" class=\"form-control\" id=\"keyword\" type=\"text\" name=\"keyword\" required>\n                    <div class=\"invalid-feedback\">\n                        Please enter a keyword.\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"form-control-label col-sm-3\">Category</label>\n                <div class=\"col-sm-6\">\n                  <select formControlName=\"category\" class=\"form-control \" id=\"category\" name=\"category\">\n                    <option value=\"default\" checked>default</option>\n                    <option value=\"airport\">airport</option>\n                    <option value=\"amusement park\">amusement park</option>\n                    <option value=\"aquarium\">aquarium</option>\n                    <option value=\"art gallery\">art gallery</option>\n                    <option value=\"bar\">bar</option>\n                    <option value=\"bowling alley\">bowling alley</option>\n                    <option value=\"bus station\">bus station</option>\n                    <option value=\"campground\">campground</option>\n                    <option value=\"car rental\">car rental</option>\n                    <option value=\"museum\">museum</option>\n                    <option value=\"night club\">night club</option>\n                    <option value=\"park\">park</option>\n                    <option value=\"parking\">parking</option>\n                    <option value=\"shopping mall\">shopping mall</option>\n                    <option value=\"stadium\">stadium</option>\n                    <option value=\"taxi stand\">taxi stand</option>\n                    <option value=\"cafe\">cafe</option>\n                    <option value=\"travel agency\">travel agency</option>\n                    <option value=\"zoo\">zoo</option>\n                    <option value=\"bakery\">bakery</option>\n                    <option value=\"restaurant\">restaurant</option>\n                    <option value=\"beauty salon\">beauty salon</option>\n                    <option value=\"casino\">casino</option>\n                    <option value=\"movie theater\">movie theater</option>\n                    <option value=\"lodging\">lodging</option>\n                    <option value=\"airport\">airport</option>\n                    <option value=\"train station\">train station</option>\n                    <option value=\"subway station\">subway station</option>\n                    <option value=\"bus station\">bus station</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"form-control-label col-sm-3\">Distance(miles)</label>\n                <div class=\"col-sm-6\">\n                    <input formControlName=\"distance\" class=\"form-control\" id=\"distance\" type=\"number\" name=\"distance\" placeholder=\"10\" min=\"1\" value=\"10\">\n                    <div class=\"invalid-feedback\">\n                        Distance must be greater than 0.\n                    </div>\n                </div>\n            </div>\n          \n            <div class=\"form-group row\">\n<!--                <div class=\"row\">-->\n                    <label class=\"form-control-label col-sm-3\">From</label>\n                    <div class=\"col-sm-9\">\n                        <div class=\"form-check\">        \n                            <input formControlName=\"location\" [value]=\"location\" id=\"here_radio\" (click)=localClick(1) class=\"form-check-input\" type=\"radio\" name=\"location\" [checked]=\"true\">\n                            <label class=\"form-check-label\">&nbsp;&nbsp;&nbsp;&nbsp;Current Location</label>\n                        </div>\n                        <div class=\"form-check\">\n                            <input formControlName=\"location\" value=\"text\" id=\"location_radio\" (click)=localClick(2) class=\"form-check-input\" type=\"radio\" name=\"location\"> \n                            <label class=\"form-check-label\">&nbsp;&nbsp;&nbsp;&nbsp;Other. Please Specify:</label>\n                            <div class=\"col-sm-\">\n                                <input formControlName=\"location_text\" class=\"form-control\" id=\"radio_text\" type=\"text\" name=\"location_text\" placeholder=\"location\">\n                                <div class=\"invalid-feedback\">\n                                    Please enter a location.\n                                </div>\n                            </div>\n                        </div>\n<!--                    </div>-->\n                </div><!--formgroup-->\n            </div>\n          <br>\n          <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" id=\"submit\" type=\"submit\" value=\"Search\" name=\"submit\"><span class=\"glyphicon glyphicon-search\"></span>Search</button>\n          <button class=\"btn btn-default  btn-outline-secondary\" type=\"button\" (click)=\"onClear()\" value=\"Clear\" name=\"submit\">Clear</button>\n      </form>\n    </div>\n    <div *ngIf=\"showLoad\" class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n    </div>\n  </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">Failed to get search results</div>\n    <div class=\"page\" [@routerAnimations]=\"prepareRouteTransition(outlet)\">\n<!--      <a routerLink=\"/details\"><button class=\"btn btn-default  btn-outline-secondary\">details</button></a>-->\n        <router-outlet #outlet=\"outlet\">\n<!--            <results [results]=\"result\" [(currentPage)]=\"startPage\"></results>-->\n        </router-outlet>\n<!--    </div>-->\n    \n<!--  <results [results]=\"result\" [(currentPage)]=\"startPage\"></results>-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations__ = __webpack_require__("./src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("./src/app/data.service.ts");
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
    function AppComponent(locationRequest, router, data, ngZone, mapsAPILoader) {
        this.locationRequest = locationRequest;
        this.router = router;
        this.data = data;
        this.ngZone = ngZone;
        this.mapsAPILoader = mapsAPILoader;
        this.title = 'app';
        this.requestCnt = 0;
        this.showLoad = false;
        this.error = false;
    }
    AppComponent.prototype.prepareRouteTransition = function (outlet) {
        var animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    };
    //    resetStart(){
    //        this.startPage = -1;
    //    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            keyword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(new RegExp('[^\\s]+')),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('default'),
            distance: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('10', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', this.gpsValidator),
            location_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(new RegExp('[^\\s]+')),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]))
        });
        //        this.form.controls['location'].valueChanges.subscribe((value) => {
        //                console.log('detected change')
        //               this.form.controls['location'].validator(this.form.controls['location']);
        //            }
        //        );
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("radio_text"), { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
        this.showRequest();
    };
    AppComponent.prototype.onSubmit = function (form_data) {
        var _this = this;
        //        console.log(form_data);
        //        console.log(this.r);
        //        this.result = this.r.getResults(this.result);
        this.showLoad = true;
        console.log('printing results:');
        console.log(this.result);
        //this.test();
        //        this.resetStart();
        //some weird bug where i have to first change startPage then change it to zero
        //        this.result="dfd";
        console.log(form_data);
        //this.locationRequest.getRequest("http://ip-api.com/json", form_data)
        //        this.locationRequest.getRequest("http://localhost:3000/api", form_data)
        this.locationRequest.getRequest("/api", form_data)
            .subscribe(function (data) {
            _this.error = false;
            console.log(data);
            _this.result = data;
            _this.data.results = data;
            //this.startPage =0;
            //this.result = data["hi"];
            console.log('printing results after fetch');
            console.log(_this.data.results);
            _this.showLoad = false;
            //the params must be different in order to reload page so i keep counter
            _this.router.navigate(['/results', { 'requestCnt': _this.requestCnt++ }]);
        });
        (function (err) {
            _this.error = true;
        });
    };
    AppComponent.prototype.onClear = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            keyword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(new RegExp('[^\\s]+')),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('default'),
            distance: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('10', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', this.gpsValidator),
            location_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(new RegExp('[^\\s]+')),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]))
        });
        this.router.navigate(['']);
    };
    AppComponent.prototype.showRequest = function () {
        var _this = this;
        this.locationRequest.getRequest("http://extreme-ip-lookup.com/json/", {})
            .subscribe(function (data) {
            console.log(data['lat']);
            _this.location = data['lat'] + "," + data['lon'];
            console.log(_this.form.controls);
            _this.form.controls['location'].value = _this.location;
            _this.form.controls['location'].validator(_this.form.controls['location']);
            _this.form.controls['location'].status = "VALID";
            console.log(_this.form);
            //this.location = data['lat'] +"," + data['lon'];
            // $(document).ready(()=>{
            //      $("#here_radio").attr("value", this.location.lat + "," + this.location.lon);
            //    $("#here_radio").attr("ng-reflect-value", this.location.lat + "," + this.location.lon);
            //  });
        });
    };
    AppComponent.prototype.localClick = function (x) {
        console.log(this.form);
        if (x == 1) {
            this.form.controls.location_text.disable();
        }
        else {
            this.form.controls.location_text.enable();
        }
    };
    AppComponent.prototype.gpsValidator = function (control) {
        console.log("value:" + control.value);
        console.log(control.value == '');
        if (control.value == '' || control.value === undefined) {
            return { 'location': true };
        }
        return null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["l" /* trigger */])('routerAnimations', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* transition */])('results => details', __WEBPACK_IMPORTED_MODULE_5__animations__["a" /* slideAnimation */]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* transition */])('details => results', __WEBPACK_IMPORTED_MODULE_5__animations__["a" /* slideAnimation */])
                ])
            ]
        })
        //@ViewChild('search') public searchElement: ElementRef;
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["MapsAPILoader"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_rating__ = __webpack_require__("./node_modules/ngx-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__results_component__ = __webpack_require__("./src/app/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__details_component__ = __webpack_require__("./src/app/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blank_component__ = __webpack_require__("./src/app/blank-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__details_info_component__ = __webpack_require__("./src/app/details-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__details_photos_component__ = __webpack_require__("./src/app/details-photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__details_reviews_component__ = __webpack_require__("./src/app/details-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__details_map_component__ = __webpack_require__("./src/app/details-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_agm_direction__ = __webpack_require__("./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_agm_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_agm_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__details_service__ = __webpack_require__("./src/app/details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var animationRoutes = [
    {
        path: 'results',
        component: __WEBPACK_IMPORTED_MODULE_10__results_component__["a" /* ResultsComponent */],
        data: {
            animation: {
                value: 'results'
            }
        }
    },
    {
        path: 'details',
        component: __WEBPACK_IMPORTED_MODULE_11__details_component__["a" /* DetailsComponent */],
        data: {
            animation: {
                value: 'details'
            }
        },
        children: [
            { path: 'info', component: __WEBPACK_IMPORTED_MODULE_13__details_info_component__["a" /* DetailsInfoComponent */], outlet: 'details-router' },
            { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_14__details_photos_component__["a" /* DetailsPhotosComponent */], outlet: 'details-router' },
            { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_15__details_reviews_component__["a" /* DetailsReviewsComponent */], outlet: 'details-router' },
            { path: 'map', component: __WEBPACK_IMPORTED_MODULE_16__details_map_component__["a" /* DetailsMapComponent */], outlet: 'details-router' },
            { path: '', redirectTo: '/details/(details-router:info)', pathMatch: 'full' }
        ]
        //        
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__blank_component__["a" /* BlankComponent */],
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__blank_component__["a" /* BlankComponent */],
                __WEBPACK_IMPORTED_MODULE_13__details_info_component__["a" /* DetailsInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__details_photos_component__["a" /* DetailsPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_15__details_reviews_component__["a" /* DetailsReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__details_map_component__["a" /* DetailsMapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(animationRoutes),
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB4LVIeRNaoWHhIsUN6Otyq9fjEbBM37gU',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_17_agm_direction__["AgmDirectionModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_rating__["RatingModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_18__data_service__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_19__details_service__["a" /* DetailsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blank-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blank-component',
            template: '<div></div>'
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
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

var Data = /** @class */ (function () {
    function Data() {
    }
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/details-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table table-striped\">\n        <tr *ngIf=\"info.address\"><td class=\"font-weight-bold\"><strong>Address</strong></td> <td>{{info['address']}}</td></tr>\n        <tr *ngIf=\"info.phone\"><td class=\"font-weight-bold\"><strong>Phone Number</strong></td> <td>{{info['phone']}}</td></tr>\n        <tr *ngIf=\"info.price_level\"><td class=\"font-weight-bold\"><strong>Price Level</strong></td> <td>{{info['price_level']}}</td></tr>\n<!--        <tr *ngIf=\"info.rating\"><td class=\"font-weight-bold\"><strong>Rating</strong></td> <td>{{info['rating']}}<span id='stars'></span></td></tr>-->\n        <tr *ngIf=\"info.rating\"><td class=\"font-weight-bold\"><strong>Rating</strong></td> <td>{{info['rating']}}<rating [ngModel]=\"this.info['rating']\" [readonly]=\"true\"></rating></td></tr>\n        <tr *ngIf=\"info.url\"><td class=\"font-weight-bold\"><strong>Google Page</strong></td> <td><a href=\"{{info['url']}}\" target=\"_blank\">{{info['url']}}</a></td></tr>\n        <tr *ngIf=\"info.website\"><td class=\"font-weight-bold\"><strong>Website</strong></td> <td><a href=\"{{info['website']}}\" target=\"_blank\">{{info['website']}}</a></td></tr>\n        <tr *ngIf=\"info.hours\"><td class=\"font-weight-bold\"><strong>Hours</strong></td> <td>{{info['hours']['message']}}      <a data-toggle=\"modal\" data-target=\"#hoursModal\" onMouseOver=\"this.style.cursor='pointer'\">   Daily Open Hours</a></td></tr>\n    </table>\n</div>\n\n<div *ngIf='info.hours' class=\"modal fade\" id=\"hoursModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"hoursModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"hoursModalLabel\">Open Hours</h5>\n        <span><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button></span>\n      </div>\n      <div class=\"modal-body\">\n        <table class='table'>\n            <tr *ngFor='let row of info.hours.list'>\n                <!-- a horrible way to impliment day bolding-->\n                <td *ngIf=\"row.split(': ', 2)[0] === info.hours.dayName\" style='font-weight: bold'>{{row.split(': ', 2)[0]}}</td>\n                <td *ngIf=\"row.split(': ', 2)[0] !== info.hours.dayName\">{{row.split(': ', 2)[0]}}</td>\n                \n                <td *ngIf=\"row.split(': ', 2)[0] === info.hours.dayName\" style='font-weight: bold'>{{row.split(': ', 2)[1]}}</td>\n                <td *ngIf=\"row.split(': ', 2)[0] !== info.hours.dayName\">{{row.split(': ', 2)[1]}}</td>\n\n            </tr>  \n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/details-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("./src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsInfoComponent = /** @class */ (function () {
    function DetailsInfoComponent(ds) {
        this.ds = ds;
        this.info = {};
    }
    ;
    DetailsInfoComponent.prototype.ngOnInit = function () {
        console.log('details info initiated');
        //    this.subscription = this.ds.infoEmit
        //      .subscribe(newInfo => {
        //        this.info=newInfo;
        //        console.log('receiving new info');
        //        console.log(this.info);
        //    });
        //        this.subscription = this.route.params.subscribe(params => {
        //            console.log("printing new info");
        //            console.log(params);
        //            //this.results = JSON.parse(params['r']);
        //            //this.currentPage = params['pageNum'];
        //            this.info = params;
        //        });
        this.info['address'] = this.ds.details['formatted_address'];
        this.info['phone'] = this.ds.details['formatted_phone_number'];
        this.info['price_level'] = '$'.repeat(this.ds.details['price_level']);
        this.info['rating'] = this.ds.details['rating'];
        this.info['url'] = this.ds.details['url'];
        this.info['website'] = this.ds.details['website'];
        this.info['hours'] = this.formatHours(this.ds.details['opening_hours']);
    };
    DetailsInfoComponent.prototype.ngAfterViewInit = function () {
        //add the rating stars
        //        if(this.info.rating){
        //            $('#stars').html('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'.repeat(Math.round(this.info.rating)));
        //        }
        if (this.info.rating) {
            var text = '<i class="fa fa-star" aria-hidden="true" style="color: gold;"</i>'.repeat(Math.round(this.info.rating));
            //            if (this.info.rating % 1 > 0){
            //                text = text + '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>';
            //            }
            console.log(text);
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#stars').html(text);
        }
    };
    DetailsInfoComponent.prototype.formatHours = function (hoursObj) {
        var day = (new Date().getDay() + 6) % 7;
        if (hoursObj['open_now']) {
            return { message: 'Open now:' + hoursObj['weekday_text'][day].split(': ', 2)[1], list: hoursObj['weekday_text'], dayName: hoursObj['weekday_text'][day].split(': ', 2)[0] };
        }
        else {
            return { message: 'Closed', list: hoursObj['weekday_text'], dayName: hoursObj['weekday_text'][day].split(': ', 2)[0] };
        }
    };
    DetailsInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'details-info',
            template: __webpack_require__("./src/app/details-info.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */]])
    ], DetailsInfoComponent);
    return DetailsInfoComponent;
}());



/***/ }),

/***/ "./src/app/details-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    \n    <div class=\"form-group\">\n      <div class=\"form-row\">\n        <div class=\"col-12 col-sm\">\n          <label for=\"fromMapInput\">From</label>\n          <input id=\"fromMapInput\" placeholder=\"My location\" class=\"form-control\" autocomplete=\"on\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"col-12 col-sm\">\n          <label for=\"toMapInput\">To</label>\n            <input id =\"toMapInput\" [placeholder]=\"ds.details.formatted_address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control font-weight-bold\" readonly>\n        </div>\n        <div class=\"col-12 col-sm\">\n          <label for=\"modeMapInput\">Travel Mode</label>\n          <select class=\"form-control \" id=\"modeMapInput\" name=\"category\">\n                    <option value=\"DRIVING\" checked>Driving</option>\n                    <option value=\"BICYCLING\">Biking</option>\n                    <option value=\"TRANSIT\">Transit</option>\n                    <option value=\"WALKING\">Walking</option>\n          </select>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getDirections()\">Get Directions</button>\n      </div>\n    </div>\n    <button class=\"btn btn-outline-dark\" (click)='switchStreet()'><img [src]='streetButton' width='30px'></button>\n    \n<agm-map id='map' [latitude]=\"latPlace\" [longitude]=\"lngPlace\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height: 300px;\">\n        <agm-marker [latitude]=\"latPlace\" [longitude]=\"lngPlace\"></agm-marker>\n        <agm-direction *ngIf=\"dir\" [origin]=\"dir.origin\" [destination]=\"dir.destination\" [travelMode]=\"dir.travelMode\" [panel]=\"panel\" [provideRouteAlternatives]='true'></agm-direction>\n</agm-map>\n\n<div #panel ></div>\n    \n</div>"

/***/ }),

/***/ "./src/app/details-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("./src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsMapComponent = /** @class */ (function () {
    function DetailsMapComponent(ds, mapsAPILoader, locationRequest, ngZone) {
        this.ds = ds;
        this.mapsAPILoader = mapsAPILoader;
        this.locationRequest = locationRequest;
        this.ngZone = ngZone;
        this.zoom = 7;
        this.dir = undefined;
        this.streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Pegman.png";
    }
    DetailsMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latPlace = this.ds.details.geometry.location.lat();
        this.lngPlace = this.ds.details.geometry.location.lng();
        this.getLoc();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("fromMapInput"), { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
        this.mapsAPILoader.load().then(function () {
            var map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: _this.latPlace, lng: _this.lngPlace },
                zoom: 18,
                streetViewControl: false
            });
            _this.panorama = map.getStreetView();
            _this.panorama.setPosition({ lat: _this.latPlace, lng: _this.lngPlace });
            console.log('panorama');
            console.log(_this.panorama.getVisible());
            _this.panorama.setPov(({
                heading: 265,
                pitch: 0
            }));
            //this.panorama.setVisible(true);
            console.log(_this.panorama.getVisible());
        });
    };
    DetailsMapComponent.prototype.switchStreet = function () {
        var toggle = this.panorama.getVisible();
        if (toggle == false) {
            this.streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Pegman.png";
            this.panorama.setVisible(true);
        }
        else {
            this.streetButton = "http://cs-server.usc.edu:45678/hw/hw8/images/Map.png";
            this.panorama.setVisible(false);
        }
    };
    DetailsMapComponent.prototype.getDirections = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_4_jquery__('input#fromMapInput').val());
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__('input#fromMapInput').val() != "") {
            //var origin = this.getLatLng($('input#fromMapInput').val());
            var origin = __WEBPACK_IMPORTED_MODULE_4_jquery__('input#fromMapInput').val();
        }
        else {
            var origin = { lat: this.latMe, lng: this.lngMe };
        }
        console.log('origin');
        console.log(origin);
        this.dir = {
            origin: origin,
            destination: { lat: this.latPlace, lng: this.lngPlace },
            travelMode: __WEBPACK_IMPORTED_MODULE_4_jquery__('#modeMapInput').val(),
            provideRouteAlternatives: true
        };
        console.log(this.dir);
    };
    //    getLatLng(address): any{
    //        this.locationRequest.getRequest("http://localhost:3000/", {address: address})
    //            .subscribe(data => {
    //            console.log(data);
    //            return data;
    //        });
    //    }
    DetailsMapComponent.prototype.getLoc = function () {
        var _this = this;
        this.locationRequest.getRequest("https://ipapi.co/8.8.8.8/json/", {})
            .subscribe(function (data) {
            console.log(data['latitude']);
            _this.latMe = data['latitude'];
            _this.lngMe = data['longitude'];
            //this.location = data['lat'] +"," + data['lon'];
            // $(document).ready(()=>{
            //      $("#here_radio").attr("value", this.location.lat + "," + this.location.lon);
            //    $("#here_radio").attr("ng-reflect-value", this.location.lat + "," + this.location.lon);
            //  });
        });
    };
    DetailsMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'details-map',
            template: __webpack_require__("./src/app/details-map.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["MapsAPILoader"],
            __WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], DetailsMapComponent);
    return DetailsMapComponent;
}());



/***/ }),

/***/ "./src/app/details-photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!photosUrls\" class=\"alert alert-warning\" role=\"alert\">No photos were found</div>\n<div class=\"row\">\n    <div id='col0' class=\"col-12 col-sm-3\">\n<!--        <img  *ngFor='let indexNum of numsArray[0]' src=\"{{photosUrls[0]}}\" width='100%'>-->\n    </div>\n    <div id='col1' class=\"col-12 col-sm-3\">\n<!--        <img  *ngFor='let indexNum of numsArray[1]' src = \"{{photosUrls[0]}}\" width='100%'>-->\n    </div>\n    <div id='col2' class=\"col-12 col-sm-3\">\n<!--        <img  *ngFor='let indexNum of numsArray[2]' src = \"{{photosUrls[0]}}\" width='100%'>-->\n    </div>\n    <div id='col3' class=\"col-12 col-sm-3\">\n<!--        <img  *ngFor='let indexNum of numsArray[3]' src = \"{{photosUrls[0]}}\" width='100%'>-->\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/details-photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("./src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPhotosComponent = /** @class */ (function () {
    function DetailsPhotosComponent(ds) {
        this.ds = ds;
        this.numsArray = {};
    }
    DetailsPhotosComponent.prototype.ngOnInit = function () {
        if (this.ds.details.photos) {
            this.photosUrls = this.ds.details.photos.map(function (value, i, arr) {
                return { full: value.getUrl({ 'maxWidth': value.width }), small: value.getUrl({ 'maxWidth': 500 }) };
            });
            this.numsArray = { 0: this.buildNums(0), 1: this.buildNums(1), 2: this.buildNums(2), 3: this.buildNums(3) };
            this.addImages();
        }
        console.log('in photos component printing photos array');
        console.log(this.photosUrls);
        console.log(this.numsArray);
    };
    DetailsPhotosComponent.prototype.buildNums = function (index) {
        var array = [];
        if (this.photosUrls) {
            for (var i = 0; i < this.photosUrls.length; i++) {
                if (i % 4 == index)
                    array.push(i);
            }
        }
        console.log('printing array');
        console.log(array);
        return array;
    };
    DetailsPhotosComponent.prototype.addImages = function () {
        for (var i = 0; i <= 3; i++) {
            console.log(this.numsArray[i]);
            for (var _i = 0, _a = this.numsArray[i]; _i < _a.length; _i++) {
                var j = _a[_i];
                console.log(j);
                console.log(this.photosUrls[j]);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#col' + i).append("<a target='_blank' href=" + this.photosUrls[j].full + " ><img src =" + this.photosUrls[j].small + " width='100%' class='img-thumbnail'/></a>");
            }
        }
    };
    DetailsPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'details-photos',
            template: __webpack_require__("./src/app/details-photos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */]])
    ], DetailsPhotosComponent);
    return DetailsPhotosComponent;
}());



/***/ }),

/***/ "./src/app/details-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{selectedReviews}}\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" (click)='getGoogleReviews();'>Google Reviews</a>\n        <a class=\"dropdown-item\" (click)='getYelpReviews();'>Yelp Reviews</a>\n      </div>\n     </div>\n    <div class=\"btn-group\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"sortByButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{selectedOrder}}\n        </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"sortByButton\">\n        <a class=\"dropdown-item\" (click)='sortBy(\"Default Order\");'>Default Order</a>\n        <a class=\"dropdown-item\" (click)='sortBy(\"Highest Rating\");'>Highest Rating</a>\n        <a class=\"dropdown-item\" (click)='sortBy(\"Lowest Rating\");'>Lowest Rating</a>\n        <a class=\"dropdown-item\" (click)='sortBy(\"Most Recent\");'>Most Recent</a>\n        <a class=\"dropdown-item\" (click)='sortBy(\"Least Recent\");'>Least Recent</a>\n      </div>\n    </div>\n    \n    <div *ngIf=\"getIfError()\" class=\"alert alert-warning\" role=\"alert\">No reviews were found</div>\n    <div [@fadeInOutTranslate]=\"selectedReviews\" class=\"container\">\n        <ul *ngFor=\"let review of shownReviews\" class=\"container border py-2 my-2\">\n                <div width=\"50px\"><a class=\"float-left\" href=\"{{review['author_url']}}\" target=\"_blank\"><img class=\"img-circle\" width=\"50px\" src=\"{{review['profile_photo_url']}}\"></a></div>\n            \n            <p style=\"overflow: hidden; padding-left: 10px\">\n                <a href=\"{{review['author_url']}}\" target=\"_blank\">{{review['author_name']}}</a>\n                <br/><rating [(ngModel)]=\"review['rating']\" [readonly]=\"true\"></rating> {{review['time']}}\n                <br/>{{review['text']}}\n            </p>\n        </ul>\n    \n    </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/details-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("./src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsReviewsComponent = /** @class */ (function () {
    function DetailsReviewsComponent(ds, locationRequest) {
        this.ds = ds;
        this.locationRequest = locationRequest;
        this.googleReviews = {};
        this.yelpReviews = {};
        this.shownReviews = [];
        this.selectedReviews = "Google Reviews";
        this.selectedOrder = "Default Order";
        this.state = 'show';
    }
    DetailsReviewsComponent.prototype.ngOnInit = function () {
        console.log('started reviews component');
        this.googleReviews = this.ds.details['reviews'];
        //check if date has been fixed
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__["isNumeric"](this.googleReviews[0].time)) {
            this.setTime();
        }
        this.getGoogleReviews();
        this.requestYelp();
        console.log(this.googleReviews);
    };
    DetailsReviewsComponent.prototype.getIfError = function () {
        if (this.shownReviews !== undefined) {
            return Object.keys(this.shownReviews).length == 0;
        }
        return false;
    };
    DetailsReviewsComponent.prototype.setTime = function () {
        for (var _i = 0, _a = this.googleReviews; _i < _a.length; _i++) {
            var review = _a[_i];
            var utcSec = review['time'];
            var d = new Date(0);
            console.log('time');
            console.log(utcSec);
            d.setUTCSeconds(utcSec);
            review['time'] = d.toISOString().replace('T', ' ').split('.')[0];
        }
    };
    DetailsReviewsComponent.prototype.sortBy = function (value) {
        switch (value) {
            case "Highest Rating":
                this.selectedOrder = "Highest Rating";
                this.shownReviews.sort(function (a, b) {
                    return b.rating - a.rating;
                });
                break;
            case "Lowest Rating":
                this.selectedOrder = "Lowest Rating";
                this.shownReviews.sort(function (a, b) {
                    return a.rating - b.rating;
                });
                break;
            case "Most Recent":
                this.selectedOrder = "Most Recent";
                this.shownReviews.sort(function (a, b) {
                    return Date.parse(b.time) - Date.parse(a.time);
                });
                break;
            case "Least Recent":
                this.selectedOrder = "Least Recent";
                this.shownReviews.sort(function (a, b) {
                    return Date.parse(a.time) - Date.parse(b.time);
                });
                break;
            case "Default Order":
                if (this.selectedReviews === "Google Reviews") {
                    this.shownReviews = this.googleReviews.slice(0);
                }
                else {
                    this.shownReviews = this.yelpReviews.slice(0);
                }
                this.selectedOrder = "Default Order";
                break;
        }
    };
    DetailsReviewsComponent.prototype.setStars = function (rating) {
        var text = "<i class='fa fa-star' aria-hidden='true' style='color: gold;'></i>".repeat(Math.round(rating));
        //            if (this.info.rating % 1 > 0){
        //                text = text + '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>';
        //            }
        return text;
    };
    DetailsReviewsComponent.prototype.requestYelp = function () {
        var _this = this;
        //this.locationRequest.getRequest("http://localhost:3000/api", this.formatYelpRequest())
        this.locationRequest.getRequest("/api", this.formatYelpRequest())
            .subscribe(function (data) {
            console.log(data);
            _this.yelpReviews = data;
            //this.startPage =0;
            //this.result = data["hi"];
            //the params must be different in order to reload page so i keep counter
        });
    };
    DetailsReviewsComponent.prototype.formatYelpRequest = function () {
        var name = this.ds.details['name'];
        var address1 = this.ds.details['adr_address'].match('<span class="street-address">(.*?)</span>')[1];
        var city = this.ds.details['adr_address'].match('<span class="locality">(.*?)</span>')[1];
        var state = this.ds.details['adr_address'].match('<span class="region">(.*?)</span>')[1];
        var postal = this.ds.details['adr_address'].match('<span class="postal-code">(.*?)</span>')[1];
        var address2 = city + ", " + state + ", " + postal;
        //let city = address[1];
        //let state = address[2].split(' ')[0];
        var country = 'US';
        var requestParams = { name: name, city: city, state: state, country: 'US', latitude: this.ds.details['geometry']['location'].lat(), longitude: this.ds.details['geometry']['location'].lng(), address1: address1, address2: address2 };
        return requestParams;
    };
    //    setTimeout(function(){
    //        console.log('after');
    //    },00);
    DetailsReviewsComponent.prototype.getGoogleReviews = function () {
        this.selectedReviews = "Google Reviews";
        if (Object.keys(this.googleReviews).length == 0) {
            this.shownReviews = [];
        }
        else {
            this.shownReviews = this.googleReviews.slice(0);
        }
    };
    DetailsReviewsComponent.prototype.getYelpReviews = function () {
        this.selectedReviews = "Yelp Reviews";
        console.log('switching to yelp');
        console.log(this.yelpReviews);
        console.log();
        //equals {}
        if (Object.keys(this.yelpReviews).length == 0) {
            this.shownReviews = [];
        }
        else {
            this.shownReviews = this.yelpReviews.slice(0);
        }
    };
    DetailsReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'details-reviews',
            template: __webpack_require__("./src/app/details-reviews.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* stagger */])('100ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('1s', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ opacity: 1 }))
                        ]), { optional: true })
                    ])
                ])
            ],
        })
        //  animations: [
        //    trigger('fadeInOutTranslate', [
        //      state('Google Reviews', style({ opacity: 1 })),
        //      state('Yelp Reviews', style({ opacity: 0 })),
        //      transition(':enter', [
        //        style({opacity:0}),
        //        animate(300, style({opacity:1}))
        //      ]),
        //      transition(':leave', [
        //        style({transform: 'translate(0)'}),
        //        animate(300, style({opacity:0}))
        //      ])
        //    ])
        //  ]
        //})
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */]])
    ], DetailsReviewsComponent);
    return DetailsReviewsComponent;
}());



/***/ }),

/***/ "./src/app/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='map'></div>\n<!--<div *ngIf='details'>-->\n<div>\n    <h1>{{name}}</h1>\n    <a routerLink=\"/results\"><button class=\"btn btn-default  btn-outline-secondary\"><span class=\"glyphicon glyphicon-menu-left\"></span>List</button></a>\n    <a id=\"twitter\" target=\"_blank\" class=\"twitter-share-button\" [href]=\"getTwitter()\"><img src=\"http://cs-server.usc.edu:45678/hw/hw8/images/Twitter.png\" width=\"30\"></a>\n<!--    <a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text=Check%20out%2085C%20Bakery%20Cafe%20-%20Cupertino%20located%20at%2019459%20Stevens%20Creek%20Blvd%20#100,%20Cupertino,%20CA%2095014&url=https%3A%2F%2Fexample.com%2F\"></a>-->\n<!--    https://twitter.com/intent/tweet?text=Check%20out%2085C%20Bakery%20Cafe%20-%20Cupertino%20located%20at%2019459%20Stevens%20Creek%20Blvd%20#100,%20Cupertino,%20CA%2095014,&url=http://www.85cbakerycafe.com/-->\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" [routerLink]=\"[{ outlets: { 'details-router': ['info'] } }]\">Info</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"[{ outlets: { 'details-router': ['photos'] } }]\">Photos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"[{ outlets: { 'details-router': ['map'] } }]\">Map</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"[{ outlets: { 'details-router': ['reviews'] } }]\">Reviews</a>\n      </li>\n    </ul>\n    <router-outlet name=\"details-router\"></router-outlet>\n    \n</div>\n    "

/***/ }),

/***/ "./src/app/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_service__ = __webpack_require__("./src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';


var DetailsComponent = /** @class */ (function () {
    // private info: DetailsInfoComponent = new DetailsInfoComponent(this.ds);
    function DetailsComponent(route, ds, router) {
        this.route = route;
        this.ds = ds;
        this.router = router;
        //twitter_string = "https://twitter.com/intent/tweet?text=hello&url=https%3A%2F%2Fexample.com%2F";
        this.twitter_string = "";
    }
    DetailsComponent.prototype.routeTo = function (route) {
        this.router.navigate([route]);
    };
    DetailsComponent.prototype.getTwitter = function () {
        return this.twitter_string;
    };
    DetailsComponent.prototype.ngOnInit = function () {
        console.log('details from details component');
        console.log(this.ds.details);
        this.details = this.ds.details;
        this.name = this.details['name'];
        //this.twitter_string = "hello";
        //this.website = "https%3A%2F%2Fexample.com%2F";
        this.twitter_string += "https://twitter.com/intent/tweet?" + encodeURI("text=Check out " + this.name + " located at " + this.details.formatted_address + " Website:" + "&url=" + this.details.website);
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#twitter').attr('href', this.twitter_string);
        //this.website = encodeURI(this.details['website']);
        console.log(this.twitter_string);
        //        this.subscribe = this.route.params.subscribe(params => {
        //            //this.results = JSON.parse(params['r']);
        //            //this.currentPage = params['pageNum'];
        //            console.log('printing params');
        //            console.log(params);
        //            this.placeid = params['place_id'];
        //            this.location = {lat: +params.lat, lng: +params.lng};
        //            this.name = params['name'];
        //            //this.loadDetails();
        //            console.log('printing details');
        //            console.log(this.details);
        //        })
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-details',
            template: __webpack_require__("./src/app/details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsService; });
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

var DetailsService = /** @class */ (function () {
    function DetailsService() {
        this.infoEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DetailsService.prototype.getEmittedValue = function () {
        console.log('getting emitted value');
        return this.infoEmit;
    };
    DetailsService.prototype.update = function (newDetails) {
        this.details = newDetails;
        //this.infoEmit.emit(this.details);
        console.log('details in service updated');
        console.log(this.details);
        console.log(this.infoEmit);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DetailsService.prototype, "infoEmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsService.prototype, "details", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsService.prototype, "selectedPlaceId", void 0);
    DetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "./src/app/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.getRequest = function (requestUrl, requestParams) {
        //  let params: URLSearchParams = new URLSearchParams();
        var Params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        //    requestUrl += "?";
        for (var k in requestParams) {
            //params.set(k, requestParams[k]);
            //requestUrl += k
            Params = Params.append(k, requestParams[k]);
        }
        console.log(requestParams);
        //console.log(params);
        //let requestOptions = new RequestOptions();
        //requestOptions.search = params;
        //params.set('param1', 'someValue');
        return this.http.get(requestUrl, { params: Params });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"results\" class=\"mx-auto mt-3\">\n    <div *ngIf=\"results.results.length==0\" class=\"alert alert-warning\" role=\"alert\">No Results Found</div>\n    <div *ngIf=\"results.results.length>0\" style=\"overflow-x: scroll;overflow-y: hidden;white-space: nowrap;\">\n        <a id=\"detailsButton\" routerLink=\"/details\"><button class=\"btn btn-default  btn-outline-secondary\" [disabled]=\"isDisabled()\">details</button></a>\n        <table class=\"table table-hover\">\n            <thead>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Category</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Address</th>\n                <th scope=\"col\">Favorite</th>\n                <th scope=\"col\">Details</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let row of results.results.slice(20*currentPage,20*(currentPage+1)); let i = index\" (click)=\"highlight(row.place_id)\" [class.highlight]=\"row.place_id === this.detailsService.selectedPlaceId\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td><div class=\"w-25 p-3\"><img src=\"{{row.icon}}\" class=\"img-fluid\" style=\"max-width: 30px;\"></div></td>\n                    <td>{{row.name}}</td>\n                    <td>{{row.vicinity}}</td>\n                    <td><button class=\"btn btn-default  btn-outline-secondary\"><span class=\"glyphicon glyphicon-star-empty\"></span></button></td>\n                    <td><button (click)='showDetails(row.place_id, row.geometry.location.lat, row.geometry.location.lng)' class=\"btn btn-default  btn-outline-secondary\"><span class=\"glyphicon glyphicon-menu-right\"></span></button></td>\n                    \n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"text-center\">\n    <button *ngIf=\"currentPage > 0\" (click)=\"previousPage()\" class=\"btn btn-default  btn-outline-secondary\">Previous</button>\n    <button *ngIf=\"existsNextPage()\" (click)=\"nextPage()\" class=\"btn btn-default  btn-outline-secondary\">Next</button>\n    </div>\n    <div id='map'></div>\n</div>\n"

/***/ }),

/***/ "./src/app/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_service__ = __webpack_require__("./src/app/details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResultsComponent = /** @class */ (function () {
    //isDisabled = true;
    function ResultsComponent(locationRequest, route, data, router, detailsService, ngZone) {
        this.locationRequest = locationRequest;
        this.route = route;
        this.data = data;
        this.router = router;
        this.detailsService = detailsService;
        this.ngZone = ngZone;
    }
    ResultsComponent.prototype.isDisabled = function () {
        if (this.detailsService.details)
            return false;
        else
            return true;
    };
    ResultsComponent.prototype.highlight = function (place_id) {
        if (this.detailsService.selectedPlaceId === place_id) {
            this.detailsService.selectedPlaceId = "";
        }
        else
            this.detailsService.selectedPlaceId = place_id;
    };
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.route.params.subscribe(function (params) {
            console.log("printing new results");
            console.log(_this.data.results);
            //this.results = JSON.parse(params['r']);
            //this.currentPage = params['pageNum'];
            _this.currentPage = 0;
            _this.results = _this.data.results;
            _this.selectedPlaceId = _this.detailsService.selectedPlaceId;
        });
    };
    ResultsComponent.prototype.showDetails = function (placeid, lat, lng) {
        var _this = this;
        //this.router.navigate(['/details']);
        //this.router.navigate(['']);
        //this.router.navigate(['/details', {place_id: placeid, lat: lat, lng: lng}]);
        this.detailsService.selectedPlaceId = placeid;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: lat, lng: lng },
            zoom: 17
        });
        console.log(this.map);
        var request = {
            placeId: this.detailsService.selectedPlaceId
        };
        var service = new google.maps.places.PlacesService(this.map);
        service.getDetails(request, function (place, status) {
            //this.router.navigate(['']);
            //this.router.navigate(['results']);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                _this.detailsService.update(place);
                console.log('details after returning from google');
                console.log(_this.detailsService.details);
                console.log('printing router');
                console.log(_this.router);
                _this.ngZone.run(function () {
                    _this.router.navigate(['/details']);
                });
                //this.ds.update(this.details);
                //this.router.navigate(['/details', {name: this.details['name']}]);
            }
        });
        //this.router.navigate(['results']);
    };
    //    getResults(prev){
    //        console.log("herhehrehre");
    //        console.log(this.locationRequest);
    //        this.locationRequest.getRequest("http://localhost:3000/")
    //            .subscribe(data => {
    //            console.log(data);
    //            this.results = data["hi"];
    //            console.log(this.results);
    //            return data["hi"];
    //        });
    //    }
    //      ngOnDestroy() {
    //        this.subsribe.unsubscribe();
    //      }
    ResultsComponent.prototype.existsNextPage = function () {
        if (this.results.results.length > (this.currentPage + 1) * 20 || this.results.next_page_token)
            return true;
        return false;
    };
    ResultsComponent.prototype.nextPage = function () {
        var _this = this;
        if (this.results.results.length > (this.currentPage + 1) * 20) {
            this.currentPage += 1;
        }
        else if (this.results.next_page_token) {
            console.log('here in next token');
            this.loadNextPage(this.results.next_page_token, function () { return _this.currentPage += 1; });
        }
    };
    ResultsComponent.prototype.previousPage = function () {
        this.currentPage -= 1;
    };
    ResultsComponent.prototype.loadNextPage = function (nextPageToken, incriment) {
        var _this = this;
        this.locationRequest.getRequest("/api", { 'pagetoken': nextPageToken })
            .subscribe(function (data) {
            console.log('next page');
            console.log(data);
            _this.results.results.push.apply(_this.results.results, data['results']);
            _this.results.next_page_token = data['next_page_token'];
            //this.result = data["hi"];
            console.log('new results list');
            console.log(_this.results.results);
            incriment();
            console.log('current page: ' + _this.currentPage);
        });
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'results',
            template: __webpack_require__("./src/app/results.component.html"),
            styles: ['.highlight{background-color: gold;}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ResultsComponent);
    return ResultsComponent;
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