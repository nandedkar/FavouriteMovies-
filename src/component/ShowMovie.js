import React from 'react'

const ShowMovieDescription = (props) => {
    return (
        <li key={props.list.id} id={props.list.id} className="movie-name" ><h4>{props.list.title}</h4><img src={props.list.imageUrl} alt="Image not Found"></img>
            <div className="description-btn">
                <button className="btn btn-success" onClick={(event) => props.exploreDetails(props.list.id)}>
                    {`${props.showDescription.indexOf(props.list.id) === -1 ? "Show Description" : "Hide Description"}`}
                </button>
            </div>
            <div className={`description ${props.showDescription.indexOf
                (props.list.id) === -1 ? "hide" : ""}`}>
                <p><span className="text-bold">Synopsis:</span> {props.list.synopsis}</p>
                <p><span className="text-bold">Release Year:</span> {props.list.releaseDate}</p>
            </div>
        </li>
    )
}

export default ShowMovieDescription;
