import Tab from "./index"

export default {
    title: 'UI/Tab',
    component: Tab
}

const Template = (args) => <Tab {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
    text: 'Бытовая техника'
}

export const Primary = Template.bind({})
Primary.args = {
    text: 'Электроника',
    active: true
}
