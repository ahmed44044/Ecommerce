import { FaTrashAlt } from 'react-icons/fa'
import useCart from '../../Hooks/useCart'
import './cart.css'
import PageTransition from '../../components/PageTransition'
export default function Cart() {
    const {cartItems,decreaseQuantity,increaseQuantity,removeFromCart} = useCart()
    const totalPrice = cartItems.reduce((acc,item)=> acc + item.price * item.quantity,0)
 
    
  return (
    <PageTransition>
           <div className='checkout'>
      <div className="order-summary">
        <h1>Order Summary</h1>

        <div className="items">
            {cartItems.length === 0 ? (
                <p style={{textAlign:'center'}}>Your Cart is Empty</p>
            ) : (
                cartItems.map((item)=> (
                    <div className="item-cart" key={item.id}>
                        <div className="img-name">
                            <div className="img-item">
                                <img src={item.images?.[0] || item.thumbnail} alt={item.title} />
                            </div>

                            <div className="content">
                                <h4>{item.title}</h4>
                                <p className="price-item">$ {item.price}</p>
                                <div className="quantity-control">
                                    <button onClick={()=>decreaseQuantity(item.id)}>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={()=>increaseQuantity(item.id)}>+</button>
                                </div>
                            </div>
                        </div>
                            <button onClick={()=>removeFromCart(item.id)} className='delete-icon'><FaTrashAlt/></button>
                    </div>
                ))
            )}

        </div>
        <div className="bottom-summary">
            <div className="shop-table">
                <p>Total</p>
                <span className="total-checkout">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="button-div">
                <button type='submit'>Place Order</button>
            </div>
        </div>
      </div>
    </div>

    </PageTransition>
 
  )
}
