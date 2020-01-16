webpackHotUpdate("static/development/pages/p/[proposal]/commits/[branch].js",{

/***/ "./components/ProposalPage.js":
/*!************************************!*\
  !*** ./components/ProposalPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ */ "./components/index.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries */ "./queries/index.js");

var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/ProposalPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













function ProposalPage(_ref) {
  var auth = _ref.auth,
      query = _ref.query,
      sections = _ref.sections,
      currentSection = _ref.currentSection;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_11__["PROPOSAL_BY_SLUG_QUERY"], {
    variables: {
      slug: query.proposal,
      branchName: query.branch
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Loading...");
  }

  if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Error:", ' ', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(error));
  }

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var handleBranchSelect = function handleBranchSelect(selectedBranch) {
    if (selectedBranch !== query.branch) {
      if (selectedBranch !== 'master') {
        router.push("/p/".concat(query.proposal, "/branch/").concat(selectedBranch));
      } else {
        router.push("/p/".concat(query.proposal));
      }
    }
  };

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_9__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_9__["ProposalHeader"], {
    title: data.proposalBySlug.title,
    description: data.proposalBySlug.description,
    branches: data.proposalBySlug.branches,
    onBranchSelect: handleBranchSelect,
    currentBranch: query.branch || 'master',
    sections: sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: data.proposalBySlug.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: data.proposalBySlug.legal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
}

ProposalPage.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ProposalPage);

/***/ })

})
//# sourceMappingURL=[branch].js.cdab95aa885f85cc3920.hot-update.js.map