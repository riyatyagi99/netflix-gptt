import React from 'react'
import Header from './Header';
//import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";



const Browse = () => {
  
  useNowPlayingMovies();
  //usePopularMovies();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
