/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background {\r\n  position: fixed;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -1;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\nbody {\r\n  margin: 0;\r\n  color: white;\r\n  display: grid;\r\n  grid-template-rows: 15vh;\r\n  grid-template-columns: 1fr;\r\n  grid-auto-rows: 85vh;\r\n}\r\nnav {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto auto auto 1fr;\r\n  justify-content: center;\r\n  font-size: larger;\r\n  padding: 3px;\r\n  align-content: center;\r\n  gap: 12px;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\nbutton {\r\n  border: none;\r\n  border-radius: 12px;\r\n  background-color: rgba(107, 131, 147, 0.9);\r\n  color: white;\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n}\r\nnav > button {\r\n  font-size: large;\r\n}\r\nbutton:hover {\r\n  transform: scale(1.2);\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.5s;\r\n  -moz-transition: 0.5s;\r\n  -ms-transition: 0.5s;\r\n  -o-transition: 0.5s;\r\n}\r\n.projectsbtn {\r\n  width: fit-content;\r\n  margin-left: 3vw;\r\n}\r\n.displayProjects {\r\n  display: grid;\r\n  position: fixed;\r\n  height: 85vh;\r\n}\r\n.Projects {\r\n  display: grid;\r\n  padding: 12%;\r\n}\r\n.Projects > div {\r\n  padding: 12%;\r\n  grid-template-columns: auto auto;\r\n  gap: 12%;\r\n}\r\n.Projects > div > button.deleteProject {\r\n  background-color: rgba(164, 195, 166, 0.5);\r\n}\r\n.Projects > div > button {\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.Projects > div:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1.2);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.displayProjects > div {\r\n  width: fit-content;\r\n}\r\n.displayProjects.Active {\r\n  background-color: rgba(225, 225, 225, 0.25);\r\n  display: grid;\r\n  position: fixed;\r\n  height: 85vh;\r\n  width: 12vw;\r\n  grid-template-rows: auto auto 1fr;\r\n  justify-content: center;\r\n}\r\n.addProject {\r\n  position: relative;\r\n\r\n  margin-top: 1vh;\r\n  padding: 5px;\r\n}\r\n.addProject:before {\r\n  content: \"\\002B \";\r\n  font-size: larger;\r\n}\r\n.inputContainer {\r\n  background: #6fa176;\r\n  width: 60vw;\r\n  height: 80vh;\r\n  color: white;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 20%;\r\n  border-radius: 12px;\r\n  z-index: 2;\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n  display: grid;\r\n  grid-template-rows: auto auto;\r\n}\r\n.inputContainer > button {\r\n  height: fit-content;\r\n  padding: 1%;\r\n}\r\nform {\r\n  display: grid;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  align-content: center;\r\n  gap: 3%;\r\n}\r\n\r\nbody.blur :not(.inputContainer, .inputContainer *) {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\nlabel {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #152c20;\r\n}\r\ninput {\r\n  border: none;\r\n  background: rgba(225, 225, 225, 0.25);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  margin-top: 12%;\r\n  border-radius: 12px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n  border: none;\r\n  background: rgba(225, 225, 225, 0.25);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  margin-top: 12%;\r\n  border-radius: 12px;\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n}\r\nspan {\r\n  position: relative;\r\n  color: #152c20;\r\n  padding-top: 1%;\r\n}\r\ndiv {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n.tasks > div {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,mDAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;AACpC;AACA;EACE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,0BAA0B;EAC1B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,6CAA6C;EAC7C,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,SAAS;EACT,2CAA2C;AAC7C;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,0CAA0C;EAC1C,YAAY;EACZ,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,QAAQ;AACV;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,0BAA0B;EAC1B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,2CAA2C;EAC3C,aAAa;EACb,eAAe;EACf,YAAY;EACZ,WAAW;EACX,iCAAiC;EACjC,uBAAuB;AACzB;AACA;EACE,kBAAkB;;EAElB,eAAe;EACf,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,UAAU;EACV,0BAA0B;EAC1B,kCAAkC;EAClC,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,OAAO;AACT;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":[".background {\r\n  position: fixed;\r\n  background: url(\"./images/background.jpg\");\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -1;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\nbody {\r\n  margin: 0;\r\n  color: white;\r\n  display: grid;\r\n  grid-template-rows: 15vh;\r\n  grid-template-columns: 1fr;\r\n  grid-auto-rows: 85vh;\r\n}\r\nnav {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto auto auto 1fr;\r\n  justify-content: center;\r\n  font-size: larger;\r\n  padding: 3px;\r\n  align-content: center;\r\n  gap: 12px;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\nbutton {\r\n  border: none;\r\n  border-radius: 12px;\r\n  background-color: rgba(107, 131, 147, 0.9);\r\n  color: white;\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n}\r\nnav > button {\r\n  font-size: large;\r\n}\r\nbutton:hover {\r\n  transform: scale(1.2);\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.5s;\r\n  -moz-transition: 0.5s;\r\n  -ms-transition: 0.5s;\r\n  -o-transition: 0.5s;\r\n}\r\n.projectsbtn {\r\n  width: fit-content;\r\n  margin-left: 3vw;\r\n}\r\n.displayProjects {\r\n  display: grid;\r\n  position: fixed;\r\n  height: 85vh;\r\n}\r\n.Projects {\r\n  display: grid;\r\n  padding: 12%;\r\n}\r\n.Projects > div {\r\n  padding: 12%;\r\n  grid-template-columns: auto auto;\r\n  gap: 12%;\r\n}\r\n.Projects > div > button.deleteProject {\r\n  background-color: rgba(164, 195, 166, 0.5);\r\n}\r\n.Projects > div > button {\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.Projects > div:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1.2);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.displayProjects > div {\r\n  width: fit-content;\r\n}\r\n.displayProjects.Active {\r\n  background-color: rgba(225, 225, 225, 0.25);\r\n  display: grid;\r\n  position: fixed;\r\n  height: 85vh;\r\n  width: 12vw;\r\n  grid-template-rows: auto auto 1fr;\r\n  justify-content: center;\r\n}\r\n.addProject {\r\n  position: relative;\r\n\r\n  margin-top: 1vh;\r\n  padding: 5px;\r\n}\r\n.addProject:before {\r\n  content: \"\\002B \";\r\n  font-size: larger;\r\n}\r\n.inputContainer {\r\n  background: #6fa176;\r\n  width: 60vw;\r\n  height: 80vh;\r\n  color: white;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 20%;\r\n  border-radius: 12px;\r\n  z-index: 2;\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n  display: grid;\r\n  grid-template-rows: auto auto;\r\n}\r\n.inputContainer > button {\r\n  height: fit-content;\r\n  padding: 1%;\r\n}\r\nform {\r\n  display: grid;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  align-content: center;\r\n  gap: 3%;\r\n}\r\n\r\nbody.blur :not(.inputContainer, .inputContainer *) {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\nlabel {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #152c20;\r\n}\r\ninput {\r\n  border: none;\r\n  background: rgba(225, 225, 225, 0.25);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  margin-top: 12%;\r\n  border-radius: 12px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n  border: none;\r\n  background: rgba(225, 225, 225, 0.25);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  margin-top: 12%;\r\n  border-radius: 12px;\r\n  -webkit-border-radius: 12px;\r\n  -moz-border-radius: 12px;\r\n  -ms-border-radius: 12px;\r\n  -o-border-radius: 12px;\r\n}\r\nspan {\r\n  position: relative;\r\n  color: #152c20;\r\n  padding-top: 1%;\r\n}\r\ndiv {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n.tasks > div {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/ProjectsLogic.js":
/*!******************************!*\
  !*** ./src/ProjectsLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addproject": () => (/* binding */ addproject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");

const projects = [];
const loadProjects = () => {
  for (let i = 0; i != localStorage.length; i++) {
    projects.push(JSON.parse(localStorage[localStorage.key(i)]));
  }
};
function removeProject(ProjectName) {
  localStorage.removeItem(ProjectName);
  projects.filter((item) => item.title != ProjectName);
}
function addproject() {
  const project = {
    title: title.value,
    description: description.value,
    dueDate: `${inputdueDate.value}`,
    priority: priority.value,
  };
  localStorage.setItem(title.value, JSON.stringify(project));
  projects.push(project);
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_0__.showAddedProject)();
}
console.log(projects);



/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "showAddedProject": () => (/* binding */ showAddedProject),
/* harmony export */   "displayCurrentProject": () => (/* binding */ displayCurrentProject)
/* harmony export */ });
/* harmony import */ var _ProjectsLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsLogic */ "./src/ProjectsLogic.js");

