"use strict";
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 3395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ GradientText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GradientText = ({ className , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        ...props,
        className: `text-transparent bg-clip-text bg-gradient-to-b from-brand-blue to-brand-purple ` + className
    });
};


/***/ }),

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ useLendingCoreAddress)
});

// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: ./artifacts/contracts/LendingCore.sol/LendingCore.json
const LendingCore_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract ISuperfluid","name":"host","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"contract InterestManager","name":"_interestManager","type":"address"},{"internalType":"uint256","name":"_interestRate","type":"uint256"},{"internalType":"uint256","name":"_collateralizationRatio","type":"uint256"},{"internalType":"uint256","name":"_liquidationPenalty","type":"uint256"},{"internalType":"contract ISuperToken","name":"_debtToken","type":"address"},{"internalType":"contract IERC20","name":"_collateralToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"}],"name":"FullyRepaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"}],"name":"NewLoan","type":"event"},{"inputs":[],"name":"GRANULARITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"borrowerProfiles","outputs":[{"internalType":"uint256","name":"collateralAmount","type":"uint256"},{"internalType":"uint256","name":"debtAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cfaLib","outputs":[{"internalType":"contract ISuperfluid","name":"host","type":"address"},{"internalType":"contract IConstantFlowAgreementV1","name":"cfa","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralizationRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"debtToken","outputs":[{"internalType":"contract ISuperToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"debtTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"depositCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"depositLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"getCollateralizationRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interestManager","outputs":[{"internalType":"contract InterestManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interestRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lenderProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidationPenalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCollateralTokenPrice","type":"uint256"}],"name":"setCollateralTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDebtTokenPrice","type":"uint256"}],"name":"setDebtTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"withdrawCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"withdrawLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./hooks/use-lending-core-address.ts


const useLendingCoreAddress = ()=>{
    const nullAddress = "0x0000000000000000000000000000000000000000";
    const { chain  } = (0,external_wagmi_.useNetwork)();
    if (chain?.id === undefined) {
        return {
            contractAddress: nullAddress,
            abi: LendingCore_namespaceObject.Mt
        };
    }
    const contractAddress = {
        [external_wagmi_.chainId.goerli]: "0x5990980b36BaE3EF45C6D302917916150D3b5B16",
        [external_wagmi_.chainId.rinkeby]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.mainnet]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.optimismGoerli]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.polygonMumbai]: "0x0000000000000000000000000000000000000000"
    }[chain.id];
    if (contractAddress === undefined) {
        return {
            contractAddress: nullAddress,
            abi: LendingCore_namespaceObject.Mt
        };
    }
    return {
        contractAddress,
        abi: LendingCore_namespaceObject.Mt
    };
};


/***/ })

};
;