webpackHotUpdate("static/development/pages/[proposal].js",{

/***/ "./queries/index.js":
/*!**************************!*\
  !*** ./queries/index.js ***!
  \**************************/
/*! exports provided: getProposalMetadata, getProposalSummary, getProposalLegal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalMetadata", function() { return getProposalMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalSummary", function() { return getProposalSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalLegal", function() { return getProposalLegal; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


var getProposalMetadata = function getProposalMetadata(gitlabProjectId) {
  var refName,
      res,
      _args = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProposalMetadata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          refName = _args.length > 1 && _args[1] !== undefined ? _args[1] : "master";
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat("http://127.0.0.1:30080/api/v4", "/projects/").concat(gitlabProjectId, "/repository/files/metadata%2Ejson/raw?ref=").concat(refName)).then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          }));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
var getProposalSummary = function getProposalSummary(gitlabProjectId) {
  var refName,
      res,
      _args2 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProposalSummary$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          refName = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "master";
          _context2.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat("http://127.0.0.1:30080/api/v4", "/projects/").concat(gitlabProjectId, "/repository/files/summary%2Emd/raw?ref=").concat(refName)).then(function (response) {
            return response.text();
          }).then(function (data) {
            return data;
          }));

        case 3:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};
var getProposalLegal = function getProposalLegal(gitlabProjectId) {
  var refName,
      res,
      _args3 = arguments;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProposalLegal$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          refName = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "master";
          _context3.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat("http://127.0.0.1:30080/api/v4", "/projects/").concat(gitlabProjectId, "/repository/files/legal%2Emd/raw?ref=").concat(refName)).then(function (response) {
            return response.text();
          }).then(function (data) {
            return data;
          }));

        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=[proposal].js.bafa9f8c9959d21f9c5b.hot-update.js.map