import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chat } from "../../components/components/molecules/chat/Chat";

export default {
    title: 'UI/Chat',
    component: Chat
} as ComponentMeta<typeof Chat>

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />

export const ChatAsyncUser = Template.bind({})
ChatAsyncUser.args = {
    caseNumber: '00022542'
}

export const ChatAsyncAgent = Template.bind({})
ChatAsyncAgent.args = {
    caseNumber: '00022542'
}