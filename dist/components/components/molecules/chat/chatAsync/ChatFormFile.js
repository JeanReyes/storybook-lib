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
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
export var ChatFormFile = function (_a) {
    var handleFile = _a.handleFile;
    var file = useRef({});
    var viewFiles = function () {
        if (file.current !== null && handleFile) {
            handleFile(file.current.files);
        }
    };
    return (_jsxs("div", __assign({ className: "container_form_file", onChange: viewFiles }, { children: [_jsx("label", __assign({ htmlFor: "file-input", style: { cursor: 'pointer' } }, { children: _jsx(FontAwesomeIcon, { icon: faPaperclip }) })), _jsx("input", { id: "file-input", multiple: true, type: "file", ref: file, style: { display: 'none' } })] })));
};
