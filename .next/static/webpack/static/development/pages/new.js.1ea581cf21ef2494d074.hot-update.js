webpackHotUpdate("static/development/pages/new.js",{

/***/ "./components/RichTextEditor.js":
/*!**************************************!*\
  !*** ./components/RichTextEditor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
var _jsxFileName = "/Users/nicholasbrown/Source/openlaw/components/RichTextEditor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var RichTextEditor = function RichTextEditor() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    placeholder: "Enter some plain text...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var initialValue = [{
  children: [{
    text: "This is editable plain text, just like a <textarea>!"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: ContentContainer, Header, ProposalPage, RichTextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentContainer */ "./components/ContentContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return _ContentContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProposalPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProposalPage */ "./components/ProposalPage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposalPage", function() { return _ProposalPage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichTextEditor */ "./components/RichTextEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditor", function() { return _RichTextEditor__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/compute-scroll-into-view/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/es/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isElement(el) {
  return el != null && typeof el === 'object' && el.nodeType === 1;
}

function canOverflow(overflow, skipOverflowHiddenElements) {
  if (skipOverflowHiddenElements && overflow === 'hidden') {
    return false;
  }

  return overflow !== 'visible' && overflow !== 'clip';
}

function getFrameElement(el) {
  if (!el.ownerDocument || !el.ownerDocument.defaultView) {
    return null;
  }

  return el.ownerDocument.defaultView.frameElement;
}

function isHiddenByFrame(el) {
  var frame = getFrameElement(el);

  if (!frame) {
    return false;
  }

  return frame.clientHeight < el.scrollHeight || frame.clientWidth < el.scrollWidth;
}

function isScrollable(el, skipOverflowHiddenElements) {
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    var style = getComputedStyle(el, null);
    return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements) || isHiddenByFrame(el);
  }

  return false;
}

function alignNearest(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
  if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
    return 0;
  }

  if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
    return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
  }

  if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
    return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
  }

  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function (target, options) {
  var scrollMode = options.scrollMode,
      block = options.block,
      inline = options.inline,
      boundary = options.boundary,
      skipOverflowHiddenElements = options.skipOverflowHiddenElements;
  var checkBoundary = typeof boundary === 'function' ? boundary : function (node) {
    return node !== boundary;
  };

  if (!isElement(target)) {
    throw new TypeError('Invalid target');
  }

  var scrollingElement = document.scrollingElement || document.documentElement;
  var frames = [];
  var cursor = target;

  while (isElement(cursor) && checkBoundary(cursor)) {
    cursor = cursor.parentNode;

    if (cursor === scrollingElement) {
      frames.push(cursor);
      break;
    }

    if (cursor === document.body && isScrollable(cursor) && !isScrollable(document.documentElement)) {
      continue;
    }

    if (isScrollable(cursor, skipOverflowHiddenElements)) {
      frames.push(cursor);
    }
  }

  var viewportWidth = window.visualViewport ? visualViewport.width : innerWidth;
  var viewportHeight = window.visualViewport ? visualViewport.height : innerHeight;
  var viewportX = window.scrollX || pageXOffset;
  var viewportY = window.scrollY || pageYOffset;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      targetHeight = _target$getBoundingCl.height,
      targetWidth = _target$getBoundingCl.width,
      targetTop = _target$getBoundingCl.top,
      targetRight = _target$getBoundingCl.right,
      targetBottom = _target$getBoundingCl.bottom,
      targetLeft = _target$getBoundingCl.left;

  var targetBlock = block === 'start' || block === 'nearest' ? targetTop : block === 'end' ? targetBottom : targetTop + targetHeight / 2;
  var targetInline = inline === 'center' ? targetLeft + targetWidth / 2 : inline === 'end' ? targetRight : targetLeft;
  var computations = [];

  for (var index = 0; index < frames.length; index++) {
    var frame = frames[index];

    var _frame$getBoundingCli = frame.getBoundingClientRect(),
        height = _frame$getBoundingCli.height,
        width = _frame$getBoundingCli.width,
        top = _frame$getBoundingCli.top,
        right = _frame$getBoundingCli.right,
        bottom = _frame$getBoundingCli.bottom,
        left = _frame$getBoundingCli.left;

    if (scrollMode === 'if-needed' && targetTop >= 0 && targetLeft >= 0 && targetBottom <= viewportHeight && targetRight <= viewportWidth && targetTop >= top && targetBottom <= bottom && targetLeft >= left && targetRight <= right) {
      return computations;
    }

    var frameStyle = getComputedStyle(frame);
    var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
    var borderTop = parseInt(frameStyle.borderTopWidth, 10);
    var borderRight = parseInt(frameStyle.borderRightWidth, 10);
    var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
    var blockScroll = 0;
    var inlineScroll = 0;
    var scrollbarWidth = 'offsetWidth' in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
    var scrollbarHeight = 'offsetHeight' in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;

    if (scrollingElement === frame) {
      if (block === 'start') {
        blockScroll = targetBlock;
      } else if (block === 'end') {
        blockScroll = targetBlock - viewportHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - viewportHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline;
      } else if (inline === 'center') {
        inlineScroll = targetInline - viewportWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - viewportWidth;
      } else {
        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
      }

      blockScroll = Math.max(0, blockScroll + viewportY);
      inlineScroll = Math.max(0, inlineScroll + viewportX);
    } else {
      if (block === 'start') {
        blockScroll = targetBlock - top - borderTop;
      } else if (block === 'end') {
        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(top, bottom, height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - (top + height / 2) + scrollbarHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline - left - borderLeft;
      } else if (inline === 'center') {
        inlineScroll = targetInline - (left + width / 2) + scrollbarWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
      } else {
        inlineScroll = alignNearest(left, right, width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
      }

      var scrollLeft = frame.scrollLeft,
          scrollTop = frame.scrollTop;
      blockScroll = Math.max(0, Math.min(scrollTop + blockScroll, frame.scrollHeight - height + scrollbarHeight));
      inlineScroll = Math.max(0, Math.min(scrollLeft + inlineScroll, frame.scrollWidth - width + scrollbarWidth));
      targetBlock += scrollTop - blockScroll;
      targetInline += scrollLeft - inlineScroll;
    }

    computations.push({
      el: frame,
      top: blockScroll,
      left: inlineScroll
    });
  }

  return computations;
});

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = direction

var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC'
var LTR =
  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF'

var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')

function direction(value) {
  value = String(value || '')

  if (rtl.test(value)) {
    return 'rtl'
  }

  if (ltr.test(value)) {
    return 'ltr'
  }

  return 'neutral'
}


/***/ }),

/***/ "./node_modules/esrever/esrever.js":
/*!*****************************************!*\
  !*** ./node_modules/esrever/esrever.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/esrever v0.2.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports =  true && exports;

	// Detect free variable `module`
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
	var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

	var reverse = function(string) {
		// Step 1: deal with combining marks and astral symbols (surrogate pairs)
		string = string
			// Swap symbols with their combining marks so the combining marks go first
			.replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
				// Reverse the combining marks so they will end up in the same order
				// later on (after another round of reversing)
				return reverse($2) + $1;
			})
			// Swap high and low surrogates so the low surrogates go first
			.replace(regexSurrogatePair, '$2$1');
		// Step 2: reverse the code units in the string
		var result = '';
		var index = string.length;
		while (index--) {
			result += string.charAt(index);
		}
		return result;
	};

	/*--------------------------------------------------------------------------*/

	var esrever = {
		'version': '0.2.0',
		'reverse': reverse
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return esrever;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: default, Immer, applyPatches, createDraft, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return Immer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return createDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return finishDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return DRAFTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return isDraftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return produceWithPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
// Should be no imports here!
var _a; // SOme things that should be evaluated before all else...


var hasSymbol = typeof Symbol !== "undefined";
var hasMap = typeof Map !== "undefined";
var hasSet = typeof Set !== "undefined";
/**
 * The sentinel value returned by producers to replace the draft with undefined.
 */

var NOTHING = hasSymbol ? Symbol("immer-nothing") : (_a = {}, _a["immer-nothing"] = true, _a);
/**
 * To let Immer treat your class instances as plain immutable objects
 * (albeit with a custom prototype), you must define either an instance property
 * or a static property on each of your custom classes.
 *
 * Otherwise, your class instance will never be drafted, which means it won't be
 * safe to mutate in a produce callback.
 */

var DRAFTABLE = hasSymbol ? Symbol("immer-draftable") : "__$immer_draftable";
var DRAFT_STATE = hasSymbol ? Symbol("immer-state") : "__$immer_state";
var iteratorSymbol = hasSymbol ? Symbol.iterator : "@@iterator";

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
  };

  return extendStatics(d, b);
}; // Ugly hack to resolve #502 and inherit built in Map / Set


function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = ( // @ts-ignore
  __.prototype = b.prototype, new __());
}

var Archtype;

(function (Archtype) {
  Archtype[Archtype["Object"] = 0] = "Object";
  Archtype[Archtype["Array"] = 1] = "Array";
  Archtype[Archtype["Map"] = 2] = "Map";
  Archtype[Archtype["Set"] = 3] = "Set";
})(Archtype || (Archtype = {}));

var ProxyType;

(function (ProxyType) {
  ProxyType[ProxyType["ProxyObject"] = 0] = "ProxyObject";
  ProxyType[ProxyType["ProxyArray"] = 1] = "ProxyArray";
  ProxyType[ProxyType["ES5Object"] = 2] = "ES5Object";
  ProxyType[ProxyType["ES5Array"] = 3] = "ES5Array";
  ProxyType[ProxyType["Map"] = 4] = "Map";
  ProxyType[ProxyType["Set"] = 5] = "Set";
})(ProxyType || (ProxyType = {}));

/** Returns true if the given value is an Immer draft */

function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
/** Returns true if the given value can be drafted by Immer */

function isDraftable(value) {
  if (!value) { return false; }
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE] || isMap(value) || isSet(value);
}
function isPlainObject(value) {
  if (!value || typeof value !== "object") { return false; }
  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}
/** Get the underlying object that is represented by the given draft */

function original(value) {
  if (value && value[DRAFT_STATE]) {
    return value[DRAFT_STATE].base;
  } // otherwise return undefined

}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function each(obj, iter) {
  if (getArchtype(obj) === Archtype.Object) {
    ownKeys(obj).forEach(function (key) {
      return iter(key, obj[key], obj);
    });
  } else {
    obj.forEach(function (entry, index) {
      return iter(index, entry, obj);
    });
  }
}
function isEnumerable(base, prop) {
  var desc = Object.getOwnPropertyDescriptor(base, prop);
  return desc && desc.enumerable ? true : false;
}
function getArchtype(thing) {
  /* istanbul ignore next */
  if (!thing) { die(); }

  if (thing[DRAFT_STATE]) {
    switch (thing[DRAFT_STATE].type) {
      case ProxyType.ES5Object:
      case ProxyType.ProxyObject:
        return Archtype.Object;

      case ProxyType.ES5Array:
      case ProxyType.ProxyArray:
        return Archtype.Array;

      case ProxyType.Map:
        return Archtype.Map;

      case ProxyType.Set:
        return Archtype.Set;
    }
  }

  return Array.isArray(thing) ? Archtype.Array : isMap(thing) ? Archtype.Map : isSet(thing) ? Archtype.Set : Archtype.Object;
}
function has(thing, prop) {
  return getArchtype(thing) === Archtype.Map ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  // @ts-ignore
  return getArchtype(thing) === Archtype.Map ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  switch (getArchtype(thing)) {
    case Archtype.Map:
      thing.set(propOrOldValue, value);
      break;

    case Archtype.Set:
      thing.delete(propOrOldValue);
      thing.add(value);
      break;

    default:
      thing[propOrOldValue] = value;
  }
}
function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return hasMap && target instanceof Map;
}
function isSet(target) {
  return hasSet && target instanceof Set;
}
function latest(state) {
  return state.copy || state.base;
}
function shallowCopy(base, invokeGetters) {
  if (invokeGetters === void 0) {
    invokeGetters = false;
  }

  if (Array.isArray(base)) { return base.slice(); }
  var clone = Object.create(Object.getPrototypeOf(base));
  ownKeys(base).forEach(function (key) {
    if (key === DRAFT_STATE) {
      return; // Never copy over draft state.
    }

    var desc = Object.getOwnPropertyDescriptor(base, key);
    var value = desc.value;

    if (desc.get) {
      if (!invokeGetters) {
        throw new Error("Immer drafts cannot have computed properties");
      }

      value = desc.get.call(base);
    }

    if (desc.enumerable) {
      clone[key] = value;
    } else {
      Object.defineProperty(clone, key, {
        value: value,
        writable: true,
        configurable: true
      });
    }
  });
  return clone;
}
function freeze(obj, deep) {
  if (!isDraftable(obj) || isDraft(obj) || Object.isFrozen(obj)) { return; }
  var type = getArchtype(obj);

  if (type === Archtype.Set) {
    obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  } else if (type === Archtype.Map) {
    obj.set = obj.clear = obj.delete = dontMutateFrozenCollections;
  }

  Object.freeze(obj);
  if (deep) { each(obj, function (_, value) {
    return freeze(value, true);
  }); }
}

function dontMutateFrozenCollections() {
  throw new Error("This object has been frozen and should not be mutated");
}

function createHiddenProperty(target, prop, value) {
  Object.defineProperty(target, prop, {
    value: value,
    enumerable: false,
    writable: true
  });
}
/* istanbul ignore next */

function die() {
  throw new Error("Illegal state, please file a bug");
}

/** Each scope represents a `produce` call. */

var ImmerScope =
/** @class */
function () {
  function ImmerScope(parent, immer) {
    this.drafts = [];
    this.parent = parent;
    this.immer = immer; // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.

    this.canAutoFreeze = true;
  }

  ImmerScope.prototype.usePatches = function (patchListener) {
    if (patchListener) {
      this.patches = [];
      this.inversePatches = [];
      this.patchListener = patchListener;
    }
  };

  ImmerScope.prototype.revoke = function () {
    this.leave();
    this.drafts.forEach(revoke); // @ts-ignore

    this.drafts = null;
  };

  ImmerScope.prototype.leave = function () {
    if (this === ImmerScope.current) {
      ImmerScope.current = this.parent;
    }
  };

  ImmerScope.enter = function (immer) {
    var scope = new ImmerScope(ImmerScope.current, immer);
    ImmerScope.current = scope;
    return scope;
  };

  return ImmerScope;
}();

function revoke(draft) {
  var state = draft[DRAFT_STATE];
  if (state.type === ProxyType.ProxyObject || state.type === ProxyType.ProxyArray) { state.revoke(); }else { state.revoked = true; }
}

function processResult(immer, result, scope) {
  var baseDraft = scope.drafts[0];
  var isReplaced = result !== undefined && result !== baseDraft;
  immer.willFinalize(scope, result, isReplaced);

  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified) {
      scope.revoke();
      throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore
    }

    if (isDraftable(result)) {
      // Finalize the result in case it contains (or is) a subset of the draft.
      result = finalize(immer, result, scope);
      maybeFreeze(immer, result);
    }

    if (scope.patches) {
      scope.patches.push({
        op: "replace",
        path: [],
        value: result
      });
      scope.inversePatches.push({
        op: "replace",
        path: [],
        value: baseDraft[DRAFT_STATE].base
      });
    }
  } else {
    // Finalize the base draft.
    result = finalize(immer, baseDraft, scope, []);
  }

  scope.revoke();

  if (scope.patches) {
    scope.patchListener(scope.patches, scope.inversePatches);
  }

  return result !== NOTHING ? result : undefined;
}

function finalize(immer, draft, scope, path) {
  var state = draft[DRAFT_STATE];

  if (!state) {
    if (Object.isFrozen(draft)) { return draft; }
    return finalizeTree(immer, draft, scope);
  } // Never finalize drafts owned by another scope.


  if (state.scope !== scope) {
    return draft;
  }

  if (!state.modified) {
    maybeFreeze(immer, state.base, true);
    return state.base;
  }

  if (!state.finalized) {
    state.finalized = true;
    finalizeTree(immer, state.draft, scope, path); // We cannot really delete anything inside of a Set. We can only replace the whole Set.

    if (immer.onDelete && state.type !== ProxyType.Set) {
      // The `assigned` object is unreliable with ES5 drafts.
      if (immer.useProxies) {
        var assigned = state.assigned;
        each(assigned, function (prop, exists) {
          if (!exists) { immer.onDelete(state, prop); }
        });
      } else {
        var base = state.base,
            copy_1 = state.copy;
        each(base, function (prop) {
          if (!has(copy_1, prop)) { immer.onDelete(state, prop); }
        });
      }
    }

    if (immer.onCopy) {
      immer.onCopy(state);
    } // At this point, all descendants of `state.copy` have been finalized,
    // so we can be sure that `scope.canAutoFreeze` is accurate.


    if (immer.autoFreeze && scope.canAutoFreeze) {
      freeze(state.copy, false);
    }

    if (path && scope.patches) {
      generatePatches(state, path, scope.patches, scope.inversePatches);
    }
  }

  return state.copy;
}

function finalizeTree(immer, root, scope, rootPath) {
  var state = root[DRAFT_STATE];

  if (state) {
    if (state.type === ProxyType.ES5Object || state.type === ProxyType.ES5Array) {
      // Create the final copy, with added keys and without deleted keys.
      state.copy = shallowCopy(state.draft, true);
    }

    root = state.copy;
  }

  each(root, function (key, value) {
    return finalizeProperty(immer, scope, root, state, root, key, value, rootPath);
  });
  return root;
}

function finalizeProperty(immer, scope, root, rootState, parentValue, prop, childValue, rootPath) {
  if (childValue === parentValue) {
    throw Error("Immer forbids circular references");
  } // In the `finalizeTree` method, only the `root` object may be a draft.


  var isDraftProp = !!rootState && parentValue === root;
  var isSetMember = isSet(parentValue);

  if (isDraft(childValue)) {
    var path = rootPath && isDraftProp && !isSetMember && // Set objects are atomic since they have no keys.
    !has(rootState.assigned, prop) // Skip deep patches for assigned keys.
    ? rootPath.concat(prop) : undefined; // Drafts owned by `scope` are finalized here.

    childValue = finalize(immer, childValue, scope, path);
    set(parentValue, prop, childValue); // Drafts from another scope must prevent auto-freezing.

    if (isDraft(childValue)) {
      scope.canAutoFreeze = false;
    }
  } // Unchanged draft properties are ignored.
  else if (isDraftProp && is(childValue, get(rootState.base, prop))) {
      return;
    } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
    // TODO: the recursion over here looks weird, shouldn't non-draft stuff have it's own recursion?
    // especially the passing on of root and rootState doesn't make sense...
    else if (isDraftable(childValue) && !Object.isFrozen(childValue)) {
        each(childValue, function (key, grandChild) {
          return finalizeProperty(immer, scope, root, rootState, childValue, key, grandChild, rootPath);
        });
        maybeFreeze(immer, childValue);
      }

  if (isDraftProp && immer.onAssign && !isSetMember) {
    immer.onAssign(rootState, prop, childValue);
  }
}

function maybeFreeze(immer, value, deep) {
  if (deep === void 0) {
    deep = false;
  }

  if (immer.autoFreeze && !isDraft(value)) {
    freeze(value, deep);
  }
}

/**
 * Returns a new draft of the `base` object.
 *
 * The second argument is the parent draft-state (used internally).
 */

function createProxy(base, parent) {
  var isArray = Array.isArray(base);
  var state = {
    type: isArray ? ProxyType.ProxyArray : ProxyType.ProxyObject,
    // Track which produce call this is associated with.
    scope: parent ? parent.scope : ImmerScope.current,
    // True for both shallow and deep changes.
    modified: false,
    // Used during finalization.
    finalized: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned: {},
    // The parent draft state.
    parent: parent,
    // The base state.
    base: base,
    // The base proxy.
    draft: null,
    // Any property proxies.
    drafts: {},
    // The base copy with any updated values.
    copy: null,
    // Called by the `produce` function.
    revoke: null,
    isManual: false
  }; // the traps must target something, a bit like the 'real' base.
  // but also, we need to be able to determine from the target what the relevant state is
  // (to avoid creating traps per instance to capture the state in closure,
  // and to avoid creating weird hidden properties as well)
  // So the trick is to use 'state' as the actual 'target'! (and make sure we intercept everything)
  // Note that in the case of an array, we put the state in an array to have better Reflect defaults ootb

  var target = state;
  var traps = objectTraps;

  if (isArray) {
    target = [state];
    traps = arrayTraps;
  } // TODO: optimization: might be faster, cheaper if we created a non-revocable proxy
  // and administrate revoking ourselves


  var _a = Proxy.revocable(target, traps),
      revoke = _a.revoke,
      proxy = _a.proxy;

  state.draft = proxy;
  state.revoke = revoke;
  return proxy;
}
/**
 * Object drafts
 */

var objectTraps = {
  get: function (state, prop) {
    if (prop === DRAFT_STATE) { return state; }
    var drafts = state.drafts; // Check for existing draft in unmodified state.

    if (!state.modified && has(drafts, prop)) {
      return drafts[prop];
    }

    var value = latest(state)[prop];

    if (state.finalized || !isDraftable(value)) {
      return value;
    } // Check for existing draft in modified state.


    if (state.modified) {
      // Assigned values are never drafted. This catches any drafts we created, too.
      if (value !== peek(state.base, prop)) { return value; } // Store drafts on the copy (when one exists).
      // @ts-ignore

      drafts = state.copy;
    }

    return drafts[prop] = state.scope.immer.createProxy(value, state);
  },
  has: function (state, prop) {
    return prop in latest(state);
  },
  ownKeys: function (state) {
    return Reflect.ownKeys(latest(state));
  },
  set: function (state, prop
  /* strictly not, but helps TS */
  , value) {
    if (!state.modified) {
      var baseValue = peek(state.base, prop); // Optimize based on value's truthiness. Truthy values are guaranteed to
      // never be undefined, so we can avoid the `in` operator. Lastly, truthy
      // values may be drafts, but falsy values are never drafts.

      var isUnchanged = value ? is(baseValue, value) || value === state.drafts[prop] : is(baseValue, value) && prop in state.base;
      if (isUnchanged) { return true; }
      prepareCopy(state);
      markChanged(state);
    }

    state.assigned[prop] = true; // @ts-ignore

    state.copy[prop] = value;
    return true;
  },
  deleteProperty: function (state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (peek(state.base, prop) !== undefined || prop in state.base) {
      state.assigned[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else if (state.assigned[prop]) {
      // if an originally not assigned property was deleted
      delete state.assigned[prop];
    } // @ts-ignore


    if (state.copy) { delete state.copy[prop]; }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor: function (state, prop) {
    var owner = latest(state);
    var desc = Reflect.getOwnPropertyDescriptor(owner, prop);

    if (desc) {
      desc.writable = true;
      desc.configurable = state.type !== ProxyType.ProxyArray || prop !== "length";
    }

    return desc;
  },
  defineProperty: function () {
    throw new Error("Object.defineProperty() cannot be used on an Immer draft"); // prettier-ignore
  },
  getPrototypeOf: function (state) {
    return Object.getPrototypeOf(state.base);
  },
  setPrototypeOf: function () {
    throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
  }
};
/**
 * Array drafts
 */

var arrayTraps = {};
each(objectTraps, function (key, fn) {
  // @ts-ignore
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});

arrayTraps.deleteProperty = function (state, prop) {
  if (isNaN(parseInt(prop))) {
    throw new Error("Immer only supports deleting array indices"); // prettier-ignore
  }

  return objectTraps.deleteProperty.call(this, state[0], prop);
};

arrayTraps.set = function (state, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop))) {
    throw new Error("Immer only supports setting array indices and the 'length' property"); // prettier-ignore
  }

  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
/**
 * Map drafts
 */
// Access a property without creating an Immer draft.


function peek(draft, prop) {
  var state = draft[DRAFT_STATE];
  var desc = Reflect.getOwnPropertyDescriptor(state ? latest(state) : draft, prop);
  return desc && desc.value;
}

function markChanged(state) {
  if (!state.modified) {
    state.modified = true;

    if (state.type === ProxyType.ProxyObject || state.type === ProxyType.ProxyArray) {
      var copy_1 = state.copy = shallowCopy(state.base);
      each(state.drafts, function (key, value) {
        // @ts-ignore
        copy_1[key] = value;
      });
      state.drafts = undefined;
    }

    if (state.parent) {
      markChanged(state.parent);
    }
  }
}

function prepareCopy(state) {
  if (!state.copy) {
    state.copy = shallowCopy(state.base);
  }
}

function willFinalizeES5(scope, result, isReplaced) {
  scope.drafts.forEach(function (draft) {
    draft[DRAFT_STATE].finalizing = true;
  });

  if (!isReplaced) {
    if (scope.patches) {
      markChangesRecursively(scope.drafts[0]);
    } // This is faster when we don't care about which attributes changed.


    markChangesSweep(scope.drafts);
  } // When a child draft is returned, look for changes.
  else if (isDraft(result) && result[DRAFT_STATE].scope === scope) {
      markChangesSweep(scope.drafts);
    }
}
function createES5Proxy(base, parent) {
  var isArray = Array.isArray(base);
  var draft = clonePotentialDraft(base);
  each(draft, function (prop) {
    proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
  });
  var state = {
    type: isArray ? ProxyType.ES5Array : ProxyType.ES5Object,
    scope: parent ? parent.scope : ImmerScope.current,
    modified: false,
    finalizing: false,
    finalized: false,
    assigned: {},
    parent: parent,
    base: base,
    draft: draft,
    copy: null,
    revoked: false,
    isManual: false
  };
  createHiddenProperty(draft, DRAFT_STATE, state);
  return draft;
} // Access a property without creating an Immer draft.

function peek$1(draft, prop) {
  var state = draft[DRAFT_STATE];

  if (state && !state.finalizing) {
    state.finalizing = true;
    var value = draft[prop];
    state.finalizing = false;
    return value;
  }

  return draft[prop];
}

function get$1(state, prop) {
  assertUnrevoked(state);
  var value = peek$1(latest(state), prop);
  if (state.finalizing) { return value; } // Create a draft if the value is unmodified.

  if (value === peek$1(state.base, prop) && isDraftable(value)) {
    prepareCopy$1(state); // @ts-ignore

    return state.copy[prop] = state.scope.immer.createProxy(value, state);
  }

  return value;
}

function set$1(state, prop, value) {
  assertUnrevoked(state);
  state.assigned[prop] = true;

  if (!state.modified) {
    if (is(value, peek$1(latest(state), prop))) { return; }
    markChangedES5(state);
    prepareCopy$1(state);
  } // @ts-ignore


  state.copy[prop] = value;
}

function markChangedES5(state) {
  if (!state.modified) {
    state.modified = true;
    if (state.parent) { markChangedES5(state.parent); }
  }
}

function prepareCopy$1(state) {
  if (!state.copy) { state.copy = clonePotentialDraft(state.base); }
}

function clonePotentialDraft(base) {
  var state = base && base[DRAFT_STATE];

  if (state) {
    state.finalizing = true;
    var draft = shallowCopy(state.draft, true);
    state.finalizing = false;
    return draft;
  }

  return shallowCopy(base);
} // property descriptors are recycled to make sure we don't create a get and set closure per property,
// but share them all instead


var descriptors = {};

function proxyProperty(draft, prop, enumerable) {
  var desc = descriptors[prop];

  if (desc) {
    desc.enumerable = enumerable;
  } else {
    descriptors[prop] = desc = {
      configurable: true,
      enumerable: enumerable,
      get: function () {
        return get$1(this[DRAFT_STATE], prop);
      },
      set: function (value) {
        set$1(this[DRAFT_STATE], prop, value);
      }
    };
  }

  Object.defineProperty(draft, prop, desc);
}

function assertUnrevoked(state) {
  if (state.revoked === true) { throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(latest(state))); }
} // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.

function markChangesSweep(drafts) {
  // The natural order of drafts in the `scope` array is based on when they
  // were accessed. By processing drafts in reverse natural order, we have a
  // better chance of processing leaf nodes first. When a leaf node is known to
  // have changed, we can avoid any traversal of its ancestor nodes.
  for (var i = drafts.length - 1; i >= 0; i--) {
    var state = drafts[i][DRAFT_STATE];

    if (!state.modified) {
      switch (state.type) {
        case ProxyType.ES5Array:
          if (hasArrayChanges(state)) { markChangedES5(state); }
          break;

        case ProxyType.ES5Object:
          if (hasObjectChanges(state)) { markChangedES5(state); }
          break;
      }
    }
  }
}

function markChangesRecursively(object) {
  if (!object || typeof object !== "object") { return; }
  var state = object[DRAFT_STATE];
  if (!state) { return; }
  var base = state.base,
      draft = state.draft,
      assigned = state.assigned,
      type = state.type;

  if (type === ProxyType.ES5Object) {
    // Look for added keys.
    // TODO: looks quite duplicate to hasObjectChanges,
    // probably there is a faster way to detect changes, as sweep + recurse seems to do some
    // unnecessary work.
    // also: probably we can store the information we detect here, to speed up tree finalization!
    each(draft, function (key) {
      if (key === DRAFT_STATE) { return; } // The `undefined` check is a fast path for pre-existing keys.

      if (base[key] === undefined && !has(base, key)) {
        assigned[key] = true;
        markChangedES5(state);
      } else if (!assigned[key]) {
        // Only untouched properties trigger recursion.
        markChangesRecursively(draft[key]);
      }
    }); // Look for removed keys.

    each(base, function (key) {
      // The `undefined` check is a fast path for pre-existing keys.
      if (draft[key] === undefined && !has(draft, key)) {
        assigned[key] = false;
        markChangedES5(state);
      }
    });
  } else if (type === ProxyType.ES5Array && hasArrayChanges(state)) {
    markChangedES5(state);
    assigned.length = true;

    if (draft.length < base.length) {
      for (var i = draft.length; i < base.length; i++) { assigned[i] = false; }
    } else {
      for (var i = base.length; i < draft.length; i++) { assigned[i] = true; }
    }

    for (var i = 0; i < draft.length; i++) {
      // Only untouched indices trigger recursion.
      if (assigned[i] === undefined) { markChangesRecursively(draft[i]); }
    }
  }
}

function hasObjectChanges(state) {
  var base = state.base,
      draft = state.draft; // Search for added keys and changed keys. Start at the back, because
  // non-numeric keys are ordered by time of definition on the object.

  var keys = Object.keys(draft);

  for (var i = keys.length - 1; i >= 0; i--) {
    var key = keys[i];
    var baseValue = base[key]; // The `undefined` check is a fast path for pre-existing keys.

    if (baseValue === undefined && !has(base, key)) {
      return true;
    } // Once a base key is deleted, future changes go undetected, because its
    // descriptor is erased. This branch detects any missed changes.
    else {
        var value = draft[key];
        var state_1 = value && value[DRAFT_STATE];

        if (state_1 ? state_1.base !== baseValue : !is(value, baseValue)) {
          return true;
        }
      }
  } // At this point, no keys were added or changed.
  // Compare key count to determine if keys were deleted.


  return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
  var draft = state.draft;
  if (draft.length !== state.base.length) { return true; } // See #116
  // If we first shorten the length, our array interceptors will be removed.
  // If after that new items are added, result in the same original length,
  // those last items will have no intercepting property.
  // So if there is no own descriptor on the last position, we know that items were removed and added
  // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
  // the last one

  var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

  if (descriptor && !descriptor.get) { return true; } // For all other cases, we don't have to compare, as they would have been picked up by the index setters

  return false;
}

var DraftMap = function (_super) {
  if (!_super) {
    /* istanbul ignore next */
    throw new Error("Map is not polyfilled");
  }

  __extends(DraftMap, _super); // Create class manually, cause #502


  function DraftMap(target, parent) {
    this[DRAFT_STATE] = {
      type: ProxyType.Map,
      parent: parent,
      scope: parent ? parent.scope : ImmerScope.current,
      modified: false,
      finalized: false,
      copy: undefined,
      assigned: undefined,
      base: target,
      draft: this,
      isManual: false,
      revoked: false
    };
    return this;
  }

  var p = DraftMap.prototype; // TODO: smaller build size if we create a util for Object.defineProperty

  Object.defineProperty(p, "size", {
    get: function () {
      return latest(this[DRAFT_STATE]).size;
    },
    enumerable: true,
    configurable: true
  });

  p.has = function (key) {
    return latest(this[DRAFT_STATE]).has(key);
  };

  p.set = function (key, value) {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);

    if (latest(state).get(key) !== value) {
      prepareCopy$2(state);
      state.scope.immer.markChanged(state);
      state.assigned.set(key, true);
      state.copy.set(key, value);
      state.assigned.set(key, true);
    }

    return this;
  };

  p.delete = function (key) {
    if (!this.has(key)) {
      return false;
    }

    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$2(state);
    state.scope.immer.markChanged(state);
    state.assigned.set(key, false);
    state.copy.delete(key);
    return true;
  };

  p.clear = function () {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$2(state);
    state.scope.immer.markChanged(state);
    state.assigned = new Map();

    for (var _i = 0, _a = latest(state).keys(); _i < _a.length; _i++) {
      var key = _a[_i];
      state.assigned.set(key, false);
    }

    return state.copy.clear();
  };

  p.forEach = function (cb, thisArg) {
    var _this = this;

    var state = this[DRAFT_STATE];
    latest(state).forEach(function (_value, key, _map) {
      cb.call(thisArg, _this.get(key), key, _this);
    });
  };

  p.get = function (key) {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    var value = latest(state).get(key);

    if (state.finalized || !isDraftable(value)) {
      return value;
    }

    if (value !== state.base.get(key)) {
      return value; // either already drafted or reassigned
    } // despite what it looks, this creates a draft only once, see above condition


    var draft = state.scope.immer.createProxy(value, state);
    prepareCopy$2(state);
    state.copy.set(key, draft);
    return draft;
  };

  p.keys = function () {
    return latest(this[DRAFT_STATE]).keys();
  };

  p.values = function () {
    var _a;

    var _this = this;

    var iterator = this.keys();
    return _a = {}, _a[iteratorSymbol] = function () {
      return _this.values();
    }, _a.next = function () {
      var r = iterator.next();
      /* istanbul ignore next */

      if (r.done) { return r; }

      var value = _this.get(r.value);

      return {
        done: false,
        value: value
      };
    }, _a;
  };

  p.entries = function () {
    var _a;

    var _this = this;

    var iterator = this.keys();
    return _a = {}, _a[iteratorSymbol] = function () {
      return _this.entries();
    }, _a.next = function () {
      var r = iterator.next();
      /* istanbul ignore next */

      if (r.done) { return r; }

      var value = _this.get(r.value);

      return {
        done: false,
        value: [r.value, value]
      };
    }, _a;
  };

  p[iteratorSymbol] = function () {
    return this.entries();
  };

  return DraftMap;
}(Map);

function proxyMap(target, parent) {
  // @ts-ignore
  return new DraftMap(target, parent);
}

function prepareCopy$2(state) {
  if (!state.copy) {
    state.assigned = new Map();
    state.copy = new Map(state.base);
  }
}

var DraftSet = function (_super) {
  if (!_super) {
    /* istanbul ignore next */
    throw new Error("Set is not polyfilled");
  }

  __extends(DraftSet, _super); // Create class manually, cause #502


  function DraftSet(target, parent) {
    this[DRAFT_STATE] = {
      type: ProxyType.Set,
      parent: parent,
      scope: parent ? parent.scope : ImmerScope.current,
      modified: false,
      finalized: false,
      copy: undefined,
      base: target,
      draft: this,
      drafts: new Map(),
      revoked: false,
      isManual: false
    };
    return this;
  }

  var p = DraftSet.prototype;
  Object.defineProperty(p, "size", {
    get: function () {
      return latest(this[DRAFT_STATE]).size;
    },
    enumerable: true,
    configurable: true
  });

  p.has = function (value) {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state); // bit of trickery here, to be able to recognize both the value, and the draft of its value

    if (!state.copy) {
      return state.base.has(value);
    }

    if (state.copy.has(value)) { return true; }
    if (state.drafts.has(value) && state.copy.has(state.drafts.get(value))) { return true; }
    return false;
  };

  p.add = function (value) {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);

    if (state.copy) {
      state.copy.add(value);
    } else if (!state.base.has(value)) {
      prepareCopy$3(state);
      state.scope.immer.markChanged(state);
      state.copy.add(value);
    }

    return this;
  };

  p.delete = function (value) {
    if (!this.has(value)) {
      return false;
    }

    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$3(state);
    state.scope.immer.markChanged(state);
    return state.copy.delete(value) || (state.drafts.has(value) ? state.copy.delete(state.drafts.get(value)) :
    /* istanbul ignore next */
    false);
  };

  p.clear = function () {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$3(state);
    state.scope.immer.markChanged(state);
    return state.copy.clear();
  };

  p.values = function () {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$3(state);
    return state.copy.values();
  };

  p.entries = function entries() {
    var state = this[DRAFT_STATE];
    assertUnrevoked(state);
    prepareCopy$3(state);
    return state.copy.entries();
  };

  p.keys = function () {
    return this.values();
  };

  p[iteratorSymbol] = function () {
    return this.values();
  };

  p.forEach = function forEach(cb, thisArg) {
    var iterator = this.values();
    var result = iterator.next();

    while (!result.done) {
      cb.call(thisArg, result.value, result.value, this);
      result = iterator.next();
    }
  };

  return DraftSet;
}(Set);

function proxySet(target, parent) {
  // @ts-ignore
  return new DraftSet(target, parent);
}

function prepareCopy$3(state) {
  if (!state.copy) {
    // create drafts for all entries to preserve insertion order
    state.copy = new Set();
    state.base.forEach(function (value) {
      if (isDraftable(value)) {
        var draft = state.scope.immer.createProxy(value, state);
        state.drafts.set(value, draft);
        state.copy.add(draft);
      } else {
        state.copy.add(value);
      }
    });
  }
}

function generatePatches(state, basePath, patches, inversePatches) {
  switch (state.type) {
    case ProxyType.ProxyObject:
    case ProxyType.ES5Object:
    case ProxyType.Map:
      return generatePatchesFromAssigned(state, basePath, patches, inversePatches);

    case ProxyType.ES5Array:
    case ProxyType.ProxyArray:
      return generateArrayPatches(state, basePath, patches, inversePatches);

    case ProxyType.Set:
      return generateSetPatches(state, basePath, patches, inversePatches);
  }
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
  var _a, _b;

  var base = state.base,
      assigned = state.assigned,
      copy = state.copy;
  /* istanbul ignore next */

  if (!copy) { die(); } // Reduce complexity by ensuring `base` is never longer.

  if (copy.length < base.length) {
    _a = [copy, base], base = _a[0], copy = _a[1];
    _b = [inversePatches, patches], patches = _b[0], inversePatches = _b[1];
  }

  var delta = copy.length - base.length; // Find the first replaced index.

  var start = 0;

  while (base[start] === copy[start] && start < base.length) {
    ++start;
  } // Find the last replaced index. Search from the end to optimize splice patches.


  var end = base.length;

  while (end > start && base[end - 1] === copy[end + delta - 1]) {
    --end;
  } // Process replaced indices.


  for (var i = start; i < end; ++i) {
    if (assigned[i] && copy[i] !== base[i]) {
      var path = basePath.concat([i]);
      patches.push({
        op: "replace",
        path: path,
        value: copy[i]
      });
      inversePatches.push({
        op: "replace",
        path: path,
        value: base[i]
      });
    }
  }

  var replaceCount = patches.length; // Process added indices.

  for (var i = end + delta - 1; i >= end; --i) {
    var path = basePath.concat([i]);
    patches[replaceCount + i - end] = {
      op: "add",
      path: path,
      value: copy[i]
    };
    inversePatches.push({
      op: "remove",
      path: path
    });
  }
} // This is used for both Map objects and normal objects.


function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
  var base = state.base,
      copy = state.copy;
  each(state.assigned, function (key, assignedValue) {
    var origValue = get(base, key);
    var value = get(copy, key);
    var op = !assignedValue ? "remove" : has(base, key) ? "replace" : "add";
    if (origValue === value && op === "replace") { return; }
    var path = basePath.concat(key);
    patches.push(op === "remove" ? {
      op: op,
      path: path
    } : {
      op: op,
      path: path,
      value: value
    });
    inversePatches.push(op === "add" ? {
      op: "remove",
      path: path
    } : op === "remove" ? {
      op: "add",
      path: path,
      value: origValue
    } : {
      op: "replace",
      path: path,
      value: origValue
    });
  });
}

function generateSetPatches(state, basePath, patches, inversePatches) {
  var base = state.base,
      copy = state.copy;
  var i = 0;
  base.forEach(function (value) {
    if (!copy.has(value)) {
      var path = basePath.concat([i]);
      patches.push({
        op: "remove",
        path: path,
        value: value
      });
      inversePatches.unshift({
        op: "add",
        path: path,
        value: value
      });
    }

    i++;
  });
  i = 0;
  copy.forEach(function (value) {
    if (!base.has(value)) {
      var path = basePath.concat([i]);
      patches.push({
        op: "add",
        path: path,
        value: value
      });
      inversePatches.unshift({
        op: "remove",
        path: path,
        value: value
      });
    }

    i++;
  });
}

function applyPatches(draft, patches) {
  patches.forEach(function (patch) {
    var path = patch.path,
        op = patch.op;
    /* istanbul ignore next */

    if (!path.length) { die(); }
    var base = draft;

    for (var i = 0; i < path.length - 1; i++) {
      base = get(base, path[i]);
      if (!base || typeof base !== "object") { throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); } // prettier-ignore
    }

    var type = getArchtype(base);
    var value = deepClonePatchValue(patch.value); // used to clone patch to ensure original patch is not modified, see #411

    var key = path[path.length - 1];

    switch (op) {
      case "replace":
        switch (type) {
          case Archtype.Map:
            return base.set(key, value);

          /* istanbul ignore next */

          case Archtype.Set:
            throw new Error('Sets cannot have "replace" patches.');

          default:
            // if value is an object, then it's assigned by reference
            // in the following add or remove ops, the value field inside the patch will also be modifyed
            // so we use value from the cloned patch
            // @ts-ignore
            return base[key] = value;
        }

      case "add":
        switch (type) {
          case Archtype.Array:
            return base.splice(key, 0, value);

          case Archtype.Map:
            return base.set(key, value);

          case Archtype.Set:
            return base.add(value);

          default:
            return base[key] = value;
        }

      case "remove":
        switch (type) {
          case Archtype.Array:
            return base.splice(key, 1);

          case Archtype.Map:
            return base.delete(key);

          case Archtype.Set:
            return base.delete(patch.value);

          default:
            return delete base[key];
        }

      default:
        throw new Error("Unsupported patch operation: " + op);
    }
  });
  return draft;
}

function deepClonePatchValue(obj) {
  if (!obj || typeof obj !== "object") { return obj; }
  if (Array.isArray(obj)) { return obj.map(deepClonePatchValue); }
  if (isMap(obj)) { return new Map(Array.from(obj.entries()).map(function (_a) {
    var k = _a[0],
        v = _a[1];
    return [k, deepClonePatchValue(v)];
  })); } // Not needed: if (isSet(obj)) return new Set(Array.from(obj.values()).map(deepClone))

  var cloned = Object.create(Object.getPrototypeOf(obj));

  for (var key in obj) { cloned[key] = deepClonePatchValue(obj[key]); }

  return cloned;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/* istanbul ignore next */

function verifyMinified() {}

var configDefaults = {
  useProxies: typeof Proxy !== "undefined" && typeof Proxy.revocable !== "undefined" && typeof Reflect !== "undefined",
  autoFreeze: typeof process !== "undefined" ? "development" !== "production" :
  /* istanbul ignore next */
  verifyMinified.name === "verifyMinified",
  onAssign: null,
  onDelete: null,
  onCopy: null
};

var Immer =
/** @class */
function () {
  function Immer(config) {
    var _this = this;

    this.useProxies = false;
    this.autoFreeze = false;
    each(configDefaults, function (key, value) {
      var _a, _b; // @ts-ignore


      _this[key] = (_b = (_a = config) === null || _a === void 0 ? void 0 : _a[key], _b !== null && _b !== void 0 ? _b : value);
    });
    this.setUseProxies(this.useProxies);
    this.produce = this.produce.bind(this);
    this.produceWithPatches = this.produceWithPatches.bind(this);
  }
  /**
   * The `produce` function takes a value and a "recipe function" (whose
   * return value often depends on the base state). The recipe function is
   * free to mutate its first argument however it wants. All mutations are
   * only ever applied to a __copy__ of the base state.
   *
   * Pass only a function to create a "curried producer" which relieves you
   * from passing the recipe function every time.
   *
   * Only plain objects and arrays are made mutable. All other objects are
   * considered uncopyable.
   *
   * Note: This function is __bound__ to its `Immer` instance.
   *
   * @param {any} base - the initial state
   * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
   * @param {Function} patchListener - optional function that will be called with all the patches produced here
   * @returns {any} a new state, or the initial state if nothing was modified
   */


  Immer.prototype.produce = function (base, recipe, patchListener) {
    var _this = this; // curried invocation


    if (typeof base === "function" && typeof recipe !== "function") {
      var defaultBase_1 = recipe;
      recipe = base;
      var self_1 = this;
      return function curriedProduce(base) {
        var arguments$1 = arguments;

        var _this = this;

        if (base === void 0) {
          base = defaultBase_1;
        }

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments$1[_i];
        }

        return self_1.produce(base, function (draft) {
          return recipe.call.apply(recipe, __spreadArrays([_this, draft], args));
        }); // prettier-ignore
      };
    } // prettier-ignore


    {
      if (typeof recipe !== "function") {
        throw new Error("The first or second argument to `produce` must be a function");
      }

      if (patchListener !== undefined && typeof patchListener !== "function") {
        throw new Error("The third argument to `produce` must be a function or undefined");
      }
    }
    var result; // Only plain objects, arrays, and "immerable classes" are drafted.

    if (isDraftable(base)) {
      var scope_1 = ImmerScope.enter(this);
      var proxy = this.createProxy(base, undefined);
      var hasError = true;

      try {
        result = recipe(proxy);
        hasError = false;
      } finally {
        // finally instead of catch + rethrow better preserves original stack
        if (hasError) { scope_1.revoke(); }else { scope_1.leave(); }
      }

      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(function (result) {
          scope_1.usePatches(patchListener);
          return processResult(_this, result, scope_1);
        }, function (error) {
          scope_1.revoke();
          throw error;
        });
      }

      scope_1.usePatches(patchListener);
      return processResult(this, result, scope_1);
    } else {
      result = recipe(base);
      if (result === NOTHING) { return undefined; }
      if (result === undefined) { result = base; }
      maybeFreeze(this, result, true);
      return result;
    }
  };

  Immer.prototype.produceWithPatches = function (arg1, arg2, arg3) {
    var _this = this;

    if (typeof arg1 === "function") {
      return function (state) {
        var arguments$1 = arguments;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments$1[_i];
        }

        return _this.produceWithPatches(state, function (draft) {
          return arg1.apply(void 0, __spreadArrays([draft], args));
        });
      };
    } // non-curried form

    /* istanbul ignore next */


    if (arg3) { die(); }
    var patches, inversePatches;
    var nextState = this.produce(arg1, arg2, function (p, ip) {
      patches = p;
      inversePatches = ip;
    });
    return [nextState, patches, inversePatches];
  };

  Immer.prototype.createDraft = function (base) {
    if (!isDraftable(base)) {
      throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object"); // prettier-ignore
    }

    var scope = ImmerScope.enter(this);
    var proxy = this.createProxy(base, undefined);
    proxy[DRAFT_STATE].isManual = true;
    scope.leave();
    return proxy;
  };

  Immer.prototype.finishDraft = function (draft, patchListener) {
    var state = draft && draft[DRAFT_STATE];

    if (!state || !state.isManual) {
      throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`"); // prettier-ignore
    }

    if (state.finalized) {
      throw new Error("The given draft is already finalized"); // prettier-ignore
    }

    var scope = state.scope;
    scope.usePatches(patchListener);
    return processResult(this, undefined, scope);
  };
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is disabled in production.
   */


  Immer.prototype.setAutoFreeze = function (value) {
    this.autoFreeze = value;
  };
  /**
   * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
   * always faster than using ES5 proxies.
   *
   * By default, feature detection is used, so calling this is rarely necessary.
   */


  Immer.prototype.setUseProxies = function (value) {
    this.useProxies = value;
  };

  Immer.prototype.applyPatches = function (base, patches) {
    // If a patch replaces the entire state, take that replacement as base
    // before applying patches
    var i;

    for (i = patches.length - 1; i >= 0; i--) {
      var patch = patches[i];

      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }

    if (isDraft(base)) {
      // N.B: never hits if some patch a replacement, patches are never drafts
      return applyPatches(base, patches);
    } // Otherwise, produce a copy of the base state.


    return this.produce(base, function (draft) {
      return applyPatches(draft, patches.slice(i + 1));
    });
  };

  Immer.prototype.createProxy = function (value, parent) {
    // precondition: createProxy should be guarded by isDraftable, so we know we can safely draft
    var draft = isMap(value) ? proxyMap(value, parent) : isSet(value) ? proxySet(value, parent) : this.useProxies ? createProxy(value, parent) : createES5Proxy(value, parent);
    var scope = parent ? parent.scope : ImmerScope.current;
    scope.drafts.push(draft);
    return draft;
  };

  Immer.prototype.willFinalize = function (scope, thing, isReplaced) {
    if (!this.useProxies) { willFinalizeES5(scope, thing, isReplaced); }
  };

  Immer.prototype.markChanged = function (state) {
    if (this.useProxies) {
      markChanged(state);
    } else {
      markChangedES5(state);
    }
  };

  return Immer;
}();

var immer = new Immer();
/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */

var produce = immer.produce;
/**
 * Like `produce`, but `produceWithPatches` always returns a tuple
 * [nextState, patches, inversePatches] (instead of just the next state)
 */

var produceWithPatches = immer.produceWithPatches.bind(immer);
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */

var setAutoFreeze = immer.setAutoFreeze.bind(immer);
/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */

var setUseProxies = immer.setUseProxies.bind(immer);
/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */

var applyPatches$1 = immer.applyPatches.bind(immer);
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */

var createDraft = immer.createDraft.bind(immer);
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */

var finishDraft = immer.finishDraft.bind(immer);

/* harmony default export */ __webpack_exports__["default"] = (produce);

//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/is-hotkey/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-hotkey/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isobject */ "./node_modules/is-plain-object/node_modules/isobject/index.js");
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



function isObjectObject(o) {
  return Object(isobject__WEBPACK_IMPORTED_MODULE_0__["default"])(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/is-plain-object/node_modules/isobject/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/is-plain-object/node_modules/isobject/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/scroll-into-view-if-needed/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/es/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/es/index.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = 'scrollBehavior' in document.body.style;
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);

/***/ }),

/***/ "./node_modules/slate-history/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/slate-history/dist/index.es.js ***!
  \*****************************************************/
/*! exports provided: HISTORY, History, HistoryEditor, MERGING, SAVING, withHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryEditor", function() { return HistoryEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGING", function() { return MERGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVING", function() { return SAVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHistory", function() { return withHistory; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");



var History = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || slate__WEBPACK_IMPORTED_MODULE_1__["Operation"].isOperationList(value.redos[0])) && (value.undos.length === 0 || slate__WEBPACK_IMPORTED_MODULE_1__["Operation"].isOperationList(value.undos[0]));
  }

};

/**
 * Weakmaps for attaching state to the editor.
 */

var HISTORY = new WeakMap();
var SAVING = new WeakMap();
var MERGING = new WeakMap();
var HistoryEditor = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(value) {
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(value) && History.isHistory(value.history);
  },

  /**
   * Get the merge flag's current value.
   */
  isMerging(editor) {
    return MERGING.get(editor);
  },

  /**
   * Get the saving flag's current value.
   */
  isSaving(editor) {
    return SAVING.get(editor);
  },

  /**
   * Redo to the previous saved state.
   */
  redo(editor) {
    editor.redo();
  },

  /**
   * Undo to the previous saved state.
   */
  undo(editor) {
    editor.undo();
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(editor, fn) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn();
    MERGING.set(editor, prev);
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(editor, fn) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn();
    SAVING.set(editor, prev);
  }

};

/**
 * The `withHistory` plugin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 */

var withHistory = editor => {
  var e = editor;
  var {
    apply
  } = e;
  e.history = {
    undos: [],
    redos: []
  };

  e.redo = () => {
    var {
      history
    } = e;
    var {
      redos
    } = history;

    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].withoutNormalizing(e, () => {
          for (var op of batch) {
            e.apply(op);
          }
        });
      });
      history.redos.pop();
      history.undos.push(batch);
    }
  };

  e.undo = () => {
    var {
      history
    } = e;
    var {
      undos
    } = history;

    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].withoutNormalizing(e, () => {
          var inverseOps = batch.map(slate__WEBPACK_IMPORTED_MODULE_1__["Operation"].inverse).reverse();

          for (var op of inverseOps) {
            // If the final operation is deselecting the editor, skip it. This is
            if (op === inverseOps[inverseOps.length - 1] && op.type === 'set_selection' && op.newProperties == null) {
              continue;
            } else {
              e.apply(op);
            }
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };

  e.apply = op => {
    var {
      operations,
      history
    } = e;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch[lastBatch.length - 1];
    var overwrite = shouldOverwrite(op, lastOp);
    var save = HistoryEditor.isSaving(e);
    var merge = HistoryEditor.isMerging(e);

    if (save == null) {
      save = shouldSave(op);
    }

    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp) || overwrite;
        }
      }

      if (lastBatch && merge) {
        if (overwrite) {
          lastBatch.pop();
        }

        lastBatch.push(op);
      } else {
        var batch = [op];
        undos.push(batch);
      }

      while (undos.length > 100) {
        undos.shift();
      }

      if (shouldClear(op)) {
        history.redos = [];
      }
    }

    apply(op);
  };

  return e;
};
/**
 * Check whether to merge an operation into the previous operation.
 */

var shouldMerge = (op, prev) => {
  if (op.type === 'set_selection') {
    return true;
  }

  if (prev && op.type === 'insert_text' && prev.type === 'insert_text' && op.offset === prev.offset + prev.text.length && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(op.path, prev.path)) {
    return true;
  }

  if (prev && op.type === 'remove_text' && prev.type === 'remove_text' && op.offset + op.text.length === prev.offset && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(op.path, prev.path)) {
    return true;
  }

  return false;
};
/**
 * Check whether an operation needs to be saved to the history.
 */


var shouldSave = (op, prev) => {
  if (op.type === 'set_selection' && op.newProperties == null) {
    return false;
  }

  return true;
};
/**
 * Check whether an operation should overwrite the previous one.
 */


var shouldOverwrite = (op, prev) => {
  if (prev && op.type === 'set_selection' && prev.type === 'set_selection') {
    return true;
  }

  return false;
};
/**
 * Check whether an operation should clear the redos stack.
 */


var shouldClear = op => {
  if (op.type === 'set_selection') {
    return false;
  }

  return true;
};


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/slate-react/dist/index.es.js":
/*!***************************************************!*\
  !*** ./node_modules/slate-react/dist/index.es.js ***!
  \***************************************************/
/*! exports provided: DefaultElement, DefaultLeaf, Editable, ReactEditor, Slate, useEditor, useFocused, useReadOnly, useSelected, useSlate, withReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultElement", function() { return DefaultElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLeaf", function() { return DefaultLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return Editable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactEditor", function() { return ReactEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slate", function() { return Slate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return useEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocused", function() { return useFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReadOnly", function() { return useReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelected", function() { return useSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlate", function() { return useSlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReact", function() { return withReact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! direction */ "./node_modules/direction/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);








/**
 * Leaf content strings.
 */
const String = (props) => {
    const { isLast, leaf, parent, text } = props;
    const editor = useEditor();
    const path = ReactEditor.findPath(editor, text);
    const parentPath = slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(path);
    // COMPAT: Render text inside void nodes with a zero-width space.
    // So the node can contain selection but the text is not visible.
    if (editor.isVoid(parent)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, { length: slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(parent).length });
    }
    // COMPAT: If this is the last text node in an empty block, render a zero-
    // width space that will convert into a line break when copying and pasting
    // to support expected plain text.
    if (leaf.text === '' &&
        parent.children[parent.children.length - 1] === text &&
        !editor.isInline(parent) &&
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].string(editor, parentPath) === '') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, { isLineBreak: true });
    }
    // COMPAT: If the text is empty, it's because it's on the edge of an inline
    // node, so we render a zero-width space so that the selection can be
    // inserted next to it still.
    if (leaf.text === '') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, null);
    }
    // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
    // so we need to add an extra trailing new lines to prevent that.
    if (isLast && leaf.text.slice(-1) === '\n') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, { isTrailing: true, text: leaf.text });
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, { text: leaf.text });
};
/**
 * Leaf strings with text in them.
 */
const TextString = (props) => {
    const { text, isTrailing = false } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { "data-slate-string": true },
        text,
        isTrailing ? '\n' : null));
};
/**
 * Leaf strings without text, render as zero-width strings.
 */
const ZeroWidthString = (props) => {
    const { length = 0, isLineBreak = false } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { "data-slate-zero-width": isLineBreak ? 'n' : 'z', "data-slate-length": length },
        '\uFEFF',
        isLineBreak ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null));
};

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
var NODE_TO_INDEX = new WeakMap();
var NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */

var EDITOR_TO_ELEMENT = new WeakMap();
var ELEMENT_TO_NODE = new WeakMap();
var KEY_TO_ELEMENT = new WeakMap();
var NODE_TO_ELEMENT = new WeakMap();
var NODE_TO_KEY = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */

var IS_READ_ONLY = new WeakMap();
var IS_FOCUSED = new WeakMap();
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */

var EDITOR_TO_ON_CHANGE = new WeakMap();
/**
 * Symbols.
 */

var PLACEHOLDER_SYMBOL = Symbol('placeholder');

/**
 * Individual leaves in a text node with unique formatting.
 */
const Leaf = (props) => {
    const { leaf, isLast, text, parent, renderLeaf = (props) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultLeaf, Object.assign({}, props)), } = props;
    let children = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(String, { isLast: isLast, leaf: leaf, parent: parent, text: text }));
    if (leaf[PLACEHOLDER_SYMBOL]) {
        children = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { contentEditable: false, style: {
                    pointerEvents: 'none',
                    display: 'inline-block',
                    verticalAlign: 'text-top',
                    width: '0',
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    opacity: '0.333',
                } }, leaf.placeholder),
            children));
    }
    // COMPAT: Having the `data-` attributes on these leaf elements ensures that
    // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
    // contenteditable behaviors. (2019/05/08)
    const attributes = {
        'data-slate-leaf': true,
    };
    return renderLeaf({ attributes, children, leaf, text });
};
const MemoizedLeaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Leaf, (prev, next) => {
    return (next.parent === prev.parent &&
        next.isLast === prev.isLast &&
        next.renderLeaf === prev.renderLeaf &&
        next.text === prev.text &&
        slate__WEBPACK_IMPORTED_MODULE_1__["Text"].matches(next.leaf, prev.leaf));
});
/**
 * The default custom leaf renderer.
 */
const DefaultLeaf = (props) => {
    const { attributes, children } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, attributes), children);
};

/**
 * Prevent warning on SSR by falling back to useEffect when window is not defined
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/**
 * Text.
 */
const Text = (props) => {
    const { decorations, isLast, parent, renderLeaf, text } = props;
    const editor = useEditor();
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const leaves = slate__WEBPACK_IMPORTED_MODULE_1__["Text"].decorations(text, decorations);
    const key = ReactEditor.findKey(editor, text);
    const children = [];
    for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];
        children.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedLeaf, { isLast: isLast && i === leaves.length - 1, key: `${key.id}-${i}`, leaf: leaf, text: text, parent: parent, renderLeaf: renderLeaf }));
    }
    // Update element-related weak maps with the DOM element ref.
    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            KEY_TO_ELEMENT.set(key, ref.current);
            NODE_TO_ELEMENT.set(text, ref.current);
            ELEMENT_TO_NODE.set(ref.current, text);
        }
        else {
            KEY_TO_ELEMENT.delete(key);
            NODE_TO_ELEMENT.delete(text);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { "data-slate-node": "text", ref: ref }, children));
};
const MemoizedText = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Text, (prev, next) => {
    return (next.parent === prev.parent &&
        next.isLast === prev.isLast &&
        next.renderLeaf === prev.renderLeaf &&
        next.text === prev.text);
});

/**
 * A React context for sharing the `selected` state of an element.
 */

var SelectedContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `selected` state of an element.
 */

var useSelected = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SelectedContext);
};

/**
 * Element.
 */
const Element = (props) => {
    const { decorate, decorations, element, renderElement = (p) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultElement, Object.assign({}, p)), renderLeaf, selection, } = props;
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const editor = useEditor();
    const readOnly = useReadOnly();
    const isInline = editor.isInline(element);
    const key = ReactEditor.findKey(editor, element);
    let children = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Children, { decorate: decorate, decorations: decorations, node: element, renderElement: renderElement, renderLeaf: renderLeaf, selection: selection }));
    // Attributes that the developer must mix into the element in their
    // custom node renderer component.
    const attributes = {
        'data-slate-node': 'element',
        ref,
    };
    if (isInline) {
        attributes['data-slate-inline'] = true;
    }
    // If it's a block node with inline children, add the proper `dir` attribute
    // for text direction.
    if (!isInline && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, element)) {
        const text = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(element);
        const dir = direction__WEBPACK_IMPORTED_MODULE_4___default()(text);
        if (dir === 'rtl') {
            attributes.dir = dir;
        }
    }
    // If it's a void node, wrap the children in extra void-specific elements.
    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, element)) {
        attributes['data-slate-void'] = true;
        if (!readOnly && isInline) {
            attributes.contentEditable = false;
        }
        const Tag = isInline ? 'span' : 'div';
        const [[text]] = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(element);
        children = readOnly ? null : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, { "data-slate-spacer": true, style: {
                height: '0',
                color: 'transparent',
                outline: 'none',
                position: 'absolute',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, { decorations: [], isLast: false, parent: element, text: text })));
        NODE_TO_INDEX.set(text, 0);
        NODE_TO_PARENT.set(text, element);
    }
    // Update element-related weak maps with the DOM element ref.
    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            KEY_TO_ELEMENT.set(key, ref.current);
            NODE_TO_ELEMENT.set(element, ref.current);
            ELEMENT_TO_NODE.set(ref.current, element);
        }
        else {
            KEY_TO_ELEMENT.delete(key);
            NODE_TO_ELEMENT.delete(element);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedContext.Provider, { value: !!selection }, renderElement({ attributes, children, element })));
};
const MemoizedElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Element, (prev, next) => {
    return (prev.decorate === next.decorate &&
        prev.element === next.element &&
        prev.renderElement === next.renderElement &&
        prev.renderLeaf === next.renderLeaf &&
        isRangeListEqual(prev.decorations, next.decorations) &&
        (prev.selection === next.selection ||
            (!!prev.selection &&
                !!next.selection &&
                slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(prev.selection, next.selection))));
});
/**
 * The default element renderer.
 */
const DefaultElement = (props) => {
    const { attributes, children, element } = props;
    const editor = useEditor();
    const Tag = editor.isInline(element) ? 'span' : 'div';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, Object.assign({}, attributes, { style: { position: 'relative' } }), children));
};
/**
 * Check if a list of ranges is equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */
const isRangeListEqual = (list, another) => {
    if (list.length !== another.length) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        const range = list[i];
        const other = another[i];
        if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(range, other)) {
            return false;
        }
    }
    return true;
};

/**
 * A React context for sharing the editor object.
 */
const EditorContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */
const useEditor = () => {
    const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EditorContext);
    if (!editor) {
        throw new Error(`The \`useEditor\` hook must be used inside the <Slate> component's context.`);
    }
    return editor;
};

