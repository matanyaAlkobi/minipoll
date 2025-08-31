import { useState } from "react";
import "./App.css";
import VoteOptions from "./components/VoteOptions";

function App() {
  const [numberOfVotes, setNumberOfVotes] = useState<{ [key: string]: number }>({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleVote = (option: string) => {
    setNumberOfVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <>
      <section className="">
        <VoteOptions numberOfVotes={numberOfVotes} showResults={showResults} fn={handleVote}/>

      </section>


      <button onClick={() => setShowResults((prev) => !prev)}>
        {showResults ? "Hide Results" : "Show Results"}
      </button>
    </>
  );
}

export default App;
