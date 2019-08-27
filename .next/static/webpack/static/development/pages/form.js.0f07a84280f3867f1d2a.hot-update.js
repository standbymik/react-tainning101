webpackHotUpdate("static\\development\\pages\\form.js",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/form */ "./src/components/form/index.js");



var Form = function Form(props) {
  var page = props.page;
  var Route = _src_components_form__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty(page) ? page : 'DEFAULT';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, null);
};

Form.getInitialProps = function (_ref) {
  var query = _ref.query;
  var page = query.page;
  return {
    page: page
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Form);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/form")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=form.js.0f07a84280f3867f1d2a.hot-update.js.map