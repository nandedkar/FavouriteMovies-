import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieDetails } from '../redux'
import './addMovie.scss';


function AddMovieDetailsComp(props) {

    const [id, setId] = useState("6");
    const [type, setType] = useState("poster");
    const [rank, setRank] = useState("2");
    const [synopsis, setSynopsis] = useState("Add description here of Movie");
    const [title, setTitle] = useState("Add Title");
    const [imageUrl, setImageUrl] = useState("https://preview.ibb.co/fn5Xyp/raiders.jpg");
    const [releaseDate, setReleaseDate] = useState(1981);

    const [megaState, setMegaState] = useState({
        id: id,
        type: type,
        rank: rank,
        synopsis: synopsis,
        title: title,
        imageUrl: imageUrl,
        releaseDate: releaseDate
    })
    const onChangeHandler = (event) => {
        const name = event.name;
        setMegaState({
            ...megaState,
            [name]: event.value
        }, console.log(megaState))

        console.log('here',megaState);
    }
    const mySubmitHandler = (event) => {
        event.preventDefault();
        props.addMovieDetails(megaState);
        alert('Movie details added. Redirecting to Home');
        props.history.push('/');
    }

    return (
        <React.Fragment>
            <div className="add-movie">
                <h2>Add Movie</h2>
                <form onSubmit={mySubmitHandler} className="form-display">
                    <div className="form-group">
                        <lable>Enter Unique ID</lable>
                        <input type="number" className="form-control" value={megaState.id} name="id" onChange={(event) => onChangeHandler(event.target)} required></input>
                    </div>
                    <div className="form-group">
                        <lable>Type</lable>
                        <input type="text" className="form-control" value={megaState.type} name="type" onChange={(event) => onChangeHandler(event.target)} required disabled></input>
                    </div>
                    <div className="form-group">
                        <lable>Rank</lable>
                        <input type="text" className="form-control" value={megaState.rank} name="rank" onChange={(event) => onChangeHandler(event.target)} required></input>
                    </div>
                    <div className="form-group">
                        <lable>Synopsis</lable>
                        <textarea type="text" className="form-control" value={megaState.synopsis} name="synopsis" onChange={(event) => onChangeHandler(event.target)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Title</lable>
                        <textarea type="text" className="form-control" value={megaState.title} name="title" onChange={(event) => onChangeHandler(event.target)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Image Url</lable>
                        <textarea type="text" className="form-control" value={megaState.imageUrl} name="imageUrl" onChange={(event) => onChangeHandler(event.target)} required></textarea>
                    </div>
                    <div className="form-group">
                        <lable>Release Year</lable>
                        <input type="text" value={megaState.releaseDate} name="releaseDate" onChange={(event) => onChangeHandler(event.target)} required></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addMovieDetails}>Submit</button>

                </form>
            </div>
        </React.Fragment>
    )
}


const mapDispatchToProps = (dispatch) => {
    console.log('here')
    return {
        addMovieDetails: (data) => dispatch(addMovieDetails(data))
    }
}

export default connect(null, mapDispatchToProps)(AddMovieDetailsComp);