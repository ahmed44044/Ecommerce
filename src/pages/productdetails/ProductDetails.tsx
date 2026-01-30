import { useLoaderData, useNavigation } from "react-router-dom"
import type { Product } from "../../util/https";
import './productDetails.css'
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";
export default function ProductDetails() {
    const {product,categoryProducts} = useLoaderData() as {product:Product,categoryProducts:Product[]}
    const navigation = useNavigation();
 

  const isLoading =navigation.state === "loading"

    if(!product) return <p style={{textAlign:'center'}}>Product Not Found</p>
    if(!categoryProducts) return <p style={{textAlign:'center'}}>Product same category Not Found</p>

  return (
    <PageTransition key={product.id}>

           <div>
            {isLoading ? (
                <ProductDetailsLoading/>
            ) : (
                <div className="item-details">
                <div className="container">
                    <ProductImages product={product} />
                    
                    <ProductInfo product={product}/>  
                </div>
            </div>
            )}

                {isLoading ? (
                    <SlideProductLoading/>
                ): (
                    <SlideProduct key={product.category}  data={categoryProducts} title={product.category.replace('-',' ')} />
                )}
            </div>

    </PageTransition>
 
   
  )
}
