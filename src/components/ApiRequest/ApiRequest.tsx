import axios from 'axios';
// @ts-ignore
import { API } from '../../shared/api.tsx';

export interface RequestType{
    movies: string[]
}

export async function ApiRequest(): Promise<RequestType>{
    const moviesList = await axios.get(API);
    return {
        movies: moviesList.data.results
    }
};