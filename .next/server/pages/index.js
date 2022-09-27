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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/get-session.js":
/*!****************************!*\
  !*** ./lib/get-session.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ \"next-session\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-session/lib/compat */ \"next-session/lib/compat\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__]);\n([next_session__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar MongoDBStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(session);\nvar store = new MongoDBStore({\n    // No idea why the environment variables are not being used by the mongo container\n    //uri: \"mongodb://\" + process.env.MONGO_INITDB_ROOT_USERNAME + \":\" + process.env.MONGO_INITDB_ROOT_PASSWORD + \"@mongo:27017/?authSource=admin\",\n    uri: \"mongodb://mongo:27017\",\n    collection: \"sessions\"\n});\nstore.on(\"error\", (e)=>{\n    console.log(e);\n});\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    autoCommit: false,\n    cookie: {\n        maxAge: 28800\n    },\n    store: (0,next_session_lib_compat__WEBPACK_IMPORTED_MODULE_2__.promisifyStore)(store)\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNMO0FBQ3FCO0FBQ3ZELElBQUlJLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUN4QyxJQUFJQyxZQUFZLEdBQUdELG1CQUFPLENBQUMsd0RBQXlCLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO0FBRTlELElBQUlHLEtBQUssR0FBRyxJQUFJRCxZQUFZLENBQUM7SUFDNUIsa0ZBQWtGO0lBQ2xGLCtJQUErSTtJQUMvSUUsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsVUFBVSxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztBQUVGRixLQUFLLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFHO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUdJLE1BQU1HLFVBQVUsR0FBR2Qsd0RBQVcsQ0FBQztJQUFDZSxVQUFVLEVBQUUsS0FBSztJQUFFQyxNQUFNLEVBQUM7UUFBQ0MsTUFBTSxFQUFFLEtBQUs7S0FBQztJQUFFVixLQUFLLEVBQUVKLHVFQUFjLENBQUNJLEtBQUssQ0FBQztDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXQtc2Vzc2lvbi5qcz9mMmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0U2Vzc2lvbiBmcm9tIFwibmV4dC1zZXNzaW9uXCI7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XG5pbXBvcnQge3Byb21pc2lmeVN0b3JlfSBmcm9tIFwibmV4dC1zZXNzaW9uL2xpYi9jb21wYXRcIjtcbnZhciBzZXNzaW9uID0gcmVxdWlyZSgnZXhwcmVzcy1zZXNzaW9uJyk7XG52YXIgTW9uZ29EQlN0b3JlID0gcmVxdWlyZSgnY29ubmVjdC1tb25nb2RiLXNlc3Npb24nKShzZXNzaW9uKTtcblxudmFyIHN0b3JlID0gbmV3IE1vbmdvREJTdG9yZSh7XG5cdC8vIE5vIGlkZWEgd2h5IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG5vdCBiZWluZyB1c2VkIGJ5IHRoZSBtb25nbyBjb250YWluZXJcblx0Ly91cmk6IFwibW9uZ29kYjovL1wiICsgcHJvY2Vzcy5lbnYuTU9OR09fSU5JVERCX1JPT1RfVVNFUk5BTUUgKyBcIjpcIiArIHByb2Nlc3MuZW52Lk1PTkdPX0lOSVREQl9ST09UX1BBU1NXT1JEICsgXCJAbW9uZ286MjcwMTcvP2F1dGhTb3VyY2U9YWRtaW5cIixcblx0dXJpOiBcIm1vbmdvZGI6Ly9tb25nbzoyNzAxN1wiLFxuXHRjb2xsZWN0aW9uOiAnc2Vzc2lvbnMnXG59KTtcblxuc3RvcmUub24oJ2Vycm9yJywgKGUpPT57XG5jb25zb2xlLmxvZyhlKTtcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oe2F1dG9Db21taXQ6IGZhbHNlLCBjb29raWU6e21heEFnZTogMjg4MDB9LCBzdG9yZTogcHJvbWlzaWZ5U3RvcmUoc3RvcmUpfSk7XG4iXSwibmFtZXMiOlsibmV4dFNlc3Npb24iLCJ2NCIsInV1aWR2NCIsInByb21pc2lmeVN0b3JlIiwic2Vzc2lvbiIsInJlcXVpcmUiLCJNb25nb0RCU3RvcmUiLCJzdG9yZSIsInVyaSIsImNvbGxlY3Rpb24iLCJvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2Vzc2lvbiIsImF1dG9Db21taXQiLCJjb29raWUiLCJtYXhBZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/get-session.js\n");

