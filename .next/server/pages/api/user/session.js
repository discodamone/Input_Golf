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
exports.id = "pages/api/user/session";
exports.ids = ["pages/api/user/session"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "connect-mongodb-session":
/*!******************************************!*\
  !*** external "connect-mongodb-session" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("connect-mongodb-session");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ "next-session/lib/compat":
/*!******************************************!*\
  !*** external "next-session/lib/compat" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("next-session/lib/compat");;

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-session/lib/compat */ \"next-session/lib/compat\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__]);\n([next_session__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar MongoDBStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(session);\nvar store = new MongoDBStore({\n    // No idea why the environment variables are not being used by the mongo container\n    //uri: \"mongodb://\" + process.env.MONGO_INITDB_ROOT_USERNAME + \":\" + process.env.MONGO_INITDB_ROOT_PASSWORD + \"@mongo:27017/?authSource=admin\",\n    uri: \"mongodb://mongo:27017\",\n    collection: \"sessions\"\n});\nstore.on(\"error\", (e)=>{\n    console.log(e);\n});\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    autoCommit: false,\n    cookie: {\n        maxAge: 28800\n    },\n    store: (0,next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__.promisifyStore)(store)\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZ2V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNMO0FBQ3FCO0FBQ3ZELElBQUlJLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUN4QyxJQUFJQyxZQUFZLEdBQUdELG1CQUFPLENBQUMsd0RBQXlCLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO0FBRTlELElBQUlHLEtBQUssR0FBRyxJQUFJRCxZQUFZLENBQUM7SUFDNUIsa0ZBQWtGO0lBQ2xGLCtJQUErSTtJQUMvSUUsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsVUFBVSxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztBQUVGRixLQUFLLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFHO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUdJLE1BQU1HLFVBQVUsR0FBR2Qsd0RBQVcsQ0FBQztJQUFDZSxVQUFVLEVBQUUsS0FBSztJQUFFQyxNQUFNLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLEtBQUs7S0FBQztJQUFFVixLQUFLLEVBQUVKLHVFQUFjLENBQUNJLEtBQUssQ0FBQztDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXQtc2Vzc2lvbi5qcz9mMmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0U2Vzc2lvbiBmcm9tIFwibmV4dC1zZXNzaW9uXCI7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XG5pbXBvcnQge3Byb21pc2lmeVN0b3JlfSBmcm9tIFwibmV4dC1zZXNzaW9uL2xpYi9jb21wYXRcIjtcbnZhciBzZXNzaW9uID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XG52YXIgTW9uZ29EQlN0b3JlID0gcmVxdWlyZSgnY29ubmVjdC1tb25nb2RiLXNlc3Npb24nKShzZXNzaW9uKTtcblxudmFyIHN0b3JlID0gbmV3IE1vbmdvREJTdG9yZSh7XG5cdC8vIE5vIGlkZWEgd2h5IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG5vdCBiZWluZyB1c2VkIGJ5IHRoZSBtb25nbyBjb250YWluZXJcblx0Ly91cmk6IFwibW9uZ29kYjovL1wiICsgcHJvY2Vzcy5lbnYuTU9OR09fSU5JVERCX1JPT1RfVVNFUk5BTUUgKyBcIjpcIiArIHByb2Nlc3MuZW52Lk1PTkdPX0lOSVREQl9ST09UX1BBU1NXT1JEICsgXCJAbW9uZ286MjcwMTcvP2F1dGhTb3VyY2U9YWRtaW5cIixcblx0dXJpOiBcIm1vbmdvZGI6Ly9tb25nbzoyNzAxN1wiLFxuXHRjb2xsZWN0aW9uOiAnc2Vzc2lvbnMnXG59KTtcblxuc3RvcmUub24oJ2Vycm9yJywgKGUpPT57XG5jb25zb2xlLmxvZyhlKTtcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oe2F1dG9Db21taXQ6IGZhbHNlLCBjb29raWU6e21heEFnZTogMjg4MDB9LCBzdG9yZTogcHJvbWlzaWZ5U3RvcmUoc3RvcmUpfSk7XG4iXSwibmFtZXMiOlsibmV4dFNlc3Npb24iLCJ2NCIsInV1aWR2NCIsInByb21pc2lmeVN0b3JlIiwic2Vzc2lvbiIsInJlcXVpcmUiLCJNb25nb0RCU3RvcmUiLCJzdG9yZSIsInVyaSIsImNvbGxlY3Rpb24iLCJvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2Vzc2lvbiIsImF1dG9Db21taXQiLCJjb29raWUiLCJtYXhBZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/get-session.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/session.js":
/*!***********************************!*\
  !*** ./pages/api/user/session.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar http = __webpack_require__(/*! axios */ \"axios\");\nasync function handler(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    res.status(200).json(session);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ3ZELElBQUlDLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRVosZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFDOUM7SUFDQyxJQUFJQyxPQUFPLEdBQUcsTUFBTU4sK0RBQVUsQ0FBQ0ksR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDeENBLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9zZXNzaW9uLmpzPzdkZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldC1zZXNzaW9uLmpzXCI7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIFxue1xuXHR2YXIgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiaHR0cCIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/session.js"));
module.exports = __webpack_exports__;

})();