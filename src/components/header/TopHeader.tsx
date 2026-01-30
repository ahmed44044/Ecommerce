import { Link, useRouteLoaderData } from "react-router-dom";
import './header.css'
import logo from '../../img/logo-ahmedmahmoud.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";
import SearchBox from "./SearchBox";


export default function TopHeader() {
  const {totalQuantity,favItems} =useCart()

    const token = useRouteLoaderData('root') 
  return (
    <div className="top-header">
      <div className="container">
        <Link to='/'>
            <img className="logo" src={logo} alt="Ecommerce logo" />
        </Link>
        <SearchBox/>
        <div className="header-icons">
            <div className="icon">
              <Link to='/favorites'>
                <FaRegHeart/>
                <span className="count">{token && favItems.length}</span>
              </Link>
               
            </div>
            <div className="icon">
              <Link to='/cart'>
                <TiShoppingCart/>
                <span className="count">{token && totalQuantity}</span>
              </Link>
              
            </div>
        </div>
      </div>
    </div>
  )
}
