import classes from './HeadContainer.module.css';

const HeadContainer = (props) => {
    return (<div className={classes.headContainer}>{props.children}</div>)
};

export default HeadContainer;