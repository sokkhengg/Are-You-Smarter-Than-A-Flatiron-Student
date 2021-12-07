import React,{useState} from 'react'

function StartForm() {
    
    const [starts, setStart] = useState(false)
    const [select, setSelect] = useState()
    
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
            <hr/>
            <div className="selectDifficulty">
                <i>Select Difficulty</i>
                <select value={select} onChange={e=> setSelect(e.target.value)}>
                    <option></option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            <hr className="startFormDivider"/>
               
            </div>
        </div>
        
    )
}

export default StartForm
