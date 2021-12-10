import React, { useEffect, useState } from "react";
import { Grid, List } from "semantic-ui-react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/leaderboard")
      .then((r) => r.json())
      .then((entries) => setLeaders(entries));
  }, []);

  return (
    <Grid columns="equal" textAlign="left">
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <List divided verticalAlign="middle" size="huge" celled fluid>
          {leaders
            .sort(function (a, b) {
              return b.money - a.money;
            })
            .map((leader) => {
              return (
                <List.Item>
                  <List.Content floated="right">
                    Correct: {leader.correct} / ${leader.money}
                  </List.Content>
                  <List.Content floated="left">
                    <List.Content floated="left" textAlign="left">
                      <strong>{leader.name}</strong>
                    </List.Content>
                    <br />
                    <List.Description>
                      <span>{leader.message}</span>
                    </List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
        </List>
      </Grid.Column>

      <Grid.Column></Grid.Column>
    </Grid>
  );
}

export default Leaderboard;
