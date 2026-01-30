import { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa';
import {IoMdMenu} from 'react-icons/io'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { PiSignInBold } from 'react-icons/pi';
import { Form, Link, useLocation, useRouteLoaderData } from 'react-router-dom';
import { SiWebauthn } from "react-icons/si";
type Category = {
  slug: string;
  name: string;
  url: string;
};
const NavLinks:{
    title:string,
    link:string
}[]=[
    {
        title:'Home',
        link:'/'
    },
    {
        title:'About',
        link:'/about'
    },
    {
        title:'Accessories',
        link:'/accessories'
    },
    {
        title:'Blog',
        link:'/blog'
    },
    {
        title:'Contact',
        link:'/contact'
    },
]
export default function BottomHeader() {
 
    const location = useLocation()
    const [categories,setCategories] = useState<Category[]>([])
    const [isListOpen,setIsListOpen] = useState<boolean>(false)
    const [isCategoryOpen,setIsCategoryOpen] = useState<boolean>(false)
    const token = useRouteLoaderData('root') 
    function handleCategoryOpen(){
        setIsCategoryOpen(!isCategoryOpen)
        setIsListOpen(false)
    }
    function handleListOpen(){
        setIsListOpen(!isListOpen)
        setIsCategoryOpen(false)
    }
    useEffect(()=>{
        setIsCategoryOpen(false)
        setIsListOpen(false)
    },[location])
    useEffect(()=>{
        async function getCategories() {
            const res= await fetch('https://dummyjson.com/products/categories')
            const data:Category[] = await res.json()
            setCategories(data)
            // console.log(data);
            
        }
        getCategories()


    },[])
  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
              <div className="category-nav">
                <div className="category-btn" onClick={handleCategoryOpen}>
                    <IoMdMenu/>
                    <p>Browse Category</p>
                    {isCategoryOpen ? <MdOutlineArrowDropUp/> :<MdOutlineArrowDropDown/>}
                </div>
                <div className={isCategoryOpen ? 'category-nav-list active' :'category-nav-list'} >
                    {categories.map(({name,slug})=>(
                        <Link onClick={()=>setIsCategoryOpen(false)} key={slug} className={location.pathname === slug ? 'active' : ''} to={`category/${slug}`}>{name}</Link>
                    ))}
                </div>

            </div>
          <div className="nav-links">
                <IoMdMenu 
                    className='nav-link-icon' 
                    onClick={handleListOpen} 
                />

                <ul onClick={()=>setIsCategoryOpen(false)} className={`nav-list-menu ${isListOpen ? 'open' : ''}`}>
                    {NavLinks.map(({ title, link }) => (
                    <li
                        key={title}
                        className={location.pathname === link ? 'active' : ''}
                    >
                        <Link to={link} onClick={() => setIsListOpen(false)}>
                                {title}
                        </Link>

                    </li>
                    ))}
                </ul>
            </div>

         

        </nav>
        <div className="sign-register-icons">
            {token && (
                <Form action='/logout' method='post'>
                    <button style={{listStyle:'none'}}><PiSignInBold/></button>
                
                </Form>
            )}
            {!token && (
                <>
                    <Link to='/signup'><FaUserPlus/></Link>
                    <Link to='/login'><SiWebauthn/></Link>
                </>
            )}
            
        </div>
      </div>
    </div>
  )
}
