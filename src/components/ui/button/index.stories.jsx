import Button from "./index"

export default {
    title: 'UI/Button',
    component: Button
}

const Template = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Кнопка'
}

export const Primary = Template.bind({})
Primary.args = {
    styleType: 'primary',
    label: 'В корзину'
}

export const Large = Template.bind({})
Large.args = {
    label: 'Кнопка',
    size: 'large'
}