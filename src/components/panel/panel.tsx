import "./panel.scss";

interface PanelProps {
  enemyPosition: number;
  handleTargetClick: (target: any) => void;
}
export function Panel({ enemyPosition, handleTargetClick }: PanelProps) {
  return (
    <section className="panel-components">
      <div className="panel-row">
        <div
          className={`square ${enemyPosition === 1 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(1)}
          id="1"
        ></div>
        <div
          className={`square ${enemyPosition === 2 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(2)}
          id="2"
        ></div>
        <div
          className={`square ${enemyPosition === 3 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(3)}
          id="3"
        ></div>
      </div>
      <div className="panel-row">
        <div
          className={`square ${enemyPosition === 4 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(4)}
          id="4"
        ></div>
        <div
          className={`square ${enemyPosition === 5 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(5)}
          id="5"
        ></div>
        <div
          className={`square ${enemyPosition === 6 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(6)}
          id="6"
        ></div>
      </div>
      <div className="panel-row">
        <div
          className={`square ${enemyPosition === 7 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(7)}
          id="7"
        ></div>
        <div
          className={`square ${enemyPosition === 8 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(8)}
          id="8"
        ></div>
        <div
          className={`square ${enemyPosition === 9 ? "enemy" : ""}`}
          onClick={() => handleTargetClick(9)}
          id="9"
        ></div>
      </div>
    </section>
  );
}
