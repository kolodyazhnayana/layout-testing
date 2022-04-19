import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from "../productCard"
import PropTypes from "prop-types"
import './index.css'

const ProductSlider = ({items}) => {
    const slides = items.map(item => (
        <SwiperSlide key={item.id} className='swiper-slide__product-slider'>
            <ProductCard item={item} />
        </SwiperSlide>
    ))

    return (
        <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
            className='swiper__product-slider'
            mousewheel={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                1025: {
                    slidesPerView: 6,
                    spaceBetween: 10
                }
            }}
        >
            {slides}
        </Swiper>
    )
}

export default ProductSlider

ProductSlider.propTypes = {
    items: PropTypes.array
}
