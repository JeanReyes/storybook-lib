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
import { getCaseStatus } from "../../../../constants/case";
import "./caseCard.scss";
export var CaseCard = function (caseOrder) {
    var _a;
    var _b = getCaseStatus(caseOrder.status, caseOrder.levelNumber), status = _b.status, actualStatus = _b.actualStatus;
    return (_jsx("div", { children: _jsxs("div", __assign({ className: "case-card__detail pannel" }, { children: [_jsxs("label", __assign({ className: "case-card-number" }, { children: ["Caso N\u00BA: ", caseOrder.caseNumber] })), _jsxs("label", __assign({ className: "case-card-status" }, { children: ["Fecha: ", (_a = caseOrder === null || caseOrder === void 0 ? void 0 : caseOrder.createdDate) === null || _a === void 0 ? void 0 : _a.toString().split(" ")[0]] })), _jsxs("label", __assign({ className: "case-card-status" }, { children: ["Estado: ", status] })), _jsxs("label", __assign({ className: "case-card-status" }, { children: ["Tipo: ", caseOrder.typificationName] }))] })) }));
};
