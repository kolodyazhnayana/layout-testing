import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const ImageWithText = ({title, image, textColor, className}) => {
    const spanClass = clsx(
        'image-with-text__text',
        textColor && `image-with-text__text_${textColor}`
    )

    return (
        <div className={clsx('image-with-text', className)}>
            <img className='image-with-text__image' src={image} />
            <span className={spanClass}>
                {title}
            </span>
        </div>
    )
}

export default ImageWithText

ImageWithText.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    textColor: PropTypes.oneOf(['purple', 'black'])
}
