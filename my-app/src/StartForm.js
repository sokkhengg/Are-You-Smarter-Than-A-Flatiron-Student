import { Dropdown, GridColumn,  Grid, Button } from 'semantic-ui-react'

function StartForm({ gameOptions, setGameOptions, gameStart, setGameStart }) {

  const categoryOptions = [
    { key: 4, text: "WorldHistory", value: "WorldHistory" },
    { key: 5, text: "Music", value: "Music" },
    { key: 6, text: "TVFilm", value: "TVFilm" },
  ];

  const quizLengthOptions = [
    { key: 7, text: "5", value: "5" },
    { key: 8, text: "10", value: "10" },
    { key: 9, text: "15", value: "15" },
  ];

  function handleGameOptions(e, name) {
    let value = e.target.innerText
    setGameOptions({ ...gameOptions, [name]: value });
}

function handleStartClick(){
    if (gameOptions.category === "" || gameOptions.length === "") {
    return
    }
    setGameStart(true)
  }

  return (
    <div>
      
      {gameStart ? null :
      <Grid columns="equal">
        <GridColumn></GridColumn>
        <GridColumn textAlign="center">

         
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

          <Button primary
          onClick={handleStartClick}
          >Start the Quiz</Button>
        </GridColumn>
        <GridColumn></GridColumn>
      </Grid>
      }
    </div>
  );
}

export default StartForm;

