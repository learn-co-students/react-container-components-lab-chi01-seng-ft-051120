import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleForm = event => {
        let input = event.target.value 
        this.setState({
            searchTerm: input
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let searchUrl = URL + this.state.searchTerm;
        fetch(searchUrl)
        .then(resp => resp.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results})})
        }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
            <label>Search Term:
                <input type="text" value={this.state.searchTerm} onChange={this.handleForm} />
            </label>
            <input type="submit" />
            <MovieReviews reviews={this.state.reviews}/>
            </form>

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer