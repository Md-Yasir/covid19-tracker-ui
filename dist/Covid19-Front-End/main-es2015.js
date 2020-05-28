(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CovidEntity.ts":
/*!********************************!*\
  !*** ./src/app/CovidEntity.ts ***!
  \********************************/
/*! exports provided: PassEntity, DocEntity, VolEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassEntity", function() { return PassEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocEntity", function() { return DocEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolEntity", function() { return VolEntity; });
class PassEntity {
    constructor(name, fname, phno, altphno, email, address, passrequirment, reason, vhno, start, destination, route) {
        this.name = name;
        this.fname = fname;
        this.phno = phno;
        this.altphno = altphno;
        this.email = email;
        this.address = address;
        this.passrequirment = passrequirment;
        this.reason = reason;
        this.vhno = vhno;
        this.start = start;
        this.destination = destination;
        this.route = route;
    }
}
class DocEntity {
    constructor(name, phno, altphno, email, reason, age, appointmentdatetime) {
        this.name = name;
        this.phno = phno;
        this.altphno = altphno;
        this.email = email;
        this.reason = reason;
        this.age = age;
        this.appointmentdatetime = appointmentdatetime;
    }
}
class VolEntity {
    constructor(name, phno, altphno, fname, address, email, qualification, age) {
        this.name = name;
        this.phno = phno;
        this.altphno = altphno;
        this.fname = fname;
        this.address = address;
        this.email = email;
        this.qualification = qualification;
        this.age = age;
    }
}


/***/ }),

/***/ "./src/app/RegPass/pass.component.ts":
/*!*******************************************!*\
  !*** ./src/app/RegPass/pass.component.ts ***!
  \*******************************************/
