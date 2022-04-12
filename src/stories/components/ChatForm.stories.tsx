import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatForm } from "../../components/components/molecules/chat/chatAsync/ChatForm";

export default {
    title: 'UI/ChatForm',
    component: ChatForm
} as ComponentMeta<typeof ChatForm>

const Template: ComponentStory<typeof ChatForm> = () => <ChatForm />

export const ChatForm1 = Template.bind({})

