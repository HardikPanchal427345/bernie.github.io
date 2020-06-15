function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/adminlayout/admindash/addcomp/addcomp.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/adminlayout/admindash/addcomp/addcomp.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddcompComponent */

  /***/
  function srcAppAdminlayoutAdmindashAddcompAddcompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcompComponent", function () {
      return AddcompComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddcompComponent =
    /*#__PURE__*/
    function () {
      function AddcompComponent(compservice, http) {
        _classCallCheck(this, AddcompComponent);

        this.compservice = compservice;
        this.http = http;
        this.selectedfile = null;
        this.insertcompdata = {
          title: '',
          type: '',
          detail: '',
          ticket_price: '',
          insertdate: '',
          enddate: '',
          image: ''
        };
      }

      _createClass(AddcompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectimage",
        value: function selectimage(event) {
          this.selectedfile = event.target.files[0]; // this.insertcompdata.get('image').setValue(selectedfile);
        }
      }, {
        key: "insertcomp",
        value: function insertcomp() {
          // this.insertcompdata.append('image', this.selectedfile, this.selectedfile.name);
          var fd = new FormData();
          fd.append('image', this.selectedfile, this.selectedfile.name);
          fd.append('title', this.insertcompdata.title);
          fd.append('type', this.insertcompdata.type);
          fd.append('detail', this.insertcompdata.detail);
          fd.append('ticket_price', this.insertcompdata.ticket_price);
          fd.append('insertdate', this.insertcompdata.insertdate);
          fd.append('enddate', this.insertcompdata.enddate);
          this.compservice.insertcomp(fd).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          }); // const fd = new FormData();
          // fd.append('image', this.selectedfile, this.selectedfile.name);
          // this.http.post('http://localhost:3000/api/insertcompetition', fd).subscribe(res => console.log(res));
        }
      }]);

      return AddcompComponent;
    }();

    AddcompComponent.ɵfac = function AddcompComponent_Factory(t) {
      return new (t || AddcompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AddcompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddcompComponent,
      selectors: [["app-addcomp"]],
      decls: 50,
      vars: 6,
      consts: [[2, "margin", "15px 20px 30px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], ["enctype", "multipart/form-data"], [1, "form-group"], ["for", "title"], ["type", "text", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["for", "type"], ["name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "ngModel"], ["value", "Platinum"], ["value", "Gold"], ["value", "Silver"], ["value", "Free"], ["for", "detail"], ["type", "texearea", "name", "detail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["detail", "ngModel"], ["for", "ticket_price"], ["type", "text", "name", "ticket_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticket_price", "ngModel"], ["for", "insertdate"], ["type", "date", "name", "insertdate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["insertdate", "ngModel"], ["for", "enddate"], ["type", "date", "name", "enddate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["enddate", "ngModel"], ["for", "image"], ["type", "file", "name", "image", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "btn-large", "btn-block", "submit", 3, "click"]],
      template: function AddcompComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Competition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Competition Title :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.insertcompdata.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Competition Type :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.insertcompdata.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Platinum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Silver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Competition Detail :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.insertcompdata.detail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ticket Price :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.insertcompdata.ticket_price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Insert Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.insertcompdata.insertdate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "End Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcompComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.insertcompdata.enddate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Choose Image :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddcompComponent_Template_input_change_44_listener($event) {
            return ctx.selectimage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Choose Image :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcompComponent_Template_button_click_48_listener() {
            return ctx.insertcomp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " + ADD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.detail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.ticket_price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.insertdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.insertcompdata.enddate);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    \r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL2FkZGNvbXAvYWRkY29tcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGF5b3V0L2FkbWluZGFzaC9hZGRjb21wL2FkZGNvbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addcomp',
          templateUrl: './addcomp.component.html',
          styleUrls: ['./addcomp.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/admindash/admindash.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adminlayout/admindash/admindash.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdmindashComponent */

  /***/
  function srcAppAdminlayoutAdmindashAdmindashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmindashComponent", function () {
      return AdmindashComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdmindashComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmindashComponent_li_6_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var n_r166 = ctx.$implicit;

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r167.select(n_r166);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r166 = ctx.$implicit;

        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", n_r166 === ctx_r165.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r166);
      }
    }

    var AdmindashComponent =
    /*#__PURE__*/
    function () {
      function AdmindashComponent(router, route) {
        _classCallCheck(this, AdmindashComponent);

        this.router = router;
        this.route = route; // tslint:disable-next-line: ban-types

        this.selected = '';
        this.list = ['dashboard', 'competitionslist', 'userlist', 'winnerslist', 'addcomp', 'transactions'];
      } // tslint:disable-next-line: use-lifecycle-interface


      _createClass(AdmindashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.router.navigate(['dashboard'], {relativeTo: this.route});
          this.select('dashboard'); // this.selected = 'dashboard';
        }
      }, {
        key: "select",
        value: function select(item) {
          // this.selected = delete;
          this.selected = item;
          this.router.navigate([item], {
            relativeTo: this.route
          });
          $('#nav').addClass('active');
        }
      }]);

      return AdmindashComponent;
    }();

    AdmindashComponent.ɵfac = function AdmindashComponent_Factory(t) {
      return new (t || AdmindashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    AdmindashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdmindashComponent,
      selectors: [["app-admindash"]],
      decls: 9,
      vars: 1,
      consts: [[1, ""], [1, "row"], [1, "sidenav", "col-3"], [1, "c-sidebar-nav"], [1, "c-sidebar-nav-title"], ["class", "c-sidebar-nav-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "main", "col-9"], [1, "c-sidebar-nav-item", 3, "click"], [1, "c-sidebar-nav-link"]],
      template: function AdmindashComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdmindashComponent_li_6_Template, 3, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n    background: #100233;\n    font-family: 'Josefin Sans', sans-serif;\n    color: white;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    \n    \n    width: 20vw;\n    \n    position: fixed;\n    \n    z-index: 1;\n    \n    top: 0;\n    \n    left: 0;\n    background-color: #100233;\n    \n    \n    \n    padding-top: 70px;\n    padding-right: 0;\n}\n\n\n\n\n\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    text-transform: capitalize;\n    \n    margin-right: 0px;\n    cursor: pointer;\n}\n\n\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 20px;\n    color: orange;\n    display: block;\n    \n    \n}\n\n\n.selected[_ngcontent-%COMP%] {\n    \n    background-color: white;\n    font-weight: bolder;\n    border-right: 3px solid orange;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.main[_ngcontent-%COMP%] {\n    width: 100% !important;\n    \n    margin-left: 20vw;\n    \n    \n    padding: 0 0 0 50px;\n    padding-top: 70px;\n    \n    background-color: #100233;\n}\n\n\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {\n        padding-top: 15px;\n    }\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n}\n\n\n.side[_ngcontent-%COMP%] {\n    height: 500px;\n    width: 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL2FkbWluZGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXdCMkI7OztBQUczQix3QkFBd0I7OztBQUd4Qjs7R0FFRzs7O0FBR0g7Ozs7Ozs7O0NBUUM7OztBQUdEOzs7RUFHRTs7O0FBR0Y7Ozt1QkFHdUI7OztBQUd2QixNQUFNOzs7QUFHTjs7O2dDQUdnQzs7O0FBR2hDLFFBQVE7OztBQUdSLHFCQUFxQjs7O0FBRXJCO0lBQ0ksWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7OztBQUdBLDhCQUE4Qjs7O0FBRTlCO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7O0FBR0EsaUVBQWlFOzs7QUFHakU7OztHQUdHOzs7QUFHSDs7OztHQUlHOzs7QUFHSCx1QkFBdUI7OztBQUV2QjtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOzs7QUFHQSxnSUFBZ0k7OztBQUVoSTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGF5b3V0L2FkbWluZGFzaC9hZG1pbmRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJhY2tncm91bmQ6ICMxMDAyMzM7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsIGxpIGEge1xuICAgIGNvbG9yOiAjZjA2ZDA2O1xuICAgIG1hcmdpbjogNXB4IDFyZW07XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiBwYWRkaW5nOiA3cHggMTNweDsgKi9cblxuXG4vKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXG5cblxuLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0gKi9cblxuXG4vKlxudWwgbGkgYS5hY3RpdmUsXG51bCBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XG4gICAgY29sb3I6ICNmMDZkMDYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuKi9cblxuXG4vKiAuZGFzaGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4gKi9cblxuXG4vKlxuLmMtc2lkZWJhciB7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cblxuXG4vKiB9ICovXG5cblxuLyogLmNkLWNvbnRlbnQge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsOyAqL1xuXG5cbi8qIH0gICAqL1xuXG5cbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cblxuLnNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgLyogd2lkdGg6IDI1MHB4OyAqL1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXG4gICAgei1pbmRleDogMTtcbiAgICAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDtcbiAgICAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDAyMzM7XG4gICAgLyogQmxhY2sgKi9cbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG4gICAgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cblxuLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuXG4uc2lkZW5hdiBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC8qIGNvbG9yOiAjODE4MTgxOyAqL1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGVuYXYgbGkgYSB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7ICovXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lOyAqL1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIC8qIGNvbG9yOiByZ2IoMTYwLCAxMywgMTMpICFpbXBvcnRhbnQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG5cblxuLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXG5cblxuLyogLnNpZGVuYXYgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59ICovXG5cblxuLyogLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogcmdiKDE2MCwgMTMsIDEzKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59ICovXG5cblxuLyogU3R5bGUgcGFnZSBjb250ZW50ICovXG5cbi5tYWluIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjB2dztcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwL3Z3OyAqL1xuICAgIC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgcGFkZGluZzogMCAwIDAgNTBweDtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwdnc7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDIzMztcbn1cblxuXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGViYXIgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG4gICAgLnNpZGVuYXYgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbi5zaWRlIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAxMHZ3O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmindashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admindash',
          templateUrl: './admindash.component.html',
          styleUrls: ['./admindash.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/admindash/admintransactions/admintransactions.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/adminlayout/admindash/admintransactions/admintransactions.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdmintransactionsComponent */

  /***/
  function srcAppAdminlayoutAdmindashAdmintransactionsAdmintransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmintransactionsComponent", function () {
      return AdmintransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdmintransactionsComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "1");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r1.compId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r1.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r1.amount);
      }
    }

    var AdmintransactionsComponent =
    /*#__PURE__*/
    function () {
      function AdmintransactionsComponent(http) {
        _classCallCheck(this, AdmintransactionsComponent);

        this.http = http;
        this.competitions = [];
      }

      _createClass(AdmintransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.http.get("api/transactions").subscribe( // tslint:disable-next-line: no-shadowed-variable
          function (res) {
            _this.competitions = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return AdmintransactionsComponent;
    }();

    AdmintransactionsComponent.ɵfac = function AdmintransactionsComponent_Factory(t) {
      return new (t || AdmintransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdmintransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdmintransactionsComponent,
      selectors: [["app-admintransactions"]],
      decls: 15,
      vars: 1,
      consts: [[2, "margin", "15px 20px 30px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "table", "table-striped"], [1, "", 2, "background", "rgb(251, 140, 0)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
      template: function AdmintransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " All Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fullname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdmintransactionsComponent_tr_14_Template, 9, 3, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.competitions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL2FkbWludHJhbnNhY3Rpb25zL2FkbWludHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL2FkbWludHJhbnNhY3Rpb25zL2FkbWludHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmintransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admintransactions',
          templateUrl: './admintransactions.component.html',
          styleUrls: ['./admintransactions.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/admindash/competitionslist/competitionslist.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/adminlayout/admindash/competitionslist/competitionslist.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CompetitionslistComponent */

  /***/
  function srcAppAdminlayoutAdmindashCompetitionslistCompetitionslistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetitionslistComponent", function () {
      return CompetitionslistComponent;
    });
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CompetitionslistComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r160 = ctx.$implicit;
        var i_r161 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r161 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r160.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r160.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r160.ticket_price);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r160.insertdate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r160.enddate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r160.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var CompetitionslistComponent =
    /*#__PURE__*/
    function () {
      function CompetitionslistComponent(compservice, router, route) {
        _classCallCheck(this, CompetitionslistComponent);

        this.compservice = compservice;
        this.router = router;
        this.route = route;
        this.competitions = [];
      }

      _createClass(CompetitionslistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // tslint:disable-next-line: max-line-length
          this.compservice.getCompetitions().subscribe(function (res) {
            _this2.competitions = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "select",
        value: function select(item) {
          // this.selected = item;
          this.router.navigate([item], {
            relativeTo: this.route
          }); // $('#nav').addClass('active');
        }
      }, {
        key: "addcomp",
        value: function addcomp() {
          this.router.navigate(['admindash/addcomp'], {
            relativeTo: this.route
          });
        }
      }]);

      return CompetitionslistComponent;
    }();

    CompetitionslistComponent.ɵfac = function CompetitionslistComponent_Factory(t) {
      return new (t || CompetitionslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"];
      })), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    CompetitionslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompetitionslistComponent,
      selectors: [["app-competitionslist"]],
      decls: 22,
      vars: 1,
      consts: [[2, "margin", "15px 20px 30px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "tablediv"], [1, "table", "table-striped"], [1, "", 2, "background", "rgb(251, 140, 0)"], ["scope", "col", 2, "width", "50px", "vertical-align", "center"], ["scope", "col", 2, "width", "100px"], ["scope", "col", 2, "width", "150px"], [4, "ngFor", "ngForOf"], ["scope", "row"], [2, "width", "150px", "height", "100px", 3, "src"]],
      template: function CompetitionslistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Contests List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ticket-Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Insert-Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "End-Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CompetitionslistComponent_tr_21_Template, 15, 7, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.competitions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    \r\n    border-radius: 50px;\r\n}\r\n\r\n.btn-out[_ngcontent-%COMP%] {\r\n    outline: 1px solid #fff;\r\n    outline-offset: -5px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL2NvbXBldGl0aW9uc2xpc3QvY29tcGV0aXRpb25zbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmxheW91dC9hZG1pbmRhc2gvY29tcGV0aXRpb25zbGlzdC9jb21wZXRpdGlvbnNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBzZWFncmVlbjsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0IHtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC01cHg7XHJcbiAgICAvKiBwYWRkaW5nOiAwIDFyZW07ICovXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompetitionslistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-competitionslist',
          templateUrl: './competitionslist.component.html',
          styleUrls: ['./competitionslist.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"];
            })]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/admindash/userlist/userlist.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/adminlayout/admindash/userlist/userlist.component.ts ***!
    \**********************************************************************/

  /*! exports provided: UserlistComponent */

  /***/
  function srcAppAdminlayoutAdmindashUserlistUserlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserlistComponent", function () {
      return UserlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserlistComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r163 = ctx.$implicit;
        var i_r164 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r164 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r163.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r163.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r163.password);
      }
    }

    var UserlistComponent =
    /*#__PURE__*/
    function () {
      function UserlistComponent(compservice) {
        _classCallCheck(this, UserlistComponent);

        this.compservice = compservice;
        this.users = [];
      }

      _createClass(UserlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.compservice.getUsers().subscribe(function (res) {
            _this3.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return UserlistComponent;
    }();

    UserlistComponent.ɵfac = function UserlistComponent_Factory(t) {
      return new (t || UserlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]));
    };

    UserlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserlistComponent,
      selectors: [["app-userlist"]],
      decls: 16,
      vars: 1,
      consts: [[2, "margin", "15px 20px 30px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "tablediv"], [1, "table", "table-striped"], [1, "", 2, "background", "rgb(251, 140, 0)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
      template: function UserlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Users List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fullname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserlistComponent_tr_15_Template, 9, 4, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGF5b3V0L2FkbWluZGFzaC91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userlist',
          templateUrl: './userlist.component.html',
          styleUrls: ['./userlist.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/admindash/winnerslist/winnerslist.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/adminlayout/admindash/winnerslist/winnerslist.component.ts ***!
    \****************************************************************************/

  /*! exports provided: WinnerslistComponent */

  /***/
  function srcAppAdminlayoutAdmindashWinnerslistWinnerslistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WinnerslistComponent", function () {
      return WinnerslistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WinnerslistComponent =
    /*#__PURE__*/
    function () {
      function WinnerslistComponent() {
        _classCallCheck(this, WinnerslistComponent);
      }

      _createClass(WinnerslistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WinnerslistComponent;
    }();

    WinnerslistComponent.ɵfac = function WinnerslistComponent_Factory(t) {
      return new (t || WinnerslistComponent)();
    };

    WinnerslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WinnerslistComponent,
      selectors: [["app-winnerslist"]],
      decls: 42,
      vars: 0,
      consts: [[2, "margin", "15px 20px 30px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "tablediv"], [1, "table", "table-striped"], [1, "", 2, "background", "rgb(251, 140, 0)"], ["scope", "col", 2, "font-weight", "bolder"], ["scope", "row"]],
      template: function WinnerslistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Winners List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Handle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Otto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "@mdo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Jacob");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Thornton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@fat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Larry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "the Bird");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "@twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL3dpbm5lcnNsaXN0L3dpbm5lcnNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5kYXNoL3dpbm5lcnNsaXN0L3dpbm5lcnNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WinnerslistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-winnerslist',
          templateUrl: './winnerslist.component.html',
          styleUrls: ['./winnerslist.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/adminlayout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/adminlayout/adminlayout.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminlayoutComponent */

  /***/
  function srcAppAdminlayoutAdminlayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminlayoutComponent", function () {
      return AdminlayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminlayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminlayoutComponent(router, route) {
        _classCallCheck(this, AdminlayoutComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(AdminlayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['admindash'], {
            relativeTo: this.route
          });
        }
      }]);

      return AdminlayoutComponent;
    }();

    AdminlayoutComponent.ɵfac = function AdminlayoutComponent_Factory(t) {
      return new (t || AdminlayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    AdminlayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminlayoutComponent,
      selectors: [["app-adminlayout"]],
      decls: 1,
      vars: 0,
      template: function AdminlayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sYXlvdXQvYWRtaW5sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGF5b3V0L2FkbWlubGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminlayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adminlayout',
          templateUrl: './adminlayout.component.html',
          styleUrls: ['./adminlayout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlayout/adminrouting.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/adminlayout/adminrouting.module.ts ***!
    \****************************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminlayoutAdminroutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var _admindash_addcomp_addcomp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admindash/addcomp/addcomp.component */
    "./src/app/adminlayout/admindash/addcomp/addcomp.component.ts");
    /* harmony import */


    var _admindash_competitionslist_competitionslist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admindash/competitionslist/competitionslist.component */
    "./src/app/adminlayout/admindash/competitionslist/competitionslist.component.ts");
    /* harmony import */


    var _admindash_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admindash/userlist/userlist.component */
    "./src/app/adminlayout/admindash/userlist/userlist.component.ts");
    /* harmony import */


    var _admindash_admindash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admindash/admindash.component */
    "./src/app/adminlayout/admindash/admindash.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admindash_winnerslist_winnerslist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admindash/winnerslist/winnerslist.component */
    "./src/app/adminlayout/admindash/winnerslist/winnerslist.component.ts");
    /* harmony import */


    var _adminlayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./adminlayout.component */
    "./src/app/adminlayout/adminlayout.component.ts");
    /* harmony import */


    var _mainlayout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../mainlayout/dashboard/dashboard.component */
    "./src/app/mainlayout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admindash_admintransactions_admintransactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admindash/admintransactions/admintransactions.component */
    "./src/app/adminlayout/admindash/admintransactions/admintransactions.component.ts"); // import { DashboardComponent } from './mainlayout/dashboard/dashboard.component';
    // import { AdmintransactionsComponent } from './admindash/admintransactions/admintransactions.component';
    // import { AdmintransactionsComponent } from './admindash/admintransactions/admintransactions.component';
    // import { AdmintransactionsComponent } from '../adminlayout/admindash/admintransactions/admintransactions.component';


    var adminroutes = [{
      path: 'adminlayout',
      component: _adminlayout_component__WEBPACK_IMPORTED_MODULE_7__["AdminlayoutComponent"],
      children: [{
        path: 'admindash',
        component: _admindash_admindash_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashComponent"],
        children: [{
          path: 'userlist',
          component: _admindash_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_2__["UserlistComponent"]
        }, {
          path: 'dashboard',
          component: _mainlayout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
        }, {
          path: 'winnerslist',
          component: _admindash_winnerslist_winnerslist_component__WEBPACK_IMPORTED_MODULE_6__["WinnerslistComponent"]
        }, {
          path: 'competitionslist',
          component: _admindash_competitionslist_competitionslist_component__WEBPACK_IMPORTED_MODULE_1__["CompetitionslistComponent"]
        }, {
          path: 'addcomp',
          component: _admindash_addcomp_addcomp_component__WEBPACK_IMPORTED_MODULE_0__["AddcompComponent"]
        }, {
          path: 'transactions',
          component: _admindash_admintransactions_admintransactions_component__WEBPACK_IMPORTED_MODULE_9__["AdmintransactionsComponent"]
        }]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(adminroutes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(adminroutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _adminlayout_adminlayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./adminlayout/adminlayout.component */
    "./src/app/adminlayout/adminlayout.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { UserlistComponent } from './admindash/userlist/userlist.component';
    // import { AdmindashComponent } from './admindash/admindash.component';
    // import { WinnerslistComponent } from './admindash/winnerslist/winnerslist.component';


    var routes = [// { path: '', component: MainlayoutComponent },
    {
      path: '',
      redirectTo: '/mainlayout/home',
      pathMatch: 'full'
    }, {
      path: 'adminlayout',
      component: _adminlayout_adminlayout_component__WEBPACK_IMPORTED_MODULE_0__["AdminlayoutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Bernie Game';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.login-trigger[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #fff;\r\n    background: linear-gradient(to bottom right, #B05574, #F87E7B);\r\n    padding: 15px 30px;\r\n    border-radius: 30px;\r\n    position: relative;\r\n    top: 50%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transform: scale(1.2)\r\n}\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    background: linear-gradient(to bottom right, #F87E7B, #B05574);\r\n}\r\n\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    margin: 1em 0;\r\n}\r\n\r\n\r\n.form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    border-color: #fff;\r\n}\r\n\r\n\r\n.username[_ngcontent-%COMP%], .password[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid #eee;\r\n    padding-left: 0;\r\n    font-weight: normal;\r\n    background: transparent;\r\n}\r\n\r\n\r\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #eee;\r\n}\r\n\r\n\r\n.form-control[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.login[_ngcontent-%COMP%] {\r\n    padding: 6px 20px;\r\n    border-radius: 20px;\r\n    background: none;\r\n    border: 2px solid #FAB87F;\r\n    color: #FAB87F;\r\n    font-weight: bold;\r\n    transition: all .5s;\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n.login[_ngcontent-%COMP%]:hover {\r\n    background: #FAB87F;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7QUFHQSxpQkFBaUI7OztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsOERBQThEO0lBQzlELGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7O0FBR0EsUUFBUTs7O0FBRVI7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4REFBOEQ7QUFDbEU7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qVHJpZ2dlciBCdXR0b24qL1xyXG5cclxuLmxvZ2luLXRyaWdnZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNCMDU1NzQsICNGODdFN0IpO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcblxyXG5cclxuLypNb2RhbCovXHJcblxyXG5oNCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMilcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjg3RTdCLCAjQjA1NTc0KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmhvdmVyLFxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi51c2VybmFtZSxcclxuLnBhc3N3b3JkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkFCODdGO1xyXG4gICAgY29sb3I6ICNGQUI4N0Y7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkFCODdGO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _adminlayout_admindash_admintransactions_admintransactions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./adminlayout/admindash/admintransactions/admintransactions.component */
    "./src/app/adminlayout/admindash/admintransactions/admintransactions.component.ts");
    /* harmony import */


    var _mainlayout_userdeshboard_userdeshboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mainlayout/userdeshboard/userdeshboard.component */
    "./src/app/mainlayout/userdeshboard/userdeshboard.component.ts");
    /* harmony import */


    var _mainlayout_main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mainlayout/main-routing.module */
    "./src/app/mainlayout/main-routing.module.ts");
    /* harmony import */


    var _adminlayout_adminrouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adminlayout/adminrouting.module */
    "./src/app/adminlayout/adminrouting.module.ts");
    /* harmony import */


    var _adminlayout_admindash_addcomp_addcomp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adminlayout/admindash/addcomp/addcomp.component */
    "./src/app/adminlayout/admindash/addcomp/addcomp.component.ts");
    /* harmony import */


    var _adminlayout_admindash_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adminlayout/admindash/userlist/userlist.component */
    "./src/app/adminlayout/admindash/userlist/userlist.component.ts");
    /* harmony import */


    var _adminlayout_admindash_competitionslist_competitionslist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./adminlayout/admindash/competitionslist/competitionslist.component */
    "./src/app/adminlayout/admindash/competitionslist/competitionslist.component.ts");
    /* harmony import */


    var _users_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./users/detail/detail.component */
    "./src/app/users/detail/detail.component.ts");
    /* harmony import */


    var _users_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./users/list/list.component */
    "./src/app/users/list/list.component.ts");
    /* harmony import */


    var _adminlayout_admindash_admindash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./adminlayout/admindash/admindash.component */
    "./src/app/adminlayout/admindash/admindash.component.ts");
    /* harmony import */


    var _mainlayout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./mainlayout/dashboard/dashboard.component */
    "./src/app/mainlayout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _mainlayout_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./mainlayout/ticket-selection/ticket-selection.component */
    "./src/app/mainlayout/ticket-selection/ticket-selection.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mainlayout/auth/auth.service */
    "./src/app/mainlayout/auth/auth.service.ts");
    /* harmony import */


    var _mainlayout_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./mainlayout/register/register.component */
    "./src/app/mainlayout/register/register.component.ts");
    /* harmony import */


    var _mainlayout_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./mainlayout/login/login.component */
    "./src/app/mainlayout/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mainlayout_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./mainlayout/header/header.component */
    "./src/app/mainlayout/header/header.component.ts");
    /* harmony import */


    var _mainlayout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./mainlayout/footer/footer.component */
    "./src/app/mainlayout/footer/footer.component.ts");
    /* harmony import */


    var _competitions_competitions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./competitions/competitions.component */
    "./src/app/competitions/competitions.component.ts");
    /* harmony import */


    var _mainlayout_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./mainlayout/contact/contact.component */
    "./src/app/mainlayout/contact/contact.component.ts");
    /* harmony import */


    var _mainlayout_about_about_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./mainlayout/about/about.component */
    "./src/app/mainlayout/about/about.component.ts");
    /* harmony import */


    var _mainlayout_team_team_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./mainlayout/team/team.component */
    "./src/app/mainlayout/team/team.component.ts");
    /* harmony import */


    var _mainlayout_client_client_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./mainlayout/client/client.component */
    "./src/app/mainlayout/client/client.component.ts");
    /* harmony import */


    var _mainlayout_slider_slider_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./mainlayout/slider/slider.component */
    "./src/app/mainlayout/slider/slider.component.ts");
    /* harmony import */


    var _mainlayout_account_terms_account_terms_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./mainlayout/account-terms/account-terms.component */
    "./src/app/mainlayout/account-terms/account-terms.component.ts");
    /* harmony import */


    var _mainlayout_home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./mainlayout/home/home.component */
    "./src/app/mainlayout/home/home.component.ts");
    /* harmony import */


    var _mainlayout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./mainlayout/disclaimer/disclaimer.component */
    "./src/app/mainlayout/disclaimer/disclaimer.component.ts");
    /* harmony import */


    var _competitions_free_free_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./competitions/free/free.component */
    "./src/app/competitions/free/free.component.ts");
    /* harmony import */


    var _competitions_gold_gold_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./competitions/gold/gold.component */
    "./src/app/competitions/gold/gold.component.ts");
    /* harmony import */


    var _competitions_platinum_platinum_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./competitions/platinum/platinum.component */
    "./src/app/competitions/platinum/platinum.component.ts");
    /* harmony import */


    var _competitions_silver_silver_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./competitions/silver/silver.component */
    "./src/app/competitions/silver/silver.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _mainlayout_mainlayout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./mainlayout/mainlayout.component */
    "./src/app/mainlayout/mainlayout.component.ts");
    /* harmony import */


    var _adminlayout_adminlayout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./adminlayout/adminlayout.component */
    "./src/app/adminlayout/adminlayout.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _mainlayout_userdeshboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./mainlayout/userdeshboard/profile/profile.component */
    "./src/app/mainlayout/userdeshboard/profile/profile.component.ts");
    /* harmony import */


    var _mainlayout_userdeshboard_myactivity_myactivity_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./mainlayout/userdeshboard/myactivity/myactivity.component */
    "./src/app/mainlayout/userdeshboard/myactivity/myactivity.component.ts");
    /* harmony import */


    var _mainlayout_userdeshboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./mainlayout/userdeshboard/transactions/transactions.component */
    "./src/app/mainlayout/userdeshboard/transactions/transactions.component.ts"); // import { UserlistComponent } from './admindash/userlist/userlist.component';
    // import { AdmindashComponent } from './adminlayout/admindash/admindash.component';
    // import { AddcompComponent } from './admindash/addcomp/addcomp.component';
    // import { UserlistComponent } from '.adminlayout/admindash/userlist/userlist.component';
    // import { CompetitionslistComponent } from './admindash/competitionslist/competitionslist.component';
    // import { TransactionsComponent } from './mainlayout/userdeshboard/transactions/transactions.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_40__["AuthGuard"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _adminlayout_adminrouting_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _mainlayout_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _mainlayout_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"], _mainlayout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _competitions_competitions_component__WEBPACK_IMPORTED_MODULE_24__["CompetitionsComponent"], _mainlayout_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"], _mainlayout_about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"], _mainlayout_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _mainlayout_client_client_component__WEBPACK_IMPORTED_MODULE_28__["ClientComponent"], _mainlayout_slider_slider_component__WEBPACK_IMPORTED_MODULE_29__["SliderComponent"], _mainlayout_account_terms_account_terms_component__WEBPACK_IMPORTED_MODULE_30__["AccountTermsComponent"], _mainlayout_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"], _mainlayout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_32__["DisclaimerComponent"], _competitions_free_free_component__WEBPACK_IMPORTED_MODULE_33__["FreeComponent"], _competitions_gold_gold_component__WEBPACK_IMPORTED_MODULE_34__["GoldComponent"], _competitions_platinum_platinum_component__WEBPACK_IMPORTED_MODULE_35__["PlatinumComponent"], _competitions_silver_silver_component__WEBPACK_IMPORTED_MODULE_36__["SilverComponent"], _mainlayout_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _mainlayout_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], _mainlayout_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_11__["TicketSelectionComponent"], _mainlayout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _adminlayout_admindash_admindash_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashComponent"], _users_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _users_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _adminlayout_admindash_competitionslist_competitionslist_component__WEBPACK_IMPORTED_MODULE_6__["CompetitionslistComponent"], // CompetitiondetailComponen,
        _adminlayout_admindash_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_5__["UserlistComponent"], _adminlayout_admindash_addcomp_addcomp_component__WEBPACK_IMPORTED_MODULE_4__["AddcompComponent"], _mainlayout_mainlayout_component__WEBPACK_IMPORTED_MODULE_38__["MainlayoutComponent"], _adminlayout_adminlayout_component__WEBPACK_IMPORTED_MODULE_39__["AdminlayoutComponent"], _mainlayout_userdeshboard_userdeshboard_component__WEBPACK_IMPORTED_MODULE_1__["UserdeshboardComponent"], _mainlayout_userdeshboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], // TransactionsComponent,
        _mainlayout_userdeshboard_myactivity_myactivity_component__WEBPACK_IMPORTED_MODULE_42__["MyactivityComponent"], _mainlayout_userdeshboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_43__["TransactionsComponent"], _adminlayout_admindash_admintransactions_admintransactions_component__WEBPACK_IMPORTED_MODULE_0__["AdmintransactionsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _adminlayout_adminrouting_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _mainlayout_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _mainlayout_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"], _mainlayout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _competitions_competitions_component__WEBPACK_IMPORTED_MODULE_24__["CompetitionsComponent"], _mainlayout_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"], _mainlayout_about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"], _mainlayout_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _mainlayout_client_client_component__WEBPACK_IMPORTED_MODULE_28__["ClientComponent"], _mainlayout_slider_slider_component__WEBPACK_IMPORTED_MODULE_29__["SliderComponent"], _mainlayout_account_terms_account_terms_component__WEBPACK_IMPORTED_MODULE_30__["AccountTermsComponent"], _mainlayout_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"], _mainlayout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_32__["DisclaimerComponent"], _competitions_free_free_component__WEBPACK_IMPORTED_MODULE_33__["FreeComponent"], _competitions_gold_gold_component__WEBPACK_IMPORTED_MODULE_34__["GoldComponent"], _competitions_platinum_platinum_component__WEBPACK_IMPORTED_MODULE_35__["PlatinumComponent"], _competitions_silver_silver_component__WEBPACK_IMPORTED_MODULE_36__["SilverComponent"], _mainlayout_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _mainlayout_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], _mainlayout_ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_11__["TicketSelectionComponent"], _mainlayout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _adminlayout_admindash_admindash_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashComponent"], _users_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _users_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _adminlayout_admindash_competitionslist_competitionslist_component__WEBPACK_IMPORTED_MODULE_6__["CompetitionslistComponent"], // CompetitiondetailComponen,
          _adminlayout_admindash_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_5__["UserlistComponent"], _adminlayout_admindash_addcomp_addcomp_component__WEBPACK_IMPORTED_MODULE_4__["AddcompComponent"], _mainlayout_mainlayout_component__WEBPACK_IMPORTED_MODULE_38__["MainlayoutComponent"], _adminlayout_adminlayout_component__WEBPACK_IMPORTED_MODULE_39__["AdminlayoutComponent"], _mainlayout_userdeshboard_userdeshboard_component__WEBPACK_IMPORTED_MODULE_1__["UserdeshboardComponent"], _mainlayout_userdeshboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], // TransactionsComponent,
          _mainlayout_userdeshboard_myactivity_myactivity_component__WEBPACK_IMPORTED_MODULE_42__["MyactivityComponent"], _mainlayout_userdeshboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_43__["TransactionsComponent"], _adminlayout_admindash_admintransactions_admintransactions_component__WEBPACK_IMPORTED_MODULE_0__["AdmintransactionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _adminlayout_adminrouting_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _mainlayout_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
          providers: [_mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_40__["AuthGuard"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mainlayout/auth/auth.service */
    "./src/app/mainlayout/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      // canActivate(
      //   next: ActivatedRouteSnapshot,
      //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //   return true;
      // }
      function AuthGuard(authservice, router) {
        _classCallCheck(this, AuthGuard);

        this.authservice = authservice;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authservice.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['/mainlayout/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _mainlayout_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/competitions/competitions.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/competitions/competitions.component.ts ***!
    \********************************************************/

  /*! exports provided: CompetitionsComponent */

  /***/
  function srcAppCompetitionsCompetitionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetitionsComponent", function () {
      return CompetitionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function CompetitionsComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompetitionsComponent_li_12_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var n_r117 = ctx.$implicit;

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.select(n_r117);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, n_r117));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r117);
      }
    }

    var CompetitionsComponent =
    /*#__PURE__*/
    function () {
      function CompetitionsComponent(router, route) {
        _classCallCheck(this, CompetitionsComponent);

        this.router = router;
        this.route = route;
        this.list = ['platinum', 'gold', 'silver', 'free'];
      }

      _createClass(CompetitionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['platinum'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "select",
        value: function select(item) {
          this.selected = item;
          this.router.navigate([item], {
            relativeTo: this.route
          }); // $('#nav').addClass('active');
        }
      }, {
        key: "isActive",
        value: function isActive(item) {}
      }]);

      return CompetitionsComponent;
    }();

    CompetitionsComponent.ɵfac = function CompetitionsComponent_Factory(t) {
      return new (t || CompetitionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    CompetitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompetitionsComponent,
      selectors: [["app-competitions"]],
      decls: 15,
      vars: 1,
      consts: [[2, "background", "#100233", "margin", "0", "padding-bottom", "50px"], [1, "containercomp"], [1, "titles"], ["id", "barnav col col-12"], ["id", "navlist col col-12"], [3, "click", 4, "ngFor", "ngForOf"], [1, "outlet"], [3, "click"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function CompetitionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Try your chance at winning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CURRENT CONTEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Participants buy tickets and lots are drawn to determine the winners.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompetitionsComponent_li_12_Template, 3, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0%;\r\n    margin: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n}\r\n\r\n.containercomp[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    align-self: center;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    \r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    \r\n    \r\n    \r\n    background: #4f40c183;\r\n    \r\n    border-radius: 100px;\r\n    \r\n    height: 80px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    line-height: 80px;\r\n    margin: 0 5px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 17px;\r\n    padding: 10px 26px;\r\n    \r\n    border-radius: 50px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background: white;\r\n    color: orangered !important;\r\n    text-decoration: none;\r\n}\r\n\r\na.active[_ngcontent-%COMP%] {\r\n    \r\n    background: rgba(255, 140, 0, 1);\r\n    box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n    \r\n    color: white;\r\n}\r\n\r\n.outlet[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    margin: 1rem;\r\n    \r\n    margin-bottom: 20px;\r\n    border-bottom: 5px;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    padding-bottom: 100px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        margin: 0 20px;\r\n        text-align: center;\r\n        \r\n        \r\n        \r\n        background: #4f40c183;\r\n        \r\n        border-radius: 20px;\r\n        \r\n        height: auto;\r\n        margin-bottom: 30px;\r\n    }\r\n    .text[_ngcontent-%COMP%]   .txtgrp[_ngcontent-%COMP%] {\r\n        margin-top: 16px;\r\n        text-align: center;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 16px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 13px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .titles[_ngcontent-%COMP%] {\r\n        padding-top: 30px;\r\n        padding-bottom: 30px;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 19px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 16px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        display: none;\r\n    }\r\n    .outlet[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        \r\n        \r\n        padding: 0;\r\n        \r\n        margin-bottom: 20px;\r\n        border-bottom: 5px;\r\n    }\r\n    .containercomp[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        align-self: center;\r\n        margin: 0;\r\n        padding: 0;\r\n        \r\n        border-radius: 5px;\r\n        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb25zL2NvbXBldGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGlGQUFpRjtJQUNqRixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyw2Q0FBNkM7SUFDN0MsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFDakMsa0NBQWtDO1FBQ2xDLGlGQUFpRjtRQUNqRixxQkFBcUI7UUFDckIsMkNBQTJDO1FBQzNDLG1CQUFtQjtRQUNuQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZix1Q0FBdUM7UUFDdkMsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLGtCQUFrQjtRQUNsQiw0QkFBNEI7SUFDaEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9jb21wZXRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1MDQwYzE7ICovXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7ICovXHJcbn1cclxuXHJcbi5jb250YWluZXJjb21wIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JleTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlc21va2U7ICovXHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7ICovXHJcbiAgICAvKiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0RDMTA2OSwgcmdiKDIzNiwgNDEsIDEyNiksICNEQzEwNjkpOyAqL1xyXG4gICAgYmFja2dyb3VuZDogIzRmNDBjMTgzO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgyNTIsIDk5LCAxNjUsIDAuOTQ1KTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjZweDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDNweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLmFjdGl2ZSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50OyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICAvKiBjb2xvcjogb3JhbmdlcmVkICFpbXBvcnRhbnQ7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vdXRsZXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgICAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbmF2IHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgICAgIC8qIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7ICovXHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0RDMTA2OSwgcmdiKDIzNiwgNDEsIDEyNiksICNEQzEwNjkpOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZjQwYzE4MztcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgOTksIDE2NSwgMC45NDUpOyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dCAudHh0Z3JwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50eHRncnAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnR4dGdycCBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudHh0Z3JwIGg2IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC50aXRsZXMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXRsZXMgaDYge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAub3V0bGV0IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAvKiBtYXJnaW46IDFyZW07ICovXHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyAqL1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcmNvbXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JleTsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgKi9cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompetitionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-competitions',
          templateUrl: './competitions.component.html',
          styleUrls: ['./competitions.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/competitions/free/free.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/competitions/free/free.component.ts ***!
    \*****************************************************/

  /*! exports provided: FreeComponent */

  /***/
  function srcAppCompetitionsFreeFreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeComponent", function () {
      return FreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FreeComponent =
    /*#__PURE__*/
    function () {
      function FreeComponent() {
        _classCallCheck(this, FreeComponent);
      }

      _createClass(FreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FreeComponent;
    }();

    FreeComponent.ɵfac = function FreeComponent_Factory(t) {
      return new (t || FreeComponent)();
    };

    FreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FreeComponent,
      selectors: [["app-free"]],
      decls: 2,
      vars: 0,
      template: function FreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "free works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9mcmVlL2ZyZWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-free',
          templateUrl: './free.component.html',
          styleUrls: ['./free.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/competitions/gold/gold.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/competitions/gold/gold.component.ts ***!
    \*****************************************************/

  /*! exports provided: GoldComponent */

  /***/
  function srcAppCompetitionsGoldGoldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoldComponent", function () {
      return GoldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GoldComponent =
    /*#__PURE__*/
    function () {
      function GoldComponent() {
        _classCallCheck(this, GoldComponent);
      }

      _createClass(GoldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GoldComponent;
    }();

    GoldComponent.ɵfac = function GoldComponent_Factory(t) {
      return new (t || GoldComponent)();
    };

    GoldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GoldComponent,
      selectors: [["app-gold"]],
      decls: 2,
      vars: 0,
      template: function GoldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gold works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9nb2xkL2dvbGQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gold',
          templateUrl: './gold.component.html',
          styleUrls: ['./gold.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/competitions/platinum/platinum.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/competitions/platinum/platinum.component.ts ***!
    \*************************************************************/

  /*! exports provided: PlatinumComponent */

  /***/
  function srcAppCompetitionsPlatinumPlatinumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatinumComponent", function () {
      return PlatinumComponent;
    });
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlatinumComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlatinumComponent_div_0_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

          var competition_r113 = ctx.$implicit;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r114.onselect(competition_r113);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "BUY TICKET");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r113 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r113.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r113.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](competition_r113.detail);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", competition_r113.ticket_price, "/-");
      }
    }

    var PlatinumComponent =
    /*#__PURE__*/
    function () {
      function PlatinumComponent(compservice, router, route) {
        _classCallCheck(this, PlatinumComponent);

        this.compservice = compservice;
        this.router = router;
        this.route = route;
        this.competitions = [];
      }

      _createClass(PlatinumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.compservice.getplatinumCompetitions().subscribe(function (res) {
            _this4.competitions = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onselect",
        value: function onselect(competition) {
          // console.log(competition._id)
          this.router.navigate(['mainlayout/ticket-selection', competition._id]);
        }
      }]);

      return PlatinumComponent;
    }();

    PlatinumComponent.ɵfac = function PlatinumComponent_Factory(t) {
      return new (t || PlatinumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"];
      })), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    PlatinumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlatinumComponent,
      selectors: [["app-platinum"]],
      decls: 1,
      vars: 1,
      consts: [["class", "comp", 4, "ngFor", "ngForOf"], [1, "comp"], [1, "photo"], ["alt", "", 1, "img-fluid", "${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}", 3, "src"], [1, "details"], [3, "click"]],
      template: function PlatinumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlatinumComponent_div_0_Template, 13, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.competitions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n}\r\n\r\n.comp[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    margin: 5px 50px;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    width: 90%;\r\n    height: 250px;\r\n    \r\n    border-radius: 10px;\r\n    background: #5040c1;\r\n    \r\n    \r\n}\r\n\r\n.photo[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 200px;\r\n    \r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 100%;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 200px;\r\n    padding-left: 15px;\r\n    padding-top: 15px;\r\n    background-color: #493da7;\r\n    border-radius: 30px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-top: -5px;\r\n    margin-bottom: 5PX;\r\n    background-color: white;\r\n    height: 3px;\r\n    width: 50%;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-bottom: 0px !important;\r\n    width: 100px;\r\n    margin-right: 10px;\r\n    background-color: rgba(255, 140, 0, 1);\r\n    border: 1px solid rgba(255, 140, 0, 1);\r\n    border-radius: 50px;\r\n    color: #ffffff;\r\n    \r\n    \r\n    font-size: 16px;\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    width: 150px;\r\n    -webkit-text-size-adjust: none;\r\n    ime-mode: all;\r\n    outline: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 70px;\r\n    max-width: 100%;\r\n    position: relative;\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    \r\n    margin: 0;\r\n    color: darkgray;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: bolder;\r\n    letter-spacing: 2px;\r\n    color: rgba(255, 140, 0, 1);\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    line-height: 44px;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]:after {\r\n    content: '...';\r\n    position: absolute;\r\n    right: 40px;\r\n    bottom: 4px;\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .comp[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        border-radius: 10px;\r\n        width: auto;\r\n        height: auto;\r\n        background: #5040c1;\r\n        overflow: hidden;\r\n    }\r\n    .comp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        margin: 20px 20px;\r\n        width: 250px;\r\n        height: 200px;\r\n    }\r\n    .ticdet[_ngcontent-%COMP%] {\r\n        padding-top: 10px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        color: #ffffff;\r\n        background: #4033a1;\r\n        height: 100px;\r\n    }\r\n    .comp[_ngcontent-%COMP%] {\r\n        margin: 0 20px;\r\n        margin-left: 0 !important;\r\n        margin-bottom: 20px;\r\n        padding: 10px;\r\n        width: 100%;\r\n        height: 100%;\r\n        \r\n        border-radius: 10px;\r\n        background: #5040c1;\r\n        text-align: center;\r\n        justify-content: center;\r\n        \r\n        \r\n    }\r\n    .photo[_ngcontent-%COMP%] {\r\n        width: inherit;\r\n        height: 200px;\r\n        \r\n        overflow: hidden;\r\n        border-radius: 5px;\r\n    }\r\n    .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 100%;\r\n    }\r\n    .details[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 200px;\r\n        padding: 0 15px;\r\n        padding-top: 20px;\r\n        background-color: #493da7;\r\n        border-radius: 30px;\r\n        margin-top: 20px;\r\n    }\r\n    .details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        float: right;\r\n        margin-bottom: 0px !important;\r\n        width: 100px;\r\n        margin-right: 10px;\r\n        background-color: rgba(255, 140, 0, 1);\r\n        border: 1px solid rgba(255, 140, 0, 1);\r\n        border-radius: 50px;\r\n        color: #ffffff;\r\n        \r\n        \r\n        font-size: 16px;\r\n        margin-top: 10px;\r\n        font-weight: bold;\r\n        line-height: 40px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        width: 150px;\r\n        -webkit-text-size-adjust: none;\r\n        ime-mode: all;\r\n        outline: none;\r\n    }\r\n    .details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n    }\r\n    .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        \r\n        max-height: 70px;\r\n        max-width: 100%;\r\n        position: relative;\r\n        \r\n        \r\n        \r\n        \r\n        \r\n        overflow: hidden;\r\n        display: inline-block;\r\n        text-overflow: ellipsis;\r\n        \r\n        margin: 0;\r\n        color: darkgray;\r\n    }\r\n    .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n        font-weight: bolder;\r\n        letter-spacing: 2px;\r\n        color: rgba(255, 140, 0, 1);\r\n    }\r\n    .details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        float: left;\r\n        line-height: 44px;\r\n        margin-left: 10px;\r\n        margin-top: 10px;\r\n        color: white;\r\n    }\r\n    p[_ngcontent-%COMP%]:after {\r\n        content: '...';\r\n        position: absolute;\r\n        right: 40px;\r\n        bottom: 4px;\r\n        \r\n    }\r\n    hr[_ngcontent-%COMP%] {\r\n        margin: 0 auto;\r\n        \r\n        \r\n        margin-bottom: 5PX;\r\n        background-color: white;\r\n        height: 3px;\r\n        width: 50%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0aXRpb25zL3BsYXRpbnVtL3BsYXRpbnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLHVDQUF1QztRQUN2QyxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixXQUFXO1FBQ1gsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLGFBQWE7SUFDakI7SUFDQTtRQUNJLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsc0VBQXNFO0lBQzFFO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9wbGF0aW51bS9wbGF0aW51bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjNTA0MGMxOyAqL1xyXG59XHJcblxyXG4uY29tcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbjogNXB4IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgI2YwNmQwNjsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTA0MGMxO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZmZmZmZjsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDAsIDAsIDEpOyAqL1xyXG59XHJcblxyXG4ucGhvdG8ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5M2RhNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1UFg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmRldGFpbHMgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICBpbWUtbW9kZTogYWxsO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmRldGFpbHMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxufVxyXG5cclxuLmRldGFpbHMgcCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICovXHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cclxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cclxuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzU29saWQgI2RkZDsgKi9cclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG5cclxuLmRldGFpbHMgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxufVxyXG5cclxuLmRldGFpbHMgaDQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnLi4uJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZjIsICNmZmYsICNmZmYsICNmZmYpOyAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29tcCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1MDQwYzE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5jb21wIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAudGljZGV0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzQwMzNhMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbXAge1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjZjA2ZDA2OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUwNDBjMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogI2ZmZmZmZjsgKi9cclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTsgKi9cclxuICAgIH1cclxuICAgIC5waG90byB7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucGhvdG8gaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTNkYTc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMgYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgICAgICAvKiBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgKi9cclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgaW1lLW1vZGU6IGFsbDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlscyBwIHtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICovXHJcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgICAgICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgICAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cclxuICAgICAgICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgICAgICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAvKiBib3JkZXI6IDFweCBzU29saWQgI2RkZDsgKi9cclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlscyBoNCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBwOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnLi4uJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmYyLCAjZmZmLCAjZmZmLCAjZmZmKTsgKi9cclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMDsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAtNXB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVQWDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatinumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-platinum',
          templateUrl: './platinum.component.html',
          styleUrls: ['./platinum.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return _compservice_service__WEBPACK_IMPORTED_MODULE_0__["CompserviceService"];
            })]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/competitions/silver/silver.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/competitions/silver/silver.component.ts ***!
    \*********************************************************/

  /*! exports provided: SilverComponent */

  /***/
  function srcAppCompetitionsSilverSilverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SilverComponent", function () {
      return SilverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SilverComponent =
    /*#__PURE__*/
    function () {
      function SilverComponent() {
        _classCallCheck(this, SilverComponent);
      }

      _createClass(SilverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SilverComponent;
    }();

    SilverComponent.ɵfac = function SilverComponent_Factory(t) {
      return new (t || SilverComponent)();
    };

    SilverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SilverComponent,
      selectors: [["app-silver"]],
      decls: 2,
      vars: 0,
      template: function SilverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "silver works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9zaWx2ZXIvc2lsdmVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SilverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-silver',
          templateUrl: './silver.component.html',
          styleUrls: ['./silver.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/compservice.service.ts":
  /*!****************************************!*\
    !*** ./src/app/compservice.service.ts ***!
    \****************************************/

  /*! exports provided: CompserviceService */

  /***/
  function srcAppCompserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompserviceService", function () {
      return CompserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CompserviceService =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line: variable-name
      function CompserviceService(http) {
        _classCallCheck(this, CompserviceService);

        this.http = http; // competitions: Competition[];
        // tslint:disable-next-line: variable-name

        this.compurl = 'api/competitions';
        this.platinumcompurl = 'api/platinumcompetitions';
        this.goldcompurl = 'api/goldcompetitions';
        this.silvercompurl = 'api/silvercompetitions';
        this.freecompurl = 'api/freecompetitions';
        this.userurl = 'api/users';
        this.usercount = 'api/userscount';
        this.oneuser = 'api/oneuser/';
        this.proupdate = 'api/userupdate/';
        this.addcomp = 'api/insertcompetition';
        this.onecomp = 'api/onecompetition/:id';
        this.refreshneed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CompserviceService, [{
        key: "getCompetitions",
        value: function getCompetitions() {
          return this.http.get(this.compurl);
        }
      }, {
        key: "getOneCompetition",
        value: function getOneCompetition() {
          return this.http.get(this.onecomp);
        }
      }, {
        key: "getplatinumCompetitions",
        value: function getplatinumCompetitions() {
          return this.http.get(this.platinumcompurl);
        }
      }, {
        key: "getgoldCompetitions",
        value: function getgoldCompetitions() {
          return this.http.get(this.goldcompurl);
        }
      }, {
        key: "getsilverCompetitions",
        value: function getsilverCompetitions() {
          return this.http.get(this.silvercompurl);
        }
      }, {
        key: "getfreeCompetitions",
        value: function getfreeCompetitions() {
          return this.http.get(this.freecompurl);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.userurl);
        }
      }, {
        key: "getOneUser",
        value: function getOneUser(id) {
          return this.http.get(this.oneuser + id);
        }
      }, {
        key: "profileupdate",
        value: function profileupdate(id, fd) {
          var _this5 = this;

          return this.http.patch(this.proupdate + id, fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this5.refreshneed.next();

            console.log('refreshed...by tap cs');
          }));
        }
      }, {
        key: "insertcomp",
        value: function insertcomp(competition) {
          return this.http.post(this.addcomp, competition);
        }
      }, {
        key: "refresh",
        get: function get() {
          return this.refreshneed;
          console.log('refreshed...');
        }
      }]);

      return CompserviceService;
    }();

    CompserviceService.ɵfac = function CompserviceService_Factory(t) {
      return new (t || CompserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CompserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CompserviceService,
      factory: CompserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/mainlayout/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppMainlayoutAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/account-terms/account-terms.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/mainlayout/account-terms/account-terms.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AccountTermsComponent */

  /***/
  function srcAppMainlayoutAccountTermsAccountTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountTermsComponent", function () {
      return AccountTermsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccountTermsComponent =
    /*#__PURE__*/
    function () {
      function AccountTermsComponent() {
        _classCallCheck(this, AccountTermsComponent);
      }

      _createClass(AccountTermsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountTermsComponent;
    }();

    AccountTermsComponent.ɵfac = function AccountTermsComponent_Factory(t) {
      return new (t || AccountTermsComponent)();
    };

    AccountTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountTermsComponent,
      selectors: [["app-account-terms"]],
      decls: 376,
      vars: 0,
      consts: [["role", "navigation", 1, "list", "list"], ["href", "#int_account_registration_1"], ["href", "#int_using_your_account_1"], ["href", "#int_account_funds_and_limits_1"], ["href", "#int_play_limits_1"], ["href", "#int_game_history_and_transaction_history_1"], ["href", "#int_closing_an_account_and_termination_1"], ["href", "#int_unauthorised_use_and_expiry_of_your_debit_card_1"], ["href", "#int_dormant_accounts_1"], ["href", "#int_site_availability_1"], ["href", "#int_your_acknowledgements_1"], ["href", "#int_your_information_1"], ["href", "#int_limitation_of_liability_1"], ["href", "#int_camelots_discretion_is_binding_1"], ["href", "#int_general_1"], ["href", "#int_law_1"], ["href", "#int_definitions_1"], ["href", "#int_contact1"], ["role", "presentation", 1, "list"], ["role", "presentation"], ["id", "int_account_registration_1", 1, "header_small"], [1, "list"], ["href", "#top", 1, "ico", "ico_back_to_top"], ["id", "int_using_your_account_1", 1, "header_small"], ["id", "int_account_funds_and_limits_1", 1, "header_small"], ["href", "/service-guide"], ["id", "int_play_limits_1", 1, "header_small"], ["id", "int_game_history_and_transaction_history_1", 1, "header_small"], ["id", "int_closing_an_account_and_termination_1", 1, "header_small"], ["id", "int_unauthorised_use_and_expiry_of_your_debit_card_1", 1, "header_small"], ["id", "int_dormant_accounts_1", 1, "header_small"], ["id", "int_site_availability_1", 1, "header_small"], ["id", "int_your_acknowledgements_1", 1, "header_small"], ["id", "int_your_information_1", 1, "header_small"], ["href", "/privacy-policy"], ["id", "int_limitation_of_liability_1", 1, "header_small"], ["id", "int_camelots_discretion_is_binding_1", 1, "header_small"], ["id", "int_general_1", 1, "header_small"]],
      template: function AccountTermsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1. Account Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2. Using Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "3. Account Funds and Limits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4. Play Limits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5. Game History and Transaction History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "6. Closing an Account and Termination etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7. Unauthorised Use and Expiry of Your Debit Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8. Dormant Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "9. Site Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "10. Your Acknowledgements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "11. Your information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "12. Limitation of Liability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "13. Camelot\u2019s Discretion is Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "14. General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "15. Law");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "16. Definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contact Numbers & Addresses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "1. Account Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "1.1 You are only allowed to have one Account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "1.2 You can only register for an Account and use that Account if: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(a) You are 16 or over;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "(b) You are physically located in the India of Man at the time;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "(c) You are recognised by checks carried out by Camelot as being a resident of the India of Man; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "(d) where debit card details have been supplied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u2020\u2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ", the debit card details supplied are those of a India of Man debit card linked to a India of Man bank or building society account that You are an authorised user of; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(e) the card referred to in Section 1.2(d) has not been reported as lost or stolen or has not been supplied in relation to another Account; and");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "(f) where required, You are able to verify, in whatever way Camelot decides, that any information supplied to Camelot is genuine.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "(g) Your ability to buy Plays using a Pingit Account has not been suspended or terminated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u2020\u2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "You agree that any Prize won may be paid back to the debit card. If You register a debit card for a joint account, You will be authorising Camelot to pay any Prize won to that debit card and this may amount to disclosure of the Prize to other holders of that joint account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "1.3 You will need to provide certain information when applying to open an Account to help Camelot establish whether or not You and/or Your debit card (where debit card details are supplied) meet the criteria set out in Section 1.2 and whether You are eligible to play the Games. This information may include, for example, Your name, address, date of birth, gender, email address, debit card details and Your own security questions. Camelot reserves the right to carry out checks to establish the above and to verify (or ask an authentication agency to carry out checks to verify) Your age and identity and any other details provided (for example Your bank account details), and to ask You for further documentation to verify the same.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "1.4 Camelot may also request information from You or carry out checks after You have opened an Account, to ensure that You and/or Your debit card (where debit card details are supplied) still meet the criteria set out in Section 1.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "1.5 Camelot reserves the right to refuse an application to open an Account for any reason.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "1.6 If Camelot subsequently discovers that You were not or are no longer eligible to open, hold and use an Account, Camelot reserves the right to take all appropriate steps in relation to You and Your Account (including, without limitation, suspending or terminating Your Account, and Your ability to buy Draw-Based Game Plays using a Pingit Account, and investigating any security issues). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "1.7 Camelot will not be liable to pay a Prize to anyone that does not meet the criteria set out in Section 1.2 and may (at its discretion) refuse to pay a Prize to anyone that has more than one Account. If a Prize is paid to anyone who does not meet those criteria, that person will be required to repay the Prize immediately if Camelot requests it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "2. Using Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2.1 You must only access Your Account when You are physically located in the India of Man.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "2.2 As long as You are physically located in the India of Man, You can start playing certain Games (see Sections 2.3 and 2.4 below) as soon as Your Account has been opened. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2.3 If You successfully open an Account but didn\u2019t provide debit card details during the application process, You will only be able to play Try Games (and Draw-Based Games by Direct Debit).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2.4 You will only be able to buy Plays with Your Account once You have registered a debit card (which must satisfy the criteria set out in Sections 1.2(d) and (e)) to it or You have set up a Direct Debit. You must be physically located in the India of Man when providing these details. Camelot may, from time to time, impose limits and conditions on when and how often You can change the debit card details registered to Your Account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "2.5 You are responsible for making sure all of Your Account information is accurate and up to date. You can only update or change certain Games-Related Information. Any updates and changes (including to Your Direct Debit details) must be made whilst You are physically located in the India of Man. The updates can only be done through Your Account, unless Camelot (acting reasonably) decides otherwise in its discretion (and in exceptional circumstances). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "2.6 You must keep Your password secure and secret at all times and take steps to prevent it being used without Your permission. You should, for example: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "(a) memorise Your password and never tell it to anyone;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "(b) never write Your password down (including on Your computer or other electronic device) or record it in a way that can be understood by someone else;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "(c) destroy any communications from Camelot in relation to Your password as soon as You have read them; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "(d) avoid using a password that is easy to guess; and");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "(e) contact the Customer Care Team immediately if anyone has used Your Account or given any instruction in relation to it without Your permission, or if You think someone else knows Your password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "2.7 If You forget Your password, You can reset it by following the instructions on the Site or App (as long as You can provide the relevant security information).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "3. Account Funds and Limits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "3.1\tOnce You have provided debit card details for Your Account, You can add funds to Your Account from that debit card. Camelot will determine whether the funds You have requested to add to Your Account are available. Once this has been confirmed and the transaction is authorised by your bank, the funds will be added to Your Account. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "3.2 There will be a minimum and maximum amount that can be added to Your Account at any one time and/or during any period of time and/or in any one transaction. The minimum and maximum amounts will be set by Camelot and specified on the \"Add funds\" section of Your Account. Subject to any limit imposed by Camelot under this Section, You will also be able to set Your own \u201Cadd funds\u201D limit through Your Account. Details of the limits You can set will be set out in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Service Guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " and in the \u201CSpend and Play Settings\u201D area of Your Account. Any limits set by Camelot or You will usually apply across Your Account and any Pingit Account You have. More information about the impact of setting limits on your Account and Pingit Account(s) is set out in the Service Guide. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "3.3\tCamelot may also, at any time, impose a maximum Account balance that You will only be able to exceed if You choose to download Prizes into Your Account. Any maximum Account balance will be communicated to You in any way Camelot decides from time to time, including in the Service Guide available on the Site and App. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "3.4\tThere will also be a maximum amount that You can spend on Plays using funds in Your Account during a period of time. The maximum amount will be set by Camelot and specified in the \u201CSpend and Play Settings\u201D section of Your Account. Subject to any limit imposed by Camelot under this Section 3.4, You will also be able to set Your own spend limit through Your Account. Details of the limits You can set, and the impact the Account spend limit may have on any Pingit Account You have, is set out in the Service Guide. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "3.5\tYou can withdraw funds from Your Account, unless the debit card registered to Your Account has expired or Your Account has been suspended. On withdrawal of funds, provided that the debit card registered to Your Account is valid, Camelot will return the relevant funds to that debit card. If Camelot is unable to return the funds to that debit card, the funds will remain in Your Account and will be subject to the Dormant Account process (see Section 8).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "3.6\tYou won\u2019t receive or be entitled to interest on funds in Your Account or on any Prizes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "4. Play Limits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "4.1 Camelot may, at its discretion, impose limits on the number of times You can play a Try Game, and/or the number of Plays You can buy, during a defined time period. Any limits imposed under this Section 4.1 will be notified to You in an appropriate manner by Camelot, including, for example, by including the limits in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Service Guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "4.2 Subject to any limits imposed by Camelot under Section 4.1, You will be able to set Your own limits and exclusions on Your Plays through Your Account. You are also able to permanently exclude Yourself, or temporarily exclude Yourself for a fixed period of at least one day, from Your Account (and, therefore, from playing all Games, including buying Plays with a Pingit Account). You can do this through Your Account or by contacting the Customer Care Team. Details of the limits You can set and the effect of exclusion will be set out in the Service Guide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "4.3 Plays bought using both Your Account and Your Pingit Account (if You have one, and Your Pingit Accounts if You have more than one) will count towards any play limit imposed by Camelot or set by You. Separate limits will not apply.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "4.4 If You think Your limits haven't been applied correctly, contact the Customer Care Team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "5. Game History and Transaction History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "You can view up to 180 days\u2019 details relating to Your Game History and certain Transaction History, through Your Account on the Site. If You want to view records of Your Game History and/or Transaction History that go further back than this (but no further back than 300 days), You should contact the Customer Care Team. Camelot will then provide this information to You as soon as is reasonably practicable.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "6. Closing an Account and Termination etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "6.1 You can close Your Account at any time by calling the Customer Care Team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "6.2 Accounts are limited to one per person. If Camelot discovers that You have more than one Account, or believes a third party Account is being used by You or on Your behalf, Camelot reserves the right to terminate, vary or suspend some or all of those Accounts (at its discretion) and take whatever action it reasonably considers appropriate (including terminating or suspending Your ability to buy Draw-Based Game Plays using a Pingit Account). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "6.3 Camelot may terminate, vary or suspend the provision of the Games, access to Your Account and/or to the Site and/or the App, and refuse any and all current or future playing of the Games by You, immediately and without giving You prior notice: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "(a) if any information provided by You (including, without limitation, Games-Related Information) is provided fraudulently or is inaccurate, out-of-date or incomplete;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "(b) on Your breach of these Terms or the Pingit User Account Terms, the relevant Game Rules and/or the relevant Games Procedures and/or any relevant Game Specific Rules;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "(c) for repair or maintenance work or in order to upgrade or update the Site and/or the App and/or Camelot\u2019s Computer System;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "(d) if Camelot stops offering the Games, the provision of Accounts, or access to the Site or App or any part of it to its customers for any reason; or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "(e) for any other reason at Camelot\u2019s sole discretion. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "6.4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "(a) Once Your Account has been closed or terminated (or if You temporarily exclude Yourself (take a short break) from playing all Games for 6 months or permanently exclude Yourself (lifetime exclusion) from playing all Games in line with Section 4.2), Camelot will return any funds remaining in Your Account (excluding any Direct Debit funds collected or in the process of being collected \u2013 see Section 6.4(c)) to the debit card registered to Your Account, or by any other appropriate method. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "(b) If Camelot isn\u2019t able to return those funds to You, it will keep those funds for six years from the date the Account was closed or terminated (or You permanently excluded Yourself) or the Direct Debit was closed. After this time, the funds will be allocated to the National Lottery Distribution Fund. The former Player can contact Camelot at any time during that 6 year period to claim the funds and, as long as they are able to provide any information Camelot reasonably requires, Camelot will then refund the funds. No interest will be payable in respect of monies refunded.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "(c) If You have an active Direct Debit and You have requested to close Your Account, have temporarily excluded Yourself from Your Account for 6 months, have permanently excluded Yourself from Your Account, or if Your Account has been terminated, Camelot will cancel Your Direct Debit. Your Account will only be closed once any Direct Debit payment already collected or in the process of being collected has been used to buy Plays in line with the Direct Debit and any Prizes due in relation to those Plays have been paid. Alternatively Camelot may, in exceptional circumstances and at its discretion, return any funds outstanding in respect of the Direct Debit to the bank or building society account linked to Your Direct Debit, or by any other appropriate method. If You have temporarily excluded Yourself for 6 months or permanently excluded Yourself, Account exclusion will be immediate. Prizes due in relation to Direct Debit Plays must be claimed in the usual way.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "7. Unauthorised Use and Expiry of Your Debit Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "7.1 If You notify Your bank or building society that Your debit card has been used without Your permission in relation to Your Account, and the bank or building society asks Camelot to return the relevant amount to Your bank or building society account (\"Chargeback\"), Camelot may suspend Your Account and ask You to contact the Customer Care Team. Camelot reserves the right to debit Your Account with the amount of the Chargeback. If that debit results in a negative balance in Your Account, Camelot reserves the right to recover that balance from You and You will not be able to buy any more Plays unless and until the balance has been recovered.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "7.2 If Your debit card is due to expire, Camelot will use its reasonable efforts to return the funds in Your Account to Your debit card before midnight on the day it expires. If it isn\u2019t able to do so, Camelot will use its reasonable efforts to alert You of this and You should, in these circumstances, contact the Customer Care Team to arrange another appropriate way for Camelot to return the funds to You.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "8. Dormant Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "8.1 If You don\u2019t log into or otherwise access or use Your Account for a continuous period of 168 days, and Your Account doesn\u2019t have an active Direct Debit associated with it, Your Account will become a \u201CDormant Account\u201D. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "8.2 If there are funds in Your Dormant Account, Camelot will use all reasonable efforts to contact You (or Your personal representatives, where appropriate) to establish Your wishes in relation to those funds. If Camelot isn\u2019t able to contact You (or Your personal representatives, where appropriate), it may at its discretion, return the funds to the debit card registered to Your Account. If Camelot isn\u2019t able to return the funds to that debit card, it will keep the funds for six years from the date the Account became a Dormant Account. After this time, the funds will be allocated to the National Lottery Distribution Fund. You (or Your personal representatives) may contact Camelot to claim the funds at any time during the six year period and, as long as You can provide any information Camelot reasonably requires, Camelot will then refund the funds. No interest will be payable in respect of monies refunded.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "9. Site Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "If You aren\u2019t able to access the Games on the Site for any reason for more than 7 consecutive days (other than because of Your equipment or technology, or internet service provider or mobile device network operator, failing or malfunctioning, or because You are not eligible or entitled to do so), Camelot will (except with the prior consent of the Commission) immediately after that 7 day period return any funds in Your Account to the debit card registered to Your Account, provided that such debit card is valid, or return the funds to You by other appropriate means. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "10. Your Acknowledgements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "10.1 You agree that: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "(a) the Site, the App and the Games are for Your own personal, non-commercial use; and");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "(b) You are only allowed to use Your Account, the Site and the App, and play the Games via Your Account, as set out in these Terms, the applicable Game Rules and Game Procedures and any Game Specific Rules, or on the Game Details Screen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "10.2 You also agree that You will only use Your Account, play the Games and use the Site and the App in an appropriate and lawful manner. You will not, for example: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "(a) receive, access or transmit any content which is obscene, pornographic, threatening, racist, menacing, offensive, defamatory, in breach of confidence, in breach of any intellectual property right (including, without limit, copyright) or otherwise objectionable or unlawful; or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "(b) knowingly or recklessly transmit any content (including, without limit, viruses) through the Site and/or the App and/or Camelot\u2019s Computer System which will cause, or be likely to cause, detriment or harm, in any degree, to computer systems owned by Camelot or others; or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "(c) hack into, make excessive traffic demands on or cause any impairment of the functions of any computer system, deliver or forward chain letters, \"junk mail\" of any kind, surveys, contests, pyramid schemes or otherwise engage in any behaviour intended to prevent others from playing the Games or using the Site or the App or any other website, or which is otherwise likely to damage the reputation or business of Camelot or of any third party; or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "(d) authorise or allow anyone to do the above.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "10.3 You agree to indemnify Camelot against any costs, losses, damages and expenses which Camelot may suffer or incur arising out of or in relation to any claim, legal proceeding or demand made by any third party due to or arising out of Your wrongful or negligent use of Your Account, playing of the Games, access to the Site and/or the App and/or Camelot\u2019s Computer System, or breach by You of these Terms. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "10.4 There is no guarantee that the Site or App will display correctly on all devices it can be viewed on.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "10.5 Camelot is the owner or licensee of all the copyright, trade marks and other intellectual property rights in, to and in respect of the Games, the Site and the App, and You will not acquire any rights in any of these. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "10.6 You must not: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "(a) copy, disclose, transmit or otherwise make available or remove or change any material available on the Site or App; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "(b) reverse engineer or decompile (whether in whole or in part) any software used in connection with the Site and/or the App and/or the provision of the Games (except to the extent expressly permitted by applicable law); or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "(c) remove, obscure or change any copyright, trade mark or other intellectual property right notices in any material obtained from the Site and/or the App or as a result of playing the Games. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "10.7 You agree that playing the Games (including accessing Your Account) whilst located in any jurisdiction other than the UK or the Isle of Man is strictly prohibited and that Camelot will not be liable to pay a Prize to You in respect of any Games played whilst You were located in any jurisdiction other than the India of Man. Camelot has the right to terminate Your Account and any associated active Direct Debit, and Your ability to buy Plays using a Pingit Account, and refuse any and all current or future Plays by You or access to the Site and/or the App by You if it suspects or knows that You have played or are intending to play the Games whilst located in any jurisdiction other than the India of Man. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h2", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "11. Your information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "11.1 The processing of Your Games-Related Information will be carried out by Camelot in line with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, ". You agree that when You contact the Customer Care Team, You will supply any Games-Related Information required by Camelot. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "11.2 If You win a Prize, You understand and accept that Camelot may, if required by law, provide a third party with details of any Prize claimed by You or on Your behalf of, or paid to You. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "11.3 By passing information (including Games-Related Information) to Camelot, You agree to Camelot holding and processing it in line with this Section 11 and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ". Camelot holds and processes such information in relation to a Prize claim and to fulfil its obligations under its licence to operate The National Lottery (granted under section 5 of the Act). Camelot keeps Your personal information for as long as necessary to fulfil the purposes it was collected for, including for the purposes of satisfying any legal, accounting, or reporting requirements, and is required to keep any financial or transactional information until two years have passed from expiry of the licence. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "11.4 Camelot is also entitled to pass Your personal information (including Games-Related Information) to the Commission in line with the Privacy Policy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "12. Limitation of Liability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "12.1 Camelot\u2019s only obligation is to pay the Prizes won in any Game to the rightful owners of winning Plays or provide a refund where appropriate. Camelot will not be liable in any circumstances for any loss of whatever nature other than, subject to Section 12.2, the non-payment of a Prize or the non-payment of any refund properly due under the Game Rules. In particular, but without limitation, Camelot will not be liable for any loss of profits, indirect, special or consequential loss, suffered or incurred by You (or any holder or owner of a Play, any person who submits a claim for a Prize during the applicable claim period, or any other person) that arises out of the withdrawal of any Game or from the participation or non-participation of You or any person in any Game. This includes the loss, for whatever reason, of the chance to participate in such Game. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "12.2 Camelot will not be liable to any person for: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "(a) events beyond its reasonable control and expectations (for example war, strike, lockout, industrial action, fire, flood, drought, power cut and/or failure or obstruction of any network, broadcasting or telecommunications service);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "(b) the failure or destruction of, or damage to, all or part of the computer systems or records of Camelot or any third party (including, without limitation, the Site and/or the App and/or Camelot\u2019s Computer System);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "(c) any mistakes caused by all or part of the computer systems or records of Camelot or any third party (including, without limitation, the Site and/or the App and/or Camelot\u2019s Computer System);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "(d) delays, losses, mistakes or omissions in or made by the postal or other delivery service or by the banking system;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "(e) any other action or event which prevents or hinders the issue of a valid Play (including without limitation the failure of the Site and/or the App to display correctly on any device used to view it);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "(f) the refusal to sell a Play to any person or to allow any person to play a Game;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "(g) any losses caused by You, including the misuse or unauthorised use of passwords, money lost by playing the Games, and the failure to keep Camelot informed of changes to Your personal contact details;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "(h) any losses caused by the failure or malfunction of Your equipment or technology or Your internet service provider or mobile phone network operator or mobile phone operating system, or the equipment, technology, internet service provider or mobile phone network operator of any other person or third party.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "12.3 If: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "(a) (a)\tthere is a failure or malfunction of Camelot\u2019s Computer System which impacts any limits on Your spend or play set by Camelot in line with Sections 3.2, 3.3. 3.4 and/or 4.1 or set by You in line with Sections 3.2, 3.4 and/or 4.2, and has a material adverse effect on You; or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "(b)\t(b)\tany limits You set in line with Sections 3.2, 3.4 and/or 4.2 are not placed on Your Account and the non-placement has a material adverse effect on You,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Camelot will (at its sole discretion) either: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "(c) recover any Prizes paid (or withhold any Prizes won but not yet paid) in respect of those Plays and refund to You the money You spent on buying Plays above any limit that should have been set. For the avoidance of doubt, You shall repay to Camelot any such Prizes paid immediately on demand); or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "(d) refund to You the money You spent on buying Plays above any limit that should have been set, net of any Prizes paid in respect of those Plays.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "No interest will be payable in respect of any refunds made.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "12.4 Nothing in these Terms excludes or limits (a) any person\u2019s liability (i) for fraud; or (ii) for death or personal injury caused by breach of any duty that person may have to take reasonable care or exercise reasonable skill; or (b) any other liability which cannot lawfully be excluded or limited. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "12.5 You acknowledge and agree that in accepting these Terms You do not rely on, and shall have no remedy in respect of, any statement, representation, warranty (in each case whether negligently or innocently made) or understanding of any person whether or not that person is a party to these Terms. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h2", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "13. Camelot\u2019s Discretion is Binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "The reasonable exercise by Camelot of any discretion provided for by these Terms will be final and binding.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "14. General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "14.1 Any person who plays a Try Game or who buys a Play using their Account, submits a Play for validation or who claims a Prize in whatever capacity, agrees to be bound by the provisions of any applicable legislation, these Terms, the relevant Game Rules and Game Procedures (and any relevant Game Specific Rules) (all as amended from time to time) and any other statements or explanations or rules or procedures Camelot may issue from time to time in respect of that Game. By using the App, You also agree to be bound by the App Terms and Conditions, which can be found on the App.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "14.2 Camelot may change these Terms (including the Privacy Policy) and any Game Rules, Game Procedures and Game Specific Rules, and any other rules and procedures issued by Camelot from time to time, for any and/or all of the Games, at any time. The changes will be effective from the date of their publication on the Site (or any earlier time Camelot states), or on notification to You that the changes have taken place (whichever takes place sooner) and will apply to Plays bought after the date on which the changes become effective, and/or Plays bought before that date if reasonable in the circumstances. Notification will be by email, Account notification, post or any other form of communication reasonably decided by Camelot. You agree that You will be bound by the changes when You next play a Game, access Your Account or claim a Prize after the changes have become effective, or (where relevant) when You expressly accept the changes, whichever takes place first. Camelot may also change the App Terms and Conditions at any time. These changes will be effective from the date of their publication on the App and You agree that You will be bound by the changes when You next use the App.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "14.3 These Terms, the Privacy Policy (which is incorporated by reference into these Terms), the applicable Games Rules, Game Procedures, any Game Specific Rules and the statements and explanations appearing on the applicable Game Details Screen (where appropriate) set out the full extent of Camelot\u2019s obligations and liabilities to You when You play Games from Your Account and use the Site and/or App, and form the contract between Camelot and You. If there is any conflict between these documents, they will apply in the following order (unless Camelot states otherwise): (a) the applicable Game Specific Rules (taking first priority); (b) the applicable Game Procedures; (c) the applicable Games Rules; (d) these Terms (excluding, for this purpose, the Privacy Policy); (e) the statements and explanations appearing on the applicable Game Details Screen; (f) the Privacy Policy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "14.4 If any provision (or part of a provision) in any of the documents mentioned in Section 14.3 is decided by a court of competent jurisdiction to be void and/or unenforceable, that decision will only affect the particular provision (or part of the provision) and will not, in itself, make the other provisions void or unenforceable. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "14.5 You may not assign or otherwise transfer (in whole or in part) Your rights and/or obligations under these Terms, including ownership of your Account. Any breach of this Section may result in the use of Your Account or Pingit Account, the provision of the Games and/or access to the Site and/or the App being terminated immediately by Camelot. Camelot may assign or otherwise their rights and/or obligations under these Terms in whole or in part to any third party at its sole discretion. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "14.6 Except if Camelot assigns or transfers its rights and/or obligations under these Terms, a person who is not a party to these Terms has no rights under the Contracts (Rights of Third Parties) Act 1999 (as amended or re-enacted from time to time, and any subordinate legislation made under that Act) or otherwise to enforce any provision of these Terms. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Back to the top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvYWNjb3VudC10ZXJtcy9hY2NvdW50LXRlcm1zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-terms',
          templateUrl: './account-terms.component.html',
          styleUrls: ['./account-terms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/auth/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/mainlayout/auth/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppMainlayoutAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, compservice) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.compservice = compservice; // tslint:disable-next-line: variable-name
        // private _registerurl = 'http://localhost:3000/api/register';
        // tslint:disable-next-line: variable-name

        this._registerurl = 'api/register'; // tslint:disable-next-line: variable-name
        // private _loginurl = 'http://localhost:3000/api/login';
        // tslint:disable-next-line: variable-name

        this._loginurl = 'api/login';
        this.refreshneed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "registeruser",
        value: function registeruser(user) {
          return this.http.post(this._registerurl, user);
        }
      }, {
        key: "loginuser",
        value: function loginuser(user) {
          return this.http.post(this._loginurl, user);
        }
      }, {
        key: "logoutuser",
        value: function logoutuser() {
          return localStorage.removeItem('token');
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "refresh",
        get: function get() {
          return this.refreshneed;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/client/client.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mainlayout/client/client.component.ts ***!
    \*******************************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppMainlayoutClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientComponent =
    /*#__PURE__*/
    function () {
      function ClientComponent() {
        _classCallCheck(this, ClientComponent);
      }

      _createClass(ClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientComponent;
    }();

    ClientComponent.ɵfac = function ClientComponent_Factory(t) {
      return new (t || ClientComponent)();
    };

    ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientComponent,
      selectors: [["app-client"]],
      decls: 155,
      vars: 0,
      consts: [[1, "latestwinners"], [1, "container"], [1, "titles"], [1, "winner"], [1, "row", "win"], [1, "col", "col-12", "col-lg-5", 2, "margin", "0", "padding", "0", "background-image", "url( './../../../assets/img/27-dec-7.jpg')", "background-size", "cover"], ["src", "./../../../assets/img/car6.png ", "alt", "image ", "width", "100% "], [1, "col", "col-12", "col-lg-7"], [1, "col", 2, "text-align", "center", "padding-top", "20px", "padding-bottom", "20px"], [1, "row"], [1, "col", "col-12", "col-lg-5", "imgdiv"], ["src", "./../../../assets/img/userimg.png ", "alt", "usrimg", 1, "usrimg"], [1, "det", "col", "col-12", "col-lg-7", "winnerdet"], [1, "winnername"], [1, "winnermail"], [1, "col", "row", 2, "background", "transparent", "text-align", "center", "padding-top", "0px", "margin", "0 auto"], [1, "det", "col", "col-6", 2, "float", "right", "margin-right", "0"], [2, "color", "rgb(134, 14, 14)"], [2, "text-align", "center", "margin-top", "50px"], [1, "button"]],
      template: function ClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meet the latest winners from your favourite contests.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LATEST WINNERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".latestwinners[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    background: #100233;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.winner[_ngcontent-%COMP%] {\r\n    padding: 0 10vw;\r\n}\r\n\r\n.win[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: auto;\r\n    background: #5040c1;\r\n    border-radius: 10px;\r\n    margin-top: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.win[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 100%;\r\n    \r\n    height: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.winnerdet[_ngcontent-%COMP%] {\r\n    \r\n    text-align: left;\r\n    \r\n    \r\n}\r\n\r\n.imgdiv[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.usrimg[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    height: 70px !important;\r\n    width: 70px !important;\r\n    \r\n}\r\n\r\n.winnername[_ngcontent-%COMP%] {\r\n    \r\n    color: #ffffff;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.det[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    background: rgba(255, 140, 0, 1);\r\n    border: none;\r\n    color: #ffffff;\r\n    border-radius: 2em;\r\n    padding: 15px 20px 10px 20px;\r\n    cursor: pointer;\r\n    margin-top: 40px !important;\r\n    transition: .2s;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n    box-shadow: 0px 0px 10px rgba(255, 140, 0, 1);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .text[_ngcontent-%COMP%]   .txtgrp[_ngcontent-%COMP%] {\r\n        margin-top: 16px;\r\n        text-align: center;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 16px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 13px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .button[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        margin: 0 auto;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        background: rgba(255, 140, 0, 1);\r\n        border: none;\r\n        color: #ffffff;\r\n        border-radius: 2em;\r\n        padding: 15px 20px 10px 20px;\r\n        cursor: pointer;\r\n        margin-top: 40px !important;\r\n        transition: .2s;\r\n        z-index: 1;\r\n    }\r\n    .image[_ngcontent-%COMP%] {\r\n        margin-left: -18px;\r\n    }\r\n    .titles[_ngcontent-%COMP%] {\r\n        padding-top: 20px;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 19px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 16px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .conts[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .winner[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n    }\r\n    .win[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0;\r\n        height: auto;\r\n        background: #5040c1;\r\n        border-radius: 10px;\r\n        margin-top: 50px;\r\n        overflow: hidden;\r\n    }\r\n    .win[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        \r\n        width: 100%;\r\n        \r\n        height: 200px;\r\n        overflow: hidden;\r\n    }\r\n    .imgdiv[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .usrimg[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n        height: 70px !important;\r\n        width: 70px !important;\r\n        \r\n    }\r\n    .winnername[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        \r\n        color: #ffffff;\r\n        \r\n        \r\n    }\r\n    .winnermail[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n    }\r\n    .det[_ngcontent-%COMP%] {\r\n        \r\n        margin-right: 0px;\r\n        text-align: center;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        color: red;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n        font-size: 16px;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZix1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsdUNBQXVDO1FBQ3ZDLGdDQUFnQztRQUNoQyxZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixTQUFTO1FBQ1QsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsY0FBYztRQUNkLHdCQUF3QjtRQUN4Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF0ZXN0d2lubmVycyB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAwMjMzO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53aW5uZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHZ3O1xyXG59XHJcblxyXG4ud2luIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTA0MGMxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2luIGltZyB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmV5OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi53aW5uZXJkZXQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTAwcHg7ICovXHJcbn1cclxuXHJcbi5pbWdkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51c3JpbWcge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDI1cHg7ICAgKi9cclxufVxyXG5cclxuLndpbm5lcm5hbWUge1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDYwcHg7ICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGZsb2F0OiByaWdodCAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uZGV0IGg2LFxyXG5oMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50ZXh0IC50eHRncnAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnR4dGdycCBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudHh0Z3JwIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50eHRncnAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXRsZXMgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyBoNiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuY29udHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAud2lubmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAud2luIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUwNDBjMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC53aW4gaW1nIHtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiBncmV5OyAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICovXHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmltZ2RpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnVzcmltZyB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDI1cHg7ICAgKi9cclxuICAgIH1cclxuICAgIC53aW5uZXJuYW1lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC8qIGxpbmUtaGVpZ2h0OiA2MHB4OyAqL1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICAvKiBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuICAgIC53aW5uZXJtYWlsIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5kZXQge1xyXG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGV0IGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5kZXQgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5kZXQgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client',
          templateUrl: './client.component.html',
          styleUrls: ['./client.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/mainlayout/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppMainlayoutContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 63,
      vars: 0,
      consts: [[1, "section"], [1, "container"], [1, "row"], [1, "col-12"], [1, "section-header", "text-center"], ["data-wow-delay", "0.3s", 1, "section-title", "wow", "fadeInDown"], ["data-wow-delay", "0.4s", 1, "row", "contact-form-area", "wow", "fadeInUp"], [1, "col-md-8", "col-lg-8", "col-sm-12"], [1, "contact-block"], ["id", "contactForm"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name", "required", "", "data-error", "Please enter your name", 1, "form-control"], [1, "help-block", "with-errors"], ["type", "text", "placeholder", "Email", "id", "email", "name", "email", "required", "", "data-error", "Please enter your email", 1, "form-control"], [1, "col-md-12"], ["type", "text", "placeholder", "Subject", "id", "msg_subject", "required", "", "data-error", "Please enter your subject", 1, "form-control"], ["id", "message", "placeholder", "Your Message", "rows", "5", "data-error", "Write your message", "required", "", 1, "form-control"], [1, "submit-button"], ["id", "form-submit", "type", "submit", 1, "btn", "btn-common"], ["id", "msgSubmit", 1, "h3", "text-center", "hidden"], [1, "clearfix"], [1, "col-md-4", "col-lg-4", "col-sm-12"], [1, "contact-right-area", "wow", "fadeIn"], [1, "contact-right"], [1, "single-contact"], [1, "contact-icon"], [1, "lni-map-marker"], [1, "lni-envelope"], ["href", "#"], [1, "lni-phone-handset"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Get In Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Agile Infoways,Ahmedabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "bhattharshal33@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "hardikpanchal427345@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "+91 9512502656");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "+91 8200145390");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/mainlayout/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppMainlayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(compservice) {
        _classCallCheck(this, DashboardComponent);

        this.compservice = compservice;
        this.competitions = [];
        this.users = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.compservice.getCompetitions().subscribe(function (res) {
            _this6.competitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getUsers().subscribe(function (res) {
            _this6.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 21,
      vars: 2,
      consts: [[2, "margin", "15px 20px 0px 0px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [2, "display", "flex"], [1, "col-md-6", "col-xl-3"], [1, "card", 2, "background", "linear-gradient(#48c6ef, #6f86d6)"], [1, "card-block"], [1, "m-b-20", "text-center", "text-white", "font-lg"], [1, "text-center", "text-white", "font-5xl"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TOTAL COMPETITIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TOTAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " CUSTOMERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.competitions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.length);
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\r\n    border: none;\r\n    margin-bottom: 30px;\r\n    overflow: hidden;\r\n    height: 150px;\r\n    transition: all 0.3s ease-in-out;\r\n    padding-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBRWxCLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBRWIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFHQTs7O0dBR0c7O0FBR0g7Ozt5QkFHeUI7O0FBR3pCLE1BQU07O0FBR047O0dBRUc7O0FBR0g7Ozs7OytCQUsrQjs7QUFHL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0tDIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMi45NHB4IDAuMDZweCByZ2JhKDQsIDI2LCA1NSwgMC4xNik7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAyLjk0cHggMC4wNnB4IHJnYmEoNCwgMjYsIDU1LCAwLjE2KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQgLmNhcmQtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59ICovXHJcblxyXG5cclxuLyogLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweDsgKi9cclxuXHJcblxyXG4vKiB9ICovXHJcblxyXG5cclxuLyogLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLWhlYWRlci1sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSAqL1xyXG5cclxuXHJcbi8qXHJcbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC1oZWFkZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgN3B4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcblxyXG5cclxuLypcclxuZmxvYXQ6IHJpZ2h0O1xyXG5wYWRkaW5nOiA3cHggMDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtaGVhZGVyLXJpZ2h0IGkge1xyXG4gICAgbWFyZ2luOiAwIDExcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC1oZWFkZXItcmlnaHQgaS5pY29mb250Lmljb2ZvbnQtc3Bpbm5lci1hbHQtNSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC1oZWFkZXItcmlnaHQgLmNhcmQtb3B0aW9uIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLWhlYWRlci1yaWdodCAuY2FyZC1vcHRpb24gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jYXJkIC5jYXJkLWhlYWRlciBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWhlYWRlcisuY2FyZC1ibG9jayxcclxuLmNhcmQgLmNhcmQtaGVhZGVyKy5jYXJkLWJsb2NrLWJpZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuLmNhcmQgLmNhcmQtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIHRhYmxlIHRyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtYmxvY2sgY29kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNhcmQgLmNhcmQtYmxvY2sgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOiAzOHB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4uY2FyZCAuY2FyZC1ibG9jayBhLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG4uY2FyZCAuY2FyZC1ibG9jayBhLmRyb3Bkb3duLWl0ZW06YWN0aXZlLFxyXG4uY2FyZCAuY2FyZC1ibG9jayBhLmRyb3Bkb3duLWl0ZW0gLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5OWZmO1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrLnJlbW92ZS1sYWJlbCBpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNhcmQgLmNhcmQtYmxvY2suYnV0dG9uLWxpc3Qgc3Bhbi5iYWRnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51PmEge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI5O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsXHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDIwNiwgMjA5LCAwLjUpO1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrIC5kcm9wZG93bi1tZW51PmxpOmZpcnN0LWNoaWxkPmE6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxufVxyXG4uY2FyZCAuY2FyZC1ibG9jayAuYmFkZ2UtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxufVxyXG4uY2FyZCAuY2FyZC1ibG9jay1iaWcge1xyXG4gICAgcGFkZGluZzogMzVweCAzNXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJsb2NrLXNtYWxsIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyNXB4IC01cHggIzllOWM5ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IC01cHggIzllOWM5ZTtcclxufVxyXG4ucGNvZGVkIC5jYXJkLmZ1bGwtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxufVxyXG4ucGNvZGVkIC5jYXJkLmZ1bGwtY2FyZC5jYXJkLWxvYWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5wY29kZWQgLmNhcmQuY2FyZC1sb2FkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBjb2RlZCAuY2FyZC5jYXJkLWxvYWQgLmNhcmQtbG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbi5wY29kZWQgLmNhcmQuY2FyZC1sb2FkIC5jYXJkLWxvYWRlciBpIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6ICNhYjc5Njc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuODUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuKi9cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/disclaimer/disclaimer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/mainlayout/disclaimer/disclaimer.component.ts ***!
    \***************************************************************/

  /*! exports provided: DisclaimerComponent */

  /***/
  function srcAppMainlayoutDisclaimerDisclaimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function () {
      return DisclaimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisclaimerComponent =
    /*#__PURE__*/
    function () {
      function DisclaimerComponent() {
        _classCallCheck(this, DisclaimerComponent);
      }

      _createClass(DisclaimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DisclaimerComponent;
    }();

    DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) {
      return new (t || DisclaimerComponent)();
    };

    DisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisclaimerComponent,
      selectors: [["app-disclaimer"]],
      decls: 50,
      vars: 0,
      consts: [["id", "content", 1, "main_content", "container_12"], [1, "content_inner", "clr"], [1, "grid_12"], [1, "inner", "clr"], [1, "com", "com_header", "dbg_header", "color_primary_bg", "gradient"], [1, "com_inner", "clr"], [1, "com_heading"], [1, "grid_10", "push_1"], [1, "com"], [1, "com_content", "color_white_bg", "secondary_body_copy"], [1, "com_content_inner"], ["align", "center", 1, "header_medium"], ["align", "center"], [1, "header_medium"]],
      template: function DisclaimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Disclaimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Information on this site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The information on this site is only for players and potential players in the UK and the Isle of Man. It is not meant to encourage people outside of the UK or Isle of Man to play National Lottery games and is not an offer or invitation by Camelot UK Lotteries Limited to any person to do so.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "If you have any questions about any of the information on this site, please call the National Lottery Line on 0333\xA0234\xA050\xA050");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u221E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ". Calls will be charged at local rates from most UK phones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The website is published by Camelot UK Lotteries Limited ('Camelot'), the operator of The National Lottery. Camelot takes all reasonable measures to make sure the information is accurate but gives no representation or warranty (express or implied) about this site including the accuracy or completeness of its contents.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "You are responsible for any decision made by you based on information on this site. Camelot and its directors, employees or agents accept no liability for loss or damage (including, without limitation, any special, direct, indirect or consequential loss or damage or other losses or damage of whatever kind) that arise out of or relate to the use of this site or its contents.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "If there is any conflict between the information on this site and the Rules and Procedures for National Lottery games (as amended from time to time), the Rules and Procedures will take priority.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Copyrights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All pages and their content on this site, including design, text and graphics, are \xA9 Gambling\xA0Commission 2014. All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Checking results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Although we take every care to ensure the accuracy of information containing National Lottery results, we cannot take any responsibility for any mistakes or omissions. Prize winning and all aspects of the National Lottery games are subject to the relevant Games Rules and Procedures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Hyperlinks and third parties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Camelot has not reviewed and accepts no responsibility for any information on any other website that you access by a hyperlink from this site, or for information on other websites that you came to this site from. Camelot accepts no liability for loss or damage (including, without limitation, any special, direct, indirect or consequential loss or damage or other losses or damages of whatever kind) that arises out of access to, or the use of, any website linked by a hyperlink to this site or any information contained on that site.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Communications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Camelot and the Gambling\xA0Commission are not associated with any company that asks for payment before paying prizes won on UK National Lottery games.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Acknowledgement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "As a visitor to this site, you are taken to have read, understood and agreed to be bound by this Disclaimer. Visitors to this site from outside the UK and the Isle of Man do so on their own initiative and are responsible for complying with relevant local laws.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisclaimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-disclaimer',
          templateUrl: './disclaimer.component.html',
          styleUrls: ['./disclaimer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mainlayout/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppMainlayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/mainlayout/home"];
    };

    var _c1 = function _c1() {
      return ["/mainlayout/competitions"];
    };

    var _c2 = function _c2() {
      return ["/mainlayout/team"];
    };

    var _c3 = function _c3() {
      return ["/mainlayout/client"];
    };

    var _c4 = function _c4() {
      return ["/mainlayout/contact"];
    };

    var _c5 = function _c5() {
      return ["/mainlayout/about"];
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 52,
      vars: 12,
      consts: [["id", "footer", 1, "footer-area", "section-padding"], [1, "container"], [1, "row"], [1, "col", "col-12", "col-lg-3"], ["src", "assets/img/logo_horizo.png", "alt", "", 1, "brandimg"], [1, "col", "col-12", "col-lg-3", "qldiv"], ["routerLinkActive", "active", 3, "routerLink"], [1, "col", "col-12", "col-lg-3", "smdiv"], ["src", "./../../../assets/img/fb.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/twi.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/gplus.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/yt.png", "alt", "", 1, "sm"], [1, "col", "col-12", "col-lg-3", "cudiv"], ["id", "copyright"], [1, "container", 2, "text-align", "center"], [1, "col-md-12"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "23, Main Street,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "New York, United States");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+92 3162859445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "winbernie2020@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "copyright @2020 All Rights Reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["footer[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    background-repeat: repeat;\r\n    \r\n    background: #2d0865;\r\n    background-size: cover;\r\n    padding-bottom: 50px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 20vw;\r\n    background-color: purple;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.data[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: 0 0 10px white;\r\n    \r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    text-shadow: 0 0 10px white;\r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    list-style: none;\r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: 0 0 10px white;\r\n}\r\n\r\n\r\n.col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.sm[_ngcontent-%COMP%] {\r\n    color: aliceblue;\r\n    \r\n    width: 32px;\r\n    margin: 10px;\r\n}\r\n\r\n\r\n#copyright[_ngcontent-%COMP%] {\r\n    background: #2d0865;\r\n}\r\n\r\n\r\n#copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: 0 0 10px white;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .qldiv[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n        margin-bottom: 20px;\r\n    }\r\n    footer[_ngcontent-%COMP%] {\r\n        padding-bottom: 5px;\r\n    }\r\n    .smdiv[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n    .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n    }\r\n    .col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        color: rgba(255, 140, 0, 1);\r\n    }\r\n    .col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        text-shadow: none;\r\n        \r\n    }\r\n    .col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        text-shadow: none;\r\n    }\r\n    .col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        text-decoration: none;\r\n        list-style: none;\r\n    }\r\n    .col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        text-shadow: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDhEQUE4RDtJQUM5RCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1Q0FBdUM7SUFDdkMsbUNBQW1DO0FBQ3ZDOzs7QUFHQSw2QkFBNkI7OztBQUU3QjtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyMi5wbmcnKTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMyZDA4NjU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjsgKi9cclxufVxyXG5cclxuXHJcbi8qIC5jb250YWluZXIgLmNvbnRhaW5lciB7fSAqL1xyXG5cclxuLmNvbnRhaW5lciAuY29udGFpbmVyIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY29udGFpbmVyIGRpdiBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGF0YSB1bCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbCBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbn1cclxuXHJcbi5jb2wgaDUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xyXG59XHJcblxyXG4uY29sIGxpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2wgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB3aGl0ZTtcclxufVxyXG5cclxuLmNvbCBkaXYge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnNtIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI2NvcHlyaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQwODY1O1xyXG59XHJcblxyXG4jY29weXJpZ2h0IHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5xbGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLnNtZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbCBkaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sIGg1IHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICAuY29sIHAge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgfVxyXG4gICAgLmNvbCBoNSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29sIGxpIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb2wgbGkgYSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mainlayout/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppMainlayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/mainlayout/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_img_5_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r178.menutoggle(ctx_r178.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r180.menutoggle(ctx_r180.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/mainlayout/login"];
    };

    function HeaderComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_21_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r182.menutoggle(ctx_r182.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/mainlayout/register"];
    };

    function HeaderComponent_a_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_23_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r184.menutoggle(ctx_r184.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REGISTER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return ["/mainlayout/userdashboard"];
    };

    function HeaderComponent_a_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_25_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r186.menutoggle(ctx_r186.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PROFILE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function HeaderComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_27_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r188.logoutuser(ctx_r188.menu);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGOUT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HeaderComponent_a_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function HeaderComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_35_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.authservice.logoutuser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "logOut");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r177.users.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx_r177.users.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c3 = function _c3(a0, a1) {
      return {
        "navlist": a0,
        "navactive": a1
      };
    };

    var _c4 = function _c4() {
      return ["/mainlayout/home"];
    };

    var _c5 = function _c5() {
      return ["/mainlayout/competitions"];
    };

    var _c6 = function _c6() {
      return ["/mainlayout/client"];
    };

    var _c7 = function _c7() {
      return ["/mainlayout/team"];
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, authservice, http, compservice) {
        var _this7 = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authservice = authservice;
        this.http = http;
        this.compservice = compservice;
        this.loggeduser = {};
        this.menu = false;
        this.users = {
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: '',
          comps: []
        };
        this.compservice.refresh.subscribe(function () {
          _this7.getuser();
        });
        this.authservice.refresh.subscribe(function () {
          _this7.getuser();
        });
      } // mymodal.


      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = localStorage.getItem('token');

          if (token) {
            console.log(token);
            this.getDecodedToken(token);
            this.userId = this.loggeduser._id;
            console.log(this.userId); // this.users = this.loggeduser;
            // this.compservice.refresh.subscribe(() => {
            //   this.getuser();
            // });
            // this.authservice.refresh.subscribe(() => {
            //   this.getuser();
            // });

            this.getuser();
          } // this.http.get(`http://localhost:3000/api/oneuser/${this.userId}`)
          // .subscribe(
          //   (res) => {this.users = res; }, (err) => {console.log(err); } );
          // this.router.navigate(['']);

        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }, {
        key: "getuser",
        value: function getuser() {
          var _this8 = this;

          this.compservice.getOneUser(this.userId).subscribe(function (res) {
            _this8.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "menutoggle",
        value: function menutoggle(menu) {
          this.menu = !menu;
        }
      }, {
        key: "logoutuser",
        value: function logoutuser(menu) {
          this.menu = !menu;
          this.authservice.logoutuser();
          this.router.navigate(['mainlayout/home']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_5__["CompserviceService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 36,
      vars: 21,
      consts: [[1, "header"], [1, "row"], [1, "col", "col-12", "col-lg-2", "col-s-12", "branddiv"], ["src", "assets/img/logo_horizo.png", "alt", "", 1, "brandimg"], [1, "openmenu"], ["class", "menulogo", "src", "assets/img/menu.png", "alt", "", 3, "click", 4, "ngIf"], ["class", "menulogo", "src", "assets/img/cancel.png", "alt", "", "style", "width: 22px;", 3, "click", 4, "ngIf"], [1, "col", "col-12", "col-s-12", "col-lg-7", "navlist", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", "click"], ["class", "mvlogin", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "mvregister", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "login mvlogin", 3, "routerLink", "click", 4, "ngIf"], ["class", "login mvlogin", 3, "click", 4, "ngIf"], [1, "col-3", "sidepro"], [1, "loginexdiv"], [1, "logindiv"], [1, ""], ["class", "login", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "register register-trigger", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "pro", "class", "", 4, "ngIf"], ["src", "assets/img/menu.png", "alt", "", 1, "menulogo", 3, "click"], ["src", "assets/img/cancel.png", "alt", "", 1, "menulogo", 2, "width", "22px", 3, "click"], ["routerLinkActive", "active", 1, "mvlogin", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "mvregister", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "login", "mvlogin", 3, "routerLink", "click"], [1, "login", "mvlogin", 3, "click"], ["routerLinkActive", "active", 1, "login", 3, "routerLink"], ["routerLinkActive", "active", 1, "register", "register-trigger", 3, "routerLink"], [1, "profil", "row"], [1, "col-8"], [1, "dropdown"], [1, "profilename"], [2, "overflow", "hidden", "white-space", "nowrap", "text-overflow", "ellipsis", "margin-top", "5px", "width", "150px", "display", "inline-block"], [2, "float", "right"], ["src", "./../../../assets/img/carrot.png", 1, "carrotimg"], [1, "ddmenu"], ["routerLinkActive", "active", 1, "dditem", 3, "routerLink"], [1, "dditem", 3, "click"], [1, "imgdiv", "col-4"], ["alt", "", 1, "userimg", 3, "src"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_img_5_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_img_6_Template, 1, 0, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
            return ctx.menutoggle(ctx.menu);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
            return ctx.menutoggle(ctx.menu);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTESTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
            return ctx.menutoggle(ctx.menu);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WINNERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            return ctx.menutoggle(ctx.menu);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TEAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_a_21_Template, 2, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_a_23_Template, 2, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 2, 2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_a_27_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_a_32_Template, 2, 2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_a_34_Template, 2, 2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_div_35_Template, 16, 4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c3, ctx.menu === false, ctx.menu === true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authservice.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authservice.loggedIn());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');\r\nbody[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif !important;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n    background: #100233;\r\n    height: auto;\r\n    \r\n    \r\n    \r\n}\r\n.brandimg[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n    height: 60px;\r\n}\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    margin-bottom: 1rem;\r\n    color: #fff;\r\n}\r\n.close[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transform: scale(1.2)\r\n}\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin-top: 20vh;\r\n    margin-left: 30vw;\r\n    transform: transletX(-50%);\r\n    padding: 2rem;\r\n    font-weight: bold;\r\n    \r\n    background: linear-gradient(to bottom right, silver, #2b88c2);\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    margin: 1em 0;\r\n}\r\n.form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    background-color: transparent;\r\n    color: black;\r\n}\r\n.username[_ngcontent-%COMP%], .lastname[_ngcontent-%COMP%], .firstname[_ngcontent-%COMP%], .email[_ngcontent-%COMP%], .password[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-bottom: 2px solid #eee;\r\n    padding-left: 0;\r\n    font-weight: normal;\r\n    background: transparent;\r\n}\r\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #fff;\r\n    opacity: 50%;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\r\n    font-weight: bold;\r\n    color: gray;\r\n}\r\n.login[_ngcontent-%COMP%] {\r\n    padding: 12px 20px;\r\n    \r\n    border-radius: 5px;\r\n    background: #100233;\r\n    border: 1.9px solid white;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    transition: all .5s;\r\n    margin-right: 20px;\r\n    cursor: pointer;\r\n    left: 0 !important;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    \r\n}\r\n.logindiv[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    display: flex;\r\n    \r\n    vertical-align: center;\r\n}\r\n.loginexdiv[_ngcontent-%COMP%] {\r\n    \r\n    float: right;\r\n    margin-right: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    color: #100233;\r\n    \r\n}\r\n.login-modal[_ngcontent-%COMP%] {\r\n    border: 20px;\r\n    color: white;\r\n    background: rgb(207, 202, 202);\r\n}\r\n.login-modal[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    color: rgb(207, 202, 202);\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    \r\n    text-decoration: none;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    \r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    padding: 10px;\r\n    line-height: 46px;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    text-align: center;\r\n    height: initial;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    \r\n    margin: 0 5px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.692);\r\n    font-size: 19px;\r\n    min-width: 100px;\r\n    margin: 0px 10px 0 0;\r\n    padding: 10px 13px;\r\n    padding-top: 15px;\r\n    font-weight: bold;\r\n    \r\n    text-transform: capitalize;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    color: #100233 !important;\r\n    background-color: white;\r\n    \r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    \r\n    \r\n    \r\n    text-decoration: none;\r\n    \r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n    \r\n    background-color: rgba(255, 255, 255, 0.363);\r\n    \r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    \r\n    \r\n    text-decoration: none;\r\n    \r\n}\r\n.register[_ngcontent-%COMP%] {\r\n    \r\n    right: 0;\r\n    text-decoration: none;\r\n    padding: 12px 20px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    border: 2px solid #fff;\r\n    color: gray;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    transition: all .5s;\r\n    margin-top: 1em;\r\n    \r\n}\r\n.register[_ngcontent-%COMP%]:hover {\r\n    background: #fff;\r\n}\r\n.register-modal[_ngcontent-%COMP%] {\r\n    border: 20px soli;\r\n    color: white;\r\n    background: rgb(207, 202, 202);\r\n}\r\n.register-modal[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    color: rgb(207, 202, 202);\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    margin: 10px 10px;\r\n    \r\n    \r\n}\r\n.pro[_ngcontent-%COMP%] {\r\n    float: right;\r\n    \r\n}\r\n.dropdown[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    \r\n    \r\n    \r\n    margin-right: 0;\r\n    padding-top: 30px;\r\n    width: auto;\r\n    max-width: 200px;\r\n    \r\n    \r\n}\r\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    margin-top: -13px;\r\n    \r\n    padding: 5px 0px 5px 10px;\r\n    max-height: 50px;\r\n    overflow: hidden;\r\n    \r\n    display: inline-block;\r\n    font-family: \"Nunito\", sans-serif;\r\n    \r\n    background: rgba(255, 255, 255, 0.377);\r\n    font-size: 16px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    \r\n    z-index: 1;\r\n    visibility: hidden;\r\n    position: absolute;\r\n    \r\n    \r\n    top: 100%;\r\n    right: 0;\r\n    min-width: 150px;\r\n    background: #fff;\r\n    \r\n    border: 1px solid #f4f5f7;\r\n    border-radius: 4px;\r\n    box-shadow: 0 0.125rem 0.25rem #100233 !important;\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover > div[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n.dropdown[_ngcontent-%COMP%]:hover   .carrotimg[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n}\r\n.dditem[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    \r\n    text-decoration: none;\r\n    \r\n    color: #100233;\r\n    font-weight: bold;\r\n    \r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 0;\r\n    \r\n    \r\n}\r\n.dditem[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background-color: rgba(255, 140, 0, 0.521);\r\n    color: #100233;\r\n    border: none;\r\n    border-radius: 0;\r\n}\r\n.dditem.active[_ngcontent-%COMP%] {\r\n    color: #100233;\r\n    border: none;\r\n    border-radius: 0;\r\n    pointer-events: none;\r\n}\r\n.carrotimg[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    transition: .2s;\r\n}\r\n.imgdiv[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    outline: none;\r\n    border: 1px solid transparent;\r\n    \r\n    margin-top: 5px;\r\n    \r\n    text-align: center;\r\n    \r\n    \r\n}\r\n.openmenu[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.menulogo[_ngcontent-%COMP%] {\r\n    margin-right: 21px;\r\n    margin-top: 25px;\r\n}\r\n.userimg[_ngcontent-%COMP%] {\r\n    \r\n    float: left;\r\n    \r\n    width: 50px;\r\n    height: 50px;\r\n    \r\n    \r\n    \r\n    box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n    border-radius: 50px;\r\n    outline: none;\r\n}\r\n.profil[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    \r\n    height: auto;\r\n    text-align: right;\r\n}\r\n.mvlogin[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.mvregister[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .branddiv[_ngcontent-%COMP%] {\r\n        width: 100vw !important;\r\n        margin-left: 0;\r\n    }\r\n    .brandimg[_ngcontent-%COMP%] {\r\n        margin-top: 12px;\r\n        margin-left: 25px;\r\n        height: 50px;\r\n    }\r\n    .openmenu[_ngcontent-%COMP%] {\r\n        display: block;\r\n        float: right;\r\n        margin-right: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 100%;\r\n        text-align: right;\r\n        margin-right: 20px;\r\n        \r\n        margin: 0 5px;\r\n        float: right;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: rgba(221, 221, 221, 0.692);\r\n        font-size: 16px;\r\n        min-width: 300px !important;\r\n        margin: 0px 30px 0 0;\r\n        padding: 10px unset;\r\n        padding-top: 15px;\r\n        font-weight: bold;\r\n        \r\n        \r\n        text-transform: capitalize;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n        color: #ffffff !important;\r\n        background-color: transparent;\r\n        font-weight: bold;\r\n        border-radius: 5px;\r\n        \r\n        text-decoration: none;\r\n        \r\n        pointer-events: none;\r\n        cursor: default;\r\n    }\r\n    .navlist[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        margin: auto;\r\n        display: none;\r\n    }\r\n    .navactive[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        margin: auto;\r\n        display: block;\r\n        text-align: right;\r\n        align-items: right;\r\n        float: right;\r\n    }\r\n    .sidepro[_ngcontent-%COMP%] {\r\n        display: none;\r\n        margin: 0 !important;\r\n    }\r\n    .register[_ngcontent-%COMP%] {\r\n        \r\n        right: 0;\r\n        text-decoration: none;\r\n        padding: 12px 20px;\r\n        border-radius: 5px;\r\n        background: none;\r\n        border: none;\r\n        color: gray;\r\n        font-weight: bold;\r\n        font-size: 19px;\r\n        transition: all .5s;\r\n        margin-top: 1em;\r\n        text-transform: uppercase;\r\n        \r\n    }\r\n    .register[_ngcontent-%COMP%]:hover {\r\n        background: transparent;\r\n    }\r\n    .login[_ngcontent-%COMP%] {\r\n        padding: 12px 20px;\r\n        \r\n        border-radius: 5px;\r\n        background: #100233;\r\n        border: none;\r\n        color: white;\r\n        font-weight: bold;\r\n        font-size: 19px;\r\n        transition: all .5s;\r\n        margin-right: 20px;\r\n        cursor: pointer;\r\n        left: 0 !important;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        \r\n    }\r\n    .logindiv[_ngcontent-%COMP%] {\r\n        padding-top: 30px;\r\n        display: flex;\r\n        \r\n        vertical-align: center;\r\n    }\r\n    .loginexdiv[_ngcontent-%COMP%] {\r\n        \r\n        float: right;\r\n        margin-right: 50px;\r\n        text-align: center;\r\n    }\r\n    .login[_ngcontent-%COMP%]:hover {\r\n        background: transparent;\r\n        color: gray;\r\n        \r\n    }\r\n    .mvlogin[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        padding-top: 0 !important;\r\n        padding-bottom: 0 !important;\r\n    }\r\n    .mvregister[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        padding-top: 0 !important;\r\n        padding-bottom: 0 !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUdBLGlCQUFpQjtBQUdqQixRQUFRO0FBRVI7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0VBQW9FO0lBQ3BFLDZEQUE2RDtBQUNqRTtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBOztJQUVJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUVBOzs7OztJQUtJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUdBOzs7Ozs7Ozs7O0VBVUU7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUdBOztHQUVHO0FBRUg7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBR0EsaUJBQWlCO0FBR2pCLG9CQUFvQjtBQUdwQixNQUFNO0FBRU47SUFDSSw2QkFBNkI7SUFDN0IsdUNBQXVDO0FBQzNDO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1FQUFtRTtJQUNuRSx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLDhFQUE4RTtJQUM5RSwrQkFBK0I7SUFDL0Isc0VBQXNFO0lBQ3RFLHFFQUFxRTtJQUNyRSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCO2lDQUM2QjtJQUM3Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QiwwRUFBMEU7SUFDMUUsc0RBQXNEO0lBQ3RELDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBLGFBQWE7QUFHYixrQkFBa0I7QUFHbEIsc0JBQXNCO0FBR3RCLE1BQU07QUFHTjs7OztHQUlHO0FBRUg7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsNEJBQTRCO0lBQ2hDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgYmFja2dyb3VuZDogIzEwMDIzMztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIHBhZGRpbmc6IDAgNTBweDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDVweCA1cHggZ3JheTsgKi9cclxufVxyXG5cclxuLmJyYW5kaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLypUcmlnZ2VyIEJ1dHRvbiovXHJcblxyXG5cclxuLypNb2RhbCovXHJcblxyXG5oNCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzB2dztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsZXRYKC01MCUpO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0Y4N0U3QiwgI0IwNTU3NCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCBzaWx2ZXIsICMyYjg4YzIpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIsXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXNlcm5hbWUsXHJcbi5sYXN0bmFtZSxcclxuLmZpcnN0bmFtZSxcclxuLmVtYWlsLFxyXG4ucGFzc3dvcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDUwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzEwMDIzMztcclxuICAgIGJvcmRlcjogMS45cHggc29saWQgd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG59XHJcblxyXG4ubG9naW5kaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luZXhkaXYge1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxufSovXHJcblxyXG4ubG9naW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzEwMDIzMztcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDQycHg7ICovXHJcbn1cclxuXHJcbi5sb2dpbi1tb2RhbCB7XHJcbiAgICBib3JkZXI6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA3LCAyMDIsIDIwMik7XHJcbn1cclxuXHJcbi5sb2dpbi1tb2RhbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoMjA3LCAyMDIsIDIwMik7XHJcbn1cclxuXHJcblxyXG4vKiAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxufSAqL1xyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogbWFyZ2luOiAwOyAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4vKiAuY29udGFpbmVyIHsgKi9cclxuXHJcblxyXG4vKiBtYXJnaW46IDAgMTB2dzsgKi9cclxuXHJcblxyXG4vKiB9ICovXHJcblxyXG5ib2R5IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBtb250c2VycmF0OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHZ3OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYxNDM4NSwgIzUxNjM5NSk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMGYwYzI5OyAqL1xyXG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAqL1xyXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjQzZSwgIzMwMmI2MywgIzBmMGMyOSk7ICovXHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogODBweDsgKi9cclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkyKTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTNweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMTAwMjMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogY3Vyc29yOiBub25lOyAqL1xyXG4gICAgLyogYm9yZGVyLWlubGluZS1zdGFydC1jb2xvcjogaXZvcnk7ICovXHJcbiAgICAvKiBib3JkZXItd2lkdGg6IDUwJTsgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8qIHRyYW5zaXRpb246IC41czsgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgLyogY29sb3I6ICMxMUFGMUMgIWltcG9ydGFudDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKiBib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOiBpdm9yeTsgKi9cclxuICAgIC8qIGJvcmRlci13aWR0aDogNTAlOyAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLyogdHJhbnNpdGlvbjogLjVzOyAqL1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgLyogd2lkdGg6IDEyMHB4OyAqL1xyXG59XHJcblxyXG4ucmVnaXN0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLW1vZGFsIHtcclxuICAgIGJvcmRlcjogMjBweCBzb2xpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNywgMjAyLCAyMDIpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbW9kYWw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDIwNywgMjAyLCAyMDIpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNTBweDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cclxufVxyXG5cclxuLnBybyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47ICovXHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogODBweDsgKi9cclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxufVxyXG5cclxuLmRyb3Bkb3duIGJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAyMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3Nyk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDIwMHB4OyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZHJvcGRvd24gZGl2IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMzVweDsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDAwMDA7ICovXHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY1Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gIzEwMDIzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXI+ZGl2IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuY2Fycm90aW1nIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5kZGl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBjb2xvcjogZ3JleTsgKi9cclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA1MCU7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBoaWRkZW47ICovXHJcbn1cclxuXHJcbi5kZGl0ZW06aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDAsIDAsIDAuNTIxKTtcclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmRkaXRlbS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMxMDAyMzM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJyb3RpbWcge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4uaW1nZGl2IHtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMHB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZzogYXV0bzsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cclxufVxyXG5cclxuLm9wZW5tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51bG9nbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udXNlcmltZyB7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgKi9cclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgyNTUsIDI1MywgMjUzLCAwLjc5NSkgIWltcG9ydGFudDsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucHJvZmlsIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tdmxvZ2luIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tdnJlZ2lzdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBidXR0b24geyAqL1xyXG5cclxuXHJcbi8qIGhlaWdodDogMjBweDsgKi9cclxuXHJcblxyXG4vKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xyXG5cclxuXHJcbi8qIH0gKi9cclxuXHJcblxyXG4vKlxyXG4ubG9naW46aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6IDtcclxufSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJyYW5kZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5icmFuZGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAub3Blbm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAvKiBsaW5lLWhlaWdodDogODBweDsgKi9cclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjY5Mik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAzMHB4IDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IHVuc2V0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDNweDsgKi9cclxuICAgICAgICAvKiBtaW4td2lkdGg6IGluaGVyaXQ7ICovXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYS5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC8qIGJvcmRlci13aWR0aDogNTAlOyAqL1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAvKiB0cmFuc2l0aW9uOiAuNXM7ICovXHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgLm5hdmxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmFjdGl2ZSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiByaWdodDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2lkZXBybyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZWdpc3RlciB7XHJcbiAgICAgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMjBweDsgKi9cclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxMDAyMzM7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgIH1cclxuICAgIC5sb2dpbmRpdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sb2dpbmV4ZGl2IHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA0MnB4OyAqL1xyXG4gICAgfVxyXG4gICAgLm12bG9naW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXZyZWdpc3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_5__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/mainlayout/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppMainlayoutHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ticket Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_28_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var competition_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.onselect(competition_r84);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy Tickets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r84.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r84.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", competition_r84.ticket_price, "/- ");
      }
    }

    function HomeComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_28_div_1_Template, 12, 3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r85 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r85 <= 2);
      }
    }

    function HomeComponent_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ticket Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_34_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var competition_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.onselect(competition_r91);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy Tickets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r91.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r91.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", competition_r91.ticket_price, "/- ");
      }
    }

    function HomeComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_34_div_1_Template, 12, 3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r92 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r92 <= 2);
      }
    }

    function HomeComponent_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ticket Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_40_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

          var competition_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.onselect(competition_r98);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy Tickets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r98.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r98.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", competition_r98.ticket_price, "/- ");
      }
    }

    function HomeComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_40_div_1_Template, 12, 3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r99 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r99 <= 2);
      }
    }

    function HomeComponent_div_46_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ticket Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var competition_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.onselect(competition_r105);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy Tickets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", competition_r105.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r105.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", competition_r105.ticket_price, "/- ");
      }
    }

    function HomeComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_46_div_1_Template, 12, 3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r106 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r106 <= 2);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(compservice, router, route) {
        _classCallCheck(this, HomeComponent);

        this.compservice = compservice;
        this.router = router;
        this.route = route;
        this.loaded = false;
        this.platinumcompetitions = [];
        this.goldcompetitions = [];
        this.silvercompetitions = [];
        this.freecompetitions = [];
        this.users = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.compservice.getplatinumCompetitions().subscribe(function (res) {
            _this9.platinumcompetitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getgoldCompetitions().subscribe(function (res) {
            _this9.goldcompetitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getsilverCompetitions().subscribe(function (res) {
            _this9.silvercompetitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getfreeCompetitions().subscribe(function (res) {
            _this9.freecompetitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.refresh.subscribe(function () {});
          this.compservice.getUsers().subscribe(function (res) {
            _this9.users = res;
          }, function (err) {
            console.log(err);
          });
          this.loaded = true;
        }
      }, {
        key: "onselect",
        value: function onselect(competition) {
          // console.log(competition._id)
          this.router.navigate(['mainlayout/ticket-selection', competition._id]);
        }
      }, {
        key: "onbrowseplat",
        value: function onbrowseplat() {
          this.router.navigate(['mainlayout/competitions/platinum']);
        }
      }, {
        key: "onbrowsegold",
        value: function onbrowsegold() {
          this.router.navigate(['mainlayout/competitions/gold']);
        }
      }, {
        key: "onbrowsepsilver",
        value: function onbrowsepsilver() {
          this.router.navigate(['mainlayout/competitions/silver']);
        }
      }, {
        key: "onbrowsefree",
        value: function onbrowsefree() {
          this.router.navigate(['mainlayout/competitions/free']);
        }
      }, {
        key: "onparticipatenow",
        value: function onparticipatenow() {
          this.router.navigate(['mainlayout/competitions']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 172,
      vars: 5,
      consts: [[1, "banner"], [1, "container"], [1, "row"], [1, "col", "col-12", "col-lg-5", "col-s-12", "text"], [1, "txtgrp"], [2, "padding-top", "20px", "text-align", "center"], [1, "button", 3, "click"], [1, "col", "col-12", "col-lg-7", "image"], ["src", "./../../../assets/img/bannergrp.png", "alt", ""], ["class", "myloader", 4, "ngIf"], [1, "currentcontests"], [1, "titles"], [1, "platcon"], [1, "conts", "row"], ["class", "col col-12 col-s-12 col-lg-4", 4, "ngFor", "ngForOf"], [2, "margin-top", "20px", "margin-bottom", "20px"], ["class", "col col-4", 4, "ngFor", "ngForOf"], [1, "latestwinners"], [1, "winner"], [1, "row", "win"], [1, "col", "col-12", "col-lg-5", 2, "margin", "0", "padding", "0", "background-image", "url( './../../../assets/img/27-dec-7.jpg')", "background-size", "cover"], ["src", "./../../../assets/img/car6.png ", "alt", "image ", "width", "100% "], [1, "col", "col-12", "col-lg-7"], [1, "col", 2, "text-align", "center", "padding-top", "20px", "padding-bottom", "20px"], [1, "col", "col-12", "col-lg-5", "imgdiv"], ["src", "./../../../assets/img/userimg.png ", "alt", "usrimg", 1, "usrimg"], [1, "det", "col", "col-12", "col-lg-7", "winnerdet"], [1, "winnername"], [1, "winnermail"], [1, "col", "row", 2, "background", "transparent", "text-align", "center", "padding-top", "0", "margin", "0 auto"], [1, "det", "col", "col-6", 2, "float", "right", "margin-right", "0"], [2, "color", "rgb(134, 14, 14)"], [2, "text-align", "center", "margin-top", "50px"], [1, "button"], [1, "testimonials"], [1, "card", "col", "col-12"], ["src", "./../../../assets/img/userimg.png ", "alt", " "], [1, "myloader"], ["src", "../../../assets/img/Spinner-0.6s-171px.svg", "alt", ""], [1, "col", "col-12", "col-s-12", "col-lg-4"], ["class", "comp", 4, "ngIf"], [1, "comp"], ["alt", "", 3, "src"], [1, "row", "ticdet"], [1, "col"], [2, "font-size", "10px", "opacity", "70%"], [2, "background", "white", "width", "100%", "margin-left", "0", "border", "none", "padding", "10px auto", 3, "click"], [1, "col", "col-4"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PLAY ANYTIME, ANY WHERE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WIN BIG WITH BERNIE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Don't miss your chance. Will you be our next lukcy winner?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() {
            return ctx.onparticipatenow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PARTICIPATE NOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Try your chance at winning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CURRENT CONTEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Participants buy tickets and lots are drawn to determine the winners.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_div_28_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_30_listener() {
            return ctx.onbrowseplat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_div_34_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_36_listener() {
            return ctx.onbrowsegold();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeComponent_div_40_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_42_listener() {
            return ctx.onbrowsepsilver();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_48_listener() {
            return ctx.onbrowsefree();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Meet the latest winners from your favourite contests.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "LATEST WINNERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h6", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Lucifer Morningstar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "hardikp.love@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Contest No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "B3785");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Draw took place on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Saturday 19 May, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Browse More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Testimonial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "OUR HAPPY CUSTOMERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "ALL AROUND THE WORLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Dave Ford");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\"Unbelievable this is dream come true, no way would i ever think i would own a car like this \"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.platinumcompetitions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.goldcompetitions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.silvercompetitions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freecompetitions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".banner[_ngcontent-%COMP%] {\r\n    \r\n    background-image: url('27-dec-7.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    height: auto;\r\n}\r\n\r\n.myloader[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: #100233ab;\r\n    z-index: 0;\r\n}\r\n\r\n.myloader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    margin-top: 40vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.text[_ngcontent-%COMP%]   .txtgrp[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.txtgrp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 4rem;\r\n    color: white;\r\n}\r\n\r\n.txtgrp[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n}\r\n\r\n.txtgrp[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    background: rgba(255, 140, 0, 1);\r\n    border: none;\r\n    color: #ffffff;\r\n    border-radius: 2em;\r\n    padding: 15px 20px 10px 20px;\r\n    cursor: pointer;\r\n    margin-top: 40px !important;\r\n    transition: .2s;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n    box-shadow: 0px 0px 10px #ff8c00;\r\n}\r\n\r\n.currentcontests[_ngcontent-%COMP%] {\r\n    background: #100233;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.platcon[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    text-align: center;\r\n    border: 2px solid #5040c1;\r\n    border-radius: 5px;\r\n    padding: 20px 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.conts[_ngcontent-%COMP%] {\r\n    padding: 0 5vw;\r\n}\r\n\r\n.comp[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    width: 300px;\r\n    height: auto;\r\n    background: #5040c1;\r\n    overflow: hidden;\r\n}\r\n\r\n.comp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 20px 20px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.ticdet[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: #ffffff;\r\n    background: #4033a1;\r\n    height: 100px;\r\n}\r\n\r\n.latestwinners[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    background: #100233;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.winner[_ngcontent-%COMP%] {\r\n    padding: 0 10vw;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]   .imgdiv[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.win[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: auto;\r\n    background: #5040c1;\r\n    border-radius: 10px;\r\n    margin-top: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.win[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 100%;\r\n    \r\n    height: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.usrimg[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    height: 70px !important;\r\n    width: 70px !important;\r\n    \r\n}\r\n\r\n.winnerdet[_ngcontent-%COMP%] {\r\n    \r\n    text-align: left;\r\n    \r\n    margin-TOP: 10px;\r\n}\r\n\r\n.winnername[_ngcontent-%COMP%] {\r\n    \r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: #ffffff;\r\n    \r\n    \r\n}\r\n\r\n.det[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n}\r\n\r\n.testimonials[_ngcontent-%COMP%] {\r\n    background-image: url('41.jpg');\r\n    background-size: cover;\r\n    align-items: center;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    width: 500px;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    \r\n    background-color: #100233;\r\n    border: none;\r\n    padding: 50px;\r\n    border-radius: 30px;\r\n    box-shadow: 0px 0px 30px #100233;\r\n    \r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 75px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .text[_ngcontent-%COMP%]   .txtgrp[_ngcontent-%COMP%] {\r\n        margin-top: 16px;\r\n        text-align: center;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 16px;\r\n        color: white;\r\n    }\r\n    .txtgrp[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 13px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .button[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        margin: 0 auto;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        background: rgba(255, 140, 0, 1);\r\n        border: none;\r\n        color: #ffffff;\r\n        border-radius: 2em;\r\n        padding: 15px 20px 10px 20px;\r\n        cursor: pointer;\r\n        margin-top: 40px !important;\r\n        transition: .2s;\r\n        z-index: 1;\r\n    }\r\n    .image[_ngcontent-%COMP%] {\r\n        margin-left: -18px;\r\n    }\r\n    .titles[_ngcontent-%COMP%] {\r\n        padding-top: 20px;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 19px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 16px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .conts[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .winner[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n    }\r\n    .win[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0;\r\n        height: auto;\r\n        background: #5040c1;\r\n        border-radius: 10px;\r\n        margin-top: 50px;\r\n        overflow: hidden;\r\n    }\r\n    .win[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        \r\n        width: 100%;\r\n        \r\n        height: 200px;\r\n        overflow: hidden;\r\n    }\r\n    .usrimg[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n        height: 70px !important;\r\n        width: 70px !important;\r\n        \r\n        margin: 0;\r\n        float: left;\r\n        margin-left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n    .winnername[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        \r\n        color: #ffffff;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        \r\n        \r\n    }\r\n    .winnermail[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n    }\r\n    .det[_ngcontent-%COMP%] {\r\n        \r\n        margin-right: 0px;\r\n        text-align: center;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        color: red;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n        font-size: 16px;\r\n    }\r\n    .det[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: #ffffff;\r\n    }\r\n    .imgdiv[_ngcontent-%COMP%] {\r\n        float: none;\r\n        text-align: center;\r\n        padding: 0 auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnR0FBZ0c7O0FBRWhHO0lBQ0ksNkJBQTZCO0lBQzdCLHFDQUEyRDtJQUMzRCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBR0EsWUFBWTs7QUFHWixnQ0FBZ0M7O0FBR2hDLE1BQU07O0FBRU47SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLHdCQUF3QjtJQUN4Qiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHVDQUF1QztRQUN2QyxnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsU0FBUztRQUNULFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsK0JBQStCO1FBQy9CLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsY0FBYztRQUNkLHVDQUF1QztRQUN2Qyx3QkFBd0I7UUFDeEIsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTsgKi9cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjoga2hha2k7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZy8yNy1kZWMtNy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXIgZGl2IHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm15bG9hZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzEwMDIzM2FiO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm15bG9hZGVyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwdmg7XHJcbn1cclxuXHJcblxyXG4vKiAudGV4dCB7ICovXHJcblxyXG5cclxuLyogYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7ICovXHJcblxyXG5cclxuLyogfSAqL1xyXG5cclxuLnRleHQgLnR4dGdycCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR4dGdycCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50eHRncnAgaDQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHh0Z3JwIGg2IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDEwcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmY4YzAwO1xyXG59XHJcblxyXG4uY3VycmVudGNvbnRlc3RzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMDAyMzM7XHJcbn1cclxuXHJcbi50aXRsZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhdGNvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA0MGMxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDAgNXZ3O1xyXG59XHJcblxyXG4uY29tcCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzUwNDBjMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb21wIGltZyB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi50aWNkZXQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM0MDMzYTE7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubGF0ZXN0d2lubmVycyB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAwMjMzO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53aW5uZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHZ3O1xyXG59XHJcblxyXG4ucm93IC5pbWdkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi53aW4ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM1MDQwYzE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi53aW4gaW1nIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IGdyZXk7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICovXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVzcmltZyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogNXB4OyAqL1xyXG59XHJcblxyXG4ud2lubmVyZGV0IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGl2b3J5OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgbWFyZ2luLVRPUDogMTBweDtcclxufVxyXG5cclxuLndpbm5lcm5hbWUge1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDYwcHg7ICovXHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIGZsb2F0OiByaWdodCAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uZGV0IGg2LFxyXG5oMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1nLzQxLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDIzMztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICMxMDAyMzM7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2NlNzgzMCAwJSwgI2I5MmU1NSA1MCUpOyAqL1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGV4dCAudHh0Z3JwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50eHRncnAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnR4dGdycCBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudHh0Z3JwIGg2IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIH1cclxuICAgIC50aXRsZXMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXRsZXMgaDYge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmNvbnRzIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLndpbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLndpbiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1MDQwYzE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAud2luIGltZyB7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogZ3JleTsgKi9cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC51c3JpbWcge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAyNXB4OyAgICovXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG4gICAgLndpbm5lcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLyogbGluZS1oZWlnaHQ6IDYwcHg7ICovXHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICAvKiBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuICAgIC53aW5uZXJtYWlsIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5kZXQge1xyXG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGV0IGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5kZXQgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5kZXQgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLmltZ2RpdiB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgYXV0bztcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_1__["CompserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/mainlayout/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppMainlayoutLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/mainlayout/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_14_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_14_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.minlength);
      }
    }

    function LoginComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_20_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_20_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.minlength);
      }
    }

    var _c0 = function _c0() {
      return ["/mainlayout/register"];
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router, compservice) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.compservice = compservice;
        this.loginForm = {
          email: '',
          password: ''
        };
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginuser",
        value: function loginuser() {
          var _this10 = this;

          // this.submitted = true;
          // // tslint:disable-next-line: triple-equals
          // if (form.form.status == 'INVALID') {
          //   return;
          // }
          // const data = {
          //   email: form.form.value.email,
          //   password: form.form.value.password
          // };
          this.auth.loginuser(this.loginForm).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);

            _this10.router.navigate(['']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 31,
      vars: 6,
      consts: [[1, "body"], [1, "login"], [1, "topdiv"], ["src", "assets/img/logo.svg", "alt", "", 1, "brandimg"], [1, "login-screen"], [1, "login-form"], [1, "control-group"], ["for", "login-name", 1, "login-field-icon", "fui-user"], ["type", "text", "placeholder", "Email", "name", "email", "value", "loginForm?.email", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "erralert", 4, "ngIf"], ["type", "password", "placeholder", "Password", "name", "password", "value", "loginForm?.email", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "login-pass", 1, "login-field-icon", "fui-lock"], ["type", "submit", 1, "btn", "btn-primary", "btn-large", "btn-block", "submit", 3, "click"], [1, "login-link"], ["href", "#", 1, "login-link"], ["routerLinkActive", "active", 1, "login-link", 3, "routerLink"], [1, "erralert"], [4, "ngIf"], ["type", "text", "value", "Email is required", 1, "form-control", "erralert"], ["type", "text", "value", "Email must be at least 4 characters long.", 1, "form-control", "erralert"], ["type", "text", "value", "Password is required", 1, "form-control", "erralert"], ["type", "text", "value", "Password must be at least 6 characters long.", 1, "form-control", "erralert"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in to continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.loginForm.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.loginForm.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            return ctx.loginuser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lost your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create New Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginForm.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.invalid && (_r145.dirty || _r145.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginForm.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.invalid && (_r147.dirty || _r147.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Pacifico&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border: none;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n    font-family: Arial;\r\n    background-color: #100233;\r\n    padding: 50px 0;\r\n}\r\n.topdiv[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n.topdiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 250px;\r\n    \r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n}\r\n@-webkit-keyframes example {\r\n    0% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n    10% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    20% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    30% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    40% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    50% {\r\n        -webkit-filter: drop-shadow(0px 0px 10px white);\r\n                filter: drop-shadow(0px 0px 10px white);\r\n    }\r\n    60% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    70% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    80% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    90% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    100% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n}\r\n@keyframes example {\r\n    0% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n    10% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    20% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    30% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    40% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    50% {\r\n        -webkit-filter: drop-shadow(0px 0px 10px white);\r\n                filter: drop-shadow(0px 0px 10px white);\r\n    }\r\n    60% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    70% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    80% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    90% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    100% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n}\r\n.topdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: white;\r\n    \r\n    font-family: 'Fredoka One', cursive;\r\n    font-size: 2.5rem;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n.login-screen[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    \r\n    margin-left: 50vw;\r\n    margin-bottom: 200px;\r\n    transform: translateX(-50%);\r\n    width: 400px;\r\n    padding-top: 50px;\r\n    padding-bottom: 20px;\r\n    \r\n    background-color: white;\r\n    \r\n    border-radius: 5px\r\n}\r\n.app-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #100233;\r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border: none;\r\n    color: #100233;\r\n    \r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n    outline: none;\r\n    \r\n    \r\n    box-shadow: 0px 6px 10px rgba(17, 175, 27, 0.39);\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    background-color: white;\r\n    \r\n    border-radius: 5px;\r\n    \r\n    font-weight: 200;\r\n    padding: 10px 10px;\r\n    width: 300px;\r\n    transition: .2s;\r\n}\r\n.erralert[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n    background-color: rgba(255, 182, 182, 0.986);\r\n    \r\n    color: rgb(219, 91, 91);\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    box-shadow: none !important;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    border: 2px solid transparent;\r\n    background: #100233;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    font-weight: bolder;\r\n    line-height: 25px;\r\n    padding: 10px 0;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    border-radius: 3px;\r\n    box-shadow: none;\r\n    transition: 0.25s;\r\n    display: block;\r\n    width: 250px;\r\n    margin: 0 auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #100233;\r\n    box-shadow: 0px 10px 10px -8px rgba(17, 175, 27, 0.39);\r\n    transition: 0.2s;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.0005);\r\n    box-shadow: 0px 20px 10px -8px rgba(17, 175, 27, 0.39);\r\n}\r\n.login-link[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #100233;\r\n    \r\n    margin-top: 1.5rem;\r\n    text-align: center;\r\n}\r\n.submit[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n    border: none;\r\n}\r\n.editbutton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #100233;\r\n    box-shadow: 0px 10px 10px -8px rgba(17, 175, 27, 0.39);\r\n    transition: 0.2s;\r\n}\r\n.editbutton[_ngcontent-%COMP%]:hover {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.0005);\r\n    box-shadow: 0px 20px 10px -8px rgba(17, 175, 27, 0.39);\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background-color: rgba(209, 248, 211, 0.664);\r\n    border-bottom: 3px solid #11AF1C;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n}\r\n.control-group[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n}\r\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    \r\n    font-family: 'Fredoka One', cursive;\r\n    float: left;\r\n    opacity: 50%;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .login-screen[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        \r\n        margin-left: 50vw;\r\n        margin-bottom: 50px;\r\n        transform: translateX(-50%);\r\n        width: 90%;\r\n        padding-top: 50px;\r\n        padding-bottom: 50px;\r\n        \r\n        background-color: white;\r\n        \r\n        border-radius: 5px\r\n    }\r\n    .topdiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        \r\n        width: 120px;\r\n        \r\n        -webkit-animation-name: example;\r\n                animation-name: example;\r\n        -webkit-animation-duration: 2s;\r\n                animation-duration: 2s;\r\n        -webkit-animation-iteration-count: infinite;\r\n                animation-iteration-count: infinite;\r\n    }\r\n    .topdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: white;\r\n        \r\n        font-family: 'Fredoka One', cursive;\r\n        font-size: 19px;\r\n        margin-top: 1rem;\r\n        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdHQUFnRztBQUNoRztJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0MsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSwrQ0FBdUM7Z0JBQXZDLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFsQ0E7SUFDSTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksK0NBQXVDO2dCQUF2Qyx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnREFBZ0Q7SUFDaEQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBR0EscUJBQXFCO0FBR3JCLHlCQUF5QjtBQUd6QixNQUFNO0FBRU47SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsaUNBQWlDO0lBQ2pDLGdEQUFnRDtBQUNwRDtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsc0RBQXNEO0FBQzFEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzREFBc0Q7SUFDdEQsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHNEQUFzRDtBQUMxRDtBQUVBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsZ0RBQWdEO1FBQ2hELHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkI7SUFDSjtJQUNBO1FBQ0ksb0NBQW9DO1FBQ3BDLFlBQVk7UUFDWiw2Q0FBNkM7UUFDN0MsK0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsOEJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsMkNBQW1DO2dCQUFuQyxtQ0FBbUM7SUFDdkM7SUFDQTtRQUNJLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuKjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMjMzO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4udG9wZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50b3BkaXYgaW1nIHtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTsgKi9cclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIC8qIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IHdoaXRlKTsgKi9cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAwcHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDRweCB3aGl0ZSk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA2cHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggOHB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggOHB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDZweCB3aGl0ZSk7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA0cHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAwcHggd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9wZGl2IGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZScsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAvKiBmb250LXdlaWdodDogOyAqL1xyXG59XHJcblxyXG4ubG9naW4tc2NyZWVuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNTB2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzI5KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiAuY29udHJvbC1ncm91cCB7ICovXHJcblxyXG5cclxuLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuXHJcblxyXG4vKiB9ICovXHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTsgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyNTUsIDIzMik7ICovXHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgOHB4ICMxMUFGMUM7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgxNywgMTc1LCAyNywgMC4zOSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5lcnJhbGVydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxODIsIDAuOTg2KTtcclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgICBjb2xvcjogcmdiKDIxOSwgOTEsIDkxKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAwMjMzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMjMzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtOHB4IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggMTBweCAtOHB4IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzkpO1xyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmVkaXRidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDIzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLThweCByZ2JhKDE3LCAxNzUsIDI3LCAwLjM5KTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5lZGl0YnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAwNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMjBweCAxMHB4IC04cHggcmdiYSgxNywgMTc1LCAyNywgMC4zOSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyNDgsIDIxMSwgMC42NjQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMUFGMUM7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWdyb3VwIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbnRyb2wtZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBjb2xvcjogIzExQUYxQzsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5sb2dpbi1zY3JlZW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTc1LCAyNywgMC4zMjkpOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICB9XHJcbiAgICAudG9wZGl2IGltZyB7XHJcbiAgICAgICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHdoaXRlOyAqL1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAvKiBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCB3aGl0ZSk7ICovXHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC50b3BkaXYgaDIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAvKiBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTsgKi9cclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAvKiBmb250LXdlaWdodDogOyAqL1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/main-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/mainlayout/main-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppMainlayoutMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var _userdeshboard_myactivity_myactivity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./userdeshboard/myactivity/myactivity.component */
    "./src/app/mainlayout/userdeshboard/myactivity/myactivity.component.ts");
    /* harmony import */


    var _userdeshboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./userdeshboard/transactions/transactions.component */
    "./src/app/mainlayout/userdeshboard/transactions/transactions.component.ts");
    /* harmony import */


    var _userdeshboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./userdeshboard/profile/profile.component */
    "./src/app/mainlayout/userdeshboard/profile/profile.component.ts");
    /* harmony import */


    var _userdeshboard_userdeshboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userdeshboard/userdeshboard.component */
    "./src/app/mainlayout/userdeshboard/userdeshboard.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/mainlayout/home/home.component.ts");
    /* harmony import */


    var _mainlayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mainlayout.component */
    "./src/app/mainlayout/mainlayout.component.ts");
    /* harmony import */


    var _competitions_free_free_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../competitions/free/free.component */
    "./src/app/competitions/free/free.component.ts");
    /* harmony import */


    var _competitions_platinum_platinum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../competitions/platinum/platinum.component */
    "./src/app/competitions/platinum/platinum.component.ts");
    /* harmony import */


    var _competitions_silver_silver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../competitions/silver/silver.component */
    "./src/app/competitions/silver/silver.component.ts");
    /* harmony import */


    var _users_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../users/list/list.component */
    "./src/app/users/list/list.component.ts");
    /* harmony import */


    var _competitions_gold_gold_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../competitions/gold/gold.component */
    "./src/app/competitions/gold/gold.component.ts");
    /* harmony import */


    var _competitions_competitions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../competitions/competitions.component */
    "./src/app/competitions/competitions.component.ts");
    /* harmony import */


    var _ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ticket-selection/ticket-selection.component */
    "./src/app/mainlayout/ticket-selection/ticket-selection.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/mainlayout/contact/contact.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/mainlayout/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/mainlayout/login/login.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/mainlayout/about/about.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/mainlayout/team/team.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./client/client.component */
    "./src/app/mainlayout/client/client.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/mainlayout/slider/slider.component.ts");
    /* harmony import */


    var _account_terms_account_terms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./account-terms/account-terms.component */
    "./src/app/mainlayout/account-terms/account-terms.component.ts");
    /* harmony import */


    var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./disclaimer/disclaimer.component */
    "./src/app/mainlayout/disclaimer/disclaimer.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts"); // import { TransactionsComponent } from './../adminlayout/admindash/transactions/transactions.component';
    // import { UserlistComponent } from './admindash/userlist/userlist.component';
    // import { AdmindashComponent } from './admindash/admindash.component';
    // import { WinnerslistComponent } from './admindash/winnerslist/winnerslist.component';


    var mainroutes = [{
      path: 'mainlayout',
      component: _mainlayout_component__WEBPACK_IMPORTED_MODULE_5__["MainlayoutComponent"],
      children: [{
        path: 'competitions',
        component: _competitions_competitions_component__WEBPACK_IMPORTED_MODULE_11__["CompetitionsComponent"],
        children: [{
          path: 'gold',
          component: _competitions_gold_gold_component__WEBPACK_IMPORTED_MODULE_10__["GoldComponent"]
        }, {
          path: 'silver',
          component: _competitions_silver_silver_component__WEBPACK_IMPORTED_MODULE_8__["SilverComponent"]
        }, {
          path: 'platinum',
          component: _competitions_platinum_platinum_component__WEBPACK_IMPORTED_MODULE_7__["PlatinumComponent"]
        }, {
          path: 'free',
          component: _competitions_free_free_component__WEBPACK_IMPORTED_MODULE_6__["FreeComponent"]
        }]
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"]
      }, {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_19__["TeamComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
      }, {
        path: 'client',
        component: _client_client_component__WEBPACK_IMPORTED_MODULE_20__["ClientComponent"]
      }, {
        path: 'slider',
        component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_21__["SliderComponent"]
      }, {
        path: 'account-terms',
        component: _account_terms_account_terms_component__WEBPACK_IMPORTED_MODULE_22__["AccountTermsComponent"]
      }, {
        path: 'disclaimer',
        component: _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_23__["DisclaimerComponent"]
      }, {
        path: 'list',
        component: _users_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]
      }, {
        path: 'ticket-selection/:id',
        component: _ticket_selection_ticket_selection_component__WEBPACK_IMPORTED_MODULE_12__["TicketSelectionComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
      }, {
        path: 'userdashboard',
        component: _userdeshboard_userdeshboard_component__WEBPACK_IMPORTED_MODULE_3__["UserdeshboardComponent"],
        children: [{
          path: 'profile',
          component: _userdeshboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
        }, {
          path: 'transactions',
          component: _userdeshboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_1__["TransactionsComponent"]
        }, {
          path: 'myactivity',
          component: _userdeshboard_myactivity_myactivity_component__WEBPACK_IMPORTED_MODULE_0__["MyactivityComponent"]
        }]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }]
    }];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: MainRoutingModule
    });
    MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      factory: function MainRoutingModule_Factory(t) {
        return new (t || MainRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(mainroutes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MainRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(mainroutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/mainlayout.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/mainlayout/mainlayout.component.ts ***!
    \****************************************************/

  /*! exports provided: MainlayoutComponent */

  /***/
  function srcAppMainlayoutMainlayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainlayoutComponent", function () {
      return MainlayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/mainlayout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/mainlayout/footer/footer.component.ts");

    var MainlayoutComponent =
    /*#__PURE__*/
    function () {
      function MainlayoutComponent() {
        _classCallCheck(this, MainlayoutComponent);
      }

      _createClass(MainlayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainlayoutComponent;
    }();

    MainlayoutComponent.ɵfac = function MainlayoutComponent_Factory(t) {
      return new (t || MainlayoutComponent)();
    };

    MainlayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainlayoutComponent,
      selectors: [["app-mainlayout"]],
      decls: 3,
      vars: 0,
      template: function MainlayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvbWFpbmxheW91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainlayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mainlayout',
          templateUrl: './mainlayout.component.html',
          styleUrls: ['./mainlayout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/mainlayout/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppMainlayoutRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/mainlayout/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_12_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_12_div_1_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_12_div_2_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_12_div_3_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r131.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r131.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r131.errors.maxlength);
      }
    }

    function RegisterComponent_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_17_div_1_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_17_div_2_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r133.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r133.errors.minlength);
      }
    }

    function RegisterComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_22_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_22_div_1_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_22_div_2_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r135.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r135.errors.minlength);
      }
    }

    var _c0 = function _c0() {
      return ["/mainlayout/login"];
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, auth) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.auth = auth;
        this.registeruserdata = {
          id: '',
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: ''
        };
        this.submitted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registeruser",
        value: function registeruser() {
          var _this11 = this;

          this.auth.registeruser(this.registeruserdata).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);

            _this11.router.navigate(['mainlayout/home']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 37,
      vars: 8,
      consts: [[1, "body"], [1, "login"], [1, "topdiv"], ["src", "assets/img/logo.svg", "alt", "", 1, "brandimg"], [1, "login-screen"], [1, ""], ["type", "text", "placeholder", "Fullname", "name", "fullname", "value", "loginForm?.fullname", "required", "", "minlength", "4", "maxlength", "30", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fullname", "ngModel"], ["class", "erralert", 4, "ngIf"], ["for", "login-name", 1, "login-field-icon", "fui-user"], [1, "control-group"], ["type", "text", "placeholder", "Email", "name", "email", "value", "loginForm?.email", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "value", "loginForm?.password", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "login-pass", 1, "login-field-icon", "fui-lock"], ["type", "password", "placeholder", "Reenter Password", "name", "confpassword", "required", "", "minlength", "4", 1, "form-control"], ["confpassword", ""], ["type", "submit", 1, "btn", "btn-primary", "btn-large", "btn-block", "submit", 3, "click"], [1, "login-link"], ["routerLinkActive", "active", 1, "login-link", 3, "routerLink"], [1, "erralert"], [4, "ngIf"], ["type", "text", "value", "Fullname is required", 1, "form-control", "erralert"], ["type", "text", "value", "Fullname must be at least 6 characters long.", 1, "form-control", "erralert"], ["type", "text", "value", "Fullname must be maximum 20 characters long.", 1, "form-control", "erralert"], ["type", "text", "value", "Email is required", 1, "form-control", "erralert"], ["type", "text", "value", "Email must be at least 4 characters long.", 1, "form-control", "erralert"], ["type", "text", "value", "Password is required", 1, "form-control", "erralert"], ["type", "text", "value", "Password must be at least 6 characters long.", 1, "form-control", "erralert"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create An Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.registeruserdata.fullname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.registeruserdata.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 3, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.registeruserdata.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 3, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_28_listener() {
            return ctx.registeruser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Already Have An Account ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeruserdata.fullname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r131.invalid && (_r131.dirty || _r131.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeruserdata.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r133.invalid && (_r133.dirty || _r133.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeruserdata.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r135.invalid && (_r135.dirty || _r135.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Pacifico&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border: none;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n    font-family: Arial;\r\n    background-color: #100233;\r\n    padding: 50px 0;\r\n}\r\n.topdiv[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n.topdiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 250px;\r\n    \r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n}\r\n@-webkit-keyframes example {\r\n    0% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n    10% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    20% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    30% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    40% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    50% {\r\n        -webkit-filter: drop-shadow(0px 0px 10px white);\r\n                filter: drop-shadow(0px 0px 10px white);\r\n    }\r\n    60% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    70% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    80% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    90% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    100% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n}\r\n@keyframes example {\r\n    0% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n    10% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    20% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    30% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    40% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    50% {\r\n        -webkit-filter: drop-shadow(0px 0px 10px white);\r\n                filter: drop-shadow(0px 0px 10px white);\r\n    }\r\n    60% {\r\n        -webkit-filter: drop-shadow(0px 0px 8px white);\r\n                filter: drop-shadow(0px 0px 8px white);\r\n    }\r\n    70% {\r\n        -webkit-filter: drop-shadow(0px 0px 6px white);\r\n                filter: drop-shadow(0px 0px 6px white);\r\n    }\r\n    80% {\r\n        -webkit-filter: drop-shadow(0px 0px 4px white);\r\n                filter: drop-shadow(0px 0px 4px white);\r\n    }\r\n    90% {\r\n        -webkit-filter: drop-shadow(0px 0px 2px white);\r\n                filter: drop-shadow(0px 0px 2px white);\r\n    }\r\n    100% {\r\n        -webkit-filter: drop-shadow(0px 0px 0px white);\r\n                filter: drop-shadow(0px 0px 0px white);\r\n    }\r\n}\r\n.topdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: white;\r\n    \r\n    font-family: 'Fredoka One', cursive;\r\n    font-size: 2.5rem;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n.login-screen[_ngcontent-%COMP%] {\r\n    \r\n    margin-left: 50vw;\r\n    margin-bottom: 200px;\r\n    transform: translateX(-50%);\r\n    width: 55vw;\r\n    padding-top: 80px;\r\n    padding-bottom: 20px;\r\n    \r\n    background-color: white;\r\n    \r\n    border-radius: 5px\r\n}\r\n.app-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #100233;\r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border: none;\r\n    color: #100233;\r\n    font-weight: bold;\r\n    outline: none;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n    \r\n    box-shadow: 0px 6px 10px rgba(17, 175, 27, 0.39);\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    background-color: white;\r\n    \r\n    border-radius: 5px;\r\n    \r\n    font-weight: 200;\r\n    padding: 10px 10px;\r\n    width: 600px;\r\n    transition: .2s;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    border: 2px solid transparent;\r\n    background: #100233;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    font-weight: bolder;\r\n    line-height: 25px;\r\n    padding: 10px 0;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    border-radius: 3px;\r\n    box-shadow: none;\r\n    transition: 0.25s;\r\n    display: block;\r\n    width: 250px;\r\n    margin: 0 auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #100233;\r\n    box-shadow: 0px 10px 10px -8px rgba(17, 175, 27, 0.39);\r\n    transition: 0.2s;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.0005);\r\n    box-shadow: 0px 20px 10px -8px rgba(17, 175, 27, 0.39);\r\n}\r\n.login-link[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #100233;\r\n    \r\n    margin-top: 12px;\r\n    text-align: center;\r\n}\r\n.submit[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border: none;\r\n}\r\n.editbutton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #100233;\r\n    box-shadow: 0px 10px 10px -8px #100233;\r\n    transition: 0.2s;\r\n}\r\n.editbutton[_ngcontent-%COMP%]:hover {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.0005);\r\n    box-shadow: 0px 20px 10px -8px #100233;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background-color: rgba(209, 248, 211, 0.664);\r\n    border-bottom: 3px solid #100233;\r\n}\r\n.erralert[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    \r\n    background-color: rgba(255, 182, 182, 0.986);\r\n    \r\n    color: rgb(219, 91, 91);\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    width: 600px;\r\n    box-shadow: none !important;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n}\r\n.control-group[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .login-screen[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        \r\n        margin-left: 50vw;\r\n        margin-bottom: 50px;\r\n        transform: translateX(-50%);\r\n        width: 90%;\r\n        padding-top: 50px;\r\n        padding-bottom: 50px;\r\n        \r\n        background-color: white;\r\n        \r\n        border-radius: 5px\r\n    }\r\n    .topdiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        \r\n        width: 120px;\r\n        \r\n        -webkit-animation-name: example;\r\n                animation-name: example;\r\n        -webkit-animation-duration: 2s;\r\n                animation-duration: 2s;\r\n        -webkit-animation-iteration-count: infinite;\r\n                animation-iteration-count: infinite;\r\n    }\r\n    .topdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: white;\r\n        \r\n        font-family: 'Fredoka One', cursive;\r\n        font-size: 19px;\r\n        margin-top: 1rem;\r\n        \r\n    }\r\n    .form-control[_ngcontent-%COMP%] {\r\n        margin: 0 auto;\r\n        \r\n        text-align: left;\r\n        background-color: white;\r\n        \r\n        border-radius: 5px;\r\n        \r\n        font-weight: 200;\r\n        padding: 10px 10px;\r\n        width: 85%;\r\n        transition: .2s;\r\n    }\r\n    .erralert[_ngcontent-%COMP%] {\r\n        margin: 0 auto;\r\n        \r\n        background-color: rgba(255, 182, 182, 0.986);\r\n        \r\n        color: rgb(219, 91, 91);\r\n        margin-top: 5px;\r\n        border-radius: 5px;\r\n        font-size: 13px;\r\n        font-weight: normal;\r\n        width: 85%;\r\n        box-shadow: none !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdHQUFnRztBQUNoRztJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0MsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSwrQ0FBdUM7Z0JBQXZDLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFsQ0E7SUFDSTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksK0NBQXVDO2dCQUF2Qyx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksOENBQXNDO2dCQUF0QyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztJQUMxQztBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdEQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQSxxQkFBcUI7QUFHckIseUJBQXlCO0FBR3pCLE1BQU07QUFFTjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLGlDQUFpQztJQUNqQyxnREFBZ0Q7QUFDcEQ7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsc0RBQXNEO0FBQzFEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztJQUNqQyw0Q0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixnREFBZ0Q7UUFDaEQsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQjtJQUNKO0lBQ0E7UUFDSSxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLDZDQUE2QztRQUM3QywrQkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qiw4QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0QiwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztJQUN2QztJQUNBO1FBQ0ksWUFBWTtRQUNaLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixtQ0FBbUM7UUFDbkMsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUNBQWlDO1FBQ2pDLDRDQUE0QztRQUM1QyxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuKjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMjMzO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4udG9wZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50b3BkaXYgaW1nIHtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTsgKi9cclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIC8qIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IHdoaXRlKTsgKi9cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAwcHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDRweCB3aGl0ZSk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA2cHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggOHB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggOHB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDZweCB3aGl0ZSk7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA0cHggd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IHdoaXRlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAwcHggd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9wZGl2IGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZScsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAvKiBmb250LXdlaWdodDogOyAqL1xyXG59XHJcblxyXG4ubG9naW4tc2NyZWVuIHtcclxuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNTB2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTc1LCAyNywgMC4zMjkpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxMDAyMzM7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC5jb250cm9sLWdyb3VwIHsgKi9cclxuXHJcblxyXG4vKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xyXG5cclxuXHJcbi8qIH0gKi9cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMxMDAyMzM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyNTUsIDIzMik7ICovXHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgOHB4ICMxMUFGMUM7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgxNywgMTc1LCAyNywgMC4zOSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAwMjMzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMjMzO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtOHB4IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggMTBweCAtOHB4IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzkpO1xyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTAwMjMzO1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmVkaXRidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDIzMztcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLThweCAjMTAwMjMzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmVkaXRidXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDA1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDEwcHggLThweCAjMTAwMjMzO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjQ4LCAyMTEsIDAuNjY0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTAwMjMzO1xyXG59XHJcblxyXG4uZXJyYWxlcnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxODIsIDAuOTg2KTtcclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgICBjb2xvcjogcmdiKDIxOSwgOTEsIDkxKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWdyb3VwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmxvZ2luLXNjcmVlbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNzUsIDI3LCAwLjMyOSk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIH1cclxuICAgIC50b3BkaXYgaW1nIHtcclxuICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7ICovXHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIC8qIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IHdoaXRlKTsgKi9cclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnRvcGRpdiBoMiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8qIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlOyAqL1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC8qIGZvbnQtd2VpZ2h0OiA7ICovXHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMDsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAvKiBmb250LXNpemU6IDE2cHg7ICovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB9XHJcbiAgICAuZXJyYWxlcnQge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxODIsIDAuOTg2KTtcclxuICAgICAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjE5LCA5MSwgOTEpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/slider/slider.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mainlayout/slider/slider.component.ts ***!
    \*******************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppMainlayoutSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SliderComponent =
    /*#__PURE__*/
    function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 19,
      vars: 0,
      consts: [[1, "sloder-img", "section-padding"], [1, "container"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "slider-center", "slider"], ["src", "assets/img/slide/img1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img4.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img6.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/slide/img7.jpg", "alt", "", 1, "img-fluid"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".slick-slide[_ngcontent-%COMP%] {\r\n    display: none;\r\n    float: left;\r\n    height: 100%;\r\n    min-height: 1px;\r\n}\r\n\r\n[dir='rtl'][_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.slick-slide.slick-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.slick-slide.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\r\n\r\n.slick-dotted.slick-slider[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.slick-loading[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.slick-vertical[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: auto;\r\n    border: 1px solid transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG59XHJcblxyXG5bZGlyPSdydGwnXSAuc2xpY2stc2xpZGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGUgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/team/team.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/mainlayout/team/team.component.ts ***!
    \***************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppMainlayoutTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 67,
      vars: 0,
      consts: [["id", "team", 1, "section-padding", "text-center", 2, "background", "#100233"], [1, "container"], [1, "titles", "top"], [2, "margin", "0", "margin-top", "-5px", "margin-bottom", "5PX", "background-color", "white", "height", "3px", "width", "50%", "text-align", "center", "margin-left", "50%", "transform", "translateX(-50%)", "margin-top", "15px"], [1, "row", 2, "text-align", "center", "align-items", "center", "margin-bottom", "100px"], [1, "col", "col-12", "col-lg-6", 2, "position", "relative", "padding", "0"], ["src", "../../../assets/img/Path.png", "alt", "", 1, "sqeimg", 2, "width", "500px", "height", "500px"], [1, "titles", "harshal", "teamdet", 2, "position", "absolute", "top", "20px", "left", "150px"], [2, "margin-top", "40px", "margin-bottom", "40px"], ["src", "./../../../assets/img/fb.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/twi.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/gplus.png", "alt", "", 1, "sm"], ["src", "./../../../assets/img/yt.png", "alt", "", 1, "sm"], [1, "col", "col-12", "col-lg-6", "harshalimgdiv"], [1, "harshalimg"], ["src", "assets/img/team/DSC_0499..jpg", "alt", "", 1, "img-fluid"], [1, "row", 2, "text-align", "center", "align-items", "center", "padding-bottom", "100px"], [1, "col", "col-12", "col-lg-6", "hardikimgdiv"], [1, "hardikimg"], ["src", "assets/img/team/panchal12.jpeg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/Path.png", "alt", "", 1, "sqeimg", 2, "width", "500px", "height", "500px", "transform", "scaleX(-1)"], [1, "titles", "hardik", "teamdet"], [1, "titles", "bottomquote", 2, "padding-bottom", "100px", "margin-bottom", "0"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OUR TEAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Who we are ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Harshal Bhatt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Founder & CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\"Darkness cannot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " drive out darkness,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " only light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " can do that.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hardik Panchal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Co-Founder & Cheif Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u201CBe yourself,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " everyone else is");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " already taken.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\" We work as a team, because Peace is our Dream.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Teamwork means not having to take all the blame.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Talent wins games, Teamwork wins Championships !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Teamwork divided the task and multiplies the success.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Alone we can do so little, together we can do so much. \"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".titles[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n    align-items: center;\r\n    margin-bottom: 80px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: #ffffff;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sm[_ngcontent-%COMP%] {\r\n    color: aliceblue;\r\n    \r\n    width: 32px;\r\n    margin: 10px;\r\n}\r\n\r\n.harshal[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 150px;\r\n}\r\n\r\n.hardik[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 150px;\r\n}\r\n\r\n.harshalimg[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n}\r\n\r\n.hardikimg[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    \r\n    .titles[_ngcontent-%COMP%] {\r\n        padding-top: 140px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        color: white;\r\n        text-align: center;\r\n        align-items: center;\r\n        margin-bottom: 80px;\r\n    }\r\n    .teamdet[_ngcontent-%COMP%] {\r\n        width: 120%;\r\n        height: 500px;\r\n        background-image: url('Path.png');\r\n        \r\n        background-size: cover;\r\n        \r\n        background-position: 0px 0px !important;\r\n        z-index: 5;\r\n        \r\n        \r\n        \r\n    }\r\n    .sm[_ngcontent-%COMP%] {\r\n        color: aliceblue;\r\n        \r\n        width: 32px;\r\n        margin: 10px;\r\n    }\r\n    .sqeimg[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .harshal[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        \r\n        margin-top: 270px;\r\n        margin-left: -170px;\r\n    }\r\n    .hardik[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: -180px;\r\n        margin-right: -220px;\r\n        margin-left: 170px;\r\n    }\r\n    .harshalimgdiv[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .harshalimg[_ngcontent-%COMP%] {\r\n        width: 300px !important;\r\n        margin: 0 auto;\r\n        box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n    }\r\n    .harshalimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .hardikimgdiv[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        margin-top: 300px;\r\n    }\r\n    .hardikimg[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        margin: 0 auto;\r\n        box-shadow: 0px 0px 20px rgba(255, 140, 0, 1);\r\n    }\r\n    .hardikimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .bottomquote[_ngcontent-%COMP%] {\r\n        margin-top: 200px;\r\n    }\r\n    .top[_ngcontent-%COMP%] {\r\n        \r\n        padding-top: 30px;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        color: #ffffff;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztBQUNsQjs7QUFHQTs7Ozs7Ozs7dURBUXVEOztBQUd2RCw2QkFBNkI7O0FBRzdCLCtDQUErQzs7QUFFL0M7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNIO1FBQ0ksa0JBQWtCO1FBQ2xCLHVDQUF1QztRQUN2QyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUNBQXVEO1FBQ3ZELGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxVQUFVO1FBQ1YsbURBQW1EO1FBQ25ELDZCQUE2QjtRQUM3QiwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsNkNBQTZDO0lBQ2pEO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osY0FBYztRQUNkLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbi8qIC50ZWFtZGV0IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZy9QYXRoLnBuZycpO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlLCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTsgKi9cclxuXHJcblxyXG4vKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTsgKi9cclxuXHJcblxyXG4vKiBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWcvUGF0aFxcIDEucG5nJyk7ICovXHJcblxyXG4uc20ge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uaGFyc2hhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLmhhcmRpayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5oYXJzaGFsaW1nIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxufVxyXG5cclxuLmhhcmRpa2ltZyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC8qIC50aXRsZXMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXRsZXMgaDYge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfSAqL1xyXG4gICAgLnRpdGxlcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE0MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIH1cclxuICAgIC50ZWFtZGV0IHtcclxuICAgICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1nL1BhdGgucG5nJyk7XHJcbiAgICAgICAgLyogbWFyZ2luOiA1MHB4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyNTUsIDE0MCwgMCwgMSk7ICovXHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7ICovXHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1nL1BhdGhcXCAxLnBuZycpOyAqL1xyXG4gICAgfVxyXG4gICAgLnNtIHtcclxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3FlaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhhcnNoYWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvKiB3aWR0aDogNjAwcHg7ICovXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNzBweDtcclxuICAgIH1cclxuICAgIC5oYXJkaWsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xODBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTcwcHg7XHJcbiAgICB9XHJcbiAgICAuaGFyc2hhbGltZ2RpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhhcnNoYWxpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIH1cclxuICAgIC5oYXJzaGFsaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmhhcmRpa2ltZ2RpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmhhcmRpa2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIH1cclxuICAgIC5oYXJkaWtpbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuYm90dG9tcXVvdGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcCB7XHJcbiAgICAgICAgLyogdG9wOiAtMzAwcHg7ICovXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/ticket-selection/ticket-selection.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/mainlayout/ticket-selection/ticket-selection.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TicketSelectionComponent */

  /***/
  function srcAppMainlayoutTicketSelectionTicketSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketSelectionComponent", function () {
      return TicketSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TicketSelectionComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ticket_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ticket_r121.id, "");
      }
    }

    function TicketSelectionComponent_div_31_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketSelectionComponent_div_31_ng_template_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129);

          var ticket_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r127.onselect(ticket_r121);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ticket_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ticket_r121.id === ctx_r125.selectedticket.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ticket_r121.id);
      }
    }

    function TicketSelectionComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketSelectionComponent_div_31_div_1_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketSelectionComponent_div_31_ng_template_2_Template, 2, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ticket_r121 = ctx.$implicit;

        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ticket_r121.name)("ngIfElse", _r124);
      }
    }

    var TicketSelectionComponent =
    /*#__PURE__*/
    function () {
      function TicketSelectionComponent(router, route, compservice, http) {
        _classCallCheck(this, TicketSelectionComponent);

        this.router = router;
        this.route = route;
        this.compservice = compservice;
        this.http = http; // compId: string;

        this.competitions = {}; // tslint:disable-next-line: no-inferrable-types

        this.toggle = false; // tickets = [
        //     { ic: 1, name: ''},
        //     { ic: 2, name: 'hardik'},
        //     { ic: 3, name: ''},
        //     { ic: 4, name: ''},
        //     { ic: 5, name: 'panchal'},
        //   ];
        // availabale = [
        //       'availabale',
        //       'Booked'
        //     ];

        this.selectedticket = {
          id: '',
          name: ''
        };
        this.loggeduser = {};
        this.competitionId = {
          id: ''
        };
      } // toggle(): void {
      //   if (this.availabale === 'availabale') {
      //     this.availabale = 'Booked';
      //   } else {
      //     this.availabale = 'availabale';
      //   }
      // }
      // toggle(): void {
      //   const newLocal = 'success';
      //   // if($(this).hasClass("booked")){
      //   //   alert("Please choose other seat this is already booked");
      //   // }
      //   if ($(this).hasClass(newLocal)) {
      //    $(this).removeClass('success');
      //   //  $scope.selectedClass=$scope.selectedClass-1;
      //   } else {
      //     $(this).addClass('success');
      //   }
      // }


      _createClass(TicketSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          // tslint:disable-next-line: max-line-length
          var id = this.route.snapshot.paramMap.get('id');
          this.compId = id; // console.log(this.compId);

          this.http.get("api/onecompetition/".concat(this.compId)).subscribe(function (res) {
            _this12.competitions = res;
          }, function (err) {
            console.log(err);
          });
          console.log(this.competitions);
          var token = localStorage.getItem('token'); // console.log(token);

          this.getDecodedToken(token); // console.log(this.loggeduser.email);
        }
      }, {
        key: "onselect",
        value: function onselect(ticket) {
          this.selectedticket.id = ticket.id;
          this.selectedticket.name = this.loggeduser.email;
          this.toggle = !this.toggle;
          console.log(this.selectedticket); // console.log(this.tickets[i].value);
        }
      }, {
        key: "onclicksubmit",
        value: function onclicksubmit(selectedticket) {
          var _this13 = this;

          // const id = this.route.snapshot.paramMap.get('id');
          // const compId = id;
          this.userId = this.loggeduser._id;
          this.http.patch("api/ticketsupdate/".concat(this.compId), selectedticket).subscribe(function (res) {
            console.log(res);

            _this13.http.get("api/onecompetition/".concat(_this13.compId)).subscribe( // tslint:disable-next-line: no-shadowed-variable
            function (res) {
              _this13.competitions = res;
            }, function (err) {
              console.log(err);
            });
          }, function (err) {
            console.log(err);
          });
          this.competitionId.id = this.compId;
          this.http.patch("api/usercompupdate/".concat(this.userId), this.competitionId).subscribe(function (res) {
            console.log('comps updated successfully...');
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }]);

      return TicketSelectionComponent;
    }();

    TicketSelectionComponent.ɵfac = function TicketSelectionComponent_Factory(t) {
      return new (t || TicketSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    TicketSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketSelectionComponent,
      selectors: [["app-ticket-selection"]],
      decls: 35,
      vars: 5,
      consts: [[2, "background", "#100233", "margin", "0", "padding", "0"], ["src", "../../../assets/img/gradimg.png", "alt", "", 2, "margin", "0", "padding", "0", "outline", "none", "border", "none"], [1, "container"], [1, "maintsdiv"], [1, "row", "itemshowcard"], [1, "col", "col-12", "col-lg-6", "itemimgdiv", 2, "border-radius", "10px", "padding", "auto"], ["alt", "", 1, "itemimg", 3, "src"], [1, "col", "itemdet"], [2, "color", "#DC1069"], [2, "color", "rgba(255, 140, 0, 1)"], [1, "entrydet"], [1, "ticprice"], [2, "font-size", "14px"], [1, "row"], [1, "col"], [2, "margin-top", "30px", "color", "white", "font-weight", "bolder"], [2, "margin-top", "30px", "color", "white", "font-weight", "bolder", "opacity", "70%"], [1, "titles"], [1, "ticsection", 2, "background", "#100233"], [4, "ngFor", "ngForOf"], [3, "click"], ["class", "booked", 4, "ngIf", "ngIfElse"], ["elsediv", ""], [1, "booked"], ["id", "ticket", 1, "ticket", 3, "click"]],
      template: function TicketSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter now for chance to win");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This competition has maximum of 100 entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Per Tickets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "TICKET SELECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select the ticket with your favourite number ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TicketSelectionComponent_div_31_Template, 4, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketSelectionComponent_Template_button_click_33_listener() {
            return ctx.onclicksubmit(ctx.selectedticket);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx.competitions.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.competitions.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx.competitions.ticket_price, "/- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.competitions.detail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.competitions.tickets);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.ticsection[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-grid;\r\n    \r\n    \r\n    margin: 10px 15px;\r\n    width: 100px;\r\n    height: 50px;\r\n    text-align: center;\r\n    \r\n    padding: 5px;\r\n}\r\n\r\n.maintsdiv[_ngcontent-%COMP%] {\r\n    margin: 0 10vw;\r\n    background: #12033e;\r\n    padding: 50px;\r\n    border-radius: 10px;\r\n    transform: translateY(-300px);\r\n    box-shadow: 0 0 30px #12033e;\r\n}\r\n\r\n.itemshowcard[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    padding: auto;\r\n    justify-content: center;\r\n}\r\n\r\n.itemimg[_ngcontent-%COMP%] {\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.entrydet[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    color: #DC1069;\r\n}\r\n\r\n.ticprice[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\n\r\n.ticket[_ngcontent-%COMP%] {\r\n    \r\n    margin: 10px 15px;\r\n    cursor: pointer;\r\n    color: #FFD700;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    background: transparent;\r\n    background: url('ticket.png'), transparent;\r\n    \r\n    background-size: 100px 50px, cover;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    color: #029E40;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    \r\n    background-image: url('currentt.png');\r\n    \r\n    background-size: 100px 50px, cover;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.booked[_ngcontent-%COMP%] {\r\n    \r\n    color: #BC0505;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    background-image: url('bookedt.png');\r\n    \r\n    background-size: 100px 50px, cover;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    \r\n    margin-bottom: 0px !important;\r\n    width: 100px;\r\n    position: relative;\r\n    margin: 100px auto;\r\n    \r\n    background-color: #EB7035;\r\n    border: 1px solid #EB7035;\r\n    border-radius: 3px;\r\n    color: #ffffff;\r\n    \r\n    font-size: 19px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    width: 150px;\r\n    -webkit-text-size-adjust: none;\r\n    ime-mode: all;\r\n    align-self: center;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    background: rgba(255, 140, 0, 1);\r\n    border: none;\r\n    color: #ffffff;\r\n    border-radius: 2em;\r\n    padding: 15px 20px 10px 20px;\r\n    cursor: pointer;\r\n    margin-top: 40px !important;\r\n    transition: .2s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n    box-shadow: 0px 0px 10px rgba(255, 140, 0, 1);\r\n}\r\n\r\n.ticsection[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    \r\n    text-align: center;\r\n    padding-bottom: 100px;\r\n    \r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n    background: #100233;\r\n    \r\n    margin-top: -200px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n    align-items: center;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .maintsdiv[_ngcontent-%COMP%] {\r\n        margin: 0 10px;\r\n        background: #12033e;\r\n        padding: 30px;\r\n        border-radius: 10px;\r\n        transform: translateY(-300px);\r\n        box-shadow: 0 0 30px #12033e;\r\n    }\r\n    .itemshowcard[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        padding: auto;\r\n        justify-content: center;\r\n    }\r\n    .itemimgdiv[_ngcontent-%COMP%] {\r\n        margin-top: -100px;\r\n        width: 70vw;\r\n    }\r\n    .itemdet[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .entrydet[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n        color: #DC1069;\r\n    }\r\n    .ticprice[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n        color: white;\r\n        font-weight: bolder;\r\n        border: 2px solid #fff;\r\n        padding: 5px;\r\n    }\r\n    .titles[_ngcontent-%COMP%] {\r\n        padding-top: 20px;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 24px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-family: 'Josefin Sans', sans-serif;\r\n        font-size: 19px;\r\n        color: white;\r\n    }\r\n    .titles[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 16px;\r\n        font-family: 'Josefin Sans', sans-serif;\r\n    }\r\n    .ticsection[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        display: inline-grid;\r\n        \r\n        \r\n        \r\n        margin: 5px;\r\n        width: 100px;\r\n        height: 50px;\r\n        text-align: center;\r\n        \r\n        padding: 5px;\r\n    }\r\n    .ticket[_ngcontent-%COMP%] {\r\n        \r\n        margin: 10px 10px;\r\n        cursor: pointer;\r\n        color: #FFD700;\r\n        font-weight: bold;\r\n        font-size: 1.5rem;\r\n        background: transparent;\r\n        background: url('ticket.png'), transparent;\r\n        \r\n        background-size: 100px 50px, cover;\r\n    }\r\n    \r\n    \r\n    .selected[_ngcontent-%COMP%] {\r\n        color: #029E40;\r\n        font-weight: bold;\r\n        font-size: 1.5rem;\r\n        \r\n        background-image: url('currentt.png');\r\n        \r\n        background-size: 100px 50px, cover;\r\n    }\r\n    a[_ngcontent-%COMP%] {\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n    .booked[_ngcontent-%COMP%] {\r\n        \r\n        color: #BC0505;\r\n        font-weight: bold;\r\n        font-size: 1.5rem;\r\n        background-image: url('bookedt.png');\r\n        \r\n        background-size: 100px 50px, cover;\r\n    }\r\n    .ticsection[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n        \r\n        text-align: center;\r\n        margin-left: -10px;\r\n        padding-bottom: 20px;\r\n        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC90aWNrZXQtc2VsZWN0aW9uL3RpY2tldC1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7O0FBRWpCO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQ0FBOEQ7SUFDOUQsdUJBQXVCO0lBQ3ZCLGtDQUFrQztBQUN0Qzs7QUFHQSx3Q0FBd0M7O0FBR3hDLDZCQUE2Qjs7QUFFN0I7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUNBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQ0FBd0Q7SUFDeEQsdUJBQXVCO0lBQ3ZCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZix1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQiw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QiwwQ0FBOEQ7UUFDOUQsdUJBQXVCO1FBQ3ZCLGtDQUFrQztJQUN0QztJQUNBLHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0I7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIscUNBQXlEO1FBQ3pELDRCQUE0QjtRQUM1QixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0NBQXdEO1FBQ3hELHVCQUF1QjtRQUN2QixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixrQ0FBa0M7SUFDdEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvdGlja2V0LXNlbGVjdGlvbi90aWNrZXQtc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWFpbnBhZ2Uge30gKi9cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGljc2VjdGlvbiBzZWN0aW9uIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAzMHB4OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZzogYXV0bzsgKi9cclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1haW50c2RpdiB7XHJcbiAgICBtYXJnaW46IDAgMTB2dztcclxuICAgIGJhY2tncm91bmQ6ICMxMjAzM2U7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggIzEyMDMzZTtcclxufVxyXG5cclxuLml0ZW1zaG93Y2FyZCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbWltZyB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmVudHJ5ZGV0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI0RDMTA2OTtcclxufVxyXG5cclxuLnRpY3ByaWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGlja2V0IHtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RpY2tldC5wbmcpLCB0cmFuc3BhcmVudDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCA1MHB4LCBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi8qIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZS1hbGwtbGluZXM7ICovXHJcblxyXG5cclxuLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6ICMwMjlFNDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogb3JhbmdlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jdXJyZW50dC5wbmcpO1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggNTBweCwgY292ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm9va2VkIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICAgIGNvbG9yOiAjQkMwNTA1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYm9va2VkdC5wbmcpO1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiA7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDUwcHgsIGNvdmVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI3MDM1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VCNzAzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICBpbWUtbW9kZTogYWxsO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxufVxyXG5cclxuLnRpY3NlY3Rpb24gc2VjdGlvbiB7XHJcbiAgICAvKiBtYXJnaW46IDA7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlOyAqL1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMDAyMzM7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMTAwcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYWludHNkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxMjAzM2U7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4ICMxMjAzM2U7XHJcbiAgICB9XHJcbiAgICAuaXRlbXNob3djYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pdGVtaW1nZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICB9XHJcbiAgICAuaXRlbWRldCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmVudHJ5ZGV0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjREMxMDY5O1xyXG4gICAgfVxyXG4gICAgLnRpY3ByaWNlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGVzIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXRsZXMgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyBoNiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAudGljc2VjdGlvbiBzZWN0aW9uIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7ICovXHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDMwcHg7ICovXHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBwYWRkaW5nOiBhdXRvOyAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIC50aWNrZXQge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkQ3MDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltZy90aWNrZXQucG5nKSwgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1zaXplOiA7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCA1MHB4LCBjb3ZlcjtcclxuICAgIH1cclxuICAgIC8qIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZS1hbGwtbGluZXM7ICovXHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgY29sb3I6ICMwMjlFNDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogb3JhbmdlOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY3VycmVudHQucG5nKTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggNTBweCwgY292ZXI7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmJvb2tlZCB7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gICAgICAgIGNvbG9yOiAjQkMwNTA1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYm9va2VkdC5wbmcpO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtc2l6ZTogOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggNTBweCwgY292ZXI7XHJcbiAgICB9XHJcbiAgICAudGljc2VjdGlvbiBzZWN0aW9uIHtcclxuICAgICAgICAvKiBtYXJnaW46IDA7ICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlOyAqL1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ticket-selection',
          templateUrl: './ticket-selection.component.html',
          styleUrls: ['./ticket-selection.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/userdeshboard/myactivity/myactivity.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/mainlayout/userdeshboard/myactivity/myactivity.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MyactivityComponent */

  /***/
  function srcAppMainlayoutUserdeshboardMyactivityMyactivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyactivityComponent", function () {
      return MyactivityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyactivityComponent_tr_42_h6_6_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r9.title);
      }
    }

    function MyactivityComponent_tr_42_h6_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyactivityComponent_tr_42_h6_6_h6_1_Template, 2, 1, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r9 = ctx.$implicit;

        var comp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comp_r3 === competition_r9._id);
      }
    }

    function MyactivityComponent_tr_42_h6_8_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r13.type);
      }
    }

    function MyactivityComponent_tr_42_h6_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyactivityComponent_tr_42_h6_8_h6_1_Template, 2, 1, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r13 = ctx.$implicit;

        var comp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comp_r3 === competition_r13._id);
      }
    }

    function MyactivityComponent_tr_42_h6_10_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r17.enddate);
      }
    }

    function MyactivityComponent_tr_42_h6_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyactivityComponent_tr_42_h6_10_h6_1_Template, 2, 1, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r17 = ctx.$implicit;

        var comp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comp_r3 === competition_r17._id);
      }
    }

    function MyactivityComponent_tr_42_h6_12_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r21.ticket_price);
      }
    }

    function MyactivityComponent_tr_42_h6_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyactivityComponent_tr_42_h6_12_h6_1_Template, 2, 1, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r21 = ctx.$implicit;

        var comp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comp_r3 === competition_r21._id);
      }
    }

    function MyactivityComponent_tr_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyactivityComponent_tr_42_h6_6_Template, 2, 1, "h6", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyactivityComponent_tr_42_h6_8_Template, 2, 1, "h6", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyactivityComponent_tr_42_h6_10_Template, 2, 1, "h6", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyactivityComponent_tr_42_h6_12_Template, 2, 1, "h6", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.competitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.competitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.competitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.competitions);
      }
    }

    var MyactivityComponent =
    /*#__PURE__*/
    function () {
      function MyactivityComponent(router, route, compservice, http) {
        _classCallCheck(this, MyactivityComponent);

        this.router = router;
        this.route = route;
        this.compservice = compservice;
        this.http = http;
        this.loggeduser = {};
        this.users = {
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: '',
          comps: []
        };
        this.competitions = [];
      }

      _createClass(MyactivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var token = localStorage.getItem('token');
          console.log(token);
          this.getDecodedToken(token);
          this.userId = this.loggeduser._id;
          console.log(this.userId); // this.users = this.loggeduser;

          this.http.get("api/oneuser/".concat(this.userId)).subscribe(function (res) {
            _this14.users = res;
          }, function (err) {
            console.log(err);
          });
          var id = this.users.email;
          console.log(id);
          this.compservice.getCompetitions().subscribe(function (res) {
            _this14.competitions = res;
          }, function (err) {
            console.log(err);
          }); // console.log(this.users.gender);
          // console.log(this.userselect);
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }]);

      return MyactivityComponent;
    }();

    MyactivityComponent.ɵfac = function MyactivityComponent_Factory(t) {
      return new (t || MyactivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    MyactivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyactivityComponent,
      selectors: [["app-myactivity"]],
      decls: 43,
      vars: 5,
      consts: [[2, "margin", "15px 20px 30px 30px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "row"], [1, "col", "col-6", "col-lg-3"], [1, "tile1"], [1, "tile1", "last"], [1, "table", "table-trapped", "col-12", 2, "margin-top", "50px", "margin-left", "5px", "overflow-x", "scroll"], [2, "background-color", "white"], [2, "color", "rgba(255, 140, 0, 1)"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function MyactivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Won Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Won Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Competition Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "EndDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ticket Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MyactivityComponent_tr_42_Template, 13, 5, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.comps.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.comps.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.comps.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.comps.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users.comps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.tile1[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 150px;\r\n    margin-left: 30px;\r\n    background-color: rgba(255, 140, 0, 1);\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.tile1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.tile1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .tile1[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n        height: 100px;\r\n        margin-left: 0px;\r\n        margin: 0 auto;\r\n        background-color: rgba(255, 140, 0, 1);\r\n        border-radius: 5px;\r\n        padding: 10px;\r\n        padding-top: 20px;\r\n    }\r\n    .last[_ngcontent-%COMP%] {\r\n        margin-top: 30px;\r\n    }\r\n    .tile1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        color: white;\r\n        font-size: 16px;\r\n    }\r\n    .tile1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        color: white;\r\n        font-size: 19px;\r\n        font-weight: bold;\r\n    }\r\n    .col[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .row[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC91c2VyZGVzaGJvYXJkL215YWN0aXZpdHkvbXlhY3Rpdml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxzQ0FBc0M7UUFDdEMsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbmxheW91dC91c2VyZGVzaGJvYXJkL215YWN0aXZpdHkvbXlhY3Rpdml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aWxlMSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50aWxlMSBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aWxlMSBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRpbGUxIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDAsIDAsIDEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGlsZTEgaDMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnRpbGUxIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jb2wge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5yb3cge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyactivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myactivity',
          templateUrl: './myactivity.component.html',
          styleUrls: ['./myactivity.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/userdeshboard/profile/profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/mainlayout/userdeshboard/profile/profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppMainlayoutUserdeshboardProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProfileComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_form_0_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          return _r40.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_form_0_Template_input_change_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.selectimage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_form_0_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.updateuser(ctx_r52.edit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.userselect.fullname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-Mail :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.userselect.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phone :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.userselect.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Date-Of-Birth :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.userselect.birthdate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "City :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.userselect.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pincode :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.userselect.pin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "State :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_65_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.userselect.state = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Pincode :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_0_Template_input_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.userselect.pin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx_r38.userselect.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.birthdate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.pin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.userselect.pin);
      }
    }

    function ProfileComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.editmode(ctx_r69.edit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "First Name :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 31, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.users.fullname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Name :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "E-Mail :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 33, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.users.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 34, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.users.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Date-Of-Birth :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 35, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.users.birthdate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "City :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 36, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.users.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pincode :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 37, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.users.pin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "State :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 38, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.users.state = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pincode :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 37, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_1_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.users.pin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx_r39.users.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.birthdate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.pin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.users.pin);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(router, route, compservice, http) {
        _classCallCheck(this, ProfileComponent);

        this.router = router;
        this.route = route;
        this.compservice = compservice;
        this.http = http;
        this.selectedfile = null;
        this.edit = false;
        this.users = {
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: '',
          comps: []
        }; // selecteduser: FormGroup;

        this.userselect = {
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: '',
          comps: []
        };
        this.loggeduser = {};
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var token = localStorage.getItem('token');
          console.log(token);
          this.getDecodedToken(token);
          this.userId = this.loggeduser._id;
          console.log(this.userId); // this.users = this.loggeduser;

          this.compservice.refresh.subscribe(function () {
            _this15.getuser();
          });
          this.getuser(); // this.http.get(`http://localhost:3000/api/oneuser/${this.userId}`)
          // .subscribe(
          //   (res) => {this.users = res; }, (err) => {console.log(err); } );

          var id = this.users.email;
          console.log(id); // console.log(this.users.gender);

          console.log(this.userselect);
        }
      }, {
        key: "editmode",
        value: function editmode(edit) {
          this.edit = !edit;
          console.log(this.users);
          this.userselect = this.users;
          console.log(this.userselect);
        }
      }, {
        key: "updateuser",
        value: function updateuser(edit) {
          this.edit = !edit;
          var fd = new FormData();

          if (this.selectedfile) {
            fd.append('image', this.selectedfile, this.selectedfile.name); // fd.append('title', this.insertcompdata.title);

            fd.append('fullname', this.userselect.fullname), fd.append('email', this.userselect.email), fd.append('password', this.userselect.password), fd.append('gender', this.userselect.gender), fd.append('birthdate', this.userselect.birthdate), fd.append('city', this.userselect.city), fd.append('state', this.userselect.state), fd.append('pin', this.userselect.pin), fd.append('address', this.userselect.address), fd.append('phone', this.userselect.phone);
          } else {
            fd.append('fullname', this.userselect.fullname), fd.append('email', this.userselect.email), fd.append('password', this.userselect.password), fd.append('gender', this.userselect.gender), fd.append('birthdate', this.userselect.birthdate), fd.append('city', this.userselect.city), fd.append('state', this.userselect.state), fd.append('pin', this.userselect.pin), fd.append('address', this.userselect.address), fd.append('phone', this.userselect.phone);
          } // fd.append('image'
          // this.userselect.


          console.log(this.userselect);
          this.compservice.profileupdate(this.userId, fd).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
          this.users = this.userselect;
          var id = this.users.email;
          console.log(id); // this.http.patch(`http://localhost:3000/api/userupdate/${this.userId}`, fd)
          // .subscribe(
          //   (res) => {console.log(res); }, (err) => {console.log(err); } );
          // this.users = this.userselect;
          // const id = this.users.email;
          // console.log(id);
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }, {
        key: "selectimage",
        value: function selectimage(event) {
          this.selectedfile = event.target.files[0]; // this.insertcompdata.get('image').setValue(selectedfile);
        }
      }, {
        key: "getuser",
        value: function getuser() {
          var _this16 = this;

          this.compservice.getOneUser(this.userId).subscribe(function (res) {
            _this16.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 2,
      vars: 2,
      consts: [["enctype", "multipart/form-data", 4, "ngIf"], ["class", "maindiv", 4, "ngIf"], ["enctype", "multipart/form-data"], [2, "margin", "15px 20px 30px 30px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "container"], [1, "row"], [1, "col"], [1, "profileimage", 3, "src"], [1, "editimg", 3, "click"], ["src", "./../../../../assets/img/edit.png"], ["type", "file", "name", "image", "hidden", "", 1, "form-control", 3, "change"], ["profileimg", ""], [1, "editbutton", 3, "click"], ["src", "./../../../../assets/img/update.png", 1, "editicon"], ["type", "text", "name", "fullname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fullname", "ngModel"], ["type", "text", 1, "form-control"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "name", "birthdate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["birthdate", "ngModel"], ["type", "text", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["type", "text", "name", "pin", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pin", "ngModel"], ["type", "text", "name", "state", 1, "form-control", 3, "ngModel", "ngModelChange"], ["state", "ngModel"], [1, "maindiv"], ["src", "./../../../../assets/img/editimg.png", "alt", "", 1, "editicon"], ["type", "text", "name", "fullname", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center"], ["type", "text", "name", "email", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phone", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "birthdate", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "pin", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "state", "disabled", "", 1, "form-control", 2, "background-color", "white", "border-bottom", "2px solid #11AF1C", "text-align", "center", 3, "ngModel", "ngModelChange"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_form_0_Template, 73, 9, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 70, 9, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n    \r\n    margin: 10px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    margin: 15px 20px 30px 30px;\r\n    border-bottom: 3px solid white;\r\n    width: 300px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.profileimage[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 20px;\r\n    margin-left: 50px;\r\n    border-radius: 50%;\r\n    background-image: url('userimg.png');\r\n    background-size: cover;\r\n    box-shadow: 0px 10px 10px rgba(255, 140, 0, 0.521);\r\n}\r\n\r\n.formcontain[_ngcontent-%COMP%] {\r\n    display: grid;\r\n}\r\n\r\n.editbutton[_ngcontent-%COMP%] {\r\n    padding: 6px 12px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: rgba(255, 140, 0, 1);\r\n    margin-top: 5vh;\r\n    float: right;\r\n    margin-right: 100px;\r\n    box-shadow: 0px 10px 10px -8px rgba(255, 140, 0, 0.521);\r\n    transition: 0.2s;\r\n}\r\n\r\n.editbutton[_ngcontent-%COMP%]:hover {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.0005);\r\n    box-shadow: 0px 20px 10px -8px rgba(255, 140, 0, 0.521);\r\n}\r\n\r\n.editbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    transition: 0.2s;\r\n    \r\n}\r\n\r\n.editicon[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.editbutton[_ngcontent-%COMP%]:hover   .editbutton[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n    transform-style: preserve-3d;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.editbutton[_ngcontent-%COMP%]:hover   .editicon[_ngcontent-%COMP%] {\r\n    transform-style: preserve-3d;\r\n    \r\n}\r\n\r\n.arrowicon[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n}\r\n\r\n.editimg[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    background-color: rgba(255, 140, 0, 1);\r\n    box-shadow: 0 0 8px rgba(255, 140, 0, 0.521);\r\n    text-align: center;\r\n    border-radius: 50px;\r\n    padding: 5px;\r\n    border: none;\r\n    margin-left: -50px;\r\n    margin-top: 80px;\r\n    margin-bottom: 0;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.editimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border: none;\r\n    color: rgba(255, 140, 0, 1);\r\n    font-weight: bold;\r\n    outline: none;\r\n    \r\n    \r\n    box-shadow: 0px 6px 10px rgba(255, 140, 0, 0.521);\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    background-color: rgb(231, 255, 232);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    *[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .maindiv[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        margin-left: -10px;\r\n        padding-left: 5vw;\r\n        padding-right: 5vw;\r\n    }\r\n    .row[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .formcontrol[_ngcontent-%COMP%] {\r\n        width: 90vw;\r\n        margin: 0 auto;\r\n    }\r\n    .form-control[_ngcontent-%COMP%] {\r\n        width: 90vw;\r\n        \r\n    }\r\n    .editbutton[_ngcontent-%COMP%] {\r\n        margin-right: 50px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC91c2VyZGVzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBMkQ7SUFDM0Qsc0JBQXNCO0lBQ3RCLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdURBQXVEO0lBQ3ZELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxpQ0FBaUM7SUFDakMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L3VzZXJkZXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgbWFyZ2luOiAxNXB4IDIwcHggMzBweCAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91c2VyaW1nLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDI1NSwgMTQwLCAwLCAwLjUyMSk7XHJcbn1cclxuXHJcbi5mb3JtY29udGFpbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uZWRpdGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDAsIDAsIDEpO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLThweCByZ2JhKDI1NSwgMTQwLCAwLCAwLjUyMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uZWRpdGJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDIwcHggMTBweCAtOHB4IHJnYmEoMjU1LCAxNDAsIDAsIDAuNTIxKTtcclxufVxyXG5cclxuLmVkaXRidXR0b24gc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIC8qIHRyYW5zZm9ybTogbm9uZTsgKi9cclxufVxyXG5cclxuLmVkaXRpY29uIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5lZGl0YnV0dG9uOmhvdmVyIC5lZGl0YnV0dG9uPnNwYW4ge1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmVkaXRidXR0b246aG92ZXIgLmVkaXRpY29uIHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICovXHJcbn1cclxuXHJcbi5hcnJvd2ljb24ge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uZWRpdGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMjU1LCAxNDAsIDAsIDAuNTIxKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4uZWRpdGltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDAsIDAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjU1LCAyMzIpOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDhweCAjMTFBRjFDOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMjU1LCAxNDAsIDAsIDAuNTIxKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyNTUsIDIzMik7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm1haW5kaXYge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAucm93IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmZvcm1jb250cm9sIHtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG4gICAgfVxyXG4gICAgLmVkaXRidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/userdeshboard/transactions/transactions.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/mainlayout/userdeshboard/transactions/transactions.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppMainlayoutUserdeshboardTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TransactionsComponent_tr_16_h6_10_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r30.title);
      }
    }

    function TransactionsComponent_tr_16_h6_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionsComponent_tr_16_h6_10_h6_1_Template, 2, 1, "h6", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r30 = ctx.$implicit;

        var transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r26.compId === competition_r30._id);
      }
    }

    function TransactionsComponent_tr_16_h6_12_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](competition_r34.type);
      }
    }

    function TransactionsComponent_tr_16_h6_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionsComponent_tr_16_h6_12_h6_1_Template, 2, 1, "h6", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var competition_r34 = ctx.$implicit;

        var transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", competition_r34._id === transaction_r26.compId);
      }
    }

    function TransactionsComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionsComponent_tr_16_h6_10_Template, 2, 1, "h6", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TransactionsComponent_tr_16_h6_12_Template, 2, 1, "h6", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r26 = ctx.$implicit;
        var i_r27 = ctx.index;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r27 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r26.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.competitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.competitions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r26.date);
      }
    }

    var TransactionsComponent =
    /*#__PURE__*/
    function () {
      function TransactionsComponent(http, compservice) {
        _classCallCheck(this, TransactionsComponent);

        this.http = http;
        this.compservice = compservice;
        this.loggeduser = {};
        this.transactions = [];
        this.competitions = [];
        this.users = [];
      }

      _createClass(TransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          console.log('this is transactions........');
          var token = localStorage.getItem('token'); // console.log(token);

          this.getDecodedToken(token);
          this.userId = this.loggeduser._id;
          console.log(this.userId);
          this.http.get("api/transactions/".concat(this.userId)).subscribe(function (res) {
            _this17.transactions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getCompetitions().subscribe(function (res) {
            _this17.competitions = res;
          }, function (err) {
            console.log(err);
          });
          this.compservice.getUsers().subscribe(function (res) {
            _this17.users = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }]);

      return TransactionsComponent;
    }();

    TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) {
      return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]));
    };

    TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransactionsComponent,
      selectors: [["app-transactions"]],
      decls: 17,
      vars: 1,
      consts: [[2, "margin", "15px 20px 30px 30px", "border-bottom", "3px solid white", "width", "300px", "padding-bottom", "10px"], [1, "table", "table-trapped"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function TransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " My Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Paid Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Competition Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Competition Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Payment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransactionsComponent_tr_16_Template, 17, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC91c2VyZGVzaGJvYXJkL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9tYWlubGF5b3V0L3VzZXJkZXNoYm9hcmQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transactions',
          templateUrl: './transactions.component.html',
          styleUrls: ['./transactions.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainlayout/userdeshboard/userdeshboard.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/mainlayout/userdeshboard/userdeshboard.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserdeshboardComponent */

  /***/
  function srcAppMainlayoutUserdeshboardUserdeshboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdeshboardComponent", function () {
      return UserdeshboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _compservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../compservice.service */
    "./src/app/compservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "selected": a0,
        "noselected": a1
      };
    };

    var UserdeshboardComponent =
    /*#__PURE__*/
    function () {
      function UserdeshboardComponent(router, route, compservice, http) {
        _classCallCheck(this, UserdeshboardComponent);

        this.router = router;
        this.route = route;
        this.compservice = compservice;
        this.http = http;
        this.edit = false;
        this.selected = '';
        this.loggeduser = {};
        this.users = {
          fullname: '',
          email: '',
          password: '',
          gender: '',
          birthdate: '',
          city: '',
          state: '',
          pin: '',
          address: '',
          phone: '',
          image: '',
          comps: []
        };
      }

      _createClass(UserdeshboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.select('myactivity');
          var token = localStorage.getItem('token');
          console.log(token);
          this.getDecodedToken(token);
          this.userId = this.loggeduser._id;
          console.log(this.userId); // this.users = this.loggeduser;

          this.http.get("api/oneuser/".concat(this.userId)).subscribe(function (res) {
            _this18.users = res;
          }, function (err) {
            console.log(err);
          });
          var id = this.users.email;
          console.log(id);
        }
      }, {
        key: "editmode",
        value: function editmode(edit) {
          this.edit = !edit;
        }
      }, {
        key: "select",
        value: function select(item) {
          this.selected = item;
          this.router.navigate([item], {
            relativeTo: this.route
          }); // $('#nav').addClass('active');
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken(token) {
          try {
            this.loggeduser = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).subject;
          } catch (Error) {
            return null;
          }
        }
      }, {
        key: "selectactivity",
        value: function selectactivity() {
          this.selected = 'myactivity';
          this.router.navigate(['mainlayout/userdashboard/myactivity']); // $('#nav').addClass('active');
        }
      }, {
        key: "selectprofile",
        value: function selectprofile() {
          this.selected = 'profile';
          this.router.navigate(['mainlayout/userdashboard/profile']); // $('#nav').addClass('active');
        }
      }, {
        key: "selecttransaction",
        value: function selecttransaction() {
          this.selected = 'transactions';
          this.router.navigate(['mainlayout/userdashboard/transactions']); // $('#nav').addClass('active');
        }
      }]);

      return UserdeshboardComponent;
    }();

    UserdeshboardComponent.ɵfac = function UserdeshboardComponent_Factory(t) {
      return new (t || UserdeshboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    UserdeshboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserdeshboardComponent,
      selectors: [["app-userdeshboard"]],
      decls: 43,
      vars: 19,
      consts: [[1, "abovecontai"], [1, "container"], [1, "row"], [1, "sidenav", "col-2", "pccontai"], [2, "color", "rgba(255, 140, 0, 1)", "margin-bottom", "50px", "border-bottom", "3px solid rgba(255, 140, 0, 1)", "text-align", "center"], [1, "nav"], [1, "c-sidebar-nav-item", 3, "click"], [1, "c-sidebar-nav-link"], [1, "c-sidebar-nav-item", 3, "ngClass", "click"], [1, "sidenav", "col", "col-12", "mobilecontai"], [1, "usrdet"], ["alt", "", 1, "userimg", 3, "src"], [1, "username"], [1, "email"], [1, "nav", "raw"], [1, "c-sidebar-nav-item", "col-4", 3, "click"], ["src", "assets/img/activity.svg", "alt", ""], ["src", "assets/img/user.svg", "alt", ""], [1, "c-sidebar-nav-item", "col-4", 3, "ngClass", "click"], ["src", "assets/img/trans.svg", "alt", ""], [1, "main", "col-10", 2, "padding-top", "20px"]],
      template: function UserdeshboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_7_listener() {
            return ctx.select("myactivity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_10_listener() {
            return ctx.select("profile");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_13_listener() {
            return ctx.select("transactions");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_24_listener() {
            return ctx.selectactivity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_27_listener() {
            return ctx.selectprofile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdeshboardComponent_Template_li_click_30_listener() {
            return ctx.selecttransaction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", "myactivity" === ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", "profile" === ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, "transactions" === ctx.selected, "transactions" !== ctx.selected));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx.users.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.fullname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", "myactivity" === ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", "profile" === ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, "transactions" === ctx.selected, "transactions" !== ctx.selected));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    \r\n}\r\n\r\n.pccontai[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.abovecontai[_ngcontent-%COMP%] {\r\n    background-color: #100233;\r\n    width: 100vw;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    background-color: #100233;\r\n    \r\n}\r\n\r\n.row12[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border-bottom: hidden;\r\n    font-family: montserrat;\r\n    width: 75%;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #137ED9;\r\n    color: white;\r\n    text-align: left;\r\n    padding: 15px;\r\n    width: 80%;\r\n    font-family: montserrat;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    margin-left: 10%;\r\n    margin-top: 20px;\r\n    width: 99px;\r\n}\r\n\r\n.card12[_ngcontent-%COMP%] {\r\n    border: hidden;\r\n}\r\n\r\n.card-status[_ngcontent-%COMP%] {\r\n    background-color: #137ED9;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n\r\n.col01[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    padding: 15px;\r\n}\r\n\r\n.col02[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n}\r\n\r\n.col03[_ngcontent-%COMP%] {\r\n    background-color: #f44336;\r\n}\r\n\r\n.col04[_ngcontent-%COMP%] {\r\n    background-color: #555;\r\n}\r\n\r\n.col01[_ngcontent-%COMP%], .col02[_ngcontent-%COMP%], .col03[_ngcontent-%COMP%], .col04[_ngcontent-%COMP%] {\r\n    margin-left: 1cm;\r\n    width: 20%;\r\n    margin-bottom: 20px;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-top: 4cm;\r\n    position: absolute;\r\n    \r\n    left: -80px;\r\n    \r\n    transition: 0.3s;\r\n    \r\n    padding: 15px;\r\n    \r\n    width: 100px;\r\n    \r\n    text-decoration: none;\r\n    \r\n    font-size: 20px;\r\n    \r\n    color: white;\r\n    \r\n    border-radius: 0 5px 5px 0;\r\n    \r\n}\r\n\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    left: 0;\r\n    \r\n}\r\n\r\n\r\n\r\n#about[_ngcontent-%COMP%] {\r\n    top: 20px;\r\n    background-color: #4CAF50;\r\n}\r\n\r\n#blog[_ngcontent-%COMP%] {\r\n    top: 85px;\r\n    background-color: #2196F3;\r\n    \r\n}\r\n\r\n#projects[_ngcontent-%COMP%] {\r\n    top: 150px;\r\n    background-color: #f44336;\r\n    \r\n}\r\n\r\n#contact[_ngcontent-%COMP%] {\r\n    top: 215px;\r\n    background-color: #555\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    background-color: transparent;\r\n    \r\n    \r\n    \r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    padding: 6px 8px 6px 16px;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    width: 200px;\r\n    \r\n    \r\n    \r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    \r\n    display: block;\r\n    \r\n    color: rgba(255, 140, 0, 1);\r\n    font-weight: bold;\r\n    \r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    \r\n    width: auto;\r\n    border-left: 1px solid rgba(128, 128, 128, 0.432);\r\n    height: auto;\r\n    \r\n    \r\n    \r\n    \r\n    padding: 0px 10px;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: bolder;\r\n    border-right: 3px solid rgba(255, 140, 0, 1);\r\n    \r\n    \r\n    \r\n    \r\n    color: black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    \r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n.mobilecontai[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    *[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .mobilecontai[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .pccontai[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .userimg[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n        height: 150px;\r\n        border-radius: 50%;\r\n    }\r\n    .usrdet[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        text-align: center;\r\n    }\r\n    .username[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        font-size: 19px;\r\n        color: rgba(255, 140, 0, 1);\r\n    }\r\n    .email[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        margin-top: 10px;\r\n        color: #ffffff;\r\n    }\r\n    .nav[_ngcontent-%COMP%] {\r\n        margin-top: 50px;\r\n    }\r\n    .c-sidebar-nav-link[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding: 0;\r\n        margin-left: -15px;\r\n    }\r\n    .c-sidebar-nav-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 32px;\r\n    }\r\n    .selected[_ngcontent-%COMP%] {\r\n        \r\n        font-weight: bolder;\r\n        fill: rgba(255, 140, 0, 1);\r\n        border-right: none;\r\n        border-bottom: 3px solid rgba(255, 140, 0, 1);\r\n        \r\n        \r\n        \r\n        \r\n        color: black;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmxheW91dC91c2VyZGVzaGJvYXJkL3VzZXJkZXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7O0FBRWxCO0lBQ0ksdUNBQXVDO0lBQ3ZDOzRCQUN3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUdBLGdCQUFnQjs7QUFHaEIsZ0JBQWdCOztBQUVoQjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztJQUlJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBR0EsdUNBQXVDOztBQUV2QztJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLE9BQU87SUFDUCwyREFBMkQ7QUFDL0Q7O0FBR0EsOERBQThEOztBQUU5RDtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQixDQUFDLGdCQUFnQjtBQUMxQzs7QUFHQSxzSEFBc0g7O0FBR3RILHNIQUFzSDs7QUFHdEgsc0hBQXNIOztBQUd0SCxzSEFBc0g7O0FBR3RILHNIQUFzSDs7QUFHdEgsc0hBQXNIOztBQUd0SCxzSEFBc0g7O0FBR3RILHNIQUFzSDs7QUFFdEg7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix1REFBdUQ7SUFDdkQsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztBQUdBLDhCQUE4Qjs7QUFFOUI7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseURBQXlEO0lBQ3pELDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQywyQkFBMkI7QUFDL0I7O0FBR0EsaUVBQWlFOztBQUdqRSwwQkFBMEI7O0FBRzFCLGlCQUFpQjs7QUFHakIsNkJBQTZCOztBQUc3QixNQUFNOztBQUdOLHVCQUF1Qjs7QUFFdkI7SUFDSSxnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLGlEQUFpRDtJQUNqRCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDOztBQUdBLGdJQUFnSTs7QUFFaEk7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsU0FBUztRQUNULFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQiw2Q0FBNkM7UUFDN0Msb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNuQyxvQ0FBb0M7UUFDcEMsbUNBQW1DO1FBQ25DLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW5sYXlvdXQvdXNlcmRlc2hib2FyZC91c2VyZGVzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRhYmxlIGNzcyBzdGFydCovXHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4ucGNjb250YWkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hYm92ZWNvbnRhaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMjMzO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDAyMzM7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xyXG59XHJcblxyXG4ucm93MTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIGJvcmRlci1ib3R0b206IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzdFRDk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA5OXB4O1xyXG59XHJcblxyXG4uY2FyZDEyIHtcclxuICAgIGJvcmRlcjogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0dXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzN0VEOTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLyp0YWJsZSBjc3MgZW5kKi9cclxuXHJcblxyXG4vKmJveCBjc3Mgc3RhcnQqL1xyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmNvbDAxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY29sMDIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuLmNvbDAzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5jb2wwNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uY29sMDEsXHJcbi5jb2wwMixcclxuLmNvbDAzLFxyXG4uY29sMDQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFjbTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgc2lkZW5hdiAqL1xyXG5cclxuI215U2lkZW5hdiBhIHtcclxuICAgIG1hcmdpbi10b3A6IDRjbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIFBvc2l0aW9uIHRoZW0gcmVsYXRpdmUgdG8gdGhlIGJyb3dzZXIgd2luZG93ICovXHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIC8qIFBvc2l0aW9uIHRoZW0gb3V0c2lkZSBvZiB0aGUgc2NyZWVuICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLyogQWRkIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvKiAxNXB4IHBhZGRpbmcgKi9cclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIC8qIFNldCBhIHNwZWNpZmljIHdpZHRoICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBSZW1vdmUgdW5kZXJsaW5lICovXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIFdoaXRlIHRleHQgY29sb3IgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgLyogUm91bmRlZCBjb3JuZXJzIG9uIHRoZSB0b3AgcmlnaHQgYW5kIGJvdHRvbSByaWdodCBzaWRlICovXHJcbn1cclxuXHJcbiNteVNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLyogT24gbW91c2Utb3ZlciwgbWFrZSB0aGUgZWxlbWVudHMgYXBwZWFyIGFzIHRoZXkgc2hvdWxkICovXHJcbn1cclxuXHJcblxyXG4vKiBUaGUgYWJvdXQgbGluazogMjBweCBmcm9tIHRoZSB0b3Agd2l0aCBhIGdyZWVuIGJhY2tncm91bmQgKi9cclxuXHJcbiNhYm91dCB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4jYmxvZyB7XHJcbiAgICB0b3A6IDg1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgLyogQmx1ZSAqL1xyXG59XHJcblxyXG4jcHJvamVjdHMge1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICAvKiBSZWQgKi9cclxufVxyXG5cclxuI2NvbnRhY3Qge1xyXG4gICAgdG9wOiAyMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTUvKiBMaWdodCBCbGFjayAqL1xyXG59XHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMjBweDsgKi9cclxuICAgIC8qIGhlaWdodDogNTAlOyAqL1xyXG4gICAgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFwiYXV0b1wiIGhlaWdodCAqL1xyXG4gICAgLyogd2lkdGg6IDI1MHB4OyAqL1xyXG4gICAgLyogd2lkdGg6IDIwdnc7ICovXHJcbiAgICAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cclxuICAgIC8qIHotaW5kZXg6IDE7ICovXHJcbiAgICAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gICAgLyogdG9wOiAwOyAqL1xyXG4gICAgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgICAvKiBsZWZ0OiAwOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvKiBCbGFjayAqL1xyXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG4gICAgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsgKi9cclxufVxyXG5cclxuXHJcbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cclxuXHJcbi5zaWRlbmF2IGxpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIC8qIGNvbG9yOiAjZjA2ZDA2OyAqL1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvKiBjb2xvcjogZGFya2dyZXk7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDMyKTsgKi9cclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQwLCAwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgKi9cclxuICAgIC8qIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgKi9cclxufVxyXG5cclxuXHJcbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xyXG5cclxuXHJcbi8qIC5zaWRlbmF2IGxpIGE6aG92ZXIgeyAqL1xyXG5cclxuXHJcbi8qIGNvbG9yOiAjMTExOyAqL1xyXG5cclxuXHJcbi8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG5cclxuXHJcbi8qIH0gKi9cclxuXHJcblxyXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgKi9cclxuXHJcbi5tYWluIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3NSwgMjcsIDAuMzIyKTsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDMyKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAyMHZ3OyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMC92dzsgKi9cclxuICAgIC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTB2dzsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cclxufVxyXG5cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZWJhciAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBSRUQ7ICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxMUFGMUM7ICovXHJcbiAgICAvKiBib3JkZXItaW5saW5lLWVuZC13aWR0aDogMTBweDsgKi9cclxuICAgIC8qIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogMTBweDsgKi9cclxuICAgIC8qIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiA1MHB4OyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwO1MgKi9cclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1vYmlsZWNvbnRhaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5tb2JpbGVjb250YWkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnBjY29udGFpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnVzZXJpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC51c3JkZXQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDAsIDAsIDEpO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5uYXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYy1zaWRlYmFyLW5hdi1saW5rIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcbiAgICAuYy1zaWRlYmFyLW5hdi1saW5rIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWQge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IFJFRDsgKi9cclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGZpbGw6IHJnYmEoMjU1LCAxNDAsIDAsIDEpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDE0MCwgMCwgMSk7XHJcbiAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTFBRjFDOyAqL1xyXG4gICAgICAgIC8qIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiAxMHB4OyAqL1xyXG4gICAgICAgIC8qIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogMTBweDsgKi9cclxuICAgICAgICAvKiBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogNTBweDsgKi9cclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdeshboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userdeshboard',
          templateUrl: './userdeshboard.component.html',
          styleUrls: ['./userdeshboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _compservice_service__WEBPACK_IMPORTED_MODULE_3__["CompserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/detail/detail.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/users/detail/detail.component.ts ***!
    \**************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppUsersDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DetailComponent =
    /*#__PURE__*/
    function () {
      function DetailComponent() {
        _classCallCheck(this, DetailComponent);
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailComponent;
    }();

    DetailComponent.ɵfac = function DetailComponent_Factory(t) {
      return new (t || DetailComponent)();
    };

    DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailComponent,
      selectors: [["app-detail"]],
      decls: 2,
      vars: 0,
      template: function DetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detail works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detail',
          templateUrl: './detail.component.html',
          styleUrls: ['./detail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/list/list.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/users/list/list.component.ts ***!
    \**********************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppUsersListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent() {
        _classCallCheck(this, ListComponent);
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)();
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 2,
      vars: 0,
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent() {
        _classCallCheck(this, UsersComponent);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 2,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HARRY\Desktop\Angular\berniegame\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map