import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, ADD_MOVIE_DATA } from './movieType'

const initialState = {
    loading: false,
    data: [],
    order_select: {},
    movie_list: {},
    error: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIE_SUCCESS: return {
            loading: false,
            data: action.payload,
            order_select: action.payload.components[0],
            movie_list: action.payload.components[1],
            error: ''
        }
        case FETCH_MOVIE_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload
        }
        case ADD_MOVIE_DATA:
            let movieItems = state.movie_list.items;
            movieItems.push(action.payload);
            let finalData = { "type": "movie-list", items: movieItems }
            return {
                loading: false,
                movie_list: { ...finalData }
            }
        default: return state
    }
}
export default movieReducer