import Section from '../UI/Section';
import SeriesItem from './SeriesItem';
import classes from './Series.module.css';

const Series = (props) => {
  let seriesList = <h2>No series found. Start adding some!</h2>;

  if (props.items.length > 0) {
    seriesList = (
      <ul>
        {props.items.map((serie) => (
          <SeriesItem key={serie.id}>{serie.text}</SeriesItem>
        ))}
      </ul>
    );
  }

  let content = seriesList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading series...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Series;
