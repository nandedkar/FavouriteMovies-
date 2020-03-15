import axios from 'axios'
import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, ADD_MOVIE_DATA } from './movieType'

export const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
}

export const fetchMovieSuccess = (users) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: users
    }
}

export const fetchMovieFailure = (error) => {
    return {
        type: FETCH_MOVIE_FAILURE,
        payload: error
    }
}
export const addMovieToData = (data) => {
    return {
        type: ADD_MOVIE_DATA,
        payload: data
    }

}

export const fetchMovieDetails = () => {
    return (dispatch) => {
        dispatch(fetchMovieRequest())
        axios.get('top5MoviesAssessement.json')
            .then(response => {
                const movieList = response.data;
                dispatch(fetchMovieSuccess(movieList));
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchMovieFailure(errorMsg))
            })
    }
}

export const addMovieDetails = (data) => {
    return (dispatch) => {
        dispatch(addMovieToData(data))
    }
}