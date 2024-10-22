import { useEffect, useState } from "react";
import { MainMenu } from "../components/menu/mainMenu";
import { Panel } from "../components/panel/panel";
import DefeatOrWin from "../components/model/defeatOrWin/defeatOrWin";
import StartMenu from "../components/startMenu/startMenu";
import useAudio from "../hooks/useAudio"; // Certifique-se de que o caminho do hook esteja correto

function Game() {
  // Estados do jogo
  const [enemyPosition, setEnemyPosition] = useState<number>(
    getRandomEnemyPosition()
  );
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [time, setTime] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<"win" | "defeat" | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Usando o hook useAudio para gerenciar sons
  const clickSound = useAudio("src/sounds/coringa-risada_cortada.mp3");
  const attackSound = useAudio("src/sounds/atack_l6SQwpBP.mp3"); // Som de ataque
  const backgroundMusic = useAudio("src/sounds/som-de-fundo.m4a", {
    loop: true,
  });

  // Função para gerar posição aleatória do inimigo
  function getRandomEnemyPosition() {
    return Math.floor(Math.random() * 9) + 1;
  }

  // Função para lidar com cliques no alvo
  const handleTargetClick = (id: number) => {
    if (enemyPosition === id) {
      setScore((prevScore) => prevScore + 1);
      attackSound.play(); // Toca o som de ataque
    } else {
      clickSound.play();
      setLives((prevLives) => prevLives - 1);
    }
  };

  // Funções de controle do jogo
  const restartGame = () => {
    setLives(3);
    setScore(0);
    setTime(0);
    setGameStatus(null);
    setGameStarted(true);

    backgroundMusic.play(); // Inicia a música de fundo
  };

  const onDefeat = () => {
    setGameStatus("defeat");
    backgroundMusic.pause(); // Para a música ao perder
  };

  const checkGameStatus = () => {
    if (lives <= 0) {
      onDefeat();
    } else if (score >= 30) {
      setGameStatus("win");
      backgroundMusic.pause(); // Para a música ao vencer
    }
  };

  // Efeitos colaterais
  useEffect(() => {
    checkGameStatus();
  }, [lives, score]);

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setEnemyPosition(getRandomEnemyPosition());
    }, 700);

    return () => clearInterval(interval);
  }, [gameStarted]);

  useEffect(() => {
    let timerInterval: ReturnType<typeof setInterval> | null = null;

    if (time < 25 && gameStatus === null && gameStarted) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (time >= 25) {
      onDefeat();
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [time, gameStatus, gameStarted]);

  // Função para voltar ao menu principal
  const returnToMenu = () => {
    setGameStarted(false);
    setGameStatus(null);
    backgroundMusic.pause(); // Para a música ao voltar ao menu
  };

  const startGame = () => {
    setGameStarted(true);
  };

  // Renderização do jogo
  if (!gameStarted) {
    return <StartMenu onStart={startGame} backgroundMusic={backgroundMusic} />;
  }

  return (
    <div>
      <MainMenu score={score} lives={lives} time={time} />
      <Panel
        enemyPosition={enemyPosition}
        handleTargetClick={handleTargetClick}
      />
      <DefeatOrWin
        gameStatus={gameStatus}
        onRestart={restartGame}
        onReturnToMenu={returnToMenu}
      />
    </div>
  );
}

export default Game;
