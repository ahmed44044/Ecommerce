import { Outlet } from "react-router-dom";
import BottomHeader from "./header/BottomHeader";
import TopHeader from "./header/TopHeader";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./ScrollTop";
import { AnimatePresence } from "framer-motion";

export default function RootLayout() {
  return (
    <>

     <header>
      <TopHeader/>
      <BottomHeader/>
      </header> 
      <ScrollTop/>
      <Toaster position="bottom-right" toastOptions={{
        style:{
          background:'#e9e9e9',
          borderRadius:'5px',
          padding:'15px'
        }
      }}/>
      <div className="header-spacer"></div>
    
      <AnimatePresence mode="wait">
        <Outlet/>
      </AnimatePresence>
      
    </>
  )
}
