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
___CSS_LOADER_EXPORT___.push([module.id, ".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  min-height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-card {\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    backdrop-filter: blur(18px);\r\n  }\r\n\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 95vh;\r\n  }\r\n  .box1 img {\r\n    margin-top: 5%;\r\n    height: 95%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    width: 30px;\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.3em;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .viewComments {\r\n    border-radius: 5px;\r\n    margin-top: 2%;\r\n    padding-right: 1%;\r\n    overflow-y: auto;\r\n    max-height: 100px;\r\n    --sb-track-color: #fff;\r\n    --sb-thumb-color: #484949;\r\n    --sb-size: 3px;\r\n    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar {\r\n    width: var(--sb-size);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-track {\r\n    background: var(--sb-track-color);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-thumb {\r\n    background: var(--sb-thumb-color);\r\n    border-radius: 30px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    height: 60px;\r\n    font-size: 0.9;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    position: absolute;\r\n    top: 66%;\r\n    left: 25%;\r\n    font-size: 0.9rem;\r\n    color: rgb(255, 0, 0);\r\n    text-shadow: 5px 5px 10px black;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popUp.css"],"names":[],"mappings":"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","sourcesContent":[".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  min-height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-card {\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    backdrop-filter: blur(18px);\r\n  }\r\n\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 95vh;\r\n  }\r\n  .box1 img {\r\n    margin-top: 5%;\r\n    height: 95%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    width: 30px;\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.3em;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .viewComments {\r\n    border-radius: 5px;\r\n    margin-top: 2%;\r\n    padding-right: 1%;\r\n    overflow-y: auto;\r\n    max-height: 100px;\r\n    --sb-track-color: #fff;\r\n    --sb-thumb-color: #484949;\r\n    --sb-size: 3px;\r\n    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar {\r\n    width: var(--sb-size);\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-track {\r\n    background: var(--sb-track-color);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .viewComments::-webkit-scrollbar-thumb {\r\n    background: var(--sb-thumb-color);\r\n    border-radius: 30px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    height: 60px;\r\n    font-size: 0.9;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    position: absolute;\r\n    top: 66%;\r\n    left: 25%;\r\n    font-size: 0.9rem;\r\n    color: rgb(255, 0, 0);\r\n    text-shadow: 5px 5px 10px black;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxV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QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVE7QUFDcEI7QUFDQSxvQkFBb0IsMkRBQWE7QUFDakM7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUM4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvcG9wVXAuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL3BvcFVwLmNzcz9iYjQzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jYWxsQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUtLy4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9nZXRTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL2ludm9sQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS0vLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLS8uL3NyYy9tb2R1bGVzL3VwZGF0ZUxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcFVwLWNhcmQge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtY2FyZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC43ZW07XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcGFkZGluZzogMSUgMiU7XFxyXFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGE5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDEgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnhCdHRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U2ZTtcXHJcXG4gIHBhZGRpbmc6IDUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZVRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MiBwLFxcclxcbmksXFxyXFxuYiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllRGF0YSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIGxpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MyBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHMsXFxyXFxuLnZpZXdDb21tZW50cyA+ICoge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xcclxcbiAgLS1zYi10cmFjay1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tc2ItdGh1bWItY29sb3I6ICM0ODQ5NDk7XFxyXFxuICAtLXNiLXNpemU6IDNweDtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2ItdGh1bWItY29sb3IpIHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IHZhcigtLXNiLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94NCBoNCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0ge1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxJSAzJTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbiNDb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNc2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MyU7XFxyXFxuICBsZWZ0OiA2OCU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50QnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5wb3BVcC1jYXJkIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMThweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC40ZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBoZWlnaHQ6IDk1dmg7XFxyXFxuICB9XFxyXFxuICAuYm94MSBpbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgaGVpZ2h0OiA5NSU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC54QnR0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB0b3A6IDZweDtcXHJcXG4gICAgcmlnaHQ6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gyIHtcXHJcXG4gICAgZ2FwOiAwLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94MiBwLFxcclxcbiAgaSxcXHJcXG4gIGIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllRGF0YSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAwLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gzIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAtLXNiLXRyYWNrLWNvbG9yOiAjZmZmO1xcclxcbiAgICAtLXNiLXRodW1iLWNvbG9yOiAjNDg0OTQ5O1xcclxcbiAgICAtLXNiLXNpemU6IDNweDtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcikgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2Itc2l6ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItdGh1bWItY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld0NvbW1lbnRGb3JtIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMiUgNCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNDb21tZW50IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGRDb21tZW50QnR0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC42cmVtIDEuN2VtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Vycm9yTXNnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDY2JTtcXHJcXG4gICAgbGVmdDogMjUlO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wVXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsNERBQTREO0VBQzlEOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwrQkFBK0I7RUFDakM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wVXAtY2FyZCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1jYXJkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXNlY3Rpb24ge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjdlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBwYWRkaW5nOiAxJSAyJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94MSBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ueEJ0dG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveDIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTZlO1xcclxcbiAgcGFkZGluZzogNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllVGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxufVxcclxcblxcclxcbi5ib3gyIHAsXFxyXFxuaSxcXHJcXG5iIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVEYXRhIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5zZXJpZURhdGEgbGkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3gzIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXdDb21tZW50cyxcXHJcXG4udmlld0NvbW1lbnRzID4gKiB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTQwcHg7XFxyXFxuICAtLXNiLXRyYWNrLWNvbG9yOiAjZmZmO1xcclxcbiAgLS1zYi10aHVtYi1jb2xvcjogIzQ4NDk0OTtcXHJcXG4gIC0tc2Itc2l6ZTogM3B4O1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zYi10aHVtYi1jb2xvcikgdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogdmFyKC0tc2Itc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRyYWNrLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXRodW1iLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3g0IGg0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uZXdDb21tZW50Rm9ybSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDElIDMlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI0NvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ29tbWVudEJ0dG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1zZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDgzJTtcXHJcXG4gIGxlZnQ6IDY4JTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENvbW1lbnRCdHRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWM0MGY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnBvcFVwLWNhcmQge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjRlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIGhlaWdodDogOTV2aDtcXHJcXG4gIH1cXHJcXG4gIC5ib3gxIGltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnhCdHRuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHRvcDogNnB4O1xcclxcbiAgICByaWdodDogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDIge1xcclxcbiAgICBnYXA6IDAuMmVtO1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZVRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3gyIHAsXFxyXFxuICBpLFxcclxcbiAgYiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVEYXRhIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDAuM2VtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJveDMge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICAgIC0tc2ItdHJhY2stY29sb3I6ICNmZmY7XFxyXFxuICAgIC0tc2ItdGh1bWItY29sb3I6ICM0ODQ5NDk7XFxyXFxuICAgIC0tc2Itc2l6ZTogM3B4O1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNiLXRodW1iLWNvbG9yKSB2YXIoLS1zYi10cmFjay1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlld0NvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zYi1zaXplKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC52aWV3Q29tbWVudHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItdHJhY2stY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZXdDb21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi10aHVtYi1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm94NCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3Q29tbWVudEZvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3Q29tbWVudEZvcm0gaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAyJSA0JTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI0NvbW1lbnQge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZENvbW1lbnRCdHRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS43ZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZXJyb3JNc2cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNjYlO1xcclxcbiAgICBsZWZ0OiAyNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMzAwOzQwMDs2MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvK1NsYWJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY2xyLXRleHQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLWNsci1iZzogaHNsKDAsIDAlLCAzMSUpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNzE2KSxcXHJcXG4gICAgcmdiYSgzNywgMzcsIDM3LCAwLjk3KVxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAgaGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDElIDclO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICBjb2xvcjogI2E3YTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGxpOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZjFjNDBmO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWN0aW9uICovXFxyXFxuXFxyXFxuLmxhbmRpbmctcGFnZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICBwYWRkaW5nOiAyJSA1JTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG4gIG1hcmdpbjogNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDVweCAjMjIyO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgI2YxYzQwZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkaW5nIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDE1JSAwIDElIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0biB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbjogMyUgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMlIDEwJTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnR0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNCUgMTElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBtYXJnaW46IDElIDIlO1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBsaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxhbmRpbmctcGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgbWFyZ2luOiAyJTtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAzJSAwIDElIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1idHRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIG1hcmdpbjogMiUgYXV0bztcXHJcXG4gICAgcGFkZGluZzogNCUgMTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3Rlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90bytTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci10ZXh0OiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1jbHItYmc6IGhzbCgwLCAwJSwgMzElKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjcxNiksXFxyXFxuICAgIHJnYmEoMzcsIDM3LCAzNywgMC45NylcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogIGhlYWRlciAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxJSA3JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgY29sb3I6ICNhN2EzYTM7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBsaTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgI2YxYzQwZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjdGlvbiAqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgcGFkZGluZzogMiUgNSU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICB3aWR0aDogMjYwcHg7XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggIzIyMjtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmMWM0MGY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGluZyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAxNSUgMCAxJSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzUwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbi5saWtlZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG4ge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW46IDMlIGF1dG87XFxyXFxuICBwYWRkaW5nOiAzJSAxMCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ0dG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQlIDExJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxJSAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgbWFyZ2luOiAxJSAyJTtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAxJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgbGkge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nLXBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIG1hcmdpbjogMiU7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMyUgMCAxJSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtYnR0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBtYXJnaW46IDIlIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQlIDE1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiA1JSA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3BVcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcFVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9wb3BVcC5jc3MnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltZy9sb2dvLnBuZyc7XHJcbmltcG9ydCBjYWxsQVBJIGZyb20gJy4vbW9kdWxlcy9jYWxsQVBJLmpzJztcclxuXHJcbmNvbnN0IExPR09fSEVBREVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxuTE9HT19IRUFERVIuc3JjID0gbG9nbztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsQVBJKCkpO1xyXG4iLCJpbXBvcnQgeyBnZXRTZXJpZXMgfSBmcm9tICcuL2dldFNlcmllcy5qcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJztcblxuY29uc3Qgc2VyaWVzID0gWyd0dDA5NDQ5NDcnLCAndHQxMTE5ODMzMCcsICd0dDg3NzIyOTYnLCAndHQyNjYxMDQ0JywgJ3R0NDU3NDMzNCcsICd0dDIwODUwNTknXTtcblxuY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgc2VyaWVzLmZvckVhY2goYXN5bmMgKGVsZSkgPT4ge1xuICAgIGF3YWl0IGdldFNlcmllcyhgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/aW1kYj0ke2VsZX1gKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxsQVBJOyIsImltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBBUElVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWU5HSUF2bXV6ZnF3MklJcGc2MEsvY29tbWVudHMvJztcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGkpID0+IHtcclxuICBjb25zdCBjb21lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlld0NvbW1lbnRzJyk7XHJcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1lOR0lBdm11emZxdzJJSXBnNjBLL2NvbW1lbnRzP2l0ZW1faWQ9JHtpfWApO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2JqLmpzb24oKTtcclxuICBjb21lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XHJcbiAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBjb21tZW50TGlzdC5jbGFzc05hbWUgPSAnbmV3Q3JlYXRlQ29tbWVudCc7XHJcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IGAgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XHJcbiAgICAgIGNvbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29tZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJ05vIGNvbW1lbnRzIHlldCwgYmUgdGhlIGZpcnN0IG9uZSB0byBjb21tZW50ISc7XHJcbiAgfVxyXG4gIGNvbnN0IGNvdW50ZXIgPSBjb21tZW50Q291bnRlcihyZXNwb25zZSk7XHJcbiAgY29uc3QgY291bnRVcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudFRpdGxlJyk7XHJcbiAgY291bnRVcGRhdGUuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KWA7XHJcbn07XHJcblxyXG5jb25zdCBQT1NUQ29tbWVudCA9IGFzeW5jIChvYmopID0+IHtcclxuICBhd2FpdCBmZXRjaChBUElVUkwsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbmV3Q29tbWVudEZvcm0gPSAoaWQsIHN1Ym1pdEJ0dG4pID0+IHtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb21tZW50Jyk7XHJcbiAgY29uc3QgZW1weXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1zZycpO1xyXG4gIHN1Ym1pdEJ0dG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZSA9PT0gJycgfHwgY29tbWVudElucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICBlbXB5dEZpZWxkLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW1weXRGaWVsZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSB7XHJcbiAgICAgICAgaXRlbV9pZDogYCR7aWR9YCxcclxuICAgICAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcclxuICAgICAgfTtcclxuICAgICAgYXdhaXQgUE9TVENvbW1lbnQoY29tbWVudE9iaik7XHJcbiAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmV3Q29tbWVudEZvcm0sIGdldENvbW1lbnRzIH07XHJcbiIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGFycmF5KSA9PiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xyXG4gIH0gZWxzZSByZXR1cm4gMDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyOyIsImltcG9ydCB7IGdldExpa2VzIH0gZnJvbSBcIi4vaW52b2xBUElcIjtcbmNvbnN0IGFycmF5T2JqID0gW107XG5cbmNvbnN0IGdldFNlcmllcyA9IGFzeW5jIChmaWxlKSA9PiB7XG4gIGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IGZldGNoKGZpbGUpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9iai5qc29uKCk7XG4gIGFycmF5T2JqLnB1c2gocmVzcG9uc2UpO1xufTtcbmV4cG9ydCB7IGFycmF5T2JqLCBnZXRTZXJpZXMgfTsiLCJsZXQgYXJyYXlJdGVtcyA9IFtdO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL21KcmpQY1oxOFdwYlAyYW5mdVdqL2xpa2VzLycpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9iai5qc29uKCk7XG4gIGFycmF5SXRlbXMgPSByZXNwb25zZTtcbn07XG5jb25zdCBnZXRBcnJheUl0ZW1zID0gKCkgPT4gYXJyYXlJdGVtcztcbmV4cG9ydCB7IGdldExpa2VzLCBnZXRBcnJheUl0ZW1zIH07IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoYXJyYXkpID0+IGFycmF5Lmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyOyIsImltcG9ydCBjbG9zZVBvcFVwIGZyb20gJy4uL2ltZy94LnBuZyc7XHJcbmltcG9ydCB7IGFycmF5T2JqIH0gZnJvbSAnLi9nZXRTZXJpZXMuanMnO1xyXG5pbXBvcnQgeyBuZXdDb21tZW50Rm9ybSwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudHNDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuXHJcbmNvbnN0IHBvcFVwUmVuZGVyID0gYXN5bmMgKGksIGlkKSA9PiB7XHJcbiAgY29uc3QgZWxlbSA9IGFycmF5T2JqW2ldO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1zY3JvbGwnKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbS5pbWFnZS5tZWRpdW19KWA7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAncG9wVXAtY2FyZCBmbGV4JztcclxuICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwicG9wVXAtc2VjdGlvbiBncmlkXCI+XHJcbiAgICA8aW1nIHNyYz1cIiR7Y2xvc2VQb3BVcH1cIiBhbHQ9XCJYIGJ1dHRvblwiIGNsYXNzPVwieEJ0dG5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94MVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke2VsZW0uaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlNlcmllIGltYWdlIG5yby4xXCIgY2xhc3M9XCJzZXJpZUltZ1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gyIGZsZXhcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cInNlcmllVGl0bGVcIj4ke2VsZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwic2VyaWVEYXRhIGdyaWRcIj5cclxuICAgICAgICAgICAgPGxpPlJhdGluZzogJHtlbGVtLnJhdGluZy5hdmVyYWdlfS8xMDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5TdGF0dXM6ICR7ZWxlbS5zdGF0dXN9PC9saT5cclxuICAgICAgICAgICAgPGxpPkxhbmd1YWdlOiAke2VsZW0ubGFuZ3VhZ2V9PC9saT5cclxuICAgICAgICAgICAgPGxpPkdlbnJlczogJHtlbGVtLmdlbnJlc308L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiU2VyaWVSZXN1bWVcIj4ke2VsZW0uc3VtbWFyeX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDNcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnRUaXRsZVwiPkNvbW1lbnRzICgwKTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlld0NvbW1lbnRzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveDRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cImNvbW1lbnRTdWJ0aXRsZVwiPkFkZCBhIGNvbW1lbnQ8L2g0PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJuZXdDb21tZW50Rm9ybSBmbGV4XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZXJyb3JNc2dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZGNvbW1lbnRcIiBpZD1cIkNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGRDb21tZW50QnR0blwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGA7XHJcbiAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgYXdhaXQgZ2V0Q29tbWVudHMoaSk7XHJcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueEJ0dG4nKTtcclxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1zY3JvbGwnKTtcclxuICAgIHBhZ2VCb2R5LnJlbW92ZUNoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgY29uc3Qgc3VibWl0QnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDb21tZW50QnR0bicpO1xyXG5cclxuICBuZXdDb21tZW50Rm9ybShpZCwgc3VibWl0QnR0bik7XHJcbiAgYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wVXBSZW5kZXI7XHJcbiIsImltcG9ydCBoZWFydCBmcm9tICcuLi9pbWcvc3Rhci5wbmcnO1xyXG5pbXBvcnQgeyBhcnJheU9iaiB9IGZyb20gJy4vZ2V0U2VyaWVzLmpzJztcclxuaW1wb3J0IHBvcFVwUmVuZGVyIGZyb20gJy4vcG9wVXAuanMnO1xyXG5pbXBvcnQgeyBnZXRBcnJheUl0ZW1zIH0gZnJvbSAnLi9pbnZvbEFQSS5qcyc7XHJcbmltcG9ydCB7IGxpa2VzIH0gZnJvbSAnLi91cGRhdGVMaWtlcy5qcyc7XHJcbmltcG9ydCBpdGVtQ291bnRlciBmcm9tICcuL2l0ZW1zQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wYWdlJyk7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1saW5rJyk7XHJcblxyXG5jb25zdCBzZWVDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BVcC1idHRuJykpO1xyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBvcFVwUmVuZGVyKGksIGJ1dHRvbi5pZCk7XHJcbiAgICB9KTtcclxuICB9KTsyXHJcbn07XHJcblxyXG5jb25zdCByZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgaXRlbXMgPSBnZXRBcnJheUl0ZW1zKCk7XHJcbiAgaG9tZS5pbm5lckhUTUwgPSBgSG9tZSAoJHtpdGVtQ291bnRlcihpdGVtcyl9KWA7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGFycmF5T2JqLmZvckVhY2goKGVsZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiY2FyZC1pbWdcIiBzcmM9JyR7ZWxlLmltYWdlLm1lZGl1bX0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggY2FyZC1oZWFkaW5nJz48aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtlbGUubmFtZX08L2g0PlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWljb25cIiBzcmM9JyR7aGVhcnR9Jz48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtpdGVtc1tpXS5saWtlc30gTGlrZXM8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwLWJ0dG5cIiBpZD1cIiR7ZWxlLmlkfVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50czwvYnV0dG9uPmA7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbiAgc2VlQ29tbWVudHMoKTtcclxuICBsaWtlcygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImltcG9ydCB7IGdldExpa2VzLCBnZXRBcnJheUl0ZW1zIH0gZnJvbSAnLi9pbnZvbEFQSS5qcyc7XHJcblxyXG5jb25zdCBpdGVtSWRzID0gWydHT1QnLCAnSE9URCcsICdFVVBIJywgJ1QxMDAnLCAnU1QnLCAnQk0nXTtcclxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBvYmogPSB7XHJcbiAgICBpdGVtX2lkOiBgJHtpdGVtSWRzW2lkXX1gLFxyXG4gIH07XHJcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL21KcmpQY1oxOFdwYlAyYW5mdVdqL2xpa2VzLycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGxpa2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtaWNvbicpKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbGlrZWQnKTtcclxuICAgICAgYXdhaXQgdXBkYXRlTGlrZXMoaSk7XHJcbiAgICAgIGF3YWl0IGdldExpa2VzKCk7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsaWtlZCcpO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGdldEFycmF5SXRlbXMoKTtcclxuICAgICAgY29uc3QgbGlrZXNQID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWtlcycpKTtcclxuICAgICAgbGlrZXNQW2ldLmlubmVySFRNTCA9IGAke2l0ZW1zW2ldLmxpa2VzfSBMaWtlc2A7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHVwZGF0ZUxpa2VzLCBsaWtlcyB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=