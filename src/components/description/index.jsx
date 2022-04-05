import './index.css'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Description = ({ text, className }) => {
    return (
        <div className={clsx('desc', className)} >
            <span className='desc__text'>{text}</span>
        </div>
    )
}

export default Description

Description.propTypes = {
    text: PropTypes.string
}