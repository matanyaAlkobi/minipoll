
type TryProps = {
  numberOfVotes: { [key: string]: number };
  showResults: boolean;
  fn: (option: string) => void;
};

export default function VoteOptions({
  numberOfVotes,
  showResults,
  fn,
}: TryProps) {
  return (
    <div  className="vote-options">
      {Object.entries(numberOfVotes).map(([option, votes]) => (
        <div key={option} className="vote-option">
          <button onClick={() => fn(option)}>{option}</button>
          {showResults && (
            <p>
              {option}: {votes} votes
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
