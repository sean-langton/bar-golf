import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Tournament = props => {
  return (
    <div>
      <Jumbotron>
        <h1> {props.tournament.name} </h1>
        <p> Date: {props.tournament.date} </p>
        <p> Players per team: {props.tournament.per_team} </p>
        <p> Entry Code: {props.tournament.entry_code} </p>
      </Jumbotron>
    </div>
  )

}

export default Tournament
