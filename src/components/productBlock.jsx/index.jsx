import './index.css'
import Heading from "../heading"
import TabsWrapper from "../tabsWrapper"
import Tab from "../tab"
import ProductSlider from "../productSlider"
import PropTypes from "prop-types"

const ProductBlock = ({tabs, product, heading}) => {
    return (
        <div className='product-block'>
            <Heading title={heading.title} link={heading.link} titleLink={heading.titleLink} className='product-block__heading' />
            <TabsWrapper className='product-block__tabs'>
                {tabs.map(item => <Tab key={item.id} text={item.title} />)}
            </TabsWrapper>
            <ProductSlider items={product} />
        </div>
    )
}

export default ProductBlock

ProductBlock.propTypes = {
    tabs: PropTypes.array,
    product: PropTypes.array,
    heading: PropTypes.object
}
