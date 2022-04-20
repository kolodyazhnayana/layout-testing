import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx";

const Tab = ({text, active}) => {
    return (
        <span className={clsx('tab', active && 'active')}>
            {text}
        </span>
    )
}

export default Tab

Tab.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool
}
