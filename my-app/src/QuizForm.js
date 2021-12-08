import React, { useEffect, useState } from 'react'
import QuestionContainer from './QuestionContainer';
import PlayerStats from "./PlayerStats"
import AddNewQuestionForm from './AddNewQuestionForm.js';
import StartForm from './StartForm';

function QuizForm() {

    const randomQuestion = Math.floor(Math.random() * (26708 - 26608) + 26608)
    const[questions, setQuestions] = useState([]);
    const [playerStat, setPlayerStat] = useState({
      money:0,
      correct:0,
      wrong:0,
    })

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
            {questions.filter(q => q.id === randomQuestion)
        .map((q) => {
       return (
         <div>
           <QuestionContainer question={[q]} allQuestions={questions} 
                setQuestions={setQuestions}
                playerStat={playerStat} setPlayerStat={setPlayerStat}
            />
         </div>)
        }
        )
      }
    
    <PlayerStats playerStat={playerStat}/>
    <AddNewQuestionForm LOCAL_API={LOCAL_API} />
            
        </div>
    )
}

export default QuizForm
