"use strict";
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const subTap = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    id: "subTap",
    className: "jsx-3890470722",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "jsx-3890470722" + " " + "position",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: router.pathname === "/users/setting/delete" ? `/users/setting/edit` : `/users/saves/qustions`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: "jsx-3890470722",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "jsx-3890470722" + " " + ((router.pathname === `/users/setting/edit` ? "currentTap" : router.pathname === `/users/saves/qustions` ? "currentTap" : "notCurrentTap") || ""),
            children: router.pathname === `/users/setting/edit` ? "Edit" : router.pathname === `/users/setting/delete` ? "Edite" : "Questions"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: router.pathname === "/users/setting/edit" ? "/users/setting/delete" : `/users/saves/ansers`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: "jsx-3890470722",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "jsx-3890470722" + " " + ((router.pathname === `/users/setting/delete` ? "currentTap" : router.pathname === `/users/saves/ansers` ? "currentTap" : "notCurrentTap") || ""),
            children: router.pathname === `/users/setting/edit` ? "Delete" : router.pathname === `/users/setting/delete` ? "Delete" : "Answers"
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3890470722",
      children: [".position.jsx-3890470722{top:2rem;position:-webkit-sticky;position:sticky;float:left;}", "a.jsx-3890470722{color:hsl(210,8%,45%);-webkit-text-decoration:none;text-decoration:none;}", "#subTap.jsx-3890470722{margin-right:20px;}", ".notCurrentTap.jsx-3890470722{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:gray;font-size:18px;margin-right:15px;border-radius:33px;margin-bottom:25px;}", ".currentTap.jsx-3890470722{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;width:100px;height:40px;margin-bottom:25px;font-size:18px;margin-right:15px;border-radius:33px;background-color:hsl(27,90%,55%);}", "@media screen and (max-width:1100px){#subTap.jsx-3890470722{display:none;}}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subTap);

/***/ })

};
;