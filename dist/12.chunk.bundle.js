(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@material-ui/icons/MenuRounded.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(\"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(\"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(\"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(\"path\", {\n  d: \"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z\"\n}), 'MenuRounded');\n\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL01lbnVSb3VuZGVkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9NZW51Um91bmRlZC5qcz9hNzhmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNCAxOGgxNmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxem0wLTVoMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXpNMyA3YzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDRjLS41NSAwLTEgLjQ1LTEgMXpcIlxufSksICdNZW51Um91bmRlZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@material-ui/icons/MenuRounded.js\n");

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(\"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createSvgIcon;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(\"./node_modules/@babel/runtime/helpers/extends.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(\"./node_modules/react/index.js\"));\n\nvar _SvgIcon = _interopRequireDefault(__webpack_require__(\"./node_modules/@material-ui/core/esm/SvgIcon/index.js\"));\n\nfunction createSvgIcon(path, displayName) {\n  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {\n    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({\n      ref: ref\n    }, props), path);\n  }));\n\n  if (true) {\n    Component.displayName = \"\".concat(displayName, \"Icon\");\n  }\n\n  Component.muiName = _SvgIcon.default.muiName;\n  return Component;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanM/ZjNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTdmdJY29uO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9TdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvblwiKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0ljb24ocGF0aCwgZGlzcGxheU5hbWUpIHtcbiAgdmFyIENvbXBvbmVudCA9IF9yZWFjdC5kZWZhdWx0Lm1lbW8oX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TdmdJY29uLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcyksIHBhdGgpO1xuICB9KSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIlwiLmNvbmNhdChkaXNwbGF5TmFtZSwgXCJJY29uXCIpO1xuICB9XG5cbiAgQ29tcG9uZW50Lm11aU5hbWUgPSBfU3ZnSWNvbi5kZWZhdWx0Lm11aU5hbWU7XG4gIHJldHVybiBDb21wb25lbnQ7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@material-ui/icons/utils/createSvgIcon.js\n");

/***/ }),

/***/ "./src/components/header/header.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./src/components/header/style.ts\");\n/* harmony import */ var _material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./node_modules/@material-ui/icons/MenuRounded.js\");\n/* harmony import */ var _material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Header() {\n    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    return (react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null,\n            react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { classes: { positionFixed: classes.positionFixed }, className: classes.appbar, position: 'fixed', elevation: 0 },\n                react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { className: classes.toolbar },\n                    react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_material_ui_icons_MenuRounded__WEBPACK_IMPORTED_MODULE_5___default.a, { className: classes.menuIcon }),\n                    react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], { className: classes.titleMenu }, \"Menu\"))))));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4P2VkM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IE1lbnVSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVJvdW5kZWQnO1xuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBCYXIsIHsgY2xhc3NlczogeyBwb3NpdGlvbkZpeGVkOiBjbGFzc2VzLnBvc2l0aW9uRml4ZWQgfSwgY2xhc3NOYW1lOiBjbGFzc2VzLmFwcGJhciwgcG9zaXRpb246ICdmaXhlZCcsIGVsZXZhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbGJhciwgeyBjbGFzc05hbWU6IGNsYXNzZXMudG9vbGJhciB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVSb3VuZGVkSWNvbiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubWVudUljb24gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZU1lbnUgfSwgXCJNZW51XCIpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.tsx\n");

/***/ }),

/***/ "./src/components/header/style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createStyles\"])({\n        toolbar: {\n            marginTop: 10,\n            marginBottom: 10,\n            display: 'flex',\n        },\n        menuIcon: {\n            fontSize: 24,\n            marginRight: 16,\n        },\n        positionFixed: {\n            left: 0,\n        },\n        appbar: {\n            backgroundColor: theme.colors.header,\n            color: theme.colors.gray30,\n            boxShadow: \"0 4px 6px 0 \" + theme.colors.gray80 + \", 0 2px 4px 0 \" + theme.colors.btnIconHover,\n        },\n        logo: {\n            marginTop: 10,\n            marginLeft: 7,\n        },\n        titleMenu: {\n            fontSize: 16,\n            fontWeight: 600,\n            textTransform: 'uppercase',\n        },\n    });\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGUudHM/ZTRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gY3JlYXRlU3R5bGVzKHtcbiAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1lbnVJY29uOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogMTYsXG4gICAgICAgIH0sXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGFwcGJhcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuaGVhZGVyLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5MzAsXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgXCIgKyB0aGVtZS5jb2xvcnMuZ3JheTgwICsgXCIsIDAgMnB4IDRweCAwIFwiICsgdGhlbWUuY29sb3JzLmJ0bkljb25Ib3ZlcixcbiAgICAgICAgfSxcbiAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDcsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlTWVudToge1xuICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/style.ts\n");

/***/ }),

/***/ "./src/components/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/components/layout/layout.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHM/OTdkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9sYXlvdXQnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/index.ts\n");

/***/ }),

/***/ "./src/components/layout/layout.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/clsx/dist/clsx.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./src/components/header/header.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./src/components/layout/style.ts\");\n\n\n\n\n\nfunction Layout(props) {\n    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    return (react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", { className: classes.root },\n        react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"CssBaseline\"], null),\n        react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", { className: classes.app },\n            react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"section\", { className: classes.main },\n                react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], { p: 3, className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.boxWrapper) }, props.children)))));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudHN4P2M2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9zdHlsZSc7XG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5yb290IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ3NzQmFzZWxpbmUsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLmFwcCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubWFpbiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IDMsIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmJveFdyYXBwZXIpIH0sIHByb3BzLmNoaWxkcmVuKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/layout.tsx\n");

/***/ }),

/***/ "./src/components/layout/style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n    var _a, _b;\n    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createStyles\"])({\n        root: (_a = {\n                display: 'flex',\n                minHeight: '100vh'\n            },\n            _a[theme.breakpoints.down('md')] = {\n                flexDirection: 'column',\n            },\n            _a),\n        app: {\n            flex: 1,\n            display: 'flex',\n            flexDirection: 'column',\n            background: theme.colors.mainBackground,\n            minHeight: '100vh',\n        },\n        main: {\n            marginTop: theme.variables.marginTopMain,\n        },\n        boxWrapper: (_b = {},\n            _b[theme.breakpoints.up('sm')] = {\n                padding: theme.spacing(5),\n            },\n            _b[theme.breakpoints.up(theme.variables.lgVertical)] = {\n                padding: theme.spacing(11, 21),\n            },\n            _b[theme.breakpoints.down('sm')] = {\n                maxWidth: 500,\n                marginRight: 'auto',\n                marginLeft: 'auto',\n            },\n            _b),\n    });\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvc3R5bGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvc3R5bGUudHM/MDJlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlcyh7XG4gICAgICAgIHJvb3Q6IChfYSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2FbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV0gPSB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2EpLFxuICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5tYWluQmFja2dyb3VuZCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS52YXJpYWJsZXMubWFyZ2luVG9wTWFpbixcbiAgICAgICAgfSxcbiAgICAgICAgYm94V3JhcHBlcjogKF9iID0ge30sXG4gICAgICAgICAgICBfYlt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV0gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYlt0aGVtZS5icmVha3BvaW50cy51cCh0aGVtZS52YXJpYWJsZXMubGdWZXJ0aWNhbCldID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTEsIDIxKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYlt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXSA9IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9iKSxcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/style.ts\n");

/***/ })

}]);