import React, { useContext } from 'react';
import './Navbar.css';
import { MovieListContext } from './MovieListContext';

const Navbar = () => {

    const [movies, setMovies] = useContext(MovieListContext);
    
    return (
        <div className='navbar'>
            <h1>State Management Tutorial</h1>
            <h3>list of Movies: {movies.length}</h3>
        </div>
    );
};

export default Navbar;