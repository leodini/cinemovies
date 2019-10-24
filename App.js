import React, { useState, useEffect} from 'react';
import './App.css';

const api = process.env.API_KEY;

function App() {
  const [ movie, setMovie ] = useState([{}]);
  const [ name, setName ] = useState('');
  
useEffect(() => {
    const discover = async() =>{
      const req = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const res = await req.json();
      setMovie(res.results);
      console.log(res.results)
    }
    discover();
  }, [])


  const getMovie = async(event) => {
    event.preventDefault();
    let api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${name}&page=1&include_adult=false`);
    let data = await api_call.json();
    const results = data.results;
    setMovie(data.results);
    results.forEach(movie => {
      const movieRow = [];
      movieRow.push(setMovie);
      console.log(movie);
    });
  }

  return (
    <div className="App">
      <div className="header">
      <h2 className="app-name">Cinemovies</h2>
      
      <form onSubmit={getMovie} className="search">
        <input className="input" required type="text" name="titulo" placeholder="pesquise aqui seu filme favorito" required onChange={(event) => setName(event.target.value)}/>
        <button type="submit">Pesquisar</button>
      </form>
      </div>
      <MovieSearch movie={movie}/>
    </div>
  );
}



export default App;
