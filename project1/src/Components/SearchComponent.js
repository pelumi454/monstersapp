import React from 'react'
import './searchbox.styles.css'

const SearchComponent = ({placeholder,handleChange}) => {
    return (
        <div>
           <input className="search" type="search" placeholder={placeholder} onChange = {handleChange}/> 
        </div>
    )
}

export default SearchComponent
