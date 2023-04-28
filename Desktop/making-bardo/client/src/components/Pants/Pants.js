
import './Pants.scss'

const Pants = () => {
    const navigate = (link) => {
        window.location = `${link}` 
    }

    return (
        <div className='background_container'>
        <div className="pants_background" onClick={() => navigate('/pantalones')}>
            <h1> Pantalones </h1>
        </div>
        </div>
    )
}

export default Pants