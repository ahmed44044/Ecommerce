import { FaCartArrowDown, FaCheck, FaRegHeart, FaShare } from "react-icons/fa";
import { FaStar ,FaRegStarHalfStroke} from "react-icons/fa6";
import './slideProduct.css'
import type { Product } from "../../util/https";
import { Link, useNavigate, useNavigation, useRouteLoaderData } from "react-router-dom";
import ProductDetailsLoaderSkeleton from "../ProductDetailsLoaderSkeleton/ProductDetailsLoaderSkeleton ";

import useCart from "../../Hooks/useCart";
import toast from "react-hot-toast";


export default function Products({item}:{item:Product}) {
  const navigate = useNavigate()
  const navigation = useNavigation();
  const {addToCart,cartItems,addFav,favItems,removeFav } = useCart()
  const token = useRouteLoaderData('root') 

  const isInFav = favItems.some(i=>i.id === item.id)

  function handleToAddFav(){
    if(isInFav){
      if(!token){
        toast.error(`You Can't Removed From favorites,please register`)
      } else{
          removeFav(item.id)
      toast.error(`${item.title} Removed From favorites`)

      }
    
    } else if(!token){
      toast.error(` You Can't add to Favorites,please register`)
    }else{
    addFav(item)
    toast.success(`${item.title} added To favorites`)
  }
  }
  function handleAddToCart(){

    if(!token){
      toast.error(` You Can't add to Cart,please register`)
    } else{
      addToCart(item);

      toast.success(
        <div className="toast-wrapper">
          <img src={item.images[0]} className="toast-img" alt={item.title} />


          <div className="toast-content">
            <strong>{item.title}</strong>
            add to cart
          </div>
          <button className="btn" onClick={()=>navigate('/cart')}>View Cart</button>
        </div> ,
        {duration:3000}
      )

    }
      
  }    
    const isInCart = cartItems.some(i => i.id === item.id)
    

  if (navigation.state === "loading") {
    return <ProductDetailsLoaderSkeleton />;
  }
  return (
    <div className={`product ${isInCart ? ' inCart' :''}` }>
        <Link to={`/products/${item.id}`}>
          <span className="status-cart"> <FaCheck/> in cart</span>
         <div className="img-product">
            <img src={item.images?.[0] || item.thumbnail} alt={item.title}/>
        </div>
        <p className="name-product">{item.title}</p>
               <div className="stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStarHalfStroke/>
            </div>
            <p className="price"> <span>$ {item.price}</span></p>
        </Link>
           <div className="icons">
                <span className="btn-add-cart"  onClick={handleAddToCart}><FaCartArrowDown/></span>
                <span onClick={handleToAddFav} className={`${isInFav ? 'in-fav' : ''}`}><FaRegHeart/></span>
                <span><FaShare/></span>   
            </div>
       
    </div>
  )
}


