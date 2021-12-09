import React from "react";
import { Button, Grid } from "semantic-ui-react";

export default function AnswerContainer({
  answer,
  allQuestions,
  setQuestions,
  playerStat,
  setPlayerStat,
  question,
}) {
  const randomAnswer1 = Math.floor(Math.random() * 4);
  const rightOrWrong = Math.floor(Math.random() * 2);

  function handleButtonClick(e) {
    if (e.target.innerText === answer) {
      setPlayerStat({
        ...playerStat,
        money: playerStat.money + question,
        correct: playerStat.correct + 1,
        answered: playerStat.answered + 1,
      });
      //setTimeout(() => setQuestions([...allQuestions]) , 2000)
    } else {
      setPlayerStat({
        ...playerStat,
        wrong: playerStat.wrong + 1,
        money: playerStat.money - question,
        answered: playerStat.answered + 1,
      });
    }
  }

  const myAnswer =
    rightOrWrong === 1 ? (
      <Grid columns="equal" fluid padded>
        <Grid.Row>
          <Button
            basic
            color="blue"
            size="huge"
            fluid
            key={{ answer }}
            onClick={(e) => handleButtonClick(e)}
          >
            {answer}
          </Button>
        </Grid.Row>

        <Grid.Row>
          <Button
            basic
            color="blue"
            size="huge"
            fluid
            key={allQuestions[randomAnswer1].answer}
            onClick={(e) => handleButtonClick(e)}
          >
            {allQuestions[randomAnswer1].answer}
          </Button>
        </Grid.Row>
      </Grid>
    ) : (
      <Grid columns="equal" fluid padded>
        <Grid.Row>
          <Button
            basic
            color="blue"
            size="huge"
            fluid
            onClick={(e) => handleButtonClick(e)}
          >
            {allQuestions[randomAnswer1].answer}
          </Button>
        </Grid.Row>

        <Grid.Row>
          <Button
            basic
            color="blue"
            size="huge"
            fluid
            onClick={(e) => handleButtonClick(e)}
          >
            {answer}
          </Button>
        </Grid.Row>
      </Grid>
    );

  return (
    <>
      {myAnswer}

      <Grid columns="3">
        <Grid.Column></Grid.Column>
        <Grid.Column textAlign="center">
          <Button negative onClick={(e) => handleButtonClick(e)}>
            Skip
          </Button>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </>
  );
}
