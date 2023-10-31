import React from 'react';

function Story({ adjective, noun1, noun2, color, onRestart }) {
  return (
    <div>
      <h2>Madlib Story</h2>
      <p>
        There was a {color} {noun1} who loved a {adjective} {noun2}.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Story;
