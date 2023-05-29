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
___CSS_LOADER_EXPORT___.push([module.id, ".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-card {\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    backdrop-filter: blur(18px);\r\n  }\r\n\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 95vh;\r\n  }\r\n  .box1 img {\r\n    margin-top: 5%;\r\n    height: 95%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    width: 30px;\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.3em;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .viewComments {\r\n    border-radius: 5px;\r\n    margin-top: 2%;\r\n    padding-right: 1%;\r\n    overflow-y: auto;\r\n    max-height: 100px;\r\n    --sb-track-color: #fff;\r\n    --sb-thumb-color: #484949;\r\n    --sb-size: 3px;\r\n    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar {\r\n    width: var(--sb-size);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-track {\r\n    background: var(--sb-track-color);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-thumb {\r\n    background: var(--sb-thumb-color);\r\n    border-radius: 30px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    height: 60px;\r\n    font-size: 0.9;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    position: absolute;\r\n    top: 66%;\r\n    left: 25%;\r\n    font-size: 0.9rem;\r\n    color: rgb(255, 0, 0);\r\n    text-shadow: 5px 5px 10px black;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popUp.css"],"names":[],"mappings":"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","sourcesContent":[".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-card {\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    backdrop-filter: blur(18px);\r\n  }\r\n\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 95vh;\r\n  }\r\n  .box1 img {\r\n    margin-top: 5%;\r\n    height: 95%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    width: 30px;\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.3em;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .viewComments {\r\n    border-radius: 5px;\r\n    margin-top: 2%;\r\n    padding-right: 1%;\r\n    overflow-y: auto;\r\n    max-height: 100px;\r\n    --sb-track-color: #fff;\r\n    --sb-thumb-color: #484949;\r\n    --sb-size: 3px;\r\n    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar {\r\n    width: var(--sb-size);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-track {\r\n    background: var(--sb-track-color);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-thumb {\r\n    background: var(--sb-thumb-color);\r\n    border-radius: 30px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    height: 60px;\r\n    font-size: 0.9;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    position: absolute;\r\n    top: 66%;\r\n    left: 25%;\r\n    font-size: 0.9rem;\r\n    color: rgb(255, 0, 0);\r\n    text-shadow: 5px 5px 10px black;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(\r\n    to bottom,\r\n    rgba(121, 121, 121, 0.716),\r\n    rgba(37, 37, 37, 0.97)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,sCAAsC;EACtC,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE;;;;GAIC;EACD,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,cAAc;EACd,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(\r\n    to bottom,\r\n    rgba(121, 121, 121, 0.716),\r\n    rgba(37, 37, 37, 0.97)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
            <li>Rating: ${elem.rating.average}/10</li>
            <li>Status: ${elem.status}</li>
            <li>Language: ${elem.language}</li>
            <li>Genres: ${elem.genres}</li>
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
  });2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVE7QUFDcEI7QUFDQSxvQkFBb0IsMkRBQWE7QUFDakM7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUM4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvcG9wVXAuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3BvcFVwLmNzcz9iYjQzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jYWxsQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9nZXRTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL2ludm9sQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3VwZGF0ZUxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcFVwLWNhcmQge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtY2FyZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC43ZW07XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcGFkZGluZzogMSUgMiU7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MSBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ueEJ0dG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTZlO1xcclxcbiAgcGFkZGluZzogNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllVGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHAsXFxyXFxuaSxcXHJcXG5iIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5zZXJpZURhdGEgbGkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3gzIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyxcXHJcXG4udmlld0NvbW1lbnRzID4gKiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTQwcHg7XFxyXFxuICAtLXNiLXRyYWNrLWNvbG9yOiAjZmZmO1xcclxcbiAgLS1zYi10aHVtYi1jb2xvcjogIzQ4NDk0OTtcXHJcXG4gIC0tc2Itc2l6ZTogM3B4O1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcikgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogdmFyKC0tc2Itc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRodW1iLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3g0IGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uZXdDb21tZW50Rm9ybSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDElIDMlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI0NvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29tbWVudEJ0dG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1zZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDgzJTtcXHJcXG4gIGxlZnQ6IDY4JTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnBvcFVwLWNhcmQge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjRlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIGhlaWdodDogOTV2aDtcXHJcXG4gIH1cXHJcXG4gIC5ib3gxIGltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnhCdHRuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHRvcDogNnB4O1xcclxcbiAgICByaWdodDogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDIge1xcclxcbiAgICBnYXA6IDAuMmVtO1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZVRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gyIHAsXFxyXFxuICBpLFxcclxcbiAgYiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVEYXRhIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDAuM2VtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDMge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICAgIC0tc2ItdHJhY2stY29sb3I6ICNmZmY7XFxyXFxuICAgIC0tc2ItdGh1bWItY29sb3I6ICM0ODQ5NDk7XFxyXFxuICAgIC0tc2Itc2l6ZTogM3B4O1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNiLXRodW1iLWNvbG9yKSB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zYi1zaXplKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94NCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3Q29tbWVudEZvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAyJSA0JTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI0NvbW1lbnQge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS43ZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZXJyb3JNc2cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNjYlO1xcclxcbiAgICBsZWZ0OiAyNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3BVcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7OztJQUdFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCw0REFBNEQ7RUFDOUQ7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3BVcC1jYXJkIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWNhcmQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtc2VjdGlvbiB7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuN2VtO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGE5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDEgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnhCdHRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U2ZTtcXHJcXG4gIHBhZGRpbmc6IDUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZVRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiBwLFxcclxcbmksXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIGxpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MyBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHMsXFxyXFxuLnZpZXdDb21tZW50cyA+ICoge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xcclxcbiAgLS1zYi10cmFjay1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tc2ItdGh1bWItY29sb3I6ICM0ODQ5NDk7XFxyXFxuICAtLXNiLXNpemU6IDNweDtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpIHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94NCBoNCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0ge1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxJSAzJTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNDb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNc2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MyU7XFxyXFxuICBsZWZ0OiA2OCU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50QnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5wb3BVcC1jYXJkIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMThweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC40ZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBoZWlnaHQ6IDk1dmg7XFxyXFxuICB9XFxyXFxuICAuYm94MSBpbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgaGVpZ2h0OiA5NSU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC54QnR0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB0b3A6IDZweDtcXHJcXG4gICAgcmlnaHQ6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gyIHtcXHJcXG4gICAgZ2FwOiAwLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94MiBwLFxcclxcbiAgaSxcXHJcXG4gIGIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllRGF0YSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAwLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gzIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAtLXNiLXRyYWNrLWNvbG9yOiAjZmZmO1xcclxcbiAgICAtLXNiLXRodW1iLWNvbG9yOiAjNDg0OTQ5O1xcclxcbiAgICAtLXNiLXNpemU6IDNweDtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcikgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2Itc2l6ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMiUgNCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNDb21tZW50IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGRDb21tZW50QnR0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC42cmVtIDEuN2VtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Vycm9yTXNnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDY2JTtcXHJcXG4gICAgbGVmdDogMjUlO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90bytTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci10ZXh0OiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1jbHItYmc6IGhzbCgwLCAwJSwgMzElKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjcxNiksXFxyXFxuICAgIHJnYmEoMzcsIDM3LCAzNywgMC45NylcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogIGhlYWRlciAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxJSA3JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgY29sb3I6ICNhN2EzYTM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBsaTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgI2YxYzQwZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjdGlvbiAqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgcGFkZGluZzogMiUgNSU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICB3aWR0aDogMjYwcHg7XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggIzIyMjtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmMWM0MGY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGluZyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAxNSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzUwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbi5saWtlZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG4ge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW46IDMlIGF1dG87XFxyXFxuICBwYWRkaW5nOiAzJSAxMCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQlIDExJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxJSAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgbWFyZ2luOiAxJSAyJTtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgbGkge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIG1hcmdpbjogMiU7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMyUgMCAxJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtYnR0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBtYXJnaW46IDIlIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQlIDE1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiA1JSA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNc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XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzYwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8rU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jbHItdGV4dDogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gIC0tY2xyLWJnOiBoc2woMCwgMCUsIDMxJSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC43MTYpLFxcclxcbiAgICByZ2JhKDM3LCAzNywgMzcsIDAuOTcpXFxyXFxuICApO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUtc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb2ludGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qICBoZWFkZXIgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMSUgNyU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbWFyZ2luOiAwIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG4gIGNvbG9yOiAjYTdhM2EzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICNmMWM0MGY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luOiAwIDUlO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gIHBhZGRpbmc6IDIlIDUlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbiAgbWFyZ2luOiA1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggNXB4ICMyMjI7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZjFjNDBmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRpbmcge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTUlIDAgMSUgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDc1MDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idHRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luOiAzJSBhdXRvO1xcclxcbiAgcGFkZGluZzogMyUgMTAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA0JSAxMSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMSUgMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIG1hcmdpbjogMSUgMiU7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBtYXJnaW46IDAgMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIGxpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGFuZGluZy1wYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBtYXJnaW46IDIlO1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWhlYWRpbmcge1xcclxcbiAgICBtYXJnaW46IDMlIDAgMSUgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLWJ0dG4ge1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA0JSAxNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogNSUgNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wVXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3BVcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vcG9wVXAuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgY2FsbEFQSSBmcm9tICcuL21vZHVsZXMvY2FsbEFQSS5qcyc7XHJcblxyXG5jb25zdCBMT0dPX0hFQURFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XHJcbkxPR09fSEVBREVSLnNyYyA9IGxvZ287XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbEFQSSgpKTtcclxuIiwiaW1wb3J0IHsgZ2V0U2VyaWVzIH0gZnJvbSAnLi9nZXRTZXJpZXMuanMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlci5qcyc7XG5cbmNvbnN0IHNlcmllcyA9IFsndHQwOTQ0OTQ3JywgJ3R0MTExOTgzMzAnLCAndHQ4NzcyMjk2JywgJ3R0MjY2MTA0NCcsICd0dDQ1NzQzMzQnLCAndHQyMDg1MDU5J107XG5cbmNvbnN0IGNhbGxBUEkgPSAoKSA9PiB7XG4gIHNlcmllcy5mb3JFYWNoKGFzeW5jIChlbGUpID0+IHtcbiAgICBhd2FpdCBnZXRTZXJpZXMoYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vbG9va3VwL3Nob3dzP2ltZGI9JHtlbGV9YCk7XG4gICAgcmVuZGVyKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsbEFQSTsiLCJpbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgQVBJVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1lOR0lBdm11emZxdzJJSXBnNjBLL2NvbW1lbnRzLyc7XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpKSA9PiB7XHJcbiAgY29uc3QgY29tZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdDb21tZW50cycpO1xyXG4gIGNvbnN0IG9iaiA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZTkdJQXZtdXpmcXcySUlwZzYwSy9jb21tZW50cz9pdGVtX2lkPSR7aX1gKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9iai5qc29uKCk7XHJcbiAgY29tZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHJlc3BvbnNlKSkge1xyXG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgY29tbWVudExpc3QuY2xhc3NOYW1lID0gJ25ld0NyZWF0ZUNvbW1lbnQnO1xyXG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSBgICR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xyXG4gICAgICBjb21lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbWVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICdObyBjb21tZW50cyB5ZXQsIGJlIHRoZSBmaXJzdCBvbmUgdG8gY29tbWVudCEnO1xyXG4gIH1cclxuICBjb25zdCBjb3VudGVyID0gY29tbWVudENvdW50ZXIocmVzcG9uc2UpO1xyXG4gIGNvbnN0IGNvdW50VXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRUaXRsZScpO1xyXG4gIGNvdW50VXBkYXRlLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb3VudGVyfSlgO1xyXG59O1xyXG5cclxuY29uc3QgUE9TVENvbW1lbnQgPSBhc3luYyAob2JqKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goQVBJVVJMLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG5ld0NvbW1lbnRGb3JtID0gKGlkLCBzdWJtaXRCdHRuKSA9PiB7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05hbWUnKTtcclxuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29tbWVudCcpO1xyXG4gIGNvbnN0IGVtcHl0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JNc2cnKTtcclxuICBzdWJtaXRCdHRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT09ICcnIHx8IGNvbW1lbnRJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgZW1weXRGaWVsZC50ZXh0Q29udGVudCA9ICdQbGVhc2UgZmlsbCBvdXQgYWxsIGZpZWxkcyc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVtcHl0RmllbGQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb21tZW50T2JqID0ge1xyXG4gICAgICAgIGl0ZW1faWQ6IGAke2lkfWAsXHJcbiAgICAgICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgICBjb21tZW50OiBjb21tZW50SW5wdXQudmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGF3YWl0IFBPU1RDb21tZW50KGNvbW1lbnRPYmopO1xyXG4gICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGF3YWl0IGdldENvbW1lbnRzKGlkKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG5ld0NvbW1lbnRGb3JtLCBnZXRDb21tZW50cyB9O1xyXG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChhcnJheSkgPT4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcclxuICB9IGVsc2UgcmV0dXJuIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjsiLCJpbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gXCIuL2ludm9sQVBJXCI7XG5jb25zdCBhcnJheU9iaiA9IFtdO1xuXG5jb25zdCBnZXRTZXJpZXMgPSBhc3luYyAoZmlsZSkgPT4ge1xuICBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBvYmogPSBhd2FpdCBmZXRjaChmaWxlKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYmouanNvbigpO1xuICBhcnJheU9iai5wdXNoKHJlc3BvbnNlKTtcbn07XG5leHBvcnQgeyBhcnJheU9iaiwgZ2V0U2VyaWVzIH07IiwibGV0IGFycmF5SXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9tSnJqUGNaMThXcGJQMmFuZnVXai9saWtlcy8nKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYmouanNvbigpO1xuICBhcnJheUl0ZW1zID0gcmVzcG9uc2U7XG59O1xuY29uc3QgZ2V0QXJyYXlJdGVtcyA9ICgpID0+IGFycmF5SXRlbXM7XG5leHBvcnQgeyBnZXRMaWtlcywgZ2V0QXJyYXlJdGVtcyB9OyIsImNvbnN0IGl0ZW1Db3VudGVyID0gKGFycmF5KSA9PiBhcnJheS5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBpdGVtQ291bnRlcjsiLCJpbXBvcnQgY2xvc2VQb3BVcCBmcm9tICcuLi9pbWcveC5wbmcnO1xyXG5pbXBvcnQgeyBhcnJheU9iaiB9IGZyb20gJy4vZ2V0U2VyaWVzLmpzJztcclxuaW1wb3J0IHsgbmV3Q29tbWVudEZvcm0sIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XHJcblxyXG5jb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcblxyXG5jb25zdCBwb3BVcFJlbmRlciA9IGFzeW5jIChpLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGVsZW0gPSBhcnJheU9ialtpXTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtc2Nyb2xsJyk7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW0uaW1hZ2UubWVkaXVtfSlgO1xyXG4gIGNhcmQuY2xhc3NOYW1lID0gJ3BvcFVwLWNhcmQgZmxleCc7XHJcbiAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBvcFVwLXNlY3Rpb24gZ3JpZFwiPlxyXG4gICAgPGltZyBzcmM9XCIke2Nsb3NlUG9wVXB9XCIgYWx0PVwiWCBidXR0b25cIiBjbGFzcz1cInhCdHRuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtlbGVtLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJTZXJpZSBpbWFnZSBucm8uMVwiIGNsYXNzPVwic2VyaWVJbWdcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94MiBmbGV4XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9XCJzZXJpZVRpdGxlXCI+JHtlbGVtLm5hbWV9PC9oMj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cInNlcmllRGF0YSBncmlkXCI+XHJcbiAgICAgICAgICAgIDxsaT5SYXRpbmc6ICR7ZWxlbS5yYXRpbmcuYXZlcmFnZX0vMTA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+U3RhdHVzOiAke2VsZW0uc3RhdHVzfTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5MYW5ndWFnZTogJHtlbGVtLmxhbmd1YWdlfTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5HZW5yZXM6ICR7ZWxlbS5nZW5yZXN9PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIlNlcmllUmVzdW1lXCI+JHtlbGVtLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gzXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjb21tZW50VGl0bGVcIj5Db21tZW50cyAoMCk8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdDb21tZW50c1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3g0XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3M9XCJjb21tZW50U3VidGl0bGVcIj5BZGQgYSBjb21tZW50PC9oND5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwibmV3Q29tbWVudEZvcm0gZmxleFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImVycm9yTXNnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiTmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRjb21tZW50XCIgaWQ9XCJDb21tZW50XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkQ29tbWVudEJ0dG5cIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBgO1xyXG4gIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIGF3YWl0IGdldENvbW1lbnRzKGkpO1xyXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnhCdHRuJyk7XHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtc2Nyb2xsJyk7XHJcbiAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChjYXJkKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQ29tbWVudEJ0dG4nKTtcclxuXHJcbiAgbmV3Q29tbWVudEZvcm0oaWQsIHN1Ym1pdEJ0dG4pO1xyXG4gIGF3YWl0IGdldENvbW1lbnRzKGlkKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcFVwUmVuZGVyO1xyXG4iLCJpbXBvcnQgaGVhcnQgZnJvbSAnLi4vaW1nL3N0YXIucG5nJztcclxuaW1wb3J0IHsgYXJyYXlPYmogfSBmcm9tICcuL2dldFNlcmllcy5qcyc7XHJcbmltcG9ydCBwb3BVcFJlbmRlciBmcm9tICcuL3BvcFVwLmpzJztcclxuaW1wb3J0IHsgZ2V0QXJyYXlJdGVtcyB9IGZyb20gJy4vaW52b2xBUEkuanMnO1xyXG5pbXBvcnQgeyBsaWtlcyB9IGZyb20gJy4vdXBkYXRlTGlrZXMuanMnO1xyXG5pbXBvcnQgaXRlbUNvdW50ZXIgZnJvbSAnLi9pdGVtc0NvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGFnZScpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtbGluaycpO1xyXG5cclxuY29uc3Qgc2VlQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wVXAtYnR0bicpKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBwb3BVcFJlbmRlcihpLCBidXR0b24uaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7MlxyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zID0gZ2V0QXJyYXlJdGVtcygpO1xyXG4gIGhvbWUuaW5uZXJIVE1MID0gYEhvbWUgKCR7aXRlbUNvdW50ZXIoaXRlbXMpfSlgO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBhcnJheU9iai5mb3JFYWNoKChlbGUsIGkpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImNhcmQtaW1nXCIgc3JjPScke2VsZS5pbWFnZS5tZWRpdW19Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGNhcmQtaGVhZGluZyc+PGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZWxlLm5hbWV9PC9oND5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pY29uXCIgc3JjPScke2hlYXJ0fSc+PC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPiR7aXRlbXNbaV0ubGlrZXN9IExpa2VzPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcC1idHRuXCIgaWQ9XCIke2VsZS5pZH1cIiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIHNlZUNvbW1lbnRzKCk7XHJcbiAgbGlrZXMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgeyBnZXRMaWtlcywgZ2V0QXJyYXlJdGVtcyB9IGZyb20gJy4vaW52b2xBUEkuanMnO1xyXG5cclxuY29uc3QgaXRlbUlkcyA9IFsnR09UJywgJ0hPVEQnLCAnRVVQSCcsICdUMTAwJywgJ1NUJywgJ0JNJ107XHJcbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgaXRlbV9pZDogYCR7aXRlbUlkc1tpZF19YCxcclxuICB9O1xyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9tSnJqUGNaMThXcGJQMmFuZnVXai9saWtlcy8nLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBsaWtlcyA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLWljb24nKSk7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZUxpa2VzKGkpO1xyXG4gICAgICBhd2FpdCBnZXRMaWtlcygpO1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbGlrZWQnKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBnZXRBcnJheUl0ZW1zKCk7XHJcbiAgICAgIGNvbnN0IGxpa2VzUCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlrZXMnKSk7XHJcbiAgICAgIGxpa2VzUFtpXS5pbm5lckhUTUwgPSBgJHtpdGVtc1tpXS5saWtlc30gTGlrZXNgO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVMaWtlcywgbGlrZXMgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9