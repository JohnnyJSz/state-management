import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieListContext } from './MovieListContext';

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieListContext);

    return (
        <>
            {movies.map( movie => (
                <Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id}/>
            ))}
        </>
    );
};

export default MovieList;