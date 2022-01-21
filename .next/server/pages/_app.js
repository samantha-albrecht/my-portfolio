(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Application)
});

// EXTERNAL MODULE: ./components/SectionContainer/SectionContainer.js
var SectionContainer = __webpack_require__(6014);
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(905);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer/Footer.js





function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Footer_module_default()).footer,
    children: /*#__PURE__*/jsx_runtime_.jsx(SectionContainer/* default */.Z, {
      section: 'Footer',
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).contentContainer,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).contentInner,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\xA9 ", new Date().getUTCFullYear(), " Designed & built by Samantha Albrecht"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).socialContainer,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/",
              title: "Go to LinkedIn",
              className: (Footer_module_default()).socialLink,
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                version: "1.1",
                viewBox: "0 0 16 16",
                height: "24px",
                width: "24px",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://github.com/samantha-albrecht/my-portfolio/tree/master",
              title: "View source on Github",
              className: (Footer_module_default()).socialLink,
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                viewBox: "0 0 16 16",
                height: "24px",
                width: "24px",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
                })
              })
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const Footer_Footer = (Footer);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(1258);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Header/Header.js







let navItems = [{
  name: 'Work',
  id: 'work',
  isSubNav: true
}, {
  name: 'Process',
  id: 'process',
  isSubNav: true
}, {
  name: 'Experience',
  id: 'experience',
  isSubNav: true
}, {
  name: 'Books',
  id: 'books',
  isSubNav: false
}, {
  name: 'About',
  id: 'about',
  isSubNav: false
}];

function SubNav() {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: (Header_module_default()).navList,
      children: navItems.filter(navItem => navItem.isSubNav).map(navItem => /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Header_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `/#${navItem.id}`,
          title: `Jump to ${navItem.id} section`,
          children: navItem.name
        })
      }))
    })
  });
}

function FullNav() {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (Header_module_default()).nav,
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: (Header_module_default()).navList,
      children: navItems.map(navItem => /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Header_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `/#${navItem.id}`,
          title: `Jump to ${navItem.id} section`,
          children: navItem.name
        })
      }))
    })
  });
}

const Overlay = ({
  show,
  click
}) => show ? /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: (Header_module_default()).overlay,
  onClick: click
}) : null;

function Header() {
  const {
    0: showHeader,
    1: setShowHeader
  } = (0,external_react_.useState)(false);
  const {
    0: headerState,
    1: setHeaderState
  } = (0,external_react_.useState)('initial');
  const {
    0: animateSlideIn,
    1: setAnimateSlideIn
  } = (0,external_react_.useState)(false);

  const navToggle = () => {
    setShowHeader(prev => !prev);
  };

  (0,external_react_.useEffect)(() => {
    let lastScrollPosition = window.scrollY;

    const showHideHeader = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > 100) {
        setAnimateSlideIn(true);
      } else {
        setAnimateSlideIn(false);
      }

      if (currentScrollPosition < 100) {
        setHeaderState('initial');
      } else if (currentScrollPosition < lastScrollPosition) {
        setHeaderState('show');
      } else {
        setHeaderState('hide');
        setShowHeader(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    document.addEventListener('scroll', showHideHeader);
    return () => document.removeEventListener('scroll', showHideHeader);
  }, [headerState]);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/jsx_runtime_.jsx(SectionContainer/* default */.Z, {
      section: 'Header',
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Header_module_default()).header, {
          [(Header_module_default()).visible]: headerState === 'show',
          [(Header_module_default()).hide]: headerState === 'hide',
          [(Header_module_default()).animateSlideIn]: animateSlideIn
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Header_module_default()).container,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Header_module_default()).headerContainer,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Header_module_default()).headerInner,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: (Header_module_default()).title,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Samantha Albrecht"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).subNav,
                children: [/*#__PURE__*/jsx_runtime_.jsx(SubNav, {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: (Header_module_default()).navOpen,
                  onClick: navToggle,
                  title: "Open navigation",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    stroke: "currentColor",
                    fill: "none",
                    "stroke-width": "2",
                    viewBox: "0 0 24 24",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    height: "20px",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/jsx_runtime_.jsx("polyline", {
                      points: "9 18 15 12 9 6"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((Header_module_default()).fullNav, {
                  [(Header_module_default()).fullNavVisible]: showHeader
                }),
                children: [/*#__PURE__*/jsx_runtime_.jsx(FullNav, {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/",
                  rel: "noopener noreferrer nofollow",
                  className: (Header_module_default()).secondaryButton,
                  children: "Contact"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: (Header_module_default()).navClose,
                  onClick: navToggle,
                  title: "Close navigation",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    viewBox: "0 0 24 24",
                    height: "24px",
                    width: "24px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {
                show: showHeader,
                onClick: navToggle
              })]
            })
          })
        })
      })
    })
  });
}

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./components/Layout/Layout.js






function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
}

/* harmony default export */ const Layout_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Application({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ 905:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N",
	"contentContainer": "Footer_contentContainer__3sQf4",
	"contentInner": "Footer_contentInner__1ixOD",
	"socialContainer": "Footer_socialContainer__1cB3J",
	"socialLink": "Footer_socialLink__1P7SG"
};


/***/ }),

/***/ 1258:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__OkoDL",
	"animateSlideIn": "Header_animateSlideIn__2fHbQ",
	"visible": "Header_visible__3QwT4",
	"headerContainer": "Header_headerContainer__MEyVv",
	"hide": "Header_hide__2G_va",
	"title": "Header_title__2ad0I",
	"navItem": "Header_navItem__3Fat9",
	"subNav": "Header_subNav__1RUru",
	"navList": "Header_navList__1Tm9i",
	"navOpen": "Header_navOpen__2XysN",
	"navClose": "Header_navClose__1Fvnm",
	"overlay": "Header_overlay__3lU1B",
	"secondaryButton": "Header_secondaryButton__3gyjf",
	"fullNav": "Header_fullNav__29W1E",
	"fullNavVisible": "Header_fullNavVisible__39I1U",
	"container": "Header_container__3cXlC",
	"headerInner": "Header_headerInner__1cOQd",
	"nav": "Header_nav__2SG38"
};


/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664,14], () => (__webpack_exec__(7813)));
module.exports = __webpack_exports__;

})();