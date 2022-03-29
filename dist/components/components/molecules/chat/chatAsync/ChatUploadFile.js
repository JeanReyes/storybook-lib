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
import { useContext } from 'react';
import { formContext } from '../../../../tenants/chatContext';
export var ChatUploadFile = function () {
    var _a = useContext(formContext), message = _a.message, setMessage = _a.setMessage;
    console.log(" message.attachments", message.attachments);
    var removeFile = function (index) {
        var array = message.attachments;
        array.splice(index, 1);
        setMessage(__assign(__assign({}, message), { attachments: array }));
    };
    return (_jsx(_Fragment, { children: message.attachments.map(function (file, index) { return (_jsxs("div", __assign({ className: "attachment_container" }, { children: [_jsx("p", __assign({ className: 'remove_text_file' }, { children: file.name }), index), _jsx("img", { src: "https://customer.falabella.com/prd/cust/ctcm/ftc/corp/virtual-assistant/front/assets/images/close-icon.svg", className: 'remove_file', onClick: function () { return removeFile(index); }, alt: "" })] }), index)); }) }));
};
