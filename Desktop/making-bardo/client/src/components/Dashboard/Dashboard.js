import './Dashboard.scss'
import products from '../../dataProducts'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import {HiChevronLeft } from 'react-icons/hi'

const Dashboard = (props) => {

  const navigate = useNavigate()
  const data = products.filter(x => x.category === props.category)

  return (
     <>
     <div className='container dashboard_container'>
      <div onClick={() => navigate(-1)}> <HiChevronLeft /> Volver </div>
      
      <h1 className='container_title'> {props.category} </h1>
     {data.map(x => {
      return (
        <ProductCard name={x.name} price={x.price} image1={x.image1} image2={x.image2} />
      )
     })}
     </div>
     </>
  )

}
export default Dashboard;