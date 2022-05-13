import Recommendation from "./index"

export default {
    title: 'UI/Recommendation',
    component: Recommendation
}

const Template = (args) => <Recommendation {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "90% рекомендуют"
}

