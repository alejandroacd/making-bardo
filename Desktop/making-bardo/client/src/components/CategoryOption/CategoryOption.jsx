import '../CategoryOption/CategoryOption.scss'
import { useNavigate } from 'react-router-dom'

export default function CategoryOption(props) {
    const navigate = useNavigate()

    return (
        <div className='background_container'>
        <div className="category_background category_option" style={{backgroundImage: `url(${props.url})`}} onClick={() => navigate(`${props.category.toLowerCase()}`)}>
            <h1> {props.category} </h1>
        </div>
        </div>
    )
}