import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const Recommendation = ({title, className}) => {
    return (
        <div className={clsx('recommendation', className)}>
            <span>{title}</span>
        </div>
    )
}

export default Recommendation

Recommendation.propTypes = {
    title: PropTypes.string
}
