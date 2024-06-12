import React, { useState } from 'react';

function Home({ startVoting }) {
  const [voters, setVoters] = useState('');

  const handleStart = (e) => {
    e.preventDefault();
    if (voters > 0) {
      startVoting(parseInt(voters));
    }
  };

  return (
    <div>
      <h2>Enter Number of Voters</h2>
      <form onSubmit={handleStart}>
        <input
          type="number"
          value={voters}
          onChange={(e) => setVoters(e.target.value)}
          required
        />
        <button type="submit">Start Poll</button>
      </form>
    </div>
  );
}

export default Home;
