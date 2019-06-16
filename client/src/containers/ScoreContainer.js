import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchHoles, fetchPlayers, fetchScores, addScore } from  '../components/actions/scoreActions';
import ScoreInput from '../components/scores/ScoreInput'
import Scores from '../components/scores/Scores'
class ScoreContainer extends Component {

  componentDidMount() {
    this.props.fetchHoles(this.props.tournament_id)
    this.props.fetchPlayers(this.props.tournament_id)
    this.props.fetchScores(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
          <Col>
           <ScoreInput players={this.props.scores.players} holes={this.props.scores.holes} addScore={this.props.addScore} tournament_id={this.props.tournament_id} fetchScores={this.props.fetchScores}/>
          </Col>
          <Col>
            <Scores players={this.props.scores.players} holes={this.props.scores.holes} scores={this.props.scores.scores}/>
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
    scores: state.scores
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchHoles: (payload) => {dispatch(fetchHoles(payload)) },
      fetchPlayers: (payload) => {dispatch(fetchPlayers(payload)) },
      fetchScores: (payload) => {dispatch(fetchScores(payload)) },
      addScore: (payload) => {dispatch(addScore(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer)
