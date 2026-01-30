import AccessoriesCard from '../accessories/AccessoriesCard';
import './blog.css'
import groceriesLog from '../../img/groceries.png'
import laptopsLog from '../../img/laptops.png'
import MobileLogo from '../../img/Mobile Accessories.png'
import { Link } from 'react-router-dom';

const BlogData:{
    title:string,
    description:string,
    blog?:string,
    img:string,
    link:string
}[]=[
  {
        title:'Top Smartphones This Year',
        description:"A quick overview of the best smartphones available right now",
        blog:'Nov 2025',
        img:MobileLogo,
        link:'/smartphones'
  },
  {
    title: "How to Choose the Best Laptop",
    description:
      " Discover tips and recommendations to help you choose the perfect laptop for your needs.",
    blog: "Jan 2026",
     img:laptopsLog,
     link:'laptops'
  },
  {
    title: "Fresh groceries and daily essentials delivered to your door.",
    description:" Shop fresh groceries and everyday essentials at the best prices, fast and reliable delivery.",
    blog: "Dec 2025",
     img:groceriesLog,
     link:'groceries'
  }
];
export default function Blog() {
  return (
    <div className="blog-page container">
      <h1>Our Blog</h1>

      <div className="blog-grid">
  {BlogData.map(({img,title,description,link,blog})=>(
           <Link  key={description} state={{description}} to={`/blogPage/${link}`}>
          <AccessoriesCard img={img} title={title} description={description} blog={blog} />
        </Link>

        ))}
      </div>
    </div>
  );
}