(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<head>\n    <!-- Bootstrap core CSS -->\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n          integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n    <!-- Bootstrap core JavaScript -->\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n            integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n            crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\n            integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\n            crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\n            integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\n            crossorigin=\"anonymous\"></script>\n\n</head>\n\n<!--Dashboard (Top Nav)-->\n<app-dashboard></app-dashboard>\n\n<div class=\"d-flex\" id=\"wrapper\">\n    <!-- Side navbar -->\n    <app-nav-bar></app-nav-bar>\n    <!--        <button class=\"btn btn-primary\" id=\"menu-toggle\">Hide</button>-->\n\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n<!-- Menu Toggle Script -->\n<script>\n    $('#menu-toggle').click(function (e) {\n        e.preventDefault();\n        $('#menu-toggle').text('Show');\n        $('#wrapper').toggleClass('toggled');\n    });\n</script>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/logo.png\" width=\"50\" height=\"50\" class=\"d-inline-block align-top\" alt=\"\">\n    PatientPal\n  </a>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-form-question/dynamic-form-question.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-form-question/dynamic-form-question.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div [formGroup]=\"form\" id=\"form\">\n        <b><label [attr.for]=\"question.key\">{{question.label}}</label></b>\n\n        <div [ngSwitch]=\"question.controlType\" id=\"inputs\">\n            <!--TextBox-->\n            <div *ngSwitchCase=\"'textbox'\" style=\"margin-bottom: 24%;\">\n                <input class=\"form-control\" [formControlName]=\"question.key\"\n                       [id]=\"question.key\" [type]=\"question.type\" ngModel=\"{{question.label}}\"\n                       style=\"display: block; width: 20vw\">\n\n            </div>\n\n            <!--DropDown-->\n            <div *ngSwitchCase=\"'dropdown'\" style=\"margin-bottom: 50%;\">\n                <select class=\"form-control\" [id]=\"question.key\" [formControlName]=\"question.key\"\n                        style=\"display: block; width: 20vw;\">\n                    <option *ngFor=\"let opt of question.options\" [value]=\"opt.key\" id=\"drop\">{{opt.value}}</option>\n                </select>\n            </div>\n\n            <!--Radio-->\n            <div *ngSwitchCase=\"'radio'\">\n                <div *ngFor=\"let opt of question.options\">\n                    <input type=\"radio\"\n                           [formControlName]=\"question.key\"\n                           [id]=\"question.key\"\n                           [name]=\"question.key\"\n                           [value]=\"opt.key\"\n                           id=\"radioBtn\"\n                           checked>\n                    <label style=\"margin-bottom: 5%; margin-top: 5%\">{{opt.value}}</label>\n                </div>\n            </div>\n\n            <!--NumberField-->\n            <div *ngSwitchCase=\"'number'\">\n                <input class=\"form-control\" [formControlName]=\"question.key\"\n                       [id]=\"question.key\" [type]=\"question.type\" id=\"number\">\n            </div>\n\n            <div class=\"errorMessage\" class=\"alert-danger\" *ngIf=\"!isValid\">{{question.label}} is required</div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-builder/form-builder.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-builder/form-builder.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div *ngIf=\"survey\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n        <div *ngFor=\"let question of fields\" class=\"form-row\" id=\"row\">\n            <app-question [question]=\"question\" [form]=\"form\"></app-question>\n        </div>\n\n        <div class=\"form-row\">\n            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n        </div>\n    </form>\n\n    <div *ngIf=\"payLoad\" class=\"form-row\">\n        <strong>Saved the following values</strong><br>{{payLoad}}\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\n  <div class=\"sidebar-heading\">\n      <button class=\"btn btn-primary\" style=\"width: 100%;\">New</button>\n  </div>\n    <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\" routerLink=\"/tab-views\">\n      <div class=\"nav-div-parent\">\n        <div class=\"nav-div-child1\">\n          <img class=\"nav-icons\" src=\"assets/icons/tab-views.svg\">\n        </div>\n        <div class=\"nav-div-child2\">\n          <p class=\"nav-div-child2p\">Tab Views</p>\n        </div>\n      </div>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">\n      <div class=\"nav-div-parent\">\n        <div class=\"nav-div-child1\">\n          <img class=\"nav-icons\" src=\"assets/icons/deployed.svg\">\n        </div>\n        <div class=\"nav-div-child2\">\n          <p class=\"nav-div-child2p\">Deployed</p>\n        </div>\n      </div>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">\n      <div class=\"nav-div-parent\">\n        <div class=\"nav-div-child1\">\n          <img class=\"nav-icons\" src=\"assets/icons/draft.svg\">\n        </div>\n        <div class=\"nav-div-child2\">\n          <p class=\"nav-div-child2p\">Draft</p>\n        </div>\n      </div>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">\n      <div class=\"nav-div-parent\">\n        <div class=\"nav-div-child1\">\n          <img class=\"nav-icons\" src=\"assets/icons/archived.svg\">\n        </div>\n        <div class=\"nav-div-child2\">\n          <p class=\"nav-div-child2p\">Archived</p>\n        </div>\n      </div>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">\n      <div class=\"nav-div-parent\">\n        <div class=\"nav-div-child1\">\n          <img class=\"nav-icons\" src=\"assets/icons/my-library.svg\">\n        </div>\n        <div class=\"nav-div-child2\">\n          <p class=\"nav-div-child2p\">My Library</p>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/new-tab-view-dialog.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/new-tab-view-dialog.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title> Import New Tab View</h1>\n    <div mat-dialog-content>\n        <p>Please select an XLSX file</p>\n        <mat-form-field>\n            <input matInput id=\"fileSelector\" type=\"file\" accept=\".xlsx\" (change)=\"handleFile($event)\">\n        </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-button (click)=\"onNoClick()\" class=\"btn-light\">Cancel</button>\n        <button mat-button mat-dialog-close=\"openTabView()\" routerLink=\"/detail/{{entityId}}\" class=\"btn-light\"\n                cdkFocusInitial>Import\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\" *ngIf=\"survey\">\n    <h2 id=\"test\">{{survey.tabDesc}}</h2>\n    <ng-xform [horizontalForm]=\"horizontal\" [labelWidth]=\"labelWidth\" [fields]=\"fields\" id=\"xform\"></ng-xform>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/deployed-link.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/deployed-link.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title> Survey Deployed!</h1>\n    <div mat-dialog-content>\n        <p>Form Link</p>\n        <mat-form-field>\n            <input matInput type=\"text\" id=\"link\" id=\"link\" [(ngModel)]=\"link\" style=\"width: 40vh\">\n        </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-button (click)=\"onNoClick()\" class=\"btn-light\">Cancel</button>\n        <button mat-button mat-dialog-close=\"copyText()\" class=\"btn-light\" cdkFocusInitial (click)=\"copyText()\">Copy\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/survey-details.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/survey-details.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light position-fixed\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <button class=\"nav-link\" (click)=\"saveSurvey()\">\n                    <div>\n                        <img class=\"nav-icons\" src=\"assets/icons/save.svg\">\n                    </div>\n                </button>\n            </li>\n            <li class=\"nav-item\">\n                <button class=\"nav-link\" (click)=\"submit()\">\n                    Submit\n                </button>\n            </li>\n            <li class=\"nav-item\">\n                <button class=\"nav-link\" (click)=\"goBack()\">\n                    <div>\n                        <img class=\"nav-icons\" src=\"assets/icons/back.svg\">\n                    </div>\n                </button>\n            </li>\n            <li class=\"nav-item\">\n                <button class=\"nav-link\" (click)=\"exportAsXLSX()\">\n                    <div>\n                        <img class=\"nav-icons\" src=\"assets/icons/export.svg\">\n                    </div>\n                </button>\n            </li>\n            <li>\n                <div class=\"submit-child\">\n                    <button class=\"btn btn-primary\" id=\"exp-btn\" (click)=\"deploy()\"> Deploy</button>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <div id=\"nav2\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Title</span>\n                    </div>\n                    <div class=\"input-group-append\">\n                        <span *ngIf=\"tabViews\">{{tabViews[0].tabViewLabel}}</span>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<br/> <br/>\n<div>\n\n    <div id=\"wrapper\" *ngIf=\"survey\">\n\n        <div id=\"questions\">\n            <form (ngSubmit)=\"saveSurvey()\" id=\"form\">\n                <div *ngFor=\"let assessments of survey.assessments; let i = index\" id=\"assessments\">\n                    <div class=\"title-div\">\n                        <div class=\"title-div-child1\">\n                            <p>Title:</p>\n                        </div>\n                        <div class=\"title-div-child2\">\n                            <input class=\"form-control\" [value]=\"assessments.assessmentDesc\" [attr.id]=assessments.id>\n                        </div>\n                    </div>\n\n                    <!--Assessment 5-->\n                    <div id=\"ass5\" *ngIf=\"assessments.asessmentType.toString() === '5'\">\n                        <div id=\"btn-div-1\">\n                            <div>\n                                <button (click)=\"preview.createRadioGroup(i)\" id=\"selectRadio\"\n                                        class=\"btn btn-outline-primary\">\n                                    Radio\n                                </button>\n                            </div>\n                            <div>\n                                <button (click)=\"preview.createCheckBox(i)\" id=\"checkBox\"\n                                        class=\"btn btn-outline-primary\">\n                                    Checkbox\n                                </button>\n                            </div>\n                            <div>\n                                <button (click)=\"preview.createSelect(i)\" id=\"selectOneBtn\"\n                                        class=\"btn btn-outline-primary\">\n                                    Select\n                                    One\n                                </button>\n                            </div>\n                            <div>\n                                <button (click)=\"preview.createSelectMany(i)\" id=\"selectManyBtn\"\n                                        class=\"btn btn-outline-primary\">\n                                    Select Many\n                                </button>\n                            </div>\n                        </div>\n                        <div id=\"option-div-parent1\" *ngFor=\"let choices of assessments.choices let x = index\">\n                            <div id=\"option-div-child\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">Option {{x + 1}}</span>\n                                </div>\n                                <input [value]=\"choices.choiceDesc\" [attr.id]=assessments.choices[x].id\n                                       class=\"form-control\"/>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <!--Assessment 4-->\n                    <div id=\"ass4\" *ngIf=\"assessments.asessmentType.toString() === '4'\">\n                        <div id=\"option-div-parent2\">\n                            <p id=\"p-title\">Select if answer is a text or number input:</p>\n                        </div>\n                        <div id=\"btn-div-2\">\n                            <div class=\"submit-child\">\n                                <button (click)=\"preview.createText(i)\" id=\"selectTxtBtn\" class=\"btn btn-primary\">Text\n                                </button>\n                            </div>\n                            <div class=\"submit-child\">\n                                <button (click)=\"preview.createNumber(i)\" id=\"selectNumber\" class=\"btn btn-primary\">\n                                    Number\n                                </button>\n                            </div>\n                        </div>\n\n\n                    </div>\n\n                    <!--Submit Buttons-->\n                    <div id=\"submit-div\">\n                        <div class=\"submit-child\">\n                            <button (click)=\"saveQuestion(i, false)\" id=\"saveBtn\" class=\"btn btn-outline-primary\">Save\n                                Question\n                            </button>\n                        </div>\n                        <div class=\"submit-child\">\n                            <button (click)=\"saveQuestion(i, false)\" id=\"mandatory\" class=\"btn btn-outline-primary\">\n                                Mandatory\n                            </button>\n                        </div>\n                        <div class=\"submit-child\">\n                            <button (click)=\"saveQuestion(i, true)\" id=\"optional\" class=\"btn btn-outline-primary\">\n                                Optional\n                                Question\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <!--                <div id=\"save-div\">-->\n                <!--                    <button class=\"btn btn-primary\" id=\"save-btn\" (click)=\"saveSurvey()\">Save</button>-->\n                <!--                </div>-->\n            </form>\n            <!--            <div id=\"submit-div2\">-->\n            <!--                <div class=\"submit-child\">-->\n            <!--                    <button class=\"btn btn-primary\" id=\"sub-btn\" (click)=\"submit()\">Submit</button>-->\n            <!--                </div>-->\n            <!--                <div class=\"submit-child\">-->\n            <!--                    <button class=\"btn btn-primary\" id=\"back-btn\" (click)=\"goBack()\">Go Back</button>-->\n            <!--                </div>-->\n            <!--                <div class=\"submit-child\">-->\n            <!--                    <button class=\"btn btn-primary\" id=\"exp-btn\" (click)=\"exportAsXLSX()\"> Export as XLSX</button>-->\n            <!--                </div>-->\n            <!--            </div>-->\n        </div>\n\n\n        <div id=\"preview\" *ngIf=\"survey\">\n            <app-preview [survey]=\"survey\"></app-preview>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-views/tab-views.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-views/tab-views.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"search-component\" style=\"width: 700px;\">\n\n    <input #searchBox id=\"search-box\" class=\"form-control mr-sm-2\"\n           placeholder=\"Search tab view name\" type=\"text\" [(ngModel)]=\"queryString\"/>\n</div>\n\n<!--Table Data -->\n<div class=\"align-baseline\" style=\"margin-top: 20px\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-md-offset0\">\n        <table id=\"dtOrderExample\" class=\"table table-bordered table-hover\">\n            <thead>\n            <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Created</th>\n          <th scope=\"col\">Version</th>\n          <th scope=\"col\">Status</th>\n        </tr>\n        </thead>\n          <tbody class=\"search-result\">\n          <tr *ngFor=\"let tab of tabviews | tabViewSearch: queryString\" routerLink=\"/detail/{{tab.entityId}}\"\n              class=\"survey_data\">\n              <td class=\"survey_id\">{{tab.entityId }}</td>\n              <td>{{ tab.label }}</td>\n              <td>10/10/19</td>\n              <td>{{ tab.version }}</td>\n              <td>Draft</td>\n          </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<hr>\n<footer class=\"container\">\n  <p>&copy; PatientPal 2019</p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_classes/Assessment.ts":
/*!****************************************!*\
  !*** ./src/app/_classes/Assessment.ts ***!
  \****************************************/
/*! exports provided: Assessment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assessment", function() { return Assessment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Choice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choice */ "./src/app/_classes/Choice.ts");


