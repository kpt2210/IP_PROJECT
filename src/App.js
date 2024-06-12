import React, { useState } from 'react';
import Home from './Components/Home';
import Vote from './Components/Vote';
import Results from './Components/Result';
import './App.css';

function App() {
  const [numberOfVoters, setNumberOfVoters] = useState(0);
  const [votes, setVotes] = useState({});
  const [currentVoter, setCurrentVoter] = useState(0);
  const [pollingDone, setPollingDone] = useState(false);

  const startVoting = (voters) => {
    setNumberOfVoters(voters);
    setCurrentVoter(1);
  };

  const recordVote = (vote) => {
    setVotes({ ...votes, [currentVoter]: vote });
    if (currentVoter >= numberOfVoters) {
      setPollingDone(true);
    } else {
      setCurrentVoter(currentVoter + 1);
    }
  };

  return (
    <div className="App">
      <h1>Polling App</h1>
      {!numberOfVoters ? (
        <Home startVoting={startVoting} />
      ) : !pollingDone ? (
        <Vote currentVoter={currentVoter} recordVote={recordVote} />
      ) : (
        <Results votes={votes} />
      )}
    </div>
  );
}

export default App;
