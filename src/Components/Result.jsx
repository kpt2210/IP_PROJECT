import React from 'react';

function Results({ votes }) {
  const countVotes = () => {
    const tally = { ' Python': 0, 'Java': 0, 'C++': 0 };
    Object.values(votes).forEach((vote) => {
      tally[vote]++;
    });
    return tally;
  };

  const voteCounts = countVotes();

  return (
    <div>
      <h2>Results</h2>
      <p>Option A: {voteCounts['Python']} votes</p>
      <p>Option B: {voteCounts['Java']} votes</p>
      <p>Option C: {voteCounts['C++']} votes</p>
    </div>
  );
}

export default Results;
