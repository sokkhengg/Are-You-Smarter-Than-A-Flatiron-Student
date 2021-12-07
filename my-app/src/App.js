import './App.css';
import { useEffect, useState } from 'react';
import Test from "./Test.js";
import 'semantic-ui-css/semantic.min.css'

import Footer from './Footer';

import Header from "./Header"
<<<<<<< HEAD
=======
import StartForm from './StartForm';
import Logo from './Logo';
>>>>>>> 501bd26326c15a445dd3c32d7534cb07f9c103fe

console.log('add new branch to git')
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
<<<<<<< HEAD
     <Header {...questions}/>
=======
    <StartForm />
    <Logo />
    <Header {...questions}/>
>>>>>>> 501bd26326c15a445dd3c32d7534cb07f9c103fe
     {questions.map(q => {
       return (
         <div>
           <p>HELLLLLO</p>
           <Test question={q} />
         </div>
       )
     })}
     <Footer />
   </div>
  );
}

export default App;


