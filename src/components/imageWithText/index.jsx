import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const ImageWithText = ({text, image, textColor, className}) => {
    const spanClass = clsx(
        'image-with-text__text',
        textColor && `image-with-text__text_${textColor}`
    )

    return (
        <div className={clsx('image-with-text', className)}>
            <img className='image-with-text__image' src={image} />
            <span className={spanClass}>
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