/*! exports provided: PassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassComponent", function() { return PassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _CovidEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CovidEntity */ "./src/app/CovidEntity.ts");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class PassComponent {
    constructor(service) {
        this.service = service;
        this.pass = new _CovidEntity__WEBPACK_IMPORTED_MODULE_1__["PassEntity"]('', '', 0, 0, '', '', '', '', 0, '', '', '');
    }
    ngOnInit() {
    }
    /**
     * submitPassForm Getting the form details using passentity and invokking the passregister methos in service class
     */
    submitPassForm() {
        let response = this.service.passRegistration(this.pass);
        response.subscribe((data) => this.message = data);
    }
}
PassComponent.ɵfac = function PassComponent_Factory(t) { return new (t || PassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"])); };
PassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassComponent, selectors: [["app-pass"]], decls: 77, vars: 12, consts: [[1, "content"], [1, "pt-4", "pl-4", "pr-4", "pb-2"], [1, "form-style-5"], [3, "ngSubmit"], [1, "number"], ["for", "Name"], [1, "req"], ["required", "", "type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Enter your Full Name", 3, "ngModel", "ngModelChange"], ["for", "FathernName"], ["required", "", "type", "text", "name", "fname", "id", "fname", "required", "", "placeholder", "Enter your Father/Gaurdian Name", 3, "ngModel", "ngModelChange"], ["for", "Mobile No"], ["type", "text", "name", "phno", "id", "phno", "required", "", "placeholder", "Enter Valid Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Alternative No"], ["type", "text", "name", "altphno", "id", "altphno", "required", "", "placeholder", "Enter Alternate Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Email"], ["type", "text", "name", "email", "id", "email", "required", "", "placeholder", "Enter valid email address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Adhaar"], ["type", "text", "name", "adhaarno", "id", "adhaarno", "required", "", "placeholder", "Enter your Permenant Address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Reason"], ["id", "passrequirment", "name", "passrequirment", 3, "ngModel", "ngModelChange"], ["value", "withincity"], ["value", "outofcity"], ["type", "text", "name", "reason", "id", "reason", "required", "", "placeholder", "Reason for travelling", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "VehicleNumber"], ["type", "text", "name", "vhno", "id", "vhno", "required", "", "placeholder", "Enter your full vehicle number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Start"], ["type", "text", "name", "start", "id", "start", "required", "", "placeholder", "Satrting point of the Journey", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Destination"], ["type", "text", "name", "destination", "id", "destination", "required", "", "placeholder", "YOur Destination", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Route"], ["type", "text", "name", "route", "id", "route", "required", "", "placeholder", "Route your Using", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button", 2, "vertical-align", "middle"]], template: function PassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PassComponent_Template_form_ngSubmit_3_listener() { return ctx.submitPassForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Personal Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_13_listener($event) { return ctx.pass.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Father Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_18_listener($event) { return ctx.pass.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_21_listener($event) { return ctx.pass.phno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Alternative No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_24_listener($event) { return ctx.pass.altphno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_29_listener($event) { return ctx.pass.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_34_listener($event) { return ctx.pass.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Pass Related Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Select your Limit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_select_ngModelChange_44_listener($event) { return ctx.pass.passrequirment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Within City Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Out of City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Reason: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pass.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Vehicle Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_58_listener($event) { return ctx.pass.vhno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Starting Point: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_63_listener($event) { return ctx.pass.start = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Destination: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_68_listener($event) { return ctx.pass.destination = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Route: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassComponent_Template_input_ngModelChange_73_listener($event) { return ctx.pass.route = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.phno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.altphno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.passrequirment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.vhno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass.route);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".form-style-5[_ngcontent-%COMP%]{\r\n\tmax-width: 500px;\r\n\tpadding: 10px 20px;\r\n\tbackground: #f4f7f8;\r\n\tmargin: 10px auto;\r\n\tpadding: 20px;\r\n\tbackground: #f4f7f8;\r\n\tborder-radius: 8px;\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{\r\n\tborder: none;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n\tbackground: rgba(255,255,255,.1);\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tfont-size: 15px;\r\n\tmargin: 0;\r\n\toutline: 0;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box; \r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box; \r\n\tbackground-color: #e8eeef;\r\n\tcolor:#8a97a0;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n\tmargin-bottom: 30px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{\r\n\tbackground: #d2d9dd;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n\t-webkit-appearance: menulist-button;\r\n\theight:35px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n\tbackground: #1abc9c;\r\n\tcolor: #fff;\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 0.8em;\r\n\tmargin-right: 4px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\r\n\tborder-radius: 15px 15px 15px 0px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   button[type=\"button\"][_ngcontent-%COMP%]\r\n{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 19px 39px 18px 39px;\r\n\tcolor: #FFF;\r\n\tmargin: 0 auto;\r\n\tbackground: #1abc9c;\r\n\tfont-size: 18px;\r\n\ttext-align: center;\r\n\tfont-style: normal;\r\n\twidth: 100%;\r\n\tborder: 1px solid #16a085;\r\n\tborder-width: 1px 1px 3px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, .form-style-5[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover\r\n{\r\n\tbackground: #109177;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tborder-radius: 4px;\r\n\tbackground-color: lightseagreen;\r\n\tborder: none;\r\n\tcolor: #FFFFFF;\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n\tpadding: 20px;\r\n\twidth: 150px;\r\n\ttransition: all 0.5s;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover {\r\n\tbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: '\\00bb';\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\ttop: 0;\r\n\tright: -20px;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\tpadding-right: 25px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n\topacity: 1;\r\n\tright: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVnUGFzcy9wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIscURBQXFEO0FBQ3REO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTs7Ozs7Ozs7OztDQVVDLHFEQUFxRDtDQUNyRCxnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsU0FBUztDQUNULFVBQVU7Q0FDVixhQUFhO0NBQ2IsV0FBVztDQUNYLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixhQUFhO0NBRWIsMENBQTBDO0NBQzFDLG1CQUFtQjtBQUNwQjtBQUNBOzs7Ozs7Ozs7O0NBVUMsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQ0FBbUM7Q0FDbkMsV0FBVztBQUNaO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwwQ0FBMEM7Q0FDMUMsaUNBQWlDO0FBQ2xDO0FBRUE7OztDQUdDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjtBQUNBOzs7Q0FHQyxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsV0FBVztFQUNWO0FBQ0E7Q0FDRCwwRUFBMEU7RUFDekU7QUFFRjtDQUNDLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtFQUNmO0FBRUE7Q0FDRCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixNQUFNO0NBQ04sWUFBWTtDQUNaLGdCQUFnQjtFQUNmO0FBRUE7Q0FDRCxtQkFBbUI7RUFDbEI7QUFFQTtDQUNELFVBQVU7Q0FDVixRQUFRO0VBQ1AiLCJmaWxlIjoic3JjL2FwcC9SZWdQYXNzL3Bhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXN0eWxlLTV7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y0ZjdmODtcclxuXHRtYXJnaW46IDEwcHggYXV0bztcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmNGY3Zjg7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBmaWVsZHNldHtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBsZWdlbmQge1xyXG5cdGZvbnQtc2l6ZTogMS40ZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IGxhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidGltZVwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4uZm9ybS1zdHlsZS01IHRleHRhcmVhLFxyXG4uZm9ybS1zdHlsZS01IHNlbGVjdCB7XHJcblx0Zm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3V0bGluZTogMDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcblx0Y29sb3I6IzhhOTdhMDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuXHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ0aW1lXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgdGV4dGFyZWE6Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgc2VsZWN0OmZvY3Vze1xyXG5cdGJhY2tncm91bmQ6ICNkMmQ5ZGQ7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBzZWxlY3R7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBtZW51bGlzdC1idXR0b247XHJcblx0aGVpZ2h0OjM1cHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSAubnVtYmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjMWFiYzljO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHR3aWR0aDogMzBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDBweDtcclxufVxyXG5cclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4uZm9ybS1zdHlsZS01IGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMTlweCAzOXB4IDE4cHggMzlweDtcclxuXHRjb2xvcjogI0ZGRjtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAjMWFiYzljO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMxNmEwODU7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHggMXB4IDNweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjMTA5MTc3O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAuYnV0dG9uOmhvdmVyIHtcclxuXHRib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICB9XHJcblxyXG4uYnV0dG9uIHNwYW4ge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24gc3BhbjphZnRlciB7XHJcblx0Y29udGVudDogJ1xcMDBiYic7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAtMjBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcblx0b3BhY2l0eTogMTtcclxuXHRyaWdodDogMDtcclxuICB9XHJcblxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pass',
                templateUrl: './pass.component.html',
                styleUrls: ['./pass.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/RegVol/reg-vol.component.ts":
/*!*********************************************!*\
  !*** ./src/app/RegVol/reg-vol.component.ts ***!
  \*********************************************/
/*! exports provided: RegVolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegVolComponent", function() { return RegVolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _CovidEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CovidEntity */ "./src/app/CovidEntity.ts");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class RegVolComponent {
    constructor(service) {
        this.service = service;
        this.volunteer = new _CovidEntity__WEBPACK_IMPORTED_MODULE_1__["VolEntity"]('', 0, 0, '', '', '', '', 0);
    }
    ngOnInit() {
    }
    submitVolForm() {
        let response = this.service.volRegistration(this.volunteer);
        response.subscribe((data) => this.message = data);
    }
}
RegVolComponent.ɵfac = function RegVolComponent_Factory(t) { return new (t || RegVolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"])); };
RegVolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegVolComponent, selectors: [["app-reg-vol"]], decls: 79, vars: 7, consts: [[1, "content"], [1, "pt-4", "pl-4", "pr-4", "pb-2"], [1, "form-style-5"], [3, "ngSubmit"], [1, "number"], ["for", "Name"], [1, "req"], ["required", "", "type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Enter your Full Name", 3, "ngModel", "ngModelChange"], ["for", "FathernName"], ["required", "", "type", "text", "name", "fname", "id", "fname", "required", "", "placeholder", "Enter your Father/Gaurdian Name", 3, "ngModel", "ngModelChange"], ["for", "Mobile No"], ["type", "text", "name", "phno", "id", "phno", "required", "", "placeholder", "Enter Valid Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Alternative No"], ["type", "text", "name", "altphno", "id", "altphno", "required", "", "placeholder", "Enter Alternate Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Email"], ["type", "text", "name", "email", "id", "email", "required", "", "placeholder", "Enter valid email address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Qualification "], ["type", "text", "name", "qualification", "required", "", "id", "qualification", "required", "", "placeholder", "Qualification", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Age"], ["type", "text", "name", "age", "id", "age", "required", "", "required", "", "placeholder", "Age", 3, "ngModel", "ngModelChange"], ["for", "job"], ["id", "job", "name", "field4"], ["label", "Technical"], ["value", "fishkeeping"], ["value", "reading"], ["value", "boxing"], ["value", "debate"], ["value", "gaming"], ["value", "snooker"], ["value", "other_indoor"], ["label", "Non-Technical"], ["value", "football"], ["value", "swimming"], ["value", "fishing"], ["value", "climbing"], ["value", "cycling"], ["value", "other_outdoor"], ["type", "submit", 1, "button", 2, "vertical-align", "middle"]], template: function RegVolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegVolComponent_Template_form_ngSubmit_3_listener() { return ctx.submitVolForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Your Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_13_listener($event) { return ctx.volunteer.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Father Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_18_listener($event) { return ctx.volunteer.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_21_listener($event) { return ctx.volunteer.phno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Alternative No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_24_listener($event) { return ctx.volunteer.altphno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_29_listener($event) { return ctx.volunteer.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Qualification: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_34_listener($event) { return ctx.volunteer.qualification = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegVolComponent_Template_input_ngModelChange_39_listener($event) { return ctx.volunteer.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Additional Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Interests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "optgroup", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Fishkeeping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Boxing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Debate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Snooker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "optgroup", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Swimming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Fishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Climbing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cycling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.phno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.altphno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.qualification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.volunteer.age);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".form-style-5[_ngcontent-%COMP%]{\r\n\tmax-width: 500px;\r\n\tpadding: 10px 20px;\r\n\tbackground: #f4f7f8;\r\n\tmargin: 10px auto;\r\n\tpadding: 20px;\r\n\tbackground: #f4f7f8;\r\n\tborder-radius: 8px;\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{\r\n\tborder: none;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n\tbackground: rgba(255,255,255,.1);\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tfont-size: 15px;\r\n\tmargin: 0;\r\n\toutline: 0;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box; \r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box; \r\n\tbackground-color: #e8eeef;\r\n\tcolor:#8a97a0;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n\tmargin-bottom: 30px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{\r\n\tbackground: #d2d9dd;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n\t-webkit-appearance: menulist-button;\r\n\theight:35px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n\tbackground: #1abc9c;\r\n\tcolor: #fff;\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 0.8em;\r\n\tmargin-right: 4px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\r\n\tborder-radius: 15px 15px 15px 0px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   button[type=\"button\"][_ngcontent-%COMP%]\r\n{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 19px 39px 18px 39px;\r\n\tcolor: #FFF;\r\n\tmargin: 0 auto;\r\n\tbackground: #1abc9c;\r\n\tfont-size: 18px;\r\n\ttext-align: center;\r\n\tfont-style: normal;\r\n\twidth: 100%;\r\n\tborder: 1px solid #16a085;\r\n\tborder-width: 1px 1px 3px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, .form-style-5[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover\r\n{\r\n\tbackground: #109177;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tborder-radius: 4px;\r\n\tbackground-color: lightseagreen;\r\n\tborder: none;\r\n\tcolor: #FFFFFF;\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n\tpadding: 20px;\r\n\twidth: 150px;\r\n\ttransition: all 0.5s;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover {\r\n\tbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: '\\00bb';\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\ttop: 0;\r\n\tright: -20px;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\tpadding-right: 25px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n\topacity: 1;\r\n\tright: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVnVm9sL3JlZy12b2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixxREFBcUQ7QUFDdEQ7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjtBQUNBOzs7Ozs7Ozs7O0NBVUMscURBQXFEO0NBQ3JELGdDQUFnQztDQUNoQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixTQUFTO0NBQ1QsVUFBVTtDQUNWLGFBQWE7Q0FDYixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLGFBQWE7Q0FFYiwwQ0FBMEM7Q0FDMUMsbUJBQW1CO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7Q0FVQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1DQUFtQztDQUNuQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDBDQUEwQztDQUMxQyxpQ0FBaUM7QUFDbEM7QUFFQTs7O0NBR0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCO0FBQ0E7OztDQUdDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0IsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGFBQWE7Q0FDYixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixXQUFXO0VBQ1Y7QUFDQTtDQUNELDBFQUEwRTtFQUN6RTtBQUVGO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0VBQ2Y7QUFFQTtDQUNELGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLE1BQU07Q0FDTixZQUFZO0NBQ1osZ0JBQWdCO0VBQ2Y7QUFFQTtDQUNELG1CQUFtQjtFQUNsQjtBQUVBO0NBQ0QsVUFBVTtDQUNWLFFBQVE7RUFDUCIsImZpbGUiOiJzcmMvYXBwL1JlZ1ZvbC9yZWctdm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zdHlsZS01e1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmNGY3Zjg7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjRmN2Y4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgZmllbGRzZXR7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgbGVnZW5kIHtcclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuLmZvcm0tc3R5bGUtNSB0ZXh0YXJlYSxcclxuLmZvcm0tc3R5bGUtNSBzZWxlY3Qge1xyXG5cdGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG5cdGNvbG9yOiM4YTk3YTA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidGltZVwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IHRleHRhcmVhOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IHNlbGVjdDpmb2N1c3tcclxuXHRiYWNrZ3JvdW5kOiAjZDJkOWRkO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgc2VsZWN0e1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbWVudWxpc3QtYnV0dG9uO1xyXG5cdGhlaWdodDozNXB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgLm51bWJlciB7XHJcblx0YmFja2dyb3VuZDogIzFhYmM5YztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuLmZvcm0tc3R5bGUtNSBidXR0b25bdHlwZT1cImJ1dHRvblwiXVxyXG57XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDE5cHggMzlweCAxOHB4IDM5cHg7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0YmFja2dyb3VuZDogIzFhYmM5YztcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMTZhMDg1O1xyXG5cdGJvcmRlci13aWR0aDogMXB4IDFweCAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlclxyXG57XHJcblx0YmFja2dyb3VuZDogIzEwOTE3NztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgfVxyXG5cclxuLmJ1dHRvbiBzcGFuIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICdcXDAwYmInO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogLTIwcHg7XHJcblx0dHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0cmlnaHQ6IDA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegVolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reg-vol',
                templateUrl: './reg-vol.component.html',
                styleUrls: ['./reg-vol.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 96, vars: 0, consts: [["align", "center", 1, "pt-4"], ["align", "center"], ["data-toggle", "collapse", "href", "#collapseOne", "role", "button", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "btn", "btn-primary"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-primary"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-primary"], ["id", "accordionExample", 1, "accordion"], ["align", "center", 1, "card", 2, "width", "40rem"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", "show"], ["align", "center", 1, "card-body"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OVERVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PREVENTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SYMPTOMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it\u2019s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " To prevent infection and to slow transmission of COVID-19, do the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Maintain at least 1 metre distance between you and people coughing or sneezing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Avoid touching your face. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cover your mouth and nose when coughing or sneezing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Stay home if you feel unwell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Refrain from smoking and other activities that weaken the lungs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Most common symptoms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " fever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " dry cough.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "tiredness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Less common symptoms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "aches and pains.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "sore throat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "diarrhoea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "conjunctivitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "headache.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "loss of taste or smell.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "a rash on skin, or discolouration of fingers or toes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Serious symptoms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "difficulty breathing or shortness of breath.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "chest pain or pressure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "loss of speech or movement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Seek immediate medical attention if you have serious symptoms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Always call before visiting your doctor or health facility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "People with mild symptoms who are otherwise healthy should manage their symptoms at home.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "On average it takes 5\u20136 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{  \r\n    width: 100%;  \r\n    height: 100%;  \r\n    -o-object-fit: cover;  \r\n       object-fit: cover;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyID4gZGl2eyAgXHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgaGVpZ2h0OiAxMDAlOyAgXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.ts ***!
  \****************************************************/
/*! exports provided: AdminpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function() { return AdminpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["viewpass"]; };
const _c1 = function () { return ["viewappointments"]; };
const _c2 = function () { return ["viewvol"]; };
class AdminpanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminpanelComponent.ɵfac = function AdminpanelComponent_Factory(t) { return new (t || AdminpanelComponent)(); };
AdminpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminpanelComponent, selectors: [["app-adminpanel"]], decls: 35, vars: 6, consts: [[1, "container", "col-md-8", "pt-4"], [1, "row"], [1, "col-sm-6", "col-lg-4", "pt-2"], [1, "card", 2, "max-width", "18rem"], [1, "card-header", "bg-behance", "content-center"], [1, "fab", "fa-behance", "icon", "my-4", "display-5", 2, "color", "black"], [1, "card-body", "row", "text-center"], [1, "vr"], [1, "col"], ["mat-button", "", 1, "text-uppercase", "text-muted", "small", 3, "routerLink"], [1, "card-header", "bg-dribbble", "content-center"], [1, "fab", "fa-dribbble", "icon", "my-4", "display-5", 2, "color", "black"], [1, "card-header", "bg-facebook", "content-center"], [1, "fab", "fa-facebook", "icon", "my-4", "display-5", 2, "color", "black"]], template: function AdminpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Emergency Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Applied Passes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Doctor Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Upcoming Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View and Assign Work to Volunteers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFuZWwvYWRtaW5wYW5lbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminpanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminpanel',
                templateUrl: './adminpanel.component.html',
                styleUrls: ['./adminpanel.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _RegPass_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegPass/pass.component */ "./src/app/RegPass/pass.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _viewpass_viewpass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewpass/viewpass.component */ "./src/app/viewpass/viewpass.component.ts");
/* harmony import */ var _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doc-appointment/doc-appointment.component */ "./src/app/doc-appointment/doc-appointment.component.ts");
/* harmony import */ var _ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ourservices/ourservices.component */ "./src/app/ourservices/ourservices.component.ts");
/* harmony import */ var _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./healthcare/healthcare.component */ "./src/app/healthcare/healthcare.component.ts");
/* harmony import */ var _freefood_freefood_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./freefood/freefood.component */ "./src/app/freefood/freefood.component.ts");
/* harmony import */ var _viewdocappointments_viewdocappointments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewdocappointments/viewdocappointments.component */ "./src/app/viewdocappointments/viewdocappointments.component.ts");
/* harmony import */ var _onlinecourses_onlinecourses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onlinecourses/onlinecourses.component */ "./src/app/onlinecourses/onlinecourses.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
/* harmony import */ var _RegVol_reg_vol_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RegVol/reg-vol.component */ "./src/app/RegVol/reg-vol.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _viewvol_viewvol_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewvol/viewvol.component */ "./src/app/viewvol/viewvol.component.ts");


















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'services/addpass', component: _RegPass_pass_component__WEBPACK_IMPORTED_MODULE_2__["PassComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'adminpanel/viewpass', component: _viewpass_viewpass_component__WEBPACK_IMPORTED_MODULE_4__["ViewpassComponent"] },
    { path: 'adminpanel/viewvol', component: _viewvol_viewvol_component__WEBPACK_IMPORTED_MODULE_15__["ViewvolComponent"] },
    { path: 'services/fixappointment', component: _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_5__["DocAppointmentComponent"] },
    { path: 'adminpanel/viewappointments', component: _viewdocappointments_viewdocappointments_component__WEBPACK_IMPORTED_MODULE_9__["ViewdocappointmentsComponent"] },
    { path: 'services', component: _ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_6__["OurservicesComponent"] },
    { path: 'services/healthcare', component: _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_7__["HealthcareComponent"] },
    { path: 'services/freefood', component: _freefood_freefood_component__WEBPACK_IMPORTED_MODULE_8__["FreefoodComponent"] },
    { path: 'services/onlinecourses', component: _onlinecourses_onlinecourses_component__WEBPACK_IMPORTED_MODULE_10__["OnlinecoursesComponent"] },
    { path: 'login', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_11__["LoginpageComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'services/volreg', component: _RegVol_reg_vol_component__WEBPACK_IMPORTED_MODULE_13__["RegVolComponent"] },
    { path: 'adminpanel', component: _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_12__["AdminpanelComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navibar_navibar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navibar/navibar.component */ "./src/app/navibar/navibar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Covid19-Front-End';
        this.name = 'hello';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navibar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navibar_navibar_component__WEBPACK_IMPORTED_MODULE_1__["NavibarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _RegPass_pass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RegPass/pass.component */ "./src/app/RegPass/pass.component.ts");
/* harmony import */ var _viewpass_viewpass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewpass/viewpass.component */ "./src/app/viewpass/viewpass.component.ts");
/* harmony import */ var _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./doc-appointment/doc-appointment.component */ "./src/app/doc-appointment/doc-appointment.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _viewdocappointments_viewdocappointments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewdocappointments/viewdocappointments.component */ "./src/app/viewdocappointments/viewdocappointments.component.ts");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/custom.pipe.ts");
/* harmony import */ var _navibar_navibar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navibar/navibar.component */ "./src/app/navibar/navibar.component.ts");
/* harmony import */ var _ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ourservices/ourservices.component */ "./src/app/ourservices/ourservices.component.ts");
/* harmony import */ var _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./healthcare/healthcare.component */ "./src/app/healthcare/healthcare.component.ts");
/* harmony import */ var _freefood_freefood_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./freefood/freefood.component */ "./src/app/freefood/freefood.component.ts");
/* harmony import */ var _foodservice_foodservice_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./foodservice/foodservice.component */ "./src/app/foodservice/foodservice.component.ts");
/* harmony import */ var _onlinecourses_onlinecourses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./onlinecourses/onlinecourses.component */ "./src/app/onlinecourses/onlinecourses.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
/* harmony import */ var _RegVol_reg_vol_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./RegVol/reg-vol.component */ "./src/app/RegVol/reg-vol.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _viewvol_viewvol_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./viewvol/viewvol.component */ "./src/app/viewvol/viewvol.component.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_covidservice_service__WEBPACK_IMPORTED_MODULE_24__["CovidserviceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _RegPass_pass_component__WEBPACK_IMPORTED_MODULE_11__["PassComponent"],
        _viewpass_viewpass_component__WEBPACK_IMPORTED_MODULE_12__["ViewpassComponent"],
        _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_13__["DocAppointmentComponent"],
        _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_13__["DocAppointmentComponent"],
        _viewdocappointments_viewdocappointments_component__WEBPACK_IMPORTED_MODULE_15__["ViewdocappointmentsComponent"],
        _custom_pipe__WEBPACK_IMPORTED_MODULE_16__["CustomPipe"],
        _navibar_navibar_component__WEBPACK_IMPORTED_MODULE_17__["NavibarComponent"],
        _ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_18__["OurservicesComponent"],
        _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_19__["HealthcareComponent"],
        _freefood_freefood_component__WEBPACK_IMPORTED_MODULE_20__["FreefoodComponent"],
        _foodservice_foodservice_component__WEBPACK_IMPORTED_MODULE_21__["FoodserviceComponent"],
        _onlinecourses_onlinecourses_component__WEBPACK_IMPORTED_MODULE_22__["OnlinecoursesComponent"],
        _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_23__["LoginpageComponent"],
        _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_25__["AdminpanelComponent"],
        _RegVol_reg_vol_component__WEBPACK_IMPORTED_MODULE_26__["RegVolComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_27__["AboutComponent"],
        _viewvol_viewvol_component__WEBPACK_IMPORTED_MODULE_28__["ViewvolComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _RegPass_pass_component__WEBPACK_IMPORTED_MODULE_11__["PassComponent"],
                    _viewpass_viewpass_component__WEBPACK_IMPORTED_MODULE_12__["ViewpassComponent"],
                    _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_13__["DocAppointmentComponent"],
                    _doc_appointment_doc_appointment_component__WEBPACK_IMPORTED_MODULE_13__["DocAppointmentComponent"],
                    _viewdocappointments_viewdocappointments_component__WEBPACK_IMPORTED_MODULE_15__["ViewdocappointmentsComponent"],
                    _custom_pipe__WEBPACK_IMPORTED_MODULE_16__["CustomPipe"],
                    _navibar_navibar_component__WEBPACK_IMPORTED_MODULE_17__["NavibarComponent"],
                    _ourservices_ourservices_component__WEBPACK_IMPORTED_MODULE_18__["OurservicesComponent"],
                    _healthcare_healthcare_component__WEBPACK_IMPORTED_MODULE_19__["HealthcareComponent"],
                    _freefood_freefood_component__WEBPACK_IMPORTED_MODULE_20__["FreefoodComponent"],
                    _foodservice_foodservice_component__WEBPACK_IMPORTED_MODULE_21__["FoodserviceComponent"],
                    _onlinecourses_onlinecourses_component__WEBPACK_IMPORTED_MODULE_22__["OnlinecoursesComponent"],
                    _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_23__["LoginpageComponent"],
                    _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_25__["AdminpanelComponent"],
                    _RegVol_reg_vol_component__WEBPACK_IMPORTED_MODULE_26__["RegVolComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_27__["AboutComponent"],
                    _viewvol_viewvol_component__WEBPACK_IMPORTED_MODULE_28__["ViewvolComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
                ],
                providers: [_covidservice_service__WEBPACK_IMPORTED_MODULE_24__["CovidserviceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/covidservice.service.ts":
/*!*****************************************!*\
  !*** ./src/app/covidservice.service.ts ***!
  \*****************************************/
/*! exports provided: CovidserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidserviceService", function() { return CovidserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class CovidserviceService {
    constructor(http) {
        this.http = http;
        //Online Server
        // private BASE_URL = "http://covid19-tracker.cloudjiffy.net";
        //Heroku Server
        this.BASE_URL = "https://covid19tracker-telangana.herokuapp.com";
        //Local Server
        // private BASE_URL = "http://localhost:8080";
        this.PASS_REGISTRATION = this.BASE_URL + '/pass/addpass';
        this.VIEW_PASS_URL = this.BASE_URL + '/pass/viewpass';
        this.ISSUED_PASS = this.BASE_URL + '/pass/passissued/';
        this.VOLUNTEER_REGISTRATION = this.BASE_URL + '/vol/addvol';
        this.VIEW_VOLUNTEER_URL = this.BASE_URL + '/vol/viewvol';
        this.VIEW_DOCTOR_APPOINTMENTS = this.BASE_URL + '/doctor/viewappointments';
        this.FIX_APPOINTMENT = this.BASE_URL + '/doctor/fixappointment';
        this.APPOINTMENT_COMPLETED = this.BASE_URL + '/doctor/appointmentdone';
        this.VIEW_USERS = this.BASE_URL + '/viewusers';
        this.ADMIN = this.BASE_URL + '/admin';
    }
    //PASS SERVICES
    passRegistration(pass) {
        return this.http.post(this.PASS_REGISTRATION, pass, { responseType: 'text' });
    }
    getPasses() {
        return this.http.get(this.VIEW_PASS_URL);
    }
    passIssued(id) {
        return this.http.delete(this.ISSUED_PASS + id);
    }
    //VOLUNTEER SERVICES
    volRegistration(volunteers) {
        return this.http.post(this.VOLUNTEER_REGISTRATION, volunteers, { responseType: 'text' });
    }
    getVolunteers() {
        return this.http.get(this.VIEW_VOLUNTEER_URL);
    }
    //APPOINTMENT SERVICES
    getAppointments() {
        return this.http.get(this.VIEW_DOCTOR_APPOINTMENTS);
    }
    fixdocappointment(fixappointment) {
        return this.http.post(this.FIX_APPOINTMENT, fixappointment, { responseType: 'text' });
    }
    appointmentdone(id) {
        return this.http.delete(this.APPOINTMENT_COMPLETED + id);
    }
    //COVID API SERVICES
    getCaseReport() {
        return this.http.get('https://api.covid19india.org/data.json');
    }
    getEssentialResource() {
        return this.http.get('https://api.covid19india.org/resources/resources.json');
    }
    login(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            })
        };
        return this.http.get(this.ADMIN, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.messsage || "Server Error");
    }
}
CovidserviceService.ɵfac = function CovidserviceService_Factory(t) { return new (t || CovidserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CovidserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CovidserviceService, factory: CovidserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/custom.pipe.ts":
/*!********************************!*\
  !*** ./src/app/custom.pipe.ts ***!
  \********************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomPipe {
    transform(array, object) {
        return null;
    }
}
CustomPipe.ɵfac = function CustomPipe_Factory(t) { return new (t || CustomPipe)(); };
CustomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "custom", type: CustomPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'custom'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/doc-appointment/doc-appointment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/doc-appointment/doc-appointment.component.ts ***!
  \**************************************************************/
/*! exports provided: DocAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAppointmentComponent", function() { return DocAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _CovidEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CovidEntity */ "./src/app/CovidEntity.ts");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");






class DocAppointmentComponent {
    constructor(service) {
        this.service = service;
        this.fixappointment = new _CovidEntity__WEBPACK_IMPORTED_MODULE_1__["DocEntity"]('', 0, 0, 0, '', 0, 0);
    }
    ngOnInit() {
    }
    fixAppointment() {
        let response = this.service.fixdocappointment(this.fixappointment);
        response.subscribe((data) => this.message = (data));
    }
}
DocAppointmentComponent.ɵfac = function DocAppointmentComponent_Factory(t) { return new (t || DocAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"])); };
DocAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocAppointmentComponent, selectors: [["app-doc-appointment"]], decls: 47, vars: 10, consts: [[1, "content"], [1, "pt-4", "pl-4", "pr-4", "pb-2"], [1, "form-style-5"], [3, "ngSubmit"], [1, "number"], ["for", "Name"], [1, "req"], ["required", "", "type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Enter your Full Name", 3, "ngModel", "ngModelChange"], ["for", "Mobile No"], ["type", "text", "name", "phno", "id", "phno", "required", "", "placeholder", "Enter Valid Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Alternative No"], ["type", "text", "name", "altphno", "id", "altphno", "required", "", "placeholder", "Enter Alternate Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Email"], ["type", "text", "name", "email", "id", "email", "required", "", "placeholder", "Enter valid email address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Reason"], ["type", "text", "name", "reason", "id", "reason", "required", "", "placeholder", "Enter Reason for Appointment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Age"], ["type", "text", "name", "age", "id", "age", "required", "", "placeholder", "Age", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "pb-2"], ["for", "dateandtime"], ["name", "appointmentdatetime", 1, "form-control", 3, "ngModel", "owlDateTimeTrigger", "owlDateTime", "ngModelChange"], ["dtPicker1", ""], ["type", "submit", 1, "button", 2, "vertical-align", "middle"]], template: function DocAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DocAppointmentComponent_Template_form_ngSubmit_3_listener() { return ctx.fixAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Appointment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_13_listener($event) { return ctx.fixappointment.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mobile No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_16_listener($event) { return ctx.fixappointment.phno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alternative No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_19_listener($event) { return ctx.fixappointment.altphno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_24_listener($event) { return ctx.fixappointment.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Reason: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_29_listener($event) { return ctx.fixappointment.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_34_listener($event) { return ctx.fixappointment.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Date and Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocAppointmentComponent_Template_input_ngModelChange_40_listener($event) { return ctx.fixappointment.appointmentdatetime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "owl-date-time", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.phno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.altphno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fixappointment.appointmentdatetime)("owlDateTimeTrigger", _r0)("owlDateTime", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeComponent"]], styles: [".form-style-5[_ngcontent-%COMP%]{\r\n\tmax-width: 500px;\r\n\tpadding: 10px 20px;\r\n\tbackground: #f4f7f8;\r\n\tmargin: 10px auto;\r\n\tpadding: 20px;\r\n\tbackground: #f4f7f8;\r\n\tborder-radius: 8px;\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{\r\n\tborder: none;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4em;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n\tbackground: rgba(255,255,255,.1);\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tfont-size: 15px;\r\n\tmargin: 0;\r\n\toutline: 0;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box; \r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box; \r\n\tbackground-color: #e8eeef;\r\n\tcolor:#8a97a0;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n\tmargin-bottom: 30px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"datetime\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"time\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{\r\n\tbackground: #d2d9dd;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n\t-webkit-appearance: menulist-button;\r\n\theight:35px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n\tbackground: #1abc9c;\r\n\tcolor: #fff;\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 0.8em;\r\n\tmargin-right: 4px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\r\n\tborder-radius: 15px 15px 15px 0px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], .form-style-5[_ngcontent-%COMP%]   button[type=\"button\"][_ngcontent-%COMP%]\r\n{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 19px 39px 18px 39px;\r\n\tcolor: #FFF;\r\n\tmargin: 0 auto;\r\n\tbackground: #1abc9c;\r\n\tfont-size: 18px;\r\n\ttext-align: center;\r\n\tfont-style: normal;\r\n\twidth: 100%;\r\n\tborder: 1px solid #16a085;\r\n\tborder-width: 1px 1px 3px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, .form-style-5[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover\r\n{\r\n\tbackground: #109177;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tborder-radius: 4px;\r\n\tbackground-color: lightseagreen;\r\n\tborder: none;\r\n\tcolor: #FFFFFF;\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n\tpadding: 20px;\r\n\twidth: 150px;\r\n\ttransition: all 0.5s;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover {\r\n\tbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: '\\00bb';\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\ttop: 0;\r\n\tright: -20px;\r\n\ttransition: 0.5s;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\tpadding-right: 25px;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n\topacity: 1;\r\n\tright: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jLWFwcG9pbnRtZW50L2RvYy1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHFEQUFxRDtBQUN0RDtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Q0FVQyxxREFBcUQ7Q0FDckQsZ0NBQWdDO0NBQ2hDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsYUFBYTtDQUNiLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIsYUFBYTtDQUViLDBDQUEwQztDQUMxQyxtQkFBbUI7QUFDcEI7QUFDQTs7Ozs7Ozs7OztDQVVDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLFdBQVc7QUFDWjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztDQUNYLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsMENBQTBDO0NBQzFDLGlDQUFpQztBQUNsQztBQUVBOzs7Q0FHQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7QUFDQTs7O0NBR0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixZQUFZO0NBQ1osY0FBYztDQUNkLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLFdBQVc7RUFDVjtBQUNBO0NBQ0QsMEVBQTBFO0VBQ3pFO0FBRUY7Q0FDQyxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7RUFDZjtBQUVBO0NBQ0QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsTUFBTTtDQUNOLFlBQVk7Q0FDWixnQkFBZ0I7RUFDZjtBQUVBO0NBQ0QsbUJBQW1CO0VBQ2xCO0FBRUE7Q0FDRCxVQUFVO0NBQ1YsUUFBUTtFQUNQIiwiZmlsZSI6InNyYy9hcHAvZG9jLWFwcG9pbnRtZW50L2RvYy1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc3R5bGUtNXtcclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjRmN2Y4O1xyXG5cdG1hcmdpbjogMTBweCBhdXRvO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y0ZjdmODtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0Zm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uZm9ybS1zdHlsZS01IGZpZWxkc2V0e1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9ybS1zdHlsZS01IGxlZ2VuZCB7XHJcblx0Zm9udC1zaXplOiAxLjRlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgbGFiZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbi5mb3JtLXN0eWxlLTUgdGV4dGFyZWEsXHJcbi5mb3JtLXN0eWxlLTUgc2VsZWN0IHtcclxuXHRmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgXHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U4ZWVlZjtcclxuXHRjb2xvcjojOGE5N2EwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInRpbWVcIl06Zm9jdXMsXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSB0ZXh0YXJlYTpmb2N1cyxcclxuLmZvcm0tc3R5bGUtNSBzZWxlY3Q6Zm9jdXN7XHJcblx0YmFja2dyb3VuZDogI2QyZDlkZDtcclxufVxyXG4uZm9ybS1zdHlsZS01IHNlbGVjdHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG1lbnVsaXN0LWJ1dHRvbjtcclxuXHRoZWlnaHQ6MzVweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IC5udW1iZXIge1xyXG5cdGJhY2tncm91bmQ6ICMxYWJjOWM7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDAuOGVtO1xyXG5cdG1hcmdpbi1yaWdodDogNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbi5mb3JtLXN0eWxlLTUgYnV0dG9uW3R5cGU9XCJidXR0b25cIl1cclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAxOXB4IDM5cHggMThweCAzOXB4O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGJhY2tncm91bmQ6ICMxYWJjOWM7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzE2YTA4NTtcclxuXHRib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQ6ICMxMDkxNzc7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHdpZHRoOiAxNTBweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5idXR0b246aG92ZXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gIH1cclxuXHJcbi5idXR0b24gc3BhbiB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuXHRjb250ZW50OiAnXFwwMGJiJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IC0yMHB4O1xyXG5cdHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIgc3BhbiB7XHJcblx0cGFkZGluZy1yaWdodDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doc-appointment',
                templateUrl: './doc-appointment.component.html',
                styleUrls: ['./doc-appointment.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/foodservice/foodservice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/foodservice/foodservice.component.ts ***!
  \******************************************************/
/*! exports provided: FoodserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodserviceComponent", function() { return FoodserviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FoodserviceComponent {
    constructor() { }
    ngOnInit() {
    }
}
FoodserviceComponent.ɵfac = function FoodserviceComponent_Factory(t) { return new (t || FoodserviceComponent)(); };
FoodserviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodserviceComponent, selectors: [["app-foodservice"]], decls: 2, vars: 0, template: function FoodserviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "foodservice works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RzZXJ2aWNlL2Zvb2RzZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodserviceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-foodservice',
                templateUrl: './foodservice.component.html',
                styleUrls: ['./foodservice.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/freefood/freefood.component.ts":
/*!************************************************!*\
  !*** ./src/app/freefood/freefood.component.ts ***!
  \************************************************/
/*! exports provided: FreefoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreefoodComponent", function() { return FreefoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FreefoodComponent_tbody_14_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.state);
} }
function FreefoodComponent_tbody_14_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.city);
} }
function FreefoodComponent_tbody_14_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.descriptionandorserviceprovided);
} }
function FreefoodComponent_tbody_14_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.nameoftheorganisation);
} }
function FreefoodComponent_tbody_14_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.phonenumber);
} }
function FreefoodComponent_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreefoodComponent_tbody_14_tr_1_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FreefoodComponent_tbody_14_tr_1_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreefoodComponent_tbody_14_tr_1_td_3_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FreefoodComponent_tbody_14_tr_1_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FreefoodComponent_tbody_14_tr_1_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]");
} }
function FreefoodComponent_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FreefoodComponent_tbody_14_tr_1_Template, 6, 5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r1.resources);
} }
class FreefoodComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        let response = this.service.getEssentialResource();
        response.subscribe((data) => this.details = [data]);
    }
}
FreefoodComponent.ɵfac = function FreefoodComponent_Factory(t) { return new (t || FreefoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
FreefoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FreefoodComponent, selectors: [["app-freefood"]], decls: 15, vars: 1, consts: [[1, "container", "pt-4", "table-responsive"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function FreefoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Service Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name of the organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FreefoodComponent_tbody_14_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWVmb29kL2ZyZWVmb29kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreefoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-freefood',
                templateUrl: './freefood.component.html',
                styleUrls: ['./freefood.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/healthcare/healthcare.component.ts":
/*!****************************************************!*\
  !*** ./src/app/healthcare/healthcare.component.ts ***!
  \****************************************************/
/*! exports provided: HealthcareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthcareComponent", function() { return HealthcareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HealthcareComponent_tbody_14_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.state);
} }
function HealthcareComponent_tbody_14_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.city);
} }
function HealthcareComponent_tbody_14_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.descriptionandorserviceprovided);
} }
function HealthcareComponent_tbody_14_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.nameoftheorganisation);
} }
function HealthcareComponent_tbody_14_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.phonenumber);
} }
function HealthcareComponent_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HealthcareComponent_tbody_14_tr_1_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HealthcareComponent_tbody_14_tr_1_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HealthcareComponent_tbody_14_tr_1_td_3_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HealthcareComponent_tbody_14_tr_1_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HealthcareComponent_tbody_14_tr_1_td_5_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "CoVID-19 Testing Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "CoVID-19 Testing Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "CoVID-19 Testing Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "CoVID-19 Testing Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", report_r3.category == "CoVID-19 Testing Lab");
} }
function HealthcareComponent_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HealthcareComponent_tbody_14_tr_1_Template, 6, 5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", detail_r1.resources);
} }
class HealthcareComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        let response = this.service.getEssentialResource();
        response.subscribe((data) => this.details = [data]);
    }
}
HealthcareComponent.ɵfac = function HealthcareComponent_Factory(t) { return new (t || HealthcareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
HealthcareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthcareComponent, selectors: [["app-healthcare"]], decls: 15, vars: 1, consts: [[1, "container", "pt-4"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-none d-lg-block", 4, "ngIf"], [4, "ngIf"], [1, "d-none", "d-lg-block"]], template: function HealthcareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Service Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name of the organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HealthcareComponent_tbody_14_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aGNhcmUvaGVhbHRoY2FyZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthcareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-healthcare',
                templateUrl: './healthcare.component.html',
                styleUrls: ['./healthcare.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomeComponent_tbody_21_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.state);
} }
function HomeComponent_tbody_21_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.confirmed);
} }
function HomeComponent_tbody_21_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.deaths);
} }
function HomeComponent_tbody_21_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.recovered);
} }
function HomeComponent_tbody_21_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.deltaconfirmed);
} }
function HomeComponent_tbody_21_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.deltadeaths);
} }
function HomeComponent_tbody_21_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r5.lastupdatedtime);
} }
function HomeComponent_tbody_21_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_21_tr_1_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_tbody_21_tr_1_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_tbody_21_tr_1_td_3_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_tbody_21_tr_1_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_tbody_21_tr_1_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_tbody_21_tr_1_td_6_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_tbody_21_tr_1_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r5.state == "Total");
} }
function HomeComponent_tbody_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_21_tr_1_Template, 8, 7, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r3.statewise);
} }
function HomeComponent_tbody_42_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.state);
} }
function HomeComponent_tbody_42_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.confirmed);
} }
function HomeComponent_tbody_42_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.deaths);
} }
function HomeComponent_tbody_42_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.recovered);
} }
function HomeComponent_tbody_42_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.deltaconfirmed);
} }
function HomeComponent_tbody_42_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.deltadeaths);
} }
function HomeComponent_tbody_42_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r22.lastupdatedtime);
} }
function HomeComponent_tbody_42_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_42_tr_1_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_tbody_42_tr_1_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_tbody_42_tr_1_td_3_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_tbody_42_tr_1_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_tbody_42_tr_1_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_tbody_42_tr_1_td_6_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_tbody_42_tr_1_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r22.state == "Telangana");
} }
function HomeComponent_tbody_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_42_tr_1_Template, 8, 7, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r20.statewise);
} }
function HomeComponent_tbody_63_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.state);
} }
function HomeComponent_tbody_63_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.confirmed);
} }
function HomeComponent_tbody_63_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.deaths);
} }
function HomeComponent_tbody_63_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.recovered);
} }
function HomeComponent_tbody_63_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.deltaconfirmed);
} }
function HomeComponent_tbody_63_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.deltadeaths);
} }
function HomeComponent_tbody_63_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rep_r39.lastupdatedtime);
} }
function HomeComponent_tbody_63_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_63_tr_1_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_tbody_63_tr_1_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_tbody_63_tr_1_td_3_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_tbody_63_tr_1_td_4_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_tbody_63_tr_1_td_5_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_tbody_63_tr_1_td_6_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_tbody_63_tr_1_td_7_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rep_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rep_r39.state != "Telangana" && rep_r39.state != "Total");
} }
function HomeComponent_tbody_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_tbody_63_tr_1_Template, 8, 7, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r37.statewise);
} }
class HomeComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        let response = this.service.getCaseReport();
        response.subscribe((data) => this.cases = [data]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 3, consts: [[1, "container", "pt-4", 2, "text-align", "center", "font-size", "large", "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"], [1, "container", "pd-5", "pr-5", "pl-5"], [1, "table-responsive", "pt-4"], [1, "table", "table-striped", "pl-10", "pt-10"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Corona Cases confirmed all over India\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delta Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delta Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_tbody_21_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Corona Cases in Telangana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Delta Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Delta Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_tbody_42_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Corona Cases StateWise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Delta Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Delta Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HomeComponent_tbody_63_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cases);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["p[_ngcontent-%COMP%]{\r\n  padding: 35px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n  background: rgb(255,255,255);\r\n  background: linear-gradient(152deg, rgba(255,255,255,1) 0%, rgba(251,253,253,1) 15%, rgba(237,245,246,1) 32%);\r\n}\r\n#formdiv[_ngcontent-%COMP%]{width: 300px; height: 300px; margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2R0FBNkc7QUFDL0c7QUFDQSxTQUFTLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTJkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjUxLDI1MywyNTMsMSkgMTUlLCByZ2JhKDIzNywyNDUsMjQ2LDEpIDMyJSk7XHJcbn1cclxuI2Zvcm1kaXZ7d2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDMwMHB4OyBtYXJnaW46IDAgYXV0bzt9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginpageComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    doLogin() {
        let response = this.service.login(this.username, this.password);
        response.subscribe((data) => {
            this.router.navigate(['/adminpanel']);
        }, (error) => console.log(this.responsemessage));
    }
}
LoginpageComponent.ɵfac = function LoginpageComponent_Factory(t) { return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginpageComponent, selectors: [["app-loginpage"]], decls: 29, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], ["data-tilt", "", 1, "login100-pic", "js-tilt"], ["src", "./assets/images/img-01.png", "alt", "IMG"], ["action", "login", "method", "POST", 1, "login100-form", "validate-form"], [1, "login100-form-title"], ["data-validate", "Valid Username is required", 1, "wrap-input100", "validate-input"], ["type", "text", "name", "username", "placeholder", "Username", 1, "input100", 3, "ngModel", "ngModelChange"], [1, "focus-input100"], [1, "symbol-input100"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["data-validate", "Password is required", 1, "wrap-input100", "validate-input"], ["type", "password", "name", "password", "placeholder", "Password", 1, "input100", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "container-login100-form-btn"], ["value", "Login", "type", "submit", 1, "login100-form-btn", 3, "click"]], template: function LoginpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login V1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Admin Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginpageComponent_Template_button_click_26_listener() { return ctx.doLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.responsemessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loginpage',
                templateUrl: './loginpage.component.html',
                styleUrls: ['./loginpage.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navibar/navibar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navibar/navibar.component.ts ***!
  \**********************************************/
/*! exports provided: NavibarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavibarComponent", function() { return NavibarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["about"]; };
const _c2 = function () { return ["services"]; };
const _c3 = function () { return ["login"]; };
class NavibarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavibarComponent.ɵfac = function NavibarComponent_Factory(t) { return new (t || NavibarComponent)(); };
NavibarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavibarComponent, selectors: [["app-navibar"]], decls: 32, vars: 16, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 2, "font-size", "larger"], ["src", "assets/images/img2.png", "width", "30", "height", "30", "alt", "", 1, "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "form-inline", "my-2", "my-lg-0", "d-none", "d-lg-block"], ["mat-button", "", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0", "d-block", "d-sm-none"]], template: function NavibarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Goverment of Telangana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What is Covid19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "What is Covid19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".img[_ngcontent-%COMP%]{\r\n  height: 10px;\r\n}\r\n.spacer[_ngcontent-%COMP%]{\r\n  flex: 1 1 auto;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: large;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWJhci9uYXZpYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWJhci9uYXZpYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uc3BhY2Vye1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5ib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavibarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navibar',
                templateUrl: './navibar.component.html',
                styleUrls: ['./navibar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/onlinecourses/onlinecourses.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/onlinecourses/onlinecourses.component.ts ***!
  \**********************************************************/
/*! exports provided: OnlinecoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinecoursesComponent", function() { return OnlinecoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class OnlinecoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnlinecoursesComponent.ɵfac = function OnlinecoursesComponent_Factory(t) { return new (t || OnlinecoursesComponent)(); };
OnlinecoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlinecoursesComponent, selectors: [["app-onlinecourses"]], decls: 76, vars: 0, consts: [[1, "container", "pt-4"], [1, "card-columns", "col-12"], [1, "card", "border-success", "mb-3", 2, "max-width", "18rem"], [1, "card-header"], [1, "card-body", "text-success"], [1, "card-title"], ["mat-button", "", "href", "https://online-learning.harvard.edu/catalog/free", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.edx.org/course/academic-writing-made-easy-2", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://learndigital.withgoogle.com/digitalunlocked/courses", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.futurelearn.com/courses", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.corsera.org/collections/free-online-courses-finish-in-a-day", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.indiaeducation.net/online-education/11-free-online-courses-that-you-can-take-up-from-home.htm", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.onlinestudies.com/Courses", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.edureka.co", 1, "text-uppercase", "text-muted", "small"], ["mat-button", "", "href", "https://www.freecodecamp.org", 1, "text-uppercase", "text-muted", "small"]], template: function OnlinecoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Harvard University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Free Online Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EDX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Learn with EDX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Free online courses from Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FutureLearn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Free Online Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Coursera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Free Courses from Coursera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "India Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Free Online Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Online Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Free Online Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Edureka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Courses From Edureka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Code Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Free programming courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZWNvdXJzZXMvb25saW5lY291cnNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlinecoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onlinecourses',
                templateUrl: './onlinecourses.component.html',
                styleUrls: ['./onlinecourses.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ourservices/ourservices.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ourservices/ourservices.component.ts ***!
  \******************************************************/
/*! exports provided: OurservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurservicesComponent", function() { return OurservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["addpass"]; };
const _c1 = function () { return ["fixappointment"]; };
const _c2 = function () { return ["healthcare"]; };
const _c3 = function () { return ["onlinecourses"]; };
const _c4 = function () { return ["freefood"]; };
const _c5 = function () { return ["volreg"]; };
class OurservicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
OurservicesComponent.ɵfac = function OurservicesComponent_Factory(t) { return new (t || OurservicesComponent)(); };
OurservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurservicesComponent, selectors: [["app-ourservices"]], decls: 90, vars: 12, consts: [[1, "container", "col-md-8", "pt-4", "pb-4"], [1, "row"], [1, "col-sm-6", "col-lg-4", "pt-4"], [1, "card", 2, "width", "18rem"], ["src", "./assets/images/epass.jpg", 1, "card-img-top", "img-thumbnail"], [1, "card-body"], [1, "card-title", 2, "font-size", "20px"], [1, "card-text"], ["mat-button", "", 1, "btn", "btn-primary", 3, "routerLink"], ["src", "./assets/images/docappoint.png", 1, "card-img-top", "img-thumbnail"], ["src", "./assets/images/testinglabs.jfif", 1, "card-img-topimg-thumbnail"], ["src", "./assets/images/cmfund.jfif", 1, "card-img-top", "img-thumbnail"], ["mat-button", "", "href", "https://telangana.gov.in/cm-relief-fund", 1, "btn", "btn-primary"], [1, "card", 2, "max-width", "18rem"], ["src", "./assets/images/onlinecourse.jfif", 1, "card-img-top", "img-thumbnail"], ["src", "./assets/images/food.jfif", 1, "card-img-top", "img-thumbnail"], [1, "col-sm-6", "col-lg-4", "pt-4", "pb-4"]], template: function OurservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Emergency Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Apply E-pass in case of emergency situation only. Do not misuse the pass.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Keep distance Stay safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Doctor Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Apply for Doctor Appointment in case of emergency. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stay safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Covid-19 Testing Labs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This shows the list of Covid-19 testing labs authorized by Indian Goverment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Donate For CM Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Let's help the people who are in need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Stay home stay safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Online Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Learning should not be stopped, so let's keep ouselves updated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Food Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "List of food services for those in need");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Those who are interested in volunteering for Covid-19 pandemic can apply here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291cnNlcnZpY2VzL291cnNlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ourservices',
                templateUrl: './ourservices.component.html',
                styleUrls: ['./ourservices.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/viewdocappointments/viewdocappointments.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/viewdocappointments/viewdocappointments.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewdocappointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdocappointmentsComponent", function() { return ViewdocappointmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ViewdocappointmentsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewdocappointmentsComponent_tr_19_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const appointment_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.appointmentdone(appointment_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appointment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.phno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.appointmentdatetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r1.altno);
} }
class ViewdocappointmentsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        let response = this.service.getAppointments();
        response.subscribe((data) => this.appointments = data);
    }
    appointmentdone(id) {
        let response = this.service.appointmentdone(id);
        response.subscribe((data) => this.appointments = data);
    }
}
ViewdocappointmentsComponent.ɵfac = function ViewdocappointmentsComponent_Factory(t) { return new (t || ViewdocappointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
ViewdocappointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewdocappointmentsComponent, selectors: [["app-viewdocappointments"]], decls: 20, vars: 1, consts: [[1, "container"], [1, "row", "col-md-12", "col-md-offset-2", "custyle", "table-responsive"], [1, "table", "table-striped", "custab"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-danger", "btn-xs", 3, "click"], [1, "glyphicon", "glyphicon-remove"]], template: function ViewdocappointmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date and Time of Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewdocappointmentsComponent_tr_19_Template, 21, 8, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdkb2NhcHBvaW50bWVudHMvdmlld2RvY2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewdocappointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewdocappointments',
                templateUrl: './viewdocappointments.component.html',
                styleUrls: ['./viewdocappointments.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/viewpass/viewpass.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewpass/viewpass.component.ts ***!
  \************************************************/
/*! exports provided: ViewpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpassComponent", function() { return ViewpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ViewpassComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewpassComponent_tr_23_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pass_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.passissued(pass_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Issued");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pass_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.phno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.vhno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pass_r1.destination);
} }
class ViewpassComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        let response = this.service.getPasses();
        response.subscribe((data) => this.passes = data);
    }
    passissued(id) {
        let response = this.service.passIssued(id); //to delete issued pass by selected id and return the passes
        response.subscribe((data) => this.passes = data);
    }
}
ViewpassComponent.ɵfac = function ViewpassComponent_Factory(t) { return new (t || ViewpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewpassComponent, selectors: [["app-viewpass"]], decls: 24, vars: 1, consts: [[1, "container"], [1, "row", "col-md-12", "col-md-offset-2", "custyle", "table-responsive"], [1, "table", "table-striped", "custab"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-danger", "btn-xs", 3, "click"], [1, "glyphicon", "glyphicon-remove"]], template: function ViewpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vehicle Nummber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewpassComponent_tr_23_Template, 19, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdwYXNzL3ZpZXdwYXNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewpass',
                templateUrl: './viewpass.component.html',
                styleUrls: ['./viewpass.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/viewvol/viewvol.component.ts":
/*!**********************************************!*\
  !*** ./src/app/viewvol/viewvol.component.ts ***!
  \**********************************************/
/*! exports provided: ViewvolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewvolComponent", function() { return ViewvolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ViewvolComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volunteer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.fname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.phno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.qualification);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volunteer_r1.altno);
} }
class ViewvolComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        let response = this.service.getPasses();
        response.subscribe((data) => this.volunteers = data);
    }
}
ViewvolComponent.ɵfac = function ViewvolComponent_Factory(t) { return new (t || ViewvolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
ViewvolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewvolComponent, selectors: [["app-viewvol"]], decls: 24, vars: 1, consts: [[1, "container", "pt-4"], [1, "container"], [1, "row", "col-md-12", "col-md-offset-2", "custyle", "table-responsive"], [1, "table", "table-striped", "custab"], [4, "ngFor", "ngForOf"]], template: function ViewvolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FathernName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Qualification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Alternate No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewvolComponent_tr_23_Template, 17, 8, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.volunteers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[ Ver5 ]*/\r\n.table100.ver5[_ngcontent-%COMP%] {\r\n  margin-right: -30px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-head[_ngcontent-%COMP%] {\r\n  padding-right: 30px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-family: Lato-Bold;\r\n  font-size: 14px;\r\n  color: #555555;\r\n  line-height: 1.4;\r\n  text-transform: uppercase;\r\n\r\n  background-color: transparent;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-family: Lato-Regular;\r\n  font-size: 15px;\r\n  color: #808080;\r\n  line-height: 1.4;\r\n\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  overflow: hidden; \r\n  border-bottom: 10px solid #fff;\r\n  border-radius: 10px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] { \r\n  border-collapse: separate; \r\n  border-spacing: 0 10px; \r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: solid 1px transparent;\r\n    border-style: solid none;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n    border-left-style: solid;\r\n    border-top-left-radius: 10px; \r\n    border-bottom-left-radius: 10px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-right-style: solid;\r\n    border-bottom-right-radius: 10px; \r\n    border-top-right-radius: 10px; \r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n  cursor: pointer;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.table100.ver5[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .table100-body[_ngcontent-%COMP%]{\r\n  padding-right: 30px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%] {\r\n  right: 0px;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]::before {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.table100.ver5[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%]::before {\r\n  background-color: #cccccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3ZvbC92aWV3dm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5Qjs7RUFFekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCOztFQUVoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC92aWV3dm9sL3ZpZXd2b2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlsgVmVyNSBdKi9cclxuLnRhYmxlMTAwLnZlcjUge1xyXG4gIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbn1cclxuXHJcbi50YWJsZTEwMC52ZXI1IC50YWJsZTEwMC1oZWFkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udGFibGUxMDAudmVyNSB0aCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRhYmxlMTAwLnZlcjUgdGQge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50YWJsZTEwMC52ZXI1IC50YWJsZTEwMC1ib2R5IHRyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWJvZHkgdGFibGUgeyBcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlOyBcclxuICBib3JkZXItc3BhY2luZzogMCAxMHB4OyBcclxufVxyXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0ZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDsgXHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YWJsZTEwMC52ZXI1IC50YWJsZTEwMC1ib2R5IHRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4OyBcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyBcclxufVxyXG5cclxuLnRhYmxlMTAwLnZlcjUgdHI6aG92ZXIgdGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtaGVhZCB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi50YWJsZTEwMC52ZXI1IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keXtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udGFibGUxMDAudmVyNSAucHNfX3JhaWwteSB7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXk6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXkgLnBzX190aHVtYi15OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewvolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewvol',
                templateUrl: './viewvol.component.html',
                styleUrls: ['./viewvol.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Covid-19 Front-End\Covid19-Front-End\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map