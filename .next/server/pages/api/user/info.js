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

/***/ "(api)/./pages/api/user/info.js":
/*!********************************!*\
  !*** ./pages/api/user/info.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar http = __webpack_require__(/*! axios */ \"axios\");\nasync function handler(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    var userInfoResponse = await http.get(\"https://api.github.com/user\", {\n        headers: {\n            Authorization: \"Bearer \" + session.oauth_token\n        }\n    });\n    var emailResponse = await http.get(\"https://api.github.com/user/emails\", {\n        headers: {\n            Authorization: \"Bearer \" + session.oauth_token\n        }\n    });\n    var primaryEmail;\n    for(var i = 0; i < emailResponse.data.length; i++){\n        if (emailResponse.data[i].primary == true) {\n            primaryEmail = emailResponse.data[i].email;\n            break;\n        }\n    }\n    res.status(200).json({\n        userId: userInfoResponse.data.id,\n        username: userInfoResponse.data.login,\n        email: primaryEmail\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ3ZELElBQUlDLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRVosZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFDOUM7SUFDQyxJQUFJQyxPQUFPLEdBQUcsTUFBTU4sK0RBQVUsQ0FBQ0ksR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDeEMsSUFBSUUsZ0JBQWdCLEdBQUcsTUFBTU4sSUFBSSxDQUFDTyxHQUFHLENBQUMsNkJBQTZCLEVBQUM7UUFBQ0MsT0FBTyxFQUFDO1lBQUNDLGFBQWEsRUFBRSxTQUFTLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBVztTQUFDO0tBQUMsQ0FBQztJQUMvSCxJQUFJQyxhQUFhLEdBQUcsTUFBTVgsSUFBSSxDQUFDTyxHQUFHLENBQUMsb0NBQW9DLEVBQUM7UUFBQ0MsT0FBTyxFQUFDO1lBQUNDLGFBQWEsRUFBRSxTQUFTLEdBQUdKLE9BQU8sQ0FBQ0ssV0FBVztTQUFDO0tBQUMsQ0FBQztJQUNuSSxJQUFJRSxZQUFZO0lBQ2hCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixhQUFhLENBQUNHLElBQUksQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsQ0FDbEQ7UUFDQyxJQUFJRixhQUFhLENBQUNHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLE9BQU8sSUFBSSxJQUFJLEVBQ3pDO1lBQ0NKLFlBQVksR0FBR0QsYUFBYSxDQUFDRyxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUM7WUFDM0MsTUFBTTtRQUNQLENBQUM7SUFDRixDQUFDO0lBQ0RiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsTUFBTSxFQUFFZCxnQkFBZ0IsQ0FBQ1EsSUFBSSxDQUFDTyxFQUFFO1FBQUVDLFFBQVEsRUFBRWhCLGdCQUFnQixDQUFDUSxJQUFJLENBQUNTLEtBQUs7UUFBRU4sS0FBSyxFQUFFTCxZQUFZO0tBQUMsQ0FBQyxDQUFDO0FBQ3RILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9pbmZvLmpzPzRlY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldC1zZXNzaW9uLmpzXCI7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIFxue1xuXHR2YXIgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXHR2YXIgdXNlckluZm9SZXNwb25zZSA9IGF3YWl0IGh0dHAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXInLHtoZWFkZXJzOntBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBzZXNzaW9uLm9hdXRoX3Rva2VufX0pO1xuXHR2YXIgZW1haWxSZXNwb25zZSA9IGF3YWl0IGh0dHAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvZW1haWxzJyx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi5vYXV0aF90b2tlbn19KTtcblx0dmFyIHByaW1hcnlFbWFpbDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbWFpbFJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRpZiAoZW1haWxSZXNwb25zZS5kYXRhW2ldLnByaW1hcnkgPT0gdHJ1ZSlcblx0XHR7XG5cdFx0XHRwcmltYXJ5RW1haWwgPSBlbWFpbFJlc3BvbnNlLmRhdGFbaV0uZW1haWw7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0cmVzLnN0YXR1cygyMDApLmpzb24oe3VzZXJJZDogdXNlckluZm9SZXNwb25zZS5kYXRhLmlkLCB1c2VybmFtZTogdXNlckluZm9SZXNwb25zZS5kYXRhLmxvZ2luLCBlbWFpbDogcHJpbWFyeUVtYWlsfSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImh0dHAiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ1c2VySW5mb1Jlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvYXV0aF90b2tlbiIsImVtYWlsUmVzcG9uc2UiLCJwcmltYXJ5RW1haWwiLCJpIiwiZGF0YSIsImxlbmd0aCIsInByaW1hcnkiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJ1c2VySWQiLCJpZCIsInVzZXJuYW1lIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/info.js\n");

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