webpackHotUpdate("static/development/pages/new.js",{

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SubNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "new__SubNav",
  componentId: "ic1kd1-0"
})(["display:flex;justify-content:space-between;align-items:center;height:100px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "new__Title",
  componentId: "ic1kd1-1"
})(["line-height:1;margin:0;"]);
var CreateButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "new__CreateButton",
  componentId: "ic1kd1-2"
})(["border:none;background:#372237;border-radius:2px;color:white;font-size:18px;padding:10px;&:hover{cursor:pointer;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "new__Form",
  componentId: "ic1kd1-3"
})(["padding:40px 0;"]);
var TitleInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "new__TitleInput",
  componentId: "ic1kd1-4"
})(["font-size:18px;padding:12px 10px;width:100%;"]);
var DescriptionInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "new__DescriptionInput",
  componentId: "ic1kd1-5"
})(["font-size:18px;margin-top:30px;resize:none;padding:12px 10px;width:100%;"]);
var SummaryInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components__WEBPACK_IMPORTED_MODULE_3__["RichTextEditor"]).withConfig({
  displayName: "new__SummaryInput",
  componentId: "ic1kd1-6"
})(["font-size:18px;margin-top:30px;"]);
var LegalInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components__WEBPACK_IMPORTED_MODULE_3__["RichTextEditor"]).withConfig({
  displayName: "new__LegalInput",
  componentId: "ic1kd1-7"
})(["font-size:18px;margin-top:30px;"]);

function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      summary = _useState3[0],
      setSummary = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      legal = _useState4[0],
      setLegal = _useState4[1];

  console.log(title);
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(SubNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "New Proposal"), __jsx(CreateButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Create")), __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(TitleInput, {
    placeholder: "Title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(DescriptionInput, {
    placeholder: "Description",
    rows: 4,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(SummaryInput, {
    placeholder: "Summary",
    onChange: setSummary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(LegalInput, {
    placeholder: "Legal",
    onChange: setLegal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })

})
//# sourceMappingURL=new.js.fa738a304c41466a5c11.hot-update.js.map