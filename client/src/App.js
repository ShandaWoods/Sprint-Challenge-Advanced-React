import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './Components/PlayerCard';
import Navbar from './Components/Navbar';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    players: [], 
    randomPlayer: {},
};
componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(response => {
        console.log('Look at the response', response);
        this.setState({ players: response.data});
        })
        
        
    }
 

render(){
  return (
    <div className="App">
      <Navbar />
        {
          this.state.players.map( player => {
            return (
              <PlayerCard
              name={player.name}
              country={player.country}
              key={player.id}
              searches={player.searches}
              />
            )
          })
        }
    </div>
  );
}
  
}

export default App;
