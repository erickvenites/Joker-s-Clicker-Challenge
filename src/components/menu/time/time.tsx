import "./time.scss";

interface TimeProps {
  time: number; // Função para lidar com a derrota
}

function Time({ time }: TimeProps) {
  return (
    <div className="time-component">
      <h2 className="time">Time</h2>
      <h2>{time}</h2>
    </div>
  );
}

export default Time;
