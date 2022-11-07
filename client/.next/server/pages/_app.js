"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,840];
exports.modules = {

/***/ 8462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header2.js






const Header2 = () => {
  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return /*#__PURE__*/_jsx("div", {
    className: "header",
    children: /*#__PURE__*/_jsx("header", {
      children: /*#__PURE__*/_jsxs("nav", {
        className: "jsx-4068127630",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "jsx-4068127630" + " " + "grid",
          children: [/*#__PURE__*/_jsx("li", {
            className: "jsx-4068127630",
            children: /*#__PURE__*/_jsx("a", {
              href: "/",
              className: "jsx-4068127630",
              children: /*#__PURE__*/_jsx(Image, {
                src: "/images/s.png",
                alt: "stackoverflow",
                width: "150",
                height: "30"
              })
            })
          }), /*#__PURE__*/_jsx("li", {
            className: "jsx-4068127630",
            children: /*#__PURE__*/_jsx("a", {
              href: "",
              className: "jsx-4068127630",
              children: /*#__PURE__*/_jsx("input", {
                type: "text",
                placeholder: "  \uD83D\uDD0D Search...",
                onClick: "",
                className: "jsx-4068127630"
              })
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "jsx-4068127630" + " " + "btn2",
            children: [/*#__PURE__*/_jsx("a", {
              href: "/users/profile",
              className: "jsx-4068127630",
              children: /*#__PURE__*/_jsx("img", {
                src: `https://picsum.photos/seed/picsum/200/200`,
                alt: "image",
                width: "27",
                height: "27",
                className: "jsx-4068127630" + " " + "image"
              })
            }), /*#__PURE__*/_jsx("li", {
              className: "jsx-4068127630",
              children: /*#__PURE__*/_jsx("a", {
                href: "/",
                className: "jsx-4068127630",
                children: /*#__PURE__*/_jsx("button", {
                  onClick: onClickLogOut,
                  className: "jsx-4068127630" + " " + "logout",
                  children: "Log out"
                })
              })
            })]
          })]
        }), /*#__PURE__*/_jsx(_JSXStyle, {
          id: "4068127630",
          children: [".grid.jsx-4068127630{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;min-width:1380px;width:100%;grid-template-columns:25% 50% 25%;}", ".logout.jsx-4068127630{cursor:pointer;background:rgb(218,232,241);color:rgb(45,95,139);padding:7px 12px 7px 12px;border:1px solid rgb(158,190,214);border-radius:3px;box-shadow:0.5px black;font-size:10px;margin-left:10px;}", ".logout.jsx-4068127630:hover{background:rgb(164,201,229);color:rgb(19,60,92);border:1px solid rgb(83,138,179);}", "input.jsx-4068127630{width:100%;min-width:200px;height:25px;font-size:13px;margin-left:60px;margin-right:50px;}", "header.jsx-4068127630{background:rgb(246,248,247);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0px 80.5px 0px 80.5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:-webkit-sticky;position:sticky;top:0;}", "ul.jsx-4068127630{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "li.jsx-4068127630{display:inline-block;}", "nav.jsx-4068127630{background:rgb(246,248,247);}", "@media screen and (max-width:760px){.divbar__menu.jsx-4068127630{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input.jsx-4068127630{width:800px;}input.jsx-4068127630{display:none;}}"]
        })]
      })
    })
  });
};

/* harmony default export */ const components_Header2 = ((/* unused pure expression or super */ null && (Header2)));
;// CONCATENATED MODULE: ./components/Header.js







function Header() {
  const {
    0: login,
    1: setLogin
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3349892717" + " " + "center border-B start",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3349892717" + " " + "grid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3349892717" + " " + "center",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/",
            className: "jsx-3349892717",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: "/images/s.png",
              alt: "stackoverflow",
              width: "150",
              height: "30"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3349892717" + " " + "center w100",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            placeholder: "  \uD83D\uDD0D Search...",
            className: "jsx-3349892717"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3349892717" + " " + "center",
          children: !login ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/users/login",
              className: "jsx-3349892717",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "jsx-3349892717" + " " + "login",
                children: "Log in"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/users/signup",
              className: "jsx-3349892717",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "jsx-3349892717" + " " + "signup",
                children: "Sign up"
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3349892717" + " " + "person",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `https://picsum.photos/seed/picsum/200/200`,
                alt: "image",
                className: "jsx-3349892717" + " " + "people"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/",
              className: "jsx-3349892717",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                onClick: onClickLogOut,
                className: "jsx-3349892717" + " " + "logout",
                children: "Log out"
              })
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "3349892717",
        children: [".logout.jsx-3349892717{cursor:pointer;background:rgb(218,232,241);color:rgb(45,95,139);padding:7px 12px 7px 12px;border:1px solid rgb(158,190,214);border-radius:3px;box-shadow:0.5px black;font-size:10px;margin-left:10px;}", ".logout.jsx-3349892717:hover{background:rgb(164,201,229);color:rgb(19,60,92);border:1px solid rgb(83,138,179);}", ".people.jsx-3349892717{width:100%;height:100%;}", ".person.jsx-3349892717{width:27px;height:27px;}", ".border-B.jsx-3349892717{box-shadow:1px 1px 10px 1px rgb(228,228,228);}", ".modal.jsx-3349892717{background:white;border:1px solid grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", ".div.jsx-3349892717{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".divbar__menu.jsx-3349892717{-webkit-flex-direction:center;-ms-flex-direction:center;flex-direction:center;}", ".grid.jsx-3349892717{display:grid;min-width:1380px;width:70%;grid-template-columns:25% 50% 25%;}", ".w100.jsx-3349892717{width:100%;}", "button.jsx-3349892717{width:60px;}", ".center.jsx-3349892717{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "Image.jsx-3349892717:hover{background:rgb(221,224,227);}", "input.jsx-3349892717:focus{border-color:#0982f0;}", ".login.jsx-3349892717{cursor:pointer;background:rgb(218,232,241);color:rgb(45,95,139);padding:7px 12px 7px 12px;border:1px solid rgb(158,190,214);border-radius:3px;box-shadow:0.5px black;font-size:10px;margin-right:5px;}", ".login.jsx-3349892717:hover{background:rgb(164,201,229);color:rgb(19,60,92);border:1px solid rgb(83,138,179);}", ".signup.jsx-3349892717{cursor:pointer;background:rgb(19,127,254);color:rgb(255,255,255);padding:8px 15px 8px 15px;border:1px solid rgb(158,190,214);border-radius:3px;box-shadow:0.5px black;font-size:10px;width:75px;height:28px;}", ".signup.jsx-3349892717:hover{background:rgb(10,93,193);color:rgb(255,255,255);border:1px solid rgb(0,81,190);}", "input.jsx-3349892717{width:100%;min-width:200px;height:25px;font-size:13px;margin-left:60px;margin-right:50px;}", "header.jsx-3349892717{background:rgb(246,248,247);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0px 80.5px 0px 80.5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:-webkit-sticky;position:sticky;top:0;}", "div.jsx-3349892717{background:rgb(246,248,247);list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;height:3.2rem;}", "@media screen and (max-width:760px){.divbar__menu.jsx-3349892717{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input.jsx-3349892717{width:800px;}input.jsx-3349892717{display:none;}}"]
      })]
    })
  });
}
;
;// CONCATENATED MODULE: ./components/Footer.js





