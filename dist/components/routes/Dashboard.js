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
import { Routes, Route } from 'react-router-dom';
import { Chat } from '../components/molecules/chat/Chat';
import { Orders } from '../components/molecules/orders/Orders';
import { CasesChat } from '../components/molecules/cases-chat/CasesChat';
import { Header } from '../components/header/Header';
export var Dashboard = function () {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", __assign({ className: "container" }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/portal", element: _jsx(Orders, {}) }), _jsx(Route, { path: "/cases-chat", element: _jsx(CasesChat, {}) }), _jsx(Route, { path: "/cases-chat/:role", element: _jsx(CasesChat, {}) }), _jsx(Route, { path: "/chat/:role/:number_case", element: _jsx(Chat, {}) }), _jsx(Route, { path: "/chat/:role/:number_case/:sync", element: _jsx(Chat, {}) })] }) }))] }));
};
