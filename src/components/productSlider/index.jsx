import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from "../productCard"
import PropTypes from "prop-types"
import './index.css'

const ProductSlider = ({items}) => {
    const slides = items.map(item => (
        <SwiperSlide key={item.id}>
            <ProductCard item={item} />
        </SwiperSlide>
    ))

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
        >
            {slides}
        </Swiper>
    )
}

export default ProductSlider

ProductSlider.propTypes = {
    items: PropTypes.array
}
