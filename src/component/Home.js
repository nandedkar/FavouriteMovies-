import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../redux';
import './Home.scss';
import ShowMovieDescription from './ShowMovie';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDataList: [],
            showDescription: []
        };
    }

    componentDidMount() {
        if (this.props.movie_list.items) {
            this.setState({
                movieDataList: this.props.movie_list.items
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movie_list.items && nextProps.movie_list.items.length !== this.state.movieDataList.length) {
            this.setState({
                movieDataList: nextProps.movie_list.items
            })
        }
    }

    //Funtion to show and hide synopsis
    exploreDetails(id) {
        let showArray = [...this.state.showDescription];
        showArray.indexOf(id) !== -1 ? showArray.splice(showArray.indexOf(id), 1) : showArray.push(id);
        this.setState({
            showDescription: [...showArray]
        })
    }

    //Function to Sort Moive by value (Release date or Rank)
    sortMovie(event) {
        let sortBy = event.target.value
        const sortedArray = this.state.movieDataList.sort(function (a, b) {
            return (a[sortBy] - b[sortBy])
        })
        this.setState({
            movieDataList: sortedArray
        })
    }



    render() {
        let showDescription = this.state.showDescription;
        return (
            this.props.movie.loading ? <div className="loader"><h1>Loading...</h1></div> :
                this.props.movie.error ? <div>{this.props.movie.error} </div> :
                    <div className="movie-details">
                        <h2>Movie List</h2>
                        <div className="filter">
                            <lable className="text-bold">Filter By</lable>
                            <select id="movieFilter" onChange={(event) => this.sortMovie(event)}>
                                <option value="releaseDate">Release Date</option>
                                <option value="rank">Rank</option>

                            </select>

                        </div>
                        <ul className="render-data">{this.props.movie_list && this.props.movie_list.items && this.state.movieDataList.map(list =>
                            <ShowMovieDescription list={list} showDescription={showDescription} exploreDetails={(e) => this.exploreDetails(e)} />
                        )}

                        </ul>
                    </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie,
        order_select: state.movie.order_select,
        movie_list: state.movie.movie_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: () => dispatch(fetchMovieDetails())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
