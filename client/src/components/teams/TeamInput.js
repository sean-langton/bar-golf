import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class TeamInput extends Component {

  state = {
    name: '',
    tournament_id: this.props.tournament_id
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addTeam(this.state)
    this.setState({
      name: '',
      tournament_id: this.props.tournament_id
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="formBasicHole">
          <Form.Label>Team Name</Form.Label><br />
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter Team Name" /><br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
