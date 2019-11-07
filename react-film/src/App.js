import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films } = TMDB;

class App extends Component {

  state = {
    films: [...films],
    faves: [],
    current: {}
  }

  onFaveToggle = (film, fave) => {
    console.log('App onFaveToggle', film);
    console.log('App onFaveToggle', fave);

    // do stuff here
    const faveList = [...this.state.faves];
    this.setState({
      faves: faveList
    });
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={films} onFaveToggle={ this.onFaveToggle } />
        <FilmDetails films={films} />
      </div>
    );
  }
}

export default App;
