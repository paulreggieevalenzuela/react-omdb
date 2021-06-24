import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSpinner,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/useDebounce";

// Common Component
import Card from "../../components/card";

// Context

import AppContext from "../../context";

// Styles
import * as S from "./MovieList.style";

const MovieList = () => {
  const pageSize = 5;
  const [context, setContext] = React.useContext(AppContext);
  const [searchTerm, onSearch] = React.useState("batman");
  const [isLoading, setLoading] = React.useState(false);

  // Pagination
  const [totalPage, setTotalPage] = React.useState(1);
  const [page, setPage] = React.useState(1);

  // Now we call our hook, passing in the current searchTerm value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getMovies = (q, p) => {
    // Set loading true
    setLoading(true);

    // Fetch MOVIES
    fetch(`http://www.omdbapi.com/?s=${q}&page=${page}&apikey=298fb8d7`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        setLoading(false);
        if (response.Response === "False") {
          console.warn(response.Error);
        } else {
          setTotalPage(parseInt(response.totalResults));
          setContext({ ...context, data: response.Search });
        }
      })
      .catch((err) => {
        console.warn("err movie list", err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getMovies(searchTerm, page);
  }, []);

  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  React.useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm.length) {
      // Set loading state
      setLoading(true);
      // Reset the page to 1
      setPage(1);
      // Trigger API call
      getMovies(debouncedSearchTerm, 1);
    }
  }, [debouncedSearchTerm]);

  const handleViewDetails = (data) => {
    setContext({ ...context, imdbID: data.imdbID });
  };

  return (
    <Card margin="0 20px 0 0">
      <S.SearchField
        type="text"
        placeholder="Search movies..."
        onChange={(e) => onSearch(e.target.value)}
        name="search"
      />
      <S.List>
        {!isLoading &&
          context.data.length &&
          context.data.map((d) => (
            <S.ListItem
              key={d.imdbID}
              onClick={() => handleViewDetails(d)}
              isActive={d.imdbID === context.imdbID}
            >
              <S.LeftContent>
                <p className="title">
                  Title: <span>{d.Title}</span>
                </p>
                <p className="type">
                  Type: <span>{d.Type}</span>
                </p>
              </S.LeftContent>
              <S.RightContent>
                <FontAwesomeIcon icon={faStar} />
                <p className="year">{d.Year}</p>
              </S.RightContent>
            </S.ListItem>
          ))}
        {isLoading && (
          <p className="loading">
            <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          </p>
        )}
      </S.List>
      <S.Pagination>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="1x"
          onClick={() => {
            if (page === 1) return;
            setPage(page - 1);
            getMovies(searchTerm, page + 1);
          }}
        />
        <S.PaginationInfo>
          <p>Page {page}</p>
          <p>{totalPage} results</p>
        </S.PaginationInfo>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="1x"
          onClick={() => {
            const pages = Math.ceil(totalPage / pageSize);
            if (page === pages) return;
            setPage(page + 1);
            getMovies(searchTerm, page + 1);
          }}
        />
      </S.Pagination>
    </Card>
  );
};

export default MovieList;
