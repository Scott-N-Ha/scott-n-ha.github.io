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

// Color Themes
var colorAttrs = ["--base", "--base-outline", "--highlight", "--subtitle", "--default", "--background"];
var light = {
  "--base": "#4FA7BC",
  "--base-outline": "rgba(79, 167, 188, 0.36)",
  "--highlight": "white",
  "--subtitle": "darkgray",
  "--default": "black",
  "--background": "white"
};
var dark = {
  "--base": "#445878",
  "--base-outline": "rgba(68, 88, 120, 0.36)",
  "--highlight": "#92CDCF",
  // "--subtitle": "#31353D",
  "--subtitle": "#788296",
  "--default": "#92CDCF",
  // "--default": "#EEEFF7",
  "--background": "#1C1D21"
};
var topBtn = document.getElementById('top-btn');
var navBarName = document.getElementById('navbar-name');
var bars = document.querySelector('.fa-bars');
var dropdown = document.querySelector('.dropdown');
var themeToggle = document.querySelector('#dark-mode');
// const schools = document.querySelectorAll('.school');
// const skills = document.querySelectorAll('.skill li');

function scroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topBtn.style.display = "block";
    navBarName.style.opacity = 1;
  } else {
    topBtn.style.display = "none";
    navBarName.style.opacity = 0;
  }

  // schools.forEach(school => {
  //   const slideInAt = (window.scrollY + window.innerHeight) - school.offsetHeight / 2;
  //   const slideOutAt = school.offsetTop + school.offsetHeight;

  //   const halfIn = slideInAt > school.offsetTop;
  //   const inView = window.scrollY < slideOutAt;

  //   if (halfIn && inView) school.classList.add('show');
  //   else school.classList.remove('show');
  // });

  // skills.forEach(skill => {
  //   const slideInAt = (window.scrollY + window.innerHeight) - skill.offsetHeight / 2;
  //   const slideOutAt = skill.offsetTop + skill.offsetHeight;

  //   const halfIn = slideInAt > skill.offsetTop;
  //   const inView = window.scrollY < slideOutAt;

  //   if (halfIn && inView) skill.classList.add('show');
  //   else skill.classList.remove('show');
  // });
}

function changeTheme(attrs) {
  colorAttrs.forEach(function (attr) {
    document.body.style.setProperty(attr, attrs[attr]);
  });
}
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
topBtn.addEventListener('click', function (e) {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
});
window.addEventListener('click', function (e) {
  if (e.target === bars) dropdown.classList.toggle('open');else if (e.target !== dropdown && e.target !== themeToggle && e.target !== document.querySelector('.slider')) dropdown.classList.remove('open');
});
window.onscroll = function () {
  return scroll();
};
themeToggle.addEventListener('change', function (e) {
  changeTheme(themeToggle.checked ? dark : light);
});

// Scroll to Anchor found: https://www.yogihosting.com/jquery-scroll-to-element/
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
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map