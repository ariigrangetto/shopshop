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
      <div className='font-sans flex gap-[2rem] items-center justify-center m-auto p-[2rem]'>
        <div className=''>
          <img
            src={product?.images[0]}
            className='h-[300px] bg-[rgba(231,231,231,0.664)] rounded-[20px]'
            alt={product?.title}
          />
        </div>
        <div className='flex flex-col gap-[1rem] bg-[rgba(182,182,182,0.158)] w-[500px] p-[10px] rounded-[20px]'>
          <h1 className='text-[30px]'>{product?.title}</h1>
          <h2 className='text-[20px] font-medium justify-center flex m-auto mt-[-10px]'>
            {product?.brand}
          </h2>
          <div className='flex m-auto'>
            <div className='bg-black text-white w-[100px] rounded-[50px] h-[25px] mr-[5px]'>
              <p className='items-center text-center m-auto'>
                {product?.tags[0]}
              </p>
            </div>

            <div className='bg-black text-white w-[100px] rounded-[50px] h-[25px]'>
              <p className='item-center text-center m-auto'>
                {product?.tags[1]}
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <p className='flex items-center justify-center'>
              <Star className='mr-[2px]' size={15} />
              {product?.rating}
            </p>
          </div>
          <h3 className='font-medium'>{product?.description}</h3>

          <div className='justify-center m-auto flex item-center text-center h-[20px] text-black mt-[12px] text-[25px] font-sans'>
            <p className='items-center text-[12px] mb-[22px]'>US </p>
            <strong>${product?.price}</strong>
          </div>

          <p className='text-[rgba(0,0,255,0.699)] text-[15px] mt-[10px]'>
            Discount: {product?.discountPercentage}%
          </p>

          <div className='flex gap-[2rem] m-auto bg-[rgba(255,255,255,0.075)] rounded-[20px] h-[80px] mt-[-20px]'>
            <span className='bg-black w-[5px] h-[5px] rounded-[50%] m-auto'></span>
            <p className='flex items-center justify-center'>
              {" "}
              {product?.warrantyInformation}
            </p>
            <span className='bg-black w-[5px] h-[5px] rounded-[50%] m-auto'></span>
            <p className='flex items-center justify-center'>
              {product?.shippingInformation}
            </p>
          </div>

          <div className='flex  m-auto bg-[rgba(255,255,255,0.075)] rounded-[20px] h-[80px] mt-[-40px]'>
            <p className='m-auto ml-[10px]'>
              <strong className='font-[300px] mr-[4px] text-[18px]'>
                Width:
              </strong>
              {product?.dimensions.width}
            </p>
            <p className='m-auto ml-[10px]'>
              <strong className='font-[300px] mr-[4px] text-[18px]'>
                Height:
              </strong>
              {product?.dimensions.height}
            </p>
            <p className='m-auto ml-[10px]'>
              <strong className='font-[300px] mr-[4px] text-[18px]'>
                Depth:
              </strong>
              {product?.dimensions.depth}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className='flex justify-center m-auto text-center items-center h-[35px]  rounded-[50px] bg-black border-0 w-[150px] text-[15px] text-white cursor-pointer mt-[-10px] mb-[10px]'
          >
            <p>Add to cart</p>
            <MousePointerClick className='iconAdd' />
          </button>
        </div>
      </div>

      <div className='justify-center m-auto'>
        <h2 className='text-[25px] font-bold flex justify-center m-auto items-center text-center'>
          <MessageCircle className='mr-[10px]' />
          Comments:
        </h2>
      </div>

      <div className='bg-[rgba(182,182,182,0.158)] rounded-[20px] h-[100%] justify-center flex m-auto mt-[20px]'>
        <div className='flex gap-[2rem] text-center justify-center m-auto p-[2rem]'>
          <div className='firstComment'>
            <h4 className='mt-[-10px] flex justify-center items-center '>
              <Star size={15} className='mr-[2px]' />
              Rating: {product?.reviews[0].rating}
            </h4>
            <p className='text-[22px]'>{product?.reviews[0].reviewerName}</p>
            <p className='text-[rgba(0,0,255,0.712)] mt-[5px]'>
              {product?.reviews[0].reviewerEmail}
            </p>
            <p className='mt-[10px]'>{product?.reviews[0].comment}</p>
          </div>

          <div className='secondComment'>
            <h4 className='mt-[-10px] flex justify-center items-center'>
              <Star size={15} className='mr-[2px]' />
              Rating: {product?.reviews[1].rating}
            </h4>
            <p className='text-[22px]'>{product?.reviews[1].reviewerName}</p>
            <p className='text-[rgba(0,0,255,0.712)] mt-[5px]'>
              {product?.reviews[1].reviewerEmail}
            </p>
            <p className='mt-[10px]'>{product?.reviews[1].comment}</p>
          </div>

          <div className='thirdComment'>
            <h4 className='mt-[-10px] flex justify-center items-center'>
              <Star size={15} className='mr-[2px]' />
              Rating: {product?.reviews[2].rating}
            </h4>
            <p className='text-[22px]'>{product?.reviews[2].reviewerName}</p>
            <p className='text-[rgba(0,0,255,0.712)] mt-[5px]'>
              {product?.reviews[2].reviewerEmail}
            </p>
            <p className='mt-[10px]'>{product?.reviews[2].comment}</p>
          </div>
        </div>
      </div>
    </>
  );
}
