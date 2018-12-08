webpackHotUpdate("main",{

/***/ "./client/src/Components/Signup.js":
/*!*****************************************!*\
  !*** ./client/src/Components/Signup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Signup =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup(props) {\n    var _this;\n\n    _classCallCheck(this, Signup);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleChange\", function (e, prop) {\n      var newState = _objectSpread({}, _this.setState);\n\n      newState[prop] = e.target.value;\n\n      _this.setState(newState);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSignup\", function () {\n      var options = {\n        data: _this.state\n      };\n      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/signup\", _this.state);\n    });\n\n    _this.state = {\n      name: \"\",\n      email: \"\",\n      password: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(Signup, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // TODO: Update state when user changes the input forms\n      var _this$state = this.state,\n          name = _this$state.name,\n          email = _this$state.email,\n          password = _this$state.password; // TODO: When a user clicks submit, send a post request\n      // to our server with the user data\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Signup\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter Your Name...\",\n        value: name,\n        onChange: function onChange(e) {\n          return _this2.handleChange(e, \"name\");\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter Your Email Address...\",\n        value: email,\n        onChange: function onChange(e) {\n          return _this2.handleChange(e, \"email\");\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"password\",\n        placeholder: \"Enter Your Password...\",\n        value: password,\n        onChange: function onChange(e) {\n          return _this2.handleChange(e, \"password\");\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Signup\"));\n    }\n  }]);\n\n  return Signup;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./client/src/Components/Signup.js?");

/***/ })

})