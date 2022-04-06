import './index.css'
import PropTypes from "prop-types"

const Recommendation = ({text}) => {
    return (
        <div className='recommendation'>
            <span>{text}</span>
        </div>
    )
}

export default Recommendation

Recommendation.propTypes = {
    text: PropTypes.string
}