/**
 * Used to store the mosaiq assessments that have been received from drupal
 * Assessments are defined by their id, type, description, and an array of choices
 * This format has been defined within Drupal, so that once Survey has been converted into a JSON string
 * It can match the data in Drupal
 */
class Assessment {
    /**
     * Constructor for Assessment Class
     * @param id
     * The Assessment ID
     * @param assessmentType
     * The Assessment Type
     * @param assessmentDesc
     * The description of an Assessment
     */
    constructor(id, assessmentType, assessmentDesc) {
        this.id = id;
        this.asessmentType = assessmentType;
        this.assessmentDesc = assessmentDesc;
        this.choices = new Array(); // Create an instance of an array
    }
    /**
     * Pushes a new choice to the end of the choice array
     * @param choice
     * The Choice of an assessment
     */
    addChoice(choice) {
        this.choices.push(new _Choice__WEBPACK_IMPORTED_MODULE_1__["Choice"](choice.id, choice.choiceDesc));
    }
    /**
     * Sets the Assessment's description
     * @param description
     * Description of the assessment
     */
    setAssessmentDescription(description) {
        this.assessmentDesc = description;
    }
}


/***/ }),

/***/ "./src/app/_classes/Choice.ts":
/*!************************************!*\
  !*** ./src/app/_classes/Choice.ts ***!
  \************************************/
/*! exports provided: Choice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * This class store the choices that have been imported from Drupal
 * This format has been defined within Drupal, so that once Survey has been converted into a JSON string
 * It can match the data in Drupal
 */
class Choice {
    /**
     * Constructor for Choice class
     * @param id
     * The ID of a choice
     * @param choiceDesc
     * The description of a choice
     */
    constructor(id, choiceDesc) {
        this.id = id;
        this.choiceDesc = choiceDesc;
    }
    /**
     * This function sets a new choice description
     * @param choiceDescription
     * The description of a choice
     */
    setChoiceDescription(choiceDescription) {
        this.choiceDesc = choiceDescription;
    }
}


/***/ }),

/***/ "./src/app/_classes/Survey.ts":
/*!************************************!*\
  !*** ./src/app/_classes/Survey.ts ***!
  \************************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Contains all the assessments and choices that have been imported from Drupal
 * The format of this class has been defined in Drupal, so that it can easily be converted into a JSON string
 * And update the corresponding data in Drupal
 */
class Survey {
    /**
     * Constructor for Survey class
     * @param tabId
     * The entity ID of a tabview
     * @param tabDesc
     * The tabview description
     */
    constructor(tabId, tabDesc) {
        this.tabId = tabId;
        this.tabDesc = tabDesc;
        this.assessments = new Array(); // Creates an instance of an array
    }
    /**
     * Pushes an assessment into the assessment array
     * @param assessment
     * A tabview assessment
     */
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}


/***/ }),

