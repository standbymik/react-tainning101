webpackHotUpdate("static\\development\\pages\\form.js",{

/***/ "./src/components/form/add.js":
/*!************************************!*\
  !*** ./src/components/form/add.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var add = function add() {
  var data = {
    UID: 1,
    username: 'standbymik',
    password: '123456',
    created_time: null
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.username),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setusername = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.password),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setpassword = _useState4[1];

  var submitForm = function submitForm() {
    console.log(username, password);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "username : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: username,
    onChange: function onChange(e) {
      return setusername(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "password : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: password,
    onChange: function onChange(e) {
      return setpassword(e.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: submitForm
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"));
};

/* harmony default export */ __webpack_exports__["default"] = (add);

/***/ })

})
//# sourceMappingURL=form.js.38689fbae0bdf1c943c3.hot-update.js.map