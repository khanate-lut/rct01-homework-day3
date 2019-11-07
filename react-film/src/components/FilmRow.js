import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  state = {
    isFave: false
  }

  handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title}`);
  }

  onFaveToggle = (e) => {
    const newFave = !this.state.isFave;
    this.setState({
      isFave: newFave
    })
    console.log('FilmRow onFaveToggle');
    this.props.onFaveToggle(newFave);
  }

  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster posterPath={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave onFaveToggle={ this.onFaveToggle } isFave={ this.state.isFave } />
      </div>
    )
  }
}

export default FilmRow;