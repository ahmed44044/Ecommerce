import { createContext, useEffect, useState, type PropsWithChildren} from "react"
export type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
}

export type CartContextType = {
  cartItemsLocal: CartItem[]
  addToCartLocal: (item:CartItem) => void
}


const CartContextLocal = createContext<CartContextType | null>(null)



export  function CartProviderLocal({children}:PropsWithChildren) {


    const [cartItemsLocal,setCartItems] = useState<CartItem[]>(()=>{
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []
    })

    const addToCartLocal = (item:CartItem)=>{
        setCartItems((prev)=>[...prev,item])
    }

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItemsLocal))
    },[cartItemsLocal])

  return (
    <CartContextLocal.Provider value={{cartItemsLocal,addToCartLocal}}>
        {children}
    </CartContextLocal.Provider>      
)
}

export default CartContextLocal