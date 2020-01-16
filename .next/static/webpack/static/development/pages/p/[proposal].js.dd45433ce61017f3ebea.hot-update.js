webpackHotUpdate("static/development/pages/p/[proposal].js",{

/***/ "./pages/p/[proposal]/index.js":
/*!*************************************!*\
  !*** ./pages/p/[proposal]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/p/[proposal]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MainProposalPage = function MainProposalPage(_ref) {
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
      lineNumber: 5
    },
    __self: this
  });
};

MainProposalPage.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MainProposalPage);

/***/ })

})
//# sourceMappingURL=[proposal].js.dd45433ce61017f3ebea.hot-update.js.map