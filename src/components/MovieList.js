import React, { Component } from 'react';
import CSS from '../index.css';

class MovieList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      movies: [],
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
    this.setState({
      inputValue: event.target.value,
    });
  }

  updateAddValue (event) {
    this.setState({
      addValue: event.target.value
    });
  }

  onClick (event) {
    const movie = {
      title: this.state.addValue
    };

    const movies = this.state.movies.concat([movie]);
    this.setState({movies: movies});
    this.setState({addValue: ''});
  }


  render() {

    // let movies = [
    //   {title: 'Mean Girls'},
    //   {title: 'Hackers'},
    //   {title: 'The Grey'},
    //   {title: 'Sunshine'},
    //   {title: 'Ex Machina'},
    // ];

    console.log(this.state);

    let filteredMovies = this.state.movies.filter((movie) => {
      if (!this.state.inputValue) {
        return true;
      }

      if (movie.title.indexOf(this.state.inputValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    let movieList;

    if (filteredMovies.length === 0) {
      movieList = ('No movie by that name found.');
    } else {
      movieList = filteredMovies.map(this.createMovieList);
    }

    return (
      <div>
        <div className='title'>
          MovieList
        </div> 

        <div>
          <input
            className='addToList'
            type='text'
            value={ this.state.addValue }
            onChange={ this.updateAddValue.bind(this) } />

            <button className='add' onClick={ this.onClick.bind(this) }>Add</button>
        </div>    
      
        <div>
          <input
            className='search'
            type='text'
            value={ this.state.inputValue }
            onChange={ this.updateInputValue.bind(this) } />

          <button className='go'>Go!</button>
        </div>  
      
        { movieList }

      </div>
    );
  }
}

export default MovieList;