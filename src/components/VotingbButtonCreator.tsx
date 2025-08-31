type Props = {
  btn: string[];
  fn: (option: string) => void;
};

export default function VotingbButtonCreator({ btn, fn }: Props) {
  return (
    <>
      {btn.map((option, index) => (
        <button key={index} onClick={() => fn(option)}>
          {option}
        </button>
      ))}
    </>
  );
}

