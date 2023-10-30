(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 3994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2612);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_languageMappings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_platform__WEBPACK_IMPORTED_MODULE_5__]);
_components_platform__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/FooterNav.jsx



 // translation dictionary


function FooterNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [selectedLang, setSelectedLang] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("en"); // <-- New state
    const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || "en";
    const handleLanguageChange = (event)=>{
        setSelectedLang(event.target.value);
    };
    const handleGoClick = ()=>{
        router.push("/" + selectedLang);
    };
    // Let's define our default path/text sets
    const { homePath , homeText , homeTitleText , specsPath , specsText , specsTitleText , instPath , instText , instTitleText , gcPath , gcText , gcTitleText , wwsPath , wwsText , wwsTitleText , dashPath , dashText , dashTitleText , faqPath , faqText , faqTitleText , planPath , planText , planTitleText , clPath , clText , clTitleText , langChangeText  } = _components_languageMappings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z[currentLang];
    let prevPath = "/";
    let prevText = "Previous Section";
    let nextPath = "/";
    let nextText = "Next Section";
    if (router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/)) {
        prevPath = null;
        nextPath = specsPath;
    }
    if (router.asPath.includes("/systemspecs")) {
        prevPath = homePath;
        nextPath = instPath;
    }
    if (router.asPath.includes("/installation")) {
        prevPath = specsPath;
        nextPath = gcPath;
    }
    if (router.asPath.includes("/gettingconnected")) {
        prevPath = instPath;
        nextPath = wwsPath;
    }
    if (router.asPath.includes("/workingwithsessions")) {
        prevPath = gcPath;
        nextPath = dashPath;
    }
    if (router.asPath.includes("/dashboard")) {
        prevPath = wwsPath;
        nextPath = faqPath;
    }
    if (router.asPath.includes("/faq")) {
        prevPath = dashPath;
        nextPath = planPath;
    }
    if (router.asPath.includes("/plans")) {
        prevPath = faqPath;
        nextPath = clPath;
    }
    if (router.asPath.includes("/changelog")) {
        prevPath = planPath;
        nextPath = "/";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        children: [
            router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/) ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "path-prev",
                role: "button",
                href: prevPath,
                children: prevText
            }),
            router.asPath.includes("/changelog") ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "path-next",
                role: "button",
                href: nextPath,
                children: nextText
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_platform__WEBPACK_IMPORTED_MODULE_5__/* .PlatformSwitcher */ .Ls, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "languageSelector",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "langChange",
                        children: langChangeText
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        id: "langChange",
                        value: selectedLang,
                        onChange: handleLanguageChange,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "en",
                                children: "English"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "es",
                                children: "Spanish"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "fr",
                                children: "French"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "de",
                                children: "German"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "it",
                                children: "Italian"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "sv",
                                children: "Swedish"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "pt",
                                children: "Portuguese"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleGoClick,
                        children: "Go"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ SearchDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9447);
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(445);
/* harmony import */ var ai_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3845);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, ai_react__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, ai_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";







