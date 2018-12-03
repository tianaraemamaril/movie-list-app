import React, { Component } from 'react';
import CSS from '../index.css';

class MovieList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }


  createMovieList (movie, index) {
    return (
      <div className='titleList' key={index}>
        {movie.title}
      </div>
    );
  }


  updateInputValue (event) {
    console.log(event.target);
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    let movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

    console.log(this.state);

    let filteredMovies = movies.filter((movie) => {
      if (!this.state.inputValue) {
        return true;
      }

      if (movie.title.indexOf(this.state.inputValue) !== -1) {
        return true;
      } else {
        return false;
      }

    });

    return (
      <div>
        <div className='title'>
          MovieList
        </div> 
      
        <div>
          <input
            className='search'
            type='text'
            value={ this.state.inputValue }
            onChange={ this.updateInputValue.bind(this) } />


          <button className='go'>Go!</button>
        </div>  
      
        { filteredMovies.map(this.createMovieList) }

      </div>
    );
  }
}

export default MovieList;