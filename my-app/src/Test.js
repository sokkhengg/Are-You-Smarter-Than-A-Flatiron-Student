import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleCard = ({ question }) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{question.question}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
      {question.answer}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleCard
