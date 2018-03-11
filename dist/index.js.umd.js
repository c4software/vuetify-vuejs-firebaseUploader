(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index.js"] = factory();
	else
		root["index.js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/eF2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("UbOL");
var hide = __webpack_require__("iIHC");
var has = __webpack_require__("1YjY");
var SRC = __webpack_require__("XNkZ")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("5jKG").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jL/W");


/***/ }),

/***/ "0zrO":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("PpzO");
var toLength = __webpack_require__("ed1Z");
var toAbsoluteIndex = __webpack_require__("hH9z");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "1YjY":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "2ib6":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("f56v");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "3XlM":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "40tU":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dN6c");
var document = __webpack_require__("UbOL").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "5jKG":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "9Ji6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("D5sW") && !__webpack_require__("EBDe")(function () {
  return Object.defineProperty(__webpack_require__("40tU")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9Uxj":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dN6c");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "D+3s":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "D5sW":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("EBDe")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "EBDe":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "PpzO":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("2ib6");
var defined = __webpack_require__("3XlM");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "UbOL":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "XNkZ":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "dN6c":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "drtT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("EBDe");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "dy7O":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("wUqy");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "ed1Z":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("j/sJ");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "f56v":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "hH9z":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("j/sJ");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "iIHC":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("sH0h");
var createDesc = __webpack_require__("D+3s");
module.exports = __webpack_require__("D5sW") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "j/sJ":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "jL/W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("yeSf");
var es6_array_index_of_default = /*#__PURE__*/__webpack_require__.n(es6_array_index_of);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/valentinbrosseau/javascript/vuetify-vuejs-firebaseUploader/node_modules/.cache/cache-loader"}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib?{"presets":["/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/babel-preset-app/index.js"]}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/selector.js?type=script&index=0!./FirebaseUploader.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var selectortype_script_index_0_FirebaseUploader = ({
  name: "FirebaseUploader",
  data: function data() {
    return {
      hasError: false,
      loading: false,
      defaultImage: false,
      hasFile: false
    };
  },
  created: function created() {
    this.getMetaData()();
  },
  props: {
    /**
     * Labels
     */
    uploadFileLabel: {
      type: String,
      default: "Upload a file"
    },
    deleteFileLabel: {
      type: String,
      default: "Remove this file"
    },
    unsuportedMediaTypeLabel: {
      type: String,
      default: "Unsuported Media Type. Please use a correct file format"
    },

    /**
     * Firebase save path
     */
    path: {
      type: String,
      required: true
    },

    /**
     * Firebase storage access
     */
    storage: {
      type: Object,
      required: true
    },

    /**
     * Output filename
     */
    targetFileName: {
      type: String,
      required: true
    },

    /**
     * Output filename
     */
    limitToType: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    targetPath: function targetPath() {
      return this.path + '/' + this.targetFileName;
    },
    getFileRef: function getFileRef() {
      return this.storage.ref().child(this.targetPath());
    },

    /**
     * Reset the file upload to allow multiple files upload (chain)
     */
    resetUpload: function resetUpload() {
      var control = this.$refs.loader;
      control.replaceWith(control.val('').clone(true));
    },

    /**
     * Triggered on file selection.
     */
    onChangeLoader: function onChangeLoader() {
      if (event.target.files[0]) {
        this.uploadFile(event.target.files[0]);
      }
    },
    getMetaData: function getMetaData() {
      var _this = this;

      this.loading = true;
      this.getFileRef().getMetadata().then(function (m) {
        _this.hasFile = true;
        _this.loading = false;

        if (m.type === 'file' && m.contentType.indexOf('image/') !== -1) {
          _this.defaultImage = m.downloadURLs[0];
        }
      }).catch(function () {
        _this.loading = false;
        _this.defaultImage = false;
      });
    },

    /**
     * Upload a new file in firebase
     * @param file
     * @returns {boolean}
     */
    uploadFile: function uploadFile(file) {
      var _this2 = this;

      if (this.limitToType.length >= 1 && this.limitToType.indexOf(file.type) === -1) {
        // File type not authorized
        this.hasError = true;
        return false;
      } else {
        this.hasError = false;
      }

      this.loading = true;
      /**
       * Upload file to firebase
       */

      this.getFileRef().put(file).then(function () {
        _this2.getMetaData();

        _this2.loading = false;

        _this2.$emit('onUpload', _this2.targetPath());
      }).catch(function () {
        _this2.$emit('onUploadError', _this2.targetPath());

        _this2.loading = false;
      });
    },

    /**
     * Remove file in Firebase Storage
     */
    deleteFile: function deleteFile() {
      var _this3 = this;

      this.loading = true;
      this.getFileRef().delete().then(function () {
        _this3.loading = false;
        _this3.defaultImage = false;
        _this3.hasFile = false;

        _this3.resetUpload();

        _this3.$emit('onDelete', _this3.targetPath());
      }).catch(function () {
        _this3.loading = false;
      });
    }
  }
});
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66256bd9","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/selector.js?type=template&index=0!./FirebaseUploader.vue
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"xs12":"","sm3":""}},[_c('v-card',[(this.defaultImage !== false)?_c('v-card-media',{attrs:{"src":this.defaultImage,"height":"200px"}}):_vm._e(),_c('v-alert',{attrs:{"outline":"","color":"error","icon":"warning","value":_vm.hasError}},[_vm._v(_vm._s(this.unsuportedMediaTypeLabel))]),_c('v-card-actions',[_c('input',{ref:"loader",attrs:{"type":"file","hidden":""},on:{"change":_vm.onChangeLoader}}),(!this.hasFile)?_c('v-btn',{attrs:{"flat":"","loading":_vm.loading,"block":""},on:{"click":function () {this$1.$refs.loader.click()}}},[_vm._v(_vm._s(this.uploadFileLabel))]):_c('v-btn',{attrs:{"flat":"","loading":_vm.loading,"block":""},on:{"click":function () {this$1.deleteFile()}}},[_vm._v(_vm._s(this.deleteFileLabel))])],1)],1)],1)}
var staticRenderFns = []

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./FirebaseUploader.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  selectortype_script_index_0_FirebaseUploader,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var FirebaseUploader = (Component.exports);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (FirebaseUploader);


/***/ }),

/***/ "sH0h":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("9Uxj");
var IE8_DOM_DEFINE = __webpack_require__("9Ji6");
var toPrimitive = __webpack_require__("vPlL");
var dP = Object.defineProperty;

exports.f = __webpack_require__("D5sW") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "vPlL":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("dN6c");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "wUqy":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "yeSf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("yzQb");
var $indexOf = __webpack_require__("0zrO")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("drtT")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "yzQb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("UbOL");
var core = __webpack_require__("5jKG");
var hide = __webpack_require__("iIHC");
var redefine = __webpack_require__("/eF2");
var ctx = __webpack_require__("dy7O");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.umd.js.map