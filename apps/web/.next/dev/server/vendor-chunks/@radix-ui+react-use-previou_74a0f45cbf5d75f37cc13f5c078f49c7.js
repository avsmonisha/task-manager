"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-previou_74a0f45cbf5d75f37cc13f5c078f49c7";
exports.ids = ["vendor-chunks/@radix-ui+react-use-previou_74a0f45cbf5d75f37cc13f5c078f49c7"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-previou_74a0f45cbf5d75f37cc13f5c078f49c7/node_modules/@radix-ui/react-use-previous/dist/index.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-use-previou_74a0f45cbf5d75f37cc13f5c078f49c7/node_modules/@radix-ui/react-use-previous/dist/index.mjs ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePrevious: () => (/* binding */ usePrevious)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@16.0.0_@babel+core@7.2_c1b80d4ff242a171ae83e2e0b4eafdc1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n// packages/react/use-previous/src/usePrevious.tsx\n\nfunction usePrevious(value) {\n  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });\n  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {\n    if (ref.current.value !== value) {\n      ref.current.previous = ref.current.value;\n      ref.current.value = value;\n    }\n    return ref.current.previous;\n  }, [value]);\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2UtcHJldmlvdV83NGEwZjQ1Y2JmNWQ3NWYzN2NjMTNmNWMwNzhmNDljNy9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91cy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQytCO0FBQy9CO0FBQ0EsY0FBYyx5Q0FBWSxHQUFHLHdCQUF3QjtBQUNyRCxTQUFTLDBDQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFHRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1PTklTSEFcXERlc2t0b3BcXDEzdGggdGFzayBtYW5hZ2VyXFxub2RlX21vZHVsZXNcXC5wbnBtXFxAcmFkaXgtdWkrcmVhY3QtdXNlLXByZXZpb3VfNzRhMGY0NWNiZjVkNzVmMzdjYzEzZjVjMDc4ZjQ5YzdcXG5vZGVfbW9kdWxlc1xcQHJhZGl4LXVpXFxyZWFjdC11c2UtcHJldmlvdXNcXGRpc3RcXGluZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9yZWFjdC91c2UtcHJldmlvdXMvc3JjL3VzZVByZXZpb3VzLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoeyB2YWx1ZSwgcHJldmlvdXM6IHZhbHVlIH0pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmVmLmN1cnJlbnQucHJldmlvdXMgPSByZWYuY3VycmVudC52YWx1ZTtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZWYuY3VycmVudC5wcmV2aW91cztcbiAgfSwgW3ZhbHVlXSk7XG59XG5leHBvcnQge1xuICB1c2VQcmV2aW91c1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-previou_74a0f45cbf5d75f37cc13f5c078f49c7/node_modules/@radix-ui/react-use-previous/dist/index.mjs\n");

/***/ })

};
;