import React, { useEffect, useState } from "react";
import { Grid, Card } from "semantic-ui-react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/leaderboard")
      .then((r) => r.json())
      .then((entries) => setLeaders(entries));
  }, []);

  return (
    <Grid columns="equal">
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <Card fluid>
          <Card.Content>
            {leaders
              .sort(function (a, b) {
                return b.money - a.money;
              })
              .map((leader) => {
                return (
                  <p>
                    {leader.name} - ${leader.money}
                  </p>
                );
              })}
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column></Grid.Column>
    </Grid>
  );
}

export default Leaderboard;
