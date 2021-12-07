import React,{useState} from 'react'

function StartForm() {

    const [starts, setStart] = useState(false)

    function handleStartForm({start}){
        console.log(setStart, "start")
    }
    return (
        <div>
            <div className="startForm">
                <button key={starts} starts={starts} onClick={handleStartForm}>
                    StartForm
                </button>
            </div>
            <div className="selectDifficulty">
                <button key={null} onClick={null}>
                    Select Difficulty
                </button>
                <button>Easy</button>
                <button>Medium</button>
                <button>Hard</button>
            </div>
        </div>
        
    )
}

export default StartForm
