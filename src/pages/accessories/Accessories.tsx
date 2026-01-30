import { Link } from 'react-router-dom';
import './accessories.css'
import AccessoriesCard from './AccessoriesCard'
import SportsLogo from '../../img/sports-accessories.png'
import HomeLogo from '../../img/Home Decoration.jpg'
import MobileLogo from '../../img/Mobile Accessories.png'
import KitchenLogo from '../../img/KitchenAccessories.png'

const AccessoriesLinks:{
    title:string,
    description:string,
    link:string,
    img:string
}[]=[
  {
        title:'Mobile Accessories',
        description:"Upgrade your smartphone with premium accessories designed for protection, power, and everyday convenience.",
        link:'/mobile-accessories',
        img:MobileLogo
  },
  {
    title: "Sports Accessories",
    description:
      "High-quality sports accessories to improve performance and comfort.",
    link: "sports-accessories",
     img:SportsLogo
  },
  {
    title: "Home Decoration",
    description:
      "Stylish home décor pieces to add beauty and warmth to your space.",
    link: "home-decoration",
     img:HomeLogo
  },
  {
    title: "Kitchen Accessories",
    description:
      "Practical kitchen tools that make cooking easier and faster.",
    link: "kitchen-accessories",
     img:KitchenLogo
  },
];
export default function Accessories() {
  return (
    <div className="accessories-page container">
      <h1>Accessories</h1>

      <div className="accessories-grid">
        {AccessoriesLinks.map(({img,title,description,link})=>(
           <Link key={link} state={{description}} to={`/accessoriesPage/${link}`}>
          <AccessoriesCard img={img} title={title} description={description} />
        </Link>

        ))}
       
      

    
      </div>
    </div>
  );
}
