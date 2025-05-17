
import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ?  <span className="player-name">{name}</span> : <input></input> }
       
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

export default Player;
