import './index.css'
import Image from "../../ui/image"
import Price from "../../ui/price"
import Rating from "../../ui/rating"
import Text from "../../ui/text"
import Recommendation from "../../ui/recommendation"
import Button from "../../ui/button"
import PropTypes from "prop-types"
import YandexPlus from '../yandexPlus'
import Variants from "../variants"
import Alice from "../alice"

const ProductCard = ({link, image, price, ya_plus, rating, title, variants, recommendation, alice}) => {
    return (
        <div className='card'>
            <a className='card__link' href={link} target='_blank'>
                <Image src={image} alt={title} />
                <div className='card__info'>
                    <Price price={price} className='card__price' />

                    { ya_plus && <YandexPlus {...ya_plus} className='card__ya-plus' /> }

                    <Rating {...rating} />

                    <Text text={title} className='card__description' />

                    { variants && <Variants title={variants} className='card__variants' /> }

                    { recommendation && <Recommendation title={recommendation} className='card__secondary' /> }

                    { alice && <Alice {...alice} className='card__secondary' /> }
                </div>
            </a>
            <Button
                label='В корзину'
                handleClick={() => console.log('В корзину')}
                styleType='primary'
                size='large'
            />
        </div>
    )
}

export default ProductCard

ProductCard.propTypes = {
    item: PropTypes.object
}

