import React from "react";
import "./Products.css"
import useCartReducer from "../hooks/useCartReducer";
import { MousePointerClick } from "lucide-react";
import { Heart } from "lucide-react";
import { Star } from "lucide-react";
import {Link} from "react-router-dom"

export function ListOfProducts({products}){
    const {addToCart} = useCartReducer();

   return (
  <main className="products">
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="product">
              <img src={product.images[0]} alt={product.title} />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <h4>{product.brand}</h4>

              <div className="categorySection">
                <p>
                  <Heart className="iconCategory" size={12} />
                  {product.category}
                </p>
              </div>

              <div className="rating">
                <p>
                  <Star className="starIcon" size={15} /> {product.rating}
                </p>
              </div>

              <div className="stock">
                <p>Available: {product.stock}</p>
              </div>

              <div className="price">
                <p>US </p> <strong>${product.price}</strong>
              </div>

              <div className="discount">
                <p>
                  Discount: <small>{product.discountPercentage}%</small>
                </p>
              </div>
            </div>
          </Link>

          <button onClick={() => addToCart(product)} className="addCart">
            <p>Add to cart</p>
            <MousePointerClick className="iconAdd" />
          </button>
        </li>
      ))}
    </ul>
  </main>
);

}


export function WithoutResult(){
    return(
        <p>No se encontraron resultados</p>
    )
}

export default function Products ({products}){
    const hasProduct = products.length > 0
    return(
        hasProduct 
        ? <ListOfProducts products={products}/>
        : <WithoutResult/>

    )
}