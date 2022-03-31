import './index.css'

const ImageWithText = ({text, image, styleType}) => {
    return (
        <div className='image-with-text'>
            <img className='image-with-text__image' src={image} />
            <span className={`image-with-text__text image-with-text__text_${styleType}`}>
                {text}
            </span>
        </div>
    )
}

export default ImageWithText
