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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { getDeliveryMethod } from "../../../../constants/deliveryMethod";
import "./orderDetail.scss";
export var OrderDetail = function (order) {
    var _a, _b;
    return (_jsx("div", { children: _jsx("div", __assign({ className: "order-card__detail pannel" }, { children: _jsxs("div", __assign({ className: "order-card__product" }, { children: [_jsxs("p", __assign({ className: "order-card__number" }, { children: ["Pedido N\u00BA: ", order.reservationNumber] })), _jsxs("label", __assign({ className: "order-card__deliveryMethod" }, { children: [getDeliveryMethod(order.deliveryMethod), " ", (_b = (_a = order === null || order === void 0 ? void 0 : order.deliveryInfo) === null || _a === void 0 ? void 0 : _a.deliveredDate) === null || _b === void 0 ? void 0 : _b.split(" ")[0]] })), _jsxs("div", __assign({ className: "product_container" }, { children: [_jsx("img", { className: "product-img", alt: "", src: order.shipments[0].orderLines[0].item.imageUrl }), _jsxs("div", __assign({ className: "product-detail" }, { children: [_jsx("p", __assign({ className: "product-detail__name" }, { children: order.shipments[0].orderLines[0].item.displayName })), _jsx("p", __assign({ className: "product-detail__brand" }, { children: order.shipments[0].orderLines[0].item.brandName })), _jsx("p", __assign({ className: "product-detail__seller" }, { children: order.shipments[0].orderLines[0].seller.name }))] }))] }))] })) })) }));
};
