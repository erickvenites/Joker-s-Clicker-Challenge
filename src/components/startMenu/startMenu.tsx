import React, { useEffect } from "react";

import "./startMenu.scss"; // Arquivo de estilo para o componente

interface StartMenuProps {
  onStart: () => void;
  backgroundMusic: HTMLAudioElement; // Música de fundo passada como prop
}

const StartMenu: React.FC<StartMenuProps> = ({ onStart, backgroundMusic }) => {
  useEffect(() => {
    if (backgroundMusic.paused) {
      backgroundMusic.loop = true; // Coloca a música em loop
      backgroundMusic.play().catch((error) => {
        console.error("Erro ao reproduzir música de fundo:", error);
      });
    }

    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0; // Reinicia a música ao pausar
    };
  }, [backgroundMusic]);

  return (
    <div className="start-menu">
      <div className="start-menu-content">
        <h1 className="start-menu-title">Bem-vindo ao Jogo!</h1>
        <p className="start-menu-description">
          Prepare-se para enfrentar desafios épicos e testar suas habilidades.
          Clique no botão abaixo para começar sua aventura!
        </p>
        <div className="start-menu-buttons">
          <button className="start-menu-button" onClick={onStart}>
            Iniciar Jogo
          </button>
        </div>
      </div>

      <footer className="start-menu-footer">
        <p>Use o mouse para clicar nos alvos e evite perder suas vidas!</p>
      </footer>
    </div>
  );
};

export default StartMenu;
