"use strict";
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 4311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useTokenPrices)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_lending_core_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7506);



const useTokenPrices = ()=>{
    const { contractAddress: lendingCoreAddress , abi: lendingCoreAbi  } = (0,_use_lending_core_address__WEBPACK_IMPORTED_MODULE_2__/* .useLendingCoreAddress */ .O)();
    const { data: collateralTokenPrice , isFetching: isFetchingCollateralTokenPrice ,  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        addressOrName: lendingCoreAddress,
        contractInterface: lendingCoreAbi,
        functionName: "collateralTokenPrice",
        enabled: lendingCoreAddress !== "0x0000000000000000000000000000000000000000"
    });
    const { data: debtTokenPrice , isFetching: isFetchingDebtTokenPrice  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        addressOrName: lendingCoreAddress,
        contractInterface: lendingCoreAbi,
        functionName: "debtTokenPrice",
        enabled: lendingCoreAddress !== "0x0000000000000000000000000000000000000000"
    });
    const { data: granularity , isFetching: isFetchingGranularity  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        addressOrName: lendingCoreAddress,
        contractInterface: lendingCoreAbi,
        functionName: "GRANULARITY",
        enabled: lendingCoreAddress !== "0x0000000000000000000000000000000000000000"
    });
    const loading = isFetchingCollateralTokenPrice || isFetchingDebtTokenPrice || isFetchingGranularity;
    if (loading) {
        return {
            collateralTokenPrice: ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(0),
            debtTokenPrice: ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(0),
            granularity: ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(1)
        };
    }
    return {
        collateralTokenPrice: collateralTokenPrice ?? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(0),
        debtTokenPrice: debtTokenPrice ?? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(0),
        granularity: granularity ?? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(1)
    };
};


/***/ })

};
;