"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/info";
exports.ids = ["pages/api/user/info"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ "(api)/./lib/get-session.js":
/*!****************************!*\
  !*** ./lib/get-session.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__]);\nnext_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    autoCommit: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZ2V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDaEMsTUFBTUMsVUFBVSxHQUFHRCx3REFBVyxDQUFDO0lBQUNFLFVBQVUsRUFBRSxLQUFLO0NBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dldC1zZXNzaW9uLmpzP2YyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRTZXNzaW9uIGZyb20gXCJuZXh0LXNlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oe2F1dG9Db21taXQ6IGZhbHNlfSk7XG4iXSwibmFtZXMiOlsibmV4dFNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYXV0b0NvbW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/get-session.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/info.js":
/*!********************************!*\
  !*** ./pages/api/user/info.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar http = __webpack_require__(/*! axios */ \"axios\");\nasync function handler(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    console.log(session);\n    //var response = await http.get('https://api.github.com/user',{headers:{Authorization: 'Bearer ' + session.oauth_token}});\n    res.status(200).json(session);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ3ZELElBQUlDLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRVosZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFDOUM7SUFDQyxJQUFJQyxPQUFPLEdBQUcsTUFBTU4sK0RBQVUsQ0FBQ0ksR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDeENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMsQ0FBQztJQUNyQiwwSEFBMEg7SUFDMUhELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9pbmZvLmpzPzRlY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldC1zZXNzaW9uLmpzXCI7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIFxue1xuXHR2YXIgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXHRjb25zb2xlLmxvZyhzZXNzaW9uKTtcblx0Ly92YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyJyx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi5vYXV0aF90b2tlbn19KTtcblx0cmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImh0dHAiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/info.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/info.js"));
module.exports = __webpack_exports__;

})();