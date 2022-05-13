import Alice from "./index"

export default {
    title: 'Blocks/Alice',
    component: Alice
}

const Template =(args) => <Alice {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Алиса живет здесь',
    image: 'https://static.yandex.net/market-export/_/b-image/alisa/icon.svg'
}