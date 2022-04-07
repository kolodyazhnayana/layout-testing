import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const Recommendation = ({percent, className}) => {
    return (
        <div className={clsx('recommendation', className)}>
            <span>{`${percent}% рекомендуют`}</span>
        </div>
    )
}

export default Recommendation

Recommendation.propTypes = {
    percent: PropTypes.number
}
