
import Products from "./Products";
import './slideProduct.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
import type { Product } from "../../util/https";



export default function SlideProduct({title,data}:{title:string,data:Product[]}) {
  return (
    <div className="slide-product slide">
        <div className="container">
            <div className="top-slide">
                <h2>{title}</h2>
                <p>Add bestselling products to weekly line up</p>
            </div>
            <Swiper loop={data.length > 2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 25 },

                }} className="mySwiper" >
                {data.map((item)=>
                    
                         <SwiperSlide key={item.id} >
                            <Products item={item}/>
                        </SwiperSlide>

                    
            )}
               
              

            </Swiper>

            
        </div>
    </div>
  )
}
