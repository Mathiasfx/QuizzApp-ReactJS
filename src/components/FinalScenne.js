import { useState, useEffect } from "react";
import { Questions } from "../Data/QuestionsDB";

const FinalScenne = ({ Score, setGameOver, setScore }) => {
  const [wingame, setWingame] = useState(false);
  const [WinScore, setWinScore] = useState(0);

  useEffect(() => {
    setWinScore(Questions.length * 100);
  }, []);

  useEffect(() => {
    if (Score === WinScore) {
      setWingame(true);
    }
  }, [Score, WinScore]);

  const ResetGame = () => {
    setGameOver(false);
    setWinScore(0);
    setScore(0);
  };

  return (
    <div className="GameOver">
      {wingame === true ? (
        <div className="container">
          <h1>FELICIDADES GANASTE!!</h1>
          <h2>Tu Puntaje Fue {Score}</h2>
          <p>
            Pedi la Transferencia de 2000USD a LAUTARO mandando una Captura de
            Esta Pantalla
          </p>
          <button onClick={ResetGame} className="OptionButton">
            Volver A Jugar
          </button>
        </div>
      ) : (
        <div className="container">
          <h1>Game Over</h1>
          <h2>Tu Puntaje Fue {Score}</h2>
          <p>Intentalo de Nuevo</p>
          <button onClick={ResetGame} className="OptionButton">
            Volver A Jugar
          </button>
        </div>
      )}
    </div>
  );
};

export default FinalScenne;
