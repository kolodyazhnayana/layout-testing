import Text from "./index"

export default {
    title: 'Layout/Text',
    component: Text
}

const Template = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: 'text',
    styleType: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: 'text',
    styleType: 'secondary'
}
