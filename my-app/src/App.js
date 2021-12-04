import './App.css';
import { useEffect, useState } from 'react';
import Test from "./Test.js";
import 'semantic-ui-css/semantic.min.css'

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
  
  console.log("hi")
  console.log("Hello from Sean")
  console.log("hi2")
  console.log("Hello from sok")
  console.log("Hello from sok")
  console.log("Hello from sok")
  console.log("Hello from sok")
  


  return (
   <div>
     
     {questions.map(q => {
       return (
         <div>
           <p>HELLLLLO</p>
           <Test question={q} />
         </div>
       )
     })}
   </div>
  );
}

export default App;


