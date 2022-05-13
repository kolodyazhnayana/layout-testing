import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const Price = ({ price, className }) => {
    return (
        <div className={clsx('price', className)}>
            {price} <span className='price_small'>₽</span>
        </div>
    )
}

export default Price

Price.propTypes = {
    price: PropTypes.string
}
