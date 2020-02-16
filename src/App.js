import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Navbar from './Navbar';
import AddMovie from './AddMovie';
import { MovieListProvider } from './MovieListContext';

function App() {
  return (
    <MovieListProvider>
      <div className="App">
        <Navbar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieListProvider>
  );
}

export default App;
