webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils */ "./utils/index.js");







var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');\n\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  input, textarea {\n    border: 1px solid #ccc;\n    outline: none;\n  }\n\n  a {\n    color: #0366d6;\n    font-weight: 600;\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["createGlobalStyle"])(_templateObject());
/**
 * Where to send the user after they have signed in.
 */

var onRedirectCallback = function onRedirectCallback(appState) {
  if (appState && appState.returnTo) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push({
      pathname: appState.returnTo.pathname,
      query: appState.returnTo.query
    });
  }
};
/**
 * When it hasn't been possible to retrieve a new access token.
 * @param {Error} err
 * @param {AccessTokenRequestOptions} options
 */


var onAccessTokenError = function onAccessTokenError(err, options) {
  console.error('Failed to retrieve access token: ', err);
};
/**
 * When signing in fails for some reason, we want to show it here.
 * @param {Error} err
 */


var onLoginError = function onLoginError(err) {
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push({
    pathname: '/oops',
    query: {
      message: err.error_description || err.message
    }
  });
};
/**
 * When redirecting to the login page you'll end up in this state where the login page is still loading.
 * You can render a message to show that the user is being redirected.
 */


var onRedirecting = function onRedirecting() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Signing you in"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "In order to access this page you will need to sign in. Please wait while we redirect you to the login page..."));
};
/**
 * Create a page which wraps the Auth0 provider.
 */


var Root =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Root, _App);

  function Root() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Root);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Root).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apollo = _this$props.apollo;
      return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(GlobalStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_10__["Auth0Provider"], {
        domain: "dev-2j6nfuqr.auth0.com",
        clientId: "shF0wfybnqwA9C11cd77DtTjLO7AtJ1V",
        redirectUri: "http://localhost:3000/",
        onLoginError: onLoginError,
        onAccessTokenError: onAccessTokenError,
        onRedirecting: onRedirecting,
        onRedirectCallback: onRedirectCallback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_13__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))));
    }
  }]);

  return Root;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils__WEBPACK_IMPORTED_MODULE_14__["withApollo"])(Root));

/***/ })

})
//# sourceMappingURL=_app.js.2835d2e345e4b5348c76.hot-update.js.map