/***/ "./src/app/_classes/Worksheet.ts":
/*!***************************************!*\
  !*** ./src/app/_classes/Worksheet.ts ***!
  \***************************************/
/*! exports provided: Worksheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worksheet", function() { return Worksheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * The drupal data that will be exported as an xlsx worksheet
 */
class Worksheet {
    /**
     * Choice's unique ID
     */
    /**
     * Constructor for Worksheet class
     * @param tabViewLabel
     * @param tabViewId
     * @param assessmentId
     * @param assessmentDescription
     * @param assessmentType
     * @param assessmentLabel
     * @param choiceId
     * @param choiceDescription
     * @param choiceLabel
     */
    constructor(tabViewLabel, tabViewId, assessmentId, assessmentDescription, assessmentType, assessmentLabel, choiceId, choiceDescription, choiceLabel) {
        this.tabViewLabel = tabViewLabel;
        this.tabViewId = tabViewId;
        this.assessmentId = assessmentId;
        this.assessmentDescription = assessmentDescription;
        this.assessmentType = assessmentType;
        this.assessmentLabel = assessmentLabel;
        this.choiceId = choiceId;
        this.choiceDescription = choiceDescription;
        this.choiceLabel = choiceLabel;
    }
}


/***/ }),

/***/ "./src/app/_questions/question-base.ts":
/*!*********************************************!*\
  !*** ./src/app/_questions/question-base.ts ***!
  \*********************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuestionBase {
    constructor(options = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}


/***/ }),

/***/ "./src/app/_questions/question-dropdown.ts":
/*!*************************************************!*\
  !*** ./src/app/_questions/question-dropdown.ts ***!
  \*************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/_questions/question-base.ts");


class DropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"] {
    constructor(options = {}, choices) {
        super(options);
        this.controlType = 'dropdown';
        this.options = [];
        this.options = options['options'] || [];
        choices.forEach((choice, index) => {
            this.options[index].key = choice.id.toString();
            this.options[index].value = choice.choiceDesc;
        });
    }
}


/***/ }),

/***/ "./src/app/_questions/question-number.ts":
/*!***********************************************!*\
  !*** ./src/app/_questions/question-number.ts ***!
  \***********************************************/
/*! exports provided: NumberQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberQuestion", function() { return NumberQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/_questions/question-base.ts");


class NumberQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"] {
    constructor(options = {}) {
        super(options);
        this.controlType = 'number';
        this.type = options['type'] || '';
    }
}


/***/ }),

/***/ "./src/app/_questions/question-radio.ts":
/*!**********************************************!*\
  !*** ./src/app/_questions/question-radio.ts ***!
  \**********************************************/
/*! exports provided: RadioQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioQuestion", function() { return RadioQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/_questions/question-base.ts");


class RadioQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"] {
    constructor(options = {}, choices) {
        super(options);
        this.controlType = 'radio';
        this.options = [];
        this.options = options['options'] || [];
        choices.forEach((choice, index) => {
            this.options[index].key = choice.id.toString();
            this.options[index].value = choice.choiceDesc;
        });
    }
}


/***/ }),

/***/ "./src/app/_questions/question-textbox.ts":
/*!************************************************!*\
  !*** ./src/app/_questions/question-textbox.ts ***!
  \************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/_questions/question-base.ts");


class TextboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"] {
    constructor(options = {}) {
        super(options);
        this.controlType = 'textbox';
        this.type = options['type'] || '';
    }
}


/***/ }),

/***/ "./src/app/_services/excel.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/excel.service.ts ***!
  \********************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = 
/**
 * Service class that exports xlsx files to the clients machine.
 */
class ExcelService {
    constructor() {
    }
    /**
     * Exports the given json string into an excel file on the client's machine
     * @param assessments
     * JSON payload that will be used to create the XLSX file
     * @param fileName
     * Name of the file
     */
    exportExcelFile(assessments, fileName) {
        const assessmentWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(assessments);
        let workbook = {
            Sheets: { 'data': assessmentWorksheet }, SheetNames: ['data']
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, fileName);
    }
    /**
     * Saves as excel file
     * @param buffer
     * The buffer
     * @param fileName
     * Name of the file
     */
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    setExcelData(blob, id) {
        this.excelData = undefined;
        this.excelData = blob;
        this.excelId = id;
    }
    getExcelData() {
        let tmp = this.excelData;
        this.clearData();
        return tmp;
    }
    clearData() {
        this.excelData = undefined;
    }
    getID() {
        return this.excelId;
    }
};
ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /**
     * Service class that exports xlsx files to the clients machine.
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExcelService);



/***/ }),

/***/ "./src/app/_services/message.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ "./src/app/_services/question-control.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/question-control.service.ts ***!
  \*******************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let QuestionControlService = class QuestionControlService {
    constructor() {
    }
    toFormGroup(questions) {
        let group = {};
        questions.forEach(question => {
            group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
    }
};
QuestionControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuestionControlService);



/***/ }),

/***/ "./src/app/_services/survey.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/survey.service.ts ***!
  \*********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let SurveyService = class SurveyService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /**
     * GET TabViewList from drupal
     * Will return 404 if not found
     */
    getTabViewList() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].drupalURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(_ => this.log('fetched tabViews')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getTabViewList', [])));
    }
    /**
     * Returns tab view and the questions from the tab view
     * @param ID
     * GET request to druapl using the entityId associated with the tab view
     */
    getTabView(ID) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tabViewURL}${ID}/${'?_format=json'}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(_ => this.log('fetched tabViews')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getTabViewList', [])));
    }
    /** PATCH: add a new project to drupal */
    /**
     * @param survey
     * The payload
     */
    addSurvey(payload) {
        console.log(payload);
        return this.http
            .patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].surveysURL, payload, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(_ => this.log(`updated Survey id`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('addSurvey', payload)));
    }
    deploySurvey(payload, hash) {
        console.log(payload);
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].formServerURL}${hash}`;
        return this.http
            .post(url, payload, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(_ => this.log(`Deployed Survey`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('addSurvey', payload)));
    }
    /**
     * Search Surveys
     * @param term
     * The search term
     */
    searchSurveys(term) {
        if (!term.trim()) {
            // if not search term, return empty survey array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].drupalURL}/?label=${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(_ => this.log(`found survey matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('searchSurveys', [])));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log a SurveyService message with the MessageService */
    log(message) {
        this.messageService.add(`SurveyService: ${message}`);
    }
};
SurveyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
], SurveyService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _survey_editor_survey_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-editor/survey-details.component */ "./src/app/survey-editor/survey-details.component.ts");
/* harmony import */ var _tab_views_tab_views_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-views/tab-views.component */ "./src/app/tab-views/tab-views.component.ts");