/***/ }),

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\nfunction Footer() {\n    return \"\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsTUFBTSxHQUM5QjtJQUNDLE9BQU8sRUFBRSxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvRm9vdGVyLmpzPzBiYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKClcbntcblx0cmV0dXJuIFwiXCI7XG59XG4iXSwibmFtZXMiOlsiRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Footer.js\n");

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction signoutLink(userInfo) {\n    return userInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"signoutLink\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/api/logout\",\n            children: \"Sign Out\"\n        }, void 0, false, {\n            fileName: \"/src/app/pages/components/Header.js\",\n            lineNumber: 3,\n            columnNumber: 42\n        }, this)\n    }, void 0, false, {\n        fileName: \"/src/app/pages/components/Header.js\",\n        lineNumber: 3,\n        columnNumber: 20\n    }, this) : \"\";\n}\nfunction Header(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"header\",\n        children: [\n            \"Input Golf \",\n            signoutLink(props.userInfo),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"message\",\n                children: props.message\n            }, void 0, false, {\n                fileName: \"/src/app/pages/components/Header.js\",\n                lineNumber: 8,\n                columnNumber: 66\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/app/pages/components/Header.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLFNBQVNBLFdBQVcsQ0FBQ0MsUUFBUSxFQUM3QjtJQUNDLE9BQU9BLFFBQVEsaUJBQUcsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGFBQWE7a0JBQUMsNEVBQUNDLEdBQUM7WUFBQ0MsSUFBSSxFQUFDLGFBQWE7c0JBQUMsVUFBUTs7Ozs7Z0JBQUk7Ozs7O1lBQU0sR0FBRyxFQUFFO0FBQ3RGLENBQUM7QUFFYyxTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFDcEM7SUFDQyxxQkFBTyw4REFBQ0wsS0FBRztRQUFDQyxFQUFFLEVBQUMsUUFBUTs7WUFBQyxhQUFXO1lBQUNILFdBQVcsQ0FBQ08sS0FBSyxDQUFDTixRQUFRLENBQUM7MEJBQUMsOERBQUNDLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxTQUFTOzBCQUFFSSxLQUFLLENBQUNDLE9BQU87Ozs7O29CQUFPOzs7Ozs7WUFBTTtBQUM5RyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9IZWFkZXIuanM/MzE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaWdub3V0TGluayh1c2VySW5mbylcbntcblx0cmV0dXJuIHVzZXJJbmZvID8gPGRpdiBpZD1cInNpZ25vdXRMaW5rXCI+PGEgaHJlZj1cIi9hcGkvbG9nb3V0XCI+U2lnbiBPdXQ8L2E+PC9kaXY+IDogXCJcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpXG57XG5cdHJldHVybiA8ZGl2IGlkPVwiaGVhZGVyXCI+SW5wdXQgR29sZiB7c2lnbm91dExpbmsocHJvcHMudXNlckluZm8pfTxkaXYgaWQ9XCJtZXNzYWdlXCI+e3Byb3BzLm1lc3NhZ2V9PC9kaXY+PC9kaXY+XG59XG4iXSwibmFtZXMiOlsic2lnbm91dExpbmsiLCJ1c2VySW5mbyIsImRpdiIsImlkIiwiYSIsImhyZWYiLCJIZWFkZXIiLCJwcm9wcyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ page),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_get_session_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/get-session.js */ \"./lib/get-session.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header.js */ \"./pages/components/Header.js\");\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer.js */ \"./pages/components/Footer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_session_js__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_get_session_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction decideContent(userInfo) {\n    return userInfo ? \"authenticated\" : \"unauthenticated\";\n}\nfunction page({ userInfo , message  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userInfo: userInfo,\n                message: message\n            }, void 0, false, {\n                fileName: \"/src/app/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 14\n            }, this),\n            decideContent(userInfo),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/src/app/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 86\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/app/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n};\nasync function getServerSideProps({ req , res  }) {\n    var session = await (0,_lib_get_session_js__WEBPACK_IMPORTED_MODULE_1__.getSession)(req, res);\n    var message = session.message;\n    session.message = \"\";\n    await session.commit();\n    return {\n        props: {\n            userInfo: session.userInfo ? session.userInfo : null,\n            message: message ? message : \"\"\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDTDtBQUNBO0FBRTNDLFNBQVNHLGFBQWEsQ0FBQ0MsUUFBUSxFQUMvQjtJQUNDLE9BQU9BLFFBQVEsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7QUFDdkQsQ0FBQztBQUVjLFNBQVNDLElBQUksQ0FBQyxFQUFDRCxRQUFRLEdBQUVFLE9BQU8sR0FBQyxFQUNoRDtJQUNDLHFCQUFPLDhEQUFDQyxLQUFHOzswQkFBQyw4REFBQ04sNkRBQU07Z0JBQUNHLFFBQVEsRUFBRUEsUUFBUTtnQkFBRUUsT0FBTyxFQUFFQSxPQUFPOzs7OztvQkFBRztZQUFDSCxhQUFhLENBQUNDLFFBQVEsQ0FBQzswQkFBQyw4REFBQ0YsNkRBQU07Ozs7b0JBQUc7Ozs7OztZQUFNLENBQUM7QUFDdEcsQ0FBQztBQUVNLGVBQWVNLGtCQUFrQixDQUFDLEVBQUNDLEdBQUcsR0FBRUMsR0FBRyxHQUFDLEVBQ25EO0lBQ0MsSUFBSUMsT0FBTyxHQUFHLE1BQU1YLCtEQUFVLENBQUNTLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3hDLElBQUlKLE9BQU8sR0FBR0ssT0FBTyxDQUFDTCxPQUFPO0lBQzdCSyxPQUFPLENBQUNMLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDckIsTUFBTUssT0FBTyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixPQUFPO1FBQUNDLEtBQUssRUFBQztZQUFDVCxRQUFRLEVBQUVPLE9BQU8sQ0FBQ1AsUUFBUSxHQUFHTyxPQUFPLENBQUNQLFFBQVEsR0FBRyxJQUFJO1lBQUVFLE9BQU8sRUFBRUEsT0FBTyxHQUFHQSxPQUFPLEdBQUcsRUFBRTtTQUFDO0tBQUM7QUFDdkcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tIFwiLi4vbGliL2dldC1zZXNzaW9uLmpzXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXIuanNcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3Rlci5qc1wiXG5cbmZ1bmN0aW9uIGRlY2lkZUNvbnRlbnQodXNlckluZm8pXG57XG5cdHJldHVybiB1c2VySW5mbyA/IFwiYXV0aGVudGljYXRlZFwiIDogXCJ1bmF1dGhlbnRpY2F0ZWRcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSh7dXNlckluZm8sIG1lc3NhZ2V9KVxue1xuXHRyZXR1cm4gPGRpdj48SGVhZGVyIHVzZXJJbmZvPXt1c2VySW5mb30gbWVzc2FnZT17bWVzc2FnZX0vPntkZWNpZGVDb250ZW50KHVzZXJJbmZvKX08Rm9vdGVyIC8+PC9kaXY+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEsIHJlc30pXG57XG5cdHZhciBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XG5cdHZhciBtZXNzYWdlID0gc2Vzc2lvbi5tZXNzYWdlO1xuXHRzZXNzaW9uLm1lc3NhZ2UgPSBcIlwiO1xuXHRhd2FpdCBzZXNzaW9uLmNvbW1pdCgpO1xuXHRyZXR1cm4ge3Byb3BzOnt1c2VySW5mbzogc2Vzc2lvbi51c2VySW5mbyA/IHNlc3Npb24udXNlckluZm8gOiBudWxsLCBtZXNzYWdlOiBtZXNzYWdlID8gbWVzc2FnZSA6IFwiXCJ9fVxufVxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJIZWFkZXIiLCJGb290ZXIiLCJkZWNpZGVDb250ZW50IiwidXNlckluZm8iLCJwYWdlIiwibWVzc2FnZSIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInNlc3Npb24iLCJjb21taXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();