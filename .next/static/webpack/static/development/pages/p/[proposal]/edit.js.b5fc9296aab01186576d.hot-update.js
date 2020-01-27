webpackHotUpdate("static/development/pages/p/[proposal]/edit.js",{

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation CommitToBranch(\n    $proposalId: String!\n    $branchName: String!\n    $title: String!\n    $description: String!\n    $summary: String!\n    $legal: String!\n    $message: String!\n  ) {\n    createProposal(\n        proposalId: $proposalId\n        branchName: $branchName\n        title: $title\n        description: $description\n        summary: $summary\n        legal: $legal\n        message: $message\n    ) {\n      id\n      title\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var COMMIT_TO_BRANCH_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (COMMIT_TO_BRANCH_MUTATION);

/***/ })

})
//# sourceMappingURL=edit.js.b5fc9296aab01186576d.hot-update.js.map