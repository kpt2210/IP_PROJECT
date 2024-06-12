import React, { useState } from 'react';

function Vote({ currentVoter, recordVote }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = (e) => {
    e.preventDefault();
    if (selectedOption) {
      recordVote(selectedOption);
      setSelectedOption('');
    }
  };

  return (
    <div>
      <h2>Voter {currentVoter}, cast your vote:</h2>
      <form onSubmit={handleVote}>
        <label>
          <input
            type="radio"
            value="Python"
            checked={selectedOption === 'Python'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Python
        </label>
        <label>
          <input
            type="radio"
            value="Java"
            checked={selectedOption === 'Java'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Java
        </label>
        <label>
          <input
            type="radio"
            value="C++"
            checked={selectedOption === 'C++'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          C++
        </label>
        <button type="submit">Submit Vote</button>
      </form>
    </div>
  );
}

export default Vote;
