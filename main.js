/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const img = document.createElement('img');\n    img.src = \"./images/restaurant-location.png\";\n    img.alt = \"map\";\n\n    contact.appendChild(createP('📞 123 456 789'));\n    contact.appendChild(createP('🏠 Hollywood Boulevard 42, Los Angeles, USA'));\n    contact.appendChild(img);\n\n    return contact;\n}\n\nfunction createP(text){\n    const p = document.createElement('p');\n    p.textContent = text;\n\n    return p;\n}\n\nfunction loadContact(){\n    const main = document.querySelector('#main');\n\n    main.textContent = '';\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome(){\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Best pizza in your country';\n    home.appendChild(h1);\n\n    home.appendChild(createP('Made with passion since 1908'));\n\n    const img = document.createElement('img');\n    img.src = \"./images/chef.png\";\n    img.alt = \"chef\";\n    home.appendChild(img);\n\n    home.appendChild(createP('Order online or visit us!'));\n\n    return home;\n}\n\nfunction createP(text){\n    const p = document.createElement('p');\n    p.textContent = text;\n\n    return p;\n}\n\nfunction loadHome(){\n    const main = document.querySelector('#main');\n\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(addMenuItems('pizza1', 'salsiccia', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'));\n    menu.appendChild(addMenuItems('pizza2', 'gamberi', 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'));\n    menu.appendChild(addMenuItems('pizza3', 'pepe', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'));\n    menu.appendChild(addMenuItems('pizza4', 'disgustoso', 'Tomato sauce, Bacon, Pineapple, Olives, Basil'));\n    menu.appendChild(addMenuItems('pizza5', 'colorato', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'));\n    menu.appendChild(addMenuItems('pizza6', 'pomodoro', 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'));\n    menu.appendChild(addMenuItems('pizza7', 'crema', 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'));\n    menu.appendChild(addMenuItems('pizza8', 'carne', 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'));\n\n    return menu;\n}\n\nfunction addMenuItems(source, alternate, ingredients){\n    const menuItems = document.createElement('div')\n    const img = document.createElement('img');\n\n    menuItems.classList.add('menu-items');\n    menuItems.appendChild(img);\n\n    img.src = `./images/pizzas/${source}.jpg`;\n    img.alt = alternate;\n\n    const desc = document.createElement('div');\n    desc.classList.add('desc');\n    menuItems.appendChild(desc);\n\n    const h3 = document.createElement('h3');\n    const foodName = alternate.slice(0, 1).toUpperCase() + alternate.slice(1);\n    h3.textContent = foodName\n\n    const p = document.createElement('p');\n    p.textContent = ingredients;\n\n    desc.appendChild(h3);\n    desc.appendChild(p);\n\n    return menuItems;\n}\n\nfunction loadMenu(){\n    const main = document.querySelector('#main');\n\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement('header')\n\n    const div = document.createElement('div')\n    header.appendChild(div);\n    div.classList.add('bg');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Pepegato';\n    div.appendChild(h1);\n    div.appendChild(createNavBar());\n\n    return header;\n}\n\nfunction createNavBar(){\n    const nav = document.createElement('nav');\n    const btnHome = createNavButton('Home');\n    const btnMenu = createNavButton('Menu');\n    const btnContact = createNavButton('Contact');\n    nav.appendChild(btnHome);\n    nav.appendChild(btnMenu);\n    nav.appendChild(btnContact);\n\n    btnHome.addEventListener('click', () => {\n        btnMenu.classList.remove('active');\n        btnContact.classList.remove('active');\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n        btnHome.classList.add('active');\n    });\n    btnMenu.addEventListener('click', () => {\n        btnHome.classList.remove('active');\n        btnContact.classList.remove('active');\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n        btnMenu.classList.add('active');\n    });\n    btnContact.addEventListener('click', () => {\n        btnHome.classList.remove('active');\n        btnMenu.classList.remove('active');\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n        btnContact.classList.add('active');\n    });\n\n    return nav;\n}\n\nfunction createNavButton(text){\n    const btn = document.createElement('button');\n    btn.classList.add('nav-bar');\n    btn.textContent = text;\n\n    return btn;\n}\n\nfunction createMain(){\n    const main = document.createElement('div');\n    main.setAttribute('id', 'main');\n\n    return main;\n}\n\nfunction initialiseWeb(){\n    const content = document.querySelector('#content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialiseWeb);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;