const displayProjects = () => {
  const article = document.querySelector("article");
  if ([article].length == 1) {
    const displayProjects = document.querySelector(".displayProjects");
    const projectsdisplay = document.createElement("div");
    projectsdisplay.classList.add("Projects");
    displayProjects.appendChild(projectsdisplay);
    for (let i = 0; i != localStorage.length; i++) {
      const project = document.createElement("div");
      const projectBtn = document.createElement("button");
      project.classList.add(localStorage.key(i));
      projectBtn.innerText = localStorage.key(i);
      projectBtn.id = localStorage.key(i);
      projectsdisplay.appendChild(project);

      project.appendChild(projectBtn);
      project.innerHTML += `<button class="deleteProject">⌫</button>`;
    }
  }
};
const showAddedProject = () => {
  const project = document.createElement("div");
  const projectBtn = document.createElement("button");
  project.classList.add(title.value);
  projectBtn.innerText = title.value;
  projectBtn.id = title.value;
  const projectsdisplay = document.querySelector(".Projects");
  projectsdisplay.appendChild(project);
  project.appendChild(projectBtn);
  project.innerHTML += `<button class="deleteProject">⌫</button>`;
};
const displayCurrentProject = () => {
  const article = document.querySelector("article");
  const projectDetails = document.querySelector(".projectDetails");
  if ([...document.querySelectorAll(".projectDetails>*")].length < 3) {
    const showProjects = document.querySelectorAll(
      ".Projects>div>button:not(.deleteProject)"
    );
    showProjects.forEach((item) =>
      item.addEventListener("click", function (event) {
        const projectName = event.currentTarget.id;

        const content = document.querySelector(".content");

        content.innerHTML = `
                <h1>${projectName}</h1>
                <div class="tasks">
                <div><input type="text" id="task"><button id="deleteTask">Delete </button> <button id="addTask">add</button><div>
                </div> 
                <div id="dueDate">dueDate:${_ProjectsLogic__WEBPACK_IMPORTED_MODULE_0__.projects.filter((item) => item.title == projectName)
                  .map((itemm) => itemm["dueDate"])}</div>
                  `;
      })
    );
  }
};



