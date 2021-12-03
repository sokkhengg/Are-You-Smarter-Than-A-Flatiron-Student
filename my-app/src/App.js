import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch("https://jservice.io/api/random?count=10")
    .then(r => r.json())
    .then(question => setQuestions({...questions, question}))
    .then(console.log(questions))}
  , [])
  
  
  
  return (
   <div>
     {(console.log(questions))}
   </div>
  );
}

export default App;
