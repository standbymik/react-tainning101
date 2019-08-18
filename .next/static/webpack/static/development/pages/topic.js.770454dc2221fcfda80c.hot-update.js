webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./src/components/listItem.js":
/*!************************************!*\
  !*** ./src/components/listItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ListItem = function ListItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      settitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      content = _useState4[0],
      setcontent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setname = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.topic),
      _useState8 = _slicedToArray(_useState7, 2),
      topicState = _useState8[0],
      settopicState = _useState8[1];

  var renderList = function renderList(topic) {
    return topicState.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "".concat(item.title, " - ").concat(item.content, " - ").concat(item.name));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderList()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.addListTopic
  }, "Click"));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addListTopic: function addListTopic() {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
}, mapDispatchToProps)(ListItem));

/***/ })

})
//# sourceMappingURL=topic.js.770454dc2221fcfda80c.hot-update.js.map