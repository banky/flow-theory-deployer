"use strict";
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 3508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ DialogColumn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DialogColumn = ({ title , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-2xl font-thin mb-4",
                children: title
            }),
            children
        ]
    });
};


/***/ }),

/***/ 2070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ DialogInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./helpers/number-helpers.ts
const onChangeNumberAmount = (e, callback)=>{
    const value = e.target.value;
    // if (isNaN(value)) {
    //   return;
    // }
    callback(value);
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/dialog-input.tsx



const DialogInput = ({ value , icon , label , buttonText , className , onChange , onButtonPress  })=>{
    // Dialog Input is always used for a number input right now
    const sanitizedOnChange = (e)=>{
        onChangeNumberAmount(e, onChange);
    };
    const inputName = (Math.random() + 1).toString(36).substring(7);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "font-bold",
                        htmlFor: inputName,
                        children: label
                    }),
                    buttonText && onButtonPress ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "text-brand-blue font-bold",
                        onClick: onButtonPress,
                        children: buttonText
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center bg-background px-2 gap-2",
                children: [
                    icon ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: icon,
                        width: 30,
                        height: 30,
                        alt: icon
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: inputName,
                        placeholder: "0",
                        className: "bg-background text-xl font-thin w-full h-12 mt-1 focus:outline-none",
                        value: value,
                        onChange: sanitizedOnChange
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7372);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__);


const Dialog = ({ children , ...dialogProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        ...dialogProps,
        className: "bg-blue-3 text-white rounded-lg p-8 px-8 text-center w-fit min-w-[400px]",
        children: children
    });
};


/***/ }),

/***/ 3642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FancyDottedBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FancyDottedBox = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full mx-8 md:mx-16 rounded-2xl bg-gradient-to-b from-brand-blue to-brand-purple",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-full border-background border-2 rounded-2xl border-dashed",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full bg-background p-16 py-32 w-full rounded-2xl",
                children: children
            })
        })
    });
};


/***/ }),

/***/ 9069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center",
        children: "Loading"
    });
};


/***/ }),

/***/ 7947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PrimaryButton = ({ children , isLoading , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: "p-2 px-4 rounded-md font-bold bg-brand-blue text-white disabled:bg-gray-700",
        children: isLoading ? "Loading..." : children
    });
};


/***/ }),

/***/ 7143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SecondaryButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: "p-2 px-4 rounded-md font-bold bg-blue-0 text-white"
    });
};


/***/ }),

/***/ 2268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TableHeader = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "bg-blue-3 p-4 font-thin mb-4 text-2xl",
        children: children
    });
};


/***/ }),

/***/ 8570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useUsdcxAddress)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artifacts_openzeppelin_contracts_token_ERC20_ERC20_sol_ERC20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(810);


const useUsdcxAddress = ()=>{
    const nullAddress = "0x0000000000000000000000000000000000000000";
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useNetwork)();
    if (chain?.id === undefined) {
        return {
            contractAddress: nullAddress,
            abi: _artifacts_openzeppelin_contracts_token_ERC20_ERC20_sol_ERC20_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt
        };
    }
    const contractAddress = {
        [wagmi__WEBPACK_IMPORTED_MODULE_0__.chainId.goerli]: "0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a",
        [wagmi__WEBPACK_IMPORTED_MODULE_0__.chainId.rinkeby]: "0x0000000000000000000000000000000000000000",
        [wagmi__WEBPACK_IMPORTED_MODULE_0__.chainId.mainnet]: "0x0000000000000000000000000000000000000000",
        [wagmi__WEBPACK_IMPORTED_MODULE_0__.chainId.optimismGoerli]: "0x0000000000000000000000000000000000000000",
        [wagmi__WEBPACK_IMPORTED_MODULE_0__.chainId.polygonMumbai]: "0x0000000000000000000000000000000000000000"
    }[chain.id];
    if (contractAddress === undefined) {
        return {
            contractAddress: nullAddress,
            abi: _artifacts_openzeppelin_contracts_token_ERC20_ERC20_sol_ERC20_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt
        };
    }
    return {
        contractAddress,
        abi: _artifacts_openzeppelin_contracts_token_ERC20_ERC20_sol_ERC20_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt
    };
};


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useWriteWithWait)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWriteWithWait = (fn, callback)=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const callWithWait = async ()=>{
        try {
            setLoading(true);
            const tx = await fn?.();
            if (tx === undefined) {
                console.error("Error initiating transaction");
                setLoading(false);
                return;
            }
            await tx.wait();
            await callback?.();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    return {
        loading,
        callWithWait
    };
};


/***/ }),

