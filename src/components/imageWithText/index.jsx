import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const ImageWithText = ({text, image, textColor}) => {
    const className = clsx(
        'image-with-text__text',
        textColor && `image-with-text__text_${textColor}`
    )

    return (
        <div className='image-with-text'>
            <img className='image-with-text__image' src={image} />
            <span className={className}>
                {text}
            </span>
        </div>
    )
}

export default ImageWithText

ImageWithText.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
    textColor: PropTypes.oneOf(['purple', 'black'])
}
