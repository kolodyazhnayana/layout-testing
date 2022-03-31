import './index.css'

const Rating = ({count}) => {
    return (
        <div className='rating'>
            {/*<div className='rating_default'>*/}
            {/*    <span className='rating__star' />*/}
            {/*    <span className='rating__star' />*/}
            {/*    <span className='rating__star' />*/}
            {/*    <span className='rating__star' />*/}
            {/*    <span className='rating__star' />*/}
            {/*</div>*/}
            <div className='rating_active'>
                <span className='rating__star active' />
                <span className='rating__star active' />
                <span className='rating__star active' />
                <span className='rating__star active' />
                <span className='rating__star active' />
            </div>
            <span className='rating__text'>{count}</span>
        </div>
    )
}

export default Rating