const routes = [
    { path: '', redirectTo: '/tab-views', pathMatch: 'full' },
    { path: 'detail/:id', component: _survey_editor_survey_details_component__WEBPACK_IMPORTED_MODULE_3__["SurveyDetailsComponent"] },
    { path: 'tab-views', component: _tab_views_tab_views_component__WEBPACK_IMPORTED_MODULE_4__["TabViewsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  /*margin-left: 160px; !* Same as the width of the sidebar *!*/\n  padding-left: 10%;\n}\n\nbody {\n  overflow-x: hidden;\n  background-color: #f7f9f9;\n}\n\n#page-content-wrapper {\n    margin-top: 70px;\n    /*padding: 1%;*/\n}\n\n#sidebar-wrapper {\n    margin-top: 65px;\n  min-height: 100vh;\n  margin-left: -15rem;\n  transition: margin .25s ease-out;\n  box-shadow: 0px 0px 10px #999;\n}\n\n#sidebar-wrapper .sidebar-heading {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper .list-group {\n  width: 15rem;\n}\n\n#page-content-wrapper {\n  min-width: 100vw;\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 1%;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper {\n      min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled #sidebar-wrapper {\n    margin-left: -15rem;\n  }\n}\n\n.list-group-item {\n    padding-top: 0%;\n    padding-bottom: 0%;\n}\n\n.nav-div-parent {\n    display: flex;\n    height: 40px;\n}\n\n.nav-div-child1 {\n    flex: .2;\n    padding: 7px 0px;\n}\n\n.nav-div-child2 {\n    flex: 1;\n    padding: 7px 0px;\n}\n\n.nav-div-child2p {\n    margin-left: 3%;\n    font-family: Arial;\n}\n\n.nav-icons {\n    height: 25px;\n    width: 25px;\n}\n\n.align-baseline {\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBNkQ7RUFDN0QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFJbkIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7TUFDSSxZQUFZO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIC8qbWFyZ2luLWxlZnQ6IDE2MHB4OyAhKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqISovXG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWY5O1xufVxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgLypwYWRkaW5nOiAxJTsqL1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzk5OTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xuICB3aWR0aDogMTVyZW07XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICB9XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5uYXYtZGl2LXBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5uYXYtZGl2LWNoaWxkMSB7XG4gICAgZmxleDogLjI7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbn1cblxuLm5hdi1kaXYtY2hpbGQyIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG59XG5cbi5uYXYtZGl2LWNoaWxkMnAge1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5uYXYtaWNvbnMge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLmFsaWduLWJhc2VsaW5lIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PatientPal';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _esss_ng_xform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @esss/ng-xform */ "./node_modules/@esss/ng-xform/esm2015/ng-xform.js");
/* harmony import */ var _survey_editor_survey_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey-editor/survey-details.component */ "./src/app/survey-editor/survey-details.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _tab_views_tab_views_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab-views/tab-views.component */ "./src/app/tab-views/tab-views.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-builder/form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
/* harmony import */ var _dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dynamic-form-question/dynamic-form-question.component */ "./src/app/dynamic-form-question/dynamic-form-question.component.ts");
/* harmony import */ var _survey_editor_deployed_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./survey-editor/deployed-link */ "./src/app/survey-editor/deployed-link.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _survey_editor_survey_details_component__WEBPACK_IMPORTED_MODULE_8__["SurveyDetailsComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
            _tab_views_tab_views_component__WEBPACK_IMPORTED_MODULE_11__["TabViewsComponent"],
            _preview_preview_component__WEBPACK_IMPORTED_MODULE_12__["PreviewComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NewTabViewDialog"],
            _tab_views_tab_views_component__WEBPACK_IMPORTED_MODULE_11__["TabViewSearch"],
            _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_15__["FormBuilderComponent"],
            _dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_16__["DynamicFormQuestionComponent"],
            _survey_editor_deployed_link__WEBPACK_IMPORTED_MODULE_17__["DeployedLink"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _esss_ng_xform__WEBPACK_IMPORTED_MODULE_7__["NgXformModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2000 } }
        ],
        exports: [
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]
        ],
        entryComponents: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NewTabViewDialog"], _survey_editor_deployed_link__WEBPACK_IMPORTED_MODULE_17__["DeployedLink"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n    height: 65px;\n    background-color: #016fbe;\n    box-shadow: 0px 1px 10px #999;\n}\n\n.navbar .navbar-brand {\n    font-size: 32px;\n    font-weight: lighter;\n    font-family: Arial;\n    color: #ffffff;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTZmYmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4ICM5OTk7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/dynamic-form-question/dynamic-form-question.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dynamic-form-question/dynamic-form-question.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicFormQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormQuestionComponent", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _questions_question_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_questions/question-base */ "./src/app/_questions/question-base.ts");




let DynamicFormQuestionComponent = class DynamicFormQuestionComponent {
    constructor() {
        this.whitespace = '50%';
    }
    get isValid() {
        return this.form.controls[this.question.key].valid;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _questions_question_base__WEBPACK_IMPORTED_MODULE_3__["QuestionBase"])
], DynamicFormQuestionComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], DynamicFormQuestionComponent.prototype, "form", void 0);
DynamicFormQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-form-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-form-question/dynamic-form-question.component.html")).default
    })
], DynamicFormQuestionComponent);



/***/ }),

/***/ "./src/app/form-builder/form-builder.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#row {\n    /*border-width: 0.1px;*/\n    /*border-style: solid;*/\n    /*position: center;*/\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1idWlsZGVyL2Zvcm0tYnVpbGRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1idWlsZGVyL2Zvcm0tYnVpbGRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdyB7XG4gICAgLypib3JkZXItd2lkdGg6IDAuMXB4OyovXG4gICAgLypib3JkZXItc3R5bGU6IHNvbGlkOyovXG4gICAgLypwb3NpdGlvbjogY2VudGVyOyovXG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.ts ***!
  \********************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_Survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_classes/Survey */ "./src/app/_classes/Survey.ts");
/* harmony import */ var _services_question_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/question-control.service */ "./src/app/_services/question-control.service.ts");
/* harmony import */ var _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_questions/question-dropdown */ "./src/app/_questions/question-dropdown.ts");
/* harmony import */ var _questions_question_textbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_questions/question-textbox */ "./src/app/_questions/question-textbox.ts");
/* harmony import */ var _questions_question_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_questions/question-radio */ "./src/app/_questions/question-radio.ts");
/* harmony import */ var _questions_question_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_questions/question-number */ "./src/app/_questions/question-number.ts");








let FormBuilderComponent = class FormBuilderComponent {
    constructor(qcs) {
        this.qcs = qcs;
        this.fields = [];
        this.payLoad = '';
    }
    ngOnInit() {
        this.getQuestions();
        this.form = this.qcs.toFormGroup(this.fields);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
    getQuestions() {
        for (let i = 0; i < this.survey.assessments.length; i++) {
            if (this.survey.assessments[i].asessmentType.toString() === '5') {
                this.createSelect(i, false);
                // this.createRadioGroup(i, false)
            }
            else {
                this.createText(i, false);
            }
        }
    }
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputted
     * @param optional
     * Whether or not a question is optional or not
     */
    createSelect(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'dropdown')) {
            return;
        }
        // Push new select into the fields array
        tempField = new _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownQuestion"]({
            key: this.survey.assessments[i].id.toString(),
            label: this.survey.assessments[i].assessmentDesc,
            options: this.survey.assessments[i].choices,
            order: i,
            required: false
        }, this.survey.assessments[i].choices);
        console.log(tempField.controlType);
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createText(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'TEXT')) {
            return;
        }
        // Push new text field into the fields array
        tempField = new _questions_question_textbox__WEBPACK_IMPORTED_MODULE_5__["TextboxQuestion"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc,
            order: i,
            required: false
        });
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * This funtion is used to create a RadioGroup
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createRadioGroup(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'RADIOGROUP')) {
            return;
        }
        // Push new radio group into the fields array
        tempField = new _questions_question_radio__WEBPACK_IMPORTED_MODULE_6__["RadioQuestion"]({
            key: this.survey.assessments[i].id.toString(),
            label: this.survey.assessments[i].assessmentDesc,
            options: this.survey.assessments[i].choices,
            order: i,
            required: false
        }, this.survey.assessments[i].choices);
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * Used to create a NumberField
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createNumber(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'NUMBER')) {
            return;
        }
        // Push new number field into the fields array
        tempField = new _questions_question_number__WEBPACK_IMPORTED_MODULE_7__["NumberQuestion"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc + ' (Number)',
            order: i,
            type: 'number',
            required: true
        });
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * This function will return a boolean whether or not an element already exists in the array
     * @param i
     * i is the index of the array which will be checked
     */
    fieldCheck(i, fieldType) {
        let j = 0;
        for (j; j < this.fields.length; j++) {
            if (this.fields[j].key === this.survey.assessments[i].id.toString() && fieldType === this.fields[j].controlType) {
                return true;
            }
            else if (this.fields[j].key === this.survey.assessments[i].id.toString()) {
                this.removeField(j);
                return false;
            }
        }
        return false;
    }
    /**
     * This function will remove a specified element in the fields array
     * @param i
     * i is the index of the array which will be removed
     */
    removeField(i) {
        this.fields.splice(i, 1);
    }
    /**
     * This function is used to order the position of a newly added field
     * @param i
     * i is the index of the array which will be added
     */
    orderField(i, field) {
        this.fields.splice(i, 0, field);
    }
    /**
     * This function removes and inserts the new data
     * @param i
     * Index of the array which will be added
     * @param optional
     * Whether or not a question is optional or not
     */
    updateField(i, optional) {
        switch (this.fields[i].controlType) {
            case 'SELECT':
                this.removeField(i);
                this.createSelect(i, optional);
                break;
            case 'RADIOGROUP':
                this.removeField(i);
                this.createRadioGroup(i, optional);
                break;
            case 'TEXT':
                this.removeField(i);
                this.createText(i, optional);
                break;
            case 'NUMBER':
                this.removeField(i);
                this.createNumber(i, optional);
                break;
            // case 'CHECK':
            //     this.removeField(i);
            //     this.createCheckBox(i, optional);
            //     break;
        }
    }
};
FormBuilderComponent.ctorParameters = () => [
    { type: _services_question_control_service__WEBPACK_IMPORTED_MODULE_3__["QuestionControlService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_Survey__WEBPACK_IMPORTED_MODULE_2__["Survey"])
], FormBuilderComponent.prototype, "survey", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FormBuilderComponent.prototype, "fields", void 0);
FormBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-builder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-builder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-builder/form-builder.component.html")).default,
        providers: [_services_question_control_service__WEBPACK_IMPORTED_MODULE_3__["QuestionControlService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-builder.component.css */ "./src/app/form-builder/form-builder.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_question_control_service__WEBPACK_IMPORTED_MODULE_3__["QuestionControlService"]])
], FormBuilderComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#sidebar-wrapper {\n    margin-top: 65px;\n    min-height: 100vh;\n    margin-left: -15rem;\n    transition: margin .25s ease-out;\n    box-shadow: 0px 0px 10px #999;\n}\n\n#sidebar-wrapper .sidebar-heading {\n    padding: 0.875rem 1.25rem;\n    font-size: 1.2rem;\n}\n\n#sidebar-wrapper .list-group {\n    width: 15rem;\n}\n\n#page-content-wrapper {\n    min-width: 100vw;\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 1%;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n    margin-left: 0;\n}\n\n@media (min-width: 768px) {\n    #sidebar-wrapper {\n        margin-left: 0;\n    }\n\n    #page-content-wrapper {\n        min-width: 0;\n        width: 100%;\n    }\n\n    #wrapper.toggled #sidebar-wrapper {\n        margin-left: -15rem;\n    }\n}\n\n.list-group-item {\n    padding-top: 0%;\n    padding-bottom: 0%;\n}\n\n.nav-div-parent {\n    display: flex;\n    height: 40px;\n}\n\n.nav-div-child1 {\n    flex: .2;\n    padding: 7px 0px;\n}\n\n.nav-div-child2 {\n    flex: 1;\n    padding: 7px 0px;\n}\n\n.nav-div-child2p {\n    margin-left: 3%;\n    font-family: Arial;\n}\n\n.nav-icons {\n    height: 25px;\n    width: 25px;\n}\n\n.align-baseline {\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFJbkIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzk5OTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcbiAgICB3aWR0aDogMTVyZW07XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgICB9XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5uYXYtZGl2LXBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5uYXYtZGl2LWNoaWxkMSB7XG4gICAgZmxleDogLjI7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbn1cblxuLm5hdi1kaXYtY2hpbGQyIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG59XG5cbi5uYXYtZGl2LWNoaWxkMnAge1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5uYXYtaWNvbnMge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLmFsaWduLWJhc2VsaW5lIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent, NewTabViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTabViewDialog", function() { return NewTabViewDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/excel.service */ "./src/app/_services/excel.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);





