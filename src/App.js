import React, { useEffect, useState } from "react";

import Wrapper from "./components/UI/Wrapper";
import CenteredVertically from "./components/UI/CenteredVertically";
import Movies from "./components/Movies/Movies";
import NewMovie from "./components/NewMovie/NewMovie";
import NewSerie from "./components/NewSerie/NewSerie";
import Series from "./components/Series/Series";
import useHttp from "./hooks/use-http";

function App() {
  const [movies, setMovies] = useState([]);

  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  const [series, setSeries] = useState([]);

  const { seriesLoading, seriesError, sendRequest: fetchSeries } = useHttp();

  useEffect(() => {
    const transformSeries = (serieObj) => {
      const loadedSeries = [];

      for (const serieKey in serieObj) {
        loadedSeries.push({ id: serieKey, text: serieObj[serieKey].text });
      }

      setSeries(loadedSeries);
    };

    fetchSeries(
      { url: "https://movies-f9403-default-rtdb.firebaseio.com/series.json" },
      transformSeries
    );
  }, [fetchSeries]);

  useEffect(() => {
    const transformMovies = (movieObj) => {
      const loadedMovies = [];

      for (const movieKey in movieObj) {
        loadedMovies.push({ id: movieKey, text: movieObj[movieKey].text });
      }

      setMovies(loadedMovies);
    };

    fetchMovies(
      { url: "https://movies-f9403-default-rtdb.firebaseio.com/movies.json" },
      transformMovies
    );
  }, [fetchMovies]);

  const movieAddHandler = (movie) => {
    setMovies((prevMovies) => prevMovies.concat(movie));
  };

  const serieAddHandler = (serie) => {
    setSeries((prevSeries) => prevSeries.concat(serie));
  };

  return (
    <Wrapper>
      <CenteredVertically>
        <NewMovie onAddMovie={movieAddHandler} />
        <Movies
          items={movies}
          loading={isLoading}
          error={error}
          onFetch={fetchMovies}
        />
      </CenteredVertically>
      <CenteredVertically>
        <NewSerie onAddSerie={serieAddHandler} />
        <Series
          items={series}
          loading={seriesLoading}
          error={seriesError}
          onFetch={fetchSeries}
        />
      </CenteredVertically>
    </Wrapper>
  );
}

export default App;
