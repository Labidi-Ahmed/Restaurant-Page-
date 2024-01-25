/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHomePage: () => (/* binding */ generateHomePage)
/* harmony export */ });
function generateHomePage() {
    const body = document.querySelector("body");
    const text = "At Serenade Bistro, we embrace the artistry of coffee. Our passion goes beyond the ordinary, where every cup is crafted with precision—melding time, temperature, and technique to create the perfect blend. Our devotion extends to the beans, meticulously roasted to perfection, ensuring each sip is an experience worth savoring.";

    // Create section element
    const section = document.createElement('section');
    
    // Create container div
    const container = document.createElement('div');
    container.id = "container";

    // Create containerLogo div
    const containerLogo = document.createElement('div');
    containerLogo.classList.add("container-logo");
    containerLogo.innerHTML = "Serenade Bistro";

    // Create containerText div
    const containerText = document.createElement('div');
    containerText.classList.add("container-text");
    containerText.innerHTML = text;

    // Create containerBtn div
    const containerBtn = document.createElement('div');
    containerBtn.classList.add("container-btn");
    containerBtn.innerHTML = "About us";

    // Append child elements to container
    container.appendChild(containerLogo);
    container.appendChild(containerText);
    container.appendChild(containerBtn);

    // Create img element
    const img = document.createElement('img');
    img.src = "./images/pexels-edward-eyer-1049626.jpg";
    img.classList.add("container-img");

    // Append child elements to section
    section.appendChild(container);
    section.appendChild(img);

    // Append section to body
    body.appendChild(section);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("header-border-animated");
        } else {
            header.classList.remove("header-border-animated");
        }
    });
});





const logo = document.querySelector("#logo");


    logo.addEventListener('click',() =>{
        const section = document.querySelector("section");
        if (!section){
            (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__.generateHomePage)();
        }
    });


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7O0FBSXdEOztBQUV6RDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBZ0I7QUFDNUI7QUFDQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCB0ZXh0ID0gXCJBdCBTZXJlbmFkZSBCaXN0cm8sIHdlIGVtYnJhY2UgdGhlIGFydGlzdHJ5IG9mIGNvZmZlZS4gT3VyIHBhc3Npb24gZ29lcyBiZXlvbmQgdGhlIG9yZGluYXJ5LCB3aGVyZSBldmVyeSBjdXAgaXMgY3JhZnRlZCB3aXRoIHByZWNpc2lvbuKAlG1lbGRpbmcgdGltZSwgdGVtcGVyYXR1cmUsIGFuZCB0ZWNobmlxdWUgdG8gY3JlYXRlIHRoZSBwZXJmZWN0IGJsZW5kLiBPdXIgZGV2b3Rpb24gZXh0ZW5kcyB0byB0aGUgYmVhbnMsIG1ldGljdWxvdXNseSByb2FzdGVkIHRvIHBlcmZlY3Rpb24sIGVuc3VyaW5nIGVhY2ggc2lwIGlzIGFuIGV4cGVyaWVuY2Ugd29ydGggc2F2b3JpbmcuXCI7XG5cbiAgICAvLyBDcmVhdGUgc2VjdGlvbiBlbGVtZW50XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiY29udGFpbmVyXCI7XG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyTG9nbyBkaXZcbiAgICBjb25zdCBjb250YWluZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyTG9nby5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWxvZ29cIik7XG4gICAgY29udGFpbmVyTG9nby5pbm5lckhUTUwgPSBcIlNlcmVuYWRlIEJpc3Ryb1wiO1xuXG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lclRleHQgZGl2XG4gICAgY29uc3QgY29udGFpbmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lclRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci10ZXh0XCIpO1xuICAgIGNvbnRhaW5lclRleHQuaW5uZXJIVE1MID0gdGV4dDtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXJCdG4gZGl2XG4gICAgY29uc3QgY29udGFpbmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItYnRuXCIpO1xuICAgIGNvbnRhaW5lckJ0bi5pbm5lckhUTUwgPSBcIkFib3V0IHVzXCI7XG5cbiAgICAvLyBBcHBlbmQgY2hpbGQgZWxlbWVudHMgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxvZ28pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQnRuKTtcblxuICAgIC8vIENyZWF0ZSBpbWcgZWxlbWVudFxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBcIi4vaW1hZ2VzL3BleGVscy1lZHdhcmQtZXllci0xMDQ5NjI2LmpwZ1wiO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWltZ1wiKTtcblxuICAgIC8vIEFwcGVuZCBjaGlsZCBlbGVtZW50cyB0byBzZWN0aW9uXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIC8vIEFwcGVuZCBzZWN0aW9uIHRvIGJvZHlcbiAgICBib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYm9yZGVyLWFuaW1hdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItYm9yZGVyLWFuaW1hdGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG5cbmltcG9ydCB7IGdlbmVyYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVwYWdlLmpzXCI7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ29cIik7XG5cblxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgICAgIGlmICghc2VjdGlvbil7XG4gICAgICAgICAgICBnZW5lcmF0ZUhvbWVQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9