import {  HiShoppingCart, HiEye } from 'react-icons/hi'
import { useCart} from '../../contexts/cartContext'


const HomeProductCard = (props) => {

    const { addToCart } = useCart()
    const redirect = () => {
        window.location = `/product/?id=${props.code}`
      }
      
    return (

        <>
            <div id="ultimo" className='latest_home_card'>
                <div className='image_home_card'>
                    <img src={props.image2} alt='Imágen del producto' />
                    <img className='imghome-card-hover' src={props.image1} alt='Imágen del producto' />
                </div>
                <h1> {props.name.toUpperCase()} </h1>
                <p> {props.price} $ </p>

                <div className='product_options'>
                    <HiShoppingCart size={25} onClick={() => addToCart(props)} />
                    <HiEye size={25} onClick={redirect} />
                </div>
            </div>
        </>



    )
}

export default HomeProductCard