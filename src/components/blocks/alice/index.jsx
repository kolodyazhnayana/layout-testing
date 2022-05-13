import ImageWithText from "../../ui/imageWithText"
import PropTypes from "prop-types"

const Alice = ({title, image, className}) => {
    return (
        <ImageWithText
            className={className}
            title={title}
            image={image}
            textColor='purple'
        />
    )
}

export default Alice

Alice.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
}