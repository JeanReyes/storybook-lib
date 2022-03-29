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
import { jsx as _jsx } from "react/jsx-runtime";
import './header.scss';
var goToPortal = function () {
    window.location.href = '/portal';
};
export var Header = function () {
    return (_jsx("header", __assign({ className: "Portal-header" }, { children: _jsx("div", __assign({ onClick: goToPortal, className: 'logo_background' }, { children: _jsx("img", { className: "fala_logo", src: "https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt9f6f7671ced09c38/6126b34e8e16ab655b346002/hr-1-logo-desktop.svg" }) })) })));
};
