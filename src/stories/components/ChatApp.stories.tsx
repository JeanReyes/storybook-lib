import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../App';

export default {
    title: 'UI/Chat',
    component: App
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App />

export const Dedault = Template.bind({})
Dedault.args = {
    nav: false
}

