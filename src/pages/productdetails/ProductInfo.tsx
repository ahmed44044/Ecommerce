import type { Product } from "../../util/https";
import { FaStar ,FaRegStarHalfStroke} from "react-icons/fa6";
import './productDetails.css'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaShare } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function ProductInfo({product}:{product:Product}) {
    const {addToCart,cartItems,removeFav,addFav,favItems} = useCart()
    const navigate = useNavigate()
    const isInCart = cartItems.some(item => item.id === product.id)
      function handleAddToCart(){
      addToCart(product);

      toast.success(
        <div className="toast-wrapper">
          <img src={product.images[0]} className="toast-img" alt={product.title} />


          <div className="toast-content">
            <strong>{product.title}</strong>
            add to cart
          </div>
          <button className="btn" onClick={()=>navigate('/cart')}>View Cart</button>
        </div> ,
        {duration:3000}
      )
  }


  
    const isInFav = favItems.some(i=>i.id === product.id)

  function handleToAddFav(){
    if(isInFav){
      removeFav(product.id)
      toast.error(`${product.title} Removed From favorites`)
    } else{
    addFav(product)
    toast.success(`${product.title} added To favorites`)
  }
  }

  return (
    <>
    <div className="details-item">
                <h1 className="name">{product.title}</h1>
                <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStarHalfStroke/>
                </div>
                <p className="price">$ {product.price}</p>
                <h5>Availability:<span>{product.availabilityStatus}</span></h5>
                <h5>Brand:<span>{product.brand}</span></h5>
                <p className="desc">{product.description}</p>
                <h5 className="stock"><span>Hurry Up! Only{product.stock} Products left in Stock</span></h5>
                <h5>Tags:<span>{product.tags}</span></h5>
                <button onClick={()=>handleAddToCart()} className={`btn ${isInCart ? 'in-cart' : ''}`}>
                    { isInCart? 'Item in Cart' :"Add to cart"} <TiShoppingCart/>
                </button>
                <div className="icons">
                    <span className={`${isInFav ? 'in-fav' : ''}`} onClick={handleToAddFav}><FaRegHeart/></span>
                    <span><FaShare/></span>   
                </div>
            </div>
      
    </>
  )
}
