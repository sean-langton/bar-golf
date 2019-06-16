import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Hole = props => {
  return (
      <Card>
        <Card.Body>
          <Card.Title> {props.hole.name}</Card.Title>
          <Card.Text>
          <ListGroup varient="flush">
            {props.hole.scores.map((score) => <ListGroup.Item key={score.id}> {score.player.name} : {score.score} </ListGroup.Item>)}
          </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Hole
