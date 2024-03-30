import './App.css';
import React from 'react';
import PlayerCard from './components/PlayerCard'; // Adjust the path if needed

const players = [
  { id: 1, name: "Player 1", position: "Forward", age: "..", height: "...", image: "..." },
  { id: 2, name: "Player 2", position: "Midfielder", age: "..", height: "...", image: "..." },
  { id: 3, name: "Player 3", position: "Midfielder", age: "..", height: "...", image: "..." },
  { id: 4, name: "Player 4", position: "Midfielder", age: "..", height: "...", image: "..." },
  { id: 5, name: "Player 5", position: "Forward", age: "..", height: "...", image: "..." }
];

function App() {
  return (
    <div className="App">
        <h1>The Roster</h1>
        {players.map((player) => (
            <PlayerCard key={player.id} name={player.name} position={player.position} age={player.age} height={player.height} image={player.image} />
        ))}
    </div>
  );
}

export default App;
