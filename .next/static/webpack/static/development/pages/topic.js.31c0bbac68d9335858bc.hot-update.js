webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./pages/topic.js":
/*!************************!*\
  !*** ./pages/topic.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_listItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/listItem */ "./src/components/listItem.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var Topic = function Topic(props) {
  var data = [{
    title: 'title1',
    content: 'content1',
    name: 'name1'
  }, {
    title: 'title2',
    content: 'content2',
    name: 'name2'
  }];
  props.addListTopic.apply(props, data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hello world", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_listItem__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addListTopic: function addListTopic(topic) {
      dispatch({
        type: 'ADD',
        topic: {
          title: 'title',
          content: 'content',
          name: 'name'
        }
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Topic));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/topic")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=topic.js.31c0bbac68d9335858bc.hot-update.js.map