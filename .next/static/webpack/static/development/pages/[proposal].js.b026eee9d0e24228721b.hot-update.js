webpackHotUpdate("static/development/pages/[proposal].js",{

/***/ "./pages/[proposal].js":
/*!*****************************!*\
  !*** ./pages/[proposal].js ***!
  \*****************************/
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
/* harmony import */ var _layouts_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/MyLayout */ "./layouts/MyLayout.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries */ "./queries/index.js");

var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/[proposal].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Proposal(_ref) {
  var content = _ref.content;
  return __jsx(_layouts_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Content"));
}

Proposal.getInitialProps = function _callee(context) {
  var content;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_4__["getProposalContent"])(1));

        case 2:
          content = _context.sent;
          console.log(content);
          return _context.abrupt("return", {
            content: content
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Proposal);

/***/ })

})
//# sourceMappingURL=[proposal].js.b026eee9d0e24228721b.hot-update.js.map