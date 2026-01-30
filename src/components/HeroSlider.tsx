import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';
import banner_hero1 from '../img/banner_Hero1.jpg'
import banner_hero2 from '../img/banner_Hero2.jpg'
import banner_hero3 from '../img/banner_Hero3.jpg'

const slides = [
  { img: banner_hero1 },
  { img: banner_hero2 },
  { img: banner_hero3 }
];
export default function HeroSlider() {
  
  return (
    <>

    <div className="hero">
      <div className="container">
         <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 ,disableOnInteraction:false }}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={slides.length > 1} 
          >
            {slides.map(({img},index)=> (
               <SwiperSlide key={index}>
              <div className="content">
                <h4>Introduction the New</h4>
                <h3>Microsoft Xbox</h3>
                <p>Windows xp/10/7/8 Ps3,Tv Box </p>
                <Link to='/' className='btn'>Shop Now</Link>
              </div>
              <img src={img} alt="slider hero1" />
            </SwiperSlide>

            ))}
           
 
       
          </Swiper>
      </div>
    </div>
     
      
    </>
  )
}
