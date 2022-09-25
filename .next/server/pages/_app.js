"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ConnectButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
/* harmony import */ var _super_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ConnectButton = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton.Custom, {
        children: ({ account , chain , openAccountModal , openChainModal , openConnectModal , authenticationStatus , mounted ,  })=>{
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ...!ready && {
                    "aria-hidden": true,
                    style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none"
                    }
                },
                children: (()=>{
                    if (!connected) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_super_button__WEBPACK_IMPORTED_MODULE_2__/* .SuperButton */ .z, {
                            onClick: openConnectModal,
                            type: "button",
                            children: "Connect"
                        });
                    }
                    if (chain.unsupported) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_super_button__WEBPACK_IMPORTED_MODULE_2__/* .SuperButton */ .z, {
                            onClick: openChainModal,
                            type: "button",
                            children: "Wrong network"
                        });
                    }
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_super_button__WEBPACK_IMPORTED_MODULE_2__/* .SuperButton */ .z, {
                                onClick: openChainModal,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                type: "button",
                                children: [
                                    chain.hasIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: chain.iconBackground,
                                            width: 12,
                                            height: 12,
                                            borderRadius: 999,
                                            overflow: "hidden",
                                            marginRight: 4
                                        },
                                        children: chain.iconUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            alt: chain.name ?? "Chain icon",
                                            src: chain.iconUrl,
                                            style: {
                                                width: 12,
                                                height: 12
                                            }
                                        })
                                    }),
                                    chain.name
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_super_button__WEBPACK_IMPORTED_MODULE_2__/* .SuperButton */ .z, {
                                onClick: openAccountModal,
                                type: "button",
                                children: [
                                    account.displayName,
                                    account.displayBalance ? ` (${account.displayBalance})` : ""
                                ]
                            })
                        ]
                    });
                })()
            });
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_current_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8358);



const DashboardSelector = ()=>{
    const currentDashboard = (0,_hooks_use_current_dashboard__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentDashboard */ .u)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "font-bold flex gap-2 max-w-[150px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashboardSelectorItem, {
                selected: currentDashboard === "lender",
                href: "/lender",
                children: "Lend"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashboardSelectorItem, {
                selected: currentDashboard === "borrower",
                href: "/borrower",
                children: "Borrow"
            })
        ]
    });
};
const DashboardSelectorItem = ({ selected , children , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: `flex flex-col p-2 rounded-md flex-1 items-center ${selected ? "bg-blue-0" : "bg-blue-3"}`,
            children: children
        })
    });
};


/***/ }),

/***/ 1952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_flow_theory_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1034);
/* harmony import */ var _connect_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5907);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_connect_button__WEBPACK_IMPORTED_MODULE_3__]);
_connect_button__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { ConnectButton } from '@rainbow-me/rainbowkit';




const Header = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "w-full flex items-center justify-between mb-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "flex items-center gap-4",
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_flow_theory_logo__WEBPACK_IMPORTED_MODULE_2__/* .FlowTheoryLogo */ .$, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connect_button__WEBPACK_IMPORTED_MODULE_3__/* .ConnectButton */ .N, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./hooks/use-current-dashboard.ts + 1 modules
var use_current_dashboard = __webpack_require__(8358);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/gradient-text.tsx
var gradient_text = __webpack_require__(3395);
// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(1438);
;// CONCATENATED MODULE: ./components/odometer.tsx