/***/ }),

/***/ "./src/inputPannel.js":
/*!****************************!*\
  !*** ./src/inputPannel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageload)
/* harmony export */ });
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");
/* harmony import */ var _ProjectsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsLogic */ "./src/ProjectsLogic.js");



function pageload() {
  const body = document.querySelector("body");
  const background = document.querySelector(".background");
  const inputContainer = document.createElement("div");

  inputContainer.classList.add("inputContainer");
  body.appendChild(inputContainer);
  body.classList.add("blur");
  background.style = "transform:scale(1.2)";
  inputContainer.innerHTML = `
  <form>
  <div>
  <label for="title">Title</label>
  <input type="text" id="title" name="title" required>
  <span></span>
  </div>
  <div>
  <label for="description">description</label>
  <textarea id="description" name="description"></textarea>
  
  </div>
<div>
  <label for="inputdueDate">due Date</label>
  <input type="date" id="inputdueDate" name="dueDate">
  
  </div>
<div>
  <label for="priority">Priority/10</label>
  <input type="number"id="priority" name="priority" min="1" max="10">
  <span></span>
  </div>
  </form>
  <button id="submit">Submit</button>`;
  const formValidation = (function () {
    const title = document.querySelector("#title");
    const priority = document.querySelector("#priority");
    const titleMessage = document.querySelector("#title+span");
    const priorityMessage = document.querySelector("#priority+span");
    const description = document.querySelector("#description");
    const inputdueDate = document.querySelector("#inputdueDate");
    title.addEventListener("change", function (event) {
      if (title.validity.valueMissing) {
        titleMessage.textContent = "please, enter a project Title";
        event.preventDefault();
      } else {
        titleMessage.textContent = "";
      }
    });

    priority.addEventListener("change", function (event) {
      if (priority.validity.rangeOverflow) {
        priorityMessage.textContent = "priority must be 10 or less";
        event.preventDefault();
      } else if (priority.validity.rangeUnderflow) {
        priorityMessage.textContent = "priority must be 1 or more";
        event.preventDefault();
      } else {
        priorityMessage.textContent = "";
      }
    });

    document
      .querySelector("#submit")
      .addEventListener("click", function (Event) {
        if (!title.validity.valid || !priority.validity.valid) {
          Event.preventDefault();
        } else {
          (0,_ProjectsLogic__WEBPACK_IMPORTED_MODULE_1__.addproject)();
          const inputContainer = document.querySelector(".inputContainer");
          const body = document.querySelector("body");
          inputContainer.remove();
          body.classList.remove("blur");
        }
      });
  })();
}


