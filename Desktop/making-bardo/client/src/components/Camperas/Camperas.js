import './Camperas.scss'
import { HiChevronLeft } from 'react-icons/hi'

const Camperas = () => {

    const navigate = (link) => {
        window.location = `${link}`
    }
    return (
        <div className='background_container'>
        <div className="camperas_background category_option" onClick={() => navigate('/camperas')}>
            <h1> camperas </h1>
        </div>
        </div>
    )
}

export default Camperas