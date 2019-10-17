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
    console.log(data);
    setMovie(data);
  }

  const moviesList = async() => {
    let api_call = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`);
    let data = await api_call.json();
    
    data.genres.map(async(i) => {
      const id = i.id;
      let lista = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`);
      let data = await lista.json();
      console.log(data);
    })
    
  }

  return (
    <div className="App">
      <form onSubmit={getMovie} className="search">
        <input type="text" placeholder="pesquise aqui seu filme favorito" required onChange={(event) => setName(event.target.value)}/>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default App;