/**
 * Children.
 */
const Children = (props) => {
    const { decorate, decorations, node, renderElement, renderLeaf, selection, } = props;
    const editor = useEditor();
    const path = ReactEditor.findPath(editor, node);
    const children = [];
    const isLeafBlock = slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) &&
        !editor.isInline(node) &&
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, node);
    for (let i = 0; i < node.children.length; i++) {
        const p = path.concat(i);
        const n = node.children[i];
        const key = ReactEditor.findKey(editor, n);
        const range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, p);
        const sel = selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(range, selection);
        const ds = decorate([n, p]);
        for (const dec of decorations) {
            const d = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(dec, range);
            if (d) {
                ds.push(d);
            }
        }
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n)) {
            children.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedElement, { decorate: decorate, decorations: ds, element: n, key: key.id, renderElement: renderElement, renderLeaf: renderLeaf, selection: sel }));
        }
        else {
            children.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, { decorations: ds, key: key.id, isLast: isLeafBlock && i === node.children.length - 1, parent: node, renderLeaf: renderLeaf, text: n }));
        }
        NODE_TO_INDEX.set(n, i);
        NODE_TO_PARENT.set(n, node);
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

var IS_IOS = typeof navigator !== 'undefined' && typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);

/**
 * Hotkey mappings for each platform.
 */

var HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  splitBlock: 'shift?+enter',
  undo: 'mod+z'
};
var APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: ['ctrl+y', 'ctrl+shift+z']
};
/**
 * Create a platform-aware hotkey checker.
 */

var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(generic);
  var isApple = apple && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(apple);
  var isWindows = windows && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
/**
 * Hotkeys.
 */


var Hotkeys = {
  isBold: create('bold'),
  isCompose: create('compose'),
  isMoveBackward: create('moveBackward'),
  isMoveForward: create('moveForward'),
  isDeleteBackward: create('deleteBackward'),
  isDeleteForward: create('deleteForward'),
  isDeleteLineBackward: create('deleteLineBackward'),
  isDeleteLineForward: create('deleteLineForward'),
  isDeleteWordBackward: create('deleteWordBackward'),
  isDeleteWordForward: create('deleteWordForward'),
  isExtendBackward: create('extendBackward'),
  isExtendForward: create('extendForward'),
  isExtendLineBackward: create('extendLineBackward'),
  isExtendLineForward: create('extendLineForward'),
  isItalic: create('italic'),
  isMoveLineBackward: create('moveLineBackward'),
  isMoveLineForward: create('moveLineForward'),
  isMoveWordBackward: create('moveWordBackward'),
  isMoveWordForward: create('moveWordForward'),
  isRedo: create('redo'),
  isSplitBlock: create('splitBlock'),
  isTransposeCharacter: create('transposeCharacter'),
  isUndo: create('undo')
};

/**
 * A React context for sharing the `readOnly` state of the editor.
 */

var ReadOnlyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `readOnly` state of the editor.
 */

var useReadOnly = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ReadOnlyContext);
};

/**
 * A React context for sharing the editor object, in a way that re-renders the
 * context whenever changes occur.
 */
const SlateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */
const useSlate = () => {
    const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SlateContext);
    if (!context) {
        throw new Error(`The \`useSlate\` hook must be used inside the <SlateProvider> component's context.`);
    }
    const [editor] = context;
    return editor;
};

/**
 * Types.
 */
/**
 * Check if a DOM node is a comment node.
 */

var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */

var isDOMNode = value => {
  return value instanceof Node;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */

var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint; // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.

  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var direction = isLast ? 'backward' : 'forward';
    var index = isLast ? offset - 1 : offset;
    node = getEditableChild(node, index, direction); // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.

    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, direction);
    } // Determine the new offset inside the text node.


    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  } // Return the node and offset.


  return [node, offset];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChild = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false; // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.

  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
    if (triedForward && triedBackward) {
      break;
    }

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    i += direction === 'forward' ? 1 : -1;
  }

  return child;
};

/**
 * Editable.
 */
