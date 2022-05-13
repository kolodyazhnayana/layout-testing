import ImageWithText from "../../ui/imageWithText"
import PropTypes from "prop-types"

const YandexPlus = ({title, image, className}) => {
    return (
        <ImageWithText
            className={className}
            title={title}
            image={image}
        />
    )
}

export default YandexPlus

YandexPlus.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
}