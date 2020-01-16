webpackHotUpdate("static/development/pages/p/[proposal].js",{

/***/ "./components/ProposalHeader.js":
/*!**************************************!*\
  !*** ./components/ProposalHeader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/ProposalHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProposalHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      onBranchSelect = _ref.onBranchSelect,
      currentBranch = _ref.currentBranch;
  var branches = ['maste'];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description), __jsx("select", {
    onChange: function onChange(e) {
      return onBranchSelect(e.target.value);
    },
    defaultValue: currentBranch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, branches.map(function (branch) {
    return __jsx("option", {
      key: branch,
      value: branch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, branch);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProposalHeader);

/***/ })

})
//# sourceMappingURL=[proposal].js.2dd69fa26348b20c1909.hot-update.js.map