import "./directory.style.scss"
import { Category } from "../category-item/category-item"

 export const Directory = ({categories}) => {
    return (
        <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <Category title={title} id={id} imageUrl={imageUrl}/>
        )
      })}
    </div>
    )
}