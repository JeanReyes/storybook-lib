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
import { useState, useContext, useRef } from 'react';
import { chatContext, formContext } from '../../../../tenants/chatContext';
import { usePost } from '../../../../hook/axios/Post';
import { ChatFormFile } from './ChatFormFile';
import { ChatUploadFile } from './ChatUploadFile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export var ChatForm = function () {
    var _a = useContext(chatContext), URL = _a.URL, handleMessage = _a.handleMessage, role = _a.role;
    var _b = usePost(URL), post = _b.post, postFile = _b.postFile; // colocar URL
    var initialMessage = {
        message: '',
        attachments: [],
        user: 'hosting',
        role: role,
        sentiment: {}
    };
    var _c = useState(initialMessage), message = _c[0], setMessage = _c[1];
    var _d = useState(36), heightTextArea = _d[0], setheightTextArea = _d[1];
    var refTextArea = useRef(null);
    var handleInput = function (_a) {
        var target = _a.target;
        setheightTextArea(target.scrollHeight);
        setMessage(__assign(__assign({}, message), { message: target.value }));
    };
    var handleFile = function (file) {
        var attachments = message.attachments;
        // let array: File[] | FileList = [ ...attachments as File[], ...file]
        // console.log(array);
        if (attachments) {
            // setMessage({
            //     ...message,
            //     attachments: array   
            // });
        }
    };
    var handleSubmit = function (e) {
        if (e)
            e.preventDefault();
        if (message.message.length > 0 && (message.attachments !== undefined && message.attachments.length > 0)) {
            postFile(message)
                .then(function (data) {
                handleMessage(data);
                setMessage(initialMessage);
            });
        }
        else if (message.message.length > 0) {
            post(message)
                .then(function (data) {
                handleMessage(data);
                setMessage(initialMessage);
            });
        }
        else {
            postFile(message)
                .then(function (data) {
                handleMessage(data);
                setMessage(initialMessage);
            });
        }
        setheightTextArea(36);
    };
    var enterSubmit = function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            return false;
        }
    };
    return (
    // ordenar el formulario File con composicion de componentes
    _jsx(formContext.Provider, __assign({ value: {
            message: message,
            setMessage: setMessage
        } }, { children: _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsxs("div", __assign({ className: "container_form" }, { children: [_jsx(ChatFormFile, { handleFile: handleFile }), _jsxs("div", __assign({ className: "input-group" }, { children: [_jsx("textarea", { ref: refTextArea, className: "form-control", value: message.message, placeholder: "Escribe un mensaje...", onChange: handleInput, onKeyPress: enterSubmit, style: { height: heightTextArea, maxHeight: '132px' } }), _jsx("button", __assign({ className: "btn btn-outline-secondary" }, { children: _jsx(FontAwesomeIcon, { icon: faPaperPlane }) }))] }))] })), _jsx(ChatUploadFile, {})] })) })));
};
