// import Section from "../UI/Section";
import HeadContainer from '../UI/HeadContainer';
import SeriesForm from "./SeriesForm";
import useHttp from "../../hooks/use-http";

const NewSerie = (props) => {
  const { isLoading, error, sendRequest: sendSerieRequest } = useHttp();

  const createSerie = (serieText, serieData) => {
    const generatedId = serieData.name; // firebase-specific => "name" contains generated id
    const createdSerie = { id: generatedId, text: serieText };

    props.onAddSerie(createdSerie);
  };

  const enteredSerieHandler = async (serieText) => {
    sendSerieRequest(
      {
        url: "https://movies-f9403-default-rtdb.firebaseio.com/series.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: serieText },
      },
      createSerie.bind(null, serieText)
    );
  };

  return (
    <HeadContainer>
      <SeriesForm onEnterSerie={enteredSerieHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </HeadContainer>
  );
};

export default NewSerie;
