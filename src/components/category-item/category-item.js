import "./category-item.style.scss"

export const Category = ({title,id,imageUrl}) => {
    return (
         <div className="category-container" key={id}>
            <div
              className="background-image"
              style={{ background: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>         
    )
}