import React from "react";
import { Button, Grid, Card, Form, Statistic, Icon } from "semantic-ui-react";

export default function QuizResults({ playerStat, setPlayerStat, setGameStart }) {
  
  function handleClick() {
    setGameStart(false);
    setPlayerStat({
      money: 0,
      correct: 0,
      wrong: 0,
      answered: 0,
    });
  }

  function handleAddToLeaderBoard(e) {
    if (e.target.parentNode[0].value === "") {
      alert("You must provide a name");
      return;
    }

    const newLeaderBoardEntry = {
      name: e.target.parentNode[0].value,
      message: e.target.parentNode[1].value,
      money: playerStat.money,
      correct: playerStat.correct,
    };

    fetch("http://localhost:3000/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLeaderBoardEntry),
    }).then((r) => r.json());
  }

  return (
    <Grid columns="equal">
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <Card fluid>
          <Card.Content textAlign="center">
            <h1>Here are your results!</h1>
            <br />
            <Statistic.Group widths="three" size="tiny">
              <Statistic>
                <Statistic.Value>
                  <Icon name="money" />
                  &nbsp;&nbsp;${playerStat.money}
                </Statistic.Value>
                <Statistic.Label>Money Earned</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Icon name="checkmark" />
                  &nbsp;&nbsp;{playerStat.correct}
                </Statistic.Value>
                <Statistic.Label>Correct Answers</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Icon name="x" />
                  &nbsp;&nbsp;{playerStat.wrong}
                </Statistic.Value>
                <Statistic.Label>Wrong/Skipped</Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <br />
            <br />
            <Button color="green" onClick={handleClick}>
              Play again
            </Button>
            <br />
            <br />

            <Grid columns="equal">
              <Grid.Column></Grid.Column>
              <Grid.Column width="10">
                <Form>
                  <Form.Field>
                    <input placeholder="First Name" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Message" />
                  </Form.Field>
                  <Button
                    type="submit"
                    onClick={handleAddToLeaderBoard}
                    color="teal"
                  >
                    Add to Leaderboard
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column></Grid.Column>
    </Grid>
  );
}
