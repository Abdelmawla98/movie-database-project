import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css'
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
useEffect(
  ()=>{
    const loadPopularMovies = async ()=>{
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }
      catch(err){
        console.log(err)
        setError("Failed to load movies ...")
      }
      finally{
        setLoading(false);
      }
     }
     loadPopularMovies()
  },[]
)

  const handleSearch = async (e)=>{
    e.preventDefault();
  try{
    const searchV = await searchMovies(searchQuery)
    setMovies(searchV)
  }
  catch(err){
    console.log(err)
    setError("Failed to load movies ...")
  }
  finally{
    setLoading(false);
  }
  }

function handleSearchInput(e){
  setSearchQuery(e.target.value);
}


  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchInput}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {error && <div className="error-message"> {error} </div>}

        {loading? (<div className="loading">Loading ...</div>) :
        
        movies.map(el=>{
     return( <MovieCard movie={el} key={el.id} /> )
    })}
      </div>
    </div>
  );
}

export default Home;