let NavBarComponent = class NavBarComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    /**
     * Handle the dialog window
     * This window displays a single input in which a user will enter the path to their file
     * A path is chosen, it will call importXLSX file.
     */
    openDialog() {
        const dialogRef = this.dialog.open(NewTabViewDialog, {
            height: '30%',
            width: '40%',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], NavBarComponent);

let NewTabViewDialog = class NewTabViewDialog {
    constructor(dialogRef, data, excelService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.excelService = excelService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * Handles the event of when a user selects an XLSX file to be imported
     * @param e
     */
    handleFile(e) {
        let files = e.target.files, f = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            this.arrayBuffer = reader.result;
            let data = new Uint8Array(this.arrayBuffer);
            let arr = new Array();
            for (let i = 0; i != data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            let bstr = arr.join('');
            let workbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: 'binary' }); // Read in the excel file
            let first_sheet_name = workbook.SheetNames[0]; // Get the first worksheet in the excel file
            let worksheet = workbook.Sheets[first_sheet_name]; // Create the worksheet
            this.blob = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(worksheet, { raw: true }); // Create the blob
            this.entityId = this.blob[0].tabViewId; // Get the entity ID from the excel sheet
            this.sendData(); // Send the data to the excel service
        };
        reader.readAsArrayBuffer(f);
        document.getElementById('fileSelector').addEventListener('change', this.handleFile, false);
    }
    /**
     * Send the excel data to the excel service
     */
    sendData() {
        let id = this.blob[0].tabViewId;
        this.excelService.setExcelData(this.blob, id);
    }
};
NewTabViewDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
];
NewTabViewDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'new-tab-view-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-tab-view-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/new-tab-view-dialog.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-tab-view-dialog.css */ "./src/app/nav-bar/new-tab-view-dialog.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
], NewTabViewDialog);



/***/ }),

/***/ "./src/app/nav-bar/new-tab-view-dialog.css":
/*!*************************************************!*\
  !*** ./src/app/nav-bar/new-tab-view-dialog.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmV3LXRhYi12aWV3LWRpYWxvZy5jc3MifQ== */");

/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @esss/ng-xform */ "./node_modules/@esss/ng-xform/esm2015/ng-xform.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _classes_Survey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_classes/Survey */ "./src/app/_classes/Survey.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let PreviewComponent = 
/**
 * Handles the previewing of Surveys
 * When a user is editing a survey this component will display what the actual question will look like
 */
