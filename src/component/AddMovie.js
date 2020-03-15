import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieDetails } from '../redux'
import './addMovie.scss';


class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '6',
            type: "poster",
            rank: 2,
            synopsis: "Add description here of Movie",
            title: "Add Title",
            imageUrl: "https://preview.ibb.co/fn5Xyp/raiders.jpg",
            releaseDate: 1981
        };
    }

    //Funtion to setState input values on Change
    changeHandler = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    //Function to perform Submit action
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.addMovieDetails(this.state);
        alert('Movie details added. Redirecting to Home');
        this.props.history.push('/');        
    }

    render() {
        return (
            <div className="add-movie">
                <h2>Add Movie</h2>
                <form onSubmit={this.mySubmitHandler} class="form-display">
                    <div className="form-group">
                        <lable>Enter Unique ID</lable>
                        <input type="number" className="form-control" value={this.state.id} name="id" onChange={(event) => this.changeHandler(event)} required></input>
                    </div>
                    <div className="form-group">
                        <lable>Type</lable>
                        <input type="text" className="form-control" value={this.state.type} name="type" onChange={(event) => this.changeHandler(event)} required disabled></input>
                    </div>
                    <div className="form-group">
                        <lable>Rank</lable>
                        <input type="text" className="form-control" value={this.state.rank} name="rank" onChange={(event) => this.changeHandler(event)} required></input>
                    </div>
                    <div className="form-group">
                        <lable>Synopsis</lable>
                        <textarea type="text" className="form-control" value={this.state.synopsis} name="synopsis" onChange={(event) => this.changeHandler(event)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Title</lable>
                        <textarea type="text" className="form-control" value={this.state.title} name="title" onChange={(event) => this.changeHandler(event)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Image Url</lable>
                        <textarea type="text" className="form-control" value={this.state.imageUrl} name="imageUrl" onChange={(event) => this.changeHandler(event)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Release Year</lable>
                        <input type="text" value={this.state.releaseDate} name="releaseDate" onChange={(event) => this.changeHandler(event)} required></input>
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>

                </form>
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
        addMovieDetails: (data) => dispatch(addMovieDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);