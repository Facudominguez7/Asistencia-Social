"use strict";
(self["webpackChunkAsistencia_Social"] = self["webpackChunkAsistencia_Social"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppRoutingModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const router_1 = __webpack_require__(/*! @angular/router */ 60124);
const editar_comedor_component_1 = __webpack_require__(/*! ./componentes/editar-comedor/editar-comedor.component */ 22750);
const editar_merendero_component_1 = __webpack_require__(/*! ./componentes/editar-merendero/editar-merendero.component */ 13718);
const login_component_1 = __webpack_require__(/*! ./componentes/login/login.component */ 49855);
const no_encontrado_component_1 = __webpack_require__(/*! ./componentes/no-encontrado/no-encontrado.component */ 95885);
const tablero_comedores_component_1 = __webpack_require__(/*! ./componentes/tablero-comedores/tablero-comedores.component */ 21841);
const tablero_merendero_component_1 = __webpack_require__(/*! ./componentes/tablero-merendero/tablero-merendero.component */ 34530);
const auth_guard_1 = __webpack_require__(/*! ./guardianes/auth.guard */ 61549);
const info_merendero_component_1 = __webpack_require__(/*! ./componentes/info-merendero/info-merendero.component */ 43427);
const info_comedor_component_1 = __webpack_require__(/*! ./componentes/info-comedor/info-comedor.component */ 93004);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const routes = [{
  path: 'login',
  component: login_component_1.LoginComponent
}, {
  path: '',
  component: tablero_comedores_component_1.TableroComedoresComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: 'merenderos',
  component: tablero_merendero_component_1.TableroMerenderoComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: 'comedor/editar/:id',
  component: editar_comedor_component_1.EditarComedorComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: 'comedor/info/:id',
  component: info_comedor_component_1.InfoComedorComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: 'merendero/editar/:id',
  component: editar_merendero_component_1.EditarMerenderoComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: 'merendero/info/:id',
  component: info_merendero_component_1.InfoMerenderoComponent,
  canActivate: [auth_guard_1.AuthGuard]
}, {
  path: '**',
  component: no_encontrado_component_1.NoEncontradoComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [router_1.RouterModule.forRoot(routes), router_1.RouterModule]
});
exports.AppRoutingModule = AppRoutingModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i2 = tslib_1.__importStar(__webpack_require__(/*! ./componentes/cabecero/cabecero.component */ 38786));
const i3 = tslib_1.__importStar(__webpack_require__(/*! ./componentes/pie-pagina/pie-pagina.component */ 5990));
class AppComponent {
  constructor() {
    this.title = 'Asistencia-Social';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelement(0, "app-cabecero")(1, "router-outlet")(2, "app-pie-pagina");
    }
  },
  dependencies: [i1.RouterOutlet, i2.CabeceroComponent, i3.PiePaginaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.AppComponent = AppComponent;

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 34497);
const environment_1 = __webpack_require__(/*! ../environments/environment */ 92340);
const compat_1 = __webpack_require__(/*! @angular/fire/compat */ 11879);
const firestore_1 = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
const auth_1 = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
const angular2_flash_messages_1 = __webpack_require__(/*! angular2-flash-messages */ 97041);
const forms_1 = __webpack_require__(/*! @angular/forms */ 2508);
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ 90158);
const app_component_1 = __webpack_require__(/*! ./app.component */ 55041);
const cabecero_component_1 = __webpack_require__(/*! ./componentes/cabecero/cabecero.component */ 38786);
const tablero_comedores_component_1 = __webpack_require__(/*! ./componentes/tablero-comedores/tablero-comedores.component */ 21841);
const comedores_component_1 = __webpack_require__(/*! ./componentes/comedores/comedores.component */ 54211);
const editar_comedor_component_1 = __webpack_require__(/*! ./componentes/editar-comedor/editar-comedor.component */ 22750);
const login_component_1 = __webpack_require__(/*! ./componentes/login/login.component */ 49855);
const no_encontrado_component_1 = __webpack_require__(/*! ./componentes/no-encontrado/no-encontrado.component */ 95885);
const pie_pagina_component_1 = __webpack_require__(/*! ./componentes/pie-pagina/pie-pagina.component */ 5990);
const comedor_service_1 = __webpack_require__(/*! ./servicios/comedor.service */ 27147);
const login_service_1 = __webpack_require__(/*! ./servicios/login.service */ 94700);
const auth_guard_1 = __webpack_require__(/*! ./guardianes/auth.guard */ 61549);
const merendero_service_1 = __webpack_require__(/*! ./servicios/merendero.service */ 47039);
const editar_merendero_component_1 = __webpack_require__(/*! ./componentes/editar-merendero/editar-merendero.component */ 13718);
const tablero_merendero_component_1 = __webpack_require__(/*! ./componentes/tablero-merendero/tablero-merendero.component */ 34530);
const info_comedor_component_1 = __webpack_require__(/*! ./componentes/info-comedor/info-comedor.component */ 93004);
const info_merendero_component_1 = __webpack_require__(/*! ./componentes/info-merendero/info-merendero.component */ 43427);
const Merenderos_component_1 = __webpack_require__(/*! ./componentes/merenderos/Merenderos.component */ 47349);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/fire/compat */ 11879));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: AppModule,
  bootstrap: [app_component_1.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  providers: [merendero_service_1.MerenderoServicio, comedor_service_1.ComdeorServicio, login_service_1.LoginService, auth_guard_1.AuthGuard],
  imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, compat_1.AngularFireModule.initializeApp(environment_1.environment.firestore, 'Asistencia-Social'), firestore_1.AngularFirestoreModule, auth_1.AngularFireAuthModule, forms_1.FormsModule, angular2_flash_messages_1.FlashMessagesModule.forRoot()]
});
exports.AppModule = AppModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
    declarations: [app_component_1.AppComponent, cabecero_component_1.CabeceroComponent, tablero_comedores_component_1.TableroComedoresComponent, comedores_component_1.ComedoresComponent, editar_comedor_component_1.EditarComedorComponent, login_component_1.LoginComponent, no_encontrado_component_1.NoEncontradoComponent, pie_pagina_component_1.PiePaginaComponent, editar_merendero_component_1.EditarMerenderoComponent, tablero_merendero_component_1.TableroMerenderoComponent, info_comedor_component_1.InfoComedorComponent, info_merendero_component_1.InfoMerenderoComponent, Merenderos_component_1.MerenderosComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, i1.AngularFireModule, firestore_1.AngularFirestoreModule, auth_1.AngularFireAuthModule, forms_1.FormsModule, i2.FlashMessagesModule]
  });
})();

/***/ }),

/***/ 38786:
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecero/cabecero.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CabeceroComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/login.service */ 94700));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
function CabeceroComponent_div_6_li_10_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 14)(1, "a", 15);
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17)(5, "a", 18);
    i0.ɵɵelement(6, "i", 19);
    i0.ɵɵtext(7, " Configuracion ");
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Bienvenido ", ctx_r1.usuariologueado, " ");
  }
}
function CabeceroComponent_div_6_li_11_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 20)(1, "a", 21);
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵtext(3, "Login ");
    i0.ɵɵelementEnd()();
  }
}
function CabeceroComponent_div_6_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20)(1, "a", 22);
    i0.ɵɵlistener("click", function CabeceroComponent_div_6_li_12_Template_a_click_1_listener() {
      i0.ɵɵrestoreView(_r5);
      const ctx_r4 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r4.logout());
    });
    i0.ɵɵelement(2, "i", 23);
    i0.ɵɵtext(3, "Salir ");
    i0.ɵɵelementEnd()();
  }
}
function CabeceroComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ul", 7)(2, "li", 8)(3, "a", 9);
    i0.ɵɵtext(4, "Comedores / Merenderos");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "ul", 7)(6, "li", 8)(7, "a", 10);
    i0.ɵɵtext(8, "Asistencia General");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "ul", 11);
    i0.ɵɵtemplate(10, CabeceroComponent_div_6_li_10_Template, 8, 1, "li", 12);
    i0.ɵɵtemplate(11, CabeceroComponent_div_6_li_11_Template, 4, 0, "li", 13);
    i0.ɵɵtemplate(12, CabeceroComponent_div_6_li_12_Template, 4, 0, "li", 13);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r0.estalogueado);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.estalogueado);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.estalogueado);
  }
}
class CabeceroComponent {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
  }
  ngOnInit() {
    this.loginService.getusuarioIdentificado().subscribe(auth => {
      if (auth) {
        this.estalogueado = true;
        this.usuariologueado = auth.email ?? '';
      } else {
        this.estalogueado = false;
      }
    });
  }
  logout() {
    this.loginService.logout();
    this.estalogueado = false;
    this.router.navigate(['/login']);
  }
}
CabeceroComponent.ɵfac = function CabeceroComponent_Factory(t) {
  return new (t || CabeceroComponent)(i0.ɵɵdirectiveInject(i1.LoginService), i0.ɵɵdirectiveInject(i2.Router));
};
CabeceroComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: CabeceroComponent,
  selectors: [["app-cabecero"]],
  decls: 7,
  vars: 1,
  consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark", "p-0"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarCollapse", 4, "ngIf"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "px-2"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/merenderos", 1, "nav-link"], [1, "navbar-nav", "ms-auto", "justify-content-end"], ["class", "nav-item dropdown mr-3", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "dropdown", "mr-3"], ["href", "#", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user"], [1, "dropdown-menu"], ["routerLink", "/configuracion", 1, "dropdown-item"], [1, "fas", "fa-cog"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-user-times"]],
  template: function CabeceroComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      i0.ɵɵtext(3, "Asistencia Social mo-so-mi");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(4, "button", 3);
      i0.ɵɵelement(5, "span", 4);
      i0.ɵɵelementEnd();
      i0.ɵɵtemplate(6, CabeceroComponent_div_6_Template, 13, 3, "div", 5);
      i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
      i0.ɵɵadvance(6);
      i0.ɵɵproperty("ngIf", ctx.estalogueado);
    }
  },
  dependencies: [i3.NgIf, i2.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.CabeceroComponent = CabeceroComponent;

/***/ }),

/***/ 54211:
/*!**************************************************************!*\
  !*** ./src/app/componentes/comedores/comedores.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ComedoresComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/comedor.service */ 27147));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i5 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
