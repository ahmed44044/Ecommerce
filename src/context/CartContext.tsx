import { createContext} from "react"
export type CartItem ={
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  quantity:number

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;

  availabilityStatus: string;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;

  sku: string;
  weight: number;

  tags: string[];
  images: string[];
  thumbnail: string;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };

  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
}
export type FavItem = Omit<CartItem, "quantity">;
 
export type CartContextType = {
  cartItems: CartItem[];
  totalQuantity:number;
  increaseQuantity:(id:number)=>void;
  decreaseQuantity:(id:number)=>void;
  removeFromCart:(id:number)=>void;
  removeFav:(id:number)=>void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  addFav:(item:Omit<CartItem, "quantity">)=>void;
  favItems:FavItem[]
}


const CartContext = createContext<CartContextType | null>(null)

export default CartContext
