webpackHotUpdate("static/development/pages/p/[proposal]/branch/[branch].js",{

/***/ "./components/RIchTextEditor.js":
/*!**************************************!*\
  !*** ./components/RIchTextEditor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/RIchTextEditor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledEditable = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"]).withConfig({
  displayName: "RIchTextEditor__StyledEditable",
  componentId: "xyai8j-0"
})(["border:1px solid #ccc;margin-top:30px;padding:12px 8px;&:placeholder{color:#757575;opacity:1 !important;}"]);

var RichTextEditor = function RichTextEditor(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      initialValue = _ref.initialValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    children: [{
      text: initialValue
    }]
  }]),
      value = _useState[0],
      setValue = _useState[1];

  var serialize = function serialize(nodes) {
    return nodes.map(function (n) {
      return slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(n);
    }).join("\n");
  };

  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(serialize(value));
    }

    setValue(value);
  };

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return handleChange(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(StyledEditable, {
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ }),

/***/ "./components/RichTextEditor.js":
/*!**************************************!*\
  !*** ./components/RichTextEditor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/RichTextEditor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledEditable = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"]).withConfig({
  displayName: "RichTextEditor__StyledEditable",
  componentId: "qlh8hx-0"
})(["border:1px solid #ccc;margin-top:30px;padding:12px 8px;&:placeholder{color:#757575;opacity:1 !important;}"]);

var RichTextEditor = function RichTextEditor(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      initialValue = _ref.initialValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    children: [{
      text: initialValue
    }]
  }]),
      value = _useState[0],
      setValue = _useState[1];

  var serialize = function serialize(nodes) {
    return nodes.map(function (n) {
      return slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(n);
    }).join("\n");
  };

  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(serialize(value));
    }

    setValue(value);
  };

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return handleChange(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(StyledEditable, {
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ })

})
//# sourceMappingURL=[branch].js.9118cf6852c9dcb5e8ac.hot-update.js.map