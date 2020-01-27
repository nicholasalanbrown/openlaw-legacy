webpackHotUpdate("static/development/pages/p/[proposal].js",{

/***/ "./mutations/commitToBranch.mutation.js":
/*!**********************************************!*\
  !*** ./mutations/commitToBranch.mutation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation CommitToBranch(\n    $proposalId: String!\n    $branchName: String!\n    $title: String!\n    $description: String!\n    $summary: String!\n    $legal: String!\n    $message: String!\n  ) {\n    createProposal(\n        proposalId: $proposalId\n        branchName: $branchName\n        title: $title\n        description: $description\n        summary: $summary\n        legal: $legal\n        message: $message\n    ) {\n      id\n      title\n      branchName\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var COMMIT_TO_BRANCH_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (COMMIT_TO_BRANCH_MUTATION);

/***/ }),

/***/ "./mutations/index.js":
/*!****************************!*\
  !*** ./mutations/index.js ***!
  \****************************/
/*! exports provided: COMMIT_TO_BRANCH, CREATE_PROPOSAL_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commitToBranch_mutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commitToBranch.mutation */ "./mutations/commitToBranch.mutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMIT_TO_BRANCH", function() { return _commitToBranch_mutation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createProposal_mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProposal.mutation */ "./mutations/createProposal.mutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_PROPOSAL_MUTATION", function() { return _createProposal_mutation__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ })

})
//# sourceMappingURL=[proposal].js.377bd625adb063d43dd2.hot-update.js.map