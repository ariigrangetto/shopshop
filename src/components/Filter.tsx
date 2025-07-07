import { useId } from "react";
import useFilterContext from "../hooks/useFilterContext";
import React from "react";
import type { Category } from "../types";

export default function Filter() {
  const { filter, setFilter } = useFilterContext();
  const selectId = useId();
  const inputId = useId();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter((prevState) => ({
      ...prevState,
      initialPrice: Number(e.target.value),
    }));
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter((prevState) => ({
      ...prevState,
      category: e.target.value as Category,
    }));
  }

  return (
    <>
      <section className='flex items-center text-[17px]  mb-[30px] mt-[30px] justify-between'>
        <div className='flex gap-[1rem]'>
          <label className='font-medium' htmlFor={inputId}>
            Price:{" "}
          </label>
          <input
            type='range'
            min='0'
            id={inputId}
            max='1000'
            value={filter.initialPrice}
            onChange={handleChange}
            className='range'
          />
          <span>${filter.initialPrice}</span>
        </div>

        <div className='flex gap-[1rem]'>
          <label className='font-medium' htmlFor={selectId}>
            Category:
          </label>
          <select
            onChange={handleSelect}
            id={selectId}
            value={filter.category}
            className='border-0 rounded-[20px] w-[120px] outline-0 bg-[rgba(99,115,187,0.781)]'
          >
            <option value='all'>All</option>
            <option value='groceries'>Groceries</option>
            <option value='beauty'>Beauty</option>
            <option value='fragrances'>Fragrances</option>
            <option value='furniture'>Furniture</option>
          </select>
        </div>
      </section>
    </>
  );
}
