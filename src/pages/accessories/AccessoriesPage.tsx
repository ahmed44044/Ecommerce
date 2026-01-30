import { useLocation } from "react-router-dom"
import CategoryPage from "../categoryPage/CategoryPage"

export default function AccessoriesPage() {
      const location = useLocation()
    const {description} = location.state

  return (
    <>
      <CategoryPage description={description}/>
    </>
  )
}
