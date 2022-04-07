import './index.css'
import Image from "../image"
import Price from "../price"
import Rating from "../rating"
import Text from "../text"
import Recommendation from "../recommendation"
import Button from "../button"
import ImageWithText from "../imageWithText"
import PropTypes from "prop-types"

const ProductCard = ({item}) => {
    return (
        <div className='card'>
            <a className='card__link' href={item.link} target='_blank'>
                <Image image={item.image} />
                <div className='card__info'>
                    <Price price={item.price} className='card__price' />
                    {
                        item.ya_plus &&
                        <ImageWithText
                            text={item.ya_plus.title}
                            image={item.ya_plus.image}
                        />
                    }
                    <Rating grade={item.rating.grade} reviews={item.rating.reviews} total={item.rating.total} className='card__rating' />
                    <Text text={item.title} className='card__description' />
                    {
                        item.variants &&
                        <Text text={item.variants} styleType='secondary' className='card__variants' />
                    }
                    {
                        item.recommendation &&
                        <Recommendation percent={item.recommendation} className='card__secondary' />
                    }
                    {
                        item.alice &&
                        <ImageWithText
                            text={item.alice.title}
                            image={item.alice.image}
                            textColor='purple'
                            className='card__secondary'
                        />
                    }
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

