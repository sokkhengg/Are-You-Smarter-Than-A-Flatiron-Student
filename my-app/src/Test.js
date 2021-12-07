import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({ question }) => (
  <Card>
    <Card.Content>
      <Card.Header>{question.question}</Card.Header>
      <Card.Description>
      {question.answer}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleCard
