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
            <ProductCard {...item} />
        </SwiperSlide>
    ))

    return (
        <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={20}
            slidesPerView='auto'
            navigation
            className='swiper__product-slider'
            mousewheel={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                540: {
                    slidesPerView: 3.5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1025: {
                    slidesPerView: 6,
                    spaceBetween: 20
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
