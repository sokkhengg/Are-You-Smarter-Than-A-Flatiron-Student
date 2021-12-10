import React, { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import StartForm from "./StartForm";
import QuizResults from "./QuizResults";

function QuizForm({ playerStat, setPlayerStat, visible, setVisible }) {
  const [questions, setQuestions] = useState([]);

  const [gameOptions, setGameOptions] = useState({
    difficulty: "",
    category: "",
    length: "",
  });

  const [gameStart, setGameStart] = useState(false);

  const LOCAL_API = `http://localhost:3000/${gameOptions.category}`;

  useEffect(() => {
    fetch(LOCAL_API)
      .then((r) => r.json())
      .then((question) => {
        setQuestions(question);
      });
  }, [LOCAL_API]);
  const randomQuestion = Math.floor(
    Math.random() * (questions.length - 1 + 1) + 1
  );

  return (
    <div>
      <StartForm
        gameOptions={gameOptions}
        setGameOptions={setGameOptions}
        gameStart={gameStart}
        setGameStart={setGameStart}
        visible={visible}
        setVisible={setVisible}
        playerStat={playerStat}
        setPlayerStat={setPlayerStat}
      />
      {playerStat.answered < Number(gameOptions.length) && gameStart ? (
        questions
          .filter((q) => q.index === randomQuestion)
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
                />
              </div>
            );
          })
      ) : gameStart ? (
        <QuizResults
          playerStat={playerStat}
          setPlayerStat={setPlayerStat}
          gameStart={gameStart}
          setGameStart={setGameStart}
        />
      ) : null}
    </div>
  );
}

export default QuizForm;
