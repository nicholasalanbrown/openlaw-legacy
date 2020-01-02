webpackHotUpdate("static/development/pages/[proposal].js",{

/***/ "./queries/index.js":
/*!**************************!*\
  !*** ./queries/index.js ***!
  \**************************/
/*! exports provided: getProposalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalContent", function() { return getProposalContent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


var getProposalContent = function getProposalContent(gitlabProjectId) {
  var refName,
      res,
      _args = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProposalContent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          refName = _args.length > 1 && _args[1] !== undefined ? _args[1] : "master";
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat("http://127.0.0.1:30080/api/v4", "/projects/").concat(gitlabProjectId, "/repository/files/content%2Emd/raw?ref=").concat(refName)).then(function (response) {
            return console.log(response.text());
          }));

        case 3:
          res = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=[proposal].js.e337b18c5de8ca3e7d89.hot-update.js.map