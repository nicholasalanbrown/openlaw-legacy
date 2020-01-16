webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Nav",
  componentId: "p12jyt-0"
})(["border-bottom:1px solid #ccc;align-items:center;justify-content:space-between;display:flex;height:60px;padding:0 20px;width:100%;"]);
var AccountButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Header__AccountButton",
  componentId: "p12jyt-1"
})(["background:none;border:none;box-shadow:none;font-size:18px;outline:none;&:hover{cursor:pointer;text-decoration:underline;}"]);

function Header() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      pathname = _useRouter.pathname,
      query = _useRouter.query;

  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_4__["useAuth"])(),
      isAuthenticated = _useAuth.isAuthenticated,
      isLoading = _useAuth.isLoading,
      login = _useAuth.login,
      logout = _useAuth.logout;

  return __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Home")), !isLoading && (isAuthenticated ? __jsx(AccountButton, {
    onClick: function onClick() {
      return logout({
        returnTo: "http://localhost:3000/"
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Log out") : __jsx(AccountButton, {
    onClick: function onClick() {
      return login({
        appState: {
          returnTo: {
            pathname: pathname,
            query: query
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Log in")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.5e2a7e2c7c1f410af1db.hot-update.js.map