import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Navbar from './Navbar';
import { MovieListProvider } from './MovieListContext';

function App() {
  return (
    <MovieListProvider>
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    </MovieListProvider>
  );
}

export default App;
