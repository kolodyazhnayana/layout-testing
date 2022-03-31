import './index.css'

const Button = ({text, handleClick, styleType}) => {
    return (
        <button
            onClick={handleClick}
            className={`button button__${styleType}`}
        >
            {text}
        </button>
    )
}

export default Button