function SearchDialog() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const { complete , completion , isLoading , error  } = (0,ai_react__WEBPACK_IMPORTED_MODULE_5__.useCompletion)({
        api: "/api/vector-search"
    });
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const down = (e)=>{
            if (e.key === "k" && e.metaKey) {
                setOpen(true);
            }
            if (e.key === "Escape") {
                console.log("esc");
                handleModalToggle();
            }
        };
        document.addEventListener("keydown", down);
        return ()=>document.removeEventListener("keydown", down);
    }, []);
    function handleModalToggle() {
        setOpen(!open);
        setQuery("");
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(query);
        complete(query);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: ()=>setOpen(true),
                className: "text-base flex gap-2 items-center px-4 py-2 z-50 relative   text-slate-500 dark:text-slate-400  hover:text-slate-700 dark:hover:text-slate-300   transition-colors   rounded-md   border border-slate-200 dark:border-slate-500 hover:border-slate-300 dark:hover:border-slate-500   min-w-[300px] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Search, {
                        width: 15
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "border border-l h-5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block ml-4",
                        children: "Search..."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("kbd", {
                        className: "absolute right-3 top-2.5   pointer-events-none inline-flex h-5 select-none items-center gap-1   rounded border border-slate-100 bg-slate-100 px-1.5   font-mono text-[10px] font-medium   text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400   opacity-100 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "⌘"
                            }),
                            "K"
                        ]
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Dialog */ .Vq, {
                open: open,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogContent */ .cZ, {
                    className: "sm:max-w-[850px] max-h-[80vh] overflow-y-auto text-black",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogHeader */ .fK, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogTitle */ .$N, {
                                    children: "OpenAI powered doc search"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogDescription */ .Be, {
                                    children: "Build your own ChatGPT style search with Next.js, OpenAI & Supabase."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    "aria-label": "Close Search",
                                    className: "absolute top-0 right-2 p-2",
                                    onClick: ()=>setOpen(false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.X, {
                                        className: "h-4 w-4 dark:text-gray-100"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid gap-4 py-4 text-slate-700",
                                    children: [
                                        query && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "bg-slate-100 dark:bg-slate-300 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.User, {
                                                            width: 18
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-0.5 font-semibold text-slate-700 dark:text-slate-100",
                                                    children: query
                                                })
                                            ]
                                        }),
                                        isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "animate-spin relative flex w-5 h-5 ml-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Loader, {})
                                        }),
                                        error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Frown, {
                                                        width: 18
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-slate-700 dark:text-slate-100",
                                                    children: "Sad news, the search has failed! Please try again."
                                                })
                                            ]
                                        }),
                                        completion && !error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-4 dark:text-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Wand, {
                                                        width: 18,
                                                        className: "text-white"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "font-semibold",
                                                    children: "Answer:"
                                                }),
                                                completion
                                            ]
                                        }) : null,
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                                    placeholder: "Ask a question...",
                                                    name: "search",
                                                    value: query,
                                                    onChange: (e)=>setQuery(e.target.value),
                                                    className: "col-span-3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.CornerDownLeft, {
                                                    className: `absolute top-3 right-5 h-4 w-4 text-gray-300 transition-opacity ${query ? "opacity-100" : "opacity-0"}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-100",
                                            children: [
                                                "Or try:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "px-1.5 py-0.5   bg-slate-50 dark:bg-gray-500   hover:bg-slate-100 dark:hover:bg-gray-600   rounded border border-slate-200 dark:border-slate-600   transition-colors",
                                                    onClick: (_)=>setQuery("What are embeddings?"),
                                                    children: "What are embeddings?"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__/* .DialogFooter */ .cN, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                        type: "submit",
                                        className: "bg-red-500",
                                        children: "Ask"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2612);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_languageMappings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6288);
// components/TOCNav.jsx



 // translation dictionary
function TOCNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || "en";
    // Let's define our default path/text sets
    const { homePath , homeText , homeTitleText , specsPath , specsText , specsTitleText , instPath , instText , instTitleText , gcPath , gcText , gcTitleText , wwsPath , wwsText , wwsTitleText , dashPath , dashText , dashTitleText , faqPath , faqText , faqTitleText , planPath , planText , planTitleText , clPath , clText , clTitleText  } = _components_languageMappings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z[currentLang];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "navbar navbar-default",
        role: "navigation",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row flex-nowrap",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-auto px-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "sidebar",
                    className: "collapse show collapse-horizontal",
                    "aria-expanded": "true",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "navbar-nav mr-auto mt-2 mt-lg-0",
                        id: "navList",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: homePath,
                                    children: homeText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: specsPath,
                                    children: specsText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: instPath,
                                    children: instText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: gcPath,
                                    children: gcText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: wwsPath,
                                    children: wwsText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: dashPath,
                                    children: dashText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: faqPath,
                                    children: faqText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: planPath,
                                    children: planText
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: clPath,
                                    children: clText
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOCNav);


/***/ }),

/***/ 6288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// languageMappings.js
const languageMappings = {
    en: {
        homePath: "/en",
        homeText: "Welcome",
        homeTitleText: "Welcome - Remote Incident Manager Documentation",
        specsPath: "/en/systemspecs",
        specsText: "System Requirements",
        specsTitleText: "System Requirements - Remote Incident Manager Documentation",
        instPath: "/en/installation",
        instText: "Installation",
        instTitleText: "Installation - Remote Incident Manager Documentation",
        gcPath: "/en/gettingconnected",
        gcText: "Getting Connected",
        gcTitleText: "Getting Connected - Remote Incident Manager Documentation",
        wwsPath: "/en/workingwithsessions",
        wwsText: "Working within a Session",
        wwsTitleText: "Working within a Session - Remote Incident Manager Documentation",
        dashPath: "/en/dashboard",
        dashText: "The Rim Management Dashboard",
        dashTitleText: "The RIM Management Dashboard - Remote Incident Manager Documentation",
        faqPath: "/en/faq",
        faqText: "Frequently Asked Questions",
        faqTitleText: "Frequently Asked Questions - Remote Incident Manager Documentation",
        planPath: "/en/plans",
        planText: "Plans and Purchasing",
        planTitleText: "Plans and Purchasing - Remote Incident Manager Documentation",
        clPath: "/en/changelog",
        clText: "Change Log",
        clTitleText: "Change Log - Remote Incident Manager Documentation",
        langChangeText: "Language:"
    },
    es: {
        homePath: "/es",
        homeText: "Bienvenido",
        homeTitleText: "Bienvenido - Documentaci\xf3n de Remote Incident Manager",
        specsPath: "/es/systemspecs",
        specsText: "Requisitos del sistema",
        specsTitleText: "Requisitos del sistema - Documentaci\xf3n de Remote Incident Manager",
        instPath: "/es/installation",
        instText: "Instalaci\xf3n",
        instTitleText: "Instalaci\xf3n - Documentaci\xf3n de Remote Incident Manager",
        gcPath: "/es/gettingconnected",
        gcText: "Conectarse",
        gcTitleText: "Conectarse - Documentaci\xf3n de Remote Incident Manager",
        wwsPath: "/es/workingwithsessions",
        wwsText: "Trabajar en una sesi\xf3n",
        wwsTitleText: "Trabajar dentro de una sesi\xf3n - Documentaci\xf3n de Remote Incident Manager",
        dashPath: "/es/dashboard",
        dashText: "El cuadro de mandos de la gesti\xf3n de llantas",
        dashTitleText: "The RIM Management Cuadro de mandos - Documentaci\xf3n de Remote Incident Manager",
        faqPath: "/es/faq",
        faqText: "Preguntas frecuentes",
        faqTitleText: "Preguntas frecuentes - Documentaci\xf3n de Remote Incident Manager",
        planPath: "/es/plans",
        planText: "Planes y compras",
        planTitleText: "Planes y compras - Documentaci\xf3n de Remote Incident Manager",
        clPath: "/es/changelog",
        clText: "Registro de cambios",
        clTitleText: "Registro de cambios - Documentation de Remote Incident Manager",
        langChangeText: "Idioma:"
    },
    fr: {
        homePath: "/fr",
        homeText: "Bienvenue",
        homeTitleText: "Bienvenue - Documentation sur le gestionnaire d'incidents \xe0 distance",
        specsPath: "/fr/systemspecs",
        specsText: "Configuration requise",
        specsTitleText: "Configuration requise - Documentation sur le gestionnaire d'incidents \xe0 distance",
        instPath: "/fr/installation",
        instText: "Installation",
        instTitleText: "Installation - Remote Incident Manager Documentation",
        gcPath: "/fr/gettingconnected",
        gcText: "Se connecter",
        gcTitleText: "Se connecter - Documentation sur le gestionnaire d'incidents \xe0 distance",
        wwsPath: "/fr/workingwithsessions",
        wwsText: "Travailler au sein d'une session",
        wwsTitleText: "Travailler dans une session - Remote Incident Manager Documentation",
        dashPath: "/fr/dashboard",
        dashText: "Le tableau de bord de la gestion des rives",
        dashTitleText: "Le tableau de bord de gestion du RIM - Documentation sur le gestionnaire d'incidents \xe0 distance",
        faqPath: "/fr/faq",
        faqText: "Questions fr\xe9quemment pos\xe9es",
        faqTitleText: "Foire aux questions - Documentation sur le gestionnaire d'incidents \xe0 distance",
        planPath: "/fr/plans",
        planText: "Plans et achats",
        planTitleText: "Plans et achats - Documentation du gestionnaire d'incidents \xe0 distance",
        clPath: "/fr/changelog",
        clText: "Journal des modifications",
        clTitleText: "Change Log - Remote Incident Manager Documentation",
        langChangeText: "Langue:"
    },
    it: {
        homePath: "/it",
        homeText: "Benvenuti",
        homeTitleText: "Benvenuti - Documentazione di Remote Incident Manager",
        specsPath: "/it/systemspecs",
        specsText: "Requisiti di sistema",
        specsTitleText: "Requisiti di sistema - Documentazione di Remote Incident Manager",
        instPath: "/it/installation",
        instText: "Installazione",
        instTitleText: "Installazione - Documentazione di Remote Incident Manager",
        gcPath: "/it/gettingconnected",
        gcText: "Connettersi",
        gcTitleText: "Connettersi - Documentazione di Remote Incident Manager",
        wwsPath: "/it/workingwithsessions",
        wwsText: "Lavorare all'interno di una sessione",
        wwsTitleText: "Lavorare all'interno di una sessione - Documentazione di Remote Incident Manager",
        dashPath: "/it/dashboard",
        dashText: "Il cruscotto di gestione del cerchio",
        dashTitleText: "Il cruscotto di gestione RIM - Documentazione su Remote Incident Manager",
        faqPath: "/it/faq",
        faqText: "Domande frequenti",
        faqTitleText: "Domande frequenti - Documentazione di Remote Incident Manager",
        planPath: "/it/plans",
        planText: "Piani e acquisti",
        planTitleText: "Piani e acquisti - Documentazione di Remote Incident Manager",
        clPath: "/it/changelog",
        clText: "Registro delle modifiche",
        clTitleText: "Registro delle modifiche - Documentazione di Remote Incident Manager",
        langChangeText: "Lingua:"
    },
    de: {
        homePath: "/de",
        homeText: "Willkommen",
        homeTitleText: "Willkommen - Remote Incident Manager Dokumentation",
        specsPath: "/de/systemspecs",
        specsText: "Systemanforderungen",
        specsTitleText: "Systemanforderungen - Remote Incident Manager Dokumentation",
        instPath: "/de/installation",
        instText: "Einrichtung",
        instTitleText: "Einrichtung - Remote Incident Manager Dokumentation",
        gcPath: "/de/gettingconnected",
        gcText: "Verbunden werden",
        gcTitleText: "Verbindung herstellen - Remote Incident Manager Dokumentation",
        wwsPath: "/de/workingwithsessions",
        wwsText: "Arbeiten innerhalb einer Sitzung",
        wwsTitleText: "Arbeiten innerhalb einer Sitzung - Remote Incident Manager Dokumentation",
        dashPath: "/de/dashboard",
        dashText: "Das Rim Management Dashboard",
        dashTitleText: "Das RIM Management Dashboard - Remote Incident Manager Dokumentation",
        faqPath: "/de/faq",
        faqText: "H\xe4ufig gestellte Fragen",
        faqTitleText: "H\xe4ufig gestellte Fragen - Remote Incident Manager Dokumentation",
        planPath: "/de/plans",
        planText: "Planen und Kaufeng",
        planTitleText: "Pl\xe4ne und Beschaffung - Remote Incident Manager Dokumentation",
        clPath: "/de/changelog",
        clText: "\xc4nderungsprotokoll",
        clTitleText: "Change Log - Remote Incident Manager Dokumentation",
        langChangeText: "Sprache:"
    },
    sv: {
        homePath: "/sv",
        homeText: "V\xe4lkommen till",
        homeTitleText: "V\xe4lkommen - Dokumentation f\xf6r Remote Incident Manager",
        specsPath: "/sv/systemspecs",
        specsText: "Systemkrav",
        specsTitleText: "Systemkrav - Dokumentation f\xf6r Remote Incident Manager",
        instPath: "/sv/installation",
        instText: "Installation",
        instTitleText: "Installation - Dokumentation f\xf6r Remote Incident Manager",
        gcPath: "/sv/gettingconnected",
        gcText: "Att bli uppkopplad",
        gcTitleText: "Ansluta - Dokumentation f\xf6r Remote Incident Manager",
        wwsPath: "/sv/workingwithsessions",
        wwsText: "Arbeta inom en session",
        wwsTitleText: "Arbeta inom en session - Dokumentation f\xf6r Remote Incident Manager",
        dashPath: "/sv/dashboard",
        dashText: "Instrumentpanelen f\xf6r Rim Management",
        dashTitleText: "RIM Management Dashboard - Dokumentation f\xf6r Remote Incident Manager",
        faqPath: "/sv/faq",
        faqText: "Vanliga fr\xe5gor och svar",
        faqTitleText: "Vanliga fr\xe5gor - Dokumentation f\xf6r Remote Incident Manager",
        planPath: "/sv/plans",
        planText: "Planer och ink\xf6p",
        planTitleText: "Planer och ink\xf6p - Dokumentation f\xf6r Remote Incident Manager",
        clPath: "/sv/changelog",
        clText: "\xc4ndra logg",
        clTitleText: "\xc4ndringslogg - Dokumentation f\xf6r hantering av fj\xe4rrincidenter",
        langChangeText: "Spr\xe5k:"
    },
    pt: {
        homePath: "/pt",
        homeText: "Bem-vindo",
        homeTitleText: "Bem-vindo - Documenta\xe7\xe3o do Remote Incident Manager",
        specsPath: "/pt/systemspecs",
        specsText: "Requisitos do sistema",
        specsTitleText: "Requisitos do sistema - Documenta\xe7\xe3o do Remote Incident Manager",
        instPath: "/pt/installation",
        instText: "Instala\xe7\xe3o",
        instTitleText: "Instala\xe7\xe3o - Documenta\xe7\xe3o do Remote Incident Manager",
        gcPath: "/pt/gettingconnected",
        gcText: "Como se conectar",
        gcTitleText: "Como se conectar - Documenta\xe7\xe3o do Remote Incident Manager",
        wwsPath: "/pt/workingwithsessions",
        wwsText: "Trabalhando em uma sess\xe3o",
        wwsTitleText: "Trabalhando em uma sess\xe3o - Documenta\xe7\xe3o do Remote Incident Manager",
        dashPath: "/pt/dashboard",
        dashText: "O painel de controle do Rim Management",
        dashTitleText: "Painel de gerenciamento do RIM - Documenta\xe7\xe3o do Remote Incident Manager",
        faqPath: "/pt/faq",
        faqText: "Perguntas frequentes",
        faqTitleText: "Perguntas frequentes - Documenta\xe7\xe3o do Remote Incident Manager",
        planPath: "/pt/plans",
        planText: "Planos e compras",
        planTitleText: "Planos e compras - Documenta\xe7\xe3o do Remote Incident Manager",
        clPath: "/pt/changelog",
        clText: "Registro de altera\xe7\xf5es",
        clTitleText: "Registro de altera\xe7\xf5es - Documenta\xe7\xe3o do Remote Incident Manager",
        langChangeText: "Idioma:"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageMappings);


/***/ }),

/***/ 9:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ DialogTitle),
/* harmony export */   "Be": () => (/* binding */ DialogDescription),
/* harmony export */   "Vq": () => (/* binding */ Dialog),
/* harmony export */   "cN": () => (/* binding */ DialogFooter),
/* harmony export */   "cZ": () => (/* binding */ DialogContent),
/* harmony export */   "fK": () => (/* binding */ DialogHeader)
/* harmony export */ });
/* unused harmony export DialogTrigger */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3363);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_3__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Root;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Trigger;
const DialogPortal = ({ className , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Portal, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
            children: children
        })
    });
DialogPortal.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Portal.displayName;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100", className),
        ...props,
        ref: ref
    }));
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay.displayName;
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DialogOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 sm:max-w-lg sm:rounded-lg", "dark:bg-slate-900", className),
                ...props,
                children: children
            })
        ]
    }));
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
const DialogHeader = ({ className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-2 text-center sm:text-left text-slate-900", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold text-slate-900", "dark:text-slate-50", className),
        ...props
    }));
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title.displayName;
const DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-slate-400", "dark:text-slate-400", className),
        ...props
    }));
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description.displayName;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(249);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1934);
/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_general_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(922);
/* harmony import */ var _components_TOCNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _components_FooterNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3994);
/* harmony import */ var _components_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3961);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_languageMappings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SearchDialog__WEBPACK_IMPORTED_MODULE_4__, _components_FooterNav__WEBPACK_IMPORTED_MODULE_6__, _components_platform__WEBPACK_IMPORTED_MODULE_7__]);
([_components_SearchDialog__WEBPACK_IMPORTED_MODULE_4__, _components_FooterNav__WEBPACK_IMPORTED_MODULE_6__, _components_platform__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'





// @ts-ignore  

// @ts-ignore  



 // translation dictionary
// import { MDXLayout } from '@/components/MDXLayout';
//function app({ Component, pageProps }: AppProps) {
function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || "en";
    // Let's define our default path/text sets
    const { homePath , homeText , homeTitleText , specsPath , specsText , specsTitleText , instPath , instText , instTitleText , gcPath , gcText , gcTitleText , wwsPath , wwsText , wwsTitleText , dashPath , dashText , dashTitleText , faqPath , faqText , faqTitleText , planPath , planText , planTitleText , clPath , clText , clTitleText  } = _components_languageMappings__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[currentLang];
    let titleText = pageProps.frontMatter?.title || "";
    // Let's define our titles per page for when we can't get the frontmatter, or there is none.
    if (!titleText) {
        if (router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/)) {
            titleText = homeTitleText;
        }
        if (router.asPath.includes("/systemspecs")) {
            titleText = specsTitleText;
        }
        if (router.asPath.includes("/installation")) {
            titleText = instTitleText;
        }
        if (router.asPath.includes("/gettingconnected")) {
            titleText = gcTitleText;
        }
        if (router.asPath.includes("/workingwithsessions")) {
            titleText = wwsTitleText;
        }
        if (router.asPath.includes("/dashboard")) {
            titleText = dashTitleText;
        }
        if (router.asPath.includes("/faq")) {
            titleText = faqTitleText;
        }
        if (router.asPath.includes("/plans")) {
            titleText = planTitleText;
        }
        if (router.asPath.includes("/changelog")) {
            titleText = clTitleText;
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_platform__WEBPACK_IMPORTED_MODULE_7__/* .PlatformProvider */ .Pb, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: titleText
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Remote Incident Manager (RIM)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_platform__WEBPACK_IMPORTED_MODULE_7__/* .PlatformSwitcher */ .Ls, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sidebar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TOCNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "search",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchDialog__WEBPACK_IMPORTED_MODULE_4__/* .SearchDialog */ .F, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "col ps-md-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "page-header pt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }),
                                    "console.log(pageProps);"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FooterNav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
} // @ts-ignore  
 //export async function getStaticProps(context) {
 // extract the locale identifier from the URL
 //  const { locale } = context;
 //  return {
 //    props: {
 // pass the translation props to the page component
 // ...(await serverSideTranslations(locale, ['common'])),
 //    },
 //  }
 //}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1934:
/***/ (() => {



/***/ }),

/***/ 3363:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-dialog");

/***/ }),

/***/ 1169:
/***/ ((module) => {

"use strict";
module.exports = require("class-variance-authority");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 5982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3845:
/***/ ((module) => {

"use strict";
module.exports = import("ai/react");;

/***/ }),

/***/ 8097:
/***/ ((module) => {

"use strict";
module.exports = import("tailwind-merge");;

/***/ }),

/***/ 7061:
/***/ ((module) => {

"use strict";
module.exports = import("use-local-storage-state");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3211,3961,7873], () => (__webpack_exec__(7301)));
module.exports = __webpack_exports__;

})();