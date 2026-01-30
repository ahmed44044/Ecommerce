import type {LoaderFunctionArgs } from "react-router-dom";
import type { CartItem } from "../context/CartContext";


export type Product ={
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;

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


export type ProductsByCategory = {
  [key: string]: Product[];
};



const categories:string[] =[
        "smartphones",
        "mobile-accessories",
        "laptops",
        "tablets",
        "sunglasses",
        "sports-accessories"
  ]

  export async function loader() : Promise<ProductsByCategory> {
    try{
       const results = await Promise.all(
        categories.map(async(category)=>{
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          if(!res.ok){
            throw new Response(`Failed to fetch products for ${category}`, { status: res.status });
          }
          const data = await res.json()
          return {[category]:data.products}
        })
      );

      return Object.assign({},...results)  // دمج كل النتائج في object واحد

    } catch (err) {
        console.error(err);
        throw new Response("Failed to fetch products", { status: 500 });
      }

  }

  
  export async function productDetailsLoader({params}:LoaderFunctionArgs){
    const {id} = params;
    if(!id){
      throw new Response("Product ID not found", { status: 400 });
    }
    try{
        const resProduct = await fetch(`https://dummyjson.com/products/${id}`);
        if (!resProduct.ok) {
          throw new Response("Failed to load product", { status: 500 });
        }
        const product:Product = await resProduct.json()


        const resCategory =  await fetch(`https://dummyjson.com/products/category/${product.category}`);
        if(!resCategory.ok){
          throw new Response("Failed to load category products",{status:500})
        }

        const categoryProducts= await resCategory.json()



        return {product,categoryProducts:categoryProducts.products}

    } catch (err) {
        throw new Response((err as Error).message, { status: 500 });
    }
  }




export async function fetchCartFromAPI(): Promise<CartItem[]> {
  try {
    const res = await fetch("https://dummyjson.com/carts"); 
    const data = await res.json();

    return data.products.map((p:CartItem) => ({
      id: p.id,
      title: p.title || "Unknown",
      price: p.price || 0,
      quantity: p.quantity
    }));
  } catch (error) {
    console.error("خطأ في جلب الكارت:", error);
    return [];
  }
}



  export async function categoryLoader({params}:LoaderFunctionArgs) {
    const {category} = params;
   
     if(!category){
      throw new Response("Product not found", { status: 400 });
    }
    try {
      const res = await fetch(`https://dummyjson.com/products/category/${category}`)
      if(!res.ok){
        throw new Response('Failed to load product')
      }
      const data = await res.json()
      // console.log(data);
      
      return {category,categoryProduct:data.products}
      
    } catch (error) {
      throw new Response((error as Error).message, { status: 500 });
      
    }
    
  }