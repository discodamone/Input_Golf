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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./lib/get-session.js":
/*!****************************!*\
  !*** ./lib/get-session.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__]);\nnext_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    autoCommit: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZ2V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDaEMsTUFBTUMsVUFBVSxHQUFHRCx3REFBVyxDQUFDO0lBQUNFLFVBQVUsRUFBRSxLQUFLO0NBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dldC1zZXNzaW9uLmpzP2YyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRTZXNzaW9uIGZyb20gXCJuZXh0LXNlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oe2F1dG9Db21taXQ6IGZhbHNlfSk7XG4iXSwibmFtZXMiOlsibmV4dFNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYXV0b0NvbW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/get-session.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__]);\n([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nasync function handler(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    // state parameter is not needed, there is no downside to allowing login csrf for our application\n    res.redirect(302, \"https://github.com/login/oauth/authorize?client_id=\" + process.env.CLIENT_ID + \"&redirect_uri=\" + process.env.BASE_URL + \"/api/login_callback&scope=read:user%20user:email\");\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ2xCO0FBQ3BDRyxvREFBd0IsRUFBRTtBQUlYLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQzlDO0lBQ0MsSUFBSUMsT0FBTyxHQUFHLE1BQU1SLCtEQUFVLENBQUNNLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3hDLGlHQUFpRztJQUNqR0EsR0FBRyxDQUFDRSxRQUFRLENBQUMsR0FBRyxFQUFFLHFEQUFxRCxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsUUFBUSxHQUFHLGtEQUFrRCxDQUFDLENBQUM7QUFFak0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwiLi4vLi4vbGliL2dldC1zZXNzaW9uLmpzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpIFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykgXG57XG5cdHZhciBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XG5cdC8vIHN0YXRlIHBhcmFtZXRlciBpcyBub3QgbmVlZGVkLCB0aGVyZSBpcyBubyBkb3duc2lkZSB0byBhbGxvd2luZyBsb2dpbiBjc3JmIGZvciBvdXIgYXBwbGljYXRpb25cblx0cmVzLnJlZGlyZWN0KDMwMiwgJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPScgKyBwcm9jZXNzLmVudi5DTElFTlRfSUQgKyBcIiZyZWRpcmVjdF91cmk9XCIgKyBwcm9jZXNzLmVudi5CQVNFX1VSTCArIFwiL2FwaS9sb2dpbl9jYWxsYmFjayZzY29wZT1yZWFkOnVzZXIlMjB1c2VyOmVtYWlsXCIpO1xuXG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInY0IiwidXVpZHY0IiwicmVxdWlyZSIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwicmVkaXJlY3QiLCJwcm9jZXNzIiwiZW52IiwiQ0xJRU5UX0lEIiwiQkFTRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();