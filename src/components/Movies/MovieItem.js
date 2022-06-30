import classes from './MovieItem.module.css';

const MovieItem = (props) => {
  return <li className={classes.movie}>{props.children}</li>
};

export default MovieItem;