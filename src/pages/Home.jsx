import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Loader from "../components/loader";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
  setLoading(true);
  axios
    .get("https://www.omdbapi.com/?s=batman&apikey=974c314d")
    .then((response) => {
      setMovies(response.data.Search );
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

  return (
    <>
      {!loading ? (
        <div className="home">
          <div className="search-side">
            <input
              type="text"
              placeholder="Search for a movie..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              search
            </button>
          </div>
          
          <div className="movies-grid">
            {movies.map((movie) => {
            return <div className='movie-card' key={movie.imdbID}>
              <Link to={`movie-detail/${movie.imdbID}/${movie.Title}`}>
            <div className='movie-poster'>
                <img src={movie.Poster} alt={movie.Title}/>
                    <button className='favorite-btn'>
                        <i class="fa-regular fa-heart"></i>
                    </button>
            </div>
            <div className='movie-info'>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
            </Link>
        </div>
      })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
