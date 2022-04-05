import './index.css'
import PropTypes from 'prop-types'

const Button = ({ label, handleClick, styleType, size }) => {
    const mode = styleType === 'primary' ? 'button_primary' : ''

    return (
        <button
            onClick={handleClick}
            className={['button', `button_${size}`, mode].join(' ')}
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
    size: PropTypes.string
}

Button.defaultProps = {
    label: 'button',
    handleClick: () => console.log('click'),
    styleType: undefined,
    size: undefined
}