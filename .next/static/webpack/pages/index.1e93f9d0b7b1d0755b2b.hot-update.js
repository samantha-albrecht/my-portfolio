/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SectionContainer/SectionContainer.js":
/*!*********************************************************!*\
  !*** ./components/SectionContainer/SectionContainer.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/homepage/Hero/Hero.js":
/*!******************************************!*\
  !*** ./components/homepage/Hero/Hero.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SectionContainer/SectionContainer */ \"./components/SectionContainer/SectionContainer.js\");\n/* harmony import */ var _SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/ButtonLink/ButtonLink */ \"./components/ui/ButtonLink/ButtonLink.js\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.module.scss */ \"./components/homepage/Hero/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samanthaalbrecht/Documents/GitHub/my-portfolio/components/homepage/Hero/Hero.js\";\n\n\n\n\n\nfunction Hero() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_0___default()), {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentInner),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: (_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default().caption),\n        children: \"Hi, I'm Samantha \\u2014\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 29\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: (_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: \"Designer, developer & creative problem solver\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 29\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_1__.default, {\n        url: '#work',\n        title: 'Jump to work section',\n        children: \"See design work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 29\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this) // <section>\n  //     <div className={styles.container}>\n  //         <div className={styles.gridLayout}>\n  //             <div className={styles.backgroundContainer}></div>\n  //             <div className={styles.guidesContainer}>\n  //                 <div className={styles.guide}></div>\n  //                 <div className={styles.guide}></div>\n  //                 <div className={styles.guide}></div>\n  //                 <div className={styles.guide}></div>\n  //             </div>\n  //             <div className={styles.contentContainer}>\n  //                 <div className={styles.contentInner}>\n  //                     <div className={styles.caption}>Hi, I'm Samantha &mdash;</div>\n  //                     <h1 className={styles.title}>Designer, developer &amp; creative problem solver</h1>\n  //                     <ButtonLink url={'#work'} title={'Jump to work section'}>\n  //                         See design work\n  //                     </ButtonLink>\n  //                 </div>\n  //             </div>\n  //             {/* <div className={styles.square}></div> */}\n  //         </div>\n  //     </div>\n  // </section>\n  ;\n}\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL0hlcm8vSGVyby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxJQUFULEdBQWdCO0FBQ1osc0JBQ0ksOERBQUMsMkVBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUQsdUVBQWhCO0FBQUEsOEJBQ2dCO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhCLGVBRWdCO0FBQUksaUJBQVMsRUFBRUEsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGaEIsZUFHZ0IsOERBQUMsOERBQUQ7QUFBWSxXQUFHLEVBQUUsT0FBakI7QUFBMEIsYUFBSyxFQUFFLHNCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FVSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENKO0FBa0NIOztLQW5DUUM7QUFxQ1QsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS9IZXJvL0hlcm8uanM/MjJiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdGlvbkNvbnRhaW5lciBmcm9tICcuLi8uLi9TZWN0aW9uQ29udGFpbmVyL1NlY3Rpb25Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vLi4vdWkvQnV0dG9uTGluay9CdXR0b25MaW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZXJvLm1vZHVsZS5zY3NzJztcblxuZnVuY3Rpb24gSGVybygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudElubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259PkhpLCBJJ20gU2FtYW50aGEgJm1kYXNoOzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RGVzaWduZXIsIGRldmVsb3BlciAmYW1wOyBjcmVhdGl2ZSBwcm9ibGVtIHNvbHZlcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPXsnI3dvcmsnfSB0aXRsZT17J0p1bXAgdG8gd29yayBzZWN0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBkZXNpZ24gd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICAgIC8vIDxzZWN0aW9uPlxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZExheW91dH0+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZENvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpZGVzQ29udGFpbmVyfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpZGV9PjwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlkZX0+PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWRlfT48L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpZGV9PjwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudElubmVyfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259PkhpLCBJJ20gU2FtYW50aGEgJm1kYXNoOzwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RGVzaWduZXIsIGRldmVsb3BlciAmYW1wOyBjcmVhdGl2ZSBwcm9ibGVtIHNvbHZlcjwvaDE+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPXsnI3dvcmsnfSB0aXRsZT17J0p1bXAgdG8gd29yayBzZWN0aW9uJ30+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBkZXNpZ24gd29ya1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3F1YXJlfT48L2Rpdj4gKi99XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwibmFtZXMiOlsiU2VjdGlvbkNvbnRhaW5lciIsIkJ1dHRvbkxpbmsiLCJzdHlsZXMiLCJIZXJvIiwiY29udGVudElubmVyIiwiY2FwdGlvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/homepage/Hero/Hero.js\n");

/***/ })

});