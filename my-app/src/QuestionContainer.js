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
              <h3>{playerStat.answered}/{gameOptions.length} - ${question[0].value}</h3>
              </Card.Meta>
              <br />
              <Card.Header textAlign="center"><h1>{question[0].question}</h1></Card.Header>
              <br />
              <AnswerContainer answer={question[0].answer} question={question[0].value} 
                allQuestions={allQuestions} setQuestions={setQuestions} 
                playerStat={playerStat} setPlayerStat={setPlayerStat} />
                
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
