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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries */ "./queries/index.js");


var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/[proposal].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 18px;\n  line-height: 1.4;\n  max-width: 900px;\n  padding: 60px 20px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var Containter = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());

function Proposal(_ref) {
  var metadata = _ref.metadata,
      summary = _ref.summary;
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Containter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, metadata.title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, metadata.description), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: summary,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
}

Proposal.getInitialProps = function _callee(context) {
  var metadata, summary;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalMetadata"])(1));

        case 2:
          metadata = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_queries__WEBPACK_IMPORTED_MODULE_7__["getProposalSummary"])(1));

        case 5:
          summary = _context.sent;
          return _context.abrupt("return", {
            metadata: metadata,
            summary: summary
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Proposal);

/***/ }),

/***/ "./queries/index.js":
/*!**************************!*\
  !*** ./queries/index.js ***!
  \**************************/
/*! exports provided: getProposalMetadata, getProposalSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalMetadata", function() { return getProposalMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposalSummary", function() { return getProposalSummary; });
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

/***/ })

})
//# sourceMappingURL=[proposal].js.b2e714a4731fe890c44f.hot-update.js.map