webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*const routes: Routes=[
    {path: 'home',component:},
    {path: 'home',component:},
    {path: 'home',component:},
];*/
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-home></app-home>\n<app-contact-us></app-contact-us>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/templates/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_ca_test_ca_test_component__ = __webpack_require__("../../../../../src/app/templates/ca-test/ca-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_home_home_component__ = __webpack_require__("../../../../../src/app/templates/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__templates_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__templates_ca_test_ca_test_component__["a" /* CaTestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__templates_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header Section Start -->\n    <header id=\"hero-area\" data-stellar-background-ratio=\"0.5\">    \n      <!-- Navbar Start -->\n      <nav class=\"navbar navbar-expand-lg fixed-top scrolling-navbar indigo\">\n        <div class=\"container\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <a href=\"index.html\" class=\"navbar-brand\"> <h2>SKV Media</h2></a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-navbar\" aria-controls=\"main-navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <i class=\"lnr lnr-menu\"></i>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"main-navbar\">\n            <ul class=\"navbar-nav mr-auto w-100 justify-content-end\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" href=\"#hero-area\">Home</a>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  About Us\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">Our Approach</a>\n                  <a class=\"dropdown-item\" href=\"#\">Team</a>\n                  <a class=\"dropdown-item\" href=\"#\">Advisors</a>\n                  <a class=\"dropdown-item\" href=\"#\">Credentials</a>\n                </div>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Career Test\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">For 8th &amp; 9th Std.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For 10th Std.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For 11th &amp; 12th Std.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For Graduation.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For Professionals.</a>\n                </div>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                 Study Test\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">For 8th &amp; 9th Std.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For 10th Std.</a>\n                  <a class=\"dropdown-item\" href=\"#\">For 11th &amp; 12th Std.</a>\n                </div>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  My Account\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">Login</a>\n                  <a class=\"dropdown-item\" href=\"#\">Register</a>\n                  <a class=\"dropdown-item\" href=\"#\">Test &amp; Report</a>\n                  <a class=\"dropdown-item\" href=\"#\">Course &amp; College</a>\n                  <a class=\"dropdown-item\" href=\"#\">Ask Expert</a>\n                </div>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" href=\"#team\">Team</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" href=\"#blog\">Blog</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link page-scroll\" href=\"#contact\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <!-- Mobile Menu Start -->\n        <ul class=\"mobile-menu\">\n           <li>\n              <a class=\"page-scroll\" href=\"#hero-area\">Home</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#services\">Services</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#features\">Features</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#portfolios\">Works</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#pricing\">Pricing</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#team\">Team</a>\n            </li>\n            <li >\n              <a class=\"page-scroll\" href=\"#blog\">Blog</a>\n            </li>\n            <li>\n              <a class=\"page-scroll\" href=\"#contact\">Contact</a>\n            </li>\n        </ul>\n        <!-- Mobile Menu End -->\n\n      </nav>\n      </header>\n      <!-- Navbar End -->"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contactus; });
var Contactus = /** @class */ (function () {
    function Contactus(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    ;
    return Contactus;
}());

;


/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Contact Section Start -->\n    <section id=\"contact\" class=\"section\" data-stellar-background-ratio=\"-0.2\">      \n      <div class=\"contact-form\">\n        <div class=\"container\">\n          <div class=\"row\">     \n            <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n              <div class=\"contact-us\">\n                <h3>Contact With us</h3>\n                <div class=\"contact-address\">\n                  <p>Centerville Road, DE 19808, US </p>\n                  <p class=\"phone\">Phone: <span>(+123456789)</span></p>\n                  <p class=\"email\">E-mail: <span>(skv@gmail.com)</span></p>\n                </div>\n                <div class=\"social-icons\">\n                  <ul>\n                    <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                    <li class=\"dribbble\"><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>     \n            <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n              <div class=\"contact-block\">\n                 <div class=\"row\">\n                   <form #contactForm=\"ngForm\"  (ngSubmit)=\"onSubmit(contactForm.value)\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Your Name\" required data-error=\"Please enter your name\"  name=\"name\" ngModel>\n                        <div class=\"help-block with-errors\"></div>\n                      </div>                                 \n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" placeholder=\"Your Email\"  class=\"form-control\"  required data-error=\"Please enter your email\"  name=\"email\" ngModel>\n                        <div class=\"help-block with-errors\"></div>\n                      </div> \n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\"> \n                        <textarea class=\"form-control\" placeholder=\"Your Message\"  rows=\"8\" data-error=\"Write your message\" required  name=\"message\" ngModel></textarea>\n                        <div class=\"help-block with-errors\" ></div>\n                      </div>\n                      <div class=\"submit-button text-center\">\n                        <button class=\"btn btn-common\" id=\"submit\" type=\"submit\">Send Message</button>\n                        <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div> \n                        <div class=\"clearfix\"></div> \n                      </div>\n                    </div>\n                  </form> \n                </div>            \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>           \n    </section>\n    <!-- Contact Section End -->\n\n    <!-- Footer Section Start -->\n    <footer>          \n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- Footer Links -->\n          <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n            <ul class=\"footer-links\">\n              <li>\n                <a href=\"#\">Homepage</a>\n              </li>\n              <li>\n                <a href=\"#\">Services</a>\n              </li>\n              <li>\n                <a href=\"#\">About Us</a>\n              </li>\n              <li>\n                <a href=\"#\">Contact</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n            <div class=\"copyright\">\n              <p>All copyrights reserved &copy; 2018 - Designed & Developed by <a>Taxspanner.com</a></p>\n            </div>\n          </div>  \n        </div>\n      </div>\n    </footer>\n    <!-- Footer Section End --> \n\n    <!-- Go To Top Link -->\n    <a href=\"#\" class=\"back-to-top\">\n      <i class=\"lnr lnr-arrow-up\"></i>\n    </a>\n    \n    <div id=\"loader\">\n      <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("../../../../../src/app/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.counter = 0;
        this.userData = [];
    }
    ;
    /*this.user = new Contactus('harish','harish@gmail.com',' hello test'); */
    ContactUsComponent.prototype.onSubmit = function (value) {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* Contactus */](value.name, value.email, value.message);
        if (this.user) {
            this.userData.push(this.user);
        }
        this.counter++;
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/templates/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/templates/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/templates/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/templates/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/templates/ca-test/ca-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/ca-test/ca-test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ca-test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/templates/ca-test/ca-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaTestComponent = /** @class */ (function () {
    function CaTestComponent() {
    }
    CaTestComponent.prototype.ngOnInit = function () {
    };
    CaTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ca-test',
            template: __webpack_require__("../../../../../src/app/templates/ca-test/ca-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/templates/ca-test/ca-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaTestComponent);
    return CaTestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/templates/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <header id=\"hero-area\" data-stellar-background-ratio=\"0.5\">       \n      <div class=\"container\">      \n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-md-10\">\n            <div class=\"contents text-center\">\n              <h1 class=\"wow fadeInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"0.3s\">YOU COULD DO THE WISEST THING FOR YOUR CHILDREN</h1>\n              <p class=\"lead  wow fadeIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"400ms\">We have a robust network of 200 expert counsellors in more than 130 locations pan India. Based on research and educational psychology   studies done on 1 million+ students, we have scientifically designed our assessments modules. These tools have been developed in consultation with the leading educationists, to ensure the most comprehensive, effective & holistic assessment.</p>\n              <a href=\"#\" class=\"btn btn-common wow fadeInUp\" data-wow-duration=\"1000ms\" data-wow-delay=\"400ms\">Download</a>\n            </div>\n          </div>\n        </div> \n      </div>           \n    </header>\n    <!-- Header Section End --> \n\n    <!-- Services Section Start -->\n    <section id=\"services\" class=\"section\">\n      <div class=\"container\">\n        <div class=\"section-header\">          \n          <h2 class=\"section-title wow fadeIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"0.3s\">CAREER COUNSELLING PROGRAM</h2>\n          <hr class=\"lines wow zoomIn\" data-wow-delay=\"0.3s\">\n          <p class=\"section-subtitle wow fadeIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"0.3s\">Careerfutura does career counselling in a new and innovative method. We offer a holistic view on Career guidance through an excellent online career counselling. With over 25000 courses careers and colleges to choose from, students right from 8th standard to working professionals can benefit from the products. The essential answer to career confusions is given by considering one’s natural potential, personality, interest and study habits, apart from marks scoring trends in the last three academic years.</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/8th_new.png'\" alt=\"\">  \n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/10th_new.png'\" alt=\"\">  \n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/12th_new.png'\" alt=\"\">  \n                </div>               \n              </div>\n            </div>\n             <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/grad1_new.png'\" alt=\"\">  \n                </div>               \n              </div>\n            </div>\n             <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/prof_new.png'\" alt=\"\">  \n                </div>               \n              </div>\n            </div>\n         </div>\n      </div>\n    </section>\n    <!-- Services Section End -->\n\n    <!-- Features Section Start -->\n    <section id=\"features\" class=\"section\" data-stellar-background-ratio=\"0.2\">\n      <div class=\"container\">\n        <div class=\"section-header\">          \n          <h2 class=\"section-title\">Why Plan Your Career?</h2>\n          <hr class=\"lines\">\n          <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br> Lorem ipsum dolor sit amet, consectetur.</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-md-12 col-xs-12\">\n            <div class=\"container\">\n              <div class=\"row\">\n                 <div class=\"col-lg-6 col-sm-6 col-xs-12 box-item\">\n                    <span class=\"icon\">\n                      <i class=\"lnr lnr-rocket\"></i>\n                    </span>\n                    <div class=\"text\">\n                      <h4>Bootstrap 4 Based</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-sm-6 col-xs-12 box-item\">\n                    <span class=\"icon\">\n                      <i class=\"lnr lnr-laptop-phone\"></i>\n                    </span>\n                    <div class=\"text\">\n                      <h4>Fully Responsive</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-sm-6 col-xs-12 box-item\">\n                    <span class=\"icon\">\n                      <i class=\"lnr lnr-layers\"></i>\n                    </span>\n                    <div class=\"text\">\n                      <h4>Parallax Background</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-sm-6 col-xs-12 box-item\">\n                    <span class=\"icon\">\n                      <i class=\"lnr lnr-cog\"></i>\n                    </span>\n                    <div class=\"text\">\n                      <h4>Easy to Customize</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n                    </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-xs-12\">\n            <div class=\"show-box\">\n              <img class=\"img-fulid\" [src]=\"'assets/img/features/feature.png'\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Features Section End -->    \n\n    <!-- Portfolio Section -->\n    <section id=\"portfolios\" class=\"section\">\n      <!-- Container Starts -->\n      <div class=\"container\">\n        <div class=\"section-header\">          \n          <h2 class=\"section-title\">Our Portfolio</h2>\n          <hr class=\"lines\">\n          <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br> Lorem ipsum dolor sit amet, consectetur.</p>\n        </div>\n        <div class=\"row\">          \n          <div class=\"col-md-12\">\n            <!-- Portfolio Controller/Buttons -->\n            <div class=\"controls text-center\">\n              <a class=\"filter active btn btn-common\" data-filter=\"all\">\n                All \n              </a>\n              <a class=\"filter btn btn-common\" data-filter=\".design\">\n                Design \n              </a>\n              <a class=\"filter btn btn-common\" data-filter=\".development\">\n                Development\n              </a>\n              <a class=\"filter btn btn-common\" data-filter=\".print\">\n                Print \n              </a>\n            </div>\n            <!-- Portfolio Controller/Buttons Ends-->\n          </div>\n\n          <!-- Portfolio Recent Projects -->\n          <div id=\"portfolio\" class=\"row\">\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img1.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img1.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img2.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img2.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img3.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img3.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img4.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img4.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img5.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img5.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\n              <div class=\"portfolio-item\">\n                <div class=\"shot-item\">\n                  <img [src]=\"'assets/img/portfolio/img6.jpg'\" alt=\"\" />  \n                  <a class=\"overlay lightbox\" href=\"img/portfolio/img6.jpg\">\n                    <i class=\"lnr lnr-eye item-icon\"></i>\n                  </a>\n                </div>               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Container Ends -->\n    </section>\n    <!-- Portfolio Section Ends --> \n\n    <!-- Start Video promo Section -->\n    <section class=\"video-promo section\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8\">\n              <div class=\"video-promo-content text-center\">\n                <h2 class=\"wow zoomIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"100ms\">Watch Our Intro video</h2>\n                <p class=\"wow zoomIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"100ms\">Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci.</p>\n                <a href=\"https://www.youtube.com/watch?v=IXoMDwh4Cq8\" class=\"video-popup wow fadeInUp\" data-wow-duration=\"1000ms\" data-wow-delay=\"0.3s\"><i class=\"lnr lnr-film-play\"></i></a>\n              </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- End Video Promo Section -->\n\n    <!-- Counter Section Start -->\n    <div class=\"counters section\" data-stellar-background-ratio=\"0.5\">\n      <div class=\"container\">\n        <div class=\"row\"> \n          <div class=\"col-sm-6 col-md-3 col-lg-3\">\n            <div class=\"facts-item\">   \n              <div class=\"icon\">\n                <i class=\"lnr lnr-clock\"></i>\n              </div>             \n              <div class=\"fact-count\">\n                <h3><span class=\"counter\">1589</span></h3>\n                <h4>Working Hours</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3 col-lg-3\">\n            <div class=\"facts-item\">   \n              <div class=\"icon\">\n                <i class=\"lnr lnr-briefcase\"></i>\n              </div>            \n              <div class=\"fact-count\">\n                <h3><span class=\"counter\">699</span></h3>\n                <h4>Completed Projects</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3 col-lg-3\">\n            <div class=\"facts-item\"> \n              <div class=\"icon\">\n                <i class=\"lnr lnr-user\"></i>\n              </div>              \n              <div class=\"fact-count\">\n                <h3><span class=\"counter\">203</span></h3>\n                <h4>No. of Clients</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3 col-lg-3\">\n            <div class=\"facts-item\"> \n              <div class=\"icon\">\n                <i class=\"lnr lnr-heart\"></i>\n              </div>              \n              <div class=\"fact-count\">\n                <h3><span class=\"counter\">1689</span></h3>\n                <h4>Peoples Love</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Counter Section End -->\n\n    <!-- Team section Start -->\n    <section id=\"team\" class=\"section\">\n      <div class=\"container\">\n        <div class=\"section-header\">          \n          <h2 class=\"section-title\">Our Team</h2>\n          <hr class=\"lines\">\n          <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br> Lorem ipsum dolor sit amet, consectetur.</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12\">\n            <div class=\"single-team\">\n              <img [src]=\"'assets/img/team/team1.jpg'\" alt=\"\">\n              <div class=\"team-details\">\n                <div class=\"team-inner\">\n                  <h4 class=\"team-title\">Jhon Doe</h4>\n                  <p>Chief Technical Officer</p>\n                  <ul class=\"social-list\">\n                    <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-xs-12\">\n            <div class=\"single-team\">\n              <img [src]=\"'assets/img/team/team1.jpg'\" alt=\"\">\n              <div class=\"team-details\">\n                <div class=\"team-inner\">\n                  <h4 class=\"team-title\">Paul Kowalsy</h4>\n                  <p>CEO & Co-Founder</p>\n                  <ul class=\"social-list\">\n                    <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-xs-12\">\n            <div class=\"single-team\">\n              <img [src]=\"'assets/img/team/team1.jpg'\" alt=\"\">\n              <div class=\"team-details\">\n                <div class=\"team-inner\">                  \n                  <h4 class=\"team-title\">Emilly Williams</h4>\n                  <p>Business Manager</p>\n                  <ul class=\"social-list\">\n                    <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-xs-12\">\n            <div class=\"single-team\">\n              <img [src]=\"'assets/img/team/team1.jpg'\" alt=\"\">\n              <div class=\"team-details\">\n                <div class=\"team-inner\">\n                  <h4 class=\"team-title\">Patricia Green</h4>\n                  <p>Graphic Designer</p>\n                  <ul class=\"social-list\">\n                    <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Team section End -->\n\n    <!-- testimonial Section Start -->\n    <div id=\"testimonial\" class=\"section\" data-stellar-background-ratio=\"0.1\">\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-md-12\">\n            <div class=\"touch-slider owl-carousel owl-theme\">\n              <div class=\"testimonial-item\">\n                <img [src]=\"'assets/img/testimonial/customer1.jpg'\" alt=\"Client Testimonoal\" style=\"height: auto;\"/>\n                <div class=\"testimonial-text\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et</p>\n                  <h3>Jone Deam</h3>\n                  <span>Fondor of Jalmori</span>\n                </div>\n              </div>\n              <div class=\"testimonial-item\">\n                <img [src]=\"'assets/img/testimonial/customer1.jpg'\" alt=\"Client Testimonoal\" style=\"height: auto;\"/>\n                <div class=\"testimonial-text\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et</p>\n                  <h3>Oidila Matik</h3>\n                  <span>President Lexo Inc</span>\n                </div>\n              </div>\n              <div class=\"testimonial-item\">\n                <img [src]=\"'assets/img/testimonial/customer1.jpg'\" alt=\"Client Testimonoal\" style=\"height: auto;\"/>\n                <div class=\"testimonial-text\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et</p>\n                  <h3>Alex Dattilo</h3>\n                  <span>CEO Optima Inc</span>\n                </div>\n              </div>\n              <div class=\"testimonial-item\">\n                <img [src]=\"'assets/img/testimonial/customer1.jpg'\" alt=\"Client Testimonoal\"  style=\"height: auto;\"/>\n                <div class=\"testimonial-text\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br> adipisicing ciusmod tempor incididunt ut labore et</p>\n                  <h3>Paul Kowalsy</h3>\n                  <span>CEO & Founder</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>        \n      </div>\n    </div>\n    <!-- testimonial Section Start -->\n\n    <!-- Blog Section -->\n    <section id=\"blog\" class=\"section\">\n      <!-- Container Starts -->\n      <div class=\"container\">\n        <div class=\"section-header\">          \n          <h2 class=\"section-title\">Recent Blog</h2>\n          <hr class=\"lines\">\n          <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br> Lorem ipsum dolor sit amet, consectetur.</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item\">\n            <!-- Blog Item Starts -->\n            <div class=\"blog-item-wrapper\">\n              <div class=\"blog-item-img\">\n                <a href=\"single-post.html\">\n                  <img [src]=\"'assets/img/blog/img1.jpg'\" alt=\"\">\n                </a>                \n              </div>\n              <div class=\"blog-item-text\"> \n                <div class=\"meta-tags\">\n                  <span class=\"date\"><i class=\"lnr  lnr-clock\"></i>2 Days Ago</span>\n                  <span class=\"comments\"><a href=\"#\"><i class=\"lnr lnr-bubble\"></i> 24 Comments</a></span>\n                </div>\n                <h3>\n                  <a href=\"single-post.html\">How often should you tweet?</a>\n                </h3>\n                <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... \n                </p>\n                <a href=\"single-post.html\" class=\"btn-rm\">Read More <i class=\"lnr lnr-arrow-right\"></i></a>\n              </div>\n            </div>\n            <!-- Blog Item Wrapper Ends-->\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item\">\n            <!-- Blog Item Starts -->\n            <div class=\"blog-item-wrapper\">\n              <div class=\"blog-item-img\">\n                <a href=\"single-post.html\">\n                  <img [src]=\"'assets/img/blog/img2.jpg'\" alt=\"\">\n                </a>                \n              </div>\n              <div class=\"blog-item-text\"> \n                <div class=\"meta-tags\">\n                  <span class=\"date\"><i class=\"lnr  lnr-clock\"></i>2 Days Ago</span>\n                  <span class=\"comments\"><a href=\"#\"><i class=\"lnr lnr-bubble\"></i> 24 Comments</a></span>\n                </div>\n                <h3>\n                  <a href=\"single-post.html\">Content is still king</a>\n                </h3>\n                <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... \n                </p>\n                <a href=\"single-post.html\" class=\"btn-rm\">Read More <i class=\"lnr lnr-arrow-right\"></i></a>\n              </div>\n            </div>\n            <!-- Blog Item Wrapper Ends-->\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item\">\n            <!-- Blog Item Starts -->\n            <div class=\"blog-item-wrapper\">\n              <div class=\"blog-item-img\">\n                <a href=\"single-post.html\">\n                  <img [src]=\"'assets/img/blog/img3.jpg'\" alt=\"\">\n                </a>                \n              </div>\n              <div class=\"blog-item-text\"> \n                <div class=\"meta-tags\">\n                  <span class=\"date\"><i class=\"lnr  lnr-clock\"></i>2 Days Ago</span>\n                  <span class=\"comments\"><a href=\"#\"><i class=\"lnr lnr-bubble\"></i> 24 Comments</a></span>\n                </div> \n                <h3>\n                  <a href=\"single-post.html\">Social media at work</a>\n                </h3>\n                <p>\n                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... \n                </p>\n                <a href=\"single-post.html\" class=\"btn-rm\">Read More <i class=\"lnr lnr-arrow-right\"></i></a>\n              </div>\n            </div>\n            <!-- Blog Item Wrapper Ends-->\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- blog Section End -->"

/***/ }),

/***/ "../../../../../src/app/templates/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/templates/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/templates/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map