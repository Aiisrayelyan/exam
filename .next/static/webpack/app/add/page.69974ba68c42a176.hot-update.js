"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add/page",{

/***/ "(app-pages-browser)/./src/app/add/page.tsx":
/*!******************************!*\
  !*** ./src/app/add/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddPage() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleAdd = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        const data = {\n            login: formData.get(\"name\"),\n            surname: formData.get(\"surname\"),\n            username: formData.get(\"username\"),\n            salary: formData.get(\"salary\")\n        };\n        try {\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            console.log(response.status);\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            if (result.message) {\n                setMessage(result.message);\n            }\n            if (result.message === \"Login successful\") {\n                localStorage.setItem(\"user\", JSON.stringify(result.user));\n                console.log(\"test2\");\n                router.push(\"/profile\");\n            }\n        } catch (error) {\n            console.error(\"There was an error!\", error);\n            setMessage(\"An unexpected error occurred.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"p-4 px-6 mx-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-3\",\n                children: \"Add User\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"column is-two-fifths p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        onSubmit: handleAdd,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-dark\",\n                                    placeholder: \"please enter name\",\n                                    name: \"name\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-dark\",\n                                    placeholder: \"please enter surname\",\n                                    name: \"surname\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-dark\",\n                                    placeholder: \"please enter username\",\n                                    name: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"input is-dark\",\n                                    placeholder: \"please enter salary\",\n                                    name: \"salary\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, this),\n                            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"has-text-danger\",\n                                children: message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button is-success\",\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Jetbrains\\\\Fun\\\\Aida_exam_2\\\\changed\\\\src\\\\app\\\\add\\\\page.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(AddPage, \"Nk+XnQ6NaZWv9gNmMJRJZMpAuRA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPage;\nvar _c;\n$RefreshReg$(_c, \"AddPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUU3QixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNSyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTUssWUFBWSxPQUFPQztRQUNyQkEsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7UUFFakQsTUFBTUMsT0FBTztZQUNYQyxPQUFPSixTQUFTSyxHQUFHLENBQUM7WUFDcEJDLFNBQVNOLFNBQVNLLEdBQUcsQ0FBQztZQUN0QkUsVUFBVVAsU0FBU0ssR0FBRyxDQUFDO1lBQ3ZCRyxRQUFRUixTQUFTSyxHQUFHLENBQUM7UUFDdkI7UUFFQSxJQUFJO1lBQ0YsTUFBTUksV0FBVyxNQUFNQyxNQUFNLGNBQWM7Z0JBQ3pDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1o7WUFDdkI7WUFFQWEsUUFBUUMsR0FBRyxDQUFDUixTQUFTUyxNQUFNO1lBRTNCLElBQUksQ0FBQ1QsU0FBU1UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxTQUFTLE1BQU1aLFNBQVNhLElBQUk7WUFFbEMsSUFBSUQsT0FBTzNCLE9BQU8sRUFBRTtnQkFDbEJDLFdBQVcwQixPQUFPM0IsT0FBTztZQUMzQjtZQUVBLElBQUkyQixPQUFPM0IsT0FBTyxLQUFLLG9CQUFvQjtnQkFDekM2QixhQUFhQyxPQUFPLENBQUMsUUFBUVYsS0FBS0MsU0FBUyxDQUFDTSxPQUFPSSxJQUFJO2dCQUN2RFQsUUFBUUMsR0FBRyxDQUFDO2dCQUNackIsT0FBTzhCLElBQUksQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFXLEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3JDaEMsV0FBVztRQUNiO0lBQ0Y7SUFFRixxQkFDSSw4REFBQ2lDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBWTs7Ozs7OzBCQUMxQiw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDRzt3QkFBS0gsV0FBVTt3QkFBTUksVUFBVXBDOzswQ0FDOUIsOERBQUNrQztnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xOLFdBQVU7b0NBQ1ZPLGFBQVk7b0NBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDTjtnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xOLFdBQVU7b0NBQ1ZPLGFBQVk7b0NBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDTjtnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xOLFdBQVU7b0NBQ1ZPLGFBQVk7b0NBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDTjtnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ0s7b0NBQ0NDLE1BQUs7b0NBQ0xOLFdBQVU7b0NBQ1ZPLGFBQVk7b0NBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzRCQUdSM0MseUJBQVcsOERBQUM0QztnQ0FBRVQsV0FBVTswQ0FBbUJuQzs7Ozs7OzBDQUM1Qyw4REFBQzZDO2dDQUFPVixXQUFVO2dDQUFvQk0sTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRTtHQTVGd0IxQzs7UUFFTEQsc0RBQVNBOzs7S0FGSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZGQvcGFnZS50c3g/MTkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUGFnZSgpIHtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgbG9naW46IGZvcm1EYXRhLmdldCgnbmFtZScpLFxyXG4gICAgICAgICAgc3VybmFtZTogZm9ybURhdGEuZ2V0KCdzdXJuYW1lJyksXHJcbiAgICAgICAgICB1c2VybmFtZTogZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpLFxyXG4gICAgICAgICAgc2FsYXJ5OiBmb3JtRGF0YS5nZXQoJ3NhbGFyeScpXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cylcclxuICAgIFxyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBcclxuICAgICAgICAgIGlmIChyZXN1bHQubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlID09PSAnTG9naW4gc3VjY2Vzc2Z1bCcpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXNlcikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdDInKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtNCBweC02IG14LTZcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTNcIj5BZGQgVXNlcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdHdvLWZpZnRocyBwLTRcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJib3hcIiBvblN1Ym1pdD17aGFuZGxlQWRkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBlbnRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBlbnRlciBzdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBlbnRlciB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGVhc2UgZW50ZXIgc2FsYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FsYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwiaGFzLXRleHQtZGFuZ2VyXCI+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkFkZFBhZ2UiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJvdXRlciIsImhhbmRsZUFkZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImRhdGEiLCJsb2dpbiIsImdldCIsInN1cm5hbWUiLCJ1c2VybmFtZSIsInNhbGFyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwib2siLCJFcnJvciIsInJlc3VsdCIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlciIsInB1c2giLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/add/page.tsx\n"));

/***/ })

});