import React from 'react';

const Filter = ({ filterTerms, selectedLetter }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="filter">
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => filterTerms(letter)}
          className={selectedLetter === letter ? 'active' : ''}
        >
          {letter}
        </button>
      ))}
      <button onClick={() => filterTerms('')} className={!selectedLetter ? 'active' : ''}>#</button>
    </div>
  );
};

export default Filter;