/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f94137ac3872cd05afd.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "del": () => (/* binding */ del)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _inputPannel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputPannel.js */ "./src/inputPannel.js");
/* harmony import */ var _displayProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProjects.js */ "./src/displayProjects.js");
/* harmony import */ var _ProjectsLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsLogic.js */ "./src/ProjectsLogic.js");





(0,_ProjectsLogic_js__WEBPACK_IMPORTED_MODULE_3__.loadProjects)();
const doomLoad = (function () {
  const body = document.querySelector("body");
  body.innerHTML = `
<div class="background"></div>
<nav>
<button class="projectsbtn">projects</button>
<button class="today">Today</button>
<button class="home">home</button>
<button class="tomorrow">tomorrow</button>
<h1 class="todo" style="margin:0;justify-self:end;padding-right:12px">TO-DO</h1>
</nav>
<article>
<div class="displayProjects"></div>
<div class="projectDetails">
<h1></h1>
<div class="content"></div>
</div>
</article>`;
  function toggleDisplay() {
    const projectsDisplayBar = document.querySelector(".displayProjects");
    projectsDisplayBar.classList.toggle("Active");
    if (!document.querySelector(".addProject")) {
      (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
      const add = document.createElement("button");
      add.classList.add("addProject");
      add.textContent = " Add Project";
      projectsDisplayBar.appendChild(add);
    } else if (
      document.querySelector(".displayProjects.Active") &&
      document.querySelector(".displayProjects>.addProject")
    ) {
    } else if (!document.querySelector(".displayProjects.Active")) {
      document.querySelector(".Projects").remove();
      document.querySelector(".displayProjects>button").remove();
    }
  }
  return { toggleDisplay };
})();

const nav = (function () {
  document.querySelector(".projectsbtn").addEventListener("click", function () {
    doomLoad.toggleDisplay();

    if (document.querySelector(".displayProjects.Active")) {
      input();
    }
  }),
    document.querySelector(".today").addEventListener("click", function () {}),
    document
      .querySelector(".tomorrow")
      .addEventListener("click", function () {}),
    document.querySelector(".home").addEventListener("click", function () {});
})();

const input = function () {
  document.querySelector(".addProject").addEventListener("click", function () {
    (0,_inputPannel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};
const del = () => {
  document.querySelectorAll(".deleteProject").forEach((item) =>
    item.addEventListener("click", function me(Event) {
      const hide = String(Event.currentTarget.parentElement.classList);
      console.log(hide);
      const itemm = document.querySelector(`[class='${hide}']`);
      if (itemm) {
        itemm.remove();
      }

      (0,_ProjectsLogic_js__WEBPACK_IMPORTED_MODULE_3__.removeProject)(hide);
    })
  );
};
const observer = new MutationObserver((list) => {
  del();
  (0,_displayProjects_js__WEBPACK_IMPORTED_MODULE_2__.displayCurrentProject)();
});
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdHNMb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5wdXRQYW5uZWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5iYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IDg1dmg7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvIGF1dG8gMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDEzMSwgMTQ3LCAwLjkpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5uYXYgPiBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcbi5wcm9qZWN0c2J0biB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcclxcbn1cXHJcXG4uZGlzcGxheVByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxufVxcclxcbi5Qcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGFkZGluZzogMTIlO1xcclxcbn1cXHJcXG4uUHJvamVjdHMgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMTIlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDEyJTtcXHJcXG59XFxyXFxuLlByb2plY3RzID4gZGl2ID4gYnV0dG9uLmRlbGV0ZVByb2plY3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDE5NSwgMTY2LCAwLjUpO1xcclxcbn1cXHJcXG4uUHJvamVjdHMgPiBkaXYgPiBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG59XFxyXFxuLlByb2plY3RzID4gZGl2OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheVByb2plY3RzID4gZGl2IHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuLmRpc3BsYXlQcm9qZWN0cy5BY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjI1KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDg1dmg7XFxyXFxuICB3aWR0aDogMTJ2dztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDAwMkIgXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG4uaW5wdXRDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzZmYTE3NjtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW8tYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG59XFxyXFxuLmlucHV0Q29udGFpbmVyID4gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LmJsdXIgOm5vdCguaW5wdXRDb250YWluZXIsIC5pbnB1dENvbnRhaW5lciAqKSB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6ICMxNTJjMjA7XFxyXFxufVxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4yNSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luLXRvcDogMTIlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjI1KTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxMiU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5zcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGNvbG9yOiAjMTUyYzIwO1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbn1cXHJcXG5kaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2tzID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1EQUEwQztFQUMxQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxRQUFRO0FBQ1Y7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiA4NXZoO1xcclxcbn1cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0byBhdXRvIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA3LCAxMzEsIDE0NywgMC45KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW8tYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxubmF2ID4gYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAtby10cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4ucHJvamVjdHNidG4ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDN2dztcXHJcXG59XFxyXFxuLmRpc3BsYXlQcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiA4NXZoO1xcclxcbn1cXHJcXG4uUHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDEyJTtcXHJcXG59XFxyXFxuLlByb2plY3RzID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDEyJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAxMiU7XFxyXFxufVxcclxcbi5Qcm9qZWN0cyA+IGRpdiA+IGJ1dHRvbi5kZWxldGVQcm9qZWN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY0LCAxOTUsIDE2NiwgMC41KTtcXHJcXG59XFxyXFxuLlByb2plY3RzID4gZGl2ID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxufVxcclxcbi5Qcm9qZWN0cyA+IGRpdjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlQcm9qZWN0cyA+IGRpdiB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcbi5kaXNwbGF5UHJvamVjdHMuQWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4yNSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFkZFByb2plY3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogMXZoO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwwMDJCIFxcXCI7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2ZmExNzY7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgbGVmdDogMjAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtbXMtYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxufVxcclxcbi5pbnB1dENvbnRhaW5lciA+IGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5ibHVyIDpub3QoLmlucHV0Q29udGFpbmVyLCAuaW5wdXRDb250YWluZXIgKikge1xcclxcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMTUyYzIwO1xcclxcbn1cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuMjUpO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbi10b3A6IDEyJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4yNSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luLXRvcDogMTIlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLW8tYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuc3BhbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogIzE1MmMyMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxJTtcXHJcXG59XFxyXFxuZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrcyA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNob3dBZGRlZFByb2plY3QsIGRpc3BsYXlDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0c1wiO1xyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgIT0gbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2xvY2FsU3RvcmFnZS5rZXkoaSldKSk7XHJcbiAgfVxyXG59O1xyXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KFByb2plY3ROYW1lKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oUHJvamVjdE5hbWUpO1xyXG4gIHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aXRsZSAhPSBQcm9qZWN0TmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkcHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0ID0ge1xyXG4gICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxyXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgZHVlRGF0ZTogYCR7aW5wdXRkdWVEYXRlLnZhbHVlfWAsXHJcbiAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWUsXHJcbiAgfTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aXRsZS52YWx1ZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgc2hvd0FkZGVkUHJvamVjdCgpO1xyXG59XHJcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuZXhwb3J0IHsgYWRkcHJvamVjdCwgcHJvamVjdHMsIGxvYWRQcm9qZWN0cywgcmVtb3ZlUHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL1Byb2plY3RzTG9naWNcIjtcclxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZVwiKTtcclxuICBpZiAoW2FydGljbGVdLmxlbmd0aCA9PSAxKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlQcm9qZWN0c1wiKTtcclxuICAgIGNvbnN0IHByb2plY3RzZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0c2Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcIlByb2plY3RzXCIpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzZGlzcGxheSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSAhPSBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQobG9jYWxTdG9yYWdlLmtleShpKSk7XHJcbiAgICAgIHByb2plY3RCdG4uaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgcHJvamVjdEJ0bi5pZCA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgIHByb2plY3RzZGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuXHJcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcbiAgICAgIHByb2plY3QuaW5uZXJIVE1MICs9IGA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlUHJvamVjdFwiPuKMqzwvYnV0dG9uPmA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5jb25zdCBzaG93QWRkZWRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCh0aXRsZS52YWx1ZSk7XHJcbiAgcHJvamVjdEJ0bi5pbm5lclRleHQgPSB0aXRsZS52YWx1ZTtcclxuICBwcm9qZWN0QnRuLmlkID0gdGl0bGUudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdHNkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0c1wiKTtcclxuICBwcm9qZWN0c2Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcclxuICBwcm9qZWN0LmlubmVySFRNTCArPSBgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVByb2plY3RcIj7ijKs8L2J1dHRvbj5gO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpO1xyXG4gIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0RGV0YWlsc1wiKTtcclxuICBpZiAoWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERldGFpbHM+KlwiKV0ubGVuZ3RoIDwgMykge1xyXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuUHJvamVjdHM+ZGl2PmJ1dHRvbjpub3QoLmRlbGV0ZVByb2plY3QpXCJcclxuICAgICk7XHJcbiAgICBzaG93UHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT5cclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxoMT4ke3Byb2plY3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrXCI+PGJ1dHRvbiBpZD1cImRlbGV0ZVRhc2tcIj5EZWxldGUgPC9idXR0b24+IDxidXR0b24gaWQ9XCJhZGRUYXNrXCI+YWRkPC9idXR0b24+PGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkdWVEYXRlXCI+ZHVlRGF0ZToke3Byb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGl0bGUgPT0gcHJvamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW1tKSA9PiBpdGVtbVtcImR1ZURhdGVcIl0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgc2hvd0FkZGVkUHJvamVjdCwgZGlzcGxheUN1cnJlbnRQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHNcIjtcclxuaW1wb3J0IHsgYWRkcHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9Qcm9qZWN0c0xvZ2ljXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2Vsb2FkKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kXCIpO1xyXG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0Q29udGFpbmVyXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XHJcbiAgYmFja2dyb3VuZC5zdHlsZSA9IFwidHJhbnNmb3JtOnNjYWxlKDEuMilcIjtcclxuICBpbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgPGZvcm0+XHJcbiAgPGRpdj5cclxuICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4gIDxzcGFuPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPmRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbjxkaXY+XHJcbiAgPGxhYmVsIGZvcj1cImlucHV0ZHVlRGF0ZVwiPmR1ZSBEYXRlPC9sYWJlbD5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImlucHV0ZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbjxkaXY+XHJcbiAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHkvMTA8L2xhYmVsPlxyXG4gIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgbWluPVwiMVwiIG1heD1cIjEwXCI+XHJcbiAgPHNwYW4+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8YnV0dG9uIGlkPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+YDtcclxuICBjb25zdCBmb3JtVmFsaWRhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcbiAgICBjb25zdCB0aXRsZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlK3NwYW5cIik7XHJcbiAgICBjb25zdCBwcmlvcml0eU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5K3NwYW5cIik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCBpbnB1dGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0ZHVlRGF0ZVwiKTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aXRsZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICB0aXRsZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcInBsZWFzZSwgZW50ZXIgYSBwcm9qZWN0IFRpdGxlXCI7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXRsZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAocHJpb3JpdHkudmFsaWRpdHkucmFuZ2VPdmVyZmxvdykge1xyXG4gICAgICAgIHByaW9yaXR5TWVzc2FnZS50ZXh0Q29udGVudCA9IFwicHJpb3JpdHkgbXVzdCBiZSAxMCBvciBsZXNzXCI7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChwcmlvcml0eS52YWxpZGl0eS5yYW5nZVVuZGVyZmxvdykge1xyXG4gICAgICAgIHByaW9yaXR5TWVzc2FnZS50ZXh0Q29udGVudCA9IFwicHJpb3JpdHkgbXVzdCBiZSAxIG9yIG1vcmVcIjtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByaW9yaXR5TWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChFdmVudCkge1xyXG4gICAgICAgIGlmICghdGl0bGUudmFsaWRpdHkudmFsaWQgfHwgIXByaW9yaXR5LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICBFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZGRwcm9qZWN0KCk7XHJcbiAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRDb250YWluZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgICBpbnB1dENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9KSgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgaW5wdXRQYW5uZWwgZnJvbSBcIi4vaW5wdXRQYW5uZWwuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHMuanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzLCBwcm9qZWN0cywgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RzTG9naWMuanNcIjtcclxubG9hZFByb2plY3RzKCk7XHJcbmNvbnN0IGRvb21Mb2FkID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgYm9keS5pbm5lckhUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XHJcbjxuYXY+XHJcbjxidXR0b24gY2xhc3M9XCJwcm9qZWN0c2J0blwiPnByb2plY3RzPC9idXR0b24+XHJcbjxidXR0b24gY2xhc3M9XCJ0b2RheVwiPlRvZGF5PC9idXR0b24+XHJcbjxidXR0b24gY2xhc3M9XCJob21lXCI+aG9tZTwvYnV0dG9uPlxyXG48YnV0dG9uIGNsYXNzPVwidG9tb3Jyb3dcIj50b21vcnJvdzwvYnV0dG9uPlxyXG48aDEgY2xhc3M9XCJ0b2RvXCIgc3R5bGU9XCJtYXJnaW46MDtqdXN0aWZ5LXNlbGY6ZW5kO3BhZGRpbmctcmlnaHQ6MTJweFwiPlRPLURPPC9oMT5cclxuPC9uYXY+XHJcbjxhcnRpY2xlPlxyXG48ZGl2IGNsYXNzPVwiZGlzcGxheVByb2plY3RzXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJwcm9qZWN0RGV0YWlsc1wiPlxyXG48aDE+PC9oMT5cclxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj48L2Rpdj5cclxuPC9kaXY+XHJcbjwvYXJ0aWNsZT5gO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0Rpc3BsYXlCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlQcm9qZWN0c1wiKTtcclxuICAgIHByb2plY3RzRGlzcGxheUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiQWN0aXZlXCIpO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIikpIHtcclxuICAgICAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdFwiKTtcclxuICAgICAgYWRkLnRleHRDb250ZW50ID0gXCIgQWRkIFByb2plY3RcIjtcclxuICAgICAgcHJvamVjdHNEaXNwbGF5QmFyLmFwcGVuZENoaWxkKGFkZCk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlQcm9qZWN0cy5BY3RpdmVcIikgJiZcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5UHJvamVjdHM+LmFkZFByb2plY3RcIilcclxuICAgICkge1xyXG4gICAgfSBlbHNlIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5UHJvamVjdHMuQWN0aXZlXCIpKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUHJvamVjdHNcIikucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVByb2plY3RzPmJ1dHRvblwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgdG9nZ2xlRGlzcGxheSB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgbmF2ID0gKGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb29tTG9hZC50b2dnbGVEaXNwbGF5KCk7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVByb2plY3RzLkFjdGl2ZVwiKSkge1xyXG4gICAgICBpbnB1dCgpO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge30pLFxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHt9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5wdXRQYW5uZWwoKTtcclxuICB9KTtcclxufTtcclxuY29uc3QgZGVsID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlUHJvamVjdFwiKS5mb3JFYWNoKChpdGVtKSA9PlxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gbWUoRXZlbnQpIHtcclxuICAgICAgY29uc3QgaGlkZSA9IFN0cmluZyhFdmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0KTtcclxuICAgICAgY29uc29sZS5sb2coaGlkZSk7XHJcbiAgICAgIGNvbnN0IGl0ZW1tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzPScke2hpZGV9J11gKTtcclxuICAgICAgaWYgKGl0ZW1tKSB7XHJcbiAgICAgICAgaXRlbW0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbW92ZVByb2plY3QoaGlkZSk7XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGxpc3QpID0+IHtcclxuICBkZWwoKTtcclxuICBkaXNwbGF5Q3VycmVudFByb2plY3QoKTtcclxufSk7XHJcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG4gIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gIHN1YnRyZWU6IHRydWUsXHJcbn0pO1xyXG5leHBvcnQgeyBkZWwgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9