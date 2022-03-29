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
import { Chat } from "../../components/components/molecules/chat/Chat";
export default {
    title: 'UI/Chat',
    component: Chat
};
var Template = function (args) { return _jsx(Chat, __assign({}, args)); };
export var ChatAsyncUser = Template.bind({});
ChatAsyncUser.args = {
    caseNumber: '00022542'
};
export var ChatAsyncAgent = Template.bind({});
ChatAsyncAgent.args = {
    caseNumber: '00022542',
    role: 'agent'
};
