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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getDeliveryMethod, getDeliveryStatus } from "../../../../constants/deliveryMethod";
import "./ordersList.scss";
export var OrdersCard = function (customerOrder) {
    var order = customerOrder.order;
    var viewCase = function (sellerOrder) {
        window.location.href = "/cases-chat/user?orderNumber=".concat(sellerOrder);
    };
    var formattedDate = order.createdAt.split(" ")[0];
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: "order-card" }, { children: [_jsxs("div", __assign({ className: "card-title-container" }, { children: [_jsx("p", __assign({ className: "card-title" }, { children: "Compra online" })), _jsxs("label", __assign({ className: "order-date" }, { children: ["Fecha de la compra: ", formattedDate] }))] })), _jsx("div", __assign({ className: "order-card__detail" }, { children: order.deliveryOrders.map(function (orderDelivery, index) {
                        var _a, _b;
                        return (_jsxs("div", { children: [_jsx("hr", {}), _jsxs("div", __assign({ className: "card-content" }, { children: [_jsxs("div", __assign({ className: "order-card--product" }, { children: [_jsxs("p", __assign({ className: "order-card-number" }, { children: ["Pedido N\u00BA: ", orderDelivery.reservationNumber] })), _jsxs("label", __assign({ className: "order-card-deliveryMethod" }, { children: [getDeliveryMethod(orderDelivery.deliveryMethod), " ", (_b = (_a = orderDelivery === null || orderDelivery === void 0 ? void 0 : orderDelivery.deliveryInfo) === null || _a === void 0 ? void 0 : _a.deliveredDate) === null || _b === void 0 ? void 0 : _b.split(" ")[0]] })), _jsxs("div", __assign({ className: "order-card-status" }, { children: [_jsx("div", __assign({ className: "product_container__img" }, { children: _jsx("img", { className: "product-img", alt: "", src: orderDelivery.shipments[0].orderLines[0].item.imageUrl }) })), _jsxs("p", __assign({ className: "order-card-deliveryStatus" }, { children: ["Estado: ", getDeliveryStatus(orderDelivery.shipments[0].currentStatus)] }))] }))] })), _jsx("div", __assign({ className: "order-card--actions" }, { children: _jsx("button", __assign({ className: "button", onClick: function (e) { return viewCase(orderDelivery.reservationNumber); } }, { children: "Abrir conversaci\u00F3n" })) }))] }))] }, index));
                    }) }))] })) }));
};
