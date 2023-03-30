import * as React from "react";
import { Movie } from "../../shared/interfaces";
// @ts-ignore
import { IMG_API } from "../../shared/api.tsx";
// @ts-ignore
import { ApiRequest } from "../ApiRequest/ApiRequest.tsx";
import "./css/Movies.scss";

interface MoviesComponentType {
  movies: Movie[];
  term: string;
}
export default class Movies extends React.Component<any, MoviesComponentType> {
  constructor(props: MoviesComponentType) {
    super(props);
    this.state = { movies: [], term: "" };
  }

  async componentDidMount() {
    const moviesList = await ApiRequest();
    this.setState(moviesList);
    console.log(moviesList);
  }

  onInputChange = (event: any) => {
    this.setState({ term: event.target.value });
  };

  mappedInfo = (movies: Movie[], term: string) => {
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
        <div className="movies">
          {movies
            .filter((movie) => {
              if (term === "") {
                return movie;
              } else if (
                movie.title.toLowerCase().includes(term.toLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie: Movie, id: number) => {
              return (
                <div className="movie" key={id}>
                  <div className="parentTag">
                    <p className="movie-img">
                      <img
                        className="img"
                        src={IMG_API + movie.poster_path}
                        alt="image of movie"
                      />
                    </p>
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-vote_average">
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <p className="movie-release_date">{movie.release_date}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  render() {
    return this.mappedInfo(this.state.movies, this.state.term);
  }
}
