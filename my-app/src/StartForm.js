import { Dropdown, GridColumn,  Grid } from 'semantic-ui-react'

function StartForm() {
    
    const options = [
        { key: 1, text: 'Easy', value: 1 },
        { key: 2, text: 'Medium', value: 2 },
        { key: 3, text: 'Hard', value: 3 },
      ]

    return (
        <div>
            <Grid columns="equal">
                <GridColumn></GridColumn>
                    <GridColumn></GridColumn>
                    <GridColumn textAlign="center">
                        <Dropdown options={options} selection />&nbsp;&nbsp;&nbsp;&nbsp;
                </GridColumn>
            </Grid>
             
        </div>       
    )
}

import { Dropdown, Button, GridColumn, Grid } from "semantic-ui-react";

function StartForm({ gameOptions, setGameOptions }) {
  const options = [
    { key: 1, text: "Easy", value: "Easy" },
    { key: 2, text: "Medium", value: "Medium" },
    { key: 3, text: "Hard", value: "Hard" },
  ];

  const categoryOptions = [
    { key: 4, text: "WorldHistory", value: "WorldHistory" },
    { key: 5, text: "Music", value: "Music" },
    { key: 6, text: "TVFilm", value: "TVFilm" },
  ];

  const quizLengthOptions = [
    { key: 7, text: "5", value: 5 },
    { key: 8, text: "10", value: 10 },
    { key: 9, text: "15", value: 15 },
  ];

  function handleGameOptions(e, name) {
    let value = e.target.innerText
    if (e.target.innerText === "Easy") {
        value = 100
    } else if (e.target.innerText === "Medium") {
        value = 500
    } else if (e.target.innerText === "Hard") {
        value = 1500
    }
    setGameOptions({ ...gameOptions, [name]: value });
  }

  return (
    <div>
      <Grid columns="equal">
        <GridColumn></GridColumn>
        <GridColumn textAlign="center">
          <Dropdown
            options={options}
            placeholder="Difficulty"
            name="dificulty"
            value={gameOptions.difficulty}
            fluid
            selection
            onChange={(e) => handleGameOptions(e, "difficulty")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Dropdown
            options={categoryOptions}
            placeholder="Category"
            name="category"
            value={gameOptions.category}
            fluid
            selection
            onChange={(e) => handleGameOptions(e, "category")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Dropdown
            options={quizLengthOptions}
            placeholder="No. Questions"
            name="length"
            value={gameOptions.length}
            fluid
            selection
            onChange={(e) => handleGameOptions(e, "length")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <Button primary>Start the Quiz</Button>
        </GridColumn>
        <GridColumn></GridColumn>
      </Grid>
    </div>
  );
}

export default StartForm;

