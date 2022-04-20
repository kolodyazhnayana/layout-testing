import Heading from './index'

export default {
    title: 'Layout/Heading',
    component: Heading
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Электроника и техника для дома',
    link: 'https://market.yandex.ru/',
    titleLink: 'смотреть все'
}
