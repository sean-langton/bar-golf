import React, { Component } from 'react';
import Team from './Team'

export default class TeamList extends Component {

  handleDelete = (event) => {
    this.props.deleteTeam({team_id: event.target.name, tournament_id: event.target.value})
  }

  addPlayer = (event) => {
    debugger;
    this.props.addPlayer({name: event.name, team_id: event.team_id, tournament_id: event.tournament_id})
  }

  listOfTeams = () => {
    return this.props.teams.map((team,index) => {
        return (
          <div key={index}>
            <Team team={team} deleteTeam={this.handleDelete} addPlayer={this.addPlayer} />
          </div>
        )
      })
    }
  render() {
    return (
      <div>
        {this.listOfTeams()}
      </div>
    )
  }
}
