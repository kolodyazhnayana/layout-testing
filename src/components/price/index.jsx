import './index.css'

const Price = ({ price }) => {
    return (
        <div className='price'>
            {price} <span className='price_small'>₽</span>
        </div>
    )
}

export default Price
