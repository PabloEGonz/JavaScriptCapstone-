"use strict";
(self["webpackChunkjavascriptcapstone_"] = self["webpackChunkjavascriptcapstone_"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popUp.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popUp.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  backdrop-filter: blur(18px);\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(8px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 2%;\r\n  min-height: 90vh;\r\n  overflow-y: auto;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popUp.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;EACV,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":[".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  backdrop-filter: blur(18px);\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(8px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 2%;\r\n  min-height: 90vh;\r\n  overflow-y: auto;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image:\r\n    linear-gradient(\r\n      to bottom,\r\n      rgba(121, 121, 121, 0.716),\r\n      rgba(37, 37, 37, 0.97)\r\n    );\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  background-color: inherit;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  background-color: inherit;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto !important;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,sCAAsC;EACtC,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE;;;;;KAKG;IACD,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,mBAAmB;EACnB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,cAAc;EACd,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image:\r\n    linear-gradient(\r\n      to bottom,\r\n      rgba(121, 121, 121, 0.716),\r\n      rgba(37, 37, 37, 0.97)\r\n    );\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  background-color: inherit;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  background-color: inherit;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto !important;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/popUp.css":
/*!***********************!*\
  !*** ./src/popUp.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popUp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popUp.css */ "./node_modules/css-loader/dist/cjs.js!./src/popUp.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popUp_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popUp_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popUp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popUp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _popUp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp.css */ "./src/popUp.css");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _modules_callAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/callAPI.js */ "./src/modules/callAPI.js");





const LOGO_HEADER = document.querySelector('.logo');
LOGO_HEADER.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_2__;

document.addEventListener('DOMContentLoaded', (0,_modules_callAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"])());


/***/ }),

/***/ "./src/modules/callAPI.js":
/*!********************************!*\
  !*** ./src/modules/callAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getSeries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSeries.js */ "./src/modules/getSeries.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");



const series = ['tt0944947', 'tt11198330', 'tt8772296', 'tt2661044', 'tt4574334', 'tt2085059'];

const callAPI = () => {
  series.forEach(async (ele) => {
    await (0,_getSeries_js__WEBPACK_IMPORTED_MODULE_0__.getSeries)(`https://api.tvmaze.com/lookup/shows?imdb=${ele}`);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callAPI);

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   newCommentForm: () => (/* binding */ newCommentForm)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");


const APIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments/';

const getComments = async (i) => {
  const comentContainer = document.querySelector('.viewComments');
  const obj = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments?item_id=${i}`);
  const response = await obj.json();
  comentContainer.innerHTML = '';
  if (Array.isArray(response)) {
    response.forEach((element) => {
      const commentList = document.createElement('p');
      commentList.className = 'newCreateComment';
      commentList.innerHTML = ` ${element.creation_date} ${element.username}: ${element.comment}`;
      comentContainer.appendChild(commentList);
    });
  } else {
    comentContainer.textContent = 'No comments yet, be the first one to comment!';
  }
  const counter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(response);
  const countUpdate = document.querySelector('.commentTitle');
  countUpdate.innerHTML = `Comments (${counter})`;
};

const POSTComment = async (obj) => {
  await fetch(APIURL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
};

const newCommentForm = (id, submitBttn) => {
  const nameInput = document.getElementById('Name');
  const commentInput = document.getElementById('Comment');
  const empytField = document.getElementById('errorMsg');
  submitBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (nameInput.value === '' || commentInput.value === '') {
      empytField.textContent = 'Please fill out all fields';
      setTimeout(() => {
        empytField.textContent = '';
      }, 3000);
    } else {
      const commentObj = {
        item_id: `${id}`,
        username: nameInput.value,
        comment: commentInput.value,
      };
      await POSTComment(commentObj);
      nameInput.value = '';
      commentInput.value = '';
      await getComments(id);
    }
  });
};




/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (array) => {
  if (Array.isArray(array)) {
    return array.length;
  } else return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/getSeries.js":
/*!**********************************!*\
  !*** ./src/modules/getSeries.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayObj: () => (/* binding */ arrayObj),
/* harmony export */   getSeries: () => (/* binding */ getSeries)
/* harmony export */ });
/* harmony import */ var _involAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involAPI */ "./src/modules/involAPI.js");

const arrayObj = [];

const getSeries = async (file) => {
  await (0,_involAPI__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
  const obj = await fetch(file);
  const response = await obj.json();
  arrayObj.push(response);
};


/***/ }),

/***/ "./src/modules/involAPI.js":
/*!*********************************!*\
  !*** ./src/modules/involAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayItems: () => (/* binding */ getArrayItems),
/* harmony export */   getLikes: () => (/* binding */ getLikes)
/* harmony export */ });
let arrayItems = [];

const getLikes = async () => {
  const obj = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/');
  const response = await obj.json();
  arrayItems = response;
};
const getArrayItems = () => arrayItems;


/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (array) => array.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/x.png */ "./src/img/x.png");
/* harmony import */ var _getSeries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSeries.js */ "./src/modules/getSeries.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");





const pageBody = document.getElementById('body');

const popUpRender = async (index, id) => {
  const elem = _getSeries_js__WEBPACK_IMPORTED_MODULE_1__.arrayObj[index];
  const counter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(index);
  document.body.classList.add('disable-scroll');
  const card = document.createElement('div');
  card.style.backgroundImage = `url(${elem.image.medium})`;
  card.className = 'popUp-card flex';
  card.innerHTML = `
    <section class="popUp-section grid">
    <img src="${_img_x_png__WEBPACK_IMPORTED_MODULE_0__}" alt="X button" class="xBttn">
        <div class="box1">
          <img src="${elem.image.medium}" alt="Serie image nro.1" class="serieImg">
        </div>
        <div class="box2 flex">
          <h2 class="serieTitle">${elem.name}</h2>
          <ul class="serieData grid">
            <li>Rating: ${elem.rating.average}/10</li>
            <li>Status: ${elem.status}</li>
            <li>Language: ${elem.language}</li>
            <li>Genres: ${elem.genres}</li>
          </ul>
          <p class="SerieResume">${elem.summary}</p>
        </div>
        <div class="box3">
          <h3 class="commentTitle">Comments (${counter})</h3>
          <div class="viewComments"></div>
        </div>
        <div class="box4">
          <h4 class="commentSubtitle">Add a comment</h4>
          <form class="newCommentForm flex">
            <span id="errorMsg"></span>
            <input type="text" name="name" id="Name" placeholder="Your name" required>
            <input type="text" name="addcomment" id="Comment" placeholder="Your insights" required>
            <button type="submit" class="addCommentBttn">Comment</button>
          </form>
        </div>
    </section>
    `;
  pageBody.appendChild(card);

  const close = document.querySelector('.xBttn');
  close.addEventListener('click', () => {
    document.body.classList.remove('disable-scroll');
    pageBody.removeChild(card);
  });


  const submitBttn = document.querySelector('.addCommentBttn');

  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.newCommentForm)(id, submitBttn);
  await (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpRender);


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/star.png */ "./src/img/star.png");
/* harmony import */ var _getSeries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSeries.js */ "./src/modules/getSeries.js");
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _involAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involAPI.js */ "./src/modules/involAPI.js");
/* harmony import */ var _updateLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateLikes.js */ "./src/modules/updateLikes.js");
/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itemsCounter.js */ "./src/modules/itemsCounter.js");







const container = document.querySelector('.landing-page');
const home = document.querySelector('#home-link');

const seeComments = () => {
  const buttons = Array.from(document.getElementsByClassName('popUp-bttn'));
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      (0,_popUp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i, button.id);
    });
  });
};

const render = async () => {
  const items = (0,_involAPI_js__WEBPACK_IMPORTED_MODULE_3__.getArrayItems)();
  home.innerHTML = `Home (${(0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])(items)})`;
  container.innerHTML = '';
  _getSeries_js__WEBPACK_IMPORTED_MODULE_1__.arrayObj.forEach((ele, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img class="card-img" src='${ele.image.medium}'>
        <div class='flex card-heading'><h4 class="card-title">${ele.name}</h4>
        <img class="card-icon" src='${_img_star_png__WEBPACK_IMPORTED_MODULE_0__}'></div>
        <p class="likes">${items[i].likes} Likes</p>
        <button class="popUp-bttn" id="${ele.id}" type="button">Comments</button>`;
    container.appendChild(card);
  });
  seeComments();
  (0,_updateLikes_js__WEBPACK_IMPORTED_MODULE_4__.likes)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/modules/updateLikes.js":
/*!************************************!*\
  !*** ./src/modules/updateLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   likes: () => (/* binding */ likes),
/* harmony export */   updateLikes: () => (/* binding */ updateLikes)
/* harmony export */ });
/* harmony import */ var _involAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involAPI.js */ "./src/modules/involAPI.js");


