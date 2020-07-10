/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entry.scss":
/*!************************!*\
  !*** ./src/entry.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: $n: 2 -1 is not a number.\n   ╷\n31 │      line-height: nth($list-line-height, $i -1);\r\n   │                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src\\partials\\_common.scss 31:19  @import\n  C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\src\\entry.scss 3:9                        root stylesheet\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:88191:16)\n    at _render_closure1.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:77610:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4311:88)\n    at _Future._completeError$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24725:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24117:12)\n    at Object._asyncRethrow (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4065:17)\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:14087:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24138:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24130:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4311:88)\n    at _Future._completeError$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24725:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24117:12)\n    at Object._asyncRethrow (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4065:17)\n    at C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:16672:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24138:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24130:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nicop\\Desktop\\BOOLEAN\\Classe #14\\repo\\node-sass-teambit\\node_modules\\sass\\sass.dart.js:4311:88)");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  ////////// BURGER MENU
  // Al click dell'icona burger menù, mostra il menù navigazione
  // e cambia l'icona con '#chiudi-menu'
  $('#burger-menu').click(function () {
    $(this).hide();
    $('#chiudi-menu').show();
    $('.navigation .menu').slideDown();
  }); // Al click dell'icona chiudi menù, nascondi il menù navigazione
  // e cambia l'icona con '#burger-menu'

  $('#chiudi-menu').click(function () {
    $(this).hide();
    $('#burger-menu').show();
    $('.navigation .menu').slideUp(200);
  }); ////////// DROPDOWN
  // Se al click di un elemento del menù navigazione il menù a tendina è visibile, nascondilo
  // altrimenti mostra il menù a tendina e nascondi tutti gli altri

  $('.navigation .menu > li').click(function () {
    var dropdown = $(this).children('.dropdown');
    var altreDropdown = $(this).siblings().children('.dropdown');

    if (dropdown.attr('style') == 'display: block;') {
      dropdown.slideUp(200);
    } else {
      altreDropdown.slideUp(200, function () {
        dropdown.slideDown();
      });
    }
  });
});

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/script.js ./src/entry.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\nicop\Desktop\BOOLEAN\Classe #14\repo\node-sass-teambit\src\script.js */"./src/script.js");
module.exports = __webpack_require__(/*! C:\Users\nicop\Desktop\BOOLEAN\Classe #14\repo\node-sass-teambit\src\entry.scss */"./src/entry.scss");


/***/ })

/******/ });