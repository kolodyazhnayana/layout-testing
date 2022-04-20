import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const TabsWrapper = ({children, className}) => {
    return (
        <div className={clsx('tabs-wrapper', className)}>
            {children}
        </div>
    )
}

export default TabsWrapper

TabsWrapper.propTypes = {
    children: PropTypes.element
}
