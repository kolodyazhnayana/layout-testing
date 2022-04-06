import Price from "./index"

export default {
    title: 'Layout/Price',
    component: Price
}

const Template = (args) => <Price {...args} />

export const Default = Template.bind({})
Default.args = {
    price: '1 000'
}
