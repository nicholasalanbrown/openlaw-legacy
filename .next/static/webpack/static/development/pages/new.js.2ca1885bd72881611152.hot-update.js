webpackHotUpdate("static/development/pages/new.js",{

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mutations */ "./mutations/index.js");

var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/pages/new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SubNav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "new__SubNav",
  componentId: "ic1kd1-0"
})(["display:flex;justify-content:space-between;align-items:center;height:100px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "new__Title",
  componentId: "ic1kd1-1"
})(["line-height:1;margin:0;"]);
var CreateButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "new__CreateButton",
  componentId: "ic1kd1-2"
})(["border:none;background:#372237;border-radius:2px;color:white;font-size:18px;padding:10px;&:hover{cursor:pointer;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "new__Form",
  componentId: "ic1kd1-3"
})(["padding:40px 0;"]);
var TitleInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "new__TitleInput",
  componentId: "ic1kd1-4"
})(["font-size:18px;padding:12px 10px;width:100%;"]);
var DescriptionInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].textarea.withConfig({
  displayName: "new__DescriptionInput",
  componentId: "ic1kd1-5"
})(["font-size:18px;margin-top:30px;resize:none;padding:12px 10px;width:100%;"]);
var SummaryInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components__WEBPACK_IMPORTED_MODULE_5__["RichTextEditor"]).withConfig({
  displayName: "new__SummaryInput",
  componentId: "ic1kd1-6"
})(["font-size:18px;margin-top:30px;"]);
var LegalInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components__WEBPACK_IMPORTED_MODULE_5__["RichTextEditor"]).withConfig({
  displayName: "new__LegalInput",
  componentId: "ic1kd1-7"
})(["font-size:18px;margin-top:30px;"]);

function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      summary = _useState3[0],
      setSummary = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      legal = _useState4[0],
      setLegal = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_mutations__WEBPACK_IMPORTED_MODULE_6__["CREATE_PROPOSAL_MUTATION"], {
    onCompleted: function onCompleted() {
      console.log("completed!");
    }
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      createProposal = _useMutation2[0],
      data = _useMutation2[1].data;

  var handleSubmit = function handleSubmit() {
    createProposal({
      variables: {
        title: title,
        description: description,
        summary: summary,
        legal: legal
      }
    });
  };

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(SubNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "New Proposal"), __jsx(CreateButton, {
    onClick: function onClick() {
      return handleSubmit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Create")), __jsx(Form, {
    onSubmit: function onSubmit() {
      return handleSubmit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(TitleInput, {
    placeholder: "Title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
      lineNumber: 94
    },
    __self: this
  }), __jsx(SummaryInput, {
    placeholder: "Summary",
    onChange: setSummary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(LegalInput, {
    placeholder: "Legal",
    onChange: setLegal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })

})
//# sourceMappingURL=new.js.2ca1885bd72881611152.hot-update.js.map