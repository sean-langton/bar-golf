import React, { Component } from 'react'
//import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
import { fetchTournament, fetchHoles, addHole, deleteHole } from  '../components/actions/holeActions';
import HoleList from '../components/holes/HoleList'
import Tournament from '../components/holes/Tournament'
import HoleInput from '../components/holes/HoleInput'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HoleContainer extends Component {

  componentDidMount() {
    this.props.fetchTournament(this.props.tournament_id)
    this.props.fetchHoles(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Tournament tournament={this.props.holes.tournament} />
          </Row>
          <Row>
            <Col>
            <HoleInput addHole={this.props.addHole} tournament_id={this.props.tournament_id} />
            </Col>
            <Col>
            <HoleList holes={this.props.holes.holes} deleteHole={this.props.deleteHole}/>
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
    holes: state.holes
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchHoles: (payload) => { dispatch(fetchHoles(payload)) },
      fetchTournament: (payload) => {dispatch(fetchTournament(payload)) },
      addHole: (payload) => {dispatch(addHole(payload)) },
      deleteHole: (payload) => {dispatch(deleteHole(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoleContainer)
