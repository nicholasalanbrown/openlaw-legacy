webpackHotUpdate("static/development/pages/p/[proposal]/commits/[branch].js",{

/***/ "./pages/p/[proposal]/commits/[branch].js":
/*!************************************************!*\
  !*** ./pages/p/[proposal]/commits/[branch].js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./components/index.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../queries */ "./queries/index.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/p/[proposal]/commits/[branch].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Commits(_ref) {
  var query = _ref.query;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_6__["PROPOSAL_BY_SLUG_QUERY"], {
    variables: {
      slug: query.proposal,
      branchName: query.branch
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["ProposalHeader"], {
    title: data.proposalBySlug.title,
    description: data.proposalBySlug.description,
    branches: data.proposalBySlug.branches,
    currentBranch: query.branch || 'master',
    sections: [{
      label: 'Content',
      href: "/p/".concat(query.proposal)
    }, {
      label: 'Commits',
      href: "/p/".concat(query.proposal, "/commits")
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), !loading && data && data.proposalBySlug.commits.map(function (commit) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      key: commit.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, commit.title);
  })));
}

Commits.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Commits);

/***/ })

})
//# sourceMappingURL=[branch].js.19202c9490c234e8513a.hot-update.js.map