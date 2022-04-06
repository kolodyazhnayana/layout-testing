import './index.css'
import PropTypes from 'prop-types'

const Image = ({ image }) => {
    return (
        <div className='image'>
            <img src={image} />
        </div>
    )
}

export default Image

Image.propTypes = {
    image: PropTypes.string
}
