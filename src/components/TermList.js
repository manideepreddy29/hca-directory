import React from 'react';

const TermList = ({ terms }) => (
  <div className="terms">
    {terms.map((term, index) => (
      <div key={index} className="term">
        <a href={term.link}>{term.title}</a>
      </div>
    ))}
  </div>
);

export default TermList;
