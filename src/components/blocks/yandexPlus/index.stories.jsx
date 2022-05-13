import YandexPlus from "./index"

export default {
    title: 'Blocks/YandexPlus',
    component: YandexPlus
}

const Template =(args) => <YandexPlus {...args} />

export const Default = Template.bind({})
Default.args = {
    title: '55 баллов на Плюс',
    image: 'https://yastatic.net/market-export/_/b-image/ya-plus/ya-plus-glyph-gradient.svg'
}
