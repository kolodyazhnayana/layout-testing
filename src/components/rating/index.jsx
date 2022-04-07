import './index.css'
import PropTypes from "prop-types"
import clsx from "clsx"

const Rating = ({reviews, grade, total, className}) => {
    let stars = []
    for (let i = 0; i < total; i++) {
        stars.push(<span className='star' key={i} />)
    }

    return (
        <div className={clsx('rating', className)}>
            <div className='rating__wrap rating__star'>
                <div className='rating__inner'>
                    <div className='rating__default'>
                        {stars}
                    </div>
                    <div className='rating__active' style={{width: `${grade * (100 / total)}%`}}>
                        {stars}
                    </div>
                </div>
            </div>
            {
                reviews &&
                <div className='rating__count'>
                    <span >{reviews}</span>
                </div>
            }
        </div>
    )
}

export default Rating

Rating.propTypes = {
    reviews: PropTypes.number,
    grade: PropTypes.number,
    total: PropTypes.number
}
