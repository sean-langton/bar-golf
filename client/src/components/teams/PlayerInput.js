import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class PlayerInput extends Component {

  state = {
    name: '',
    team_id: this.props.team_id,
    tournament_id: this.props.tournament_id
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state)
    this.setState({
      name: '',
      team_id: this.props.team_id,
      tournament_id: this.props.tournament_id
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="formBasicHole">
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Add Player" /><br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
