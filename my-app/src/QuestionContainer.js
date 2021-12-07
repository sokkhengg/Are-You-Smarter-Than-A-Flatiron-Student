import React from "react";
import { Card, Grid } from "semantic-ui-react";
import AnswerContainer from "./AnswerContainer";

function QuestionContainer() {

  return (
    <Grid columns="equal">
      <Grid.Column></Grid.Column>

      <Grid.Column>
        <Card fluid>
          <Card.Content>
            <Card.Meta textAlign="center">
              <span>$500</span>
            </Card.Meta>
            <br />
            <Card.Header textAlign="center">What is your name?</Card.Header>
            <br />
            <AnswerContainer answer={"Bob"}/>
          </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column></Grid.Column>
    </Grid>
  );
}

export default QuestionContainer;
