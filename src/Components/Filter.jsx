import React, { useId, } from "react"
import "./Filter.css"


export default function Filter({filter, setFilter}){
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
                    />
                    <span>${filter.initialPrice}</span>
            </div>
            
        <div>
            <label htmlFor={selectId}>Category:</label>
                <select onChange={handleSelect} id={selectId} value={filter.category}>
                <option value="all">All</option>
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
        </select>
        </div>   
        </section>        
        </>
    )
}