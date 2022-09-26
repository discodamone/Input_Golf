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
exports.id = "pages/api/login_callback";
exports.ids = ["pages/api/login_callback"];
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

/***/ "(api)/./lib/get-session.js":
/*!****************************!*\
  !*** ./lib/get-session.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\n/* harmony import */ var next_session_lib_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-session/lib/compat */ \"next-session/lib/compat\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_1__]);\n([next_session__WEBPACK_IMPORTED_MODULE_0__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar MongoDBStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(session);\nvar store = new MongoDBStore({\n    // No idea why the environment variables are not being used by the mongo container\n    //uri: \"mongodb://\" + process.env.MONGO_INITDB_ROOT_USERNAME + \":\" + process.env.MONGO_INITDB_ROOT_PASSWORD + \"@mongo:27017/?authSource=admin\",\n    uri: \"mongodb://mongo:27017\",\n    collection: \"sessions\"\n});\nstore.on(\"error\", (e)=>{\n    console.log(e);\n});\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    autoCommit: false,\n    store: (0,next_session_lib_compat__WEBPACK_IMPORTED_MODULE_1__.promisifyStore)(store)\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZ2V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ2dCO0FBQ3ZELElBQUlFLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUN4QyxJQUFJQyxZQUFZLEdBQUdELG1CQUFPLENBQUMsd0RBQXlCLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO0FBRTlELElBQUlHLEtBQUssR0FBRyxJQUFJRCxZQUFZLENBQUM7SUFDNUIsa0ZBQWtGO0lBQ2xGLCtJQUErSTtJQUMvSUUsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsVUFBVSxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztBQUVGRixLQUFLLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFHO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUdJLE1BQU1HLFVBQVUsR0FBR1osd0RBQVcsQ0FBQztJQUFDYSxVQUFVLEVBQUUsS0FBSztJQUFFUixLQUFLLEVBQUVKLHVFQUFjLENBQUNJLEtBQUssQ0FBQztDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXQtc2Vzc2lvbi5qcz9mMmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0U2Vzc2lvbiBmcm9tIFwibmV4dC1zZXNzaW9uXCI7XG5pbXBvcnQge3Byb21pc2lmeVN0b3JlfSBmcm9tIFwibmV4dC1zZXNzaW9uL2xpYi9jb21wYXRcIjtcbnZhciBzZXNzaW9uID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XG52YXIgTW9uZ29EQlN0b3JlID0gcmVxdWlyZSgnY29ubmVjdC1tb25nb2RiLXNlc3Npb24nKShzZXNzaW9uKTtcblxudmFyIHN0b3JlID0gbmV3IE1vbmdvREJTdG9yZSh7XG5cdC8vIE5vIGlkZWEgd2h5IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG5vdCBiZWluZyB1c2VkIGJ5IHRoZSBtb25nbyBjb250YWluZXJcblx0Ly91cmk6IFwibW9uZ29kYjovL1wiICsgcHJvY2Vzcy5lbnYuTU9OR09fSU5JVERCX1JPT1RfVVNFUk5BTUUgKyBcIjpcIiArIHByb2Nlc3MuZW52Lk1PTkdPX0lOSVREQl9ST09UX1BBU1NXT1JEICsgXCJAbW9uZ286MjcwMTcvP2F1dGhTb3VyY2U9YWRtaW5cIixcblx0dXJpOiBcIm1vbmdvZGI6Ly9tb25nbzoyNzAxN1wiLFxuXHRjb2xsZWN0aW9uOiAnc2Vzc2lvbnMnXG59KTtcblxuc3RvcmUub24oJ2Vycm9yJywgKGUpPT57XG5jb25zb2xlLmxvZyhlKTtcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oe2F1dG9Db21taXQ6IGZhbHNlLCBzdG9yZTogcHJvbWlzaWZ5U3RvcmUoc3RvcmUpfSk7XG4iXSwibmFtZXMiOlsibmV4dFNlc3Npb24iLCJwcm9taXNpZnlTdG9yZSIsInNlc3Npb24iLCJyZXF1aXJlIiwiTW9uZ29EQlN0b3JlIiwic3RvcmUiLCJ1cmkiLCJjb2xsZWN0aW9uIiwib24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldFNlc3Npb24iLCJhdXRvQ29tbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/get-session.js\n");

