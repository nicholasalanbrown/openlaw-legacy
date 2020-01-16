webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/ProposalHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Sections = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ProposalHeader__Sections",
  componentId: "sc-1o47sgl-0"
})(["display:flex;padding:0;"]);
var SectionLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "ProposalHeader__SectionLink",
  componentId: "sc-1o47sgl-1"
})(["background:", ";color:", ";margin-right:16px;padding:8px;"], function (props) {
  return props.active ? '#0366d6' : 'none';
}, function (props) {
  return props.active ? 'white' : '#0366d6';
});

function ProposalHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      branches = _ref.branches,
      onBranchSelect = _ref.onBranchSelect,
      currentBranch = _ref.currentBranch,
      sections = _ref.sections;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, description), __jsx("select", {
    onChange: function onChange(e) {
      return onBranchSelect(e.target.value);
    },
    defaultValue: currentBranch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, branches.map(function (branch) {
    return __jsx("option", {
      key: branch,
      value: branch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, branch);
  })), __jsx(Sections, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, sections.map(function (section) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: section.href,
      key: section.label,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(SectionLink, {
      active: router.asPath === section.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, section.label));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProposalHeader);

/***/ })

})
//# sourceMappingURL=index.js.9d2b3ae089c75a0c2fd0.hot-update.js.map