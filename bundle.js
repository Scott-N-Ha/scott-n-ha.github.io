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

// Scroll to top button
var topBtn = document.getElementById('top-btn');
topBtn.addEventListener('click', function (e) {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
}); // Change title header in the nav bar to the section

var navbarHeader = document.getElementById('navbar-header'); // const sections = [];
// const main = document.getElementById('main');
// const education = document.getElementById('education');
// const skills = document.getElementById('skills');
// const project = document.getElementById('project');
// sections.push(document.getElementById('main'));
// sections.push(document.getElementById('education'));
// sections.push(document.getElementById('skills'));
// sections.push(document.getElementById('projects'));
// sections.forEach(section => {
//   section.addEventListener('mouseover', e => {
//     console.log(e.target === section);
//     // section.style.backgroundColor = 'black';
//   });
//   section.addEventListener('mouseleave', e => {
//     // section.style.backgroundColor = 'white';
//   })
// });

var projects = document.querySelectorAll('.project');
projects.forEach(function (project) {// project.addEventListener('mouseover', e => {
  //   project.style.backgroundColor = 'black';
  //   project.style.color = 'white';
  // });
  // project.addEventListener('mouseleave', e => {
  //   project.style.backgroundColor = 'white';
  //   project.style.color = 'black';
  // });
});

function scroll() {
  topBtn.style.display = document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? "block" : "none"; // if (document.documentElement.scrollTop < 141) {
  //   navbarHeader.textContent = "Welcome";
  // } else if (document.documentElement.scrollTop >= 141 && document.documentElement.scrollTop < 315)  {
  //   navbarHeader.textContent = "Education";
  // } else if (document.documentElement.scrollTop >= 315 && document.documentElement.scrollTop < 700)  {
  //   navbarHeader.textContent = "Skills";
  // }
  //   console.log(document.documentElement.scrollTop);
  // sections.forEach(s => {
  // })
}

window.onscroll = function () {
  return scroll();
}; // document.getElementById('skills').scrollIntoView();
// const

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map