import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import PageTransition from "../components/PageTransition";
import SlideProductLoading from "../components/slideProducts/SlideProductLoading";
import Products from "../components/slideProducts/Products";
import type { Product } from "../util/https";

export default function SearchResults() {
    const [results,setResults]=useState<Product[]>([])
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    useEffect(()=>{
        async function fetchResults() {
            try{
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json()
                if(!res.ok){
                    throw new Response("Failed to load  products",{status:500})
                }
                setResults(data.products || [])
                

            } catch(err){
                throw new Response((err as Error).message, { status: 500 });
            } finally{
                setIsLoading(false)
            }
        }
        if(query) fetchResults()
    },[query])
    
  return (
    <PageTransition key={query}>

       <div className="category-products">
        {isLoading ? (
                        <SlideProductLoading key={query} />
                        ): results.length > 0 ? (
                                <div className="container">
                                    <div className="top-slide">
                                    <h2>Results For : {query}</h2>
                                </div>
                                <div className="products">
                                    
                                        {results.map(item => (
                                            <Products key={item.id} item={item} />
                                        ))}
                                    
                                </div>
                            </div>

                        ):(
                            <p style={{textAlign:'center'}}>No Result Found</p>
                        ) }
          
            
              </div>
    </PageTransition>
  )
}
