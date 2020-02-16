import React, { useContext } from 'react';
import { MovieListContext } from './MovieListContext';

const Navbar = () => {

    const [movies, setMovies] = useContext(MovieListContext);
    
    return (
        <div>
            <h1>State Management Tutorial</h1>
            <h3>list of Movies: {movies.length}</h3>
        </div>
    );
};

export default Navbar;