class PreviewComponent {
    /**
     * Constructor for PreviewComponent
     * @param titleService
     * Used to set the title of the window
     * @param http
     * Interface with http
     */
    constructor(titleService, http) {
        this.titleService = titleService;
        this.http = http;
        this.onchangefn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Determine if a form is horizontal viewing or not
         */
        this.horizontal = false;
        /**
         * Defines the width of a label
         */
        this.labelWidth = 0;
        this.outputhelper = { A: 1, B: 2, C: 3 };
        this.subscriptions = [];
        this.docHTML = '';
    }
    /**
     * ngOnInit for PreviewComponent
     */
    ngOnInit() {
        this.subscriptions.push(this.onchangefn.asObservable().subscribe((value) => this.xformComponent.setValue({ outputopt: this.outputhelper[value] })));
        this.titleService.setTitle('TabviewList | ' + this.survey.tabDesc); // Sets the title
        this.initWidgets(); // Initiates the widgets
    }
    /**
     * This function is used to init the fields array.
     * The fields will be used to display the different type of questions
     */
    initWidgets() {
        this.fields = [
            new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["TextField"]({
                key: this.survey.assessments[0].id,
                label: this.survey.assessments[0].assessmentDesc,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ]
            }),
        ];
        let i = 0;
        for (i; i < this.survey.assessments.length; i++) {
            this.removeField(i);
            if (this.survey.assessments[i].asessmentType.toString() === '5') {
                this.createRadioGroup(i, false);
                this.createSelect(i, false);
            }
            else {
                this.createText(i, false);
            }
        }
    }
    /**
     * This funtion is used to create a selectOne
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Determine if a question is optional or not
     */
    createSelect(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'SELECT')) {
            return;
        }
        // Condition depending on a question is optional or not
        if (optional) {
            // Push new select into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["SelectField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                searchable: true,
                options: this.survey.assessments[i].choices,
                addNewOption: true,
                addNewOptionText: 'id',
                optionLabelKey: 'choiceDesc',
            });
        }
        else {
            // Push new select into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["SelectField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                searchable: false,
                options: this.survey.assessments[i].choices,
                addNewOption: true,
                addNewOptionText: 'id',
                optionLabelKey: 'choiceDesc',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ],
            });
        }
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputted
     * @param optional
     * Whether or not a question is optional or not
     */
    createSelectMany(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'SELECT')) {
            return;
        }
        // Condition depending on a question is optional or not
        if (optional) {
            // Push new select into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["SelectField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                searchable: true,
                options: this.survey.assessments[i].choices,
                addNewOption: true,
                addNewOptionText: 'id',
                optionLabelKey: 'choiceDesc',
                multiple: true,
            });
        }
        else {
            // Push new select into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["SelectField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                searchable: true,
                options: this.survey.assessments[i].choices,
                addNewOption: true,
                addNewOptionText: 'id',
                optionLabelKey: 'choiceDesc',
                multiple: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ]
            });
        }
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * This funtion is used to create a RadioGroup
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createRadioGroup(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'RADIOGROUP')) {
            return;
        }
        // Condition depending on a question is optional or not
        if (optional) {
            // Push new radio group into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["RadioGroupField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                options: Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.survey.assessments[i].choices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(10)),
                optionValueKey: 'id',
                optionLabelKey: 'choiceDesc',
            });
        }
        else {
            // Push new radio group into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["RadioGroupField"]({
                key: this.survey.assessments[i].id.toString(),
                label: this.survey.assessments[i].assessmentDesc,
                options: Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.survey.assessments[i].choices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(10)),
                optionValueKey: 'id',
                optionLabelKey: 'choiceDesc',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]
            });
        }
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createText(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'TEXT')) {
            return;
        }
        // Condition depending on a question is optional or not
        if (optional) {
            // Push new text field into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["TextField"]({
                key: this.survey.assessments[i].id,
                label: this.survey.assessments[i].assessmentDesc,
            });
        }
        else {
            // Push new text field into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["TextField"]({
                key: this.survey.assessments[i].id,
                label: this.survey.assessments[i].assessmentDesc,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ]
            });
        }
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * Used to create a NumberField
     * @param i Is used to determine which assessment has been inputed
     * @param optional
     * Whether or not a question is optional or not
     */
    createNumber(i, optional) {
        let tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'NUMBER')) {
            return;
        }
        // Condition depending on a question is optional or not
        if (optional) {
            // Push new number field into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["NumberField"]({
                key: this.survey.assessments[i].id,
                label: this.survey.assessments[i].assessmentDesc + ' (Number)',
            });
        }
        else {
            // Push new number field into the fields array
            tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["NumberField"]({
                key: this.survey.assessments[i].id,
                label: this.survey.assessments[i].assessmentDesc + ' (Number)',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ]
            });
        }
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     */
    createCheckBox(i, optional) {
        // Check if field already exists
        if (this.fieldCheck(i, 'CHECK')) {
            return;
        }
        // Push new text field into the fields array
        const tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc,
        });
        // Reposition
        this.orderField(i, tempField);
    }
    /**
     * This function will return a boolean whether or not an element already exists in the array
     * @param i
     * i is the index of the array which will be checked
     */
    fieldCheck(i, fieldType) {
        let j = 0;
        for (j; j < this.fields.length; j++) {
            if (this.fields[j].key === this.survey.assessments[i].id && fieldType === this.fields[j].controlType) {
                return true;
            }
            else if (this.fields[j].key === this.survey.assessments[i].id) {
                this.removeField(j);
                return false;
            }
        }
        return false;
    }
    /**
     * This function will remove a specified element in the fields array
     * @param i
     * i is the index of the array which will be removed
     */
    removeField(i) {
        this.fields.splice(i, 1);
    }
    /**
     * This function is used to order the position of a newly added field
     * @param i
     * i is the index of the array which will be added
     */
    orderField(i, field) {
        this.fields.splice(i, 0, field);
    }
    /**
     * This function removes and inserts the new data
     * @param i
     * Index of the array which will be added
     * @param optional
     * Whether or not a question is optional or not
     */
    updateField(i, optional) {
        switch (this.fields[i].controlType) {
            case 'SELECT':
                this.removeField(i);
                this.createSelect(i, optional);
                break;
            case 'RADIOGROUP':
                this.removeField(i);
                this.createRadioGroup(i, optional);
                break;
            case 'TEXT':
                this.removeField(i);
                this.createText(i, optional);
                break;
            case 'NUMBER':
                this.removeField(i);
                this.createNumber(i, optional);
                break;
            case 'CHECK':
                this.removeField(i);
                this.createCheckBox(i, optional);
                break;
        }
    }
    /**
     * Will be used to export the html file to drupal
     */
    export() {
        const doc = document.getElementById('xform');
        this.docHTML = doc.outerHTML;
        this.createFile();
    }
    /**
     *  Export HTML file to database
     */
    db_export() {
        this.exportHTMLtoDB().subscribe(str => console.log(str));
    }
    exportHTMLtoDB() {
        const db_service_url = "http://formserver.patientpal.com";
        const doc = document.getElementById('xform');
        this.docHTML = doc.outerHTML;
        let json = { "name": this.survey.tabDesc, "version": 1, "filedir": "ANGULAR", "valid": 1, "contents": this.docHTML };
        console.log(json);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(db_service_url, json, httpOptions);
    }
    /**
     * This function creates a file
     * This file has the string generated from the ng-xform html tag
     * It will then create a downloadable link
     */
    createFile() {
        let textFile = null;
        const makeTextFile = text => {
            const data = new Blob([text], { type: 'text/plain' });
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            textFile = window.URL.createObjectURL(data);
            return textFile;
        };
        const create = document.getElementById('create');
        const textbox = document.getElementById('textbox');
        create.addEventListener('click', () => {
            const link = document.getElementById('downloadlink');
            // @ts-ignore
            link.href = makeTextFile(this.docHTML);
            link.style.display = 'block';
        }, false);
    }
    /**
     * Handles the submitting the values
     * @param values
     * values are the values stored in the input fields
     */
    onSubmit(values) {
        this.model = values;
    }
};
PreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["NgXformEditSaveComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["NgXformEditSaveComponent"])
], PreviewComponent.prototype, "xformComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customField', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], PreviewComponent.prototype, "customFieldTmpl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_Survey__WEBPACK_IMPORTED_MODULE_8__["Survey"])
], PreviewComponent.prototype, "survey", void 0);
PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_esss_ng_xform__WEBPACK_IMPORTED_MODULE_2__["NgXformModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
    /**
     * Handles the previewing of Surveys
     * When a user is editing a survey this component will display what the actual question will look like
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], PreviewComponent);



/***/ }),

/***/ "./src/app/survey-editor/deployed-link.ts":
/*!************************************************!*\
  !*** ./src/app/survey-editor/deployed-link.ts ***!
  \************************************************/
/*! exports provided: DeployedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployedLink", function() { return DeployedLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DeployedLink = class DeployedLink {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.link = this.data.link;
        console.log(this.link);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    copyText() {
        let copyText = document.getElementById('link');
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand('copy');
    }
};
DeployedLink.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeployedLink = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'deployed-link',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deployed-link.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/deployed-link.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DeployedLink);



/***/ }),

