"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.page.tsx":
/*!*********************************!*\
  !*** ./src/pages/_app.page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/notifications */ \"./node_modules/@mantine/notifications/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app */ \"./src/app/index.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/** Copyright (c) 2023, Poozle, all rights reserved. **/ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps , router  } = param;\n    _s();\n    const ComponentToRender = (0,app__WEBPACK_IMPORTED_MODULE_2__.configProcessor)(router, Component, pageProps);\n    const [colorScheme, setColorScheme] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"dark\");\n    const toggleColorScheme = (value)=>setColorScheme(value || (colorScheme === \"dark\" ? \"light\" : \"dark\"));\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({\n        uri: \"http://localhost:3000/graphql\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache(),\n        credentials: \"include\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.ColorSchemeProvider, {\n            colorScheme: colorScheme,\n            toggleColorScheme: toggleColorScheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.MantineProvider, {\n                theme: {\n                    colorScheme\n                },\n                withCSSVariables: true,\n                withGlobalStyles: true,\n                withNormalizeCSS: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_6__.NotificationsProvider, {\n                    position: \"top-right\",\n                    children: ComponentToRender\n                }, void 0, false, {\n                    fileName: \"/Users/harshithmullapudi/Documents/personal/engine/engine-webapp/src/pages/_app.page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshithmullapudi/Documents/personal/engine/engine-webapp/src/pages/_app.page.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/harshithmullapudi/Documents/personal/engine/engine-webapp/src/pages/_app.page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshithmullapudi/Documents/personal/engine/engine-webapp/src/pages/_app.page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"gqwzZCyocicSl6fmS/IK/i6MCho=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFzRCxHQUV0RDs7QUFBNkU7QUFLdEQ7QUFDd0M7QUFFaEM7QUFFTztBQUVOO0FBRWpCLFNBQVNRLE1BQU0sS0FBMEMsRUFBRTtRQUE1QyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRUMsT0FBTSxFQUFZLEdBQTFDOztJQUM1QixNQUFNQyxvQkFBb0JMLG9EQUFlQSxDQUFDSSxRQUFRRixXQUFXQztJQUM3RCxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR1IsMkNBQWMsQ0FBYztJQUNsRSxNQUFNVSxvQkFBb0IsQ0FBQ0MsUUFDekJILGVBQWVHLFNBQVVKLENBQUFBLGdCQUFnQixTQUFTLFVBQVUsTUFBTTtJQUVwRSxNQUFNSyxTQUFTLElBQUlsQix3REFBWUEsQ0FBQztRQUM5Qm1CLEtBQUtDLCtCQUF1QztRQUM1Q0csT0FBTyxJQUFJdEIseURBQWFBO1FBQ3hCdUIsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUN0QiwwREFBY0E7UUFBQ2dCLFFBQVFBO2tCQUN0Qiw0RUFBQ2YsOERBQW1CQTtZQUNsQlUsYUFBYUE7WUFDYkcsbUJBQW1CQTtzQkFFbkIsNEVBQUNaLDBEQUFlQTtnQkFDZHFCLE9BQU87b0JBQUVaO2dCQUFZO2dCQUNyQmEsZ0JBQWdCO2dCQUNoQkMsZ0JBQWdCO2dCQUNoQkMsZ0JBQWdCOzBCQUVoQiw0RUFBQ3ZCLHlFQUFxQkE7b0JBQUN3QixVQUFTOzhCQUM3QmpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixDQUFDO0dBL0J1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAucGFnZS50c3g/OTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29weXJpZ2h0IChjKSAyMDIzLCBQb296bGUsIGFsbCByaWdodHMgcmVzZXJ2ZWQuICoqL1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQ29sb3JTY2hlbWUsXG4gIENvbG9yU2NoZW1lUHJvdmlkZXIsXG4gIE1hbnRpbmVQcm92aWRlcixcbn0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zUHJvdmlkZXIgfSBmcm9tICdAbWFudGluZS9ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb25maWdQcm9jZXNzb3IgfSBmcm9tICdhcHAnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgQ29tcG9uZW50VG9SZW5kZXIgPSBjb25maWdQcm9jZXNzb3Iocm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcyk7XG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gUmVhY3QudXNlU3RhdGU8Q29sb3JTY2hlbWU+KCdkYXJrJyk7XG4gIGNvbnN0IHRvZ2dsZUNvbG9yU2NoZW1lID0gKHZhbHVlPzogQ29sb3JTY2hlbWUpID0+XG4gICAgc2V0Q29sb3JTY2hlbWUodmFsdWUgfHwgKGNvbG9yU2NoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKSk7XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1NFUlZFUl9VUkwsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENvbG9yU2NoZW1lUHJvdmlkZXJcbiAgICAgICAgY29sb3JTY2hlbWU9e2NvbG9yU2NoZW1lfVxuICAgICAgICB0b2dnbGVDb2xvclNjaGVtZT17dG9nZ2xlQ29sb3JTY2hlbWV9XG4gICAgICA+XG4gICAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgICB0aGVtZT17eyBjb2xvclNjaGVtZSB9fVxuICAgICAgICAgIHdpdGhDU1NWYXJpYWJsZXNcbiAgICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXG4gICAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xuICAgICAgICA+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNQcm92aWRlciBwb3NpdGlvbj1cInRvcC1yaWdodFwiPlxuICAgICAgICAgICAge0NvbXBvbmVudFRvUmVuZGVyfVxuICAgICAgICAgIDwvTm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxuICAgICAgICA8L01hbnRpbmVQcm92aWRlcj5cbiAgICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsIkNvbG9yU2NoZW1lUHJvdmlkZXIiLCJNYW50aW5lUHJvdmlkZXIiLCJOb3RpZmljYXRpb25zUHJvdmlkZXIiLCJSZWFjdCIsImNvbmZpZ1Byb2Nlc3NvciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiQ29tcG9uZW50VG9SZW5kZXIiLCJjb2xvclNjaGVtZSIsInNldENvbG9yU2NoZW1lIiwidXNlU3RhdGUiLCJ0b2dnbGVDb2xvclNjaGVtZSIsInZhbHVlIiwiY2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VfU0VSVkVSX1VSTCIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJ0aGVtZSIsIndpdGhDU1NWYXJpYWJsZXMiLCJ3aXRoR2xvYmFsU3R5bGVzIiwid2l0aE5vcm1hbGl6ZUNTUyIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n"));

/***/ })

});