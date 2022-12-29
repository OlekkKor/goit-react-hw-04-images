import PropTypes from 'prop-types';

import css from './Searchbar.module.css';
import { useState } from "react";


export const Searchbar = ({onFormSubmit}) => { 
const [inputValue , setInputValue] = useState('')



const inputChange = event => {
  setInputValue(event.target.value)
}   


const handleSubmit = e => {
    e.preventDefault(); 
    onFormSubmit(inputValue);
}


    return( 
    <header className={css.header}>
    <form onSubmit={handleSubmit} className={css.form}>
      <button  className={css.button}>
        <span>Search</span>
      </button>
  
      <input className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={inputChange}
      />
    </form>
  </header>  
    )
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};