const UPDATE_PERIOD = 1000 * constants/* RATE_MULTIPLE */.F;
const Odometer = ({ start , rate  })=>{
    const { 0: currentValue , 1: setCurrentValue  } = (0,external_react_.useState)(start);
    (0,external_react_.useEffect)(()=>{
        setCurrentValue(start);
        const interval = setInterval(()=>{
            setCurrentValue((val)=>val + rate);
        }, UPDATE_PERIOD);
        return ()=>clearInterval(interval);
    }, [
        start,
        rate
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(gradient_text/* GradientText */.t, {
        className: "text-4xl font-extrabold mb-4",
        children: currentValue.toFixed(7)
    });
};

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "ethers/lib/utils"
var utils_ = __webpack_require__(2522);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: ./hooks/use-lending-core-address.ts + 1 modules
var use_lending_core_address = __webpack_require__(7506);
// EXTERNAL MODULE: ./hooks/use-token-prices.ts
var use_token_prices = __webpack_require__(4311);
;// CONCATENATED MODULE: ./artifacts/contracts/InterestManager.sol/InterestManager.json
const InterestManager_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract ISuperfluid","name":"host","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"registrationKey","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"INDEX_ID","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"_superToken","type":"address"},{"internalType":"address","name":"_agreementClass","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"_ctx","type":"bytes"}],"name":"afterAgreementCreated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"_superToken","type":"address"},{"internalType":"address","name":"_agreementClass","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"_agreementData","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"_ctx","type":"bytes"}],"name":"afterAgreementTerminated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"_superToken","type":"address"},{"internalType":"address","name":"_agreementClass","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"_ctx","type":"bytes"}],"name":"afterAgreementUpdated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementCreated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementTerminated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementUpdated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributeInterest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"idaLib","outputs":[{"internalType":"contract ISuperfluid","name":"host","type":"address"},{"internalType":"contract IInstantDistributionAgreementV1","name":"ida","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lendingCore","outputs":[{"internalType":"contract LendingCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract LendingCore","name":"_lendingCore","type":"address"}],"name":"setLendingCore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newShareAmount","type":"uint256"},{"internalType":"address","name":"lenderAddress","type":"address"}],"name":"updateShares","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./hooks/use-interest-manager-address.ts


const useInterestManagerAddress = ()=>{
    const nullAddress = "0x0000000000000000000000000000000000000000";
    const { chain  } = (0,external_wagmi_.useNetwork)();
    if (chain?.id === undefined) {
        return {
            contractAddress: nullAddress,
            abi: InterestManager_namespaceObject.Mt
        };
    }
    const contractAddress = {
        [external_wagmi_.chainId.goerli]: "0x86734dad0dc33fe712ec1179e60b09469e7fb83b",
        [external_wagmi_.chainId.rinkeby]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.mainnet]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.optimismGoerli]: "0x0000000000000000000000000000000000000000",
        [external_wagmi_.chainId.polygonMumbai]: "0x0000000000000000000000000000000000000000"
    }[chain.id];
    if (contractAddress === undefined) {
        return {
            contractAddress: nullAddress,
            abi: InterestManager_namespaceObject.Mt
        };
    }
    return {
        contractAddress,
        abi: InterestManager_namespaceObject.Mt
    };
};

;// CONCATENATED MODULE: ./components/sidebar.tsx













