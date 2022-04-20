import ProductBlock from "./index"
import tabsJSON from '../../data/tabs.json'
import productCardJSON from '../../data/productCard.json'
import headingJSON from '../../data/productsInfo.json'

export default {
    title: 'Layout/ProductBlock',
    component: ProductBlock
}

const Template = (args) => <ProductBlock {...args} />

export const Default = Template.bind({})
Default.args = {
    tabs: tabsJSON,
    product: productCardJSON,
    heading: headingJSON[0].heading
}

