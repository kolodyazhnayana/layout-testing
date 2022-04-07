import ProductCard from "./index"

export default {
    title: 'Layout/ProductCard',
    component: ProductCard
}

const Template = (args) => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {
    item: {
        image: "https://avatars.mds.yandex.net/get-marketpic/1847688/pic96d006648fb503611985e24f7b6152ab/200x200",
        price: "161 689",
        title: "Смартфон Apple iPhone 13 Pro 512 ГБ, небесно-голубой",
        variants: "Еще 12 вариантов",
        recommendation: 90,
        link: "https://market.yandex.ru/",
        ya_plus: {
            title: "122 балла на плюс",
            image: "https://yastatic.net/market-export/_/b-image/ya-plus/ya-plus-glyph-gradient.svg"
        },
        alice: {
            title: "Алиса живет здесь",
            image: "https://static.yandex.net/market-export/_/b-image/alisa/icon.svg"
        },
        rating: {
            grade: 3,
            total: 5,
            reviews: 17
        }
    }
}
