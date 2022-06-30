import Section from '../UI/Section';
import MovieItem from './MovieItem';
import classes from './Movies.module.css';

const Movies = (props) => {
  let movieList = <h2>No movies found. Start adding some!</h2>;

  if (props.items.length > 0) {
    movieList = (
      <ul>
        {props.items.map((movie) => (
          <MovieItem key={movie.id}>{movie.text}</MovieItem>
        ))}
      </ul>
    );
  }

  let content = movieList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading movies...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Movies;
