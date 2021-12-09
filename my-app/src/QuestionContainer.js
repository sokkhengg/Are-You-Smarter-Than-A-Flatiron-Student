import React from "react";
import { Grid, Card, Button } from "semantic-ui-react";
import AnswerContainer from "./AnswerContainer";


export default function QuestionContainer({question,
   allQuestions, setQuestions, playerStat, setPlayerStat, gameOptions, visible, setVisible }) {

  return (
      <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Meta textAlign="center">
              {playerStat.answered}/{gameOptions.length} - <span>${question[0].value}</span>
              </Card.Meta>
              <br />
              <Card.Header textAlign="center">{question[0].question}</Card.Header>
              <br />
              <AnswerContainer answer={question[0].answer} question={question[0].value} allQuestions={allQuestions} setQuestions={setQuestions} playerStat={playerStat} setPlayerStat={setPlayerStat} />
                
                <Grid columns="equal">
                <Grid.Column></Grid.Column>
                  <Grid.Column>
              <Button checked={visible} onClick={(e, data) => setVisible(!visible)} color="yellow">
                  Show performance</Button>
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