const itemIds = ['GOT', 'HOTD', 'EUPH', 'T100', 'ST', 'BM'];
const updateLikes = async (id) => {
  const obj = {
    item_id: `${itemIds[id]}`,
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
};
const likes = () => {
  const buttons = Array.from(document.getElementsByClassName('card-icon'));
  buttons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      button.classList.add('liked');
      await updateLikes(i);
      await (0,_involAPI_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
      button.classList.remove('liked');
      const items = (0,_involAPI_js__WEBPACK_IMPORTED_MODULE_0__.getArrayItems)();
      const likesP = Array.from(document.getElementsByClassName('likes'));
      likesP[i].innerHTML = `${items[i].likes} Likes`;
    });
  });
};




/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3034196e06f655850cab.png";

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2066a883af545e9a78cf.png";

/***/ }),

/***/ "./src/img/x.png":
/*!***********************!*\
  !*** ./src/img/x.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edd48da954110718d21a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQWM7QUFDaEIsUUFBUSx5REFBVztBQUNuQjtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RFM7QUFDTTtBQUNMO0FBQ21CO0FBQ2Y7QUFDRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBVztBQUNqQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBYTtBQUM3Qiw0QkFBNEIsNERBQVcsUUFBUTtBQUMvQztBQUNBLEVBQUUsMkRBQWdCO0FBQ2xCO0FBQ0E7QUFDQSxtREFBbUQsaUJBQWlCO0FBQ3BFLGdFQUFnRSxTQUFTO0FBQ3pFLHNDQUFzQywwQ0FBSyxDQUFDO0FBQzVDLDJCQUEyQixnQkFBZ0I7QUFDM0MseUNBQXlDLE9BQU87QUFDaEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLHNEQUFLO0FBQ1A7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ21DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVE7QUFDcEI7QUFDQSxvQkFBb0IsMkRBQWE7QUFDakM7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUM4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvcG9wVXAuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3BvcFVwLmNzcz9iYjQzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jYWxsQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9nZXRTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL2ludm9sQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3VwZGF0ZUxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcFVwLWNhcmQge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtY2FyZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXNlY3Rpb24ge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjdlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGE5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDEgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnhCdHRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U2ZTtcXHJcXG4gIHBhZGRpbmc6IDUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZVRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiBwLFxcclxcbmksXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIGxpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MyBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHMsXFxyXFxuLnZpZXdDb21tZW50cyA+ICoge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDQgaDQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0NvbW1lbnRGb3JtIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxufVxcclxcblxcclxcbi5uZXdDb21tZW50Rm9ybSBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMSUgMyU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jQ29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50QnR0biB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTXNnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29tbWVudEJ0dG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3BVcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3BVcC1jYXJkIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNhcmQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC43ZW07XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gxIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi54QnR0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlNmU7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVUaXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDIgcCxcXHJcXG5pLFxcclxcbmIge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXJpZURhdGEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAwLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSBsaSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDMgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzLFxcclxcbi52aWV3Q29tbWVudHMgPiAqIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxufVxcclxcblxcclxcbi5ib3g0IGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uZXdDb21tZW50Rm9ybSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDElIDMlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI0NvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29tbWVudEJ0dG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1zZyB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90bytTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci10ZXh0OiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1jbHItYmc6IGhzbCgwLCAwJSwgMzElKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tLFxcclxcbiAgICAgIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC43MTYpLFxcclxcbiAgICAgIHJnYmEoMzcsIDM3LCAzNywgMC45NylcXHJcXG4gICAgKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAgaGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDElIDclO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG4gIGNvbG9yOiAjYTdhM2EzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICNmMWM0MGY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luOiAwIDUlO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gIHBhZGRpbmc6IDIlIDUlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbiAgbWFyZ2luOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggNXB4ICMyMjI7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZjFjNDBmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRpbmcge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTUlIDAgMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDc1MDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idHRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luOiAzJSBhdXRvO1xcclxcbiAgcGFkZGluZzogMyUgMTAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIHBhZGRpbmc6IDQlIDExJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7Ozs7O0tBS0c7SUFDRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzYwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8rU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jbHItdGV4dDogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gIC0tY2xyLWJnOiBoc2woMCwgMCUsIDMxJSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNzE2KSxcXHJcXG4gICAgICByZ2JhKDM3LCAzNywgMzcsIDAuOTcpXFxyXFxuICAgICk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogIGhlYWRlciAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxJSA3JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbWFyZ2luOiAwIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICBjb2xvcjogI2E3YTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGxpOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZjFjNDBmO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWN0aW9uICovXFxyXFxuXFxyXFxuLmxhbmRpbmctcGFnZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICBwYWRkaW5nOiAyJSA1JTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG4gIG1hcmdpbjogNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDVweCAjMjIyO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgI2YxYzQwZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkaW5nIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDE1JSAwIDElIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0biB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbjogMyUgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMlIDEwJTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiA0JSAxMSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcFVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wVXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3BvcFVwLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IGNhbGxBUEkgZnJvbSAnLi9tb2R1bGVzL2NhbGxBUEkuanMnO1xyXG5cclxuY29uc3QgTE9HT19IRUFERVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5MT0dPX0hFQURFUi5zcmMgPSBsb2dvO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhbGxBUEkoKSk7XHJcbiIsImltcG9ydCB7IGdldFNlcmllcyB9IGZyb20gJy4vZ2V0U2VyaWVzLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xuXG5jb25zdCBzZXJpZXMgPSBbJ3R0MDk0NDk0NycsICd0dDExMTk4MzMwJywgJ3R0ODc3MjI5NicsICd0dDI2NjEwNDQnLCAndHQ0NTc0MzM0JywgJ3R0MjA4NTA1OSddO1xuXG5jb25zdCBjYWxsQVBJID0gKCkgPT4ge1xuICBzZXJpZXMuZm9yRWFjaChhc3luYyAoZWxlKSA9PiB7XG4gICAgYXdhaXQgZ2V0U2VyaWVzKGBodHRwczovL2FwaS50dm1hemUuY29tL2xvb2t1cC9zaG93cz9pbWRiPSR7ZWxlfWApO1xuICAgIHJlbmRlcigpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxBUEk7IiwiaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudHNDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IEFQSVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZTkdJQXZtdXpmcXcySUlwZzYwSy9jb21tZW50cy8nO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaSkgPT4ge1xyXG4gIGNvbnN0IGNvbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3Q29tbWVudHMnKTtcclxuICBjb25zdCBvYmogPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWU5HSUF2bXV6ZnF3MklJcGc2MEsvY29tbWVudHM/aXRlbV9pZD0ke2l9YCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYmouanNvbigpO1xyXG4gIGNvbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcclxuICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGNvbW1lbnRMaXN0LmNsYXNzTmFtZSA9ICduZXdDcmVhdGVDb21tZW50JztcclxuICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gYCAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcclxuICAgICAgY29tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb21lbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnTm8gY29tbWVudHMgeWV0LCBiZSB0aGUgZmlyc3Qgb25lIHRvIGNvbW1lbnQhJztcclxuICB9XHJcbiAgY29uc3QgY291bnRlciA9IGNvbW1lbnRDb3VudGVyKHJlc3BvbnNlKTtcclxuICBjb25zdCBjb3VudFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50VGl0bGUnKTtcclxuICBjb3VudFVwZGF0ZS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y291bnRlcn0pYDtcclxufTtcclxuXHJcbmNvbnN0IFBPU1RDb21tZW50ID0gYXN5bmMgKG9iaikgPT4ge1xyXG4gIGF3YWl0IGZldGNoKEFQSVVSTCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBuZXdDb21tZW50Rm9ybSA9IChpZCwgc3VibWl0QnR0bikgPT4ge1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYW1lJyk7XHJcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbW1lbnQnKTtcclxuICBjb25zdCBlbXB5dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTXNnJyk7XHJcbiAgc3VibWl0QnR0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSAnJyB8fCBjb21tZW50SW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGVtcHl0RmllbGQudGV4dENvbnRlbnQgPSAnUGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHMnO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbXB5dEZpZWxkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29tbWVudE9iaiA9IHtcclxuICAgICAgICBpdGVtX2lkOiBgJHtpZH1gLFxyXG4gICAgICAgIHVzZXJuYW1lOiBuYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgICBhd2FpdCBQT1NUQ29tbWVudChjb21tZW50T2JqKTtcclxuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBhd2FpdCBnZXRDb21tZW50cyhpZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBuZXdDb21tZW50Rm9ybSwgZ2V0Q29tbWVudHMgfTtcclxuIiwiY29uc3QgY29tbWVudENvdW50ZXIgPSAoYXJyYXkpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgIHJldHVybiBhcnJheS5sZW5ndGg7XHJcbiAgfSBlbHNlIHJldHVybiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tIFwiLi9pbnZvbEFQSVwiO1xuY29uc3QgYXJyYXlPYmogPSBbXTtcblxuY29uc3QgZ2V0U2VyaWVzID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2goZmlsZSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2JqLmpzb24oKTtcbiAgYXJyYXlPYmoucHVzaChyZXNwb25zZSk7XG59O1xuZXhwb3J0IHsgYXJyYXlPYmosIGdldFNlcmllcyB9OyIsImxldCBhcnJheUl0ZW1zID0gW107XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBvYmogPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbUpyalBjWjE4V3BiUDJhbmZ1V2ovbGlrZXMvJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2JqLmpzb24oKTtcbiAgYXJyYXlJdGVtcyA9IHJlc3BvbnNlO1xufTtcbmNvbnN0IGdldEFycmF5SXRlbXMgPSAoKSA9PiBhcnJheUl0ZW1zO1xuZXhwb3J0IHsgZ2V0TGlrZXMsIGdldEFycmF5SXRlbXMgfTsiLCJjb25zdCBpdGVtQ291bnRlciA9IChhcnJheSkgPT4gYXJyYXkubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiaW1wb3J0IGNsb3NlUG9wVXAgZnJvbSAnLi4vaW1nL3gucG5nJztcclxuaW1wb3J0IHsgYXJyYXlPYmogfSBmcm9tICcuL2dldFNlcmllcy5qcyc7XHJcbmltcG9ydCB7IG5ld0NvbW1lbnRGb3JtLCBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHMuanMnO1xyXG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG5cclxuY29uc3QgcG9wVXBSZW5kZXIgPSBhc3luYyAoaW5kZXgsIGlkKSA9PiB7XHJcbiAgY29uc3QgZWxlbSA9IGFycmF5T2JqW2luZGV4XTtcclxuICBjb25zdCBjb3VudGVyID0gY29tbWVudENvdW50ZXIoaW5kZXgpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1zY3JvbGwnKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbS5pbWFnZS5tZWRpdW19KWA7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAncG9wVXAtY2FyZCBmbGV4JztcclxuICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwicG9wVXAtc2VjdGlvbiBncmlkXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7Y2xvc2VQb3BVcH1cIiBhbHQ9XCJYIGJ1dHRvblwiIGNsYXNzPVwieEJ0dG5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94MVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke2VsZW0uaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlNlcmllIGltYWdlIG5yby4xXCIgY2xhc3M9XCJzZXJpZUltZ1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gyIGZsZXhcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cInNlcmllVGl0bGVcIj4ke2VsZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwic2VyaWVEYXRhIGdyaWRcIj5cclxuICAgICAgICAgICAgPGxpPlJhdGluZzogJHtlbGVtLnJhdGluZy5hdmVyYWdlfS8xMDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5TdGF0dXM6ICR7ZWxlbS5zdGF0dXN9PC9saT5cclxuICAgICAgICAgICAgPGxpPkxhbmd1YWdlOiAke2VsZW0ubGFuZ3VhZ2V9PC9saT5cclxuICAgICAgICAgICAgPGxpPkdlbnJlczogJHtlbGVtLmdlbnJlc308L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiU2VyaWVSZXN1bWVcIj4ke2VsZW0uc3VtbWFyeX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDNcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnRUaXRsZVwiPkNvbW1lbnRzICgke2NvdW50ZXJ9KTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlld0NvbW1lbnRzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cImNvbW1lbnRTdWJ0aXRsZVwiPkFkZCBhIGNvbW1lbnQ8L2g0PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJuZXdDb21tZW50Rm9ybSBmbGV4XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZXJyb3JNc2dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZGNvbW1lbnRcIiBpZD1cIkNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRDb21tZW50QnR0blwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGA7XHJcbiAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnhCdHRuJyk7XHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtc2Nyb2xsJyk7XHJcbiAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChjYXJkKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQ29tbWVudEJ0dG4nKTtcclxuXHJcbiAgbmV3Q29tbWVudEZvcm0oaWQsIHN1Ym1pdEJ0dG4pO1xyXG4gIGF3YWl0IGdldENvbW1lbnRzKGlkKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcFVwUmVuZGVyO1xyXG4iLCJpbXBvcnQgaGVhcnQgZnJvbSAnLi4vaW1nL3N0YXIucG5nJztcclxuaW1wb3J0IHsgYXJyYXlPYmogfSBmcm9tICcuL2dldFNlcmllcy5qcyc7XHJcbmltcG9ydCBwb3BVcFJlbmRlciBmcm9tICcuL3BvcFVwLmpzJztcclxuaW1wb3J0IHsgZ2V0QXJyYXlJdGVtcywgZ2V0TGlrZXMgfSBmcm9tICcuL2ludm9sQVBJLmpzJztcclxuaW1wb3J0IHsgbGlrZXMgfSBmcm9tICcuL3VwZGF0ZUxpa2VzLmpzJztcclxuaW1wb3J0IGl0ZW1Db3VudGVyIGZyb20gJy4vaXRlbXNDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXBhZ2UnKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWxpbmsnKTtcclxuXHJcbmNvbnN0IHNlZUNvbW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcFVwLWJ0dG4nKSk7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcG9wVXBSZW5kZXIoaSwgYnV0dG9uLmlkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zID0gZ2V0QXJyYXlJdGVtcygpO1xyXG4gIGhvbWUuaW5uZXJIVE1MID0gYEhvbWUgKCR7aXRlbUNvdW50ZXIoaXRlbXMpfSlgO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBhcnJheU9iai5mb3JFYWNoKChlbGUsIGkpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImNhcmQtaW1nXCIgc3JjPScke2VsZS5pbWFnZS5tZWRpdW19Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGNhcmQtaGVhZGluZyc+PGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZWxlLm5hbWV9PC9oND5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pY29uXCIgc3JjPScke2hlYXJ0fSc+PC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPiR7aXRlbXNbaV0ubGlrZXN9IExpa2VzPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcC1idHRuXCIgaWQ9XCIke2VsZS5pZH1cIiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIHNlZUNvbW1lbnRzKCk7XHJcbiAgbGlrZXMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgeyBnZXRMaWtlcywgZ2V0QXJyYXlJdGVtcyB9IGZyb20gJy4vaW52b2xBUEkuanMnO1xyXG5cclxuY29uc3QgaXRlbUlkcyA9IFsnR09UJywgJ0hPVEQnLCAnRVVQSCcsICdUMTAwJywgJ1NUJywgJ0JNJ107XHJcbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgaXRlbV9pZDogYCR7aXRlbUlkc1tpZF19YCxcclxuICB9O1xyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9tSnJqUGNaMThXcGJQMmFuZnVXai9saWtlcy8nLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBsaWtlcyA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLWljb24nKSk7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZUxpa2VzKGkpO1xyXG4gICAgICBhd2FpdCBnZXRMaWtlcygpO1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbGlrZWQnKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBnZXRBcnJheUl0ZW1zKCk7XHJcbiAgICAgIGNvbnN0IGxpa2VzUCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlrZXMnKSk7XHJcbiAgICAgIGxpa2VzUFtpXS5pbm5lckhUTUwgPSBgJHtpdGVtc1tpXS5saWtlc30gTGlrZXNgO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVMaWtlcywgbGlrZXMgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9