const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-4284086280",
    children: [/*#__PURE__*/jsx_runtime_.jsx("footer", {
      id: "footer",
      role: "contentinfo",
      className: "jsx-4284086280" + " " + "site-footer js-footer",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4284086280" + " " + "site-footer--container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-4284086280" + " " + "site-footer--logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://stackoverflow.com",
            "aria-label": "Stack Overflow",
            className: "jsx-4284086280",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              "aria-hidden": "true",
              width: "32",
              height: "37",
              viewBox: "0 0 32 37",
              className: "jsx-4284086280" + " " + "native svg-icon iconLogoGlyphMd",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M26 33v-9h4v13H0V24h4v9h22Z",
                fill: "#BCBBBB",
                className: "jsx-4284086280"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z",
                fill: "#F48024",
                className: "jsx-4284086280"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: "jsx-4284086280" + " " + "site-footer--nav",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-4284086280" + " " + "group",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-4284086280" + " " + "site-footer--col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "jsx-4284086280" + " " + "-title",
                children: "STACK OVERFLOW"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "jsx-4284086280" + " " + "-list js-primary-footer-links",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Questions"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Help"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-4284086280" + " " + "site-footer--col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "jsx-4284086280" + " " + "-title",
                children: "PRODUCTS"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "jsx-4284086280" + " " + "-list",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Teams"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Advertising"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Collectives"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Talent"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-4284086280" + " " + "site-footer--col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "jsx-4284086280" + " " + "-title",
                children: "COMPANY"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "jsx-4284086280" + " " + "-list",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "About"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Press"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Work Here"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Legal"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Privacy Policy"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Terms of Service"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Contact Us"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Cookie Settings"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280",
                  children: "Cookie Policy"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-4284086280" + " " + "site-footer--col site-footer--categories-nav",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-4284086280",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                  className: "jsx-4284086280" + " " + "-title",
                  children: "STACK EXCHANGE NETWORK"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "jsx-4284086280" + " " + "-list",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Technology"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Culture & recreation"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Life & arts"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Science"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Professional"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Business"
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {
                    className: "jsx-4284086280"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280" + " " + "mt16 md:mt0",
                    children: "API"
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "jsx-4284086280",
                    children: "Data"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-4284086280" + " " + "site-footer--copyright fs-fine md:mt24",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "jsx-4284086280" + " " + "group2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280" + " " + "group3",
                  children: "Blog"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280" + " " + "group3",
                  children: "Facebook"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280" + " " + "group3",
                  children: "Twitter"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280" + " " + "group3",
                  children: "LinkedIn"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "jsx-4284086280" + " " + "group3",
                  children: "Instagram"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "jsx-4284086280" + " " + "md",
                children: ["Site design / logo \xA9 2022 Stack Exchange Inc; user ", /*#__PURE__*/jsx_runtime_.jsx("br", {
                  className: "jsx-4284086280"
                }), "contributions licensed under", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "jsx-4284086280" + " " + "td-underline",
                  children: "CC BY-SA"
                }), ".", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  id: "svnrev",
                  className: "jsx-4284086280",
                  children: "rev\xA02022.10.25.33519"
                })]
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4284086280",
      children: [".md.jsx-4284086280{margin-top:170px;}", ".group3.jsx-4284086280{margin-top:10px;margin-right:10px;}", ".group2.jsx-4284086280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".group.jsx-4284086280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:1264px;margin:0 auto;padding:0px 12px 42px 12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".site-footer--container.jsx-4284086280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:rgb(29,29,31);color:rgb(172,178,183);margin:0;padding-top:1rem;padding-left:1.3rem;border:0;vertical-align:baseline;font-size:12px;bottom:0;width:auto;}", "svg.jsx-4284086280{margin-left:40px;margin-top:10px;}", "ul.jsx-4284086280{list-style:none;padding-left:0;}", "li.jsx-4284086280{margin-top:5px;}", ".site-footer.jsx-4284086280{box-sizing:border-box;}", "h5.jsx-4284086280{font-weight:bold;font-size:15px;}"]
    })]
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/TopQuestion/Seo.js



