// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    
    const renderMovieReviews = () => {
        return props.reviews.map((movie, index) => {
            return(
                <div key={index} className="review">
                    <h1>Title: {movie.display_title}</h1>
                    <p></p>
                    <p>Critics Pick: {movie.critics_pick}</p>
                    <h2>{movie.headline}</h2>
                    <p>{movie.summary_short}</p>
                    <a href={movie.link.url}>Read the Review Here!</a>
                </div>
            ) 
        } )
    }
    
    return (
        <div className="review-list">
            {renderMovieReviews()}
        </div> 
    )
}

export default MovieReviews