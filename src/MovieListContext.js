import React, { useState, createContext } from 'react';

// A) This is what we have to import in every component we need.
export const MovieListContext = createContext();

// B) If we need to use the info here, we have to import A)
export const MovieListProvider = (props) => {

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

    //Inside de <MovieListContext.Provider> we have to wrap all the components we need to use the data
    //Instead adding one by one we can use the PROPS.CHILDREN
    //it is going to render all the child components
    return(
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieListContext.Provider>
    );
}