// sender: "0xcdccad1de51d4e2671e0930a0b7310042998c252"
//         receiver: "0x86734dad0dc33fe712ec1179e60b09469e7fb83b"
const GET_STREAMS = client_.gql`
  query GetStreams($sender: ID!, $receiver: ID!) {
    streams(where: { sender: $sender, receiver: $receiver }) {
      token {
        id
        symbol
      }
      createdAtTimestamp
      updatedAtTimestamp
      currentFlowRate
      streamedUntilUpdatedAt
    }
  }
`;
const fixedApr = 1.0;
const decimals = 2;
const Sidebar = ()=>{
    const currentDashboard = (0,use_current_dashboard/* useCurrentDashboard */.u)();
    if (!currentDashboard) {
        return null;
    }
    if (currentDashboard === "borrower") {
        return /*#__PURE__*/ jsx_runtime_.jsx(BorrowerSidebar, {});
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(LenderSidebar, {});
    }
};
const BorrowerSidebar = ()=>{
    const currentDashboard = (0,use_current_dashboard/* useCurrentDashboard */.u)();
    const { address  } = (0,external_wagmi_.useAccount)();
    const { contractAddress: interestMaanagerAddress  } = useInterestManagerAddress();
    const { loading , error , data: getStreamsResult ,  } = (0,client_.useQuery)(GET_STREAMS, {
        variables: {
            sender: address?.toLowerCase() ?? "",
            receiver: interestMaanagerAddress
        }
    });
    const { 0: totalStreamed , 1: setTotalStreamed  } = (0,external_react_.useState)(0);
    const { 0: flowRate , 1: setFlowRate  } = (0,external_react_.useState)(0);
    const { 0: collateralRatio , 1: setCollateralRatio  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (loading === false) {
            setTotalStreamed(getTotalStreamed());
            setFlowRate(getFlowRate());
        }
    }, [
        loading
    ]);
    const { contractAddress: lendingCoreAddress , abi: lendingCoreAbi  } = (0,use_lending_core_address/* useLendingCoreAddress */.O)();
    const { data: borrowerProfile , isFetching: isFetchingBorrowerProfiles , refetch: refetchBorrowerProfiles ,  } = (0,external_wagmi_.useContractRead)({
        addressOrName: lendingCoreAddress,
        contractInterface: lendingCoreAbi,
        functionName: "borrowerProfiles",
        args: [
            address
        ]
    });
    const { collateralTokenPrice , debtTokenPrice , granularity  } = (0,use_token_prices/* useTokenPrices */.W)();
    const currentCollateralAmount = borrowerProfile?.collateralAmount ?? external_ethers_.BigNumber.from(0);
    const currentBorrowAmount = borrowerProfile?.debtAmount ?? external_ethers_.BigNumber.from(0);
    (0,external_react_.useEffect)(()=>{
        if (isFetchingBorrowerProfiles === false) {
            setCollateralRatio(getCollateralRatio?.()?.toString() ?? "");
        }
    }, [
        isFetchingBorrowerProfiles
    ]);
    const getActiveStream = ()=>{
        const emptyStream = {
            createdAtTimestamp: "0",
            currentFlowRate: "0",
            streamedUntilUpdatedAt: "0",
            updatedAtTimestamp: "0"
        };
        if (getStreamsResult === undefined) return emptyStream;
        console.log("stream result", getStreamsResult);
        const activeStreams = getStreamsResult.streams.filter((stream)=>Number(stream.currentFlowRate) > 0);
        if (activeStreams.length > 0) return activeStreams[0];
        return emptyStream;
    };
    const getFlowRate = ()=>{
        const activeStream = getActiveStream();
        if (activeStream === undefined) return 0;
        return Number((0,utils_.formatEther)(activeStream.currentFlowRate));
    };
    const getTotalStreamed = ()=>{
        const activeStream = getActiveStream();
        const currentTime = Math.floor(Date.now() / 1000);
        const streamedUntilUpdatedAt = external_ethers_.BigNumber.from(activeStream.streamedUntilUpdatedAt);
        const delta = external_ethers_.BigNumber.from(currentTime - Number(activeStream.updatedAtTimestamp));
        const currentFlowRate = external_ethers_.BigNumber.from(activeStream.currentFlowRate);
        const totalPaid = streamedUntilUpdatedAt.add(delta.mul(currentFlowRate));
        return Number((0,utils_.formatEther)(totalPaid));
    };
    const getCollateralRatio = ()=>{
        if (currentBorrowAmount.mul(debtTokenPrice).eq(0)) {
            return undefined;
        }
        return currentCollateralAmount.mul(collateralTokenPrice).div(currentBorrowAmount.mul(debtTokenPrice));
    };
    const interestPaid = totalStreamed;
    const rate = flowRate * constants/* RATE_MULTIPLE */.F;
    const getFormattedRate = ()=>{
        if (rate === undefined) {
            return `--/year`;
        }
        const annualizedRate = rate / constants/* RATE_MULTIPLE */.F * 60 * 60 * 24 * 365;
        return `USDC ${annualizedRate.toFixed(decimals)}/year`;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "font-bold text-blue--3",
            children: [
                currentDashboard === "borrower" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mb-4",
                    children: [
                        "Collateral Ratio | ",
                        collateralRatio
                    ]
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mb-4",
                    children: [
                        "Fixed APR | ",
                        fixedApr.toFixed(decimals)
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-4xl font-thin mb-4 text-white",
                    children: "Interest Paid"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Odometer, {
                    start: interestPaid,
                    rate: rate
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/usdc-logo.png",
                        width: 50,
                        height: 50,
                        alt: "USDC Logo"
                    })
                }),
                currentDashboard === "borrower" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Rate: ",
                        getFormattedRate()
                    ]
                }) : null
            ]
        })
    });
};
const LenderSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "font-bold text-blue--3",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mb-4",
                    children: [
                        "Fixed APR | ",
                        fixedApr.toFixed(decimals)
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-4xl font-thin mb-4 text-white",
                    children: "Interest Gained"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Odometer, {
                    start: 0,
                    rate: 0
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/usdc-logo.png",
                        width: 50,
                        height: 50,
                        alt: "USDC Logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Payout: (Once a day)"
                })
            ]
        })
    });
};


