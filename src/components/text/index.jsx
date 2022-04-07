import './index.css'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Text = ({ text, className, styleType }) => {
    return (
        <div className={clsx('text', className, `text_${styleType}`)} >
            <span>{text}</span>
        </div>
    )
}

export default Text

Text.propTypes = {
    text: PropTypes.string,
    styleType: PropTypes.oneOf(['primary', 'secondary'])
}
