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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

console.info('Thanks for visiting my website!\nFeel free to contact me with any of the links found on the navigation bar!\nI hope you enjoyed the experience.\n- Scott Ha');
var topBtn = document.getElementById('top-btn');
var navBarName = document.getElementById('navbar-name');
topBtn.addEventListener('click', function (e) {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});

function scroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topBtn.style.display = "block";
    navBarName.style.opacity = 1;
  } else {
    topBtn.style.display = "none";
    navBarName.style.opacity = 0;
  }
}

window.onscroll = function () {
  return scroll();
}; // const repostiBg = document.querySelector('.p1bg');


var bars = document.querySelector('.fa-bars');
var dropdown = document.querySelector('.dropdown');
bars.addEventListener('click', function (e) {
  dropdown.classList.toggle('open');
}); // Scroll to Anchor found: https://www.yogihosting.com/jquery-scroll-to-element/

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var targetEle = this.hash;
  var $targetEle = $(targetEle);
  dropdown.classList.remove('open');
  $('html, body').stop().animate({
    'scrollTop': $targetEle.offset().top
  }, 750, 'swing', function () {
    window.location.hash = targetEle;
  });
}); // Window Fade-In/Out found: https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win

$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-in").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      /* If the element is completely within bounds of the window, fade it in */

      if (objectBottom < windowBottom) {
        //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(369, 1);
        }
      } else {
        //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(369, 0);
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map