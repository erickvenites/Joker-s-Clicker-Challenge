import "./score.scss";
interface ScoreProps {
  score: number;
}
function Score({ score }: ScoreProps) {
  return (
    <div className="score-component">
      <h2 className="score">Your Score</h2>
      <h2>{score}</h2>
      {/* <button onClick={increaseScore}>Increase</button> */}
    </div>
  );
}

export default Score;
