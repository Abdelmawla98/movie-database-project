import '../css/Favorites.css'
import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


const Favourites = () => {
  const {favourites} = useMovieContext();
  if(favourites){
    return (
      <div className='favorites'>
        <h2>Your favourites</h2>
          <div className="movies-grid">
            {  favourites.map(el=>
            ( <MovieCard movie={el} key={el.id} /> )
            )}
          </div>
      </div>
    )
  }
  return (
    <div className='favourite-empty'>
        <h2>No favourite movies added yet</h2>
        <p>start adding your favourite movies here</p>
    </div>
  )
}

export default Favourites