webpackHotUpdate("static/development/pages/[proposal]/tree/[branch].js",{

/***/ "./components/ProposalPage.js":
/*!************************************!*\
  !*** ./components/ProposalPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries */ "./queries/index.js");

var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/ProposalPage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ProposalPage__Wrapper",
  componentId: "sc-1xdfroq-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
var Containter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ProposalPage__Containter",
  componentId: "sc-1xdfroq-1"
})(["font-size:18px;line-height:1.4;max-width:900px;padding:60px 20px 0;"]);

function Proposal(_ref) {
  var branches = _ref.branches,
      currentBranch = _ref.currentBranch,
      metadata = _ref.metadata,
      summary = _ref.summary,
      legal = _ref.legal;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleBranchSelect = function handleBranchSelect(e) {
    var selectedBranch = e.target.value;

    if (selectedBranch !== currentBranch) {
      if (selectedBranch !== "master") {
        router.push("/hello/tree/".concat(selectedBranch));
      } else {
        router.push("/hello");
      }
    }
  };

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(Containter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("select", {
    onChange: function onChange(e) {
      return handleBranchSelect(e);
    },
    defaultValue: currentBranch || "master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, branches.map(function (branch) {
    return __jsx("option", {
      key: branch.name,
      value: branch.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, branch.name);
  })), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, metadata.title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, metadata.description), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: legal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))));
}

Proposal.getInitialProps = function _callee(context) {
  var branches, currentBranch, metadata, summary, legal;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalBranches"])(1));

        case 2:
          branches = _context.sent;
          currentBranch = context.query.branch || "master";
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalMetadata"])(1, currentBranch));

        case 6:
          metadata = _context.sent;
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalSummary"])(1, currentBranch));

        case 9:
          summary = _context.sent;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalLegal"])(1, currentBranch));

        case 12:
          legal = _context.sent;
          return _context.abrupt("return", {
            branches: branches,
            currentBranch: currentBranch,
            metadata: metadata,
            summary: summary,
            legal: legal
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Proposal);

/***/ })

})
//# sourceMappingURL=[branch].js.e775207972a85dbeb75c.hot-update.js.map