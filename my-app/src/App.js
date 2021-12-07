import './App.css';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Header from "./Header";
import StartForm from './StartForm';
import QuestionContainer from './QuestionContainer.js';
import AddNewQuestionForm from './AddNewQuestionForm';
import PlayerStats from './PlayerStats';
import Footer from './Footer';

function App() {
  const[questions, setQuestions] = useState([]);
  const LOCAL_API = "http://localhost:3000/questions"

  useEffect(() => {
    fetch(LOCAL_API)
    .then(r => r.json())
    .then(question => setQuestions(question))
  }, []
  )
  
  return (
   <div>
    <StartForm />
    <Header {...questions}/>
    <QuestionContainer />
    <PlayerStats />
    <AddNewQuestionForm />
    <Footer />
   </div>
  );
}

export default App;


