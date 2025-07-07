import React from "react";
import { useParams } from "react-router-dom";
import useCartReducer from "../hooks/useCartReducer";
import type { Product } from "../types.d";
import { MessageCircle, MousePointerClick, Star } from "lucide-react";
import Cart from "./Cart";

interface Props {
  products: Product[];
}

export default function ProductDetail({ products }: Props) {
  const { id } = useParams();
  const { addToCart } = useCartReducer();

  const product = products.find((p) => p.id === Number(id));
  return (
    <>
      <Cart />
      <div className='details'>
        <div className=''>
          <img src={product?.images[0]} alt={product?.title} />
        </div>
        <div className='info'>
          <h1>{product?.title}</h1>
          <h2>{product?.brand}</h2>
          <div className='tags'>
            <div className='firstTag'>
              <p>{product?.tags[0]}</p>
            </div>

            <div className='secondTag'>
              <p>{product?.tags[1]}</p>
            </div>
          </div>

          <div className='rating'>
            <p>
              <Star className='starIcon' size={15} /> {product?.rating}
            </p>
          </div>
          <h3>{product?.description}</h3>

          <div className='price'>
            <p>US </p> <strong>${product?.price}</strong>
          </div>

          <p className='discount'>Discount: {product?.discountPercentage}%</p>

          <div className='infoShip'>
            <span className='dot'></span>
            <p> {product?.warrantyInformation}</p>
            <span className='dot'></span>
            <p>{product?.shippingInformation}</p>
          </div>

          <div className='dimensions'>
            <p>Dimensions:</p>
            <p>
              <strong>Width:</strong> {product?.dimensions.width}
            </p>
            <p>
              <strong>Height:</strong> {product?.dimensions.height}
            </p>
            <p>
              <strong>Depth:</strong> {product?.dimensions.depth}
            </p>
          </div>

          <button onClick={() => addToCart(product)} className='addCart'>
            <p>Add to cart</p>
            <MousePointerClick className='iconAdd' />
          </button>
        </div>
      </div>

      <div className='commentsTitle'>
        <h2>
          <MessageCircle className='messageIcon' />
          Comments:
        </h2>
      </div>

      <div className='commentsSection'>
        <div className='comments'>
          <div className='firstComment'>
            <h4 className='rating'>
              <Star size={15} />
              Rating: {product?.reviews[0].rating}
            </h4>
            <p className='name'>{product?.reviews[0].reviewerName}</p>
            <p className='email'>{product?.reviews[0].reviewerEmail}</p>
            <p>{product?.reviews[0].comment}</p>
          </div>

          <div className='secondComment'>
            <h4 className='rating'>
              <Star size={15} />
              Rating: {product?.reviews[1].rating}
            </h4>
            <p className='name'>{product?.reviews[1].reviewerName}</p>
            <p className='email'>{product?.reviews[1].reviewerEmail}</p>
            <p>{product?.reviews[1].comment}</p>
          </div>

          <div className='thirdComment'>
            <h4 className='rating'>
              <Star size={15} />
              Rating: {product?.reviews[2].rating}
            </h4>
            <p className='name'>{product?.reviews[2].reviewerName}</p>
            <p className='email'>{product?.reviews[2].reviewerEmail}</p>
            <p>{product?.reviews[2].comment}</p>
          </div>
        </div>
      </div>
    </>
  );
}