/***/ }),

/***/ "(api)/./pages/api/login_callback.js":
/*!*************************************!*\
  !*** ./pages/api/login_callback.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar http = __webpack_require__(/*! axios */ \"axios\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    var response = await http.post(\"https://github.com/login/oauth/access_token\", {\n        client_id: process.env.CLIENT_ID,\n        client_secret: process.env.CLIENT_SECRET,\n        code: req.query.code,\n        redirect_uri: process.env.BASE_URL + \"/api/login_callback\"\n    });\n    session.oauth_token = new URLSearchParams(response.data).get(\"access_token\");\n    await session.commit();\n    res.redirect(302, process.env.BASE_URL);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5fY2FsbGJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUN5QjtBQUVwRCw2QkFBZSwwQ0FBZUUsR0FBRyxFQUFFQyxHQUFHLEVBQ3RDO0lBQ0MsSUFBSUMsT0FBTyxHQUFHLE1BQU1ILCtEQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3hDLElBQUlFLFFBQVEsR0FBRyxNQUFNTixJQUFJLENBQUNPLElBQUksQ0FBQyw2Q0FBNkMsRUFBRTtRQUFDQyxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1FBQUVDLGFBQWEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7UUFBRUMsSUFBSSxFQUFFWCxHQUFHLENBQUNZLEtBQUssQ0FBQ0QsSUFBSTtRQUFFRSxZQUFZLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxRQUFRLEdBQUcscUJBQXFCO0tBQUMsQ0FBQztJQUM3T1osT0FBTyxDQUFDYSxXQUFXLEdBQUksSUFBSUMsZUFBZSxDQUFDYixRQUFRLENBQUNjLElBQUksQ0FBQyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUU7SUFDL0UsTUFBTWhCLE9BQU8sQ0FBQ2lCLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCbEIsR0FBRyxDQUFDbUIsUUFBUSxDQUFDLEdBQUcsRUFBRWQsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDO0FBRXpDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW5fY2FsbGJhY2suanM/ZjBlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaHR0cCA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gXCIuLi8uLi9saWIvZ2V0LXNlc3Npb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxLCByZXMpIFxue1xuXHR2YXIgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXHR2YXIgcmVzcG9uc2UgPSBhd2FpdCBodHRwLnBvc3QoJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hY2Nlc3NfdG9rZW4nLCB7Y2xpZW50X2lkOiBwcm9jZXNzLmVudi5DTElFTlRfSUQsIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVQsIGNvZGU6IHJlcS5xdWVyeS5jb2RlLCByZWRpcmVjdF91cmk6IHByb2Nlc3MuZW52LkJBU0VfVVJMICsgXCIvYXBpL2xvZ2luX2NhbGxiYWNrXCJ9KTtcblx0c2Vzc2lvbi5vYXV0aF90b2tlbiA9IChuZXcgVVJMU2VhcmNoUGFyYW1zKHJlc3BvbnNlLmRhdGEpLmdldCgnYWNjZXNzX3Rva2VuJykpO1xuXHRhd2FpdCBzZXNzaW9uLmNvbW1pdCgpO1xuXHRyZXMucmVkaXJlY3QoMzAyLCBwcm9jZXNzLmVudi5CQVNFX1VSTCk7XG5cdFxufVxuIl0sIm5hbWVzIjpbImh0dHAiLCJyZXF1aXJlIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJyZXNwb25zZSIsInBvc3QiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIkNMSUVOVF9TRUNSRVQiLCJjb2RlIiwicXVlcnkiLCJyZWRpcmVjdF91cmkiLCJCQVNFX1VSTCIsIm9hdXRoX3Rva2VuIiwiVVJMU2VhcmNoUGFyYW1zIiwiZGF0YSIsImdldCIsImNvbW1pdCIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login_callback.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login_callback.js"));
module.exports = __webpack_exports__;

})();