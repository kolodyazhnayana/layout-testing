import './index.css'
import Image from "../image"
import Price from "../price"
import Rating from "../rating"
import Description from "../description"
import Recommendation from "../recommendation"
import VariantsLink from "../variantsLink"
import Button from "../button"
import ImageWithText from "../imageWithText"

const ProductCard = () => {
    return (
        <div className='card'>
            <a className='card__link' href='https://market.yandex.ru/' target='_blank'>
                <Image img='https://avatars.mds.yandex.net/get-marketpic/1847688/pic96d006648fb503611985e24f7b6152ab/200x200' />
                <div className='card__descr-block'>
                    <Price price='161 689' />
                    <ImageWithText
                        text='122 балла на плюс'
                        image='https://yastatic.net/market-export/_/b-image/ya-plus/ya-plus-glyph-gradient.svg'
                    />
                    <Rating count='292' />
                    <Description text='Смартфон Apple iPhone 13 Pro 512 ГБ, небесно-голубой' className='card__description' />
                    <VariantsLink text='Еще 12 вариантов' link='/' />
                    <Recommendation text='90% рекомендуют' />
                    <ImageWithText
                        text='Алиса живет здесь'
                        image='https://static.yandex.net/market-export/_/b-image/alisa/icon.svg'
                        styleType='purple'
                    />

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
