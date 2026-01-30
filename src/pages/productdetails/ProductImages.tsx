import { useRef } from "react";
import type { Product } from "../../util/https";

export default function ProductImages({product}:{product:Product}) {
    const imgRef = useRef<HTMLImageElement | null>(null)

       function replaceImg(img:string){
        if(!imgRef.current) return;
        imgRef.current.src = img
    }

  return (
    <>
      <div className="imgs-item">
                    <div className="big-img">
                        <img ref={imgRef} id="bigImg" src={product?.images?.[0] || product?.thumbnail} alt={product.title}/>
                    </div>
                    <div className="sm-img">
                        {product.images.map((img,index)=>(
                            <div className="img-div-sm"  key={index}>
                            <img src={img} alt={product.title} onClick={()=>replaceImg(img)} />
    
                            </div>
                        ))}
                    </div>
                </div>
      
    </>
  )
}
