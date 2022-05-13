import ProductSlider from "./index"
import productCardJSON from '../../../data/productCard.json'

export default {
    title: 'Blocks/ProductSlider',
    component: ProductSlider
}

const Template = (args) => <ProductSlider {...args} />

export const Default = Template.bind({})
Default.args = {
    items: productCardJSON
}
