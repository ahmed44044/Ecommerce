import PageTransition from "../../components/PageTransition"
import Products from "../../components/slideProducts/Products"
import useCart from "../../Hooks/useCart"

export default function Favorites() {
    const {favItems} = useCart()
  return (
    <PageTransition>
        <div className="category-products favPage">
            <div className="container">
                <div className="top-slide">
                    <h2>Your Favorite</h2>
                </div>
                {
                    favItems.length === 0 ? (
                        <p>No Favorites Products yet...</p>
                    ) :(
                        <div className="products">
                            {favItems.map(item =>(
                                <Products key={item.id} item={item}  />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    </PageTransition>
  )
}