const Editable = (props) => {
    const { autoFocus, decorate = defaultDecorate, onDOMBeforeInput: propsOnDOMBeforeInput, placeholder, readOnly = false, renderElement, renderLeaf, style = {}, as: Component = 'div', ...attributes } = props;
    const editor = useSlate();
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    // Update internal state on each render.
    IS_READ_ONLY.set(editor, readOnly);
    // Keep track of some state for the event handler logic.
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
        isComposing: false,
        isUpdatingSelection: false,
        latestElement: null,
    }), []);
    // Update element-related weak maps with the DOM element ref.
    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            EDITOR_TO_ELEMENT.set(editor, ref.current);
            NODE_TO_ELEMENT.set(editor, ref.current);
            ELEMENT_TO_NODE.set(ref.current, editor);
        }
        else {
            NODE_TO_ELEMENT.delete(editor);
        }
    });
    // Attach a native DOM event handler for `selectionchange`, because React's
    // built-in `onSelect` handler doesn't fire for all selection changes. It's a
    // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
    // fire for any change to the selection inside the editor. (2019/11/04)
    // https://github.com/facebook/react/issues/5785
    useIsomorphicLayoutEffect(() => {
        window.document.addEventListener('selectionchange', onDOMSelectionChange);
        return () => {
            window.document.removeEventListener('selectionchange', onDOMSelectionChange);
        };
    }, []);
    // Attach a native DOM event handler for `beforeinput` events, because React's
    // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
    // real `beforeinput` events sadly... (2019/11/04)
    // https://github.com/facebook/react/issues/11211
    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            // @ts-ignore The `beforeinput` event isn't recognized.
            ref.current.addEventListener('beforeinput', onDOMBeforeInput);
        }
        return () => {
            if (ref.current) {
                // @ts-ignore The `beforeinput` event isn't recognized.
                ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
            }
        };
    }, []);
    // Whenever the editor updates, make sure the DOM selection state is in sync.
    useIsomorphicLayoutEffect(() => {
        const { selection } = editor;
        const domSelection = window.getSelection();
        if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
            return;
        }
        const hasDomSelection = domSelection.type !== 'None';
        // If the DOM selection is properly unset, we're done.
        if (!selection && !hasDomSelection) {
            return;
        }
        const newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
        // If the DOM selection is already correct, we're done.
        if (hasDomSelection &&
            newDomRange &&
            isRangeEqual(domSelection.getRangeAt(0), newDomRange)) {
            return;
        }
        // Otherwise the DOM selection is out of sync, so update it.
        const el = ReactEditor.toDOMNode(editor, editor);
        state.isUpdatingSelection = true;
        domSelection.removeAllRanges();
        if (newDomRange) {
            domSelection.addRange(newDomRange);
            const leafEl = newDomRange.startContainer.parentElement;
            Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__["default"])(leafEl, { scrollMode: 'if-needed' });
        }
        setTimeout(() => {
            // COMPAT: In Firefox, it's not enough to create a range, you also need
            // to focus the contenteditable element too. (2016/11/16)
            if (newDomRange && IS_FIREFOX) {
                el.focus();
            }
            state.isUpdatingSelection = false;
        });
    });
    // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
    // needs to be manually focused.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (ref.current && autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);
    // Listen on the native `beforeinput` event to get real "Level 2" events. This
    // is required because React's `beforeinput` is fake and never really attaches
    // to the real event sadly. (2019/11/01)
    // https://github.com/facebook/react/issues/11211
    const onDOMBeforeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
        if (!readOnly &&
            hasEditableTarget(editor, event.target) &&
            !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
            const { selection } = editor;
            const { inputType: type } = event;
            const data = event.dataTransfer || event.data || undefined;
            // These two types occur while a user is composing text and can't be
            // cancelled. Let them through and wait for the composition to end.
            if (type === 'insertCompositionText' ||
                type === 'deleteCompositionText') {
                return;
            }
            event.preventDefault();
            // COMPAT: For the deleting forward/backward input types we don't want
            // to change the selection because it is the range that will be deleted,
            // and those commands determine that for themselves.
            if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
                const [targetRange] = event.getTargetRanges();
                if (targetRange) {
                    const range = ReactEditor.toSlateRange(editor, targetRange);
                    if (!selection || !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(selection, range)) {
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
                    }
                }
            }
            // COMPAT: If the selection is expanded, even if the command seems like
            // a delete forward/backward command it should delete the selection.
            if (selection &&
                slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection) &&
                type.startsWith('delete')) {
                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                return;
            }
            switch (type) {
                case 'deleteByComposition':
                case 'deleteByCut':
                case 'deleteByDrag': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                    break;
                }
                case 'deleteContent':
                case 'deleteContentForward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
                    break;
                }
                case 'deleteContentBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
                    break;
                }
                case 'deleteEntireSoftLine': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'line' });
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteHardLineBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'block' });
                    break;
                }
                case 'deleteSoftLineBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteHardLineForward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'block' });
                    break;
                }
                case 'deleteSoftLineForward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteWordBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'word' });
                    break;
                }
                case 'deleteWordForward': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'word' });
                    break;
                }
                case 'insertLineBreak':
                case 'insertParagraph': {
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
                    break;
                }
                case 'insertFromComposition':
                case 'insertFromDrop':
                case 'insertFromPaste':
                case 'insertFromYank':
                case 'insertReplacementText':
                case 'insertText': {
                    if (data instanceof DataTransfer) {
                        ReactEditor.insertData(editor, data);
                    }
                    else if (typeof data === 'string') {
                        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, data);
                    }
                    break;
                }
            }
        }
    }, []);
    // Listen on the native `selectionchange` event to be able to update any time
    // the selection changes. This is required because React's `onSelect` is leaky
    // and non-standard so it doesn't fire until after a selection has been
    // released. This causes issues in situations where another change happens
    // while a selection is being dragged.
    const onDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(debounce__WEBPACK_IMPORTED_MODULE_2___default()(() => {
        if (!readOnly && !state.isComposing && !state.isUpdatingSelection) {
            const { activeElement } = window.document;
            const el = ReactEditor.toDOMNode(editor, editor);
            const domSelection = window.getSelection();
            const domRange = domSelection &&
                domSelection.rangeCount > 0 &&
                domSelection.getRangeAt(0);
            if (activeElement === el) {
                state.latestElement = activeElement;
                IS_FOCUSED.set(editor, true);
            }
            else {
                IS_FOCUSED.delete(editor);
            }
            if (domRange &&
                hasEditableTarget(editor, domRange.startContainer) &&
                hasEditableTarget(editor, domRange.endContainer)) {
                const range = ReactEditor.toSlateRange(editor, domRange);
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
            }
            else {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
            }
        }
    }, 100), []);
    const decorations = decorate([editor, []]);
    if (placeholder &&
        editor.children.length === 1 &&
        Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 &&
        slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '') {
        const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
        decorations.push({
            [PLACEHOLDER_SYMBOL]: true,
            placeholder,
            anchor: start,
            focus: start,
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnlyContext.Provider, { value: readOnly },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component
        // COMPAT: The Grammarly Chrome extension works by changing the DOM
        // out from under `contenteditable` elements, which leads to weird
        // behaviors so we have to disable it like editor. (2017/04/24)
        , Object.assign({ "data-gramm": false, role: readOnly ? undefined : 'textbox' }, attributes, { 
            // COMPAT: Firefox doesn't support the `beforeinput` event, so we'd
            // have to use hacks to make these replacement-based features work.
            spellCheck: IS_FIREFOX ? undefined : attributes.spellCheck, autoCorrect: IS_FIREFOX ? undefined : attributes.autoCorrect, autoCapitalize: IS_FIREFOX ? undefined : attributes.autoCapitalize, "data-slate-editor": true, "data-slate-node": "value", contentEditable: readOnly ? undefined : true, suppressContentEditableWarning: true, ref: ref, style: {
                // Prevent the default outline styles.
                outline: 'none',
                // Preserve adjacent whitespace and new lines.
                whiteSpace: 'pre-wrap',
                // Allow words to break if they are too long.
                wordWrap: 'break-word',
                // Allow for passed-in styles to override anything.
                ...style,
            }, onBeforeInput: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                // COMPAT: Firefox doesn't support the `beforeinput` event, so we
                // fall back to React's leaky polyfill instead just for it. It
                // only works for the `insertText` input type.
                if (IS_FIREFOX && !readOnly) {
                    event.preventDefault();
                    const text = event.data;
                    slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, text);
                }
            }, [readOnly]), onBlur: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (readOnly ||
                    state.isUpdatingSelection ||
                    !hasEditableTarget(editor, event.target) ||
                    isEventHandled(event, attributes.onBlur)) {
                    return;
                }
                // COMPAT: If the current `activeElement` is still the previous
                // one, this is due to the window being blurred when the tab
                // itself becomes unfocused, so we want to abort early to allow to
                // editor to stay focused when the tab becomes focused again.
                if (state.latestElement === window.document.activeElement) {
                    return;
                }
                const { relatedTarget } = event;
                const el = ReactEditor.toDOMNode(editor, editor);
                // COMPAT: The event should be ignored if the focus is returning
                // to the editor from an embedded editable element (eg. an <input>
                // element inside a void node).
                if (relatedTarget === el) {
                    return;
                }
                // COMPAT: The event should be ignored if the focus is moving from
                // the editor to inside a void node's spacer element.
                if (isDOMElement(relatedTarget) &&
                    relatedTarget.hasAttribute('data-slate-spacer')) {
                    return;
                }
                // COMPAT: The event should be ignored if the focus is moving to a
                // non- editable section of an element that isn't a void node (eg.
                // a list item of the check list example).
                if (relatedTarget != null &&
                    isDOMNode(relatedTarget) &&
                    ReactEditor.hasDOMNode(editor, relatedTarget)) {
                    const node = ReactEditor.toSlateNode(editor, relatedTarget);
                    if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isVoid(node)) {
                        return;
                    }
                }
                IS_FOCUSED.delete(editor);
            }, [readOnly, attributes.onBlur]), onClick: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (!readOnly &&
                    hasTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onClick) &&
                    isDOMNode(event.target)) {
                    const node = ReactEditor.toSlateNode(editor, event.target);
                    const path = ReactEditor.findPath(editor, node);
                    const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);
                    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, { at: start })) {
                        const range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, start);
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
                    }
                }
            }, [readOnly, attributes.onClick]), onCompositionEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onCompositionEnd)) {
                    state.isComposing = false;
                    // COMPAT: In Chrome, `beforeinput` events for compositions
                    // aren't correct and never fire the "insertFromComposition"
                    // type that we need. So instead, insert whenever a composition
                    // ends since it will already have been committed to the DOM.
                    if (!IS_SAFARI && !IS_FIREFOX && event.data) {
                        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, event.data);
                    }
                }
            }, [attributes.onCompositionEnd]), onCompositionStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onCompositionStart)) {
                    state.isComposing = true;
                }
            }, [attributes.onCompositionStart]), onCopy: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onCopy)) {
                    event.preventDefault();
                    setFragmentData(event.clipboardData, editor);
                }
            }, [attributes.onCopy]), onCut: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (!readOnly &&
                    hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onCut)) {
                    event.preventDefault();
                    setFragmentData(event.clipboardData, editor);
                    const { selection } = editor;
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                    }
                }
            }, [readOnly, attributes.onCut]), onDragOver: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onDragOver)) {
                    // Only when the target is void, call `preventDefault` to signal
                    // that drops are allowed. Editable content is droppable by
                    // default, and calling `preventDefault` hides the cursor.
                    const node = ReactEditor.toSlateNode(editor, event.target);
                    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
                        event.preventDefault();
                    }
                }
            }, [attributes.onDragOver]), onDragStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onDragStart)) {
                    const node = ReactEditor.toSlateNode(editor, event.target);
                    const path = ReactEditor.findPath(editor, node);
                    const voidMatch = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, { at: path });
                    // If starting a drag on a void node, make sure it is selected
                    // so that it shows up in the selection's fragment.
                    if (voidMatch) {
                        const range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, path);
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
                    }
                    setFragmentData(event.dataTransfer, editor);
                }
            }, [attributes.onDragStart]), onDrop: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (hasTarget(editor, event.target) &&
                    !readOnly &&
                    !isEventHandled(event, attributes.onDrop)) {
                    // COMPAT: Firefox doesn't fire `beforeinput` events at all, and
                    // Chromium browsers don't properly fire them for files being
                    // dropped into a `contenteditable`. (2019/11/26)
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1028668
                    if (IS_FIREFOX ||
                        (!IS_SAFARI && event.dataTransfer.files.length > 0)) {
                        event.preventDefault();
                        const range = ReactEditor.findEventRange(editor, event);
                        const data = event.dataTransfer;
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
                        ReactEditor.insertData(editor, data);
                    }
                }
            }, [readOnly, attributes.onDrop]), onFocus: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (!readOnly &&
                    !state.isUpdatingSelection &&
                    hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onFocus)) {
                    const el = ReactEditor.toDOMNode(editor, editor);
                    state.latestElement = window.document.activeElement;
                    // COMPAT: If the editor has nested editable elements, the focus
                    // can go to them. In Firefox, this must be prevented because it
                    // results in issues with keyboard navigation. (2017/03/30)
                    if (IS_FIREFOX && event.target !== el) {
                        el.focus();
                        return;
                    }
                    IS_FOCUSED.set(editor, true);
                }
            }, [readOnly, attributes.onFocus]), onKeyDown: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                if (!readOnly &&
                    hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onKeyDown)) {
                    const { nativeEvent } = event;
                    const { selection } = editor;
                    // COMPAT: Since we prevent the default behavior on
                    // `beforeinput` events, the browser doesn't think there's ever
                    // any history stack to undo or redo, so we have to manage these
                    // hotkeys ourselves. (2019/11/06)
                    if (Hotkeys.isRedo(nativeEvent)) {
                        event.preventDefault();
                        if (editor.redo) {
                            editor.redo();
                        }
                        return;
                    }
                    if (Hotkeys.isUndo(nativeEvent)) {
                        event.preventDefault();
                        if (editor.undo) {
                            editor.undo();
                        }
                        return;
                    }
                    // COMPAT: Certain browsers don't handle the selection updates
                    // properly. In Chrome, the selection isn't properly extended.
                    // And in Firefox, the selection isn't properly collapsed.
                    // (2017/10/17)
                    if (Hotkeys.isMoveLineBackward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { unit: 'line', reverse: true });
                        return;
                    }
                    if (Hotkeys.isMoveLineForward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { unit: 'line' });
                        return;
                    }
                    if (Hotkeys.isExtendLineBackward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
                            unit: 'line',
                            edge: 'focus',
                            reverse: true,
                        });
                        return;
                    }
                    if (Hotkeys.isExtendLineForward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { unit: 'line', edge: 'focus' });
                        return;
                    }
                    // COMPAT: If a void node is selected, or a zero-width text node
                    // adjacent to an inline is selected, we need to handle these
                    // hotkeys manually because browsers won't be able to skip over
                    // the void node with the zero-width space not being an empty
                    // string.
                    if (Hotkeys.isMoveBackward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
                            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { reverse: true });
                        }
                        else {
                            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, { edge: 'start' });
                        }
                        return;
                    }
                    if (Hotkeys.isMoveForward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
                            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor);
                        }
                        else {
                            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, { edge: 'end' });
                        }
                        return;
                    }
                    if (Hotkeys.isMoveWordBackward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { unit: 'word', reverse: true });
                        return;
                    }
                    if (Hotkeys.isMoveWordForward(nativeEvent)) {
                        event.preventDefault();
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, { unit: 'word' });
                        return;
                    }
                    // COMPAT: Firefox doesn't support the `beforeinput` event, so we
                    // fall back to guessing at the input intention for hotkeys.
                    // COMPAT: In iOS, some of these hotkeys are handled in the
                    if (IS_FIREFOX) {
                        // We don't have a core behavior for these, but they change the
                        // DOM if we don't prevent them, so we have to.
                        if (Hotkeys.isBold(nativeEvent) ||
                            Hotkeys.isItalic(nativeEvent) ||
                            Hotkeys.isTransposeCharacter(nativeEvent)) {
                            event.preventDefault();
                            return;
                        }
                        if (Hotkeys.isSplitBlock(nativeEvent)) {
                            event.preventDefault();
                            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
                            return;
                        }
                        if (Hotkeys.isDeleteBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
                            }
                            return;
                        }
                        if (Hotkeys.isDeleteForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
                            }
                            return;
                        }
                        if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'line' });
                            }
                            return;
                        }
                        if (Hotkeys.isDeleteLineForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'line' });
                            }
                            return;
                        }
                        if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, { unit: 'word' });
                            }
                            return;
                        }
                        if (Hotkeys.isDeleteWordForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, { unit: 'word' });
                            }
                            return;
                        }
                    }
                }
            }, [readOnly, attributes.onKeyDown]), onPaste: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((event) => {
                // COMPAT: Firefox doesn't support the `beforeinput` event, so we
                // fall back to React's `onPaste` here instead.
                if (IS_FIREFOX &&
                    !readOnly &&
                    hasEditableTarget(editor, event.target) &&
                    !isEventHandled(event, attributes.onPaste)) {
                    event.preventDefault();
                    ReactEditor.insertData(editor, event.clipboardData);
                }
            }, [readOnly, attributes.onPaste]) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Children, { decorate: decorate, decorations: decorations, node: editor, renderElement: renderElement, renderLeaf: renderLeaf, selection: editor.selection }))));
};
/**
 * A default memoized decorate function.
 */
const defaultDecorate = () => [];
/**
 * Check if two DOM range objects are equal.
 */
const isRangeEqual = (a, b) => {
    return ((a.startContainer === b.startContainer &&
        a.startOffset === b.startOffset &&
        a.endContainer === b.endContainer &&
        a.endOffset === b.endOffset) ||
        (a.startContainer === b.endContainer &&
            a.startOffset === b.endOffset &&
            a.endContainer === b.startContainer &&
            a.endOffset === b.startOffset));
};
/**
 * Check if the target is in the editor.
 */
const hasTarget = (editor, target) => {
    return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};
/**
 * Check if the target is editable and in the editor.
 */
const hasEditableTarget = (editor, target) => {
    return (isDOMNode(target) &&
        ReactEditor.hasDOMNode(editor, target, { editable: true }));
};
/**
 * Check if an event is overrided by a handler.
 */
const isEventHandled = (event, handler) => {
    if (!handler) {
        return false;
    }
    handler(event);
    return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if a DOM event is overrided by a handler.
 */
const isDOMEventHandled = (event, handler) => {
    if (!handler) {
        return false;
    }
    handler(event);
    return event.defaultPrevented;
};
/**
 * Set the currently selected fragment to the clipboard.
 */
const setFragmentData = (dataTransfer, editor) => {
    const { selection } = editor;
    if (!selection) {
        return;
    }
    const [start, end] = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].edges(selection);
    const startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, { at: start.path });
    const endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, { at: end.path });
    if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection) && !startVoid) {
        return;
    }
    // Create a fake selection so that we can add a Base64-encoded copy of the
    // fragment to the HTML, to decode on future pastes.
    const domRange = ReactEditor.toDOMRange(editor, selection);
    let contents = domRange.cloneContents();
    let attach = contents.childNodes[0];
    // Make sure attach is non-empty, since empty nodes will not get copied.
    contents.childNodes.forEach(node => {
        if (node.textContent && node.textContent.trim() !== '') {
            attach = node;
        }
    });
    // COMPAT: If the end node is a void node, we need to move the end of the
    // range from the void node's spacer span, to the end of the void node's
    // content, since the spacer is before void's content in the DOM.
    if (endVoid) {
        const [voidNode] = endVoid;
        const r = domRange.cloneRange();
        const domNode = ReactEditor.toDOMNode(editor, voidNode);
        r.setEndAfter(domNode);
        contents = r.cloneContents();
    }
    // COMPAT: If the start node is a void node, we need to attach the encoded
    // fragment to the void node's content node instead of the spacer, because
    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
    // most browsers. (2018/04/27)
    if (startVoid) {
        attach = contents.querySelector('[data-slate-spacer]');
    }
    // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.
    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
        const isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
        zw.textContent = isNewline ? '\n' : '';
    });
    // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.
    if (isDOMText(attach)) {
        const span = document.createElement('span');
        // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
        // then leading and trailing spaces will be ignored. (2017/09/21)
        span.style.whiteSpace = 'pre';
        span.appendChild(attach);
        contents.appendChild(span);
        attach = span;
    }
    const fragment = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].fragment(editor, selection);
    const string = JSON.stringify(fragment);
    const encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute('data-slate-fragment', encoded);
    dataTransfer.setData('application/x-slate-fragment', encoded);
    // Add the content to a <div> so that we can get its inner HTML.
    const div = document.createElement('div');
    div.appendChild(contents);
    dataTransfer.setData('text/html', div.innerHTML);
    dataTransfer.setData('text/plain', getPlainText(div));
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 */
const getPlainText = (domNode) => {
    let text = '';
    if (isDOMText(domNode) && domNode.nodeValue) {
        return domNode.nodeValue;
    }
    if (isDOMElement(domNode)) {
        for (const childNode of Array.from(domNode.childNodes)) {
            text += getPlainText(childNode);
        }
        const display = getComputedStyle(domNode).getPropertyValue('display');
        if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
            text += '\n';
        }
    }
    return text;
};

/**
 * An auto-incrementing identifier for keys.
 */
var n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */

class Key {
  constructor() {
    this.id = "".concat(n++);
  }

}

var ReactEditor = {
  /**
   * Find a key for a Slate node.
   */
  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);

    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }

    return key;
  },

  /**
   * Find the path of Slate node.
   */
  findPath(editor, node) {
    var path = [];
    var child = node;

    while (true) {
      var parent = NODE_TO_PARENT.get(child);

      if (parent == null) {
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(child)) {
          return path;
        } else {
          break;
        }
      }

      var i = NODE_TO_INDEX.get(child);

      if (i == null) {
        break;
      }

      path.unshift(i);
      child = parent;
    }

    throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(node)));
  },

  /**
   * Check if the editor is focused.
   */
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },

  /**
   * Check if the editor is in read-only mode.
   */
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },

  /**
   * Blur the editor.
   */
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    IS_FOCUSED.set(editor, false);

    if (window.document.activeElement === el) {
      el.blur();
    }
  },

  /**
   * Focus the editor.
   */
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    IS_FOCUSED.set(editor, true);

    if (window.document.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },

  /**
   * Deselect the editor.
   */
  deselect(editor) {
    var {
      selection
    } = editor;
    var domSelection = window.getSelection();

    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }

    if (selection) {
      slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
    }
  },

  /**
   * Check if a DOM node is within the editor.
   */
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var el = ReactEditor.toDOMNode(editor, editor);
    var element; // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
    // target is originating from an internal "restricted" element (e.g. a
    // stepper arrow on a number input). (2018/05/04)
    // https://github.com/ianstormtaylor/slate/issues/1819

    try {
      element = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }

    if (!element) {
      return false;
    }

    return element.closest("[data-slate-editor]") === el && (!editable || el.isContentEditable);
  },

  /**
   * Insert data from a `DataTransfer` into the editor.
   */
  insertData(editor, data) {
    editor.insertData(data);
  },

  /**
   * Find the native DOM element from a Slate node.
   */
  toDOMNode(editor, node) {
    var domNode = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));

    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(node)));
    }

    return domNode;
  },

  /**
   * Find a native DOM selection point from a Slate point.
   */
  toDOMPoint(editor, point) {
    var [node] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint; // If we're inside a void node, force the offset to 0, otherwise the zero
    // width spacing character will result in an incorrect offset of 1

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    } // For each leaf, we need to isolate its content, which means filtering
    // to its direct text and zero-width spans. (We have to filter out any
    // other siblings that may have been rendered alongside them.)


    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;

    for (var text of texts) {
      var domNode = text.childNodes[0];

      if (domNode == null || domNode.textContent == null) {
        continue;
      }

      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute('data-slate-length');
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;

      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }

      start = end;
    }

    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(point)));
    }

    return domPoint;
  },

  /**
   * Find a native DOM range from a Slate `range`.
   */
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var domRange = window.document.createRange();
    var start = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(range) ? domFocus : domAnchor;
    var end = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(range) ? domAnchor : domFocus;
    domRange.setStart(start[0], start[1]);
    domRange.setEnd(end[0], end[1]);
    return domRange;
  },

  /**
   * Find a Slate node from a native DOM `element`.
   */
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

    if (domEl && !domEl.hasAttribute('data-slate-node')) {
      domEl = domEl.closest("[data-slate-node]");
    }

    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;

    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }

    return node;
  },

  /**
   * Get the target range from a DOM `event`.
   */
  findEventRange(editor, event) {
    if ('nativeEvent' in event) {
      event = event.nativeEvent;
    }

    var {
      clientX: x,
      clientY: y,
      target
    } = event;

    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node); // If the drop target is inside a void node, move it into either the
    // next or previous node, depending on which side the `x` and `y`
    // coordinates are closest to.

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].point(editor, path, {
        edge: isPrev ? 'start' : 'end'
      });
      var point = isPrev ? slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].before(editor, edge) : slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].after(editor, edge);

      if (point) {
        var _range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, point);

        return _range;
      }
    } // Else resolve a range from the caret position where the drop occured.


    var domRange;
    var {
      document
    } = window; // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)

    if (document.caretRangeFromPoint) {
      domRange = document.caretRangeFromPoint(x, y);
    } else {
      var position = document.caretPositionFromPoint(x, y);

      if (position) {
        domRange = document.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }

    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    } // Resolve a Slate range from the DOM range.


    var range = ReactEditor.toSlateRange(editor, domRange);
    return range;
  },

  /**
   * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
   */
  toSlatePoint(editor, domPoint) {
    var [nearestNode, nearestOffset] = normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;

    if (parentNode) {
      var voidNode = parentNode.closest('[data-slate-void="true"]');
      var leafNode = parentNode.closest('[data-slate-leaf]');
      var domNode = null; // Calculate how far into the text node the `nearestNode` is, so that we
      // can determine what the offset relative to the text node is.

      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        var range = window.document.createRange();
        range.setStart(textNode, 0);
        range.setEnd(nearestNode, nearestOffset);
        var contents = range.cloneContents();
        var removals = [...contents.querySelectorAll('[data-slate-zero-width]'), ...contents.querySelectorAll('[contenteditable=false]')];
        removals.forEach(el => {
          el.parentNode.removeChild(el);
        }); // COMPAT: Edge has a bug where Range.prototype.toString() will
        // convert \n into \r\n. The bug causes a loop when slate-react
        // attempts to reposition its cursor to match the native position. Use
        // textContent.length instead.
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/

        offset = contents.textContent.length;
        domNode = textNode;
      } else if (voidNode) {
        // For void nodes, the element with the offset key will be a cousin, not an
        // ancestor, so find it by going down from the nearest void parent.
        leafNode = voidNode.querySelector('[data-slate-leaf]');
        textNode = leafNode.closest('[data-slate-node="text"]');
        domNode = leafNode;
        offset = domNode.textContent.length;
      } // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.


      if (domNode && offset === domNode.textContent.length && parentNode.hasAttribute('data-slate-zero-width')) {
        offset--;
      }
    }

    if (!textNode) {
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    } // COMPAT: If someone is clicking from one Slate editor into another,
    // the select event fires twice, once for the old editor's `element`
    // first, and then afterwards for the correct `element`. (2017/03/03)


    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },

  /**
   * Find a Slate range from a DOM range or selection.
   */
  toSlateRange(editor, domRange) {
    var el = domRange instanceof Selection ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;

    if (el) {
      if (domRange instanceof Selection) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset;
        isCollapsed = domRange.isCollapsed;
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }

    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }

    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset]);
    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset]);
    return {
      anchor,
      focus
    };
  }

};

