import React,{useState} from 'react'
import { Dropdown, Button, GridColumn,  Grid } from 'semantic-ui-react'

function StartForm() {
    
    const [starts, setStart] = useState(false)
    const [select, setSelect] = useState()
    
    function handleStartForm({start}){
        console.log(setStart, "start")
    }

    const options = [
        { key: 1, text: 'Easy', value: 1 },
        { key: 2, text: 'Medium', value: 2 },
        { key: 3, text: 'Hard', value: 3 },
      ]

    return (
        <div>
            <Grid columns="equal">
                <GridColumn></GridColumn>
                <GridColumn textAlign="center">
                    <Dropdown options={options} selection />&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button primary>Start the Quiz</Button></GridColumn>
                <GridColumn></GridColumn>
            </Grid>




             
        </div>       
    )
}

export default StartForm








 {/* <div className="startForm">
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
               
            </div>*/}