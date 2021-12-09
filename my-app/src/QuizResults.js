import React from 'react'
import { Button, Grid, Card } from 'semantic-ui-react'

export default function QuizResults({ playerStat, gameStart, setGameStart }) {
  
  function handleClick() {
    setGameStart(false)
  }
  
  return (
        
        <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
            <div>
            <h1>Here are your results!</h1>
            <ul>
                <li>Money: ${playerStat.money}</li>
                <li>Correct Answers: {playerStat.correct}</li>
                <li>Wrong/Skipped: {playerStat.wrong}</li>
            </ul>
            <Button onClick={handleClick}>Play again</Button>
        </div>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
        
        
        
    )
}
