import './home.css'
import HeroSlider from './../../components/HeroSlider';
import SlideProduct from '../../components/slideProducts/SlideProduct';
import type { ProductsByCategory } from '../../util/https';
import { useLoaderData, useNavigation} from 'react-router-dom';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransition';




export default function Home() {
 const navigation = useNavigation();
  const products = useLoaderData() as ProductsByCategory
 const isLoading = navigation.state === 'loading'

 
  return (
    <PageTransition>
        <div>
      <HeroSlider/>
      {isLoading? (
        Object.entries(products).map(([category])=>(
        <SlideProductLoading key={category}/>
        ))
      ): (
         Object.entries(products).map(([category , items])=>(
            <SlideProduct key={category} data={items} title={category.replace('-',' ')}/> 

      ))

      )}
       

    
    </div>

    </PageTransition>
  
  )
}
