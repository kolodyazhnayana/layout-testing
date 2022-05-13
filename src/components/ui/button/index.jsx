import './index.css'
import PropTypes from 'prop-types'

const Button = ({ label, handleClick, styleType, size }) => {
    const mode = styleType && `button_${styleType}`
    const modeSize = size && `button_${size}`

    return (
        <button
            onClick={handleClick}
            className={['button', modeSize, mode].join(' ')}
        >
            {label}
        </button>
    )
}

export default Button

Button.propTypes = {
    label: PropTypes.string,
    handleClick: PropTypes.func,
    styleType: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium'])
}

Button.defaultProps = {
    label: 'button',
    handleClick: () => console.log('click'),
    styleType: undefined,
    size: undefined
}