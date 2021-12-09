import React, { useEffect, useState } from 'react'
import QuestionContainer from './QuestionContainer';
import PlayerStats from "./PlayerStats"
import AddNewQuestionForm from './AddNewQuestionForm.js';
import StartForm from './StartForm';
import QuizResults from './QuizResults'
import Footer from './Footer';

function QuizForm({ visible, setVisible }) {
    const randomQuestion = Math.floor(Math.random() * (4 - 1) + 1);
    const[questions, setQuestions] = useState([]);
    const [playerStat, setPlayerStat] = useState({
      money:0,
      correct:0,
      wrong:0,
      answered:0,
    })
    
    const [gameOptions, setGameOptions] = useState({
      difficulty: "",
      category: "",
      length: "",
    });

    const [gameStart, setGameStart] = useState(false)


    const LOCAL_API = `http://localhost:3000/${gameOptions.category}`;

    useEffect(() => {
    fetch(LOCAL_API)
      .then((r) => r.json())
      .then((question) => setQuestions(question));
  }, [LOCAL_API]);

  return (

    <div>
      <StartForm gameOptions={gameOptions} setGameOptions={setGameOptions} gameStart={gameStart} setGameStart={setGameStart} />
      {playerStat.answered < Number(gameOptions.length) && gameStart ? (
        questions
          .filter((q) => q.id === randomQuestion)
          .map((q) => {
            return (
              <div>
                <QuestionContainer
                  question={[q]}
                  allQuestions={questions}
                  setQuestions={setQuestions}
                  playerStat={playerStat}
                  setPlayerStat={setPlayerStat}
                  gameOptions={gameOptions}
                  visible={visible}
                  setVisible={setVisible}
                />
              </div>
            );
          })
      ) : (
        gameStart ? <QuizResults playerStat={playerStat} setPlayerStat={setPlayerStat} gameStart={gameStart} setGameStart={setGameStart}/> : null
      )}
            
        </div>
    )
}

export default QuizForm
