import Image from './index'

export default {
    title: 'Layout/Image',
    component: Image
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
    image: 'https://picsum.photos/200/300'
}
