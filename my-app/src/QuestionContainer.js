import React from "react";
import { Grid, Card } from "semantic-ui-react";
import AnswerContainer from "./AnswerContainer";

export default function QuestionContainer({question, allQuestions, setQuestions}) {
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
              <Card.Header textAlign="center">{question[0].question}</Card.Header>
              <br />
              <AnswerContainer answer={question[0].answer} allQuestions={allQuestions} setQuestions={setQuestions} />
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
  );
}
