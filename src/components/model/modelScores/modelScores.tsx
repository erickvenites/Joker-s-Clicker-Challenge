import React from "react";
import "./modelScores.scss";

interface ModalScoreProps {
  isOpen: boolean;
  onClose: () => void;
  data: { coluna1: string; coluna2: string }[]; // Defina as colunas conforme necessário
}

const ModalScore: React.FC<ModalScoreProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="overlat">
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times; {/* Ícone de fechar */}
          </button>
          <h2>Tabela de Pontuação</h2>
          <table>
            <thead>
              <tr>
                <th>Jogador</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.coluna1}</td>
                    <td>{item.coluna2}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>Nenhuma pontuação registrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalScore;
