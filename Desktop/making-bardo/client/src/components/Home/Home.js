import Landing from '../Landing/Landing'
import Dashboard from '../Dashboard/Dashboard'
import Camperas from '../Camperas/Camperas';
import Chalecos from '../Chalecos/Chalecos'
import Pants from '../Pants/Pants'
import '../Home/Home.scss'

const Home = () => {
    return (
        <>
        <Landing />

        <div className='categories_section'>
            <div className='categories' id="categories">
        <Camperas />
        <Pants />
        <Chalecos />
        </div>
        </div>
       

        </>
    )
}

export default Home