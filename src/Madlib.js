import React, { useState } from 'react';
import PromptsForm from './PromptsForm';
import Story from './Story';

function Madlib() {
  const [noun1, setNoun1] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective, setAdjective] = useState('');
  const [color, setColor] = useState('');
  const [showStory, setShowStory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noun1 && noun2 && adjective && color) {
      setShowStory(true);
    }
  };

  const handleRestart = () => {
    setNoun1('');
    setNoun2('');
    setAdjective('');
    setColor('');
    setShowStory(false);
  };

  return (
    <div>
      {showStory ? (
        <Story
          adjective={adjective}
          noun1={noun1}
          noun2={noun2}
          color={color}
          onRestart={handleRestart}
        />
      ) : (
        <PromptsForm
          onSubmit={handleSubmit}
          setNoun1={setNoun1}
          setNoun2={setNoun2}
          setAdjective={setAdjective}
          setColor={setColor}
        />
      )}
    </div>
  );
}

export default Madlib;
