import React from 'react'
import { Link, Router, NavLink } from 'react-router-dom';
import { MdPlayArrow, MdInsertEmoticon, MdPerson } from 'react-icons/md'


const MovieSearch = (props) => (
  <Router>
    <div className="container">
      <h1 className="discover-title">Results</h1>
        {
        props.movie.map(movies => {
          return(
            
            <div className="cellphone-container" key={movies.id}>    
      <div className="movie">       
        <div className="menu"></div>
        <div className="movie-img">
          <img src={`http://image.tmdb.org/t/p/w400/${movies.poster_path}`}/>
        </div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h1>{movies.title.length < 15 ? `${movies.title}` : `${movies.title.substring(0,15)}...`}</h1>
              <ul className="movie-gen">
                <li>{movies.release_date}</li>
                <li>{movies.genres}</li>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <div className="col2">
              <h5>SUMMARY</h5>
            </div>
            <div className="col2">
               <ul className="movie-likes">
                <li><MdInsertEmoticon/> {movies.vote_average}</li>
                <li><MdPerson/> {movies.vote_count} votes</li>
              </ul>
            </div>
          </div>
          <div className="mr-grid">
            <div className="col1">
              <p className="movie-description">{movies.overview.length < 50 ? `${movies.overview}` : `${movies.overview.substring(0, 50)}...`}</p>
            </div>
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              <div className="watch-btn">
                <button>
                
                <Link to={{
                  pathname: `/search/${movies.id}`,
                  state: {
                    id: movies.id,
                  }
                }}></Link>
                <h3><MdPlayArrow/>
                 VER SOBRE</h3>
                 
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
   
  </div>

        
        
        )
      })
    }
    </div>
    </Router>
);

export default MovieSearch;