/***/ }),

/***/ 9654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ SuperButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SuperButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: "p-2 px-4 rounded-md font-bold bg-gradient-to-b from-brand-blue to-brand-purple"
    });
};


/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ RATE_MULTIPLE),
/* harmony export */   "L": () => (/* binding */ DECIMALS)
/* harmony export */ });
const DECIMALS = 2;
const RATE_MULTIPLE = 0.1;


/***/ }),

/***/ 8358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ useCurrentDashboard)
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./hooks/use-current-dashboard.ts

const useCurrentDashboard = ()=>{
    const { pathname  } = (0,router_namespaceObject.useRouter)();
    if (pathname.includes("lender")) return "lender";
    if (pathname.includes("borrower")) return "borrower";
};


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6938);
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1952);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9770);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5538);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dashboard_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3746);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);
([_components_header__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_9__.ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_9__.InMemoryCache()
});
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.goerli,
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({
        apiKey: process.env.ALCHEMY_ID
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({
    appName: "Flow Theory",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({
    autoConnect: true,
    connectors,
    provider
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {
        client: wagmiClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {
            chains: chains,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_9__.ApolloProvider, {
                client: client,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_selector__WEBPACK_IMPORTED_MODULE_7__/* .DashboardSelector */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-8 md:gap-0 mt-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_8__/* .Sidebar */ .Y, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ FlowTheoryLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FlowTheoryLogo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "110",
        height: "24",
        viewBox: "0 0 110 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_96_424)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M21.7032 5.7392C21.675 4.38206 21.0304 3.04305 19.8392 1.86694C17.3119 -0.628261 14.2879 -0.62196 11.75 1.88381L2.66187 10.8566L5.08462 13.2487L10.0692 8.32728L12.2905 10.5204L14.5767 8.26322L12.3554 6.07009L14.1727 4.27583C15.3502 3.11332 16.4503 3.06924 17.5358 4.14107C18.6214 5.21289 18.5768 6.29904 17.3994 7.46154L17.3823 7.47841L16.9816 7.874L17.3823 8.26959L18.9866 9.85356L19.3873 10.2492L19.7879 9.85356L19.805 9.83669C21.0765 8.58135 21.7329 7.16446 21.7032 5.73921L21.7032 5.7392Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M17.6625 21.246L16.0581 19.662L15.6574 19.2664L15.2567 19.662L15.069 19.8473C14.0382 20.865 13.1214 20.9079 12.1838 19.9821C11.2704 19.0804 11.3207 18.1541 12.3373 17.1503L15.6916 13.8386L17.6628 15.7849L19.949 13.5277L17.9778 11.5814L20.8622 8.73351L18.4395 6.34149L9.91455 14.7583C7.52626 17.1163 7.51352 19.9192 9.88051 22.2562C12.2475 24.5932 15.0864 24.5805 17.4747 22.2225L17.6625 22.0372L18.0631 21.6416L17.6625 21.246L17.6625 21.246Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M20.0273 19.7747C21.0164 19.7747 21.8182 18.9831 21.8182 18.0065C21.8182 17.03 21.0164 16.2383 20.0273 16.2383C19.0382 16.2383 18.2364 17.03 18.2364 18.0065C18.2364 18.9831 19.0382 19.7747 20.0273 19.7747Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1.89226 16.0321C2.93733 16.0321 3.78452 15.1956 3.78452 14.1638C3.78452 13.132 2.93733 12.2956 1.89226 12.2956C0.847195 12.2956 0 13.132 0 14.1638C0 15.1956 0.847195 16.0321 1.89226 16.0321Z",
                        fill: "#F8F9FF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip1_96_424)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M33.4636 5.13323C32.6897 4.39186 31.5859 4 30.2715 4C27.483 4 25.8182 5.6687 25.8182 8.46377V18.4725H28.4914V12.983H30.9423V10.4652H28.4914V8.46377C28.4914 7.16704 29.0737 6.53669 30.2715 6.53669C31.4693 6.53669 32.0516 7.16704 32.0516 8.46377V8.92385H34.706V8.46377C34.706 7.06348 34.2764 5.9118 33.4636 5.13323H33.4636Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M43.7487 8.35431C40.59 8.35431 38.2973 10.5952 38.2973 13.6826C38.2973 16.7701 40.59 19.0111 43.7487 19.0111C46.9075 19.0111 49.2001 16.7701 49.2001 13.6826C49.2001 10.5952 46.9075 8.35431 43.7487 8.35431ZM43.7487 16.4744C42.0983 16.4744 40.9894 15.3525 40.9894 13.6826C40.9894 12.0128 42.0983 10.8909 43.7487 10.8909C45.3992 10.8909 46.5081 12.0128 46.5081 13.6826C46.5081 15.3525 45.3992 16.4744 43.7487 16.4744Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M63.6954 8.74573H61.4642V14.5628C61.4642 15.9096 60.8487 16.6215 59.6842 16.6215C58.5529 16.6215 57.904 15.8711 57.904 14.5628V8.74573H55.2309V14.5628C55.2309 15.8904 54.6053 16.6215 53.4696 16.6215C52.305 16.6215 51.6895 15.9096 51.6895 14.5628V8.74573H49.0162V14.5628C49.0162 16.0209 49.4421 17.2153 50.2479 18.0168C50.9986 18.7635 52.054 19.1581 53.3001 19.1581C54.6606 19.1581 55.8219 18.6267 56.5769 17.6792C57.3319 18.6267 58.4931 19.1581 59.8536 19.1581C61.0996 19.1581 62.1551 18.7635 62.9058 18.0168C63.7116 17.2153 64.1375 16.0209 64.1375 14.5628V8.74573H63.6954Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M69.3722 14.536H67.1598V15.184C67.1598 16.3192 66.678 16.8479 65.6434 16.8479C64.6356 16.8479 64.1457 16.3036 64.1457 15.184V11.4899H66.3208V8.97212H64.1457V5.79544H61.4725V15.184C61.4725 17.8142 63.0317 19.3845 65.6434 19.3845C68.2551 19.3845 69.8143 17.8142 69.8143 15.184V14.536H69.3722L69.3722 14.536Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M75.848 10.0205C75.0093 9.19846 73.8594 8.76395 72.5228 8.76395C71.4798 8.76395 70.5558 9.09812 69.8575 9.7072V4.94821H67.1843V14.7637H69.8575V14.3225C69.8575 14.3225 70.7191 11.3006 72.2214 11.3006C73.7458 11.3006 74.5853 12.2253 74.5853 13.9043V14.9108H77.2585V13.9043C77.2585 12.268 76.7708 10.925 75.848 10.0205Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M79.9866 9.08295C76.8279 9.08295 74.5352 11.3238 74.5352 14.4113C74.5352 17.4987 76.8279 19.7397 79.9866 19.7397C82.3018 19.7397 84.1653 18.5767 84.9714 16.6286L85.2237 16.0189H82.3504L82.2189 16.2134C81.7627 16.8886 81.0534 17.2031 79.9866 17.2031C78.7138 17.2031 77.784 16.5797 77.4172 15.5105H85.4003V14.4113C85.4003 11.3238 83.1235 9.08295 79.9866 9.08295V9.08295ZM77.5335 13.0303C77.9673 12.1374 78.8503 11.6196 79.9866 11.6196C81.133 11.6196 82.0226 12.1374 82.4581 13.0303H77.5335Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M90.7334 9.37714C87.5746 9.37714 85.2819 11.618 85.2819 14.7055C85.2819 17.7929 87.5746 20.0339 90.7334 20.0339C93.8922 20.0339 96.1847 17.793 96.1847 14.7055C96.1847 11.618 93.8921 9.37714 90.7334 9.37714ZM90.7334 17.4973C89.0829 17.4973 87.9739 16.3753 87.9739 14.7055C87.9739 13.0356 89.0829 11.9138 90.7334 11.9138C92.3839 11.9138 93.4928 13.0357 93.4928 14.7055C93.4928 16.3753 92.3839 17.4973 90.7334 17.4973Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M97.9489 9.23004C95.1603 9.23004 93.4955 10.9128 93.4955 13.7314V15.2298H96.1688V13.7314C96.1688 12.391 96.7344 11.7667 97.9489 11.7667C99.1467 11.7667 99.729 12.4093 99.729 13.7314V14.2854H102.383V13.7502C102.383 10.9198 100.726 9.23004 97.9489 9.23004Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M107.145 9.62146V14.8183C107.145 16.4611 106.283 17.4032 104.781 17.4032C103.257 17.4032 102.417 16.4852 102.417 14.8183V13.5928H99.744V14.8183C99.744 16.4547 100.232 17.7977 101.155 18.7021C101.993 19.5242 103.143 19.9587 104.48 19.9587C105.528 19.9587 106.452 19.6243 107.145 19.0146V19.0663C107.145 20.7658 106.382 21.5573 104.743 21.5573C103.558 21.5573 102.81 21.1426 102.459 20.2896L102.347 20.016H99.6904L99.8335 20.5678C100.391 22.7169 102.226 24 104.743 24C106.21 24 107.446 23.5984 108.318 22.8385C109.313 21.9709 109.818 20.6891 109.818 19.0287V9.62146H107.145Z",
                        fill: "#F8F9FF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M36.53 18.9315C33.7415 18.9315 32.0767 17.2488 32.0767 14.4302V7.93076V7.4895H32.5188H34.3079H34.75V7.93076V14.4302C34.75 15.7706 35.3156 16.3949 36.53 16.3949C37.7279 16.3949 38.3102 15.7523 38.3102 14.4302V14.3174V13.8762H38.7523H40.5224H40.9645V14.3174V14.4114C40.9645 17.2418 39.3068 18.9315 36.53 18.9315H36.53Z",
                        fill: "#F8F9FF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_96_424",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "21.8182",
                            height: "24",
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip1_96_424",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "84",
                            height: "20",
                            fill: "white",
                            transform: "translate(25.8182 4)"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 2522:
/***/ ((module) => {

module.exports = require("ethers/lib/utils");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 9770:
/***/ ((module) => {

module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ 5538:
/***/ ((module) => {

module.exports = require("wagmi/providers/public");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,298,934,311], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();