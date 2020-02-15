import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 123456
        },
        {
            name: 'Interstellar',
            price: '$11',
            id: 214365
        },
        {
            name: 'Batman Begins',
            price: '$8',
            id: 654321
        },
        {
            name: 'Terminator',
            price: '$5',
            id: 435261
        },
        {
            name: 'Life of PI',
            price: '$10',
            id: 615243
        },
        {
            name: 'The Gentleman',
            price: '$14',
            id: 312645
        }
    ]);

    return (
        <>
            {movies.map( movie => (
                <Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id}/>
            ))}
        </>
    );
};

export default MovieList;