/***/ 2117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MinusIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M11.6668 0.333313H2.3335C1.80306 0.333313 1.29436 0.544027 0.919283 0.9191C0.54421 1.29417 0.333496 1.80288 0.333496 2.33331V11.6666C0.333496 12.1971 0.54421 12.7058 0.919283 13.0809C1.29436 13.4559 1.80306 13.6666 2.3335 13.6666H11.6668C12.1973 13.6666 12.706 13.4559 13.081 13.0809C13.4561 12.7058 13.6668 12.1971 13.6668 11.6666V2.33331C13.6668 1.80288 13.4561 1.29417 13.081 0.9191C12.706 0.544027 12.1973 0.333313 11.6668 0.333313ZM12.3335 11.6666C12.3335 11.8435 12.2633 12.013 12.1382 12.1381C12.0132 12.2631 11.8436 12.3333 11.6668 12.3333H2.3335C2.15669 12.3333 1.98712 12.2631 1.86209 12.1381C1.73707 12.013 1.66683 11.8435 1.66683 11.6666V2.33331C1.66683 2.1565 1.73707 1.98693 1.86209 1.86191C1.98712 1.73688 2.15669 1.66665 2.3335 1.66665H11.6668C11.8436 1.66665 12.0132 1.73688 12.1382 1.86191C12.2633 1.98693 12.3335 2.1565 12.3335 2.33331V11.6666ZM9.66683 6.33331H4.3335C4.15669 6.33331 3.98712 6.40355 3.86209 6.52858C3.73707 6.6536 3.66683 6.82317 3.66683 6.99998C3.66683 7.17679 3.73707 7.34636 3.86209 7.47138C3.98712 7.59641 4.15669 7.66665 4.3335 7.66665H9.66683C9.84364 7.66665 10.0132 7.59641 10.1382 7.47138C10.2633 7.34636 10.3335 7.17679 10.3335 6.99998C10.3335 6.82317 10.2633 6.6536 10.1382 6.52858C10.0132 6.40355 9.84364 6.33331 9.66683 6.33331Z",
            fill: "#F8F9FF"
        })
    });
};


/***/ }),

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlusIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5.00016 7.66665H6.3335V8.99998C6.3335 9.17679 6.40373 9.34636 6.52876 9.47138C6.65378 9.59641 6.82335 9.66665 7.00016 9.66665C7.17697 9.66665 7.34654 9.59641 7.47157 9.47138C7.59659 9.34636 7.66683 9.17679 7.66683 8.99998V7.66665H9.00016C9.17697 7.66665 9.34654 7.59641 9.47157 7.47138C9.59659 7.34636 9.66683 7.17679 9.66683 6.99998C9.66683 6.82317 9.59659 6.6536 9.47157 6.52858C9.34654 6.40355 9.17697 6.33331 9.00016 6.33331H7.66683V4.99998C7.66683 4.82317 7.59659 4.6536 7.47157 4.52858C7.34654 4.40355 7.17697 4.33331 7.00016 4.33331C6.82335 4.33331 6.65378 4.40355 6.52876 4.52858C6.40373 4.6536 6.3335 4.82317 6.3335 4.99998V6.33331H5.00016C4.82335 6.33331 4.65378 6.40355 4.52876 6.52858C4.40373 6.6536 4.3335 6.82317 4.3335 6.99998C4.3335 7.17679 4.40373 7.34636 4.52876 7.47138C4.65378 7.59641 4.82335 7.66665 5.00016 7.66665V7.66665ZM13.0002 0.333313H1.00016C0.823352 0.333313 0.653782 0.403551 0.528758 0.528575C0.403734 0.653599 0.333496 0.823169 0.333496 0.99998V13C0.333496 13.1768 0.403734 13.3464 0.528758 13.4714C0.653782 13.5964 0.823352 13.6666 1.00016 13.6666H13.0002C13.177 13.6666 13.3465 13.5964 13.4716 13.4714C13.5966 13.3464 13.6668 13.1768 13.6668 13V0.99998C13.6668 0.823169 13.5966 0.653599 13.4716 0.528575C13.3465 0.403551 13.177 0.333313 13.0002 0.333313V0.333313ZM12.3335 12.3333H1.66683V1.66665H12.3335V12.3333Z",
            fill: "#F8F9FF"
        })
    });
};


/***/ }),

/***/ 810:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;