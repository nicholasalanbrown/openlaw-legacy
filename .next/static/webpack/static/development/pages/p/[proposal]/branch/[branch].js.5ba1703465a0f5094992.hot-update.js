webpackHotUpdate("static/development/pages/p/[proposal]/branch/[branch].js",{

/***/ "./pages/p/[proposal]/branch/[branch].js":
/*!***********************************************!*\
  !*** ./pages/p/[proposal]/branch/[branch].js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components */ "./components/index.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/p/[proposal]/branch/[branch].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BranchProposalPage = function BranchProposalPage(_ref) {
  var query = _ref.query;
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ProposalPage"], {
    query: query,
    sections: [{
      label: 'Content',
      href: "/p/".concat(query.proposal)
    }, {
      label: 'Commits',
      href: "/p/".concat(query.proposal, "/commits/master")
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

BranchProposalPage.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BranchProposalPage);

/***/ })

})
//# sourceMappingURL=[branch].js.5ba1703465a0f5094992.hot-update.js.map