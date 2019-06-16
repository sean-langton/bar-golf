import React, { Component } from 'react'
//import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
import { fetchTournament, fetchTeams, addTeam, deleteTeam, addPlayer } from  '../components/actions/teamActions';
import TeamList from '../components/teams/TeamList'
import Tournament from '../components/teams/Tournament'
import TeamInput from '../components/teams/TeamInput'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TeamContainer extends Component {

  componentDidMount() {
    this.props.fetchTournament(this.props.tournament_id)
    this.props.fetchTeams(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
           <Tournament tournament={this.props.teams.tournament} />
          </Row>
          <Row>
            <Col>
            <TeamInput addTeam={this.props.addTeam} tournament_id={this.props.tournament_id} numOfPlayers={this.props.numOfPlayers}/>
            </Col>
            <Col>
            <TeamList teams={this.props.teams.teams} deleteTeam={this.props.deleteTeam} addPlayer={this.props.addPlayer}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tournament_id: ownProps.match.params.tournament_id,
    teams: state.teams,
    numOfPlayers: state.teams.tournament.per_team
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchTeams: (payload) => { dispatch(fetchTeams(payload)) },
      fetchTournament: (payload) => {dispatch(fetchTournament(payload)) },
      addTeam: (payload) => {dispatch(addTeam(payload)) },
      deleteTeam: (payload) => {dispatch(deleteTeam(payload)) },
      addPlayer: (payload) => {dispatch(addPlayer(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)