function Seo() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Stack Overflow - Where Developers Learn, Share, & Build Careers"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers."
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/Stack_Overflow_icon.svg.png"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/SideBar.js





function SideBar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2687223168" + " " + "sidebar",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2687223168" + " " + "home",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        className: "jsx-2687223168",
        children: /*#__PURE__*/jsx_runtime_.jsx("b", {
          className: "jsx-2687223168",
          children: "Home"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-2687223168"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2687223168" + " " + "qusetions",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "../questions/ask",
        className: "jsx-2687223168",
        children: "Qusetions"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2687223168" + " " + "users",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/users/user",
        className: "jsx-2687223168",
        children: "Users"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2687223168" + " " + "mypage",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/users/profile",
        className: "jsx-2687223168",
        children: "My page"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2687223168",
      children: [".sidebar.jsx-2687223168{display:inline-block;height:100vh;width:15rem;position:-webkit-sticky;position:sticky;top:0;left:0;padding-top:3rem;background:rgb(255,255,255);border-right:0.5px solid grey;}", ".sidebar.jsx-2687223168 div.jsx-2687223168{padding:8px;font-size:15px;display:block;}", "a.jsx-2687223168{-webkit-text-decoration-line:none;text-decoration-line:none;color:rgb(64,71,77);padding-left:5rem;}", "a.jsx-2687223168:hover{color:black;}", ".mypage.jsx-2687223168:active,.home.jsx-2687223168:active,.qusetions.jsx-2687223168:active,.tags.jsx-2687223168:active,.users.jsx-2687223168:active{color:black;background:rgb(237,239,240);border-right:3px solid rgb(239,109,29);}", ".mypage.jsx-2687223168:hover,.home.jsx-2687223168:hover,.qusetions.jsx-2687223168:hover,.tags.jsx-2687223168:hover,.users.jsx-2687223168:hover{color:black;background:rgb(237,239,240);border-right:3px solid rgb(239,109,29);}"]
    })]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Layout.js









