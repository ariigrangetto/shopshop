import React, { useId, } from "react"
import "./Filter.css"
import useFilter from "../hooks/useFilter";


export default function Filter(){
    const {filter, setFilter} = useFilter();
    const selectId = useId();
    const inputId = useId();


    function handleChange(e){
        setFilter(prevState => ({
            ...prevState, 
            initialPrice: Number(e.target.value)
        }))
    }

    function handleSelect(e){
        setFilter(prevState => ({
            ...prevState,
            category: e.target.value
        })
        )
    }

    return(
        <>
        <section className="filters">
            <div>
                <label htmlFor={inputId}>Price: </label>
                    <input 
                    type="range"
                    min="0"
                    id={inputId}
                    max="1000"
                    value={filter.initialPrice}
                    onChange={handleChange} 
                    className="range"
                    />
                    <span>${filter.initialPrice}</span>
            </div>
            
        <div>
            <label htmlFor={selectId}>Category:</label>
                <select onChange={handleSelect} id={selectId} value={filter.category}>
                <option value="all">All</option>
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                

        </select>
        </div>   
        </section>        
        </>
    )
}