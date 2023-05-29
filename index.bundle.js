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
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.serieData li strong {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n.addCommentBttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 90vh;\r\n  }\r\n\r\n  .box1 {\r\n    height: 35%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .box1 img {\r\n    height: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData li {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .box3 h3 {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .viewComments {\r\n    max-height: 100px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .box4 h4 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 1rem;\r\n    padding: 0.6rem 1.7em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    top: 66%;\r\n    left: 25%;\r\n  }\r\n}\r\n", ""]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto+Slab\", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image:\r\n    linear-gradient(\r\n      to bottom,\r\n      rgba(121, 121, 121, 0.716),\r\n      rgba(37, 37, 37, 0.97)\r\n    );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.navbar li:hover {\r\n  box-shadow: 0 3px 0 0 #f1c40f;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card:hover {\r\n  outline: 2px solid #f1c40f;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.popUp-bttn:hover {\r\n  background-color: #f1c40f;\r\n  color: black;\r\n  font-weight: 550;\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n", ""]);
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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
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
          <img src="${elem.image.medium}" alt="Picture of ${elem.name} class="serieImg">
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
    card.innerHTML = `<img class="card-img" src='${ele.image.medium}' alt="Picture of ${ele.name}">
        <div class='flex card-heading'><h4 class="card-title">${ele.name}</h4>
        <img class="card-icon" src='${_img_star_png__WEBPACK_IMPORTED_MODULE_0__}' alt="Star icon"></div>
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