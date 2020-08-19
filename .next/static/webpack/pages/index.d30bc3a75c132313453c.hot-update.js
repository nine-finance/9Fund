webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignIndex, _Component);\n\n  var _super = _createSuper(CampaignIndex);\n\n  function CampaignIndex() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CampaignIndex);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CampaignIndex, [{\n    key: \"renderCampaigns\",\n    value: function renderCampaigns() {\n      var items = this.props.campaigns.map(function (address) {\n        return {\n          meta: address,\n          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n            route: \"/dashboard/\".concat(address)\n          }, __jsx(\"a\", null, \"Donate\")),\n          fluid: true\n        };\n      });\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Card\"].Group, {\n        items: items\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var items = this.props.campaigns.map(function (address) {\n        return {\n          address: address\n        };\n      });\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Grid\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Grid\"].Row, {\n        width: 10\n      }, __jsx(\"div\", null, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"p\", null, \"This is a nonprofit fundraising app for 9 Finance for Everyone\"), __jsx(\"p\", null, \" Just like any other form of value exchange, when you are fundraising there needs to be an intermediary to ensure the funds being raised are being used the way the donors/investors intended they be used. We have to tackle the issue of TRUST head on.\"), __jsx(\"p\", null, \" Ideally, fundraising should look something like this\"), __jsx(\"img\", {\n        src: \"/images/ideal.png\",\n        alt: \"ideal\",\n        width: \"450px\"\n      }), __jsx(\"p\", null, \" In most for-profit corporations, a pseudo-trust system is established due to the distribution of profits.\"), __jsx(\"p\", null, \" However, in nonprofit and informal fundraising campaigns the pseudo-trust system established by profit sharing is non-existent thereby making this more precarious territory.\"), __jsx(\"div\", {\n        align: \"center\"\n      }, __jsx(\"img\", {\n        src: \"/images/not%20ideal.png\",\n        alt: \"not-ideal\",\n        width: \"450px\"\n      })), __jsx(\"p\", null, \" 9 Finance for Everyone happens to be a nonprofit, therefore it is important that we somehow resolve the issue of trust in fundraising\"), __jsx(\"p\", null, \" Our approach towards disclosing finances is very simple, Radical Transparency. All information about our finances is publicly available\"), __jsx(\"p\", null, \" To take our approach a step further, we are working with blockchain technology. Blockchain is commonly referred to as a trustless environment\"), __jsx(\"img\", {\n        src: \"/images/9Fund.png\",\n        alt: \"9Fund\",\n        width: \"450px\"\n      }), __jsx(\"p\", null, \" In summary, to help ensure transparency, all donations to 9 Finance for Everyone would have to be made in ethereum-based cryptocurrencies directly to this website. Donations cannot be disbursed by 9 Finance until 50% of donors approve a spending request created by 9 Finance.\"), this.renderCampaigns(), __jsx(\"p\", null, \" All donations should be made to this wallet address\")))));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var campaigns;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__[\"default\"].methods.getDeployedCampaigns().call();\n\n              case 2:\n                campaigns = _context.sent;\n                return _context.abrupt(\"return\", {\n                  campaigns: campaigns\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsImZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLGE7Ozs7Ozs7Ozs7Ozs7c0NBTWdCO0FBQ2QsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsT0FBTyxFQUFJO0FBQ2hELGVBQU87QUFDTEMsY0FBSSxFQUFFRCxPQUREO0FBRUxFLHFCQUFXLEVBQ1AsTUFBQyw2Q0FBRDtBQUFNLGlCQUFLLHVCQUFnQkYsT0FBaEI7QUFBWCxhQUNJLDBCQURKLENBSEM7QUFRTEcsZUFBSyxFQUFFO0FBUkYsU0FBUDtBQVVELE9BWGEsQ0FBZDtBQVlBLGFBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUVQO0FBQW5CLFFBQVA7QUFDSDs7OzZCQUNRO0FBQ0wsVUFBTUEsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsT0FBTyxFQUFHO0FBQUMsZUFBTTtBQUFDQSxpQkFBTyxFQUFQQTtBQUFELFNBQU47QUFBZ0IsT0FBcEQsQ0FBZDtBQUNJLGFBQ0ksTUFBQywyREFBRCxRQUNJLE1BQUMsc0RBQUQsUUFDSSxNQUFDLHNEQUFELENBQU0sR0FBTjtBQUFVLGFBQUssRUFBRTtBQUFqQixTQUNJLG1CQUNJLGlCQURKLEVBRUksaUJBRkosRUFHSSxrRkFISixFQUlJLDZRQUpKLEVBTUkseUVBTkosRUFPSTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUMsT0FBakM7QUFBeUMsYUFBSyxFQUFDO0FBQS9DLFFBUEosRUFRSSw4SEFSSixFQVNJLGtNQVRKLEVBVUk7QUFBSyxhQUFLLEVBQUM7QUFBWCxTQUFvQjtBQUFNLFdBQUcsRUFBQyx5QkFBVjtBQUFvQyxXQUFHLEVBQUMsV0FBeEM7QUFBb0QsYUFBSyxFQUFDO0FBQTFELFFBQXBCLENBVkosRUFXSSwwSkFYSixFQVlJLDRKQVpKLEVBYUksa0tBYkosRUFjSTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUMsT0FBakM7QUFBeUMsYUFBSyxFQUFDO0FBQS9DLFFBZEosRUFlSSx3U0FmSixFQWlCSyxLQUFLSSxlQUFMLEVBakJMLEVBa0JJLHdFQWxCSixDQURKLENBREosQ0FESixDQURKO0FBNEJQOzs7Ozs7Ozs7Ozt1QkFqRDJCQyx5REFBTyxDQUFDQyxPQUFSLENBQWdCQyxvQkFBaEIsR0FBdUNDLElBQXZDLEU7OztBQUFsQlYseUI7aURBQ0M7QUFBRUEsMkJBQVMsRUFBVEE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUhhVywrQzs7QUF1RGJkLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gICAgICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xuICAgIH1cblxuICAgIHJlbmRlckNhbXBhaWducygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGE6IGFkZHJlc3MsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9kYXNoYm9hcmQvJHthZGRyZXNzfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+LFxuICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PntyZXR1cm57YWRkcmVzc319KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgd2lkdGg9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIGEgbm9ucHJvZml0IGZ1bmRyYWlzaW5nIGFwcCBmb3IgOSBGaW5hbmNlIGZvciBFdmVyeW9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEp1c3QgbGlrZSBhbnkgb3RoZXIgZm9ybSBvZiB2YWx1ZSBleGNoYW5nZSwgd2hlbiB5b3UgYXJlIGZ1bmRyYWlzaW5nIHRoZXJlIG5lZWRzIHRvIGJlIGFuIGludGVybWVkaWFyeSB0byBlbnN1cmUgdGhlIGZ1bmRzIGJlaW5nIHJhaXNlZCBhcmUgYmVpbmcgdXNlZCB0aGUgd2F5IHRoZSBkb25vcnMvaW52ZXN0b3JzIGludGVuZGVkIHRoZXkgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhhdmUgdG8gdGFja2xlIHRoZSBpc3N1ZSBvZiBUUlVTVCBoZWFkIG9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IElkZWFsbHksIGZ1bmRyYWlzaW5nIHNob3VsZCBsb29rIHNvbWV0aGluZyBsaWtlIHRoaXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pZGVhbC5wbmdcIiBhbHQ9XCJpZGVhbFwiIHdpZHRoPVwiNDUwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbiBtb3N0IGZvci1wcm9maXQgY29ycG9yYXRpb25zLCBhIHBzZXVkby10cnVzdCBzeXN0ZW0gaXMgZXN0YWJsaXNoZWQgZHVlIHRvIHRoZSBkaXN0cmlidXRpb24gb2YgcHJvZml0cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIb3dldmVyLCBpbiBub25wcm9maXQgYW5kIGluZm9ybWFsIGZ1bmRyYWlzaW5nIGNhbXBhaWducyB0aGUgcHNldWRvLXRydXN0IHN5c3RlbSBlc3RhYmxpc2hlZCBieSBwcm9maXQgc2hhcmluZyBpcyBub24tZXhpc3RlbnQgdGhlcmVieSBtYWtpbmcgdGhpcyBtb3JlIHByZWNhcmlvdXMgdGVycml0b3J5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPjxpbWcgIHNyYz1cIi9pbWFnZXMvbm90JTIwaWRlYWwucG5nXCIgYWx0PVwibm90LWlkZWFsXCIgd2lkdGg9XCI0NTBweFwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDkgRmluYW5jZSBmb3IgRXZlcnlvbmUgaGFwcGVucyB0byBiZSBhIG5vbnByb2ZpdCwgdGhlcmVmb3JlIGl0IGlzIGltcG9ydGFudCB0aGF0IHdlIHNvbWVob3cgcmVzb2x2ZSB0aGUgaXNzdWUgb2YgdHJ1c3QgaW4gZnVuZHJhaXNpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBPdXIgYXBwcm9hY2ggdG93YXJkcyBkaXNjbG9zaW5nIGZpbmFuY2VzIGlzIHZlcnkgc2ltcGxlLCBSYWRpY2FsIFRyYW5zcGFyZW5jeS4gQWxsIGluZm9ybWF0aW9uIGFib3V0IG91ciBmaW5hbmNlcyBpcyBwdWJsaWNseSBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBUbyB0YWtlIG91ciBhcHByb2FjaCBhIHN0ZXAgZnVydGhlciwgd2UgYXJlIHdvcmtpbmcgd2l0aCBibG9ja2NoYWluIHRlY2hub2xvZ3kuIEJsb2NrY2hhaW4gaXMgY29tbW9ubHkgcmVmZXJyZWQgdG8gYXMgYSB0cnVzdGxlc3MgZW52aXJvbm1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy85RnVuZC5wbmdcIiBhbHQ9XCI5RnVuZFwiIHdpZHRoPVwiNDUwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbiBzdW1tYXJ5LCB0byBoZWxwIGVuc3VyZSB0cmFuc3BhcmVuY3ksIGFsbCBkb25hdGlvbnMgdG8gOSBGaW5hbmNlIGZvciBFdmVyeW9uZSB3b3VsZCBoYXZlIHRvIGJlIG1hZGUgaW4gZXRoZXJldW0tYmFzZWQgY3J5cHRvY3VycmVuY2llcyBkaXJlY3RseSB0byB0aGlzIHdlYnNpdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGlvbnMgY2Fubm90IGJlIGRpc2J1cnNlZCBieSA5IEZpbmFuY2UgdW50aWwgNTAlIG9mIGRvbm9ycyBhcHByb3ZlIGEgc3BlbmRpbmcgcmVxdWVzdCBjcmVhdGVkIGJ5IDkgRmluYW5jZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gQWxsIGRvbmF0aW9ucyBzaG91bGQgYmUgbWFkZSB0byB0aGlzIHdhbGxldCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})