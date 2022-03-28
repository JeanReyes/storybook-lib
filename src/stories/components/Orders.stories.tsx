
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Orders } from "../../components/components/molecules/orders/Orders"


export default {
    title: 'UI/Orders',
    component: Orders
} as ComponentMeta<typeof Orders>

const Template: ComponentStory<typeof Orders> = (args) => <Orders />

export const Orders1 = Template.bind({})
