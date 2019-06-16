import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import PlayerInput from './PlayerInput'

const Team = props => {
  return (
      <Card>
        <Card.Body>
          <Card.Title> {props.team.name}</Card.Title>
            <ListGroup varient="flush">
            {props.team.players.map((player) => <ListGroup.Item key={player.id}> {player.name} </ListGroup.Item>)}
            </ListGroup>
            <br />
            <Button onClick={props.deleteTeam} name={props.team.id} value={props.team.tournament.id}> Delete </Button>
            <PlayerInput team_id={props.team.id} addPlayer={props.addPlayer} tournament_id={props.team.tournament.id}/>
        </Card.Body>
      </Card>
  )
}

export default Team
