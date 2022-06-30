import Section from "../UI/Section";
import MoviesForm from "./MoviesForm";
import useHttp from "../../hooks/use-http";

const NewMovie = (props) => {
  const { isLoading, error, sendRequest: sendMovieRequest } = useHttp();

  const createMovie = (movieText, movieData) => {
    const generatedId = movieData.name; // firebase-specific => "name" contains generated id
    const createdMovie = { id: generatedId, text: movieText };

    props.onAddMovie(createdMovie);
  };

  const enterMovieHandler = async (movieText) => {
    sendMovieRequest(
      {
        url: "https://movies-f9403-default-rtdb.firebaseio.com/movies.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: movieText },
      },
      createMovie.bind(null, movieText)
    );
  };

  return (
    <Section>
      <MoviesForm onEnterMovie={enterMovieHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewMovie;
