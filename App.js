import React, { useState, useEffect} from 'react';
import './App.css';

const api = process.env.API_KEY;

function App() {
  const [ movie, setMovie ] = useState([{}]);
  const [ name, setName ] = useState('');
  

  useEffect(() => {
    moviesList();
  }, [])

  const getMovie = async(event) => {
    event.preventDefault();
    let api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${name}&page=1&include_adult=false`);
    let data = await api_call.json();
    setMovie(data.results);
    console.log(data.results);
    
  }


  const moviesList = async() => {
    for(let i = 0; i <= 50; i++ ){
      const teste = Math.floor(Math.random() * 450);
      const lista = await fetch(`https://api.themoviedb.org/3/movie/${teste}?api_key=${api}&language=en-US`);
      const data = await lista.json();
      setMovieList({ data });
    }
    
  }

  return (
    <div className="App">

      <form onSubmit={getMovie} className="search">
        <input type="text" placeholder="pesquise aqui seu filme favorito" required onChange={(event) => setName(event.target.value)}/>
        <button type="submit">Pesquisar</button>
      </form>
      {
        movie.map(movies => {
          return(
            <ul key={movies.id}>
              <li>{movies.original_title}</li>
              <img src={`http://image.tmdb.org/t/p/w185/${movies.poster_path}`} alt="poster"/>
            </ul>
          )
        })
      }
      
      
      
    </div>
  );
}

export default App;
