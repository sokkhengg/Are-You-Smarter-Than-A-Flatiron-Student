import React from "react";
import { Button, Grid } from "semantic-ui-react";

export default function AnswerContainer({ answer }) {
  return (
    <Grid columns="equal" fluid padded>
      <Grid.Row >
        <Button basic color="blue" size="huge" fluid >
          {answer}
        </Button>
      </Grid.Row>

      <Grid.Row>
        <Button basic color="blue" size="huge" fluid>
          Wrong1
        </Button>
      </Grid.Row>

      <Grid.Row>
        <Button basic color="blue" size="huge" fluid>
          Wrong2
        </Button>
      </Grid.Row>

      <Grid.Row>
        <Button basic color="blue" size="huge" fluid>
          Wrong3
        </Button>
      </Grid.Row>

      <Grid.Row>
        <Grid columns="3">
          <Grid.Column></Grid.Column>
          <Grid.Column textAlign="center">
            <Button negative>Skip</Button>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
  );
}
