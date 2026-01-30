import { FaSearch } from "react-icons/fa";
import './header.css'
import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../../util/https";
export default function SearchBox() {
    const [searchTerm,setSearchTerm] = useState<string>('')
    const  navigate=useNavigate()
    const [suggestions,setSuggestion]=useState<Product[]>([])
    // const location = useLocation()
    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const query = searchTerm.trim()
        if(!query) return
        navigate(`/Search?query=${encodeURIComponent(query)}`)
        setSuggestion([])
    }
    useEffect(()=>{
        async function fetchSuggestion() {
            if(!searchTerm.trim()){
                setSuggestion([])
                return;
            }
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                const data = await res.json()
                setSuggestion(data.products.slice(0,5) || [])
            } catch(err){
                throw new Response((err as Error).message, { status: 500 });
            } 
        }
        const debonuce = setTimeout(()=>{
            fetchSuggestion()
        },300)
        return ()=> clearTimeout(debonuce)
    },[searchTerm])

 
  return (
    <div className="searchBox-container ">

     <form onSubmit={handleSubmit} className="search-box ">
            <input type="text" name="search" id='search' placeholder="Search For Products" autoComplete="off" value={searchTerm}  onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button type="submit"><FaSearch/></button>
        </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map(item=>(
                        <li onClick={()=>setSuggestion([])} key={item.id}>
                              <Link to={`/products/${item.id}`}>
                            <img src={item.images[0]} alt={item.title} />
                            <span>{item.title}</span>
                        </Link>

                        </li>
                      
                    ))}
                </ul>
            )}
    </div>
       
  )
}
