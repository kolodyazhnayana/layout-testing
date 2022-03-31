import './index.css'

const VariantsLink = ({link, text}) => {
    return (
        <div className='link'>
            <a href={link}>{text}</a>
        </div>
    )
}

export default VariantsLink
