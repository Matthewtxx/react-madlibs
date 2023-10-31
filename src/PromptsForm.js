import React from 'react';
import './Madlib.css';

function PromptsForm({ onSubmit, setNoun1, setNoun2, setAdjective, setColor }) {
  return (
    <form onSubmit={onSubmit} className="form-container">
      <h2>Madlib Form</h2>
      <label>
        Noun 1:
        <input type="text" onChange={(e) => setNoun1(e.target.value)} />
      </label>
      <br />
      <label>
        Noun 2:
        <input type="text" onChange={(e) => setNoun2(e.target.value)} />
      </label>
      <br />
      <label>
        Adjective:
        <input type="text" onChange={(e) => setAdjective(e.target.value)} />
      </label>
      <br />
      <label>
        Color:
        <input type="text" onChange={(e) => setColor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PromptsForm;
