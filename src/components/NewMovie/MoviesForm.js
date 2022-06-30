import { useRef } from 'react';

import classes from './MoviesForm.module.css';

const MoviesForm = (props) => {
  const movieInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = movieInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterMovie(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={movieInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Movie'}</button>
    </form>
  );
};

export default MoviesForm;
