import './accessories.css'

export default function AccessoriesCard({title,description,img,blog=''}:{title:string,description:string,img:string,blog?:string}) {
  return (
     <div className="accessory-card">
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          {blog && <span className="blog-date">{blog}</span>}
        </div>
  )
}
