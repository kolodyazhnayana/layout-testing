import Text from "../../ui/text"
import PropTypes from "prop-types"

const Variants = ({title, className}) => {
    return (
        <Text
            text={title}
            styleType='secondary'
            className={className}
        />
    )
}

export default Variants

Variants.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
}