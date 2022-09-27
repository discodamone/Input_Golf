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

/***/ "(api)/./pages/api/login_callback.js":
/*!*************************************!*\
  !*** ./pages/api/login_callback.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/get-session.js */ \"(api)/./lib/get-session.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar http = __webpack_require__(/*! axios */ \"axios\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    var response = await http.post(\"https://github.com/login/oauth/access_token\", {\n        client_id: process.env.CLIENT_ID,\n        client_secret: process.env.CLIENT_SECRET,\n        code: req.query.code,\n        redirect_uri: process.env.BASE_URL + \"/api/login_callback\"\n    });\n    var userInfoResponse = await http.get(\"https://api.github.com/user\", {\n        headers: {\n            Authorization: \"Bearer \" + new URLSearchParams(response.data).get(\"access_token\")\n        }\n    });\n    session.userInfo = {\n        gh_id: userInfoResponse.data.id,\n        username: userInfoResponse.data.login\n    };\n    session.message = \"Successfully signed in.\";\n    await session.commit();\n    res.redirect(302, process.env.BASE_URL);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5fY2FsbGJhY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUN5QjtBQUVwRCw2QkFBZSwwQ0FBZUUsR0FBRyxFQUFFQyxHQUFHLEVBQ3RDO0lBQ0MsSUFBSUMsT0FBTyxHQUFHLE1BQU1ILCtEQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3hDLElBQUlFLFFBQVEsR0FBRyxNQUFNTixJQUFJLENBQUNPLElBQUksQ0FBQyw2Q0FBNkMsRUFBRTtRQUFDQyxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1FBQUVDLGFBQWEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7UUFBRUMsSUFBSSxFQUFFWCxHQUFHLENBQUNZLEtBQUssQ0FBQ0QsSUFBSTtRQUFFRSxZQUFZLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxRQUFRLEdBQUcscUJBQXFCO0tBQUMsQ0FBQztJQUM3TyxJQUFJQyxnQkFBZ0IsR0FBRyxNQUFNbEIsSUFBSSxDQUFDbUIsR0FBRyxDQUFDLDZCQUE2QixFQUFDO1FBQUNDLE9BQU8sRUFBQztZQUFDQyxhQUFhLEVBQUUsU0FBUyxHQUFJLElBQUlDLGVBQWUsQ0FBQ2hCLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQyxDQUFDSixHQUFHLENBQUMsY0FBYyxDQUFDO1NBQUU7S0FBQyxDQUFDO0lBQ3BLZCxPQUFPLENBQUNtQixRQUFRLEdBQUc7UUFBQ0MsS0FBSyxFQUFFUCxnQkFBZ0IsQ0FBQ0ssSUFBSSxDQUFDRyxFQUFFO1FBQUVDLFFBQVEsRUFBRVQsZ0JBQWdCLENBQUNLLElBQUksQ0FBQ0ssS0FBSztLQUFDLENBQUM7SUFDNUZ2QixPQUFPLENBQUN3QixPQUFPLEdBQUcseUJBQXlCO0lBQzNDLE1BQU14QixPQUFPLENBQUN5QixNQUFNLEVBQUUsQ0FBQztJQUN2QjFCLEdBQUcsQ0FBQzJCLFFBQVEsQ0FBQyxHQUFHLEVBQUV0QixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sUUFBUSxDQUFDLENBQUM7QUFFekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sb2dpbl9jYWxsYmFjay5qcz9mMGViIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBodHRwID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSBcIi4uLy4uL2xpYi9nZXQtc2Vzc2lvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihyZXEsIHJlcykgXG57XG5cdHZhciBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XG5cdHZhciByZXNwb25zZSA9IGF3YWl0IGh0dHAucG9zdCgnaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlbicsIHtjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkNMSUVOVF9JRCwgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCwgY29kZTogcmVxLnF1ZXJ5LmNvZGUsIHJlZGlyZWN0X3VyaTogcHJvY2Vzcy5lbnYuQkFTRV9VUkwgKyBcIi9hcGkvbG9naW5fY2FsbGJhY2tcIn0pO1xuXHR2YXIgdXNlckluZm9SZXNwb25zZSA9IGF3YWl0IGh0dHAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXInLHtoZWFkZXJzOntBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhyZXNwb25zZS5kYXRhKS5nZXQoJ2FjY2Vzc190b2tlbicpKX19KTtcblx0c2Vzc2lvbi51c2VySW5mbyA9IHtnaF9pZDogdXNlckluZm9SZXNwb25zZS5kYXRhLmlkLCB1c2VybmFtZTogdXNlckluZm9SZXNwb25zZS5kYXRhLmxvZ2lufTtcblx0c2Vzc2lvbi5tZXNzYWdlID0gXCJTdWNjZXNzZnVsbHkgc2lnbmVkIGluLlwiXG5cdGF3YWl0IHNlc3Npb24uY29tbWl0KCk7XG5cdHJlcy5yZWRpcmVjdCgzMDIsIHByb2Nlc3MuZW52LkJBU0VfVVJMKTtcblx0XG59XG4iXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJnZXRTZXNzaW9uIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInJlc3BvbnNlIiwicG9zdCIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJDTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiQ0xJRU5UX1NFQ1JFVCIsImNvZGUiLCJxdWVyeSIsInJlZGlyZWN0X3VyaSIsIkJBU0VfVVJMIiwidXNlckluZm9SZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiVVJMU2VhcmNoUGFyYW1zIiwiZGF0YSIsInVzZXJJbmZvIiwiZ2hfaWQiLCJpZCIsInVzZXJuYW1lIiwibG9naW4iLCJtZXNzYWdlIiwiY29tbWl0IiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login_callback.js\n");

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