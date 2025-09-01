import { useState } from "react";
import "./App.css";
import VoteOptions from "./components/VoteOptions";

function App() {
  const [numberOfVotes, setNumberOfVotes] = useState<{ [key: string]: number }>(
    {
      React: 0,
      Vue: 0,
      Svelte: 0,
    }
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleVote = (option: string) => {
    setNumberOfVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <>
      <section className="app-container">
        <h1>Vote for your favorite framework!</h1>
        <VoteOptions
          numberOfVotes={numberOfVotes}
          showResults={showResults}
          fn={handleVote}
        />
      </section>

      <section className="container-functional-buttons">

        <button
          className="functional-buttons"
          onClick={() => setShowResults((prev) => !prev)}
        >
          {showResults ? "Hide Results" : "Show Results"}
        </button>
        <button className="functional-buttons"
          onClick={() => {
            setNumberOfVotes({
              React: 0,
              Vue: 0,
              Svelte: 0,
            });
          }}
        >
          reset
        </button>
      </section>
    </>
  );
}

export default App;
