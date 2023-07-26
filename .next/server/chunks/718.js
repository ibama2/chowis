exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 7340:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf",
	"logo": "Layout_logo__dBXl_",
	"active": "Layout_active__VNpgM"
};


/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7340);
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5__);






function Layout({ children }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { asPath, query } = router;
    const { id } = query;
    const goHome = ()=>router.push("/");
    const goPolicy = ()=>router.push("/policy");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-ad11f088053e9fb6" + " " + ((_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().container) || ""),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: "jsx-ad11f088053e9fb6",
                        children: "昭盈偲"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/images/headIcon.png",
                        className: "jsx-ad11f088053e9fb6"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "jsx-ad11f088053e9fb6" + " " + "navbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: goHome,
                        src: "/images/chowislogo.webp",
                        fetchpriority: "high",
                        className: "jsx-ad11f088053e9fb6" + " " + ((_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo) || "")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "jsx-ad11f088053e9fb6" + " " + "nav-links",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                id: "checkbox_toggle",
                                className: "jsx-ad11f088053e9fb6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "checkbox_toggle",
                                className: "jsx-ad11f088053e9fb6" + " " + "hamburger",
                                children: "☰"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-ad11f088053e9fb6" + " " + "menu",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-ad11f088053e9fb6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: asPath == "/" ? (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : "",
                                            href: "/",
                                            children: "首页"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "jsx-ad11f088053e9fb6" + " " + "products",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: "jsx-ad11f088053e9fb6" + " " + ((asPath.includes("/products") ? (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : "") || ""),
                                                children: "产品"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "jsx-ad11f088053e9fb6" + " " + "dropdown",
                                                children: [
                                                    {
                                                        id: "1",
                                                        name: "DermoPrime"
                                                    },
                                                    {
                                                        id: "2",
                                                        name: "DermoSmart"
                                                    },
                                                    {
                                                        id: "3",
                                                        name: "DermoPico"
                                                    },
                                                    {
                                                        id: "4",
                                                        name: "mySkin\xb7Hair KIOSK"
                                                    },
                                                    {
                                                        id: "5",
                                                        name: "mySkin FAIN"
                                                    },
                                                    {
                                                        id: "6",
                                                        name: "DermoChoice"
                                                    }
                                                ].map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "jsx-ad11f088053e9fb6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            className: id == product.id ? (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : "",
                                                            href: `/products/${product.id}`,
                                                            children: product.name
                                                        })
                                                    }, product.id))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-ad11f088053e9fb6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: asPath == "/contact" ? (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : "",
                                            href: "/contact",
                                            children: "联系我们"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-ad11f088053e9fb6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: asPath == "/policy" ? (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : "",
                                            href: "/policy",
                                            children: "隐私协议"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "jsx-ad11f088053e9fb6" + " " + "products",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: "jsx-ad11f088053e9fb6",
                                                children: "语言"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "jsx-ad11f088053e9fb6" + " " + "dropdown offset",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "jsx-ad11f088053e9fb6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.chowis.com",
                                                            className: "jsx-ad11f088053e9fb6",
                                                            children: "英文"
                                                        })
                                                    }, "eng"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "jsx-ad11f088053e9fb6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.chowis.com/zh",
                                                            className: "jsx-ad11f088053e9fb6",
                                                            children: "中文"
                                                        })
                                                    }, "chn")
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, router.asPath)
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "jsx-ad11f088053e9fb6",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                onClick: goPolicy,
                className: "jsx-ad11f088053e9fb6",
                children: "Copyright \xa9 2022 Chowis Co., Ltd. All rights reserved."
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7cf39910b085522e",
                children: "footer.jsx-ad11f088053e9fb6{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#002e5d;color:white;font-size:14px;padding:.8rem}footer.jsx-ad11f088053e9fb6:hover{cursor:pointer}.navbar.jsx-ad11f088053e9fb6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px;width:100%}.menu.jsx-ad11f088053e9fb6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:1em;font-size:18px}.menu.jsx-ad11f088053e9fb6 li.jsx-ad11f088053e9fb6{padding:5px 14px}.products.jsx-ad11f088053e9fb6{position:relative}.dropdown.jsx-ad11f088053e9fb6{background-color:rgb(246,246,246);padding:1em 0;position:absolute;display:none;top:35px}.offset.jsx-ad11f088053e9fb6{right:0;text-align:center}.dropdown.jsx-ad11f088053e9fb6 li.jsx-ad11f088053e9fb6+li.jsx-ad11f088053e9fb6{margin-top:10px}.dropdown.jsx-ad11f088053e9fb6 li.jsx-ad11f088053e9fb6{padding:.5em;width:8em}.products.jsx-ad11f088053e9fb6:hover .dropdown.jsx-ad11f088053e9fb6{display:block}input[type=checkbox].jsx-ad11f088053e9fb6{display:none}.hamburger.jsx-ad11f088053e9fb6{display:none;font-size:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(max-width:768px){footer.jsx-ad11f088053e9fb6{height:48px;font-size:.8rem}.navbar.jsx-ad11f088053e9fb6{padding:10px}.navbar.jsx-ad11f088053e9fb6 img.jsx-ad11f088053e9fb6{height:20px}.hamburger.jsx-ad11f088053e9fb6{font-size:20px}.menu.jsx-ad11f088053e9fb6{display:none;position:absolute;background-color:#e2e2e2f5;right:0;left:0;text-align:center;padding:16px 0}.menu.jsx-ad11f088053e9fb6 li.jsx-ad11f088053e9fb6:hover{display:inline-block;-webkit-transition:.3s ease;-moz-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease}.menu.jsx-ad11f088053e9fb6 li.jsx-ad11f088053e9fb6+li.jsx-ad11f088053e9fb6{margin-top:12px}input[type=checkbox].jsx-ad11f088053e9fb6:checked~.menu.jsx-ad11f088053e9fb6{display:block}.hamburger.jsx-ad11f088053e9fb6{display:block}.dropdown.jsx-ad11f088053e9fb6{left:50%;top:40px;-webkit-transform:translatex(5%);-moz-transform:translatex(5%);-ms-transform:translatex(5%);-o-transform:translatex(5%);transform:translatex(5%)}}main.jsx-ad11f088053e9fb6{background-color:#f6f6f6;width:100%;padding:0 0 1rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4770061ef9331f0a",
                children: "*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}a{text-decoration:none;color:rgb(40,26,57);font-weight:400}a:hover{color:rgb(29,103,205);-webkit-transition:.3s ease;-moz-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease}li{list-style:none}"
            })
        ]
    });
}


/***/ })

};
;