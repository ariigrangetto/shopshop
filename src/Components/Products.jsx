import React from "react";
import "./Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useCartReducer from "../hooks/useCartreducer";

export function ListOfProducts({products}){
    const {addToCart} = useCartReducer();
    return(
        <div className="listOfProducts">
            <ul className="listOfProducts">
        {products.map((product) => (
            <li key={product.id}>

                <div className="product">
                    <img src={product.images} alt={product.title} />

                <div className="title">
                    <h3>{product.title}</h3>
                </div>
              
              <div className="categorySection">
                <p>{product.category}</p>
              </div>

              <div className="price">
                <p>Price: </p><strong>${product.price}</strong>
              </div>
              
              <FontAwesomeIcon onClick={() => addToCart(product)} icon={faCartPlus} className="addCart"/>
                </div>
              
            </li>
          )
        )}
      </ul>
        </div>
        
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