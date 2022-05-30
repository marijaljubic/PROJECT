import {useEffect, useState} from 'react';
import './App.css';

//f6577987

const API_URL = 'http://www.omdbapi.com?apikey=f6577987';

const movie1 ={

    "Title": "Amazing Spiderman Syndrom",
    "Year" : "2012",
    "imdbID" : "tt2586634",
    "Type" : "movie",
    "Poster" : "N/A"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async(title)=>
  {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
  }


  useEffect(()=>{
      searchMovies('Spiderman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
          <input
            placeholder="Search for movies"
            value = {searchTerm}

            onChange = {(e)=> setSearchTerm(e.target.value)}
          />

          <img
          
              src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
              alt="search"
              onClick= {() => {}}
          />
      </div>  

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>


        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>




        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>




        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>



        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>




        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>




        </div>
    </div>

  );
}

export default App;
