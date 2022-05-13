import Variants from "./index"

export default {
    title: 'Blocks/Variants',
    component: Variants
}

const Template =(args) => <Variants {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Еще 3 варианта'
}