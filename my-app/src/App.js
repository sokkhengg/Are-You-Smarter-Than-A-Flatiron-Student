import 'semantic-ui-css/semantic.min.css';
import { useEffect, useState } from 'react';
import {BrowserRouter} from "react-router-dom"; 



import Header from "./Header"
import Logo from './Logo';
import StartForm from './StartForm';
import Test from "./Test.js";
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

  return (
   <div>
    <Logo />
    <BrowserRouter>
    <Header />
    </BrowserRouter>
    <StartForm />

     {/* {questions.map(q => {
       return (
         <div>
           <Test question={q} />
         </div>
       )
     })} */}
    <PlayerStats />
    <AddNewQuestionForm LOCAL_API={LOCAL_API} />
    <Footer />
   </div>
  );
}

export default App;


