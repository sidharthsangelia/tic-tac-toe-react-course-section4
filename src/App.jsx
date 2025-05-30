import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player intialName="Player 1" symbol="X" />
          <Player intialName="Player 2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </>
  );
}

export default App;
