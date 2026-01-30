import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductDetails from "./pages/productdetails/ProductDetails";
import RootLayout from "./components/RootLayout";
import About from "./pages/about/About";
import Accessories from "./pages/accessories/Accessories";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import ErrorPage from './components/Error/ErrorPage';
import { productDetailsLoader, loader as productLoader,categoryLoader, categoryLoader as accessoriesLoader  } from "./util/https";
import { Suspense } from "react";
import ProductDetailsLoaderSkeleton from "./components/ProductDetailsLoaderSkeleton/ProductDetailsLoaderSkeleton ";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/favorites/Favorites";
import AccessoriesPage from "./pages/accessories/AccessoriesPage";
import BlogPage from "./pages/blog/BlogPage";
import SignupForm from "./components/auth/Signup";
import {logoutAction} from './components/auth/Logout'
import { loginAction, requireAuth,signupAction,tokenLoader } from "./util/auth";
import ProductLayout from "./components/ProductLayout";
import Login from "./components/auth/Login";
export default function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      id:'root',
      loader:tokenLoader,
      children:[
      {index:true,
        element:<Home/>,
        loader:productLoader,
      },
      {path:'login', element:<Login/>,action:loginAction},
      {path:'signup',element:<SignupForm/>,action:signupAction},
      {element:<ProductLayout/>,loader:requireAuth , children:[
      {path:'cart',element:<Cart/>},
      {path:'about',element:<About/>},
      {path:'accessories',element:<Accessories/>},
      {path:'accessoriesPage/:category',element:<AccessoriesPage/>,loader:accessoriesLoader},
      {path:'blog',element:<Blog/>},
      {path:'blogPage/:category',element:<BlogPage/>,loader:accessoriesLoader},

      {path:'contact',element:<Contact/>},
      {path:'category/:category',element:<CategoryPage/> ,loader:categoryLoader},
      {path:'products/:id',
        element:<ProductDetails/>,
        loader:productDetailsLoader
      },
      {path:'search',element:<SearchResults/>},
      {path:'favorites',element:<Favorites/>},

      ]},
   
      {path:'logout',action:logoutAction}
    ]}
  ])

  return (
    <Suspense fallback={<ProductDetailsLoaderSkeleton/>}>
    
        <RouterProvider router={router} />

    </Suspense>
  )
}
