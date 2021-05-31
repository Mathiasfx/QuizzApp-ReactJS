import { useState, Fragment, useEffect } from "react";
import { Questions } from "../src/Data/QuestionsDB";
import OptionButton from "../src/components/OptionButton";
import FinalScenne from "../src/components/FinalScenne";

function App() {
  //Numero de Pregunta, inicia en el 0
  const [QuestionNumber, setQuestionNumber] = useState(0);
  //Game Over
  const [GameOver, setGameOver] = useState(false);
  //Score
  const [Score, setScore] = useState(0);
  //Seleccionar el Body para usar despues
  const[Body,setBody] = useState(null);

  useEffect(() => {
     setBody(document.querySelector('body'));
  }, [])

  //Pasar a la Siguiente Pregunta
  const NextQuestion = (value) => {
    //Animacion Color
    const AnimacionColor =(color) => {
      Body.style.backgroundColor=color;   
      setTimeout(() => {
        Body.style.backgroundColor="#f0f1f8";   
      }, 500);
    }
    //Manejo de Puntajes
    if (value === true) {
      setScore(Score + 100);    
         AnimacionColor("#06d6a0");
    }else{
      AnimacionColor("#ef476f");
    }
    let next = QuestionNumber + 1;
    //Si el Siguiente supera el numero de preguntas setear el fin del juego.
    if (next < Questions.length) {
      setQuestionNumber(next);
    } else {
      setQuestionNumber(0);  
      setGameOver(true);
    }
  };



  return (
    <div className="App">
      <div className="container">
        {GameOver === false ? (
          <Fragment>
            <h1>Quizz App</h1>
            <p>
              Bienvenido a la Trivia en React Responde todas las preguntas bien
              y ganate 2000 USD
            </p>
            <div className="CardQuizz">
              <div className="SeccionPreguntas">
                <p>{Questions[QuestionNumber].question}</p>
              </div>
              <div className="SeccionRespuestas">
                {Questions[QuestionNumber].answerOptions.map(
                  (answerOptions, index) => {
                    return (
                      <OptionButton
                        NextQuestion={NextQuestion}
                        value={answerOptions.isCorrect}
                        key={index}
                        text={answerOptions.OptionText}
                      ></OptionButton>
                    );
                  }
                )}
              </div>
            </div>
            <p>
              Pregunta {QuestionNumber + 1} de {Questions.length}
            </p>
          </Fragment>
        ) : ( <FinalScenne Score={Score} setGameOver={setGameOver} setScore={setScore}/>)}
      </div>
    </div>
  );
}

export default App;
