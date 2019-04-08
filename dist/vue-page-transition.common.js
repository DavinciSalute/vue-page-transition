(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePageTransition"] = factory();
	else
		root["VuePageTransition"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

eval("module.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = options.computed || (options.computed = {})\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOlsiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxDQUFKOztBQUVBO0FBQ0FBLElBQUssWUFBVztBQUNmLFFBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsS0FBSUEsS0FBS0MsU0FBUyxhQUFULEdBQUwsSUFBa0MsQ0FBQyxHQUFFQyxJQUFILEVBQVMsTUFBVCxDQUF0QztBQUNBLENBSEQsQ0FHRSxPQUFNQyxDQUFOLEVBQVM7QUFDVjtBQUNBLEtBQUcsT0FBT0MsTUFBUCxLQUFrQixRQUFyQixFQUNDSixJQUFJSSxNQUFKO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCTixDQUFqQiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

eval("\n/* styles */\n__webpack_require__(31)\n\nvar Component = __webpack_require__(0)(\n  /* script */\n  __webpack_require__(4),\n  /* template */\n  __webpack_require__(21),\n  /* scopeId */\n  \"data-v-4c22b934\",\n  /* cssModules */\n  null\n)\nComponent.options.__file = \"/Users/orlando/Desktop/contributions/vue-page-transitions/src/components/VuePageTransition.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key !== \"__esModule\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] VuePageTransition.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-4c22b934\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-4c22b934\", Component.options)\n  }\n})()}\n\nmodule.exports = Component.exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWU/NjJjYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxtQkFBTyxDQUFDLEVBQXVSOztBQUUvUixnQkFBZ0IsbUJBQU8sQ0FBQyxDQUF5RDtBQUNqRjtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxDQUF1RztBQUNqSDtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxFQUFtSztBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MCxcXFwicmVtb3ZlXFxcIjp0cnVlfSFjc3MtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGMyMmI5MzQmc2NvcGVkPXRydWUhc2Fzcy1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlUGFnZVRyYW5zaXRpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRjMjJiOTM0IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNGMyMmI5MzRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9vcmxhbmRvL0Rlc2t0b3AvY29udHJpYnV0aW9ucy92dWUtcGFnZS10cmFuc2l0aW9ucy9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWdWVQYWdlVHJhbnNpdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGMyMmI5MzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YzIyYjkzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('transition', {\n    attrs: {\n      \"name\": _vm.transition,\n      \"mode\": _vm.mode\n    }\n  }, [_vm._t(\"default\")], 2)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-4c22b934\", module.exports)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWU/NTBiNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS50cmFuc2l0aW9uLFxuICAgICAgXCJtb2RlXCI6IF92bS5tb2RlXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRjMjJiOTM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00YzIyYjkzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVnVlUGFnZVRyYW5zaXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__[\"install\"] = install;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue__);\n/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, \"VuePageTransition\", function() { return __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default.a; });\n\n\n// Install the components\nfunction install(Vue) {\n  Vue.component('vue-page-transition', __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default.a);\n}\n\n// Expose the components\n\n\n// Plugin\nconst plugin = {\n  /* eslint-disable no-undef */\n  version: \"0.1.0\",\n  install\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\n\n// Auto-install\nlet GlobalVue = null;\nif (typeof window !== 'undefined') {\n  GlobalVue = window.Vue;\n} else if (typeof global !== 'undefined') {\n  GlobalVue = global.Vue;\n}\nif (GlobalVue) {\n  GlobalVue.use(plugin);\n}\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwiVnVlUGFnZVRyYW5zaXRpb24iLCJwbHVnaW4iLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ08sU0FBU0EsT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDNUJBLE1BQUlDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQ0MseUVBQXJDO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFJQTtBQUNBLE1BQU1DLFNBQVM7QUFDYjtBQUNBQyxXQUFTQyxPQUZJO0FBR2JOO0FBSGEsQ0FBZjs7QUFNZUkscUVBQWY7O0FBRUE7QUFDQSxJQUFJRyxZQUFZLElBQWhCO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRCxjQUFZQyxPQUFPUCxHQUFuQjtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU9RLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeENGLGNBQVlFLE9BQU9SLEdBQW5CO0FBQ0Q7QUFDRCxJQUFJTSxTQUFKLEVBQWU7QUFDYkEsWUFBVUcsR0FBVixDQUFjTixNQUFkO0FBQ0QsQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZVBhZ2VUcmFuc2l0aW9uIGZyb20gJy4vY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWUnXG5cbi8vIEluc3RhbGwgdGhlIGNvbXBvbmVudHNcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgVnVlLmNvbXBvbmVudCgndnVlLXBhZ2UtdHJhbnNpdGlvbicsIFZ1ZVBhZ2VUcmFuc2l0aW9uKVxufVxuXG4vLyBFeHBvc2UgdGhlIGNvbXBvbmVudHNcbmV4cG9ydCB7XG4gIFZ1ZVBhZ2VUcmFuc2l0aW9uLFxufVxuXG4vLyBQbHVnaW5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgdmVyc2lvbjogVkVSU0lPTixcbiAgaW5zdGFsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChHbG9iYWxWdWUpIHtcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWU/NTY5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjAsXCJyZW1vdmVcIjp0cnVlfSEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRjMjJiOTM0JnNjb3BlZD10cnVlIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Z1ZVBhZ2VUcmFuc2l0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vue-page-transition',\n  props: ['name'],\n  data() {\n    return {\n      transition: 'fade',\n      mode: 'out-in'\n    };\n  },\n  created() {\n    this.$router.beforeEach((to, from, next) => {\n      this.transition = this.$route.meta.transition ? this.$route.meta.transition : this.$props.name;\n\n      next();\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVnVlUGFnZVRyYW5zaXRpb24udnVlPzMzNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVQTtBQUNBLDZCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFDQSxzREFDQSwyQkFEQSxHQUVBLGdCQUZBOztBQUlBO0FBQ0EsS0FOQTtBQU9BO0FBakJBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0cmFuc2l0aW9uXG4gICAgOm5hbWU9XCJ0cmFuc2l0aW9uXCJcbiAgICA6bW9kZT1cIm1vZGVcIlxuICA+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndnVlLXBhZ2UtdHJhbnNpdGlvbicsXG4gIHByb3BzOiBbJ25hbWUnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxuICAgICAgbW9kZTogJ291dC1pbicsXG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJHJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uID0gdGhpcy4kcm91dGUubWV0YS50cmFuc2l0aW9uXG4gICAgICAgID8gdGhpcy4kcm91dGUubWV0YS50cmFuc2l0aW9uXG4gICAgICAgIDogdGhpcy4kcHJvcHMubmFtZVxuXG4gICAgICBuZXh0KClcbiAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmZhZGUtZW50ZXItYWN0aXZlLFxuLmZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG4uZmFkZS1lbnRlcixcbi5mYWRlLWxlYXZlLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDBcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNDBweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuLmZhZGUtaW4tZG93bi1sZWF2ZS10byB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xufVxuXG4uZmFkZS1pbi1kb3duLWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNDBweCwgMCk7XG59XG5cbi5mYWRlLWluLWRvd24tZW50ZXItdG8ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQwcHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG5cbi5mYWRlLWluLXJpZ2h0LWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG59XG5cbi5mYWRlLWluLXJpZ2h0LWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0MHB4LCAwLCAwKTtcbn1cblxuLmZhZGUtaW4tcmlnaHQtZW50ZXItdG8ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufVxuXG4uZmFkZS1pbi11cC1sZWF2ZS10byB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xufVxuXG4uZmFkZS1pbi11cC1lbnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XG59XG5cbi5mYWRlLWluLXVwLWVudGVyLXRvIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuN3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuLmZhZGUtaW4tbGVmdC1sZWF2ZS10byB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xufVxuXG4uZmFkZS1pbi1sZWZ0LWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDBweCwgMCwgMCk7XG59XG5cbi5mYWRlLWluLWxlZnQtZW50ZXItdG8ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tZHVyYXRpb246IC43cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XG59XG5cbi56b29tLWVudGVyLWFjdGl2ZSxcbi56b29tLWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5cbi56b29tLWVudGVyLFxuLnpvb20tbGVhdmUtdG8ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuPC9zdHlsZT5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZ1ZVBhZ2VUcmFuc2l0aW9uLnZ1ZT8yMDNjN2IyYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })

/******/ });
});