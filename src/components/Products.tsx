/* eslint-disable react/react-in-jsx-scope */
import { Heart, MousePointerClick, Star } from "lucide-react";
import useCartReducer from "../hooks/useCartReducer";
import { Link } from "react-router-dom";
import type { Product } from "../types.d";

interface Props {
  products: Product[];
}

export function ListOfProducts({ products }: Props) {
  const { addToCart } = useCartReducer();
  return (
    <main className='w-full flex justify-center items-center'>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 cursor-pointer '>
        {products.map((product) => (
          <li
            key={product.id}
            className='flex h-[95%] flex-col rounded-[20px] bg-[#eeebeb] text-black p-[1rem]'
          >
            <Link to={`/product/${product.id}`}>
              <div className='product'>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='rounded-[10px] w-full block object-contain bg-[#fff] mb-[1rem]'
                />
              </div>

              <div className='product-info'>
                <h3 className='flex justify-center text-black'>
                  {product.title}
                </h3>
                <h4 className='mt-[2px] font-medium text-black'>
                  {product.brand}
                </h4>

                <div className='bg-[rgba(99,115,187,0.781)] w-[150px] text-white justify-center flex m-auto h-[25px] mt-[15px] items-center text-center rounded-[20px]'>
                  <p className='flex items-center justify-center'>
                    <Heart className='mr-[5px]' size={12} />
                    {product.category}
                  </p>
                </div>

                <div className='rating h-[40px] justify-center flex m-auto items-center text-center '>
                  <p className='flex items-center justify-center'>
                    <Star className='mr-[5px]' size={15} /> {product.rating}
                  </p>
                </div>

                <div className='text-[rgba(13,24,71)]'>
                  <p>Available: {product.stock}</p>
                </div>
                <div className='justify-center m-auto flex text-center items-center h-[20px] text-black mt-[12px] font-sans'>
                  <p className='flex items-center m-auto justify-center'>
                    US <strong className='ml-[5px]'> ${product.price}</strong>
                  </p>
                </div>

                <div className='text-[13px] text-black'>
                  <p>
                    Discount:
                    <small className='text-[20px] font-[600]'>
                      {product.discountPercentage}%
                    </small>
                  </p>
                </div>
              </div>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className='flex justify-center m-auto text-center items-center p-[5px] mt-[15px] rounded-[50px] bg-black border-0 w-[150px] text-[15px] text-white cursor-pointer'
            >
              <p>Add to cart</p>
              <MousePointerClick className='ml-[5px] text-white' />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function WithoutResult() {
  return <p>No se encontraron resultados</p>;
}

export default function Products({ products }: Props) {
  const hasProduct = products.length > 0;
  return hasProduct ? (
    <ListOfProducts products={products} />
  ) : (
    <WithoutResult />
  );
}
