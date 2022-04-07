import Recommendation from "./index"

export default {
    title: 'Layout/Recommendation',
    component: Recommendation
}

const Template = (args) => <Recommendation {...args} />

export const Default = Template.bind({})
Default.args = {
    percent: 80
}

