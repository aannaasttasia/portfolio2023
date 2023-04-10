import * as React from "react";
import { MovieInterface } from "../../shared/interfaces";
// @ts-ignore
import { IMG_API } from "../../shared/api.tsx";
// @ts-ignore
import { ApiRequest } from "../ApiRequest/ApiRequest.tsx";
import "./css/Movies.scss";
// @ts-ignore
import MovieDetails from "../MovieDetails/MovieDetails.tsx";


interface MoviesComponentType {
  movies: MovieInterface[];
  term: string;
  selectedMovie: any;
  buttonCliked: boolean;
}

export default class Movies extends React.Component<any, MoviesComponentType> {
  constructor(props: MoviesComponentType) {
    super(props);
    this.state = { movies: [], term: "", selectedMovie: null, buttonCliked: false };
  }

  async componentDidMount() {
    const moviesList = await ApiRequest();
    this.setState(moviesList);
    console.log(moviesList);
  }

  handleClick = (e: any) => {
    this.setState({selectedMovie:  e});
  }

  onInputChange = (event: any) => {
    this.setState({ term: event.target.value });
  };

  buttonClick = () => {
    this.setState({buttonCliked:  !(this.state.buttonCliked)});
    console.log(this.state.buttonCliked)
  }

  mappedInfo = (movies: MovieInterface[], term: string) => {
    return (
      <div className="parrentTag">
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
            .map((movie: MovieInterface, id: number) => {
              return (
                <div className="movie" key={id}>
                  <div className="parentTag">
                    <div className="movie-img" onClick={()=> {this.handleClick(movie); this.buttonClick()}}>
                      <img
                        className="img"
                        src={IMG_API + movie.poster_path}
                        alt="image of movie"
                      />
                      <h1 className="movie-title">{movie.title}</h1>
                      <p className="movie-vote_average">
                        {movie.vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="returnDetails">
          <div className="showDetails">
            {this.state.selectedMovie? 
            this.state.buttonCliked?
            <div className="movieDetails">
              <a className="close" onClick={()=>this.buttonClick()}/>
              <MovieDetails movie={this.state.selectedMovie} onBack={() =>{this.state.selectedMovie(null)}}/>
            </div>
            : false : false}
          </div>
          <div className={this.state.selectedMovie? this.state.buttonCliked?"color": "":""}></div>
        </div>
        
    </div>
    );
  };

  render() {
    return this.mappedInfo(this.state.movies, this.state.term);
  }
}
