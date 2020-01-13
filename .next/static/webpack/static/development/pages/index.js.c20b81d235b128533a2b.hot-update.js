webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Row.js":
/*!***************************!*\
  !*** ./components/Row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/Row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Row__Wrapper",
  componentId: "sc-3emxm7-0"
})(["border:1px solid red;display:flex;align-items:center;padding:20px;width:1005;"]);

function Row(_ref) {
  var children = _ref.children;
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["Children"]);
}

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: ContentContainer, Header, ProposalPage, RichTextEditor, Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentContainer */ "./components/ContentContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return _ContentContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProposalPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProposalPage */ "./components/ProposalPage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposalPage", function() { return _ProposalPage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichTextEditor */ "./components/RichTextEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditor", function() { return _RichTextEditor__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./components/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries */ "./queries/index.js");


var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var SubNav = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__SubNav",
  componentId: "kbnfey-0"
})(["display:flex;justify-content:space-between;align-items:center;height:100px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "kbnfey-1"
})(["line-height:1;margin:0;"]);
var CreateButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.withConfig({
  displayName: "pages__CreateButton",
  componentId: "kbnfey-2"
})(["border:none;background:#372237;border-radius:2px;color:white;font-size:18px;padding:12px;text-decoration:none;&:hover{cursor:pointer;}"]);

function Index(_ref) {
  var proposals = _ref.proposals;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_9__["PROPOSALS_QUERY"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Error: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(error));
  }

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(SubNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(CreateButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "New proposal"))), !loading && data && data.proposals.map(function (proposal) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Row"], {
      key: proposal.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/p/".concat(proposal.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, proposal.title)));
  })));
}

Index.getInitialProps = function _callee() {
  var proposals;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_9__["getProposals"])());

        case 2:
          proposals = _context.sent;
          return _context.abrupt("return", {
            proposals: proposals
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c20b81d235b128533a2b.hot-update.js.map