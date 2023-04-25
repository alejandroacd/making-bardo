import { useNavigate } from 'react-router-dom'
import './Chalecos.scss'
const Chalecos = () => {
    const navigate = (link) => {
        window.location = `${link}` 
    }

    return (
        <div className='background_container'>
        <div className="chalecos_background" onClick={() => navigate('/camperas')}>
            <h1> chalecos </h1>
        </div>
        </div>
    )
}

export default Chalecos