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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChatAsync } from './chatAsync/ChatAsync';
import { ChatForm } from './chatAsync/ChatForm';
import { ChatMessages } from './chatAsync/ChatMessages';
import '../../../styles/index.scss';
export var Chat = function (_a) {
    var caseNumber = _a.caseNumber, _b = _a.role, role = _b === void 0 ? 'user' : _b;
    return (_jsx(ChatAsync, __assign({ caseNumber: caseNumber, role: role }, { children: _jsxs("div", __assign({ className: "card" }, { children: [_jsx("div", __assign({ className: "container_header" }, { children: _jsx("div", __assign({ className: "container_title_video_call" }, { children: _jsx("p", __assign({ style: { textAlign: 'left' } }, { children: " Chat As\u00EDncrono :) " })) })) })), _jsxs("div", { children: [_jsx(ChatMessages, {}), _jsx(ChatForm, {})] })] })) })));
};
