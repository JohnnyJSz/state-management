import React from 'react';

const Movie = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h3>Price: {props.price}</h3>
        </>
    );
};

export default Movie;