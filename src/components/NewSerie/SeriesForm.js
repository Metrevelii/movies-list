import { useRef } from "react";

import classes from "./SeriesForm.module.css";

const SeriesForm = (props) => {
  const serieInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = serieInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterSerie(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={serieInputRef} />
      <button>{props.loading ? "Sending..." : "Add TV Serie"}</button>
    </form>
  );
};

export default SeriesForm;
