"use strict";
exports.id = 3961;
exports.ids = [3961];
exports.modules = {

/***/ 3961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$t": () => (/* binding */ MacOS),
/* harmony export */   "Ls": () => (/* binding */ PlatformSwitcher),
/* harmony export */   "Pb": () => (/* binding */ PlatformProvider),
/* harmony export */   "de": () => (/* binding */ Windows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__]);
use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PlatformContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)("windows");
const Windows = ({ children  })=>{
    const platform = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlatformContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        hidden: platform != "windows",
        children: children
    });
};
const MacOS = ({ children  })=>{
    const platform = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlatformContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        hidden: platform != "macOS",
        children: children
    });
};
// platform detection function
function getPlatform() {
    try {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("win") !== -1) {
            return "windows";
        } else if (userAgent.indexOf("mac") !== -1) {
            return "macOS";
        } else {
            return "windows";
        }
    } catch (e) {
        return "windows";
    }
}
const SetPlatformContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((platform)=>{});
const PlatformProvider = ({ children  })=>{
    const [platform, setPlatform] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__["default"])("platform", {
        defaultValue: getPlatform()
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SetPlatformContext.Provider, {
        value: setPlatform,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlatformContext.Provider, {
            value: platform,
            children: children
        })
    });
};
const PlatformSwitcher = ()=>{
    const platform = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlatformContext);
    const setPlatform = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SetPlatformContext);
    const setWindows = ()=>{
        setPlatform("windows");
    };
    const setMacOS = ()=>{
        setPlatform("macOS");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "platform-switcher",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: setWindows,
                hidden: platform === "windows",
                children: "Switch to Windows content"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: setMacOS,
                hidden: platform === "macOS",
                children: "Switch to macOS content"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;