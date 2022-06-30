import classes from './SeriesItem.module.css';

const SeriesItem = (props) => {
    return <li className={classes.serie}>{props.children}</li>
};

export default SeriesItem;


