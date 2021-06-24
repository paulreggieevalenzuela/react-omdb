import React from "react";
import MovieList from "./containers/MovieList";
import MovieDetails from "./containers/MovieDetails";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <Wrapper className="main">
      <h1 className="main__title">OMDB API with ReactJS</h1>
      <Wrapper 
        display="flex" 
        withPadding={false}
      >
        <MovieList />
        <MovieDetails />
      </Wrapper>
    </Wrapper>
  );
}

export default App;
