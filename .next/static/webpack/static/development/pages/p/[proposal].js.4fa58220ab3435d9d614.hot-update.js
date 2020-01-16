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



var SectionLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "ProposalHeader__SectionLink",
  componentId: "sc-1o47sgl-0"
})(["padding-right:16px;"]);

function ProposalHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      branches = _ref.branches,
      onBranchSelect = _ref.onBranchSelect,
      currentBranch = _ref.currentBranch,
      sections = _ref.sections;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, description), __jsx("select", {
    onChange: function onChange(e) {
      return onBranchSelect(e.target.value);
    },
    defaultValue: currentBranch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, branches.map(function (branch) {
    return __jsx("option", {
      key: branch,
      value: branch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, branch);
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, sections.map(function (section) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: section.href,
      key: section.label,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(SectionLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, section.label));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProposalHeader);

/***/ })

})
//# sourceMappingURL=[proposal].js.4fa58220ab3435d9d614.hot-update.js.map