const _c0 = ["comedorForm"];
const _c1 = ["botonCerrar"];
function ComedoresComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "a", 62);
    i0.ɵɵelement(9, "i", 63);
    i0.ɵɵtext(10, " Editar ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " \u00A0 ");
    i0.ɵɵelementStart(12, "a", 62);
    i0.ɵɵelement(13, "i", 63);
    i0.ɵɵtext(14, " Info ");
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const comedor_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r13 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(comedor_r12.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(comedor_r12.direccion);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("routerLink", "/comedor/editar/", comedor_r12.id, "");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate1("routerLink", "/comedor/info/", comedor_r12.id, "");
  }
}
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class ComedoresComponent {
  constructor(comedoresServicio, flashMessages) {
    this.comedoresServicio = comedoresServicio;
    this.flashMessages = flashMessages;
    this.comedor = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: '',
      actividadRealiza: '',
      insumos: ''
    };
  }
  ngOnInit() {
    this.comedoresServicio.getComedores().subscribe(comedores => {
      this.comedores = comedores;
      this.comedoresFiltrados = comedores;
    });
  }
  buscar() {
    this.comedoresServicio.buscarComedorPorNombre(this.busqueda).subscribe(comedores => this.comedoresFiltrados = comedores);
  }
  agregar(comedorForm) {
    if (!comedorForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //Agregar el nuevo comedor
      this.comedoresServicio.agregarComedor(comedorForm.value);
      this.comedorForm.resetForm();
      this.cerrarModal();
    }
  }
  cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
}
ComedoresComponent.ɵfac = function ComedoresComponent_Factory(t) {
  return new (t || ComedoresComponent)(i0.ɵɵdirectiveInject(i1.ComdeorServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService));
};
ComedoresComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: ComedoresComponent,
  selectors: [["app-comedores"]],
  viewQuery: function ComedoresComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
      i0.ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.comedorForm = _t.first);
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.botonCerrar = _t.first);
    }
  },
  decls: 142,
  vars: 57,
  consts: [["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "container"], [1, "row"], [1, "col-md-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#agregarComedorModal", 1, "btn", "btn-primary", "btn-block"], [1, "fas", "fa-plus"], [1, "col-md-6"], ["type", "text", "placeholder", "Buscar...", "required", "", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [1, "fa", "fa-search"], ["id", "comedores"], [1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "table", "table-striped"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "card", "text-center", "bg-success", "text-white", "mb-3"], [1, "card-body"], [1, "display-4"], [1, "fas", "fa-house"], ["id", "agregarComedorModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], ["data-bs-dismiss", "modal", 1, "close"], ["botonCerrar", ""], [3, "ngSubmit"], ["comedorForm", "ngForm"], [1, "modal-body"], [1, "form-group"], ["for", "nombre"], ["type", "text", "name", "nombre", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombre", "ngModel"], [1, "invalid-feedback", 3, "hidden"], ["for", "direccion"], ["type", "text", "name", "direccion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["direccion", "ngModel"], ["for", "nombreRes"], ["type", "text", "name", "nombreRes", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombreRes", "ngModel"], ["for", "dni"], ["type", "text", "name", "dni", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["dni", "ngModel"], ["for", "numTelefono"], ["type", "text", "name", "numTelefono", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["numTelefono", "ngModel"], ["for", "diahorarioCocina"], ["type", "text", "name", "diahorarioCocina", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["diahorarioCocina", "ngModel"], ["for", "actividadRealiza"], ["type", "text", "name", "actividadRealiza", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["actividadRealiza", "ngModel"], ["for", "insumos"], ["type", "text", "name", "insumos", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["insumos", "ngModel"], ["for", "ubicacion"], ["type", "text", "name", "ubicacion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["ubicacion", "ngModel"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "fas", "fa-angle-double-right"]],
  template: function ComedoresComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      i0.ɵɵelement(5, "i", 5);
      i0.ɵɵtext(6, "Agregar Comedor / Merendero ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "div", 1)(8, "div", 2)(9, "div", 6)(10, "input", 7);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.busqueda = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵtext(11, " \u00A0 ");
      i0.ɵɵelementStart(12, "button", 8);
      i0.ɵɵlistener("click", function ComedoresComponent_Template_button_click_12_listener() {
        return ctx.buscar();
      });
      i0.ɵɵelement(13, "i", 9);
      i0.ɵɵtext(14, "Buscar ");
      i0.ɵɵelementEnd()()()();
      i0.ɵɵelement(15, "hr");
      i0.ɵɵelementStart(16, "section", 10)(17, "div", 1)(18, "div", 2)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "h4");
      i0.ɵɵtext(23, "Listado de Comedores / Merenderos");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(24, "table", 14)(25, "thead", 15)(26, "tr")(27, "th");
      i0.ɵɵtext(28, "#");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(29, "th");
      i0.ɵɵtext(30, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(31, "th");
      i0.ɵɵtext(32, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelement(33, "th");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(34, "tbody");
      i0.ɵɵtemplate(35, ComedoresComponent_tr_35_Template, 15, 5, "tr", 16);
      i0.ɵɵelementEnd()()()();
      i0.ɵɵelementStart(36, "div", 3)(37, "div", 17)(38, "div", 18)(39, "h3");
      i0.ɵɵtext(40, "Total Comedores / Merenderos");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(41, "h4", 19);
      i0.ɵɵelement(42, "i", 20);
      i0.ɵɵtext(43);
      i0.ɵɵelementEnd()()()()()()();
      i0.ɵɵelementStart(44, "div", 21)(45, "div", 22)(46, "div", 23)(47, "div", 24)(48, "h5", 25);
      i0.ɵɵtext(49, "Agregar Comedor / Merendero");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(50, "button", 26, 27)(52, "span");
      i0.ɵɵtext(53, "\u00D7");
      i0.ɵɵelementEnd()()();
      i0.ɵɵelement(54, "flash-messages");
      i0.ɵɵelementStart(55, "form", 28, 29);
      i0.ɵɵlistener("ngSubmit", function ComedoresComponent_Template_form_ngSubmit_55_listener() {
        i0.ɵɵrestoreView(_r14);
        const _r2 = i0.ɵɵreference(56);
        return i0.ɵɵresetView(ctx.agregar(_r2));
      });
      i0.ɵɵelementStart(57, "div", 30)(58, "div", 31)(59, "label", 32);
      i0.ɵɵtext(60, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(61, "input", 33, 34);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx.comedor.nombre = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(63, "div", 35);
      i0.ɵɵtext(64, " Nombre requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(65, "div", 35);
      i0.ɵɵtext(66, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(67, "div", 31)(68, "label", 36);
      i0.ɵɵtext(69, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(70, "input", 37, 38);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_70_listener($event) {
        return ctx.comedor.direccion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(72, "div", 35);
      i0.ɵɵtext(73, " Direccion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(74, "div", 35);
      i0.ɵɵtext(75, " Debe contener almenos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(76, "div", 31)(77, "label", 39);
      i0.ɵɵtext(78, "Nombre y Apellido del Responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(79, "input", 40, 41);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.comedor.nombreRes = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(81, "div", 35);
      i0.ɵɵtext(82, " Nombre de Responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(83, "div", 35);
      i0.ɵɵtext(84, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(85, "div", 31)(86, "label", 42);
      i0.ɵɵtext(87, "DNI del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(88, "input", 43, 44);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_88_listener($event) {
        return ctx.comedor.dni = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(90, "div", 35);
      i0.ɵɵtext(91, " DNI del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(92, "div", 35);
      i0.ɵɵtext(93, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(94, "div", 31)(95, "label", 45);
      i0.ɵɵtext(96, "N\u00FAmero de telefono del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(97, "input", 46, 47);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_97_listener($event) {
        return ctx.comedor.numTelefono = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(99, "div", 35);
      i0.ɵɵtext(100, " Numero de telefono del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(101, "div", 35);
      i0.ɵɵtext(102, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(103, "div", 31)(104, "label", 48);
      i0.ɵɵtext(105, "D\u00EDas y horarios de la actividad");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(106, "input", 49, 50);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_106_listener($event) {
        return ctx.comedor.diahorarioCocina = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(108, "div", 35);
      i0.ɵɵtext(109, " Dia y horario de cocina requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(110, "div", 35);
      i0.ɵɵtext(111, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(112, "div", 31)(113, "label", 51);
      i0.ɵɵtext(114, "Que actividad realiza");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(115, "input", 52, 53);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_115_listener($event) {
        return ctx.comedor.actividadRealiza = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(117, "div", 35);
      i0.ɵɵtext(118, " Dia y horario de actividad requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(119, "div", 35);
      i0.ɵɵtext(120, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(121, "div", 31)(122, "label", 54);
      i0.ɵɵtext(123, "Insumoss");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(124, "input", 55, 56);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_124_listener($event) {
        return ctx.comedor.insumos = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(126, "div", 35);
      i0.ɵɵtext(127, " Insumos requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(128, "div", 35);
      i0.ɵɵtext(129, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(130, "div", 31)(131, "label", 57);
      i0.ɵɵtext(132, "Agregue el link correspondiente a la ubicaci\u00F3n del Comedor / Merendero (Formato https://)");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(133, "input", 58, 59);
      i0.ɵɵlistener("ngModelChange", function ComedoresComponent_Template_input_ngModelChange_133_listener($event) {
        return ctx.comedor.ubicacion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(135, "div", 35);
      i0.ɵɵtext(136, " Ubicacion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(137, "div", 35);
      i0.ɵɵtext(138, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()();
      i0.ɵɵelementStart(139, "div", 60)(140, "button", 61);
      i0.ɵɵtext(141, "Guardar");
      i0.ɵɵelementEnd()()()()()();
    }
    if (rf & 2) {
      const _r3 = i0.ɵɵreference(62);
      const _r4 = i0.ɵɵreference(71);
      const _r5 = i0.ɵɵreference(80);
      const _r6 = i0.ɵɵreference(89);
      const _r7 = i0.ɵɵreference(98);
      const _r8 = i0.ɵɵreference(107);
      const _r9 = i0.ɵɵreference(116);
      const _r10 = i0.ɵɵreference(125);
      const _r11 = i0.ɵɵreference(134);
      i0.ɵɵadvance(10);
      i0.ɵɵproperty("ngModel", ctx.busqueda);
      i0.ɵɵadvance(25);
      i0.ɵɵproperty("ngForOf", ctx.comedoresFiltrados);
      i0.ɵɵadvance(8);
      i0.ɵɵtextInterpolate1(" ", ctx.comedores == null ? null : ctx.comedores.length, " ");
      i0.ɵɵadvance(18);
      i0.ɵɵproperty("ngModel", ctx.comedor.nombre)("ngClass", i0.ɵɵpureFunction1(39, _c2, _r3.errors && _r3.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.direccion)("ngClass", i0.ɵɵpureFunction1(41, _c2, _r4.errors && _r4.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.nombreRes)("ngClass", i0.ɵɵpureFunction1(43, _c2, _r5.errors && _r5.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.dni)("ngClass", i0.ɵɵpureFunction1(45, _c2, _r6.errors && _r6.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.numTelefono)("ngClass", i0.ɵɵpureFunction1(47, _c2, _r7.errors && _r7.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r7.errors == null ? null : _r7.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.diahorarioCocina)("ngClass", i0.ɵɵpureFunction1(49, _c2, _r8.errors && _r8.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r8.errors == null ? null : _r8.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r8.errors == null ? null : _r8.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.actividadRealiza)("ngClass", i0.ɵɵpureFunction1(51, _c2, _r9.errors && _r9.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.insumos)("ngClass", i0.ɵɵpureFunction1(53, _c2, _r10.errors && _r10.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r10.errors == null ? null : _r10.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r10.errors == null ? null : _r10.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.ubicacion)("ngClass", i0.ɵɵpureFunction1(55, _c2, _r11.errors && _r11.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r11.errors == null ? null : _r11.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r11.errors == null ? null : _r11.errors["minlength"]));
    }
  },
  dependencies: [i3.NgClass, i3.NgForOf, i4.RouterLink, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.NgModel, i5.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.ComedoresComponent = ComedoresComponent;

/***/ }),

/***/ 22750:
/*!************************************************************************!*\
  !*** ./src/app/componentes/editar-comedor/editar-comedor.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditarComedorComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/comedor.service */ 27147));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
const i5 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
const _c0 = ["comedorForm"];
const _c1 = ["botonCerrar"];
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class EditarComedorComponent {
  constructor(comedoresServicio, flashMessages, router, route) {
    this.comedoresServicio = comedoresServicio;
    this.flashMessages = flashMessages;
    this.router = router;
    this.route = route;
    this.comedor = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: '',
      actividadRealiza: '',
      insumos: ''
    };
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.comedoresServicio.getComedor(this.id).subscribe(comedor => {
      this.comedor = comedor;
    });
    this.comedoresServicio.getComedores().subscribe(comedores => {
      this.comedores = comedores;
    });
  }
  guardar(comedorForm) {
    if (!comedorForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      comedorForm.value.id = this.id;
      //modificar el comedor
      this.comedoresServicio.modificarComedor(comedorForm.value);
      this.router.navigate(['/']);
    }
  }
  editarDescripcion(comedorForm) {
    if (!comedorForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //Agregar el nuevo comedor
      this.comedoresServicio.agregarComedor(comedorForm.value);
      this.comedorForm.resetForm();
      this.cerrarModal();
    }
  }
  cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
  eliminar() {
    if (confirm('Seguro que desea eliminar el comedor?')) {
      this.comedoresServicio.eliminarComedor(this.comedor);
      this.router.navigate(['/']);
    }
  }
}
EditarComedorComponent.ɵfac = function EditarComedorComponent_Factory(t) {
  return new (t || EditarComedorComponent)(i0.ɵɵdirectiveInject(i1.ComdeorServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute));
};
EditarComedorComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: EditarComedorComponent,
  selectors: [["app-editar-comedor"]],
  viewQuery: function EditarComedorComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
      i0.ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.comedorForm = _t.first);
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.botonCerrar = _t.first);
    }
  },
  decls: 115,
  vars: 54,
  consts: [["id", "main-header", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "fas", "fa-house"], [3, "ngSubmit"], ["comedorForm", "ngForm"], ["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "col-md-3"], ["routerLink", "/", 1, "btn", "btn-light", "btn-block"], [1, "fas", "fa-arrow-left"], ["type", "submit", 1, "btn", "btn-success", "btn-block"], [1, "fas", "fa-check"], ["href", "# ", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "fas", "fa-trash"], ["id", "details"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["for", "actividadRealiza"], ["type", "text", "name", "actividadRealiza", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["actividadRealiza", "ngModel"], [1, "invalid-feedback", 3, "hidden"], ["for", "nombre"], ["type", "text", "name", "nombre", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombre", "ngModel"], ["for", "direccion"], ["type", "text", "name", "direccion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["direccion", "ngModel"], ["for", "nombreRes"], ["type", "text", "name", "nombreRes", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombreRes", "ngModel"], ["for", "dni"], ["type", "text", "name", "dni", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["dni", "ngModel"], ["for", "numTelefono"], ["type", "text", "name", "numTelefono", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["numTelefono", "ngModel"], ["for", "diahorarioCocina"], ["type", "text", "name", "diahorarioCocina", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["diahorarioCocina", "ngModel"], ["for", "insumos"], ["type", "text", "name", "insumos", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["insumos", "ngModel"], ["for", "ubicacion"], ["type", "text", "name", "ubicacion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["ubicacion", "ngModel"]],
  template: function EditarComedorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Editar Comedor");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "form", 5, 6);
      i0.ɵɵlistener("ngSubmit", function EditarComedorComponent_Template_form_ngSubmit_7_listener() {
        i0.ɵɵrestoreView(_r10);
        const _r0 = i0.ɵɵreference(8);
        return i0.ɵɵresetView(ctx.guardar(_r0));
      });
      i0.ɵɵelement(9, "flash-messages");
      i0.ɵɵelementStart(10, "section", 7)(11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "a", 9);
      i0.ɵɵelement(15, "i", 10);
      i0.ɵɵtext(16, "Regresar al inicio ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(17, "div", 8)(18, "button", 11);
      i0.ɵɵelement(19, "i", 12);
      i0.ɵɵtext(20, " Guardar Comedor ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(21, "div", 8)(22, "a", 13);
      i0.ɵɵlistener("click", function EditarComedorComponent_Template_a_click_22_listener() {
        return ctx.eliminar();
      });
      i0.ɵɵelement(23, "i", 14);
      i0.ɵɵtext(24, "Eliminar Comedor ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(25, "section", 15)(26, "div", 1)(27, "div", 2)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "h4");
      i0.ɵɵtext(32, "Editar Comedor");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(33, "div", 19)(34, "div", 20)(35, "label", 21);
      i0.ɵɵtext(36, "Actividades que realiza");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(37, "input", 22, 23);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.comedor.actividadRealiza = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(39, "div", 24);
      i0.ɵɵtext(40, " Actividad requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(41, "div", 24);
      i0.ɵɵtext(42, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(43, "div", 20)(44, "label", 25);
      i0.ɵɵtext(45, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(46, "input", 26, 27);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_46_listener($event) {
        return ctx.comedor.nombre = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(48, "div", 24);
      i0.ɵɵtext(49, " Nombre requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(50, "div", 24);
      i0.ɵɵtext(51, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(52, "div", 20)(53, "label", 28);
      i0.ɵɵtext(54, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(55, "input", 29, 30);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_55_listener($event) {
        return ctx.comedor.direccion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(57, "div", 24);
      i0.ɵɵtext(58, " Direccion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(59, "div", 24);
      i0.ɵɵtext(60, " Debe contener almenos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(61, "div", 20)(62, "label", 31);
      i0.ɵɵtext(63, "Nombre de Responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(64, "input", 32, 33);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.comedor.nombreRes = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(66, "div", 24);
      i0.ɵɵtext(67, " Nombre de Responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(68, "div", 24);
      i0.ɵɵtext(69, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(70, "div", 20)(71, "label", 34);
      i0.ɵɵtext(72, "DNI del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(73, "input", 35, 36);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_73_listener($event) {
        return ctx.comedor.dni = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(75, "div", 24);
      i0.ɵɵtext(76, " DNI del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(77, "div", 24);
      i0.ɵɵtext(78, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(79, "div", 20)(80, "label", 37);
      i0.ɵɵtext(81, "N\u00FAmero de telefono del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(82, "input", 38, 39);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_82_listener($event) {
        return ctx.comedor.numTelefono = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(84, "div", 24);
      i0.ɵɵtext(85, " Numero de telefono del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(86, "div", 24);
      i0.ɵɵtext(87, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(88, "div", 20)(89, "label", 40);
      i0.ɵɵtext(90, "D\u00EDas y horarios que realiza la actividad");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(91, "input", 41, 42);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_91_listener($event) {
        return ctx.comedor.diahorarioCocina = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(93, "div", 24);
      i0.ɵɵtext(94, " Dia y horario de cocina requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(95, "div", 24);
      i0.ɵɵtext(96, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(97, "div", 20)(98, "label", 43);
      i0.ɵɵtext(99, "Insumos");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(100, "input", 44, 45);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_100_listener($event) {
        return ctx.comedor.insumos = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(102, "div", 24);
      i0.ɵɵtext(103, " Insumos requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(104, "div", 24);
      i0.ɵɵtext(105, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(106, "div", 20)(107, "label", 46);
      i0.ɵɵtext(108, "Agregue el link correspondiente a la ubicaci\u00F3n del Comedor / Merendero (Formato https://)");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(109, "input", 47, 48);
      i0.ɵɵlistener("ngModelChange", function EditarComedorComponent_Template_input_ngModelChange_109_listener($event) {
        return ctx.comedor.ubicacion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(111, "div", 24);
      i0.ɵɵtext(112, " Ubicaci\u00F3n requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(113, "div", 24);
      i0.ɵɵtext(114, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()()()()()()()();
    }
    if (rf & 2) {
      const _r1 = i0.ɵɵreference(38);
      const _r2 = i0.ɵɵreference(47);
      const _r3 = i0.ɵɵreference(56);
      const _r4 = i0.ɵɵreference(65);
      const _r5 = i0.ɵɵreference(74);
      const _r6 = i0.ɵɵreference(83);
      const _r7 = i0.ɵɵreference(92);
      const _r8 = i0.ɵɵreference(101);
      const _r9 = i0.ɵɵreference(110);
      i0.ɵɵadvance(37);
      i0.ɵɵproperty("ngModel", ctx.comedor.actividadRealiza)("ngClass", i0.ɵɵpureFunction1(36, _c2, _r1.errors && _r1.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.nombre)("ngClass", i0.ɵɵpureFunction1(38, _c2, _r2.errors && _r2.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r2.errors == null ? null : _r2.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r2.errors == null ? null : _r2.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.direccion)("ngClass", i0.ɵɵpureFunction1(40, _c2, _r3.errors && _r3.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.nombreRes)("ngClass", i0.ɵɵpureFunction1(42, _c2, _r4.errors && _r4.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.dni)("ngClass", i0.ɵɵpureFunction1(44, _c2, _r5.errors && _r5.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.numTelefono)("ngClass", i0.ɵɵpureFunction1(46, _c2, _r6.errors && _r6.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.diahorarioCocina)("ngClass", i0.ɵɵpureFunction1(48, _c2, _r7.errors && _r7.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r7.errors == null ? null : _r7.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r7.errors == null ? null : _r7.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.insumos)("ngClass", i0.ɵɵpureFunction1(50, _c2, _r8.errors && _r8.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r8.errors == null ? null : _r8.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r8.errors == null ? null : _r8.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.comedor.ubicacion)("ngClass", i0.ɵɵpureFunction1(52, _c2, _r9.errors && _r9.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["minlength"]));
    }
  },
  dependencies: [i4.NgClass, i3.RouterLink, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.NgModel, i5.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
EditarComedorComponent.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: EditarComedorComponent,
  factory: EditarComedorComponent.ɵfac
});
exports.EditarComedorComponent = EditarComedorComponent;

/***/ }),

/***/ 13718:
/*!****************************************************************************!*\
  !*** ./src/app/componentes/editar-merendero/editar-merendero.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditarMerenderoComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/merendero.service */ 47039));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
const i5 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
const _c0 = ["merenderoForm"];
const _c1 = ["botonCerrar"];
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class EditarMerenderoComponent {
  constructor(merenderosServicio, flashMessages, router, route) {
    this.merenderosServicio = merenderosServicio;
    this.flashMessages = flashMessages;
    this.router = router;
    this.route = route;
    this.merendero = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: ''
    };
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.merenderosServicio.getMerendero(this.id).subscribe(merendero => {
      this.merendero = merendero;
    });
    this.merenderosServicio.getMerenderos().subscribe(merenderos => {
      this.merenderos = merenderos;
    });
  }
  guardar(merenderoForm) {
    if (!merenderoForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      merenderoForm.value.id = this.id;
      //modificar el comedor
      this.merenderosServicio.modificarMerendero(merenderoForm.value);
      this.router.navigate(['/merenderos']);
    }
  }
  editarDescripcion(merenderosForm) {
    if (!this.merenderoForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //Agregar el nuevo comedor
      this.merenderosServicio.agregarMerendero(this.merenderoForm.value);
      this.merenderoForm.resetForm();
      this.cerrarModal();
    }
  }
  cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
  eliminar() {
    if (confirm('Seguro que desea eliminar el merendero?')) {
      this.merenderosServicio.eliminarMerendero(this.merendero);
      this.router.navigate(['/merenderos']);
    }
  }
}
EditarMerenderoComponent.ɵfac = function EditarMerenderoComponent_Factory(t) {
  return new (t || EditarMerenderoComponent)(i0.ɵɵdirectiveInject(i1.MerenderoServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute));
};
EditarMerenderoComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: EditarMerenderoComponent,
  selectors: [["app-editar-merendero"]],
  viewQuery: function EditarMerenderoComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
      i0.ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.merenderoForm = _t.first);
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.botonCerrar = _t.first);
    }
  },
  decls: 88,
  vars: 36,
  consts: [["id", "main-header", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "fas", "fa-house"], [3, "ngSubmit"], ["merenderoForm", "ngForm"], ["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "col-md-3"], ["routerLink", "/merenderos", 1, "btn", "btn-light", "btn-block"], [1, "fas", "fa-arrow-left"], ["type", "submit", 1, "btn", "btn-success", "btn-block"], [1, "fas", "fa-check"], ["routerLink", "/merenderos", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "fas", "fa-trash"], ["id", "details"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["for", "nombre"], ["type", "text", "name", "nombre", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombre", "ngModel"], [1, "invalid-feedback", 3, "hidden"], ["for", "direccion"], ["type", "text", "name", "direccion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["direccion", "ngModel"], ["for", "nombreRes"], ["type", "text", "name", "nombreRes", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombreRes", "ngModel"], ["for", "dni"], ["type", "text", "name", "dni", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["dni", "ngModel"], ["for", "numTelefono"], ["type", "text", "name", "numTelefono", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["numTelefono", "ngModel"], ["for", "diahorarioCocina"], ["type", "text", "name", "diahorarioCocina", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["diahorarioCocina", "ngModel"]],
  template: function EditarMerenderoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Editar Merendero");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "form", 5, 6);
      i0.ɵɵlistener("ngSubmit", function EditarMerenderoComponent_Template_form_ngSubmit_7_listener() {
        i0.ɵɵrestoreView(_r7);
        const _r0 = i0.ɵɵreference(8);
        return i0.ɵɵresetView(ctx.guardar(_r0));
      });
      i0.ɵɵelement(9, "flash-messages");
      i0.ɵɵelementStart(10, "section", 7)(11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "a", 9);
      i0.ɵɵelement(15, "i", 10);
      i0.ɵɵtext(16, "Regresar al inicio ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(17, "div", 8)(18, "button", 11);
      i0.ɵɵelement(19, "i", 12);
      i0.ɵɵtext(20, " Guardar Merendero ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(21, "div", 8)(22, "a", 13);
      i0.ɵɵlistener("click", function EditarMerenderoComponent_Template_a_click_22_listener() {
        return ctx.eliminar();
      });
      i0.ɵɵelement(23, "i", 14);
      i0.ɵɵtext(24, "Eliminar Merendero ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(25, "section", 15)(26, "div", 1)(27, "div", 2)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "h4");
      i0.ɵɵtext(32, "Editar Merendero");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(33, "div", 19)(34, "div", 20)(35, "label", 21);
      i0.ɵɵtext(36, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(37, "input", 22, 23);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.merendero.nombre = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(39, "div", 24);
      i0.ɵɵtext(40, " Nombre requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(41, "div", 24);
      i0.ɵɵtext(42, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(43, "div", 20)(44, "label", 25);
      i0.ɵɵtext(45, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(46, "input", 26, 27);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_46_listener($event) {
        return ctx.merendero.direccion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(48, "div", 24);
      i0.ɵɵtext(49, " Direccion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(50, "div", 24);
      i0.ɵɵtext(51, " Debe contener almenos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(52, "div", 20)(53, "label", 28);
      i0.ɵɵtext(54, "Nombre de Responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(55, "input", 29, 30);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_55_listener($event) {
        return ctx.merendero.nombreRes = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(57, "div", 24);
      i0.ɵɵtext(58, " Nombre de Responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(59, "div", 24);
      i0.ɵɵtext(60, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(61, "div", 20)(62, "label", 31);
      i0.ɵɵtext(63, "DNI del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(64, "input", 32, 33);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.merendero.dni = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(66, "div", 24);
      i0.ɵɵtext(67, " DNI del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(68, "div", 24);
      i0.ɵɵtext(69, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(70, "div", 20)(71, "label", 34);
      i0.ɵɵtext(72, "N\u00FAmero de telefono del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(73, "input", 35, 36);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_73_listener($event) {
        return ctx.merendero.numTelefono = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(75, "div", 24);
      i0.ɵɵtext(76, " Numero de telefono del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(77, "div", 24);
      i0.ɵɵtext(78, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(79, "div", 20)(80, "label", 37);
      i0.ɵɵtext(81, "D\u00EDas y horarios que realiza el almuerzo");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(82, "input", 38, 39);
      i0.ɵɵlistener("ngModelChange", function EditarMerenderoComponent_Template_input_ngModelChange_82_listener($event) {
        return ctx.merendero.diahorarioCocina = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(84, "div", 24);
      i0.ɵɵtext(85, " Dia y horario de cocina requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(86, "div", 24);
      i0.ɵɵtext(87, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()()()()()()()();
    }
    if (rf & 2) {
      const _r1 = i0.ɵɵreference(38);
      const _r2 = i0.ɵɵreference(47);
      const _r3 = i0.ɵɵreference(56);
      const _r4 = i0.ɵɵreference(65);
      const _r5 = i0.ɵɵreference(74);
      const _r6 = i0.ɵɵreference(83);
      i0.ɵɵadvance(37);
      i0.ɵɵproperty("ngModel", ctx.merendero.nombre)("ngClass", i0.ɵɵpureFunction1(24, _c2, _r1.errors && _r1.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.direccion)("ngClass", i0.ɵɵpureFunction1(26, _c2, _r2.errors && _r2.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r2.errors == null ? null : _r2.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r2.errors == null ? null : _r2.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.nombreRes)("ngClass", i0.ɵɵpureFunction1(28, _c2, _r3.errors && _r3.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.dni)("ngClass", i0.ɵɵpureFunction1(30, _c2, _r4.errors && _r4.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.numTelefono)("ngClass", i0.ɵɵpureFunction1(32, _c2, _r5.errors && _r5.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.diahorarioCocina)("ngClass", i0.ɵɵpureFunction1(34, _c2, _r6.errors && _r6.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
    }
  },
  dependencies: [i4.NgClass, i3.RouterLink, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.NgModel, i5.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.EditarMerenderoComponent = EditarMerenderoComponent;

/***/ }),

/***/ 93004:
/*!********************************************************************!*\
  !*** ./src/app/componentes/info-comedor/info-comedor.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InfoComedorComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const jspdf_1 = tslib_1.__importDefault(__webpack_require__(/*! jspdf */ 84177));
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/comedor.service */ 27147));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
class InfoComedorComponent {
  constructor(comedoresServicio, flashMessages, router, route) {
    this.comedoresServicio = comedoresServicio;
    this.flashMessages = flashMessages;
    this.router = router;
    this.route = route;
    this.comedor = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: '',
      actividadRealiza: '',
      insumos: ''
    };
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.comedoresServicio.getComedor(this.id).subscribe(comedor => {
      this.comedor = comedor;
    });
  }
  guardar(comedorForm, event) {
    event.preventDefault();
    comedorForm.value.id = this.id;
    //modificar el comedor
    this.comedoresServicio.modificarComedor(comedorForm.value);
  }
  generarPDFNotas() {
    // Obtener el contenido del textarea
    const element = document.getElementById('info');
    const ulElement = document.getElementById('ul-info');
    if (element && ulElement) {
      // Obtener las líneas del textarea
      const lines = element.value.split('\n');
      // Obtener la lista en formato de texto
      const liElements = ulElement.querySelectorAll('li');
      const listText = Array.from(liElements).map(li => '- ' + li.textContent).join('\n');
      // Crear un nuevo documento PDF
      const doc = new jspdf_1.default();
      // Configurar los márgenes y la altura de línea
      const lineHeight = 10; // Altura de línea
      const topMargin = 10; // Margen superior
      const bottomMargin = 10; // Margen inferior
      const pageHeight = doc.internal.pageSize.height;
      // Si el contenido no cabe en una sola página, agregar más páginas
      let y = topMargin;
      // Agregar la lista al documento
      doc.text(listText, 10, y);
      // Actualizar la posición vertical de la página
      y += lineHeight * (liElements.length + 1);
      // Agregar las líneas del textarea al documento
      for (let i = 0; i < lines.length; i++) {
        // Dividir la línea en varias líneas que se ajusten al ancho de la página
        const words = doc.splitTextToSize(lines[i], doc.internal.pageSize.width - 20);
        // Agregar las líneas al documento
        for (let j = 0; j < words.length; j++) {
          if (y + lineHeight > pageHeight - bottomMargin) {
            doc.addPage();
            y = topMargin;
          }
          doc.text(words[j], 10, y);
          y += lineHeight;
        }
      }
      // Guardar el documento PDF
      doc.save('Informacion de comedor');
    } else {
      console.error('Elemento "info" o "ul-info" no encontrado');
    }
  }
}
InfoComedorComponent.ɵfac = function InfoComedorComponent_Factory(t) {
  return new (t || InfoComedorComponent)(i0.ɵɵdirectiveInject(i1.ComdeorServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute));
};
InfoComedorComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: InfoComedorComponent,
  selectors: [["app-info-comedor"]],
  decls: 82,
  vars: 11,
  consts: [["id", "main-header", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "fa-solid", "fa-circle-info"], [3, "ngSubmit"], ["comedorForm", "ngForm"], ["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "col-md-3"], ["routerLink", "/", 1, "btn", "btn-light", "btn-block"], [1, "fas", "fa-arrow-left"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["type", "button", 1, "btn", "btn-success", "btn-block", 3, "click"], ["id", "comedores"], [1, "col-md-15"], [1, "card"], [1, "card-header"], ["id", "ul-info", 1, "list-group", "list-group-flush"], [1, "list-group-item"], ["id", "Informaci\u00F3n Comedor"], [1, "col"], [1, "card-body"], [1, "form-group"], ["for", "descripcion"], ["id", "info", "type", "text", "name", "descripcion", "required", "", "minlength", "2", 1, "form-control", 2, "height", "400px", "resize", "vertical", 3, "ngModel", "ngModelChange"], ["descripcion", "ngModel"], [1, "invalid-feedback", 3, "hidden"], [1, "col-md-3", "text-right"], ["type", "submit", 1, "btn", "btn-success", "btn-block"], [1, "fas", "fa-check"]],
  template: function InfoComedorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Informaci\u00F3n");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "form", 5, 6);
      i0.ɵɵlistener("ngSubmit", function InfoComedorComponent_Template_form_ngSubmit_7_listener($event) {
        i0.ɵɵrestoreView(_r2);
        const _r0 = i0.ɵɵreference(8);
        return i0.ɵɵresetView(ctx.guardar(_r0, $event));
      });
      i0.ɵɵelement(9, "flash-messages");
      i0.ɵɵelementStart(10, "section", 7)(11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "a", 9);
      i0.ɵɵelement(15, "i", 10);
      i0.ɵɵtext(16, "Regresar al inicio ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(17, "div", 8)(18, "a", 11);
      i0.ɵɵtext(19, " Ver ubicacion en google maps ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(20, "div", 8)(21, "button", 12);
      i0.ɵɵlistener("click", function InfoComedorComponent_Template_button_click_21_listener() {
        return ctx.generarPDFNotas();
      });
      i0.ɵɵelement(22, "i");
      i0.ɵɵtext(23, "Generar PDF ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(24, "section", 13)(25, "div", 1)(26, "div", 2)(27, "div", 14)(28, "div", 15)(29, "div", 16)(30, "h4");
      i0.ɵɵtext(31, "Informaci\u00F3n");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(32, "ul", 17)(33, "li", 18)(34, "b");
      i0.ɵɵtext(35, "Actividades que realiza:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(36);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(37, "li", 18)(38, "b");
      i0.ɵɵtext(39, "Nombre:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(40);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(41, "li", 18)(42, "b");
      i0.ɵɵtext(43, "Direcci\u00F3n:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(44);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(45, "li", 18)(46, "b");
      i0.ɵɵtext(47, "Nombre de responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(48);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(49, "li", 18)(50, "b");
      i0.ɵɵtext(51, "DNI del responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(52);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(53, "li", 18)(54, "b");
      i0.ɵɵtext(55, "N\u00FAmero de telefono del responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(56);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(57, "li", 18)(58, "b");
      i0.ɵɵtext(59, "D\u00EDas y horarios que realiza la actividad:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(60);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(61, "li", 18)(62, "b");
      i0.ɵɵtext(63, "Insumos que recibe: ");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(64);
      i0.ɵɵelementEnd()()()()()()();
      i0.ɵɵelementStart(65, "section", 19)(66, "div", 1)(67, "div", 2)(68, "div", 20)(69, "div", 15)(70, "div", 21)(71, "div", 22)(72, "label", 23);
      i0.ɵɵtext(73, "Agregue notas aqu\u00ED");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(74, "textarea", 24, 25);
      i0.ɵɵlistener("ngModelChange", function InfoComedorComponent_Template_textarea_ngModelChange_74_listener($event) {
        return ctx.comedor.descripcion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(76, "div", 26);
      i0.ɵɵtext(77, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()();
      i0.ɵɵelementStart(78, "div", 27)(79, "button", 28);
      i0.ɵɵelement(80, "i", 29);
      i0.ɵɵtext(81, " Guardar Comedor ");
      i0.ɵɵelementEnd()()()()()()()();
    }
    if (rf & 2) {
      const _r1 = i0.ɵɵreference(75);
      i0.ɵɵadvance(18);
      i0.ɵɵproperty("href", ctx.comedor.ubicacion, i0.ɵɵsanitizeUrl);
      i0.ɵɵadvance(18);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.actividadRealiza, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.nombre, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.direccion, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.nombreRes, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.dni, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.numTelefono, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.diahorarioCocina, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.comedor.insumos, " ");
      i0.ɵɵadvance(10);
      i0.ɵɵproperty("ngModel", ctx.comedor.descripcion);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["minlength"]));
    }
  },
  dependencies: [i3.RouterLink, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.NgModel, i4.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.InfoComedorComponent = InfoComedorComponent;

/***/ }),

/***/ 43427:
/*!************************************************************************!*\
  !*** ./src/app/componentes/info-merendero/info-merendero.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InfoMerenderoComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const jspdf_1 = tslib_1.__importDefault(__webpack_require__(/*! jspdf */ 84177));
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/merendero.service */ 47039));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
const i5 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
const _c0 = ["merenderoForm"];
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class InfoMerenderoComponent {
  constructor(merenderosServicio, flashMessages, router, route) {
    this.merenderosServicio = merenderosServicio;
    this.flashMessages = flashMessages;
    this.router = router;
    this.route = route;
    this.merendero = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: ''
    };
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.merenderosServicio.getMerendero(this.id).subscribe(merendero => {
      this.merendero = merendero;
    });
  }
  guardar(merenderoForm, event) {
    event.preventDefault();
    merenderoForm.value.id = this.id;
    //modificar el comedor
    this.merenderosServicio.modificarMerendero(merenderoForm.value);
  }
  generarPDFNotas() {
    // Obtener el contenido del textarea
    const element = document.getElementById('info');
    if (element) {
      // Obtener las líneas del textarea
      const lines = element.value.split('\n');
      // Crear un nuevo documento PDF
      const doc = new jspdf_1.default();
      // Configurar los márgenes y la altura de línea
      const lineHeight = 10; // Altura de línea
      const topMargin = 10; // Margen superior
      const bottomMargin = 10; // Margen inferior
      const pageHeight = doc.internal.pageSize.height;
      // Si el contenido no cabe en una sola página, agregar más páginas
      let y = topMargin;
      for (let i = 0; i < lines.length; i++) {
        // Dividir la línea en varias líneas que se ajusten al ancho de la página
        const words = doc.splitTextToSize(lines[i], doc.internal.pageSize.width - 20);
        // Agregar las líneas al documento
        for (let j = 0; j < words.length; j++) {
          if (y + lineHeight > pageHeight - bottomMargin) {
            doc.addPage();
            y = topMargin;
          }
          doc.text(words[j], 10, y);
          y += lineHeight;
        }
      }
      /*let y = topMargin;: Aquí se inicializa la variable y con el valor del margen superior, que será la posición en la que se comenzarán a agregar las líneas al documento PDF.
        for (let i = 0; i < lines.length; i++) {: Este es un bucle for que recorre cada una de las líneas del arreglo lines.
        if (y + lineHeight > pageHeight - bottomMargin) {: Esta línea es una condición que verifica si la altura disponible en la página actual es suficiente para agregar la siguiente línea. Si la altura no es suficiente, entonces se agrega una nueva página al documento y se reinicia la variable y al valor del margen superior.
        doc.text(lines[i], 10, y);: Aquí se agrega la línea actual del textarea al documento PDF en la posición x=10 (10 unidades desde el borde izquierdo de la página) y y, que es la posición actual calculada en función del margen superior, el alto de línea y la cantidad de líneas que ya han sido agregadas.
        y += lineHeight;: Finalmente, se incrementa el valor de y en la altura de línea, para que la siguiente línea sea agregada a la posición correcta en la página actual o en la siguiente si no hay espacio suficiente en la página actual.*/
      // Guardar el documento PDF
      doc.save('Informacion de merendero');
    } else {
      console.error('Elemento "info" no encontrado');
    }
  }
}
InfoMerenderoComponent.ɵfac = function InfoMerenderoComponent_Factory(t) {
  return new (t || InfoMerenderoComponent)(i0.ɵɵdirectiveInject(i1.MerenderoServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute));
};
InfoMerenderoComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: InfoMerenderoComponent,
  selectors: [["app-info-merendero"]],
  viewQuery: function InfoMerenderoComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.merenderoForm = _t.first);
    }
  },
  decls: 79,
  vars: 13,
  consts: [["id", "main-header", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "fa-solid", "fa-circle-info"], [3, "ngSubmit"], ["merenderoForm", "ngForm"], ["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "col-md-3"], ["routerLink", "/merenderos", 1, "btn", "btn-light", "btn-block"], [1, "fas", "fa-arrow-left"], ["type", "submit", 1, "btn", "btn-success", "btn-block"], [1, "fas", "fa-check"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["type", "button", 1, "btn", "btn-success", "btn-block", 3, "click"], ["id", "details"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["for", "descripcion"], ["id", "info", "type", "text", "name", "descripcion", "required", "", "minlength", "2", 1, "form-control", 2, "height", "200px", "resize", "vertical", 3, "ngModel", "ngClass", "ngModelChange"], ["descripcion", "ngModel"], [1, "invalid-feedback", 3, "hidden"], ["id", "merenderos"], [1, "col-md-15"], [1, "list-group", "list-group-flush"], [1, "list-group-item"]],
  template: function InfoMerenderoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Informaci\u00F3n");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "form", 5, 6);
      i0.ɵɵlistener("ngSubmit", function InfoMerenderoComponent_Template_form_ngSubmit_7_listener($event) {
        i0.ɵɵrestoreView(_r2);
        const _r0 = i0.ɵɵreference(8);
        return i0.ɵɵresetView(ctx.guardar(_r0, $event));
      });
      i0.ɵɵelement(9, "flash-messages");
      i0.ɵɵelementStart(10, "section", 7)(11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "a", 9);
      i0.ɵɵelement(15, "i", 10);
      i0.ɵɵtext(16, "Regresar al inicio ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(17, "div", 8)(18, "button", 11);
      i0.ɵɵelement(19, "i", 12);
      i0.ɵɵtext(20, " Guardar Merendero ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(21, "div", 8)(22, "a", 13);
      i0.ɵɵtext(23, " Ver ubicacion en google maps ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(24, "div", 8)(25, "button", 14);
      i0.ɵɵlistener("click", function InfoMerenderoComponent_Template_button_click_25_listener() {
        return ctx.generarPDFNotas();
      });
      i0.ɵɵelement(26, "i");
      i0.ɵɵtext(27, "Generar PDF ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(28, "section", 15)(29, "div", 1)(30, "div", 2)(31, "div", 16)(32, "div", 17)(33, "div", 18)(34, "h4");
      i0.ɵɵtext(35, "Informaci\u00F3n Merendero");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(36, "div", 19)(37, "div", 20)(38, "label", 21);
      i0.ɵɵtext(39, "Agregue notas aqu\u00ED");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(40, "textarea", 22, 23);
      i0.ɵɵlistener("ngModelChange", function InfoMerenderoComponent_Template_textarea_ngModelChange_40_listener($event) {
        return ctx.merendero.descripcion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(42, "div", 24);
      i0.ɵɵtext(43, " Nombre requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(44, "div", 24);
      i0.ɵɵtext(45, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()()()()()()()();
      i0.ɵɵelementStart(46, "section", 25)(47, "div", 1)(48, "div", 2)(49, "div", 26)(50, "div", 17)(51, "div", 18)(52, "h4");
      i0.ɵɵtext(53, "Informaci\u00F3n de Merendero");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(54, "ul", 27)(55, "li", 28)(56, "b");
      i0.ɵɵtext(57, "Nombre:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(58);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(59, "li", 28)(60, "b");
      i0.ɵɵtext(61, "Direcci\u00F3n:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(62);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(63, "li", 28)(64, "b");
      i0.ɵɵtext(65, "Nombre de responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(66);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(67, "li", 28)(68, "b");
      i0.ɵɵtext(69, "DNI del responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(70);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(71, "li", 28)(72, "b");
      i0.ɵɵtext(73, "N\u00FAmero de telefono del responsable:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(74);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(75, "li", 28)(76, "b");
      i0.ɵɵtext(77, "D\u00EDas y horarios que realiza el almuerzo:");
      i0.ɵɵelementEnd();
      i0.ɵɵtext(78);
      i0.ɵɵelementEnd()()()()()()();
    }
    if (rf & 2) {
      const _r1 = i0.ɵɵreference(41);
      i0.ɵɵadvance(22);
      i0.ɵɵproperty("href", ctx.merendero.ubicacion, i0.ɵɵsanitizeUrl);
      i0.ɵɵadvance(18);
      i0.ɵɵproperty("ngModel", ctx.merendero.descripcion)("ngClass", i0.ɵɵpureFunction1(11, _c1, _r1.errors && _r1.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r1.errors == null ? null : _r1.errors["minlength"]));
      i0.ɵɵadvance(14);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.nombre, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.direccion, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.nombreRes, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.dni, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.numTelefono, " ");
      i0.ɵɵadvance(4);
      i0.ɵɵtextInterpolate1(" ", ctx.merendero.diahorarioCocina, " ");
    }
  },
  dependencies: [i4.NgClass, i3.RouterLink, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.NgModel, i5.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.InfoMerenderoComponent = InfoMerenderoComponent;

/***/ }),

/***/ 49855:
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoginComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/login.service */ 94700));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
class LoginComponent {
  constructor(router, flashMessages, loginService) {
    this.router = router;
    this.flashMessages = flashMessages;
    this.loginService = loginService;
  }
  ngOnInit() {
    this.loginService.getusuarioIdentificado().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }
  login() {
    this.loginService.login(this.email, this.password).then(res => {
      this.router.navigate(['/']);
    }).catch(error => {
      this.flashMessages.show(error.message, {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.FlashMessagesService), i0.ɵɵdirectiveInject(i3.LoginService));
};
LoginComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 29,
  vars: 2,
  consts: [["id", "main-header", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "fas", "fa-house"], ["id", "actions", 1, "py-4", "mb-4", "bg-ligth"], [1, "class-row"], ["id", "login"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "submit"], [1, "form-group"], ["for", "email"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "login", 1, "btn", "btn-primary", "btn-block"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Login");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "section", 5)(8, "div", 1);
      i0.ɵɵelement(9, "div", 6);
      i0.ɵɵelementEnd()();
      i0.ɵɵelement(10, "flash-messages");
      i0.ɵɵelementStart(11, "section", 7)(12, "div", 6)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "h4");
      i0.ɵɵtext(17, "Login");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(18, "div", 11)(19, "form", 12);
      i0.ɵɵlistener("submit", function LoginComponent_Template_form_submit_19_listener() {
        return ctx.login();
      });
      i0.ɵɵelementStart(20, "div", 13)(21, "label", 14);
      i0.ɵɵtext(22, "Email");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(23, "input", 15);
      i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.email = $event;
      });
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(24, "div", 13)(25, "label", 16);
      i0.ɵɵtext(26, "Contrase\u00F1a");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(27, "input", 17);
      i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.password = $event;
      });
      i0.ɵɵelementEnd()();
      i0.ɵɵelement(28, "input", 18);
      i0.ɵɵelementEnd()()()()()();
    }
    if (rf & 2) {
      i0.ɵɵadvance(23);
      i0.ɵɵproperty("ngModel", ctx.email);
      i0.ɵɵadvance(4);
      i0.ɵɵproperty("ngModel", ctx.password);
    }
  },
  dependencies: [i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.LoginComponent = LoginComponent;

/***/ }),

/***/ 47349:
/*!****************************************************************!*\
  !*** ./src/app/componentes/merenderos/Merenderos.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MerenderosComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/servicios/merendero.service */ 47039));
const i2 = tslib_1.__importStar(__webpack_require__(/*! angular2-flash-messages */ 97041));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 94666));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i5 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 2508));
const _c0 = ["merenderoForm"];
const _c1 = ["botonCerrar"];
function MerenderosComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "a", 56);
    i0.ɵɵelement(9, "i", 57);
    i0.ɵɵtext(10, " Editar ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " \u00A0 ");
    i0.ɵɵelementStart(12, "a", 56);
    i0.ɵɵelement(13, "i", 57);
    i0.ɵɵtext(14, " Info ");
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const merendero_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r11 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(merendero_r10.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(merendero_r10.direccion);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("routerLink", "/merendero/editar/", merendero_r10.id, "");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate1("routerLink", "/merendero/info/", merendero_r10.id, "");
  }
}
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class MerenderosComponent {
  constructor(merenderoServicio, flashMessages) {
    this.merenderoServicio = merenderoServicio;
    this.flashMessages = flashMessages;
    this.merendero = {
      nombre: '',
      direccion: '',
      descripcion: '',
      nombreRes: '',
      dni: '',
      numTelefono: '',
      diahorarioCocina: '',
      ubicacion: ''
    };
  }
  ngOnInit() {
    this.merenderoServicio.getMerenderos().subscribe(merenderos => {
      this.merenderos = merenderos;
      this.merenderosFiltrados = merenderos;
    });
  }
  buscar() {
    this.merenderoServicio.buscarComedorPorNombre(this.busqueda).subscribe(merenderos => this.merenderosFiltrados = merenderos);
  }
  agregarMerendero(merenderoForm) {
    if (!merenderoForm.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //Agregar el nuevo merendero
      this.merenderoServicio.agregarMerendero(merenderoForm.value);
      this.merenderoForm.resetForm();
      this.cerrarModal();
    }
  }
  cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
}
MerenderosComponent.ɵfac = function MerenderosComponent_Factory(t) {
  return new (t || MerenderosComponent)(i0.ɵɵdirectiveInject(i1.MerenderoServicio), i0.ɵɵdirectiveInject(i2.FlashMessagesService));
};
MerenderosComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: MerenderosComponent,
  selectors: [["app-merenderos"]],
  viewQuery: function MerenderosComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
      i0.ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.merenderoForm = _t.first);
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.botonCerrar = _t.first);
    }
  },
  decls: 124,
  vars: 45,
  consts: [["id", "actions", 1, "py-4", "mb-4", "bg-light"], [1, "container"], [1, "row"], [1, "col-md-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#agregarMerenderoModal", 1, "btn", "btn-primary", "btn-block"], [1, "fas", "fa-plus"], [1, "col-md-6"], ["type", "text", "placeholder", "Buscar merenderos...", "required", "", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"], [1, "fa", "fa-search"], ["id", "merenderos"], [1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "table", "table-striped"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "card", "text-center", "bg-success", "text-white", "mb-3"], [1, "card-body"], [1, "display-4"], [1, "fas", "fa-house"], ["id", "agregarMerenderoModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], ["data-bs-dismiss", "modal", 1, "close"], ["botonCerrar", ""], [3, "ngSubmit"], ["merenderoForm", "ngForm"], [1, "modal-body"], [1, "form-group"], ["for", "nombre"], ["type", "text", "name", "nombre", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombre", "ngModel"], [1, "invalid-feedback", 3, "hidden"], ["for", "direccion"], ["type", "text", "name", "direccion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["direccion", "ngModel"], ["for", "nombreRes"], ["type", "text", "name", "nombreRes", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["nombreRes", "ngModel"], ["for", "dni"], ["type", "text", "name", "dni", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["dni", "ngModel"], ["for", "numTelefono"], ["type", "text", "name", "numTelefono", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["numTelefono", "ngModel"], ["for", "diahorarioCocina"], ["type", "text", "name", "diahorarioCocina", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["diahorarioCocina", "ngModel"], ["for", "ubicacion"], ["type", "text", "name", "ubicacion", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["ubicacion", "ngModel"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "fas", "fa-angle-double-right"]],
  template: function MerenderosComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r12 = i0.ɵɵgetCurrentView();
      i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      i0.ɵɵelement(5, "i", 5);
      i0.ɵɵtext(6, "Agregar Merendero ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelementStart(7, "div", 1)(8, "div", 2)(9, "div", 6)(10, "input", 7);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.busqueda = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵtext(11, " \u00A0 ");
      i0.ɵɵelementStart(12, "button", 8);
      i0.ɵɵlistener("click", function MerenderosComponent_Template_button_click_12_listener() {
        return ctx.buscar();
      });
      i0.ɵɵelement(13, "i", 9);
      i0.ɵɵtext(14, "Buscar ");
      i0.ɵɵelementEnd()()()();
      i0.ɵɵelement(15, "hr");
      i0.ɵɵelementStart(16, "section", 10)(17, "div", 1)(18, "div", 2)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "h4");
      i0.ɵɵtext(23, "Listado de Merenderos");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(24, "table", 14)(25, "thead", 15)(26, "tr")(27, "th");
      i0.ɵɵtext(28, "#");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(29, "th");
      i0.ɵɵtext(30, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(31, "th");
      i0.ɵɵtext(32, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelement(33, "th");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(34, "tbody");
      i0.ɵɵtemplate(35, MerenderosComponent_tr_35_Template, 15, 5, "tr", 16);
      i0.ɵɵelementEnd()()()();
      i0.ɵɵelementStart(36, "div", 3)(37, "div", 17)(38, "div", 18)(39, "h3");
      i0.ɵɵtext(40, "Total Merenderos");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(41, "h4", 19);
      i0.ɵɵelement(42, "i", 20);
      i0.ɵɵtext(43);
      i0.ɵɵelementEnd()()()()()()();
      i0.ɵɵelementStart(44, "div", 21)(45, "div", 22)(46, "div", 23)(47, "div", 24)(48, "h5", 25);
      i0.ɵɵtext(49, "Agregar Merendero");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(50, "button", 26, 27)(52, "span");
      i0.ɵɵtext(53, "\u00D7");
      i0.ɵɵelementEnd()()();
      i0.ɵɵelement(54, "flash-messages");
      i0.ɵɵelementStart(55, "form", 28, 29);
      i0.ɵɵlistener("ngSubmit", function MerenderosComponent_Template_form_ngSubmit_55_listener() {
        i0.ɵɵrestoreView(_r12);
        const _r2 = i0.ɵɵreference(56);
        return i0.ɵɵresetView(ctx.agregarMerendero(_r2));
      });
      i0.ɵɵelementStart(57, "div", 30)(58, "div", 31)(59, "label", 32);
      i0.ɵɵtext(60, "Nombre");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(61, "input", 33, 34);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx.merendero.nombre = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(63, "div", 35);
      i0.ɵɵtext(64, " Nombre requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(65, "div", 35);
      i0.ɵɵtext(66, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(67, "div", 31)(68, "label", 36);
      i0.ɵɵtext(69, "Direcci\u00F3n");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(70, "input", 37, 38);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_70_listener($event) {
        return ctx.merendero.direccion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(72, "div", 35);
      i0.ɵɵtext(73, " Direccion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(74, "div", 35);
      i0.ɵɵtext(75, " Debe contener almenos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(76, "div", 31)(77, "label", 39);
      i0.ɵɵtext(78, "Nombre y Apellido del Responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(79, "input", 40, 41);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.merendero.nombreRes = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(81, "div", 35);
      i0.ɵɵtext(82, " Nombre de Responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(83, "div", 35);
      i0.ɵɵtext(84, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(85, "div", 31)(86, "label", 42);
      i0.ɵɵtext(87, "DNI del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(88, "input", 43, 44);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_88_listener($event) {
        return ctx.merendero.dni = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(90, "div", 35);
      i0.ɵɵtext(91, " DNI del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(92, "div", 35);
      i0.ɵɵtext(93, " Debe conrener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(94, "div", 31)(95, "label", 45);
      i0.ɵɵtext(96, "N\u00FAmero de telefono del responsable");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(97, "input", 46, 47);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_97_listener($event) {
        return ctx.merendero.numTelefono = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(99, "div", 35);
      i0.ɵɵtext(100, " Numero de telefono del responsable requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(101, "div", 35);
      i0.ɵɵtext(102, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(103, "div", 31)(104, "label", 48);
      i0.ɵɵtext(105, "D\u00EDas y horarios que realiza el almuerzo");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(106, "input", 49, 50);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_106_listener($event) {
        return ctx.merendero.diahorarioCocina = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(108, "div", 35);
      i0.ɵɵtext(109, " Dia y horario de cocina requerido ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(110, "div", 35);
      i0.ɵɵtext(111, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(112, "div", 31)(113, "label", 51);
      i0.ɵɵtext(114, "Agregue el link correspondiente a la ubicaci\u00F3n del Merendero (Formato https://)");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(115, "input", 52, 53);
      i0.ɵɵlistener("ngModelChange", function MerenderosComponent_Template_input_ngModelChange_115_listener($event) {
        return ctx.merendero.ubicacion = $event;
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(117, "div", 35);
      i0.ɵɵtext(118, " Ubicacion requerida ");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(119, "div", 35);
      i0.ɵɵtext(120, " Debe contener al menos 2 caracteres ");
      i0.ɵɵelementEnd()()();
      i0.ɵɵelementStart(121, "div", 54)(122, "button", 55);
      i0.ɵɵtext(123, "Guardar");
      i0.ɵɵelementEnd()()()()()();
    }
    if (rf & 2) {
      const _r3 = i0.ɵɵreference(62);
      const _r4 = i0.ɵɵreference(71);
      const _r5 = i0.ɵɵreference(80);
      const _r6 = i0.ɵɵreference(89);
      const _r7 = i0.ɵɵreference(98);
      const _r8 = i0.ɵɵreference(107);
      const _r9 = i0.ɵɵreference(116);
      i0.ɵɵadvance(10);
      i0.ɵɵproperty("ngModel", ctx.busqueda);
      i0.ɵɵadvance(25);
      i0.ɵɵproperty("ngForOf", ctx.merenderosFiltrados);
      i0.ɵɵadvance(8);
      i0.ɵɵtextInterpolate1(" ", ctx.merenderos == null ? null : ctx.merenderos.length, " ");
      i0.ɵɵadvance(18);
      i0.ɵɵproperty("ngModel", ctx.merendero.nombre)("ngClass", i0.ɵɵpureFunction1(31, _c2, _r3.errors && _r3.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r3.errors == null ? null : _r3.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.direccion)("ngClass", i0.ɵɵpureFunction1(33, _c2, _r4.errors && _r4.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r4.errors == null ? null : _r4.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.nombreRes)("ngClass", i0.ɵɵpureFunction1(35, _c2, _r5.errors && _r5.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r5.errors == null ? null : _r5.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.dni)("ngClass", i0.ɵɵpureFunction1(37, _c2, _r6.errors && _r6.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.numTelefono)("ngClass", i0.ɵɵpureFunction1(39, _c2, _r7.errors && _r7.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r7.errors == null ? null : _r7.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.diahorarioCocina)("ngClass", i0.ɵɵpureFunction1(41, _c2, _r8.errors && _r8.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r8.errors == null ? null : _r8.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r6.errors == null ? null : _r6.errors["minlength"]));
      i0.ɵɵadvance(5);
      i0.ɵɵproperty("ngModel", ctx.merendero.ubicacion)("ngClass", i0.ɵɵpureFunction1(43, _c2, _r9.errors && _r9.touched));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["required"]));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("hidden", !(_r9.errors == null ? null : _r9.errors["minlength"]));
    }
  },
  dependencies: [i3.NgClass, i3.NgForOf, i4.RouterLink, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.NgModel, i5.NgForm, i2.FlashMessagesComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.MerenderosComponent = MerenderosComponent;

/***/ }),

/***/ 95885:
/*!**********************************************************************!*\
  !*** ./src/app/componentes/no-encontrado/no-encontrado.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoEncontradoComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
class NoEncontradoComponent {}
NoEncontradoComponent.ɵfac = function NoEncontradoComponent_Factory(t) {
  return new (t || NoEncontradoComponent)();
};
NoEncontradoComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: NoEncontradoComponent,
  selectors: [["app-no-encontrado"]],
  decls: 2,
  vars: 0,
  template: function NoEncontradoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "p");
      i0.ɵɵtext(1, "no-encontrado works!");
      i0.ɵɵelementEnd();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.NoEncontradoComponent = NoEncontradoComponent;

/***/ }),

/***/ 5990:
/*!****************************************************************!*\
  !*** ./src/app/componentes/pie-pagina/pie-pagina.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PiePaginaComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
class PiePaginaComponent {}
PiePaginaComponent.ɵfac = function PiePaginaComponent_Factory(t) {
  return new (t || PiePaginaComponent)();
};
PiePaginaComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: PiePaginaComponent,
  selectors: [["app-pie-pagina"]],
  decls: 6,
  vars: 0,
  consts: [["id", "pie-pagina", 1, "bg-success", "text-white", "mt5", "p-5"], [1, "container"], [1, "row"], [1, "col"], [1, "lead", "text-center"]],
  template: function PiePaginaComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
      i0.ɵɵtext(5, " Copyright \u00A9 Direccion de Asistencia Social ");
      i0.ɵɵelementEnd()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.PiePaginaComponent = PiePaginaComponent;

/***/ }),

/***/ 21841:
/*!******************************************************************************!*\
  !*** ./src/app/componentes/tablero-comedores/tablero-comedores.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TableroComedoresComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! ../comedores/comedores.component */ 54211));
class TableroComedoresComponent {}
TableroComedoresComponent.ɵfac = function TableroComedoresComponent_Factory(t) {
  return new (t || TableroComedoresComponent)();
};
TableroComedoresComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: TableroComedoresComponent,
  selectors: [["app-tablero-comedores"]],
  decls: 8,
  vars: 0,
  consts: [["id", "main-header ", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "fas", "fa-cog"]],
  template: function TableroComedoresComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Asistencia a Comedores / Merenderos ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelement(7, "app-comedores");
    }
  },
  dependencies: [i1.ComedoresComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.TableroComedoresComponent = TableroComedoresComponent;

/***/ }),

/***/ 34530:
/*!******************************************************************************!*\
  !*** ./src/app/componentes/tablero-merendero/tablero-merendero.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TableroMerenderoComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! ../merenderos/Merenderos.component */ 47349));
class TableroMerenderoComponent {}
TableroMerenderoComponent.ɵfac = function TableroMerenderoComponent_Factory(t) {
  return new (t || TableroMerenderoComponent)();
};
TableroMerenderoComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: TableroMerenderoComponent,
  selectors: [["app-tablero-merendero"]],
  decls: 8,
  vars: 0,
  consts: [["id", "main-header ", 1, "py-2", "bg-success", "text-white"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "fas", "fa-cog"]],
  template: function TableroMerenderoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      i0.ɵɵelement(5, "i", 4);
      i0.ɵɵtext(6, " Control de Merenderos ");
      i0.ɵɵelementEnd()()()()();
      i0.ɵɵelement(7, "app-merenderos");
    }
  },
  dependencies: [i1.MerenderosComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
exports.TableroMerenderoComponent = TableroMerenderoComponent;

/***/ }),

/***/ 61549:
/*!******************************************!*\
  !*** ./src/app/guardianes/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const operators_1 = __webpack_require__(/*! rxjs/operators */ 61755);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 60124));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/fire/compat/auth */ 5873));
class AuthGuard {
  constructor(router, afAuth) {
    this.router = router;
    this.afAuth = afAuth;
  }
  canActivate() {
    return this.afAuth.authState.pipe((0, operators_1.map)(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AngularFireAuth));
};
AuthGuard.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});
exports.AuthGuard = AuthGuard;

/***/ }),

/***/ 27147:
/*!**********************************************!*\
  !*** ./src/app/servicios/comedor.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ComdeorServicio = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const operators_1 = __webpack_require__(/*! rxjs/operators */ 61755);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/fire/compat/firestore */ 92393));
class ComdeorServicio {
  //Metodo conectar base de datos
  constructor(db) {
    this.db = db;
    //recuperar coleccion de comedores
    this.comedoresColeccion = db.collection('comedores', ref => ref.orderBy('nombre', 'asc'));
  }
  //Método buscar
  buscarComedorPorNombre(nombre) {
    const queryFn = ref => ref.where('nombre', '>=', nombre).where('nombre', '<=', nombre + '\uf8ff');
    return this.db.collection('comedores', queryFn).valueChanges({
      idField: 'id'
    });
  }
  //Solicitud datos de comedores pidiendo id (regresa objeto de tipo comedor)
  getComedores() {
    //Obtener los comedores
    this.comedores = this.comedoresColeccion.snapshotChanges().pipe((0, operators_1.map)(cambios => {
      return cambios.map(accion => {
        const datos = accion.payload.doc.data();
        datos.id = accion.payload.doc.id;
        return datos;
      });
    }));
    return this.comedores;
  }
  agregarComedor(comedor) {
    this.comedoresColeccion.add(comedor);
  }
  getComedor(id) {
    //recuperar comedor de la base de datos
    this.comedorDoc = this.db.doc(`comedores/${id}`);
    //recuperar objeto tipo comedor (observable)
    return this.comedor = this.comedorDoc.snapshotChanges().pipe((0, operators_1.map)(accion => {
      if (accion.payload.exists === false) {
        return null;
      } else {
        const datos = accion.payload.data();
        datos.id = accion.payload.id;
        return datos;
      }
    }));
  }
  modificarComedor(comedor) {
    this.comedorDoc = this.db.doc(`comedores/${comedor.id}`);
    this.comedorDoc.update(comedor);
  }
  guardarDescripcion(id, descripcion) {
    console.log('LLamando a guardarDescripciopn() con los siguientes valores:');
    console.log('id:', id);
    console.log('descripcion:', descripcion);
    return this.db.collection('comedores').doc(id).set({
      descripcion: descripcion
    }, {
      merge: true
    }).then(() => {
      console.log('Descripción actualizada correctamente');
    }).catch(error => {
      console.error('Error al actualizar la descripción:', error);
      throw error;
    });
  }
  eliminarComedor(comedor) {
    this.comedorDoc = this.db.doc(`comedores/${comedor.id}`);
    this.comedorDoc.delete();
  }
}
ComdeorServicio.ɵfac = function ComdeorServicio_Factory(t) {
  return new (t || ComdeorServicio)(i0.ɵɵinject(i1.AngularFirestore));
};
ComdeorServicio.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: ComdeorServicio,
  factory: ComdeorServicio.ɵfac
});
exports.ComdeorServicio = ComdeorServicio;

/***/ }),

/***/ 94700:
/*!********************************************!*\
  !*** ./src/app/servicios/login.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoginService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const operators_1 = __webpack_require__(/*! rxjs/operators */ 61755);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/fire/compat/auth */ 5873));
class LoginService {
  constructor(authService) {
    this.authService = authService;
  }
  login(email, password) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, password).then(datos => resolve(datos), error => reject(error));
    });
  }
  getusuarioIdentificado() {
    return this.authService.authState.pipe((0, operators_1.map)(auth => auth));
  }
  logout() {
    this.authService.signOut();
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(i0.ɵɵinject(i1.AngularFireAuth));
};
LoginService.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: LoginService,
  factory: LoginService.ɵfac
});
exports.LoginService = LoginService;

/***/ }),

/***/ 47039:
/*!************************************************!*\
  !*** ./src/app/servicios/merendero.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MerenderoServicio = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const operators_1 = __webpack_require__(/*! rxjs/operators */ 61755);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 22560));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/fire/compat/firestore */ 92393));
class MerenderoServicio {
  //Metodo conectar base de datos
  constructor(db) {
    this.db = db;
    //recuperar coleccion de comedores
    this.merenderosColeccion = db.collection('merenderos', ref => ref.orderBy('nombre', 'asc'));
  }
  //Método buscar
  buscarComedorPorNombre(nombre) {
    const queryFn = ref => ref.where('nombre', '>=', nombre).where('nombre', '<=', nombre + '\uf8ff');
    return this.db.collection('merenderos', queryFn).valueChanges({
      idField: 'id'
    });
  }
  //Solicitud datos de merenderos pidiendo id (regresa objeto de tipo comedor)
  getMerenderos() {
    //Obtener los merenderos
    this.merenderos = this.merenderosColeccion.snapshotChanges().pipe((0, operators_1.map)(cambios => {
      return cambios.map(accion => {
        const datos = accion.payload.doc.data();
        datos.id = accion.payload.doc.id;
        return datos;
      });
    }));
    return this.merenderos;
  }
  agregarMerendero(merendero) {
    this.merenderosColeccion.add(merendero);
  }
  getMerendero(id) {
    //recuperar comedor de la base de datos
    this.merenderoDoc = this.db.doc(`merenderos/${id}`);
    //recuperar objeto tipo comedor (observable)
    return this.merendero = this.merenderoDoc.snapshotChanges().pipe((0, operators_1.map)(accion => {
      if (accion.payload.exists === false) {
        return null;
      } else {
        const datos = accion.payload.data();
        datos.id = accion.payload.id;
        return datos;
      }
    }));
  }
  modificarMerendero(merendero) {
    this.merenderoDoc = this.db.doc(`merenderos/${merendero.id}`);
    this.merenderoDoc.update(merendero);
  }
  eliminarMerendero(merendero) {
    this.merenderoDoc = this.db.doc(`merenderos/${merendero.id}`);
    this.merenderoDoc.delete();
  }
}
MerenderoServicio.ɵfac = function MerenderoServicio_Factory(t) {
  return new (t || MerenderoServicio)(i0.ɵɵinject(i1.AngularFirestore));
};
MerenderoServicio.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: MerenderoServicio,
  factory: MerenderoServicio.ɵfac
});
exports.MerenderoServicio = MerenderoServicio;

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.environment = void 0;
exports.environment = {
  production: true,
  firestore: {
    apiKey: 'AIzaSyAbidLdA7Rq73fImHXtAriJaPYQZxe8Q_w',
    authDomain: 'control-muni.firebaseapp.com',
    projectId: 'control-muni',
    storageBucket: 'control-muni.appspot.com',
    messagingSenderId: '842246795148',
    appId: '1:842246795148:web:d4acdb2128a50f52a2b0a9',
    measurementId: 'G-QF3L21F364'
  }
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ 34929);
const __NgCli_bootstrap_1 = tslib_1.__importStar(__webpack_require__(/*! @angular/platform-browser */ 34497));
const app_module_1 = __webpack_require__(/*! ./app/app.module */ 36747);
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map