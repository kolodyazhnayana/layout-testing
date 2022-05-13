import './index.css'
import Text from "../../ui/text"
import clsx from "clsx"
import PropTypes from "prop-types"

const Heading = ({title, link, titleLink, className}) => {
    return (
        <div className={clsx('heading', className)}>
            <h1>{title}</h1>
            <Text text={titleLink} link={link} styleType='link' />
        </div>
    )
}

export default Heading

Heading.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    titleLink: PropTypes.string,
    className: PropTypes.string
}