/**
 * A React context for sharing the `focused` state of the editor.
 */

var FocusedContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `focused` state of the editor.
 */

var useFocused = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FocusedContext);
};

/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */
const Slate = (props) => {
    const { editor, children, onChange, value, ...rest } = props;
    const [key, setKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        editor.children = value;
        Object.assign(editor, rest);
        return [editor];
    }, [key, value, ...Object.values(rest)]);
    const onContextChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        onChange(editor.children);
        setKey(key + 1);
    }, [key, onChange]);
    EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlateContext.Provider, { value: context },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorContext.Provider, { value: editor },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FocusedContext.Provider, { value: ReactEditor.isFocused(editor) }, children))));
};

/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 */

var withReact = editor => {
  var e = editor;
  var {
    apply,
    onChange
  } = e;

  e.apply = op => {
    var matches = [];

    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
        {
          for (var [node, path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: op.path
          })) {
            var key = ReactEditor.findKey(e, node);
            matches.push([path, key]);
          }

          break;
        }

      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
        {
          for (var [_node, _path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.path)
          })) {
            var _key = ReactEditor.findKey(e, _node);

            matches.push([_path, _key]);
          }

          break;
        }
    }

    apply(op);

    for (var [_path2, _key2] of matches) {
      var [_node2] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(e, _path2);
      NODE_TO_KEY.set(_node2, _key2);
    }
  };

  e.insertData = data => {
    var fragment = data.getData('application/x-slate-fragment');

    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertFragment(e, parsed);
      return;
    }

    var text = data.getData('text/plain');

    if (text) {
      var lines = text.split('\n');
      var split = false;

      for (var line of lines) {
        if (split) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].splitNodes(e);
        }

        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertText(e, line);
        split = true;
      }
    }
  };

  e.onChange = () => {
    // COMPAT: React doesn't batch `setState` hook calls, which means that the
    // children and selection can get out of sync for one render pass. So we
    // have to use this unstable API to ensure it batches them. (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e);

      if (onContextChange) {
        onContextChange();
      }

      onChange();
    });
  };

  return e;
};


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/slate/dist/index.es.js":
/*!*********************************************!*\
  !*** ./node_modules/slate/dist/index.es.js ***!
  \*********************************************/
/*! exports provided: Editor, Element, Location, Node, Operation, Path, PathRef, Point, PointRef, Range, RangeRef, Span, Text, Transforms, createEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRef", function() { return PathRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointRef", function() { return PointRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeRef", function() { return RangeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transforms", function() { return Transforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esrever */ "./node_modules/esrever/esrever.js");
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esrever__WEBPACK_IMPORTED_MODULE_2__);




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DIRTY_PATHS = new WeakMap();
var FLUSHING = new WeakMap();
var NORMALIZING = new WeakMap();
var PATH_REFS = new WeakMap();
var POINT_REFS = new WeakMap();
var RANGE_REFS = new WeakMap();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Create a new Slate `Editor` object.
 */

var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: () => false,
    isVoid: () => false,
    onChange: () => {},
    apply: op => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }

      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }

      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }

      var set = new Set();
      var dirtyPaths = [];

      var add = path => {
        if (path) {
          var key = path.join(',');

          if (!set.has(key)) {
            set.add(key);
            dirtyPaths.push(path);
          }
        }
      };

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var newDirtyPaths = getDirtyPaths(op);

      for (var path of oldDirtyPaths) {
        var newPath = Path.transform(path, op);
        add(newPath);
      }

      for (var _path of newDirtyPaths) {
        add(_path);
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      Editor.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

      if (op.type === 'set_selection') {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread({}, Editor.marks(editor) || {}, {
            [key]: value
          });

          editor.marks = marks;
          editor.onChange();
        }
      }
    },
    deleteBackward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: () => {
      var {
        selection
      } = editor;

      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor);
      }
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: fragment => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: node => {
      Transforms.insertNodes(editor, node);
    },
    insertText: text => {
      var {
        selection,
        marks
      } = editor;

      if (selection) {
        // If the cursor is at the end of an inline, move it outside of
        // the inline before inserting
        if (Range.isCollapsed(selection)) {
          var inline = Editor.above(editor, {
            match: n => Editor.isInline(editor, n),
            mode: 'highest'
          });

          if (inline) {
            var [, inlinePath] = inline;

            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
        }

        if (marks) {
          var node = _objectSpread({
            text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: entry => {
      var [node, path] = entry; // There are no core normalizations for text nodes.

      if (Text.isText(node)) {
        return;
      } // Ensure that block and inline nodes have at least one text child.


      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ''
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      } // Determine whether the node should have block or inline children.


      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
      // index that accounts for any added/removed nodes.

      var n = 0;

      for (var i = 0; i < node.children.length; i++, n++) {
        var _child = node.children[i];
        var prev = node.children[i - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
        // that only contain block nodes. Similarly, only allow inline nodes in
        // other inline nodes, or parent blocks that only contain inlines and
        // text.

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          n--;
        } else if (Element.isElement(_child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n),
                voids: true
              });
              n++;
            } else if (isLast) {
              var _newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n + 1),
                voids: true
              });
              n++;
            }
          }
        } else {
          // Merge adjacent text nodes that are empty or match.
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            } else if (prev.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n - 1),
                voids: true
              });
              n--;
            } else if (isLast && _child.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            }
          }
        }
      }
    },
    removeMark: key => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;
          editor.onChange();
        }
      }
    }
  };
  return editor;
};
/**
 * Get the "dirty" paths generated from an operation.
 */

var getDirtyPaths = op => {
  switch (op.type) {
    case 'insert_text':
    case 'remove_text':
    case 'set_node':
      {
        var {
          path
        } = op;
        return Path.levels(path);
      }

    case 'insert_node':
      {
        var {
          node,
          path: _path2
        } = op;
        var levels = Path.levels(_path2);
        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), (_ref3) => {
          var [, p] = _ref3;
          return _path2.concat(p);
        });
        return [...levels, ...descendants];
      }

    case 'merge_node':
      {
        var {
          path: _path3
        } = op;
        var ancestors = Path.ancestors(_path3);
        var previousPath = Path.previous(_path3);
        return [...ancestors, previousPath];
      }

    case 'move_node':
      {
        var {
          path: _path4,
          newPath
        } = op;

        if (Path.equals(_path4, newPath)) {
          return [];
        }

        var oldAncestors = [];
        var newAncestors = [];

        for (var ancestor of Path.ancestors(_path4)) {
          var p = Path.transform(ancestor, op);
          oldAncestors.push(p);
        }

        for (var _ancestor of Path.ancestors(newPath)) {
          var _p = Path.transform(_ancestor, op);

          newAncestors.push(_p);
        }

        return [...oldAncestors, ...newAncestors];
      }

    case 'remove_node':
      {
        var {
          path: _path5
        } = op;

        var _ancestors = Path.ancestors(_path5);

        return [..._ancestors];
      }

    case 'split_node':
      {
        var {
          path: _path6
        } = op;

        var _levels = Path.levels(_path6);

        var nextPath = Path.next(_path6);
        return [..._levels, nextPath];
      }

    default:
      {
        return [];
      }
  }
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Constants for string distance checking.
 */
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;
var ZERO_WIDTH_JOINER = 0x200d;
/**
 * Get the distance to the end of the first character in a string of text.
 */

var getCharacterDistance = text => {
  var offset = 0; // prev types:
  // SURR: surrogate pair
  // MOD: modifier (technically also surrogate pair)
  // ZWJ: zero width joiner
  // VAR: variation selector
  // BMP: sequenceable character from basic multilingual plane

  var prev = null;
  var charCode = text.charCodeAt(0);

  while (charCode) {
    if (isSurrogate(charCode)) {
      var modifier = isModifier(charCode, text, offset); // Early returns are the heart of this function, where we decide if previous and current
      // codepoints should form a single character (in terms of how many of them should selection
      // jump over).

      if (prev === 'SURR' || prev === 'BMP') {
        break;
      }

      offset += 2;
      prev = modifier ? 'MOD' : 'SURR';
      charCode = text.charCodeAt(offset); // Absolutely fine to `continue` without any checks because if `charCode` is NaN (which
      // is the case when out of `text` range), next `while` loop won"t execute and we"re done.

      continue;
    }

    if (charCode === ZERO_WIDTH_JOINER) {
      offset += 1;
      prev = 'ZWJ';
      charCode = text.charCodeAt(offset);
      continue;
    }

    if (isBMPEmoji(charCode)) {
      if (prev && prev !== 'ZWJ' && prev !== 'VAR') {
        break;
      }

      offset += 1;
      prev = 'BMP';
      charCode = text.charCodeAt(offset);
      continue;
    }

    if (isVariationSelector(charCode)) {
      if (prev && prev !== 'ZWJ') {
        break;
      }

      offset += 1;
      prev = 'VAR';
      charCode = text.charCodeAt(offset);
      continue;
    } // Modifier 'groups up' with what ever character is before that (even whitespace), need to
    // look ahead.


    if (prev === 'MOD') {
      offset += 1;
      break;
    } // If while loop ever gets here, we're done (e.g latin chars).


    break;
  }

  return offset || 1;
};
/**
 * Get the distance to the end of the first word in a string of text.
 */

