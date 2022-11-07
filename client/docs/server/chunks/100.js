"use strict";
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 7100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ User_Id_Layout)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/userPageComponents/coreInfo.js






function User() {
  const {
    0: userData,
    1: setUserData
  } = (0,external_react_.useState)({
    userName: ""
  });
  const tapMenuList = ["Profile", "Saves", "Setting"];
  const router = (0,router_.useRouter)();
  const isCurrent = router.pathname === `/users/profile` ? 0 : router.pathname === `/users/saves/qustions` ? 1 : router.pathname === `/users/saves/ansers` ? 1 : router.pathname === `/users/setting/edit` ? 2 : router.pathname === `/users/setting/delete` ? 2 : null;
  (0,external_react_.useEffect)(() => {
    const headers = new Headers({
      "Content-Type": "text/xml"
    });
    fetch(`/user/${localStorage.getItem("user")}`, {
      headers
    }).then(res => res.json()).then(ansers => {
      console.log(ansers);
      setUserData(ansers.data);
    }).catch(err => console.log(err));
  }, []);
  console.log(userData);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "mainbar-full",
    className: "jsx-2805773313",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "coreprofile",
      className: "jsx-2805773313",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "name-photo",
        className: "jsx-2805773313",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "https://cdn-icons-png.flaticon.com/512/146/146007.png",
          width: "96px",
          height: "96px",
          className: "jsx-2805773313"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2805773313",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "userName",
            className: "jsx-2805773313",
            children: userData.userName
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2805773313" + " " + "margin-L",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "jsx-2805773313" + " " + "subimfo",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "jsx-2805773313" + " " + "d-flex",
                children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "18",
                  height: "18",
                  className: "jsx-2805773313" + " " + "d-flex flex_center",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z",
                    className: "jsx-2805773313"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2805773313" + " " + "d-flex flex_center",
                  children: "Member for 6 days"
                })]
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "tapContainer",
      className: "jsx-2805773313",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "tap",
        className: "jsx-2805773313",
        children: tapMenuList.map((name, idx) => {
          return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: idx === 0 ? `/users/profile` : idx === 1 ? `/users/saves/qustions` : idx === 2 ? `/users/setting/edit` : null,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              idx: idx,
              className: "jsx-2805773313" + " " + ((isCurrent === idx ? "currentTap" : "notCurrentTap") || ""),
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-2805773313",
                children: name
              })
            })
          }, idx);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2805773313",
      children: [".container.jsx-2805773313{width:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;position:relative;margin:0;text-align:left;}", ".content.jsx-2805773313{width:50%;min-width:515px;padding:24px;padding-bottom:0;margin:0;border-radius:0;border-top-width:0;border-bottom-width:0;}", "img.jsx-2805773313{margin:10px;}", ".d-ib.jsx-2805773313{display:inline-block;}", ".fw-normal.jsx-2805773313{font-weight:400 !important;font-size:15px;}", ".fc-light.jsx-2805773313{color:hsl(210,8%,45%);font-size:15px;}", "a.jsx-2805773313{color:hsl(210,8%,45%);-webkit-text-decoration:none;text-decoration:none;}", ".jc-space-between.jsx-2805773313{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;}", ".ai-center.jsx-2805773313{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}", ".margin-T-B.jsx-2805773313{margin-top:5px;margin-bottom:15px;}", ".m-tb6.jsx-2805773313{margin-top:6px;margin-bottom:6px;}", ".margin-T.jsx-2805773313{margin-top:18px;}", ".margin-B.jsx-2805773313{margin-bottom:24px;}", ".margin-L.jsx-2805773313{margin-left:4px;}", ".icon.jsx-2805773313{margin-right:8px;}", ".ta-center.jsx-2805773313{text-align:center !important;font-size:1.61538462rem;margin-bottom:24px;margin-left:auto;margin-right:auto;}", ".svg-icon.jsx-2805773313{vertical-align:bottom;}", ".fd-column.jsx-2805773313{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".d-flex.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".flex_center.jsx-2805773313{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#mainbar-full.jsx-2805773313{width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;}", "#coreprofile.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;margin-bottom:16px;}", ".lable.jsx-2805773313{margin:4px;margin-right:0;margin-left:0;font-size:1.15384615rem;font-family:inherit;color:black;font-weight:600;padding:0;}", "#name-photo.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-8px;}", "#userName.jsx-2805773313{margin:4px;font-size:2.61538461rem;margin-bottom:12px;}", ".subimfo.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;margin-left:4;margin:0;padding:0;color:hsl(210,8%,45%);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", "#editProfile.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:120px;height:40px;border:1px solid hsl(210,8%,65%);border-radius:3px;}", "#editProfile.jsx-2805773313:hover{background-color:rgb(225,225,225);}", "#tapContainer.jsx-2805773313{margin-top:30px;height:40px;width:300px;}", "#tap.jsx-2805773313{display:grid;height:100%;grid-template-columns:33% 33% 33%;}", ".notCurrentTap.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:gray;font-size:18px;margin-right:15px;border-radius:33px;}", ".currentTap.jsx-2805773313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:18px;margin-right:15px;border-radius:33px;background-color:hsl(27,90%,55%);}"]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/users/User_Id_Layout.js





const userIdLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-4062630509" + " " + "test",
    children: [/*#__PURE__*/jsx_runtime_.jsx(User, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-4062630509",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4062630509",
      children: [".test.jsx-4062630509{margin:0;padding:0;margin-top:2rem;margin-left:3rem;}"]
    })]
  });
};

/* harmony default export */ const User_Id_Layout = (userIdLayout);

/***/ })

};
;