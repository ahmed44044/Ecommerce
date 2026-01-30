import { useLoaderData, useNavigation } from "react-router-dom"
import type { Product } from "../../util/https";
import Products from "../../components/slideProducts/Products";
import './categoryPage.css'
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";
export default function CategoryPage({description}:{description?:string}) {
  const {category,categoryProduct} = useLoaderData() as {category:string,categoryProduct:Product[]}
  const navigation = useNavigation()
  const isLoading= navigation.state === 'loading'
    
  return (
    <PageTransition key={category}>
        <div className="category-products">
        <div className="container">
              <div className="top-slide">
                <h2>{category.replace('-',' ')}</h2>
                
                {description ? <p>{description}</p> : (
                    <p>Add bestselling products to weekly line up</p>
                )}
            </div>
            <div className="products">
               {isLoading ? (
                    <SlideProductLoading key={category} />
                    ) : (
                    categoryProduct.map(item => (
                        <Products key={item.id} item={item} />
                    ))
                )}
            </div>
        </div>
      
        </div>

    </PageTransition>
   
  )
}


