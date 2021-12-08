import 'semantic-ui-css/semantic.min.css';
import { useEffect, useState } from 'react';
import {BrowserRouter} from "react-router-dom"; 



import Header from "./Header"
import Logo from './Logo';
import StartForm from './StartForm';
import QuestionContainer from './QuestionContainer';
import PlayerStats from "./PlayerStats"
import AddNewQuestionForm from './AddNewQuestionForm.js';
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

  const randomQuestion = Math.floor(Math.random() * (26708 - 26608) + 26608)
  return (
   <div>
    <Logo />
    <BrowserRouter>
    <Header />
    </BrowserRouter>
    <StartForm />

     {questions.filter(q => q.id === randomQuestion)
     .map((q) => {
       return (
         <div>
           <QuestionContainer question={[q]} allQuestions={questions} setQuestions={setQuestions} />
         </div>
       )
     })}

    
    <PlayerStats />
    <AddNewQuestionForm LOCAL_API={LOCAL_API} />
    <Footer />
   </div>
  );
}

export default App;