var getWordDistance = text => {
  var length = 0;
  var i = 0;
  var started = false;
  var char;

  while (char = text.charAt(i)) {
    var l = getCharacterDistance(char);
    char = text.slice(i, i + l);
    var rest = text.slice(i + l);

    if (isWordCharacter(char, rest)) {
      started = true;
      length += l;
    } else if (!started) {
      length += l;
    } else {
      break;
    }

    i += l;
  }

  return length;
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */

var isWordCharacter = (char, remaining) => {
  if (SPACE.test(char)) {
    return false;
  } // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.


  if (CHAMELEON.test(char)) {
    var next = remaining.charAt(0);
    var length = getCharacterDistance(next);
    next = remaining.slice(0, length);
    var rest = remaining.slice(length);

    if (isWordCharacter(next, rest)) {
      return true;
    }
  }

  if (PUNCTUATION.test(char)) {
    return false;
  }

  return true;
};
/**
 * Determines if `code` is a surrogate
 */


var isSurrogate = code => SURROGATE_START <= code && code <= SURROGATE_END;
/**
 * Does `code` form Modifier with next one.
 *
 * https://emojipedia.org/modifiers/
 */


var isModifier = (code, text, offset) => {
  if (code === 0xd83c) {
    var next = text.charCodeAt(offset + 1);
    return next <= 0xdfff && next >= 0xdffb;
  }

  return false;
};
/**
 * Is `code` a Variation Selector.
 *
 * https://codepoints.net/variation_selectors
 */


var isVariationSelector = code => {
  return code <= 0xfe0f && code >= 0xfe00;
};
/**
 * Is `code` one of the BMP codes used in emoji sequences.
 *
 * https://emojipedia.org/emoji-zwj-sequences/
 */


var isBMPEmoji = code => {
  // This requires tiny bit of maintanance, better ideas?
  // Fortunately it only happens if new Unicode Standard
  // is released. Fails gracefully if upkeep lags behind,
  // same way Slate previously behaved with all emojis.
  return code === 0x2764 || // heart (❤)
  code === 0x2642 || // male (♂)
  code === 0x2640 || // female (♀)
  code === 0x2620 || // scull (☠)
  code === 0x2695 || // medical (⚕)
  code === 0x2708 || // plane (✈️)
  code === 0x25ef // large circle (◯)
  ;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Editor = {
  /**
   * Get the ancestor above a location in the document.
   */
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      voids = false,
      mode = 'lowest',
      at = editor.selection,
      match
    } = options;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === 'lowest';

    for (var [n, p] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n) && !Path.equals(path, p)) {
        return [n, p];
      }
    }
  },

  /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  /**
   * Get the point after a location.
   */
  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: 'end'
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$1({}, options, {
      at: range
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Get the point before a location.
   */
  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: 'start'
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$1({}, options, {
      at: range,
      reverse: true
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Delete content in the editor backward from the current selection.
   */
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteBackward(unit);
  },

  /**
   * Delete content in the editor forward from the current selection.
   */
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteForward(unit);
  },

  /**
   * Delete the content in the current selection.
   */
  deleteFragment(editor) {
    editor.deleteFragment();
  },

  /**
   * Get the start and end points of a location.
   */
  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  /**
   * Get the end point of a location.
   */
  end(editor, at) {
    return Editor.point(editor, at, {
      edge: 'end'
    });
  },

  /**
   * Get the first node at a location.
   */
  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'start'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the fragment at a location.
   */
  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  /**
   * Check if a node has block children.
   */
  hasBlocks(editor, element) {
    return element.children.some(n => Editor.isBlock(editor, n));
  },

  /**
   * Check if a node has inline and text children.
   */
  hasInlines(editor, element) {
    return element.children.some(n => Text.isText(n) || Editor.isInline(editor, n));
  },

  /**
   * Check if a node has text children.
   */
  hasTexts(editor, element) {
    return element.children.every(n => Text.isText(n));
  },

  /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertBreak(editor) {
    editor.insertBreak();
  },

  /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertNode(editor, node) {
    editor.insertNode(node);
  },

  /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertText(editor, text) {
    editor.insertText(text);
  },

  /**
   * Check if a value is a block `Element` object.
   */
  isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  /**
   * Check if a value is an `Editor` object.
   */
  isEditor(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && (value.marks === null || Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
  },

  /**
   * Check if a point is the end point of a location.
   */
  isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  /**
   * Check if a point is an edge of a location.
   */
  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  /**
   * Check if an element is empty, accounting for void nodes.
   */
  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
  },

  /**
   * Check if a value is an inline `Element` object.
   */
  isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  /**
   * Check if the editor is currently normalizing after each operation.
   */
  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === undefined ? true : isNormalizing;
  },

  /**
   * Check if a point is the start point of a location.
   */
  isStart(editor, point, at) {
    // PERF: If the offset isn't `0` we know it's not the start.
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  /**
   * Check if a value is a void `Element` object.
   */
  isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  /**
   * Get the last node at a location.
   */
  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'end'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the leaf text node at a location.
   */
  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the levels at a location.
   */
  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (match == null) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    for (var [n, p] of Node.levels(editor, path)) {
      if (!match(n)) {
        continue;
      }

      levels.push([n, p]);

      if (!voids && Editor.isVoid(editor, n)) {
        break;
      }
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  /**
   * Get the marks that would be added to text at the current selection.
   */
  marks(editor) {
    var {
      marks,
      selection
    } = editor;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text.isText
      });

      if (match) {
        var [_node] = match;

        var _rest = _objectWithoutProperties(_node, ["text"]);

        return _rest;
      } else {
        return {};
      }
    }

    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node] = Editor.leaf(editor, path);

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n)
      });

      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;

        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }

    var rest = _objectWithoutProperties(node, ["text"]);

    return rest;
  },

  /**
   * Get the matching node in the branch of the document after a location.
   */
  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var [, from] = Editor.last(editor, at);
    var [, to] = Editor.last(editor, []);
    var span = [from, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [, next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },

  /**
   * Get the node at a location.
   */
  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the nodes in the Editor.
   */
  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = 'all',
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (!match) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: 'start'
      });
      var last = Editor.path(editor, at, {
        edge: 'end'
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var iterable = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: (_ref) => {
        var [n] = _ref;
        return voids ? false : Editor.isVoid(editor, n);
      }
    });
    var matches = [];
    var hit;

    for (var [node, path] of iterable) {
      var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

      if (mode === 'highest' && isLower) {
        continue;
      }

      if (!match(node)) {
        // If we've arrived at a leaf text node that is not lower than the last
        // hit, then we've found a branch that doesn't include a match, which
        // means the match is not universal.
        if (universal && !isLower && Text.isText(node)) {
          return;
        } else {
          continue;
        }
      } // If there's a match and it's lower than the last, update the hit.


      if (mode === 'lowest' && isLower) {
        hit = [node, path];
        continue;
      } // In lowest mode we emit the last hit, once it's guaranteed lowest.


      var emit = mode === 'lowest' ? hit : [node, path];

      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }

      hit = [node, path];
    } // Since lowest is always emitting one behind, catch up at the end.


    if (mode === 'lowest' && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    } // Universal defers to ensure that the match occurs in every branch, so we
    // yield all of the matches after iterating.


    if (universal) {
      yield* matches;
    }
  },

  /**
   * Normalize any dirty objects in the editor.
   */
  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      force = false
    } = options;

    var getDirtyPaths = editor => {
      return DIRTY_PATHS.get(editor) || [];
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), (_ref2) => {
        var [, p] = _ref2;
        return p;
      });
      DIRTY_PATHS.set(editor, allPaths);
    }

    if (getDirtyPaths(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, () => {
      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

      var m = 0;

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var path = getDirtyPaths(editor).pop();
        var entry = Editor.node(editor, path);
        editor.normalizeNode(entry);
        m++;
      }
    });
  },

  /**
   * Get the parent node of a location.
   */
  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  /**
   * Get the path of a location.
   */
  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;

    if (Path.isPath(at)) {
      if (edge === 'start') {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === 'start') {
        at = Range.start(at);
      } else if (edge === 'end') {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Path` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: path,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked path refs of the editor.
   */
  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Get the start or end point of a location.
   */
  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      edge = 'start'
    } = options;

    if (Path.isPath(at)) {
      var path;

      if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path,
        offset: edge === 'end' ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var [start, end] = Range.edges(at);
      return edge === 'start' ? start : end;
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: point,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked point refs of the editor.
   */
  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Iterate through all of the positions in the document where a `Point` can be
   * placed.
   *
   * By default it will move forward by individual offsets at a time,  but you
   * can pass the `unit: 'character'` option to moved forward one character, word,
   * or line at at time.
   *
   * Note: void nodes are treated as a single point, and iteration will not
   * happen inside their content.
   */
  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = 'offset',
      reverse: reverse$1 = false
    } = options;

    if (!at) {
      return;
    }

    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var first = reverse$1 ? end : start;
    var string = '';
    var available = 0;
    var offset = 0;
    var distance = null;
    var isNewBlock = false;

    var advance = () => {
      if (distance == null) {
        if (unit === 'character') {
          distance = getCharacterDistance(string);
        } else if (unit === 'word') {
          distance = getWordDistance(string);
        } else if (unit === 'line' || unit === 'block') {
          distance = string.length;
        } else {
          distance = 1;
        }

        string = string.slice(distance);
      } // Add or substract the offset.


      offset = reverse$1 ? offset - distance : offset + distance; // Subtract the distance traveled from the available text.

      available = available - distance; // If the available had room to spare, reset the distance so that it will
      // advance again next time. Otherwise, set it to the overflow amount.

      distance = available >= 0 ? null : 0 - available;
    };

    for (var [node, path] of Editor.nodes(editor, {
      at,
      reverse: reverse$1
    })) {
      if (Element.isElement(node)) {
        // Void nodes are a special case, since we don't want to iterate over
        // their content. We instead always just yield their first point.
        if (editor.isVoid(node)) {
          yield Editor.start(editor, path);
          continue;
        }

        if (editor.isInline(node)) {
          continue;
        }

        if (Editor.hasInlines(editor, node)) {
          var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          var text = Editor.string(editor, {
            anchor: s,
            focus: e
          });
          string = reverse$1 ? Object(esrever__WEBPACK_IMPORTED_MODULE_2__["reverse"])(text) : text;
          isNewBlock = true;
        }
      }

      if (Text.isText(node)) {
        var isFirst = Path.equals(path, first.path);
        available = node.text.length;
        offset = reverse$1 ? available : 0;

        if (isFirst) {
          available = reverse$1 ? first.offset : available - first.offset;
          offset = first.offset;
        }

        if (isFirst || isNewBlock || unit === 'offset') {
          yield {
            path,
            offset
          };
        }

        while (true) {
          // If there's no more string, continue to the next block.
          if (string === '') {
            break;
          } else {
            advance();
          } // If the available space hasn't overflow, we have another point to
          // yield in the current text node.


          if (available >= 0) {
            yield {
              path,
              offset
            };
          } else {
            break;
          }
        }

        isNewBlock = false;
      }
    }
  },

  /**
   * Get the matching node in the branch of the document before a location.
   */
  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var [, from] = Editor.first(editor, at);
    var [, to] = Editor.first(editor, []);
    var span = [from, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [, previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },

  /**
   * Get a range of a location.
   */
  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Create a mutable ref for a `Range` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: range,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked range refs of the editor.
   */
  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Remove a custom property from all of the leaf text nodes in the current
   * selection.
   *
   * If the selection is currently collapsed, the removal will be stored on
   * `editor.marks` and applied to the text inserted next.
   */
  removeMark(editor, key) {
    editor.removeMark(key);
  },

  /**
   * Get the start point of a location.
   */
  start(editor, at) {
    return Editor.point(editor, at, {
      edge: 'start'
    });
  },

  /**
   * Get the text string content of a location.
   *
   * Note: the text of void nodes is presumed to be an empty string, regardless
   * of what their actual content is.
   */
  string(editor, at) {
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var text = '';

    for (var [node, path] of Editor.nodes(editor, {
      at: range,
      match: Text.isText
    })) {
      var t = node.text;

      if (Path.equals(path, end.path)) {
        t = t.slice(0, end.offset);
      }

      if (Path.equals(path, start.path)) {
        t = t.slice(start.offset);
      }

      text += t;
    }

    return text;
  },

  /**
   * Transform the editor by an operation.
   */
  transform(editor, op) {
    editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.children);
    var selection = editor.selection && Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.selection);

    switch (op.type) {
      case 'insert_node':
        {
          var {
            path,
            node
          } = op;
          var parent = Node.parent(editor, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 0, node);

          if (selection) {
            for (var [point, key] of Range.points(selection)) {
              selection[key] = Point.transform(point, op);
            }
          }

          break;
        }

      case 'insert_text':
        {
          var {
            path: _path,
            offset,
            text
          } = op;

          var _node2 = Node.leaf(editor, _path);

          var before = _node2.text.slice(0, offset);

          var after = _node2.text.slice(offset);

          _node2.text = before + text + after;

          if (selection) {
            for (var [_point, _key] of Range.points(selection)) {
              selection[_key] = Point.transform(_point, op);
            }
          }

          break;
        }

      case 'merge_node':
        {
          var {
            path: _path2
          } = op;

          var _node3 = Node.get(editor, _path2);

          var prevPath = Path.previous(_path2);
          var prev = Node.get(editor, prevPath);

          var _parent = Node.parent(editor, _path2);

          var _index = _path2[_path2.length - 1];

          if (Text.isText(_node3) && Text.isText(prev)) {
            prev.text += _node3.text;
          } else if (!Text.isText(_node3) && !Text.isText(prev)) {
            prev.children.push(..._node3.children);
          } else {
            throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interaces: ").concat(_node3, " ").concat(prev));
          }

          _parent.children.splice(_index, 1);

          if (selection) {
            for (var [_point2, _key2] of Range.points(selection)) {
              selection[_key2] = Point.transform(_point2, op);
            }
          }

          break;
        }

      case 'move_node':
        {
          var {
            path: _path3,
            newPath
          } = op;

          if (Path.isAncestor(_path3, newPath)) {
            throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
          }

          var _node4 = Node.get(editor, _path3);

          var _parent2 = Node.parent(editor, _path3);

          var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
          // the same snapshot in time, there's a mismatch. After either
          // removing the original position, the second step's path can be out
          // of date. So instead of using the `op.newPath` directly, we
          // transform `op.path` to ascertain what the `newPath` would be after
          // the operation was applied.

          _parent2.children.splice(_index2, 1);

          var truePath = Path.transform(_path3, op);
          var newParent = Node.get(editor, Path.parent(truePath));
          var newIndex = truePath[truePath.length - 1];
          newParent.children.splice(newIndex, 0, _node4);

          if (selection) {
            for (var [_point3, _key3] of Range.points(selection)) {
              selection[_key3] = Point.transform(_point3, op);
            }
          }

          break;
        }

      case 'remove_node':
        {
          var {
            path: _path4
          } = op;
          var _index3 = _path4[_path4.length - 1];

          var _parent3 = Node.parent(editor, _path4);

          _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
          // node that was removed we need to update the range or remove it.


          if (selection) {
            for (var [_point4, _key4] of Range.points(selection)) {
              var result = Point.transform(_point4, op);

              if (selection != null && result != null) {
                selection[_key4] = result;
              } else {
                var _prev = void 0;

                var next = void 0;

                for (var [n, p] of Node.texts(editor)) {
                  if (Path.compare(p, _path4) === -1) {
                    _prev = [n, p];
                  } else {
                    next = [n, p];
                    break;
                  }
                }

                if (_prev) {
                  _point4.path = _prev[1];
                  _point4.offset = _prev[0].text.length;
                } else if (next) {
                  _point4.path = next[1];
                  _point4.offset = 0;
                } else {
                  selection = null;
                }
              }
            }
          }

          break;
        }

      case 'remove_text':
        {
          var {
            path: _path5,
            offset: _offset,
            text: _text2
          } = op;

          var _node5 = Node.leaf(editor, _path5);

          var _before = _node5.text.slice(0, _offset);

          var _after = _node5.text.slice(_offset + _text2.length);

          _node5.text = _before + _after;

          if (selection) {
            for (var [_point5, _key5] of Range.points(selection)) {
              selection[_key5] = Point.transform(_point5, op);
            }
          }

          break;
        }

      case 'set_node':
        {
          var {
            path: _path6,
            newProperties
          } = op;

          if (_path6.length === 0) {
            throw new Error("Cannot set properties on the root node!");
          }

          var _node6 = Node.get(editor, _path6);

          for (var _key6 in newProperties) {
            if (_key6 === 'children' || _key6 === 'text') {
              throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
            }

            var value = newProperties[_key6];

            if (value == null) {
              delete _node6[_key6];
            } else {
              _node6[_key6] = value;
            }
          }

          break;
        }

      case 'set_selection':
        {
          var {
            newProperties: _newProperties
          } = op;

          if (_newProperties == null) {
            selection = _newProperties;
          } else if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _newProperties;
          } else {
            Object.assign(selection, _newProperties);
          }

          break;
        }

      case 'split_node':
        {
          var {
            path: _path7,
            position,
            properties
          } = op;

          if (_path7.length === 0) {
            throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
          }

          var _node7 = Node.get(editor, _path7);

          var _parent4 = Node.parent(editor, _path7);

          var _index4 = _path7[_path7.length - 1];
          var newNode;

          if (Text.isText(_node7)) {
            var _before2 = _node7.text.slice(0, position);

            var _after2 = _node7.text.slice(position);

            _node7.text = _before2;
            newNode = _objectSpread$1({}, _node7, {}, properties, {
              text: _after2
            });
          } else {
            var _before3 = _node7.children.slice(0, position);

            var _after3 = _node7.children.slice(position);

            _node7.children = _before3;
            newNode = _objectSpread$1({}, _node7, {}, properties, {
              children: _after3
            });
          }

          _parent4.children.splice(_index4 + 1, 0, newNode);

          if (selection) {
            for (var [_point6, _key7] of Range.points(selection)) {
              selection[_key7] = Point.transform(_point6, op);
            }
          }

          break;
        }
    }

    editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(editor.children);

    if (selection) {
      editor.selection = Object(immer__WEBPACK_IMPORTED_MODULE_1__["isDraft"])(selection) ? Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(selection) : selection;
    } else {
      editor.selection = null;
    }
  },

  /**
   * Convert a range into a non-hanging one.
   */
  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start, end] = Range.edges(range); // PERF: exit early if we can guarantee that the range isn't hanging.

    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: n => Editor.isBlock(editor, n)
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, []);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    for (var [node, path] of Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }

      if (node.text !== '' || Path.isBefore(path, blockPath)) {
        end = {
          path,
          offset: node.text.length
        };
        break;
      }
    }

    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Match a void node in the current branch of the editor.
   */
  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$1({}, options, {
      match: n => Editor.isVoid(editor, n)
    }));
  },

  /**
   * Call a function, deferring normalization until after it completes.
   */
  withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    NORMALIZING.set(editor, false);
    fn();
    NORMALIZING.set(editor, value);
    Editor.normalize(editor);
  }

};

var Element = {
  /**
   * Check if a value implements the `Element` interface.
   */
  isElement(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
  },

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList(value) {
    return Array.isArray(value) && (value.length === 0 || Element.isElement(value[0]));
  },

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches(element, props) {
    for (var key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }

};

var Location = {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }

};
var Span = {
  /**
   * Check if a value implements the `Span` interface.
   */
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }

};

var Node = {
  /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */
  ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return an iterable of all the ancestor nodes above a specific path.
   *
   * By default the order is bottom-up, from lowest to highest ancestor in
   * the tree, but you can pass the `reverse: true` option to go top-down.
   */
  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.ancestors(path, options)) {
      var n = Node.ancestor(root, p);
      var entry = [n, p];
      yield entry;
    }
  },

  /**
   * Get the child of a node at a specific index.
   */
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
    }

    return c;
  },

  /**
   * Iterate over the children of a node at a specific path.
   */
  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  /**
   * Get an entry for the common ancesetor node of two paths.
   */
  common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },

  /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */
  descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return an iterable of all the descendant node entries inside a root node.
   */
  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        // NOTE: we have to coerce here because checking the path's length does
        // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
        yield [node, path];
      }
    }
  },

  /**
   * Return an iterable of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */
  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Element.isElement(node)) {
        yield [node, path];
      }
    }
  },

  /**
   * Get the first node entry in a root node from a path.
   */
  first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }

    return [n, p];
  },

  /**
   * Get the sliced fragment represented by a range inside a root node.
   */
  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
    }

    var newRoot = Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(root, r => {
      var [start, end] = Range.edges(range);
      var iterable = Node.nodes(r, {
        reverse: true,
        pass: (_ref) => {
          var [, path] = _ref;
          return !Range.includes(range, path);
        }
      });

      for (var [, path] of iterable) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }

        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r, path);

          _leaf.text = _leaf.text.slice(start.offset);
        }
      }

      delete r.selection;
    });
    return newRoot.children;
  },

  /**
   * Get the descendant node referred to by a specific path. If the path is an
   * empty array, it refers to the root node itself.
   */
  get(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  /**
   * Check if a descendant node exists at a specific path.
   */
  has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
    }

    return true;
  },

  /**
   * Check if a value implements the `Node` interface.
   */
  isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  /**
   * Check if a value is a list of `Node` objects.
   */
  isNodeList(value) {
    return Array.isArray(value) && (value.length === 0 || Node.isNode(value[0]));
  },

  /**
   * Get the lash node entry in a root node from a path.
   */
  last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }

    return [n, p];
  },

  /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */
  leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
    }

    return node;
  },

  /**
   * Return an iterable of the in a branch of the tree, from a specific path.
   *
   * By default the order is top-down, from lowest to highest node in the tree,
   * but you can pass the `reverse: true` option to go bottom-up.
   */
  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.levels(path, options)) {
      var n = Node.get(root, p);
      yield [n, p];
    }
  },

  /**
   * Check if a node matches a set of props.
   */
  matches(node, props) {
    return Element.isElement(node) && Element.matches(node, props) || Text.isText(node) && Text.matches(node, props);
  },

  /**
   * Return an iterable of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */
  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = new Set();
    var p = [];
    var n = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n)) {
        yield [n, p];
      } // If we're allowed to go downward and we haven't decsended yet, do.


      if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        var nextIndex = reverse ? n.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n = Node.get(root, p);
        continue;
      } // If we're at the root and we can't go down, we're done.


      if (p.length === 0) {
        break;
      } // If we're going forward...


      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      } // If we're going backward...


      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n = Node.get(root, p);
        continue;
      } // Otherwise we're going upward...


      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },

  /**
   * Get the parent of a node at a specific path.
   */
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
  },

  /**
   * Get the concatenated text string of a node's content.
   *
   * Note that this will not include spaces or line breaks between block nodes.
   * It is not a user-facing string, but a string for performing offset-related
   * computations for a node.
   */
  string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join('');
    }
  },

  /**
   * Return an iterable of all leaf text nodes in a root node.
   */
  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Text.isText(node)) {
        yield [node, path];
      }
    }
  }

};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Operation = {
  /**
   * Check of a value is a `NodeOperation` object.
   */
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_node');
  },

  /**
   * Check of a value is an `Operation` object.
   */
  isOperation(value) {
    if (!Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
      return false;
    }

    switch (value.type) {
      case 'insert_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'insert_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'merge_node':
        return typeof value.position === 'number' && (typeof value.target === 'number' || value.target === null) && Path.isPath(value.path) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.properties);

      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'set_node':
        return Path.isPath(value.path) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.properties) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.newProperties);

      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.properties) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.newProperties);

      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && (typeof value.target === 'number' || value.target === null) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value.properties);

      default:
        return false;
    }
  },

  /**
   * Check if a value is a list of `Operation` objects.
   */
  isOperationList(value) {
    return Array.isArray(value) && (value.length === 0 || Operation.isOperation(value[0]));
  },

  /**
   * Check of a value is a `SelectionOperation` object.
   */
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },

  /**
   * Check of a value is a `TextOperation` object.
   */
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },

  /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */
  inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$2({}, op, {
            type: 'remove_node'
          });
        }

      case 'insert_text':
        {
          return _objectSpread$2({}, op, {
            type: 'remove_text'
          });
        }

      case 'merge_node':
        {
          return _objectSpread$2({}, op, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }

      case 'move_node':
        {
          var {
            newPath,
            path
          } = op; // PERF: in this case the move operation is a no-op anyways.

          if (Path.equals(newPath, path)) {
            return op;
          } // We need to get the original path here, but sometimes the `newPath`
          // is a younger sibling of (or ends before) the original, and this
          // accounts for it.


          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$2({}, op, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case 'remove_node':
        {
          return _objectSpread$2({}, op, {
            type: 'insert_node'
          });
        }

      case 'remove_text':
        {
          return _objectSpread$2({}, op, {
            type: 'insert_text'
          });
        }

      case 'set_node':
        {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$2({}, op, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case 'set_selection':
        {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;

          if (_properties == null) {
            return _objectSpread$2({}, op, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$2({}, op, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$2({}, op, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case 'split_node':
        {
          return _objectSpread$2({}, op, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }

};

var Path = {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from deepest to shallowest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  /**
   * Get the common ancestor path of two paths.
   */
  common(path, another) {
    var common = [];

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  /**
   * Check if a path is exactly equal to another.
   */
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },

  /**
   * Check if a path is after another.
   */
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is before another.
   */
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  /**
   * Check if a path is a child of another.
   */
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is the parent of another.
   */
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
  },

  /**
   * Check if a path is a sibling of another.
   */
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  /**
   * Given a path, get the path to the next sibling node.
   */
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  /**
   * Get a path relative to an ancestor.
   */
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  /**
   * Transform a path by an operation.
   */
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(path, p => {
      var {
        affinity = 'forward'
      } = options; // PERF: Exit early if the operation is guaranteed not to have an effect.

      if (path.length === 0) {
        return;
      }

      switch (operation.type) {
        case 'insert_node':
          {
            var {
              path: op
            } = operation;

            if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
              p[op.length - 1] += 1;
            }

            break;
          }

        case 'remove_node':
          {
            var {
              path: _op
            } = operation;

            if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
              return null;
            } else if (Path.endsBefore(_op, p)) {
              p[_op.length - 1] -= 1;
            }

            break;
          }

        case 'merge_node':
          {
            var {
              path: _op2,
              position
            } = operation;

            if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
              p[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p)) {
              p[_op2.length - 1] -= 1;
              p[_op2.length] += position;
            }

            break;
          }

        case 'split_node':
          {
            var {
              path: _op3,
              position: _position
            } = operation;

            if (Path.equals(_op3, p)) {
              if (affinity === 'forward') {
                p[p.length - 1] += 1;
              } else if (affinity === 'backward') ; else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p)) {
              p[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
              p[_op3.length - 1] += 1;
              p[_op3.length] -= _position;
            }

            break;
          }

        case 'move_node':
          {
            var {
              path: _op4,
              newPath: onp
            } = operation; // If the old and new path are the same, it's a no-op.

            if (Path.equals(_op4, onp)) {
              return;
            }

            if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
              var copy = onp.slice();

              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                var i = Math.min(onp.length, _op4.length) - 1;
                copy[i] -= 1;
              }

              return copy.concat(p.slice(_op4.length));
            } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              }

              p[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p)) {
              if (Path.equals(onp, p)) {
                p[onp.length - 1] += 1;
              }

              p[_op4.length - 1] -= 1;
            }

            break;
          }
      }
    });
  }

};

var PathRef = {
  /**
   * Transform the path ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Point = {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  /**
   * Check if a point is after another.
   */
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  /**
   * Check if a point is before another.
   */
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  /**
   * Check if a point is exactly equal to another.
   */
  equals(point, another) {
    // PERF: ensure the offsets are equal first since they are cheaper to check.
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && typeof value.offset === 'number' && Path.isPath(value.path);
  },

  /**
   * Transform a point by an operation.
   */
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(point, p => {
      var {
        affinity = 'forward'
      } = options;
      var {
        path,
        offset
      } = p;

      switch (op.type) {
        case 'insert_node':
        case 'move_node':
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case 'insert_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset += op.text.length;
            }

            break;
          }

        case 'merge_node':
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'remove_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case 'remove_node':
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'split_node':
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$3({}, options, {
                  affinity: 'forward'
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }

};

var PointRef = {
  /**
   * Transform the point ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }

};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Range = {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  /**
   * Get the end point of a range.
   */
  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },

  /**
   * Check if a range is exactly equal to another.
   */
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  /**
   * Get the intersection of a range with another.
   */
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, ["anchor", "focus"]);

    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$4({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward(range) {
    return !Range.isBackward(range);
  },

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  /**
   * Iterate through all of the point entries in a range.
   */
  *points(range) {
    yield [range.anchor, 'anchor'];
    yield [range.focus, 'focus'];
  },

  /**
   * Get the start point of a range.
   */
  start(range) {
    var [start] = Range.edges(range);
    return start;
  },

  /**
   * Transform a range by an operation.
   */
  transform(range, op, options) {
    var {
      affinity = 'inward'
    } = options;
    var affinityAnchor;
    var affinityFocus;

    if (affinity === 'inward') {
      if (Range.isForward(range)) {
        affinityAnchor = 'forward';
        affinityFocus = 'backward';
      } else {
        affinityAnchor = 'backward';
        affinityFocus = 'forward';
      }
    } else if (affinity === 'outward') {
      if (Range.isForward(range)) {
        affinityAnchor = 'backward';
        affinityFocus = 'forward';
      } else {
        affinityAnchor = 'forward';
        affinityFocus = 'backward';
      }
    } else {
      affinityAnchor = affinity;
      affinityFocus = affinity;
    }

    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(range, r => {
      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r.anchor = anchor;
      r.focus = focus;
    });
  }

};

var RangeRef = {
  /**
   * Transform the range ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Text = {
  /**
   * Check if two text nodes are equal.
   */
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      loose = false
    } = options;

    for (var key in text) {
      if (loose && key === 'text') {
        continue;
      }

      if (text[key] !== another[key]) {
        return false;
      }
    }

    for (var _key in another) {
      if (loose && _key === 'text') {
        continue;
      }

      if (text[_key] !== another[_key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Check if a value implements the `Text` interface.
   */
  isText(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && typeof value.text === 'string';
  },

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList(value) {
    return Array.isArray(value) && (value.length === 0 || Text.isText(value[0]));
  },

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches(text, props) {
    for (var key in props) {
      if (key === 'text') {
        continue;
      }

      if (text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Get the leaves for a text node given decorations.
   */
  decorations(node, decorations) {
    var leaves = [_objectSpread$5({}, node)];

    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, ["anchor", "focus"]);

      var [start, end] = Range.edges(dec);
      var next = [];
      var o = 0;

      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var offset = o;
        o += length; // If the range encompases the entire leaf, add the range.

        if (start.offset <= offset && end.offset >= offset + length) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        } // If the range starts after the leaf, or ends before it, continue.


        if (start.offset > offset + length || end.offset < offset || end.offset === offset && offset !== 0) {
          next.push(leaf);
          continue;
        } // Otherwise we need to split the leaf, at the start, end, or both,
        // and add the range to the middle intersecting section. Do the end
        // split first since we don't need to update the offset that way.


        var middle = leaf;
        var before = void 0;
        var after = void 0;

        if (end.offset < offset + length) {
          var off = end.offset - offset;
          after = _objectSpread$5({}, middle, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$5({}, middle, {
            text: middle.text.slice(0, off)
          });
        }

        if (start.offset > offset) {
          var _off = start.offset - offset;

          before = _objectSpread$5({}, middle, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$5({}, middle, {
            text: middle.text.slice(_off)
          });
        }

        Object.assign(middle, rest);

        if (before) {
          next.push(before);
        }

        next.push(middle);

        if (after) {
          next.push(after);
        }
      }

      leaves = next;
    }

    return leaves;
  }

};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var GeneralTransforms = {
  /**
   * Transform the editor by an operation.
   */
  transform(editor, op) {
    editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.children);
    var selection = editor.selection && Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.selection);

    switch (op.type) {
      case 'insert_node':
        {
          var {
            path,
            node
          } = op;
          var parent = Node.parent(editor, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 0, node);

          if (selection) {
            for (var [point, key] of Range.points(selection)) {
              selection[key] = Point.transform(point, op);
            }
          }

          break;
        }

      case 'insert_text':
        {
          var {
            path: _path,
            offset,
            text
          } = op;

          var _node = Node.leaf(editor, _path);

          var before = _node.text.slice(0, offset);

          var after = _node.text.slice(offset);

          _node.text = before + text + after;

          if (selection) {
            for (var [_point, _key] of Range.points(selection)) {
              selection[_key] = Point.transform(_point, op);
            }
          }

          break;
        }

      case 'merge_node':
        {
          var {
            path: _path2
          } = op;

          var _node2 = Node.get(editor, _path2);

          var prevPath = Path.previous(_path2);
          var prev = Node.get(editor, prevPath);

          var _parent = Node.parent(editor, _path2);

          var _index = _path2[_path2.length - 1];

          if (Text.isText(_node2) && Text.isText(prev)) {
            prev.text += _node2.text;
          } else if (!Text.isText(_node2) && !Text.isText(prev)) {
            prev.children.push(..._node2.children);
          } else {
            throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interaces: ").concat(_node2, " ").concat(prev));
          }

          _parent.children.splice(_index, 1);

          if (selection) {
            for (var [_point2, _key2] of Range.points(selection)) {
              selection[_key2] = Point.transform(_point2, op);
            }
          }

          break;
        }

      case 'move_node':
        {
          var {
            path: _path3,
            newPath
          } = op;

          if (Path.isAncestor(_path3, newPath)) {
            throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
          }

          var _node3 = Node.get(editor, _path3);

          var _parent2 = Node.parent(editor, _path3);

          var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
          // the same snapshot in time, there's a mismatch. After either
          // removing the original position, the second step's path can be out
          // of date. So instead of using the `op.newPath` directly, we
          // transform `op.path` to ascertain what the `newPath` would be after
          // the operation was applied.

          _parent2.children.splice(_index2, 1);

          var truePath = Path.transform(_path3, op);
          var newParent = Node.get(editor, Path.parent(truePath));
          var newIndex = truePath[truePath.length - 1];
          newParent.children.splice(newIndex, 0, _node3);

          if (selection) {
            for (var [_point3, _key3] of Range.points(selection)) {
              selection[_key3] = Point.transform(_point3, op);
            }
          }

          break;
        }

      case 'remove_node':
        {
          var {
            path: _path4
          } = op;
          var _index3 = _path4[_path4.length - 1];

          var _parent3 = Node.parent(editor, _path4);

          _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
          // node that was removed we need to update the range or remove it.


          if (selection) {
            for (var [_point4, _key4] of Range.points(selection)) {
              var result = Point.transform(_point4, op);

              if (selection != null && result != null) {
                selection[_key4] = result;
              } else {
                var _prev = void 0;

                var next = void 0;

                for (var [n, p] of Node.texts(editor)) {
                  if (Path.compare(p, _path4) === -1) {
                    _prev = [n, p];
                  } else {
                    next = [n, p];
                    break;
                  }
                }

                if (_prev) {
                  _point4.path = _prev[1];
                  _point4.offset = _prev[0].text.length;
                } else if (next) {
                  _point4.path = next[1];
                  _point4.offset = 0;
                } else {
                  selection = null;
                }
              }
            }
          }

          break;
        }

      case 'remove_text':
        {
          var {
            path: _path5,
            offset: _offset,
            text: _text
          } = op;

          var _node4 = Node.leaf(editor, _path5);

          var _before = _node4.text.slice(0, _offset);

          var _after = _node4.text.slice(_offset + _text.length);

          _node4.text = _before + _after;

          if (selection) {
            for (var [_point5, _key5] of Range.points(selection)) {
              selection[_key5] = Point.transform(_point5, op);
            }
          }

          break;
        }

      case 'set_node':
        {
          var {
            path: _path6,
            newProperties
          } = op;

          if (_path6.length === 0) {
            throw new Error("Cannot set properties on the root node!");
          }

          var _node5 = Node.get(editor, _path6);

          for (var _key6 in newProperties) {
            if (_key6 === 'children' || _key6 === 'text') {
              throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
            }

            var value = newProperties[_key6];

            if (value == null) {
              delete _node5[_key6];
            } else {
              _node5[_key6] = value;
            }
          }

          break;
        }

      case 'set_selection':
        {
          var {
            newProperties: _newProperties
          } = op;

          if (_newProperties == null) {
            selection = _newProperties;
          } else if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _newProperties;
          } else {
            Object.assign(selection, _newProperties);
          }

          break;
        }

      case 'split_node':
        {
          var {
            path: _path7,
            position,
            properties
          } = op;

          if (_path7.length === 0) {
            throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
          }

          var _node6 = Node.get(editor, _path7);

          var _parent4 = Node.parent(editor, _path7);

          var _index4 = _path7[_path7.length - 1];
          var newNode;

          if (Text.isText(_node6)) {
            var _before2 = _node6.text.slice(0, position);

            var _after2 = _node6.text.slice(position);

            _node6.text = _before2;
            newNode = _objectSpread$6({}, _node6, {}, properties, {
              text: _after2
            });
          } else {
            var _before3 = _node6.children.slice(0, position);

            var _after3 = _node6.children.slice(position);

            _node6.children = _before3;
            newNode = _objectSpread$6({}, _node6, {}, properties, {
              children: _after3
            });
          }

          _parent4.children.splice(_index4 + 1, 0, newNode);

          if (selection) {
            for (var [_point6, _key7] of Range.points(selection)) {
              selection[_key7] = Point.transform(_point6, op);
            }
          }

          break;
        }
    }

    editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(editor.children);

    if (selection) {
      editor.selection = Object(immer__WEBPACK_IMPORTED_MODULE_1__["isDraft"])(selection) ? Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(selection) : selection;
    } else {
      editor.selection = null;
    }
  }

};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NodeTransforms = {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at,
        match,
        select
      } = options;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var [node] = nodes; // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-selected state.

      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = n => Text.isText(n);
          } else if (editor.isInline(node)) {
            match = n => Text.isText(n) || Editor.isInline(editor, n);
          } else {
            match = n => Editor.isBlock(editor, n);
          }
        }

        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });

        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }

      for (var _node of nodes) {
        var _path = parentPath.concat(index);

        index++;
        editor.apply({
          type: 'insert_node',
          path: _path,
          node: _node
        });
      }

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, (_ref) => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var [parent, parentPath] = Editor.node(editor, Path.parent(path));
        var index = path[path.length - 1];
        var {
          length
        } = parent.children;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n => parent.children.includes(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });

      if (!current || !prev) {
        return;
      }

      var [node, path] = current;
      var [prevNode, prevPath] = prev;

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), (_ref2) => {
        var [n] = _ref2;
        return n;
      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
      // result, in which case we'll want to remove it after merging.

      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: 'highest',
        match: n => levels.includes(n) && Element.isElement(n) && n.children.length === 1
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position; // Ensure that the nodes are equivalent, and figure out what the position
      // and extra properties of the merge will be.

      if (Text.isText(node) && Text.isText(prevNode)) {
        var rest = _objectWithoutProperties(node, ["text"]);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node, ["children"]);

        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
      } // If the node isn't already the next sibling of the previous node, move
      // it so that it is before merging.


      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      } // If there was going to be an empty ancestor of the node that was merged,
      // we remove it from the tree.


      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      } // If the target node that we're merging with is empty, remove it instead
      // of merging the two. This is a common rich text editor behavior to
      // prevent losing formatting when deleting entire nodes when you have a
      // hanging selection.


      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '') {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: 'merge_node',
          path: newPath,
          position,
          target: null,
          properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, (_ref3) => {
        var [, p] = _ref3;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: 'move_node',
            path,
            newPath
          });
        }
      }

      toRef.unref();
    });
  },

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, (_ref4) => {
        var [, p] = _ref4;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path) {
          var [node] = Editor.node(editor, path);
          editor.apply({
            type: 'remove_node',
            path,
            node
          });
        }
      }
    });
  },

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        mode = 'lowest',
        split = false,
        voids = false
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (split && Range.isRange(at)) {
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        var [start, end] = Range.edges(at);
        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
        Transforms.splitNodes(editor, {
          at: end,
          match,
          mode: splitMode,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          mode: splitMode,
          voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      for (var [node, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {}; // You can't set properties on the editor node.

        if (path.length === 0) {
          continue;
        }

        for (var k in props) {
          if (k === 'children' || k === 'text') {
            continue;
          }

          if (props[k] !== node[k]) {
            properties[k] = node[k];
            newProperties[k] = props[k];
          }
        }

        if (Object.keys(newProperties).length !== 0) {
          editor.apply({
            type: 'set_node',
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },

  /**
   * Split the nodes at a specific location.
   */
  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;

      if (match == null) {
        match = n => Editor.isBlock(editor, n);
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      } // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.


      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);

        match = n => n === parent;

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: 'backward'
      });
      var [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });

      if (!highest) {
        return;
      }

      var voidMatch = Editor.void(editor, {
        at,
        mode: 'highest'
      });
      var nudge = 0;

      if (!voids && voidMatch) {
        var [voidNode, voidPath] = voidMatch;

        if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
          var after = Editor.after(editor, voidPath);

          if (!after) {
            var text = {
              text: ''
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after = Editor.point(editor, afterPath);
          }

          at = after;
          always = true;
        }

        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }

      var afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;
      var [, highestPath] = highest;
      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;
      var target = null;

      for (var [node, _path2] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        var split = false;

        if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
          break;
        }

        var _point = beforeRef.current;
        var isEnd = Editor.isEnd(editor, _point, _path2);

        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
          split = true;

          var properties = _objectWithoutProperties(node, ["text", "children"]);

          editor.apply({
            type: 'split_node',
            path: _path2,
            position,
            target,
            properties
          });
        }

        target = position;
        position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
      }

      if (options.at == null) {
        var _point2 = afterRef.current || Editor.end(editor, []);

        Transforms.select(editor, _point2);
      }

      beforeRef.unref();
      afterRef.unref();
    });
  },

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    for (var key of props) {
      obj[key] = null;
    }

    Transforms.setNodes(editor, obj, options);
  },

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, (_ref5) => {
        var [, p] = _ref5;
        return Editor.pathRef(editor, p);
      });

      var _loop = function _loop(pathRef) {
        var path = pathRef.unref();
        var [node] = Editor.node(editor, path);
        var range = Editor.range(editor, path);

        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }

        Transforms.liftNodes(editor, {
          at: range,
          match: n => node.children.includes(n),
          voids
        });
      };

      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = n => Editor.isInline(editor, n) || Text.isText(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (split && Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        Transforms.splitNodes(editor, {
          at: end,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? n => Editor.isBlock(editor, n) : n => Editor.isEditor(n),
        mode: 'highest',
        voids
      }));

      for (var [, rootPath] of roots) {
        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match,
          mode,
          voids
        }));

        if (matches.length > 0) {
          (function () {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;
            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var [commonNode] = Editor.node(editor, commonPath);
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$7({}, element, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: n => commonNode.children.includes(n),
              to: wrapperPath.concat(0),
              voids
            });
          })();
        }
      }
    });
  }

};
/**
 * Convert a range into a point by deleting it's content.
 */

var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = (editor, path) => {
  var [node] = Editor.node(editor, path);
  return n => n === node;
};

var SelectionTransforms = {
  /**
   * Collapse the selection.
   */
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      edge = 'anchor'
    } = options;
    var {
      selection
    } = editor;

    if (!selection) {
      return;
    } else if (edge === 'anchor') {
      Transforms.select(editor, selection.anchor);
    } else if (edge === 'focus') {
      Transforms.select(editor, selection.focus);
    } else if (edge === 'start') {
      var [start] = Range.edges(selection);
      Transforms.select(editor, start);
    } else if (edge === 'end') {
      var [, end] = Range.edges(selection);
      Transforms.select(editor, end);
    }
  },

  /**
   * Unset the selection.
   */
  deselect(editor) {
    var {
      selection
    } = editor;

    if (selection) {
      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: null
      });
    }
  },

  /**
   * Move the selection's point forward or backward.
   */
  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = 'character',
      reverse = false
    } = options;
    var {
      edge = null
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};

    if (edge == null || edge === 'anchor') {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === 'focus') {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  /**
   * Set the selection to a new value.
   */
  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
    }

    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: target
    });
  },

  /**
   * Set new properties on one of the selection's points.
   */
  setPoint(editor, props, options) {
    var {
      selection
    } = editor;
    var {
      edge = 'both'
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var point = edge === 'anchor' ? anchor : focus;
    var newPoint = Object.assign(point, props);

    if (edge === 'anchor') {
      Transforms.setSelection(editor, {
        anchor: newPoint
      });
    } else {
      Transforms.setSelection(editor, {
        focus: newPoint
      });
    }
  },

  /**
   * Set new properties on the selection.
   */
  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k in props) {
      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: 'set_selection',
        properties: oldProps,
        newProperties: newProps
      });
    }
  }

};

var TextTransforms = {
  /**
   * Delete content in the editor.
   */
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = 'character',
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;

      if (!at) {
        return;
      }

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: 'highest'
        });

        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }

      var [start, end] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: end,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start,
        mode: 'highest'
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end,
        mode: 'highest'
      }); // If the start or end points are inside an inline void, nudge them out.

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      } // Get the highest nodes that are completely inside the range, as well as
      // the start and end nodes.


      var matches = [];
      var lastPath;

      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node, path] = entry;

        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }

        if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }

      var pathRefs = Array.from(matches, (_ref) => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset
        } = start;

        var text = _node.text.slice(offset);

        editor.apply({
          type: 'remove_text',
          path: _path,
          offset,
          text
        });
      }

      for (var pathRef of pathRefs) {
        var _path2 = pathRef.unref();

        Transforms.removeNodes(editor, {
          at: _path2,
          voids
        });
      }

      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path3
        } = _point2;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node2.text.slice(_offset, end.offset);

        editor.apply({
          type: 'remove_text',
          path: _path3,
          offset: _offset,
          text: _text
        });
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }

      var point = endRef.unref() || startRef.unref();

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  /**
   * Insert a fragment at a specific location in the editor.
   */
  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      } // If the insert point is at the edge of an inline node, move it outside
      // instead since it will need to be split otherwise.


      var inlineElementMatch = Editor.above(editor, {
        at,
        match: n => Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];

      var matcher = (_ref2) => {
        var [n, p] = _ref2;

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        return true;
      };

      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (entry[1].length > 0 && matcher(entry)) {
          matches.push(entry);
        }
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var [node] of matches) {
        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.splitNodes(editor, {
        at,
        match: n => hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n),
        mode: hasBlocks ? 'lowest' : 'highest',
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });
      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: n => Editor.isBlock(editor, n),
        mode: 'lowest',
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0) {
          path = Path.previous(middleRef.current);
        } else {
          path = Path.previous(startRef.current);
        }

        var _end = Editor.end(editor, path);

        Transforms.select(editor, _end);
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  /**
   * Insert a string of text in the Editor.
   */
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          at = pointRef.unref();
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }

      var {
        path,
        offset
      } = at;
      editor.apply({
        type: 'insert_text',
        path,
        offset,
        text
      });
    });
  }

};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Transforms = _objectSpread$8({}, GeneralTransforms, {}, NodeTransforms, {}, SelectionTransforms, {}, TextTransforms);


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

})
//# sourceMappingURL=new.js.1ea581cf21ef2494d074.hot-update.js.map