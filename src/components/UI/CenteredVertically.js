import classes from './CenteredVertically.module.css';

const CenteredVertically = (props) => {
    return (
        <div className={classes.vertical}>{props.children}</div>
    )
}

export default CenteredVertically;