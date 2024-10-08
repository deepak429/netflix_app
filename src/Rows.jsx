import React, { useState, useEffect } from 'react'
import "./Rows.css"
import axios from './axios';


export default function Rows({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])
  console.log(movies);
  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={` row__poster ${isLargeRow && "row__posterLarger"}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path  : movie.backdrop_path}`}
            alt={movie.name} />
        ))}
      </div>


    </div>
  )
}