/***/ "./src/app/survey-editor/survey-details.component.css":
/*!************************************************************!*\
  !*** ./src/app/survey-editor/survey-details.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\n    width: 100%;\n    border: 1px solid black;\n    overflow: hidden; /* will contain if #first is longer than #second */\n}\n\n.navbar {\n    height: 45px;\n    padding: 0 0 0;\n}\n\n.collapse {\n    height: 100%;\n    width: 100%;\n}\n\n.nav-item {\n    margin: 3px;\n    /*border-bottom: 1px solid lightgray;*/\n    /*border-right: 1px solid lightgray;*/\n    /*border-left: 1px solid lightgray;*/\n}\n\n.nav-icons {\n    height: 20px;\n    width: 20px;\n}\n\n#questions {\n    width: 50%;\n    float:left; /* add this */\n    border-right: 1px solid black;\n}\n\n#assessments {\n    border-radius: 5px;\n    width: 100%;\n}\n\n#preview {\n    /*border: 1px solid black;*/\n    padding-left: 1%;\n    overflow: hidden;\n    float: left;\n    width: 50%;\n}\n\n#heading {\n    width: 100%;\n}\n\n.choiceLabel {\n    width: 70%;\n}\n\n#ass5 {\n\n}\n\n#ass4 {\n\n}\n\n.title-div {\n    padding: 10px;\n    display: flex;\n    height: 50px;\n}\n\n.title-div-child1 {\n    flex: .3;\n    padding-top: 7px;\n}\n\n.title-div-child2 {\n    flex: 2;\n    text-align: left;\n}\n\n#submit-div {\n    border-bottom: 1px solid black;\n}\n\n#btn-div-1 {\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n#btn-div-2 {\n    padding: 10px;\n    display: flex;\n}\n\n#option-div-parent1 {\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n#option-div-parent2 {\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n#option-div-child {\n    display: flex;\n}\n\n#p-title {\n    margin-bottom: 0;\n}\n\n.separator {\n    background-color: black;\n    width: 100%;\n    height: 1px;\n}\n\n#selectRadio, #checkBox, #selectOneBtn, #selectManyBtn {\n    color: #016fbe;\n}\n\n#saveBtn, #optional, #mandatory {\n    padding: 5px 5px;\n    font-size: 10px;\n    border-radius: 3px;\n    color: #016fbe;\n}\n\n/*Coloured Buttons*/\n\n#selectTxtBtn #selectNumber, #save-btn, #sub-btn, #back-btn, #exp-btn {\n    border: none;\n    background-color: #016fbe;\n}\n\n/*#save-div {*/\n\n/*    padding: 10px;*/\n\n/*}*/\n\n#submit-div {\n    padding: 10px;\n    display: flex;\n}\n\n/*#submit-div2 {*/\n\n/*    display: flex;*/\n\n/*    padding: 10px;*/\n\n/*}*/\n\n.submit-child {\n    margin-right: 15px;\n}\n\n#nav2 {\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n}\n\n.input-group-append {\n    border-radius: 5px;\n    border: 1px solid lightgray;\n    padding-top: 9px;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LWVkaXRvci9zdXJ2ZXktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBRSxrREFBa0Q7QUFDeEU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBLGNBQWM7O0FBQ2QscUJBQXFCOztBQUNyQixJQUFJOztBQUVKO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUEsaUJBQWlCOztBQUNqQixxQkFBcUI7O0FBQ3JCLHFCQUFxQjs7QUFDckIsSUFBSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5LWVkaXRvci9zdXJ2ZXktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIHdpbGwgY29udGFpbiBpZiAjZmlyc3QgaXMgbG9uZ2VyIHRoYW4gI3NlY29uZCAqL1xufVxuXG4ubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgcGFkZGluZzogMCAwIDA7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIG1hcmdpbjogM3B4O1xuICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTsqL1xuICAgIC8qYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5OyovXG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTsqL1xufVxuXG4ubmF2LWljb25zIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbiNxdWVzdGlvbnMge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6bGVmdDsgLyogYWRkIHRoaXMgKi9cbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2Fzc2Vzc21lbnRzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcmV2aWV3IHtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59XG4jaGVhZGluZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaG9pY2VMYWJlbCB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuI2FzczUge1xuXG59XG5cbiNhc3M0IHtcblxufVxuXG4udGl0bGUtZGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4udGl0bGUtZGl2LWNoaWxkMSB7XG4gICAgZmxleDogLjM7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuLnRpdGxlLWRpdi1jaGlsZDIge1xuICAgIGZsZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3N1Ym1pdC1kaXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2J0bi1kaXYtMSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2J0bi1kaXYtMiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jb3B0aW9uLWRpdi1wYXJlbnQxIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI29wdGlvbi1kaXYtcGFyZW50MiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbiNvcHRpb24tZGl2LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jcC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG59XG5cbiNzZWxlY3RSYWRpbywgI2NoZWNrQm94LCAjc2VsZWN0T25lQnRuLCAjc2VsZWN0TWFueUJ0biB7XG4gICAgY29sb3I6ICMwMTZmYmU7XG59XG5cbiNzYXZlQnRuLCAjb3B0aW9uYWwsICNtYW5kYXRvcnkge1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogIzAxNmZiZTtcbn1cblxuLypDb2xvdXJlZCBCdXR0b25zKi9cbiNzZWxlY3RUeHRCdG4gI3NlbGVjdE51bWJlciwgI3NhdmUtYnRuLCAjc3ViLWJ0biwgI2JhY2stYnRuLCAjZXhwLWJ0biB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTZmYmU7XG59XG5cbi8qI3NhdmUtZGl2IHsqL1xuLyogICAgcGFkZGluZzogMTBweDsqL1xuLyp9Ki9cblxuI3N1Ym1pdC1kaXYge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyojc3VibWl0LWRpdjIgeyovXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXG4vKiAgICBwYWRkaW5nOiAxMHB4OyovXG4vKn0qL1xuXG4uc3VibWl0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbiNuYXYyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZy10b3A6IDlweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/survey-editor/survey-details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/survey-editor/survey-details.component.ts ***!
  \***********************************************************/
/*! exports provided: SurveyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsComponent", function() { return SurveyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _classes_Survey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_classes/Survey */ "./src/app/_classes/Survey.ts");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/survey.service */ "./src/app/_services/survey.service.ts");
/* harmony import */ var _classes_Assessment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_classes/Assessment */ "./src/app/_classes/Assessment.ts");
/* harmony import */ var _classes_Choice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_classes/Choice */ "./src/app/_classes/Choice.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/excel.service */ "./src/app/_services/excel.service.ts");
/* harmony import */ var _classes_Worksheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_classes/Worksheet */ "./src/app/_classes/Worksheet.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _deployed_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deployed-link */ "./src/app/survey-editor/deployed-link.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
















let SurveyDetailsComponent = 
/**
 * @implements OnInit
 * This class will handle the process of viewing a survey's questions, and editing them
 * Users will use the to edit their questions, save those questions, and then either publish/draft them
 */
