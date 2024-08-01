import React, { useState, useEffect } from 'react';
import Filter from '../src/components/filter';
import TermList from '../src/components/TermList';
import './App.css';

const App = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => {
        setTerms(data.termList);
        setFilteredTerms(data.termList);
      });
  }, []);

  const filterTerms = (letter) => {
    setSelectedLetter(letter);
    setFilteredTerms(
      letter ? terms.filter(term => term.title.startsWith(letter)) : terms
    );
  };

  return (
    <div className="app">
      <Filter filterTerms={filterTerms} selectedLetter={selectedLetter} />
      <TermList terms={filteredTerms} />
    </div>
  );
};

export default App;
