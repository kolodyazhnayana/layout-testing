import './index.css'
import Text from "../text"
import clsx from "clsx";

const Heading = ({title, link, titleLink, className}) => {
    return (
        <div className={clsx('heading', className)}>
            <h1>{title}</h1>
            <Text text={titleLink} link={link} styleType='link' />
        </div>
    )
}

export default Heading