class SurveyDetailsComponent {
    /**
     * Constructor for the SurveyDetailsComponent Class
     * @param fb FromBuilder
     * @param route Activated Route
     * @param formService The service class that inferfaces with Drupal
     * @param excelService
     * @param location Instance of Location
     * @param _snackBar
     */
    constructor(fb, route, formService, excelService, location, _snackBar, dialog) {
        this.fb = fb;
        this.route = route;
        this.formService = formService;
        this.excelService = excelService;
        this.location = location;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        /**
         * The id from the URL is linked to the entity ID of the tabview
         */
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    /**
     * NgInit for the SurveyDetailComponent Class
     */
    ngOnInit() {
        this.getTabView();
    }
    /**
     * GET tab views
     * Async task that uses the service class to interface with Drupal
     * Retrieved data from drupal is then stored into an array of TabViews
     * Once completed, the TabViews are then sorted into the Survey Class
     */
    getTabView() {
        this.formService.getTabView(this.id)
            .subscribe(data => this.tabViews = data, // Move data into TabView
        // Move data into TabView
        err => console.log(err), // Log any Errors
        () => this.sortSurvey()); // Sort tabviews into a Survey
    }
    /**
     * Returns a user back to the previous page
     */
    goBack() {
        this.location.back();
    }
    /**
     * Sorts out the tabviews that were retrieved from Drupal
     * Creates assessments and their choices by iterating through the tabviews
     * Once an assessment is created and it's choices have been populated
     * Then it is added into the Survey
     */
    sortSurvey() {
        this.createSurvey(); // Create an instance of a survey
        let tempAssessment; // Create an instance of an assessment
        let cPos = 0; // Holds position of choices
        let aPos = 0; // Holds position of assessment
        this.tabViews.forEach((item, index, array) => {
            if (index === 0) { // Default statement
                tempAssessment = this.createAssessment(index); // Create a new assessment
                this.survey.addAssessment(tempAssessment);
                if (item.assessmentType.toString() === '4') {
                    this.survey.assessments[aPos].addChoice(this.createChoice(index, 4)); // Add a single choice to an assessment
                }
                else if (item.assessmentType.toString() === '5') {
                    this.survey.assessments[aPos].addChoice(this.createChoice(cPos, 5)); // Add a single a choice to an assessment
                    cPos++; // Update the position of the choice
                }
            }
            else if (item.assessmentType.toString() === '4') {
                tempAssessment = this.createAssessment(index); // Create a new assessment
                tempAssessment.addChoice(this.createChoice(index, 4)); // Add a single choice to an assessment
                this.survey.addAssessment(tempAssessment);
                aPos++; // Update the position of the assessment
            }
            else if (item.assessmentType.toString() === '5' && item.assessmentId === this.tabViews[index - 1].assessmentId) {
                this.survey.assessments[aPos].addChoice(this.createChoice(index, 5)); // Add a single a choice to an assessment
                cPos++; // Update the position of the choice
            }
            else if (item.assessmentType.toString() === '5' && item.assessmentId !== this.tabViews[index - 1].assessmentId) {
                cPos = 0; // Reset the position of the choice
                tempAssessment = this.createAssessment(index); // Create a new assessment
                tempAssessment.addChoice(this.createChoice(index, 5)); // Add a single a choice to an assessment
                this.survey.addAssessment(tempAssessment); // Add the assessment to the survey
                aPos++; // Update the position of the assessment
            }
        });
        // Check if an excel file is present
        let blob = this.excelService.getExcelData();
        if (blob !== undefined) {
            this.updateToExcel(blob);
            this.openSnackBar('Import Successful', 'Close');
        }
    }
    /**
     * Creates a new choice based on the assessment type
     * @param i
     * Index of the array
     * @type
     * The assessment type
     */
    createChoice(i, type) {
        let tempChoices; // Create temp choice
        /** Creates a default choice*/
        if (type === 4) {
            tempChoices = new _classes_Choice__WEBPACK_IMPORTED_MODULE_8__["Choice"](4, 'Type 4');
            return tempChoices;
        }
        else {
            /** Creates a normal choice*/
            tempChoices = new _classes_Choice__WEBPACK_IMPORTED_MODULE_8__["Choice"](this.tabViews[i].choiceId, this.tabViews[i].choiceDescription.trim());
        }
        return tempChoices;
    }
    /**
     * Creates a new survey
     */
    createSurvey() {
        this.survey = new _classes_Survey__WEBPACK_IMPORTED_MODULE_5__["Survey"](this.tabViews[0].tabViewId, this.tabViews[0].tabViewLabel);
    }
    /**
     * Create a new assessment
     * @param i
     * Index of the array
     */
    createAssessment(i) {
        const tempAssessment = new _classes_Assessment__WEBPACK_IMPORTED_MODULE_7__["Assessment"](this.tabViews[i].assessmentId, this.tabViews[i].assessmentType, this.tabViews[i].assessmentDescription.trim());
        return tempAssessment;
    }
    /**
     * Saves, and submits the data to Drupal
     * Generates a JSON string
     * Calls addSurvey from the service class to interface with Drupal
     */
    submit() {
        this.saveSurvey(); // Save any updated fields
        const payload = JSON.stringify(this.survey); // Generate a payload
        this.formService
            .addSurvey(payload) // Add the survey
            .subscribe(res => {
            console.log(res);
        }, error1 => console.log(error1) // Log errors
        );
        this.openSnackBar('Survey Submitted', 'Close');
    }
    /**
     * Saves, the questions, and sends a POST request to the formserver
     * Generates a JSON string
     * Calls deploy survey in the service class
     */
    deploy() {
        this.saveSurvey(); // Save any updated fields
        const payload = JSON.stringify(this.survey); // Generate a payload
        this.formService
            .deploySurvey(payload, this.survey.tabId.toString()) // Add the survey
            .subscribe(res => {
            console.log(res);
        }, error1 => console.log(error1), // Log errors
        () => this.openDialog());
    }
    /**
     * Updates the values within survey
     * Iterates through the input tags and sets the assessments/choices description to those values
     */
    saveSurvey() {
        this.survey.assessments.forEach(function (item, index, array) {
            item.setAssessmentDescription(document.getElementById(item.id.toString()).value); // Value in the input tag
            item.choices.forEach(function (choice, index, array) {
                try {
                    choice.setChoiceDescription(document.getElementById(choice.id.toString()).value);
                }
                catch (e) {
                    console.log(e);
                }
            });
        });
    }
    /**
     * When user clicks save question, all question choices are then saved
     */
    saveQuestion(i, optional) {
        this.saveSurvey(); // Save the survey
        this.preview.updateField(i, optional); // Update the preview
        this.openSnackBar('Question Saved', 'Close');
    }
    /**
     * Creates an instance of Worksheet
     * @return Worksheet
     * Returns worksheet to be used for the exporting of XLSX files
     */
    createWorksheet() {
        let worksheet = this.tabViews.map((tabview) => {
            let obj = new _classes_Worksheet__WEBPACK_IMPORTED_MODULE_11__["Worksheet"](tabview.tabViewLabel, tabview.tabViewId, tabview.assessmentId, tabview.assessmentDescription, tabview.assessmentType, tabview.assessmentLabel, tabview.choiceId, tabview.choiceDescription, tabview.choiceLabel);
            return obj;
        });
        return worksheet;
    }
    exportAsXLSX() {
        this.excelService.exportExcelFile(this.createWorksheet(), this.tabViews[0].tabViewLabel);
    }
    /**
     * This funciton updates the survey class based on the data from the imported XLSX files
     * @param blob
     * A json string from the XLSX file
     */
    updateToExcel(blob) {
        this.survey.tabDesc = blob[0].tabViewLabel;
        let aPos = 0; // Holds the position of the assessments
        let cPos = 0; // Holds the position of the choices
        blob.forEach((item, index, array) => {
            if (index === 0) {
                this.survey.assessments[aPos].setAssessmentDescription(item.assessmentDescription.toString());
                if (item.assessmentType.toString() === '4') {
                    this.survey.assessments[aPos].setAssessmentDescription(item.assessmentDescription.toString());
                    aPos++; // Update the position of the assessment
                }
                else if (item.assessmentType.toString() === '5') {
                    this.survey.assessments[aPos].choices[cPos].setChoiceDescription(item.choiceDescription.toString());
                    cPos++; // Update the position of the choice
                }
            }
            else if (item.assessmentType.toString() === '4') {
                this.survey.assessments[aPos].setAssessmentDescription(item.assessmentDescription.toString());
                aPos++; // Update the position of the assessments
            }
            else if (item.assessmentType.toString() === '5' && this.survey.assessments[aPos].id === item.assessmentId) {
                this.survey.assessments[aPos].choices[cPos].setChoiceDescription(item.choiceDescription.toString());
                cPos++; // Update the position of the choice
            }
            else if (item.assessmentType.toString() === '5' && this.survey.assessments[aPos].id !== item.assessmentId) {
                cPos = 0; // Reset values
                aPos++; // Move onto the next assessment
                this.survey.assessments[aPos].setAssessmentDescription(item.assessmentDescription.toString());
                this.survey.assessments[aPos].choices[cPos].setChoiceDescription(item.choiceDescription.toString());
                cPos++; // Update the position of the choice
            }
        });
    }
    /**
     * Opens up a snack bar which will offer the user some feedback on an action
     * @param message
     * The message that will be displayed
     * @param action
     * An action
     */
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    /**
     * Handle the dialog window
     * This dialog displays a single input which contains the URL of the deployed survey
     */
    openDialog() {
        const dialogRef = this.dialog.open(_deployed_link__WEBPACK_IMPORTED_MODULE_14__["DeployedLink"], {
            height: '25%',
            width: '25%',
            data: { link: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].formServerApplicationURL + this.id }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
SurveyDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"] },
    { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SurveyDetailsComponent.prototype, "preview", void 0);
SurveyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-editor/survey-details.component.html")).default,
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-details.component.css */ "./src/app/survey-editor/survey-details.component.css")).default]
    })
    /**
     * @implements OnInit
     * This class will handle the process of viewing a survey's questions, and editing them
     * Users will use the to edit their questions, save those questions, and then either publish/draft them
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"],
        _services_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])
], SurveyDetailsComponent);



/***/ }),

/***/ "./src/app/tab-views/tab-views.component.css":
/*!***************************************************!*\
  !*** ./src/app/tab-views/tab-views.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table td {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLXZpZXdzL3RhYi12aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RhYi12aWV3cy90YWItdmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tab-views/tab-views.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tab-views/tab-views.component.ts ***!
  \**************************************************/
/*! exports provided: TabViewSearch, TabViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewSearch", function() { return TabViewSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewsComponent", function() { return TabViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/survey.service */ "./src/app/_services/survey.service.ts");



let TabViewSearch = 
/**
 * Used to handle the search functionality of the application
 * Searches for specific TabViews
 * Displays a search bar on the application
 * A user can enter search terms and then see any TabView with similar characters
 */
class TabViewSearch {
    transform(value, term) {
        if (term == null) {
            return value;
        }
        else {
            return value.filter(item => item.label.toLowerCase().match(term.toLowerCase()));
        }
    }
};
TabViewSearch = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'tabViewSearch'
    })
    /**
     * Used to handle the search functionality of the application
     * Searches for specific TabViews
     * Displays a search bar on the application
     * A user can enter search terms and then see any TabView with similar characters
     */
], TabViewSearch);

let TabViewsComponent = 
/**
 * Used to display a list of Tabviews that have been imported from Drupal
 * This component is the homepage of the application
 * From here, users can navigate into the survey editor by clicking on one of the tab views
 */
class TabViewsComponent {
    /**
     * Constructor of the TabViewComponent Class
     * @param surveyService
     * The service class used to interface with Drupal
     */
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    /**
     * NgOnInit function
     */
    ngOnInit() {
        this.getTabViews();
    }
    /**
     * Calls the getTabViewList function which returns a list of all the tab views stored in Drupal
     */
    getTabViews() {
        this.surveyService.getTabViewList()
            .subscribe(data => this.tabviews = data);
    }
};
TabViewsComponent.ctorParameters = () => [
    { type: _services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }
];
TabViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-views',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab-views.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-views/tab-views.component.html")).default,
        providers: [TabViewSearch],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab-views.component.css */ "./src/app/tab-views/tab-views.component.css")).default]
    })
    /**
     * Used to display a list of Tabviews that have been imported from Drupal
     * This component is the homepage of the application
     * From here, users can navigate into the survey editor by clicking on one of the tab views
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]])
], TabViewsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    surveysURL: 'https://qadrupal.lan.sesahs.nsw.gov.au/tabview/edit',
    drupalURL: 'https://qadrupal.lan.sesahs.nsw.gov.au/rest/tab/list?_format=json',
    tabViewURL: 'https://qadrupal.lan.sesahs.nsw.gov.au/rest/content/tab/get/',
    formServerURL: 'https://qadrupal.lan.sesahs.nsw.gov.au:81/',
    formServerApplicationURL: 'https://localhost:4200/form/'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/AngularProjects/PatientPal/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map