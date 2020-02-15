import React from 'react';

const Movie = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h3>Price: {props.price}</h3>
            <p>Id: {props.id}</p>
        </>
    );
};

export default Movie;