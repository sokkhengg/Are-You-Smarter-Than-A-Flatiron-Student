import './App.css';
import { useEffect, useState } from 'react';
const LOCAL_API = "http://localhost:3000/questions"

function App() {
  const[questions, setQuestions] = useState([]);

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
