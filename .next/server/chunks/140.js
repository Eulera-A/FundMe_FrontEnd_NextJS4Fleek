"use strict";
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonCustom)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_2__);




const ButtonCustomStyled$1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.s)(_index_js__WEBPACK_IMPORTED_MODULE_3__.B)`
    background-color: ${(p) => {
  var _a;
  return (_a = p.customize) == null ? void 0 : _a.backgroundColor;
}};

    span {
        color: ${(p) => {
  var _a;
  return (_a = p.customize) == null ? void 0 : _a.textColor;
}};
        font-size: ${(p) => {
  var _a;
  return ((_a = p.customize) == null ? void 0 : _a.fontSize) + "px";
}};
    }

    svg {
        fill: ${(p) => {
  var _a;
  return (_a = p.customize) == null ? void 0 : _a.textColor;
}};
    }

    :after {
        background-color: transparent;
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    :hover {
        background-color: ${(p) => {
  var _a;
  return (_a = p.customize) == null ? void 0 : _a.backgroundColor;
}};

        :after {
            background-color: ${(p) => {
  var _a;
  return ((_a = p.customize) == null ? void 0 : _a.onHover) === "lighten" ? (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.g)("light", 20) : (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.g)("dark", 20);
}};
        }
    }

    :active {
        :after {
            background-color: ${(p) => {
  var _a;
  return ((_a = p.customize) == null ? void 0 : _a.onHover) === "lighten" ? (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.g)("light", 40) : (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.g)("dark", 40);
}};
        }
    }
`;
var styles = {
  ButtonCustomStyled: ButtonCustomStyled$1
};
const {
  ButtonCustomStyled
} = styles;
const ButtonCustom = ({
  customize,
  ...props
}) => {
  return /* @__PURE__ */ (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.j)(ButtonCustomStyled, {
    customize,
    ...props
  });
};



/***/ })

};
;