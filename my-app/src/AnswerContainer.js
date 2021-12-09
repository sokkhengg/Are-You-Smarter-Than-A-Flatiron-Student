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
        <Grid.Column></Grid.Column>
          <Button
            basic
            width="5"
            color="blue"
            size="medium"
            key={{ answer }}
            onClick={(e) => handleButtonClick(e)}
          >
            {answer}
          </Button>
        <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column></Grid.Column>

          <Button
            basic
            width="5"
            color="blue"
            size="medium"
            
            key={allQuestions[randomAnswer1].answer}
            onClick={(e) => handleButtonClick(e)}
          >
            {allQuestions[randomAnswer1].answer}
          </Button>
        <Grid.Column></Grid.Column>

        </Grid.Row>
      </Grid>
    ) : (
      <Grid columns="equal" fluid padded>
        <Grid.Row>
        <Grid.Column></Grid.Column>

          <Button
            basic
            width="5"
            color="blue"
            size="medium"
            onClick={(e) => handleButtonClick(e)}
          >
            {allQuestions[randomAnswer1].answer}
          </Button>
        <Grid.Column></Grid.Column>

        </Grid.Row>

        <Grid.Row>
        <Grid.Column></Grid.Column>

          <Button
            basic
            width="5"
            color="blue"
            size="medium"
            onClick={(e) => handleButtonClick(e)}
          >
            {answer}
          </Button>
        <Grid.Column></Grid.Column>

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
