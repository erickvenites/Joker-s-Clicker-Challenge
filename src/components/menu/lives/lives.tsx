import { useEffect, useState } from "react";
import "./lives.scss";

interface LivesProps {
  lives: number;
}

function Lives({ lives }: LivesProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Ativa o "blink" quando o número de vidas mudar
    setIsBlinking(true);

    // Remove o "blink" após 1 segundo para permitir futuras animações
    const timeout = setTimeout(() => {
      setIsBlinking(false);
    }, 1000); // Duração da animação

    // Limpa o timeout se o componente for desmontado
    return () => clearTimeout(timeout);
  }, [lives]); // Ativa o efeito quando 'lives' mudar

  return (
    <div className="lives-component">
      <img
        src="src/assets/batman-logo-with-snow-effect-png-bqx-eld55kyr2242go7r.png"
        alt="lives"
      />
      <h2>
        x
        <span className={`lives-value ${isBlinking ? "blink" : ""}`}>
          {lives}
        </span>
      </h2>
    </div>
  );
}

export default Lives;
