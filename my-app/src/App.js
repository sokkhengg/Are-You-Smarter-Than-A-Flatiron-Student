import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[questions, setQuestions] = useState([]);
  const LOCAL_API = "http://localhost:3000/questions"

  // useEffect(() => {
  //   fetch("https://jservice.io/api/random?count=100")
  //   .then(r => r.json())
  //   .then(question => setQuestions({...questions, question}))
  // }
  // , [])

  useEffect(() => {
    fetch(LOCAL_API)
    .then(r => r.json())
    .then(question => setQuestions(question))
  }, []
  )
  
  return (
   <div>
     {(console.log(questions))}
   </div>
  );
}

export default App;