function Layout({
  children
}) {
  const router = (0,router_.useRouter)();
  console.log(router.pathname);
  const {
    0: login,
    1: setLogin
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    console.log("a");

    if (localStorage.getItem("accessToken") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2102364705" + " " + "layout-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Seo, {}), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2102364705" + " " + "content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2102364705" + " " + "sideBarBox",
        children: router.pathname === "/users/login" ? /*#__PURE__*/jsx_runtime_.jsx(SideBar, {}) : null
      }), router.pathname === "/users/login" ? null : router.pathname === "/users/signup" ? null : login ? /*#__PURE__*/jsx_runtime_.jsx(SideBar, {}) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2102364705" + " " + "children",
        children: children
      })]
    }), router.pathname === "/users/login" ? null : router.pathname === "/users/signup" ? null : /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {}), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2102364705",
      children: [".layout-container.jsx-2102364705{height:100vh;width:100%;margin:0;overflow-x:hidden;}", ".content.jsx-2102364705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}", ".children.jsx-2102364705{display:inline-block;width:100%;}", ".sideBarBox.jsx-2102364705{display:inline-block;top:0;}"]
    })]
  });
}
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "@redux-devtools/extension"
const extension_namespaceObject = require("@redux-devtools/extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/initialState.js
const initialState = {
  dumyData: [{
    id: "D_kwDOHOApLM4APjJi",
    createdAt: "2022-05-16T01:02:17Z",
    title: "koans 과제 진행 중 npm install 오류로 인해 정상 작동 되지 않습니다",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: "dubipy",
    answer: {
      id: "DC_kwDOHOApLM4AKg6M",
      createdAt: "2022-05-16T02:09:52Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236",
      author: "Kingsenal",
      bodyHTML: '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dubipy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dubipy">@dubipy</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 노드 환경이 구성되어 있지 않기 때문에 발생되는 문제로 확인됩니다.</p>\n<p dir="auto"><code class="notranslate">brew unlink node &amp;&amp; brew link node</code></p>\n<p dir="auto">노드를 연결해 보시고 안된다면</p>\n<p dir="auto"><code class="notranslate">brew link --overwrite node</code></p>\n<p dir="auto">이 명령어를 그 다음에도 안된다면 접근권한 문제일 가능성이 큽니다.</p>\n<p dir="auto"><code class="notranslate">$ sudo chmod 776 /usr/local/lib</code> 접근 권한 변경 후<br>\n<code class="notranslate">$ brew link --overwrite node</code> 다시 연결을 해보세요 !</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문을 남겨주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4"
    },
    votes: 10,
    ansers: 5,
    views: 10
  }, {
    id: "D_kwDOHOApLM4APjIj",
    createdAt: "2022-05-15T23:57:43Z",
    title: "반복되는 문자 리턴 문제에서 ' '(공백하나인 문자열)입력시 오류가 발생합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/44",
    author: "JoeunNAL",
    answer: null,
    bodyHTML: '<ul dir="auto">\n<li>\n<p dir="auto">운영 체제: macOS</p>\n</li>\n<li>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</p>\n</li>\n</ul>\n<p dir="auto">코플릿 객체 21번 문제에서 \' \'(공백하나인 문자열)입력시 오류가 발생합니다.</p>\n<ul dir="auto">\n<li>어떠한 부분에서 이해가 안 되었나요?</li>\n</ul>\n<p dir="auto">빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.<br>\n라는 주의사항에 맞게 조건문을   <code class="notranslate">if(str === \' \'){ return bigChar;}</code> 추가했습니다.<br>\n그런데 테스트 실행할때 주석처리한 아래 3줄이 활성화 되어있으면</p>\n<blockquote>\n<p dir="auto">\' \'을(를) 입력받은 경우, 빈 문자열을 리턴해야 합니다 "</p>\n</blockquote>\n<p dir="auto">이라는 지문에서 통과가 안되고 \' \'(공백하나인 문자열)이 리턴된다고 나옵니다.<br>\n크롬 디버거할때는<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90553688/168499795-ccd028a3-6c1e-452d-83e7-0144b8b823e4.png"><img width="485" alt="image" src="https://user-images.githubusercontent.com/90553688/168499795-ccd028a3-6c1e-452d-83e7-0144b8b823e4.png" style="max-width: 100%;"></a><br>\n빈 문자열로 뜨는것 같은데 어느부분에서 문제가 되는걸까요??</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function mostFrequentCharacter(str) {\n\n  let newObj = {};\n  let bigChar = \'\';\n  let bigNum = 1;\n\n  if(str === \' \'){\n    return bigChar;\n  }\n  \n  for(let i = 0; i&lt; str.length; i++){\n    // if(i === 0){     &lt;----------------------여기 부분\n    //   bigChar = str[0];\n    // }\n\n    let key = str[i];\n    if(key === \' \'){\n      continue;\n    }\n\n    if(!(key in newObj)){\n      newObj[key] = 1;\n    } else{\n      newObj[key]++;\n    }\n\n    if(newObj[key] &gt; bigNum){\n      bigNum = newObj[key];\n      bigChar = key;\n    }\n  }\n  return bigChar;\n}\n"><pre><span class="pl-k">function</span> <span class="pl-en">mostFrequentCharacter</span><span class="pl-kos">(</span><span class="pl-s1">str</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\n  <span class="pl-k">let</span> <span class="pl-s1">newObj</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">bigChar</span> <span class="pl-c1">=</span> <span class="pl-s">\'\'</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">bigNum</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">str</span> <span class="pl-c1">===</span> <span class="pl-s">\' \'</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-s1">bigChar</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n  \n  <span class="pl-k">for</span><span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">&lt;</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n    <span class="pl-c">// if(i === 0){     &lt;----------------------여기 부분</span>\n    <span class="pl-c">//   bigChar = str[0];</span>\n    <span class="pl-c">// }</span>\n\n    <span class="pl-k">let</span> <span class="pl-s1">key</span> <span class="pl-c1">=</span> <span class="pl-s1">str</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-c1">===</span> <span class="pl-s">\' \'</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-k">continue</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-k">in</span> <span class="pl-s1">newObj</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span> <span class="pl-k">else</span><span class="pl-kos">{</span>\n      <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span><span class="pl-c1">++</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span> <span class="pl-c1">&gt;</span> <span class="pl-s1">bigNum</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-s1">bigNum</span> <span class="pl-c1">=</span> <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span><span class="pl-kos">;</span>\n      <span class="pl-s1">bigChar</span> <span class="pl-c1">=</span> <span class="pl-s1">key</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n  <span class="pl-kos">}</span>\n  <span class="pl-k">return</span> <span class="pl-s1">bigChar</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>',
    avatarUrl: "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
    votes: 14,
    ansers: 1,
    views: 1
  }, {
    id: "D_kwDOHOApLM4APi4R",
    createdAt: "2022-05-15T09:28:00Z",
    title: "JavaScript Koans 04_Scope 문제의 innerFn()에 대하여 질문드립니다!",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/43",
    author: "anotheranotherhoon",
    answer: {
      id: "DC_kwDOHOApLM4AKg7z",
      createdAt: "2022-05-16T02:47:27Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/43#discussioncomment-2756339",
      author: "Kingsenal",
      bodyHTML: '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/anotheranotherhoon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/anotheranotherhoon">@anotheranotherhoon</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">스코프와 클로져에 대해 깊게 공부하는 모습 너무 너무 좋습니다 !</p>\n<p dir="auto">일단 즉시 실행 함수 표현식에 대해 질문 주셨는데요 !<br>\n함수를 정의 -&gt; 변수에 함수를 저장 하고 실행 ! 이 과정을 거치지 않고 정의하자마자 바로 호출하는 것이 즉시 실행 함수 입니다.<br>\n그렇다면 위에 코드는 즉시 실행 함수 일까요?</p>\n<p dir="auto"><a href="https://developer.mozilla.org/ko/docs/Glossary/IIFE" rel="nofollow">즉시실행함수</a><br>\n한 번 읽어보시고 한 번 더 생각해보세요 ! 직접 생각하는 것이 가장 기억에 오래 남습니다 !</p>\n<p dir="auto">두 번째 <code class="notranslate">innerFn</code>이라는 변수를 새로 선언했고 <code class="notranslate">outerFn()</code>을 할당했습니다. 즉, <code class="notranslate">outerFn()</code>을 호출 한 것입니다.<br>\n이는 위의 <code class="notranslate">innerFn</code> 함수와는 다른 녀석입니다.<code class="notranslate">innerFn</code> 함수도 마찬가지로 <code class="notranslate">outerFn</code> 내부에서 선언되었으므로 밖으로 나올 수 없기 때문이에요!</p>\n<p dir="auto"><code class="notranslate">const apple = outerFn()</code>  // innerFn은 단순한 변수명임 ! apple을 넣던 banana를 넣던 상관없음<br>\n<code class="notranslate">expect(apple()).to.equal(178)</code></p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 000</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4"
    },
    bodyHTML: '<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<p dir="auto">운영 체제: 예) macOS, Ubuntu<br>\nmacOS<br>\nNode.js 버전(node -v): 예)v14.16.0<br>\nv12.18.14</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nJavaScript Koans 04_Scope.js 문제 해결중</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="it(\'lexical scope와 closure에 대해 다시 확인합니다.\', function () {\n    let age = 27;\n    let name = \'jin\';\n    let height = 179;\n\n    function outerFn() {\n      let age = 24;\n      name = \'jimin\';\n      let height = 178;\n\n      function innerFn() {\n        age = 26;\n        let name = \'suga\';\n        return height;\n      }\n\n      innerFn();\n\n      expect(age).to.equal(26);\n      expect(name).to.equal(\'jimin\');\n\n      return innerFn;\n    }\n\n    const innerFn = outerFn(); //  &lt; --- ①  이부분에 대해서\n\n    expect(age).to.equal(27);\n    expect(name).to.equal(\'jimin\');\n    expect(innerFn()).to.equal(178); // &lt;---  ② \n  });"><pre class="notranslate"><code class="notranslate">it(\'lexical scope와 closure에 대해 다시 확인합니다.\', function () {\n    let age = 27;\n    let name = \'jin\';\n    let height = 179;\n\n    function outerFn() {\n      let age = 24;\n      name = \'jimin\';\n      let height = 178;\n\n      function innerFn() {\n        age = 26;\n        let name = \'suga\';\n        return height;\n      }\n\n      innerFn();\n\n      expect(age).to.equal(26);\n      expect(name).to.equal(\'jimin\');\n\n      return innerFn;\n    }\n\n    const innerFn = outerFn(); //  &lt; --- ①  이부분에 대해서\n\n    expect(age).to.equal(27);\n    expect(name).to.equal(\'jimin\');\n    expect(innerFn()).to.equal(178); // &lt;---  ② \n  });\n</code></pre></div>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?</p>\n<ol dir="auto">\n<li>\n<p dir="auto">① 부분에서 innerFn이라는 변수에 outerFn()을 할당했습니다.<br>\n변수에 함수호출문을 할당했다고 해석했습니다.<br>\n그렇다면 ①에서 const innerFn을 할당함과 동시에 할당을 하게되는 outerFn함수가 실행되나요?<br>\n그렇다면 ①도 즉시 실행 함수표현식인가요??</p>\n</li>\n<li>\n<p dir="auto">②에서 호출하는 innerFn()은 outerFn() 함수 내의 innerFn()을 호출 한 것인가요?<br>\n아니면 ①을 통해 innerFn호출에 의해 outerFn으로 접근하여 innerFn에 접근한 것인가요?</p>\n</li>\n</ol>\n<p dir="auto">제 생각에는 outerFn스코프내의 함수outerFn으로 바로 접근하는것이 바깥에서는 안으로 진입할 수 없는 규칙에 위배된다 생각합니다.</p>\n<p dir="auto">함수호이스팅은 함수내에 있는 함수까지 호이스팅 되어 전역으로 접근가능한건가요?</p>\n<p dir="auto">변수명과 함수명이 중복되어 공부하는 과정에서 잘못 이해하고 넘어갈 수 도 있을 것 같아 정확히 알아보기위해 질문을 남깁니다 감사합니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/77476348?s=64&u=64243db62117de5c254c9a76184753b76d7303ff&v=4",
    votes: 2,
    ansers: 4,
    views: 5
  }, {
    id: "D_kwDOHOApLM4APh3j",
    createdAt: "2022-05-13T03:38:57Z",
    title: "Unit10/Checkpoint2/종합퀴즈2/6번 관련하여 클로저의 효용성에 대해 질문드립니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/42",
    author: "JiYJ725",
    answer: {
      id: "DC_kwDOHOApLM4AKdo2",
      createdAt: "2022-05-13T04:19:10Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/42#discussioncomment-2742838",
      author: "Hong-sk",
      bodyHTML: '<p dir="auto">아래 작성해주신 코드내용처럼 isShow를 전역변수로 선언해서 실행하셔도 크게 문제는 일어나지 않습니다.</p>\n<p dir="auto">다만 isShow를 굳이 클로저를 활용해 접근하는 이유는 클로저를 사용하는 것이 <strong>상태를 안전하게 변경하고 유지할 수 있기 때문</strong>입니다.</p>\n<p dir="auto">아래 코드의 경우 isShow가 전역 스코프에 있기 때문에 toggle함수 말고도, 다른 모든 부분에서도 isShow를 참조할 수 있고, 변경할 수 있습니다.</p>\n<p dir="auto">isShow는 토글의 display를 block으로 해줄지, none으로 해줄지를 나타내는 용도로만 쓰여야되는데, 모든 곳에서 참조 및 변경이 가능하다면 <strong>의도치 않은 변경에 의한 오류</strong>를 야기시킬 수 있습니다.</p>\n<p dir="auto">따라서 클로저를 통해 내부함수말고는 접근할 수 없게끔 만들어주는 것이 상태를 안전하게 보관할 수 있는 것입니다.</p>\n<p dir="auto">이 내용은 오늘 줌 강의시간에 크루님이 말씀해주신 캡슐화나 정보은닉과도 깊은 연관이 있다고 생각됩니다 :)</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4",
      votes: 0,
      ansers: 1,
      views: 1
    },
    bodyHTML: '<p dir="auto">안녕하세요! 클로저의 효용성에 의문이 들어 질문 드립니다!</p>\n<p dir="auto">클로저를 사용하는 정답코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n\n        var toggle = (function () {\n            var isShow = false;\n            // TODO: ① 클로저를 반환하는 함수를 작성하세요.\n            return function () {\n                // TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.\n                box.style.display = isShow ? \'block\' : \'none\';\n                isShow = !isShow;\n            };\n        })();\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-k">var</span> <span class="pl-s1">toggle</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n            <span class="pl-c">// TODO: ① 클로저를 반환하는 함수를 작성하세요.</span>\n            <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n                <span class="pl-c">// TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.</span>\n                <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n                <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span>\n            <span class="pl-kos">}</span><span class="pl-kos">;</span>\n        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-s1">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">전역 변수를 통해 상태를 관리하는 코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n        var isShow = false;\n        var toggle = function () {\n            box.style.display = isShow ? \'block\' : \'none\';\n            isShow = !isShow; // 전역 변수에 적용\n        };\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-en">toggle</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n            <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span> <span class="pl-c">// 전역 변수에 적용</span>\n        <span class="pl-kos">}</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-en">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">아래처럼 isShow를 전역변수로 선언하고, 그 상태를 토대로 스타일을 적용해주어도 똑같이 동작하는데, 굳이 클로저를 활용하는 이유가 궁금합니다.</p>\n<p dir="auto">이렇게 토글버튼 등에서 클로저를 활용하는 경우는 나중에 코드가 방대해졌을 때, 동작과 상태가 한번에 묶여있는 형태가 유지보수하기 용이해서 활용하는 것인가요? 혹은 다른이유가 있는지 궁금합니다.</p>\n<p dir="auto">감사합니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/87750478?s=64&v=4",
    votes: 3,
    ansers: 5,
    views: 7
  }, {
    id: "D_kwDOHOApLM4APh17",
    createdAt: "2022-05-13T02:26:58Z",
    title: "클로저 함수의 특징 설명 중 '함수를 리턴하는 함수'가 이해가 되지 않습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/41",
    author: "Hong-sk",
    answer: {
      id: "DC_kwDOHOApLM4AKdsX",
      createdAt: "2022-05-13T05:20:39Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/41#discussioncomment-2743063",
      author: "kimploo",
      bodyHTML: '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Hong-sk/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Hong-sk">@Hong-sk</a> 님! 클로저 함수라는 워딩이 다소 오해가 있어보입니다.<br>\n향후 콘텐츠 업데이트를 통해 "클로저 함수"라는 워딩은 장기적으로 쓰지 않을 예정입니다.</p>\n<p dir="auto">나중에 다른 분들과 소통할 때는 아래 코드에서<br>\n"외부 함수(outer)", "내부 함수(inner)"라는 표현 정도는 사용할 수 있겠습니다.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const outer = function (x) {\n    const inner = function (y) {\n        return x + y;\n    }\n    return inner;\n}"><pre><span class="pl-k">const</span> <span class="pl-en">outer</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">const</span> <span class="pl-en">inner</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">y</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n        <span class="pl-k">return</span> <span class="pl-s1">x</span> <span class="pl-c1">+</span> <span class="pl-s1">y</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n    <span class="pl-k">return</span> <span class="pl-en">inner</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>\n<blockquote>\n<p dir="auto">내부 함수는 외부 함수 스코프에 접근할 수 있기 때문에, 매개변수 x의 값을 조회할 수 있다.</p>\n</blockquote>\n<p dir="auto">정도의 표현을 사용해주시면 무난하겠습니다! <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji></p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
    },
    bodyHTML: '<p dir="auto">운영 체제: Ubuntu</p>\n<p dir="auto">Node.js 버전(node -v): v16.14.2</p>\n<h3 dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</h3>\n<p dir="auto">Unit10 / chpater3-클로저 함수의 특징 개념학습을 진행하다 이해가 되지 않는 부분이 있어 질문 드립니다.</p>\n<h3 dir="auto">어떠한 부분에서 이해가 안 되었나요?</h3>\n<p dir="auto">개념 설명 5번째 슬라이드에서</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const adder = function (x) {\n    return function (y) {\n        return x + y;\n    }\n}\n"><pre><span class="pl-k">const</span> <span class="pl-en">adder</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">y</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n        <span class="pl-k">return</span> <span class="pl-s1">x</span> <span class="pl-c1">+</span> <span class="pl-s1">y</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">위와 같은 코드를 예시를 들어주며</p>\n<blockquote>\n<p dir="auto">클로저 함수는 위와 비슷한 모양을 갖고 있습니다. 이를 통해 알아볼 수 있는 첫 번째 특징은, 클로저 함수는 <strong>"함수를 리턴하는 함수"</strong> 라는 점입니다. 함수를 리턴하는 함수가 클로저의 형태를 만듭니다.</p>\n</blockquote>\n<p dir="auto">라는 설명이 적혀 있습니다.</p>\n<p dir="auto">위의 코드만을 두고 생각을 해 보았을 때 함수를 return해주는 함수는 adder이며 그 안에서 반환되는 익명함수는 x+y를 리턴해줄뿐 함수를 리턴해주고 있지는 않습니다.  <strong>즉, 맥락상으로는 adder함수가 클로저 함수라고 생각할 수 있는 것처럼 보입니다.</strong></p>\n<p dir="auto">하지만 제가 이해한 클로저 함수는 \'외부 환경의 렉시컬 환경, 즉 상위스코프를 참조하는 내부함수\'이고</p>\n<p dir="auto">또 챕터 3. 클로저 개요에도</p>\n<blockquote>\n<p dir="auto">이와 같은 이유로 "외부 함수의 변수에 접근할 수 있는 내부 함수"를 클로저 함수라고 합니다.</p>\n</blockquote>\n<p dir="auto">라고 나와있습니다.</p>\n<p dir="auto">이에 따르면</p>\n<blockquote>\n<p dir="auto">함수를 리턴하는 함수가 클로저의 형태를 만듭니다.</p>\n</blockquote>\n<p dir="auto">라는 문장은 맞는 말일 수 있다고 생각하지만</p>\n<blockquote>\n<p dir="auto">클로저 함수는 \'함수를 리턴하는 함수\' 라는 점입니다.</p>\n</blockquote>\n<p dir="auto">라는 설명은 잘못된 문장이거나, 맥락상 오해의 소지를 불러 일으킬 수 있는 문장이라고 생각합니다.</p>\n<p dir="auto">혹시 제가 잘못된 내용으로 이해했다거나 바로잡아주실 부분이 있으시다면 설명 부탁드려도 될까요??</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4",
    votes: 111,
    ansers: 23,
    views: 10
  }, {
    id: "D_kwDOHOApLM4APgSk",
    createdAt: "2022-05-10T14:43:13Z",
    title: "코플릿 배열 24번에 replaceAll을 쓰면 통과가 안되는 이유가 무엇인가요?.?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/40",
    author: "jindory",
    answer: {
      id: "DC_kwDOHOApLM4AKZuk",
      createdAt: "2022-05-11T02:28:57Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/40#discussioncomment-2726820",
      author: "Citysquirrel",
      bodyHTML: '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/jindory/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/jindory">@jindory</a>  님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<hr>\n<p dir="auto">코플릿에서 replaceAll 사용이 되질 않아서 답답하셨겠군요..!</p>\n<p dir="auto">현재 저희가 제공중인 코플릿 서버 버전은 node.js 14버전입니다.<br>\n그렇다보니 15버전 이후 지원되는 replaceAll 메서드 사용이 불가합니다.<br>\n향후 버전 업그레이드를 진행할 것이나, 지금은 이를 참고하시어 코스를 진행해주시면 감사하겠습니다.</p>\n<hr>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<g-emoji class="g-emoji" alias="chipmunk" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43f.png">🐿️</g-emoji><br>\n곽명우 드림</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4"
    },
    bodyHTML: '<p dir="auto">운영 체제 : macOS</p>\n<p dir="auto">Node.js 버전 : v16.15.0</p>\n<p dir="auto">질문 과제  : 코플릿 배열 24_createPhoneNumber</p>\n<p dir="auto">어떤 문제에 부딪혔나요? : 배열에 담긴 요소들을 \',\' 을 제외하여 결과값을 가져오는 방법 중 replaceAll을 쓰면,<br>\n콘솔에서 출력예시와 동일하게 string타입으로 리턴되는데 결과창에서는 통과가 안됩니다. <g-emoji class="g-emoji" alias="scream_cat" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f640.png">🙀</g-emoji></p>\n<ul dir="auto">\n<li>replaceAll을 이용한 경우</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function createPhoneNumber(arr) {\n  let len= arr.length;\n  let firstNum = arr.slice(0, 3);\n  let midNum = arr.slice(len -8, len -4);\n  let lastNum = arr.slice(len -4, len);\n\n  let str = `(${firstNum})${midNum}-${lastNum}`;\n  return str.replaceAll(\',\',\'\');\n}\n// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);\n// \'(010)1234-8765\'"><pre><span class="pl-k">function</span> <span class="pl-en">createPhoneNumber</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">let</span> <span class="pl-s1">len</span><span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">firstNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">midNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">lastNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-s1">len</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">let</span> <span class="pl-s1">str</span> <span class="pl-c1">=</span> <span class="pl-s">`(<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">firstNum</span><span class="pl-kos">}</span></span>)<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">midNum</span><span class="pl-kos">}</span></span>-<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lastNum</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span>\n  <span class="pl-k">return</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-en">replaceAll</span><span class="pl-kos">(</span><span class="pl-s">\',\'</span><span class="pl-kos">,</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span>\n<span class="pl-c">// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);</span>\n<span class="pl-c">// \'(010)1234-8765\'</span></pre></div>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/22221941/167655688-b0728d05-3417-4398-9097-a62fa2d088af.png"><img src="https://user-images.githubusercontent.com/22221941/167655688-b0728d05-3417-4398-9097-a62fa2d088af.png" alt="image" style="max-width: 100%;"></a></p>\n<ul dir="auto">\n<li>join을 이용한 경우</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function createPhoneNumber(arr) {\n  let len= arr.length;\n  let firstNum = arr.slice(0, 3).join(\'\');\n  let midNum = arr.slice(len -8, len -4).join(\'\');\n  let lastNum = arr.slice(len -4, len).join(\'\');\n\n  return `(${firstNum})${midNum}-${lastNum}`;\n}\n// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);\n// \'(010)1234-8765\'"><pre><span class="pl-k">function</span> <span class="pl-en">createPhoneNumber</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">let</span> <span class="pl-s1">len</span><span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">firstNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">midNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">lastNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-s1">len</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">return</span> <span class="pl-s">`(<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">firstNum</span><span class="pl-kos">}</span></span>)<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">midNum</span><span class="pl-kos">}</span></span>-<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lastNum</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span>\n<span class="pl-c">// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);</span>\n<span class="pl-c">// \'(010)1234-8765\'</span></pre></div>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/22221941/167655749-e2ead01e-65c1-4dce-ad2f-aea38e88beb5.png"><img src="https://user-images.githubusercontent.com/22221941/167655749-e2ead01e-65c1-4dce-ad2f-aea38e88beb5.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요. : <a href="https://chanyeong.com/blog/post/29" rel="nofollow">https://chanyeong.com/blog/post/29</a><br>\n신규 매서드라는 내용을 확인하였습니다 ;-; 아직 사용이 불가한건지요..?<br>\n이 문제가 아니면 코드 어디 부분을 더 알아볼까요;-;</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/22221941?s=64&u=7332dde3a563f98d2912e107f455ce2265ccca45&v=4",
    votes: 0,
    ansers: 59,
    views: 77
  }]
};
;// CONCATENATED MODULE: ./reducers/initialReducer.js
const TEST = "TEST";
 // Action Creators

const testAction = text => ({
  type: TEST,
  text
}); // Initial State
// Reducer

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state);

    default:
      return state;
  }
};

