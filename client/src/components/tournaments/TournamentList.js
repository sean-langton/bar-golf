import React from 'react'
import Button from 'react-bootstrap/Button'

const TournamentList = props => {
  function listOfTournaments(){
    return props.tournaments.tournaments.map((tournament,index) => {
        return (
          <div key={index}>
          <h3> {tournament.name} </h3>
          <Button href={"tournament/"+tournament.id+"/holes"}> Manage Holes </Button>
          <Button href={"tournament/"+tournament.id+"/teams"}> Manage Teams </Button>
          <Button href={"tournament/"+tournament.id+"/scores"}> Manage Scores </Button>
          </div>
        )
      })
    }

  return (
    <div>
      {listOfTournaments()}
    </div>
  )

}

export default TournamentList
