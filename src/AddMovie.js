import React, { useState, useContext }from 'react';
import { MovieListContext } from './MovieListContext';

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieListContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(previousMovies => [...previousMovies, {name: name, price: price}]);
    }

    return (
        <form onSubmit={addMovie}>
            <input placeholder='title here' type='text' name='name' value={name} onChange={updateName}/>
            <br/>
            <input placeholder='price here' type='text' name='price' value={price} onChange={updatePrice}/>
            <br/>
            <button>Add a movie</button>
        </form>
    );
};

export default AddMovie;