import React from "react";
import "./Products.css"
import useCartReducer from "../hooks/useCartReducer";
import { MousePointerClick } from "lucide-react";
import { Heart } from "lucide-react";

export function ListOfProducts({products}){
    const {addToCart} = useCartReducer();

    return(
        <main className="products">
            <ul >
              
        {products.map((product) => (
            <li key={product.id}>

                <div className="product">
                    <img src={product.images[0]} alt={product.title} />

                <div className="title">
                    <h3>{product.title}</h3>
                </div>
              
              <div className="categorySection">
                <p><Heart className="iconCategory" size={12}/>{product.category}</p>
              </div>

              <div className="price">
                <p>Price: </p> <strong> ${product.price}</strong>
              </div>
              
              <button onClick={() => addToCart(product)} className="addCart">
                <p>Add to cart</p>
                <MousePointerClick className="iconAdd" /> 
              </button>
                </div>
              
            </li>
          )
        )}
      </ul>
        </main>
        
    )
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