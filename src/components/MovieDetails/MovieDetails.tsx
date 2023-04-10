import * as React from 'react';
// @ts-ignore
import { IMG_API } from "../../shared/api.tsx";
import './css/MovieDetails.scss'


export interface MovieInterface{
    title : string,
    release_date : string,
    overview: string,
    poster_path: string,
    vote_average: number,
    vote_count: number
}
export default class MovieDetails extends React.Component<{movie: MovieInterface}>{
    constructor(props: {movie: MovieInterface}){
        super(props);
    }

    render(){
        return(
            <div className="movie-details">
                <div className="title-details">{this.props.movie.title}</div>
                <div className="parentMovie">
                    <div className="image">
                        <img
                            className="imgDetails"
                            src={IMG_API + this.props.movie.poster_path}
                            alt="image of movie"
                        /> 
                    </div>
                    <div className="info">
                        <div className="release-date"><span className="releaseText">Release date: </span> {this.props.movie.release_date}</div>
                        <div className="overview">{this.props.movie.overview}</div>
                        <div className="infoVote">
                            <div className="vote-average">{this.props.movie.vote_average} / 10</div>
                            <div className="vote-count">({this.props.movie.vote_count} total votes)</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}