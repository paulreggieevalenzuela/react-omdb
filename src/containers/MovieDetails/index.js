import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// Common Component
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";

// Context
import AppContext from "../../context";

// Styles
import * as S from "./MovieDetails.style";

const MovieDetails = () => {
  const [context] = React.useContext(AppContext);
  const [details, setDetails] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (context.imdbID || context.data.length) {
      setLoading(true);
      const id = context.imdbID || context.data[0].imdbID;
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=298fb8d7`)
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          setLoading(false);
          setDetails(response);
        })
        .catch((err) => {
          setLoading(false);
          console.warn('err details', err);
        });
    }
  }, [context.imdbID, context.data]);

  return (
    <Card width="100%">
      {isLoading && (
        <p className="loading">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </p>
      )}
      {!isLoading && details && (
        <Wrapper justify="space-between" withPadding={false} display="flex">
          <S.LeftContent>
            <S.Title>{details.Title}</S.Title>
            <p className="genre">{details.Genre}</p>
            <p className="description">{details.Plot}</p>
            <p className="details">Language: <span>{details.Language}</span></p>
            <p className="details">Director: <span>{details.Director}</span></p>
            <p className="details">Actors: <span>{details.Actors}</span></p>
            <p className="details">Duration: <span>{details.Runtime}</span></p>
          </S.LeftContent>
          <S.RightContent>
            <img src={details.Poster} alt={details.Title} />
          </S.RightContent>
        </Wrapper>
      )}
    </Card>
  );
};

export default MovieDetails;
