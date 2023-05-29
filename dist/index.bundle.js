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
___CSS_LOADER_EXPORT___.push([module.id, ".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.serieData li strong {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 90vh;\r\n  }\r\n\r\n  .box1 {\r\n    height: 35%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .box1 img {\r\n    height: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData li {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .box3 h3 {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .viewComments {\r\n    max-height: 100px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .box4 h4 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    top: 66%;\r\n    left: 25%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popUp.css"],"names":[],"mappings":"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","sourcesContent":[".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.serieData li strong {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 90vh;\r\n  }\r\n\r\n  .box1 {\r\n    height: 35%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .box1 img {\r\n    height: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData li {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .box3 h3 {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .viewComments {\r\n    max-height: 100px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .box4 h4 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    top: 66%;\r\n    left: 25%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image:\r\n    linear-gradient(\r\n      to bottom,\r\n      rgba(121, 121, 121, 0.716),\r\n      rgba(37, 37, 37, 0.97)\r\n    );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,sCAAsC;EACtC,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE;;;;;KAKG;EACH,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,cAAc;EACd,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image:\r\n    linear-gradient(\r\n      to bottom,\r\n      rgba(121, 121, 121, 0.716),\r\n      rgba(37, 37, 37, 0.97)\r\n    );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  } return 0;
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
/* harmony import */ var _involAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involAPI.js */ "./src/modules/involAPI.js");


const arrayObj = [];

const getSeries = async (file) => {
  await (0,_involAPI_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
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




const pageBody = document.getElementById('body');

const popUpRender = async (i, id) => {
  const elem = _getSeries_js__WEBPACK_IMPORTED_MODULE_1__.arrayObj[i];
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
            <li><strong>Rating:</strong> ${elem.rating.average}/10</li>
            <li><strong>Status:</strong> ${elem.status}</li>
            <li><strong>Language:</strong> ${elem.language}</li>
            <li><strong>Genres:</strong> ${elem.genres}</li>
          </ul>
          <p class="SerieResume">${elem.summary}</p>
        </div>
        <div class="box3">
          <h3 class="commentTitle">Comments (0)</h3>
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
  await (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLG1CQUFtQix1QkFBdUIsT0FBTyx3QkFBd0IsMEJBQTBCLE9BQU8sS0FBSyxXQUFXLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxL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O0FBQ2pCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxnQkFBZ0IsMkRBQWE7QUFDN0IsNEJBQTRCLDREQUFXLFFBQVE7QUFDL0M7QUFDQSxFQUFFLDJEQUFnQjtBQUNsQjtBQUNBO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRSxnRUFBZ0UsU0FBUztBQUN6RSxzQ0FBc0MsMENBQUssQ0FBQztBQUM1QywyQkFBMkIsZ0JBQWdCO0FBQzNDLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxzREFBSztBQUNQOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ21DOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBUTtBQUNwQjtBQUNBLG9CQUFvQiwyREFBYTtBQUNqQztBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0MsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3BvcFVwLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9wb3BVcC5jc3M/YmI0MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvY2FsbEFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvZ2V0U2VyaWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9pbnZvbEFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy91cGRhdGVMaWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3BVcC1jYXJkIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNhcmQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtc2VjdGlvbiB7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuN2VtO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGE5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDEgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnhCdHRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U2ZTtcXHJcXG4gIHBhZGRpbmc6IDUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZVRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiBwLFxcclxcbmksXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIGxpIHN0cm9uZyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5ib3gzIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyxcXHJcXG4udmlld0NvbW1lbnRzID4gKiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTQwcHg7XFxyXFxuXFxyXFxuICAtLXNiLXRyYWNrLWNvbG9yOiAjZmZmO1xcclxcbiAgLS1zYi10aHVtYi1jb2xvcjogIzQ4NDk0OTtcXHJcXG4gIC0tc2Itc2l6ZTogM3B4O1xcclxcblxcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcikgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogdmFyKC0tc2Itc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRodW1iLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3g0IGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uZXdDb21tZW50Rm9ybSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDElIDMlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI0NvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29tbWVudEJ0dG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1zZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDgzJTtcXHJcXG4gIGxlZnQ6IDY4JTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnBvcFVwLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNGVtO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDEge1xcclxcbiAgICBoZWlnaHQ6IDM1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94MSBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC54QnR0biB7XFxyXFxuICAgIHRvcDogNnB4O1xcclxcbiAgICByaWdodDogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDIge1xcclxcbiAgICBnYXA6IDAuMmVtO1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZVRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94MiBwLFxcclxcbiAgaSxcXHJcXG4gIGIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllRGF0YSBsaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDMge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gzIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94NCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94NCBoNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMiUgNCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNDb21tZW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkQ29tbWVudEJ0dG4ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjdlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNlcnJvck1zZyB7XFxyXFxuICAgIHRvcDogNjYlO1xcclxcbiAgICBsZWZ0OiAyNSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3BVcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7OztJQUdFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wVXAtY2FyZCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1jYXJkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXNlY3Rpb24ge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjdlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBwYWRkaW5nOiAxJSAyJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gxIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi54QnR0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlNmU7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVUaXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDIgcCxcXHJcXG5pLFxcclxcbmIge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXJpZURhdGEge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAwLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSBsaSB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSBsaSBzdHJvbmcge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MyBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHMsXFxyXFxuLnZpZXdDb21tZW50cyA+ICoge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xcclxcblxcclxcbiAgLS1zYi10cmFjay1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tc2ItdGh1bWItY29sb3I6ICM0ODQ5NDk7XFxyXFxuICAtLXNiLXNpemU6IDNweDtcXHJcXG5cXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpIHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94NCBoNCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0ge1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxJSAzJTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNDb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNc2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MyU7XFxyXFxuICBsZWZ0OiA2OCU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50QnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjRlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gxIHtcXHJcXG4gICAgaGVpZ2h0OiAzNSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDEgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAueEJ0dG4ge1xcclxcbiAgICB0b3A6IDZweDtcXHJcXG4gICAgcmlnaHQ6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gyIHtcXHJcXG4gICAgZ2FwOiAwLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDIgcCxcXHJcXG4gIGksXFxyXFxuICBiIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZURhdGEgbGkge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gzIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94MyBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZXdDb21tZW50cyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDQgaDQge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdDb21tZW50Rm9ybSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdDb21tZW50Rm9ybSBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IDIlIDQlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjQ29tbWVudCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS43ZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZXJyb3JNc2cge1xcclxcbiAgICB0b3A6IDY2JTtcXHJcXG4gICAgbGVmdDogMjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90bytTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci10ZXh0OiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1jbHItYmc6IGhzbCgwLCAwJSwgMzElKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tLFxcclxcbiAgICAgIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC43MTYpLFxcclxcbiAgICAgIHJnYmEoMzcsIDM3LCAzNywgMC45NylcXHJcXG4gICAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAgaGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDElIDclO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICBjb2xvcjogI2E3YTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGxpOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZjFjNDBmO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWN0aW9uICovXFxyXFxuXFxyXFxuLmxhbmRpbmctcGFnZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICBwYWRkaW5nOiAyJSA1JTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG4gIG1hcmdpbjogNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDVweCAjMjIyO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgI2YxYzQwZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkaW5nIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDE1JSAwIDElIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0biB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbjogMyUgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMlIDEwJTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNCUgMTElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBtYXJnaW46IDElIDIlO1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBsaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxhbmRpbmctcGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgbWFyZ2luOiAyJTtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAzJSAwIDElIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1idHRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIG1hcmdpbjogMiUgYXV0bztcXHJcXG4gICAgcGFkZGluZzogNCUgMTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3Rlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzs7OztLQUtHO0VBQ0gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzYwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8rU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jbHItdGV4dDogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gIC0tY2xyLWJnOiBoc2woMCwgMCUsIDMxJSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNzE2KSxcXHJcXG4gICAgICByZ2JhKDM3LCAzNywgMzcsIDAuOTcpXFxyXFxuICAgICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogIGhlYWRlciAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxJSA3JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgY29sb3I6ICNhN2EzYTM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBsaTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgI2YxYzQwZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjdGlvbiAqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgcGFkZGluZzogMiUgNSU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICB3aWR0aDogMjYwcHg7XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggIzIyMjtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmMWM0MGY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGluZyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAxNSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzUwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbi5saWtlZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG4ge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW46IDMlIGF1dG87XFxyXFxuICBwYWRkaW5nOiAzJSAxMCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQlIDExJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxJSAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgbWFyZ2luOiAxJSAyJTtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgbGkge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIG1hcmdpbjogMiU7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMyUgMCAxJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtYnR0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBtYXJnaW46IDIlIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQlIDE1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiA1JSA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3BVcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcFVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vcG9wVXAuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL2xvZ28ucG5nJztcbmltcG9ydCBjYWxsQVBJIGZyb20gJy4vbW9kdWxlcy9jYWxsQVBJLmpzJztcblxuY29uc3QgTE9HT19IRUFERVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuTE9HT19IRUFERVIuc3JjID0gbG9nbztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhbGxBUEkoKSk7XG4iLCJpbXBvcnQgeyBnZXRTZXJpZXMgfSBmcm9tICcuL2dldFNlcmllcy5qcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJztcblxuY29uc3Qgc2VyaWVzID0gWyd0dDA5NDQ5NDcnLCAndHQxMTE5ODMzMCcsICd0dDg3NzIyOTYnLCAndHQyNjYxMDQ0JywgJ3R0NDU3NDMzNCcsICd0dDIwODUwNTknXTtcblxuY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgc2VyaWVzLmZvckVhY2goYXN5bmMgKGVsZSkgPT4ge1xuICAgIGF3YWl0IGdldFNlcmllcyhgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/aW1kYj0ke2VsZX1gKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxsQVBJOyIsImltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XG5cbmNvbnN0IEFQSVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZTkdJQXZtdXpmcXcySUlwZzYwSy9jb21tZW50cy8nO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpKSA9PiB7XG4gIGNvbnN0IGNvbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3Q29tbWVudHMnKTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1lOR0lBdm11emZxdzJJSXBnNjBLL2NvbW1lbnRzP2l0ZW1faWQ9JHtpfWApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9iai5qc29uKCk7XG4gIGNvbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb21tZW50TGlzdC5jbGFzc05hbWUgPSAnbmV3Q3JlYXRlQ29tbWVudCc7XG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSBgICR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xuICAgICAgY29tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb21lbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnTm8gY29tbWVudHMgeWV0LCBiZSB0aGUgZmlyc3Qgb25lIHRvIGNvbW1lbnQhJztcbiAgfVxuICBjb25zdCBjb3VudGVyID0gY29tbWVudENvdW50ZXIocmVzcG9uc2UpO1xuICBjb25zdCBjb3VudFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50VGl0bGUnKTtcbiAgY291bnRVcGRhdGUuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KWA7XG59O1xuXG5jb25zdCBQT1NUQ29tbWVudCA9IGFzeW5jIChvYmopID0+IHtcbiAgYXdhaXQgZmV0Y2goQVBJVVJMLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXG4gICAgfSk7XG59O1xuXG5jb25zdCBuZXdDb21tZW50Rm9ybSA9IChpZCwgc3VibWl0QnR0bikgPT4ge1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmFtZScpO1xuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29tbWVudCcpO1xuICBjb25zdCBlbXB5dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTXNnJyk7XG4gIHN1Ym1pdEJ0dG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSAnJyB8fCBjb21tZW50SW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICBlbXB5dEZpZWxkLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbXB5dEZpZWxkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tbWVudE9iaiA9IHtcbiAgICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICAgICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IFBPU1RDb21tZW50KGNvbW1lbnRPYmopO1xuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGF3YWl0IGdldENvbW1lbnRzKGlkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbmV3Q29tbWVudEZvcm0sIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChhcnJheSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xuICB9IHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2ludm9sQVBJLmpzJztcblxuY29uc3QgYXJyYXlPYmogPSBbXTtcblxuY29uc3QgZ2V0U2VyaWVzID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2goZmlsZSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2JqLmpzb24oKTtcbiAgYXJyYXlPYmoucHVzaChyZXNwb25zZSk7XG59O1xuZXhwb3J0IHsgYXJyYXlPYmosIGdldFNlcmllcyB9OyIsImxldCBhcnJheUl0ZW1zID0gW107XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBvYmogPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbUpyalBjWjE4V3BiUDJhbmZ1V2ovbGlrZXMvJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2JqLmpzb24oKTtcbiAgYXJyYXlJdGVtcyA9IHJlc3BvbnNlO1xufTtcbmNvbnN0IGdldEFycmF5SXRlbXMgPSAoKSA9PiBhcnJheUl0ZW1zO1xuZXhwb3J0IHsgZ2V0TGlrZXMsIGdldEFycmF5SXRlbXMgfTsiLCJjb25zdCBpdGVtQ291bnRlciA9IChhcnJheSkgPT4gYXJyYXkubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiaW1wb3J0IGNsb3NlUG9wVXAgZnJvbSAnLi4vaW1nL3gucG5nJztcbmltcG9ydCB7IGFycmF5T2JqIH0gZnJvbSAnLi9nZXRTZXJpZXMuanMnO1xuaW1wb3J0IHsgbmV3Q29tbWVudEZvcm0sIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XG5cbmNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuY29uc3QgcG9wVXBSZW5kZXIgPSBhc3luYyAoaSwgaWQpID0+IHtcbiAgY29uc3QgZWxlbSA9IGFycmF5T2JqW2ldO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbS5pbWFnZS5tZWRpdW19KWA7XG4gIGNhcmQuY2xhc3NOYW1lID0gJ3BvcFVwLWNhcmQgZmxleCc7XG4gIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicG9wVXAtc2VjdGlvbiBncmlkXCI+XG4gICAgPGltZyBzcmM9XCIke2Nsb3NlUG9wVXB9XCIgYWx0PVwiWCBidXR0b25cIiBjbGFzcz1cInhCdHRuXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gxXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2VsZW0uaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlNlcmllIGltYWdlIG5yby4xXCIgY2xhc3M9XCJzZXJpZUltZ1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDIgZmxleFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cInNlcmllVGl0bGVcIj4ke2VsZW0ubmFtZX08L2gyPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInNlcmllRGF0YSBncmlkXCI+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5SYXRpbmc6PC9zdHJvbmc+ICR7ZWxlbS5yYXRpbmcuYXZlcmFnZX0vMTA8L2xpPlxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+U3RhdHVzOjwvc3Ryb25nPiAke2VsZW0uc3RhdHVzfTwvbGk+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5MYW5ndWFnZTo8L3N0cm9uZz4gJHtlbGVtLmxhbmd1YWdlfTwvbGk+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5HZW5yZXM6PC9zdHJvbmc+ICR7ZWxlbS5nZW5yZXN9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwIGNsYXNzPVwiU2VyaWVSZXN1bWVcIj4ke2VsZW0uc3VtbWFyeX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94M1wiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnRUaXRsZVwiPkNvbW1lbnRzICgwKTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdDb21tZW50c1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDRcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJjb21tZW50U3VidGl0bGVcIj5BZGQgYSBjb21tZW50PC9oND5cbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm5ld0NvbW1lbnRGb3JtIGZsZXhcIj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZXJyb3JNc2dcIj48L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiTmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkY29tbWVudFwiIGlkPVwiQ29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRDb21tZW50QnR0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xuICBwYWdlQm9keS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgYXdhaXQgZ2V0Q29tbWVudHMoaSk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnhCdHRuJyk7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChjYXJkKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0QnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDb21tZW50QnR0bicpO1xuXG4gIG5ld0NvbW1lbnRGb3JtKGlkLCBzdWJtaXRCdHRuKTtcbiAgYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wVXBSZW5kZXI7XG4iLCJpbXBvcnQgaGVhcnQgZnJvbSAnLi4vaW1nL3N0YXIucG5nJztcbmltcG9ydCB7IGFycmF5T2JqIH0gZnJvbSAnLi9nZXRTZXJpZXMuanMnO1xuaW1wb3J0IHBvcFVwUmVuZGVyIGZyb20gJy4vcG9wVXAuanMnO1xuaW1wb3J0IHsgZ2V0QXJyYXlJdGVtcyB9IGZyb20gJy4vaW52b2xBUEkuanMnO1xuaW1wb3J0IHsgbGlrZXMgfSBmcm9tICcuL3VwZGF0ZUxpa2VzLmpzJztcbmltcG9ydCBpdGVtQ291bnRlciBmcm9tICcuL2l0ZW1zQ291bnRlci5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXBhZ2UnKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1saW5rJyk7XG5cbmNvbnN0IHNlZUNvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BVcC1idHRuJykpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwUmVuZGVyKGksIGJ1dHRvbi5pZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IGdldEFycmF5SXRlbXMoKTtcbiAgaG9tZS5pbm5lckhUTUwgPSBgSG9tZSAoJHtpdGVtQ291bnRlcihpdGVtcyl9KWA7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgYXJyYXlPYmouZm9yRWFjaCgoZWxlLCBpKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNhcmQuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJjYXJkLWltZ1wiIHNyYz0nJHtlbGUuaW1hZ2UubWVkaXVtfSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggY2FyZC1oZWFkaW5nJz48aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtlbGUubmFtZX08L2g0PlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pY29uXCIgc3JjPScke2hlYXJ0fSc+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4ke2l0ZW1zW2ldLmxpa2VzfSBMaWtlczwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwLWJ0dG5cIiBpZD1cIiR7ZWxlLmlkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50czwvYnV0dG9uPmA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbiAgc2VlQ29tbWVudHMoKTtcbiAgbGlrZXMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgeyBnZXRMaWtlcywgZ2V0QXJyYXlJdGVtcyB9IGZyb20gJy4vaW52b2xBUEkuanMnO1xuXG5jb25zdCBpdGVtSWRzID0gWydHT1QnLCAnSE9URCcsICdFVVBIJywgJ1QxMDAnLCAnU1QnLCAnQk0nXTtcbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBpdGVtX2lkOiBgJHtpdGVtSWRzW2lkXX1gLFxuICB9O1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbUpyalBjWjE4V3BiUDJhbmZ1V2ovbGlrZXMvJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICB9KTtcbn07XG5jb25zdCBsaWtlcyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZC1pY29uJykpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaWtlZCcpO1xuICAgICAgYXdhaXQgdXBkYXRlTGlrZXMoaSk7XG4gICAgICBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xpa2VkJyk7XG4gICAgICBjb25zdCBpdGVtcyA9IGdldEFycmF5SXRlbXMoKTtcbiAgICAgIGNvbnN0IGxpa2VzUCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlrZXMnKSk7XG4gICAgICBsaWtlc1BbaV0uaW5uZXJIVE1MID0gYCR7aXRlbXNbaV0ubGlrZXN9IExpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVMaWtlcywgbGlrZXMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==