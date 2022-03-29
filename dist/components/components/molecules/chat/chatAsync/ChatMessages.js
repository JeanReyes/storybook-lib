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
import { useContext, useEffect, useRef, useState } from 'react';
import { chatContext } from '../../../../tenants/chatContext';
import { Message } from './Message';
import { DateChat } from '../../../../utils/date';
export var ChatMessages = function () {
    var scrollContainer = useRef(null);
    var messageScroll = useRef([]);
    var _a = useContext(chatContext), data = _a.data, msg = _a.msg;
    var _b = useState(0), qtyMsgs = _b[0], setQtyMsgs = _b[1];
    useEffect(function () {
        if (data && data.length > 0) {
            console.log("N\u00FAmero de mensajes -> ".concat(qtyMsgs));
            if (scrollContainer.current !== null) {
                scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
            }
        }
    }, [qtyMsgs, data]);
    useEffect(function () {
        if (qtyMsgs !== data.length) {
            setQtyMsgs(data.length);
        }
    }, [data, msg, qtyMsgs]); // revisar esto con la paginación
    var TimeMessage = function (_a) {
        var msg = _a.msg, index = _a.index, array = _a.array;
        var refElement = msg.timestamp;
        var previusElement = array[index - 1] ? (array[index - 1].timestamp) : undefined;
        return (_jsx("div", __assign({ className: "container_message_time" }, { children: _jsx("div", __assign({ className: "container_message_text" }, { children: new DateChat(refElement, previusElement).format('time_message') })) })));
    };
    return (_jsx("div", __assign({ className: "container_message mb-4", ref: scrollContainer }, { children: data.map(function (msg, i, array) { return (_jsxs("div", __assign({ ref: function (element) {
                element === null || element === void 0 ? void 0 : element.setAttribute('timestamp', msg.timestamp);
                return messageScroll.current[i] = element;
            } }, { children: [_jsx(TimeMessage, { msg: msg, index: i, array: array }), _jsx(Message, { msg: msg })] }), String(msg._id))); }) })));
};
