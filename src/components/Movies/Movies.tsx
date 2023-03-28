import * as React from 'react';
import { Movie } from '../../shared/interfaces';
// @ts-ignore
import { ApiRequest } from '../ApiRequest/ApiRequest.tsx';

export default class Movies extends React.Component<any,{ movies: Movie[]}>{
    constructor(props: Movie[]){
        super(props);
        this.state = {movies: []};
    }

    async componentDidMount() {
        const moviesList = await ApiRequest();
        this.setState(moviesList)
        console.log(moviesList)
    }

    mappedInfo = (movies: Movie[]) => {
        return (
          <div >
            {movies.map((movie: Movie, id:number) => {
              return(
                <div className="movie">
                    <h1>{movie.title}</h1>
                    <h1>{movie.overview}</h1>
                </div>
              )
            })}
          </div>
        );
      };

    render(){
        return this.mappedInfo(this.state.movies)
    }
}