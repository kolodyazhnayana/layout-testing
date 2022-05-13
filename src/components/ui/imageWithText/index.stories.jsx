import ImageWithText from "./index"

export default {
    title: 'UI/ImageWithText',
    component: ImageWithText
}

const Template = (args) => <ImageWithText {...args} />

export const Black = Template.bind({})
Black.args = {
    textColor: 'black',
    title: 'text',
    image: 'https://yastatic.net/market-export/_/b-image/ya-plus/ya-plus-glyph-gradient.svg'
}

export const Purple = Template.bind({})
Purple.args = {
    textColor: 'purple',
    title: 'text',
    image: 'https://static.yandex.net/market-export/_/b-image/alisa/icon.svg'
}
