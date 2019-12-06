import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Components/Navbar';
import PlayerCard from './Components/PlayerCard'


const samplePlayer = {
  "name": "Alex Morgan",
  "country": "United States",
  "searches": 100,
  "id": 0
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('a NavBar component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('a PlayerCard component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <PlayerCard
    name={samplePlayer.name}
    country={samplePlayer.country}
    key={samplePlayer.id}
    searches={samplePlayer.searches}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
})


