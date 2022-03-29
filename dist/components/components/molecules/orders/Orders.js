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
import { useState } from 'react';
import './OrdersStyle.css';
import { getOrders } from '../../../services/my-orders/MyOrdersService';
import { OrdersCard } from './orders-list/OrdersList';
var getStatusMessage = function (originalStatus) {
    var description = '';
    switch (originalStatus) {
        case 'PAYMENT_PENDING':
            description = 'Pendiente de pago';
            break;
        case 'IN_PROCESS':
            description = 'Reservado';
            break;
        case 'WITH_INVOICE':
        case 'PAYMENT_CONFIRMED':
        case 'SHIPMENT_IN_PROCESS':
        case 'BROKEN':
            description = 'Pedido en curso';
            break;
        case 'DELAYED':
            description = 'Pedido en curso';
            break;
        case 'DELIVERED':
            description = 'Pedido finalizado';
            break;
        case 'READY_TO_PICKUP':
            description = 'Listo para retiro';
            break;
        case 'CANCELED':
            description = 'Pedido cancelado';
            break;
        case 'EXPIRED':
            description = 'Pedido expirado';
            break;
        default:
            description = originalStatus;
            break;
    }
    return description;
};
var getDeliveryStatus = function (originalStatus) {
    switch (originalStatus) {
        case 'PICKUP_FROM_STORE':
            originalStatus = 'Retiro en tienda';
            break;
        case 'HOME_DELIVERY':
            originalStatus = 'Despacho a domicilio';
            break;
        case 'DELIVERED':
            originalStatus = 'Despacho a domicilio';
            break;
        default:
            originalStatus = 'Sin información';
            break;
    }
    return originalStatus;
};
export var formatSellerOrder = function (sellerOrder) {
    sellerOrder.shipments[0].currentStatus = getStatusMessage(sellerOrder.shipments[0].currentStatus);
    sellerOrder.deliveryMethod = getDeliveryStatus(sellerOrder.deliveryMethod);
};
var formatOrder = function (orderData) {
    for (var _i = 0, _a = orderData.customerOrders; _i < _a.length; _i++) {
        var order = _a[_i];
        for (var _b = 0, _c = order.deliveryOrders; _b < _c.length; _b++) {
            var sellerOrder = _c[_b];
            formatSellerOrder(sellerOrder);
        }
    }
};
export var Orders = function () {
    var _a = useState({}), ordersData = _a[0], setOrdersData = _a[1];
    var _b = useState(''), caseEmailInput = _b[0], setCaseEmailInput = _b[1];
    var changePageBack = function (paginationData, email) {
        if (paginationData.page - 1 < 1) {
        }
        else {
            var page = paginationData.page - 1;
            viewOrdersByEmail(email, page);
        }
    };
    var changePageUp = function (paginationData, email) {
        if (paginationData.page + 1 > paginationData.totalPages) {
        }
        else {
            var page = paginationData.page + 1;
            viewOrdersByEmail(email, page);
        }
    };
    var viewOrdersByEmail = function (email, page) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getOrders(email, page)];
                case 1:
                    response = _a.sent();
                    if (response) {
                        formatOrder(response);
                        setOrdersData(response);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ className: "Orders" }, { children: _jsxs("div", __assign({ className: "Orders-body" }, { children: [_jsxs("div", __assign({ className: "orders-search pannel" }, { children: [_jsx("p", __assign({ className: "title" }, { children: "Revisi\u00F3n de casos y compras" })), _jsxs("div", __assign({ className: "input-container" }, { children: [_jsx("p", __assign({ className: "subtitle" }, { children: "Ingrese su email:" })), _jsx("input", { className: "search_inputs", value: caseEmailInput, type: "text", onInput: function (e) { return setCaseEmailInput(e.currentTarget.value); } }, "email")] })), _jsx("button", __assign({ className: 'button', onClick: function (e) { return viewOrdersByEmail(caseEmailInput); } }, { children: "Ver detalle" }))] })), ordersData && ordersData.pagination && ordersData.pagination.totalPages > 1 && (_jsxs("div", __assign({ className: "orders-pagination" }, { children: [_jsx("div", __assign({ className: "before-arrow arrow", onClick: function (e) { return changePageBack(ordersData.pagination, caseEmailInput); } }, { children: '<' })), _jsxs("p", { children: ["P\u00E1gina ", ordersData.pagination.page, " de ", ordersData.pagination.totalPages] }), _jsx("div", __assign({ className: "next-arrow arrow", onClick: function (e) { return changePageUp(ordersData.pagination, caseEmailInput); } }, { children: '>' }))] }))), ordersData && ordersData.customerOrders &&
                    ordersData.customerOrders.map(function (customerOrder, index) {
                        return _jsx("div", __assign({ className: 'orders-container pannel' }, { children: _jsx(OrdersCard, { order: customerOrder }) }), index);
                    })] })) })));
};
