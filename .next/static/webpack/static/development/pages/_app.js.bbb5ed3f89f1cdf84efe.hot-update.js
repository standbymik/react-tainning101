webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/reducers/topicReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/topicReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var topic = action.topic;

  switch (action.type) {
    case 'ADD':
      return [].concat(_toConsumableArray(state), _toConsumableArray(topic));

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.bbb5ed3f89f1cdf84efe.hot-update.js.map