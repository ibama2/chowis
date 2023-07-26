(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 4575:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Products_grid__JuzOY",
	"row": "Products_row__vu88G",
	"description": "Products_description__hDJjZ",
	"isMobile": "Products_isMobile__uBc1k",
	"notMobile": "Products_notMobile__R4qq2"
};


/***/ }),

/***/ 6445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/products/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (Product),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./layout/index.js
var layout = __webpack_require__(718);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./lib/util.js
// lib 工具函数 动态路由


const directory = external_path_default().join(process.cwd(), "productData");
function getProductDatas() {
    // Get file names under /productData
    const fileNames = external_fs_default().readdirSync(directory);
    const fileName = fileNames[0];
    const fullPath = external_path_default().join(directory, fileName);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    const productDatas = JSON.parse(fileContents).products;
    // Combine the data with the id
    return productDatas;
}
// 动态路由
function getAllProductIds() {
    const fileNames = external_fs_default().readdirSync(directory);
    const fileName = fileNames[0];
    const fullPath = external_path_default().join(directory, fileName);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    const productDatas = JSON.parse(fileContents).products;
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 1
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return productDatas.map((product)=>{
        /*
            Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the 
            params key and contain an object with the 
            id key (because we’re using 
            [id] in the file name). Otherwise, getStaticPaths will fail.
        */ return {
            params: {
                id: product.id
            }
        };
    });
}
// fetch necessary data to render the post with the given id.
function getProductData(id) {
    const productDatas = getProductDatas();
    // Combine the data with the id
    return {
        id,
        productData: productDatas.filter((product)=>product.id == id)[0]
    };
}

// EXTERNAL MODULE: ./styles/Products.module.css
var Products_module = __webpack_require__(4575);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
;// CONCATENATED MODULE: ./pages/products/[id].js




async function getStaticPaths() {
    const paths = getAllProductIds();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    // 给每一个id请求一下它的数据
    const { productData } = await getProductData(params.id);
    return {
        props: {
            productData
        }
    };
}
function Product({ productData }) {
    return /*#__PURE__*/ jsx_runtime.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Products_module_default()).grid,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (Products_module_default()).row,
                    style: {
                        backgroundImage: `url(${productData.imgUrl})`
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Products_module_default()).description + " " + (Products_module_default()).notMobile,
                        children: productData?.descriptions.map((des)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: des.icon,
                                        alt: des.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: des.description
                                    })
                                ]
                            }, des.id))
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (Products_module_default()).description + " " + (Products_module_default()).isMobile,
                    children: productData?.descriptions.map((des)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: des.icon,
                                    alt: des.description
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: des.description
                                })
                            ]
                        }, des.id))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts%2F%5Bid%5D&absolutePagePath=private-next-pages%2Fproducts%2F%5Bid%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fproducts_2F_5Bid_5D_absolutePagePath_private_next_pages_2Fproducts_2F_5Bid_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products/[id]","pathname":"/products/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _id_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

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

/***/ 8854:
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

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [869,718], () => (__webpack_exec__(6445)));
module.exports = __webpack_exports__;

})();