import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './loader'

export default function MovieDetails() {
        let {imdbID} = useParams()
        const [details, setDetails] = useState(null)
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(()=>{
        function moviedetails(){
            axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=974c314d`)
            .then((response)=>{
                setDetails(response.data)
                setLoading(false);
            })
            .catch((err)=>{
            setError(err.message);
            setLoading(false);
            })
        }
        moviedetails()
        },[imdbID])

    return (
    <>
{
  !loading ? (
    details && (
      <div className='details'>
        <div className='movie-poster'>
          <img src={details.Poster} alt={details.Title}/>
          <button className='favorite-btn'>
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
        <div className='movie-info'>
          <h3>{details.Title}</h3>
          <p>{details.Year}</p>
        </div>
      </div>
    )
  ) : (
    <Loader/>
  )
}
    </>
    )
}
