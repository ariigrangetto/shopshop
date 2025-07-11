/* eslint-disable react/react-in-jsx-scope */
import { useId } from "react";
import { useFilterStore } from "../store/useFilterStore";
import type { Category } from "../types.d";

export default function Filter() {
  const filter = useFilterStore((state) => state.filter);
  const updateFilter = useFilterStore((state) => state.updateFilter);

  const selectId = useId();
  const inputId = useId();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateFilter({ initialPrice: Number(e.target.value) });
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    updateFilter({ category: e.target.value as Category });
  }

  return (
    <>
      <section className='flex items-center text-black text-[17px]  mb-[30px] mt-[30px] justify-between'>
        <div className='flex gap-[1rem]'>
          <label className='font-medium' htmlFor={inputId}>
            Price:
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
