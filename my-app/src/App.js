
import 'semantic-ui-css/semantic.min.css';
import Header from "./Header"
import Logo from './Logo';
import Footer from './Footer';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import QuizForm from './QuizForm';

import { useEffect, useState } from 'react';
// import {BrowserRouter} from "react-router-dom"; 

import Header from "./Header";
import Logo from "./Logo";
import StartForm from "./StartForm";
import QuestionContainer from "./QuestionContainer";
import QuizResults from "./QuizResults";
import PlayerStats from "./PlayerStats";
import AddNewQuestionForm from "./AddNewQuestionForm.js";
import Footer from "./Footer";

function App() {

  return (
   <div>
    <Logo />
    <Header />
    <NavBar />

    <Switch>

        <Route path="/app">
          <App />
        </Route>

        <Route path="/quizform">
          <QuizForm />
        </Route>

      </Switch>
      
    <Footer />
      
   </div>
  const [questions, setQuestions] = useState([]);
  const [playerStat, setPlayerStat] = useState({
    money: 0,
    correct: 0,
    wrong: 0,
  });
  const [gameOptions, setGameOptions] = useState({
    difficulty: "",
    category: "",
    length: "",
  });


  const LOCAL_API = `http://localhost:3000/${gameOptions.category}`;
  useEffect(() => {
    fetch(LOCAL_API)
      .then((r) => r.json())
      .then((question) => setQuestions(question));
  }, [LOCAL_API]);

  const randomQuestion = Math.floor(Math.random() * (4 - 1) + 1);
  return (

    <div>
      <Logo />
      <Header />
      <StartForm gameOptions={gameOptions} setGameOptions={setGameOptions} />
      {playerStat.correct < Number(gameOptions.length) ? (
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
                />
              </div>
            );
          })
      ) : (
        <QuizResults playerStat={playerStat}/>
      )}

      <PlayerStats playerStat={playerStat} />
      <AddNewQuestionForm LOCAL_API={LOCAL_API} />
      <Footer />
    </div>

  );
}

export default App;
