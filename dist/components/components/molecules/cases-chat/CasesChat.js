var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { OrderDetail } from '../orders/order-detail/OrderDetail';
import { CaseCard } from './case-card/CaseCard';
import './casesChat.scss';
import { Chat } from '../chat/Chat';
import { getDashboard } from '../../../services/dashboard/DashboardService';
import { formatSellerOrder } from '../orders/Orders';
export var CasesChat = function () {
    var _a = useState(''), orderNumber = _a[0], setOrderNumber = _a[1];
    var _b = useState(), caseData = _b[0], setCaseData = _b[1];
    var _c = useState(), orderData = _c[0], setOrderData = _c[1];
    function loadDash() {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(orderNumber != '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, getDashboard(orderNumber)];
                    case 1:
                        response = _a.sent();
                        if (response === null || response === void 0 ? void 0 : response.order) {
                            formatSellerOrder(response.order.deliveryOrders[0]);
                        }
                        setCaseData(response === null || response === void 0 ? void 0 : response.case);
                        setOrderData(response === null || response === void 0 ? void 0 : response.order.deliveryOrders[0]);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    useEffect(function () {
        var urlParams = new URLSearchParams(window.location.search);
        setOrderNumber(urlParams.get("orderNumber") || "");
        if (!orderData) {
            loadDash();
        }
    }, [orderNumber]);
    return (_jsx("div", __assign({ className: "Cases-chat" }, { children: _jsxs("div", __assign({ className: "cases-chat__content" }, { children: [_jsxs("div", __assign({ className: "order-case__container" }, { children: [_jsx("div", __assign({ className: "case-detail__container" }, { children: caseData && React.createElement(CaseCard, caseData) })), _jsx("div", __assign({ className: "order-detail__container" }, { children: orderData && React.createElement(OrderDetail, orderData) }))] })), orderData && (_jsx("div", __assign({ className: "chat__container pannel" }, { children: _jsx(Chat, { caseNumber: caseData === null || caseData === void 0 ? void 0 : caseData.caseNumber }) })))] })) })));
};
