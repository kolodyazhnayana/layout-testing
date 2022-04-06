import './index.css'
import PropTypes from 'prop-types'

const Image = ({ img }) => {
    return (
        <div className='image'>
            <img src={img} />
        </div>
    )
}

export default Image

Image.propTypes = {
    img: PropTypes.string
}
