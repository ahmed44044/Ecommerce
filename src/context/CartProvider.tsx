import { useEffect, useState, type PropsWithChildren } from "react"
import CartContext, { type CartItem, type FavItem } from "./CartContext"
import { fetchCartFromAPI } from "../util/https";

export default function CartProvider({children}:PropsWithChildren) {

const [favItems,setFavItems] = useState<FavItem[]>(()=>{
    const saveFav = localStorage.getItem("favProduct");
    return saveFav ? JSON.parse(saveFav) : []
})

function addFav(item:Omit<CartItem, "quantity">) {
    setFavItems((prev)=>{
        if(prev.some(i=> i.id === item.id)) return prev;
        console.log();
        
        return [...prev,item]
    })
}

function removeFav(id:number){
    setFavItems((prev)=>prev.filter((i)=> i.id !== id))
}

useEffect(()=>{
    localStorage.setItem('favProduct',JSON.stringify(favItems))
},[favItems])






const [cartItems,setCartItems] = useState<CartItem[]>(()=>{
    const savedCart = localStorage.getItem("cartProduct");
    return savedCart ? JSON.parse(savedCart) : []
}
    
)

useEffect(() => {
  async function initCart() {
    const savedCart = localStorage.getItem("cartProduct");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      const items = await fetchCartFromAPI();
      setCartItems(items);
    }
  }

  initCart();
}, []);

const increaseQuantity =(id:number)=>{
    setCartItems(prevItems=> prevItems.map(item => (
        item.id === id ? {...item,quantity:item.quantity +1} : item
    )) )

}
const decreaseQuantity =(id:number)=>{
    setCartItems(prevItems=> prevItems.map(item => (
        item.id === id && item.quantity> 1  ? {...item,quantity:item.quantity -1} : item
    )) )

}

const removeFromCart = (id:number)=>{
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
}

const addToCart = (item:Omit<CartItem,'quantity'>)=>{
    setCartItems((prevItems)=>{
        const existItems = prevItems.find(i => i.id === item.id)
        let newCart:CartItem[];
        if(existItems){
            newCart= prevItems.map((i)=>
                i.id === item.id
                    ? {...i , quantity:i.quantity + 1} 
                    : i
                
            )
        } else{
                    newCart=[...prevItems ,{...item,quantity:1}]

        }
        return newCart;

    });
}

const totalQuantity = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

useEffect(() => {
  if (cartItems.length === 0) return;
  async function sendCartItemToAPI(item:CartItem[]){
        if(item.length === 0) return;
        try {

        const res = await fetch('https://dummyjson.com/carts/add' ,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
            userId:1,
            products: item.map(p =>({
                id:p.id , quantity:p.quantity
            }))
            })
        })

            const cartData= await res.json()
            return cartData

            } catch(error){
                console.log(error);

            }
    }


  sendCartItemToAPI(cartItems);
}, [cartItems]);    

    useEffect(()=>{
        localStorage.setItem('cartProduct',JSON.stringify(cartItems))
    },[cartItems])




  return (
    <CartContext.Provider value={{cartItems,addToCart,increaseQuantity,decreaseQuantity,removeFromCart,totalQuantity,addFav,removeFav,favItems}}>
        {children}
    </CartContext.Provider>      
)
}




