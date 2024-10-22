import { useEffect } from "react";
import "./defeatOrWin.scss";

interface DefeatOrWinProps {
  gameStatus: "win" | "defeat" | null;
  onRestart: () => void;
  onReturnToMenu: () => void; // Nova prop para voltar ao menu
}

function DefeatOrWin({
  gameStatus,
  onRestart,
  onReturnToMenu,
}: DefeatOrWinProps) {
  useEffect(() => {
    if (gameStatus === "defeat") {
      const gameOverAudio = new Audio("src/sounds/coringa-risada.mp3");
      gameOverAudio.play();
    }
  }, [gameStatus]);

  if (!gameStatus) return null;

  return (
    <>
      <div className="overlay" />
      <div className="modal-overlay">
        <section className="modal-content">
          <h1>{gameStatus === "win" ? "You Win" : "Game Over!"}</h1>
          <img
            src={`${
              gameStatus === "win"
                ? "src/assets/batman-win.jpg"
                : "src/assets/joker-win.webp"
            }`}
            alt="win or defeat"
          />
          <button onClick={onRestart}>Restart Game</button>
          <button onClick={onReturnToMenu}>Back to Menu</button>{" "}
          {/* Botão para voltar ao menu */}
        </section>
      </div>
    </>
  );
}

export default DefeatOrWin;