/* harmony default export */ const reducers_initialReducer = (initialReducer);
;// CONCATENATED MODULE: ./reducers/answerReducer.js
const CHANGE_INPUT = "CHANGE_INPUT";
const RESET_INPUT = "RESET_INPUT"; //initial

const answerReducer_initialState = {
  value: ""
};
const changeInputAction = value => ({
  // 액션 생성 함수
  type: CHANGE_INPUT,
  payload: value
});
const resetInputAction = value => ({
  // 액션 생성 함수
  type: RESET_INPUT
}); // Reducer

const anwserReducer = (state = answerReducer_initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        value: action.payload
      };

    case RESET_INPUT:
      return {
        value: ""
      };

    default:
      return state;
  }
};

/* harmony default export */ const answerReducer = (anwserReducer);
;// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_namespaceObject.HYDRATE:
      return action.payload;

    default:
      return (0,external_redux_namespaceObject.combineReducers)({
        initialReducer: reducers_initialReducer,
        anwserReducer: answerReducer
      })(state, action);
  }
};

/* harmony default export */ const reducers = (rootReducer);
;// CONCATENATED MODULE: ./store/configureStore.js





const isProduction = true;

const makeStore = () => {
  const enhancer = isProduction ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))) : (0,extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
  const store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
  return store;
};

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
  debug: !isProduction
});
/* harmony default export */ const configureStore = (wrapper);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Myapp = ({
  Component,
  pageProps
}) => {
  const getLayout = Component.getLayout || (page => page);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-2792774720" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    }))), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2792774720",
      children: ["body{margin:0;}"]
    })]
  });
};

/* harmony default export */ const _app = (configureStore.withRedux(Myapp)); // export default Myapp;

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733,675], () => (__webpack_exec__(8462)));
module.exports = __webpack_exports__;

})();