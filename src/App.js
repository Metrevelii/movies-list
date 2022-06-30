import React, { useEffect, useState } from "react";

import Movies from "./components/Movies/Movies";
import NewMovie from "./components/NewMovie/NewMovie";
import useHttp from "./hooks/use-http";

function App() {
  const [movies, setMovies] = useState([]);
  
  const {
    isLoading,
    error,
    sendRequest: fetchMovies,
  } = useHttp();


  useEffect(() => {
    const transformMovies = ((movieObj) => {
      const loadedMovies = [];
  
      for (const movieKey in movieObj) {
        loadedMovies.push({ id: movieKey, text: movieObj[movieKey].text });
      }
  
      setMovies(loadedMovies);
    });
  

    fetchMovies({url: "https://movies-f9403-default-rtdb.firebaseio.com/movies.json"}, transformMovies);
  }, [fetchMovies]);

  const movieAddHandler = (movie) => {
    setMovies((prevMovies) => prevMovies.concat(movie));
  };

  return (
    <React.Fragment>
      <NewMovie onAddMovie={movieAddHandler} />
      <Movies
        items={movies}
        loading={isLoading}
        error={error}
        onFetch={fetchMovies}
      />
    </React.Fragment>
  );
}

export default App;
