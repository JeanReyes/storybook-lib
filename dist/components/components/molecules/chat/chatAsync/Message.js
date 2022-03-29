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
import { chatContext } from '../../../../tenants/chatContext';
import { DateChat } from '../../../../utils/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons';
export var Message = function (_a) {
    var msg = _a.msg;
    var roleContext = useContext(chatContext).role;
    var message = msg.message, timestamp = msg.timestamp, attachments = msg.attachments, role = msg.role, sentiment = msg.sentiment;
    var emojiMessage = function (sentiment) {
        if (sentiment === 'neutral') {
            return '😐';
        }
        else if (sentiment === 'positive') {
            return '😀';
        }
        else if (sentiment === 'negative') {
            return '😡';
        }
    };
    var ComponentFile = function (_a) {
        var files = _a.files;
        var download = function (file) {
            var contentType = file.contentType, content = file.content, name = file.name;
            var base64 = "data:".concat(contentType, ";base64,").concat(content);
            // fetch(base64).then(async data => saveAs(await data.blob(), name ));
        };
        var nameFile = function (name) {
            if (name.length > 20) {
                return name.slice(0, name.length - (name.length - 20)) + '...';
            }
            else {
                return name;
            }
        };
        return _jsx(_Fragment, { children: files.map(function (file, index) { return (_jsx("div", __assign({ className: "container_file" }, { children: _jsxs("div", __assign({ className: "container_download" }, { children: [_jsx(FontAwesomeIcon, { icon: faFile }), _jsx("span", { children: nameFile(file.name) }), _jsx(FontAwesomeIcon, { icon: faDownload, style: { float: 'right', cursor: 'pointer' }, onClick: function () { return download(file); } })] })) }), index)); }) });
    };
    return (_jsxs("div", { children: [" ", (roleContext === role) ?
                _jsx("div", __assign({ className: 'message_user' }, { children: _jsxs("div", __assign({ className: 'message_user_text' }, { children: [_jsx("div", __assign({ style: { display: 'flex', justifyContent: 'flex-end' } }, { children: emojiMessage(sentiment) })), message, (attachments && attachments.length > 0) && _jsx(ComponentFile, { files: attachments }), _jsx("div", __assign({ className: "container_hora_message" }, { children: _jsxs("span", __assign({ style: { float: 'right' } }, { children: [(new DateChat(timestamp).format('hh:mm')), " hrs. "] })) }))] })) }))
                : _jsx("div", __assign({ className: 'message_agente' }, { children: _jsxs("div", __assign({ className: 'message_agente_text' }, { children: [_jsx("div", __assign({ style: { display: 'flex', justifyContent: 'flex-start' } }, { children: emojiMessage(sentiment) })), message, (attachments && attachments.length > 0) && _jsx(ComponentFile, { files: attachments }), _jsx("div", __assign({ className: "container_hora_message" }, { children: _jsxs("span", __assign({ style: { float: 'right' } }, { children: [(new DateChat(timestamp).format('hh:mm')), " hrs. "] })) }))] })) }))] }));
};
