(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-scroll-tab"] = factory();
	else
		root["vue-scroll-tab"] = factory();
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bGai");


/***/ }),

/***/ "bGai":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/limichange/limiCode/vue-scroll-tab/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/ScrollTab.vue
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
/* harmony default export */ var ScrollTab = ({
  name: 'ScrollTab',
  data: function data() {
    return {
      wrapWidth: 0,
      itemInfos: []
    };
  },
  mounted: function mounted() {
    this.fixWidth();
  },
  methods: {
    clickHandle: function clickHandle(e) {
      var sTab = this.$refs.sTab;
      var left = e.layerX + sTab.scrollLeft;
      var item = this.itemInfos.find(function (info, index, itemInfos) {
        if (!itemInfos[index + 1]) {
          return info;
        } else {
          return info.left < left && itemInfos[index + 1].left > left;
        }
      });
      this.active(item.index);
      this.$emit('click', item);
    },
    active: function active(index) {
      var item = this.itemInfos[index];
      var left = item.left + item.width / 2 - this.$refs.sTab.offsetWidth / 2;
      this.smoothScroll(left);
    },
    fixWidth: function fixWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.positionList = [];
        _this.wrapWidth = 0;

        _this.$slots.default.forEach(function (_ref, index) {
          var elm = _ref.elm;

          _this.itemInfos.push({
            left: _this.wrapWidth,
            width: elm.offsetWidth,
            index: index
          });

          _this.wrapWidth += elm.offsetWidth;
        });
      });
    },
    smoothScroll: function smoothScroll(to) {
      var self = this;
      var scroller = this.$refs.sTab;
      var from = scroller.scrollLeft;
      var direction = to - from > 0 ? 'bottom' : 'top';
      this.scrolling = true;
      var intervalId = setInterval(function () {
        if (Math.abs(from - to) <= 20) {
          clearInterval(intervalId);
          scroller.scrollLeft = to;
          self.scrolling = false;
        } else {
          var r = (to - from) / 3;
          r = Math.abs(r) > 20 ? r : direction === 'bottom' ? 20 : -20;
          from += r;
          scroller.scrollLeft = from;
        }
      }, 16.7);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f7cc99c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ScrollTab.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"sTab",staticClass:"sTab",on:{"click":_vm.clickHandle}},[_c('div',{staticClass:"sTabWrap",style:({ width: (_vm.wrapWidth + "px") })},[_vm._t("default")],2)])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
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

// CONCATENATED MODULE: ./src/components/ScrollTab.vue
function injectStyle (context) {
  __webpack_require__("srS7")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  ScrollTab,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_ScrollTab = (Component.exports);

// CONCATENATED MODULE: ./src/components/index.js


components_ScrollTab.install = function (Vue) {
  Vue.component(components_ScrollTab.name, components_ScrollTab);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components_ScrollTab);
}

/* harmony default export */ var components = __webpack_exports__["default"] = (components_ScrollTab);

/***/ }),

/***/ "srS7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-scroll-tab.umd.js.map