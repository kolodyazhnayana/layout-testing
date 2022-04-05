import Description from "./index"

export default {
    title: 'Layout/Description',
    component: Description
}

const Template = (args) => <Description {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'description'
}