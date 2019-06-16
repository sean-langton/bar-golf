import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class TournamentInput extends Component {

  state = {
    name: '',
    date: '',
    per_team: 0,
    entry_code: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addTournament(this.state)
    this.setState({
      name: '',
      date: '',
      per_team: 0,
      entry_code: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="formBasicTournament">
          <Form.Label>Tournament Name</Form.Label><br />
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter Tournament Name" /><br />
          <Form.Label>Date</Form.Label><br />
          <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleOnChange}/><br />
          <Form.Label>Per Team</Form.Label><br />
          <Form.Control type="number" name="per_team" value={this.state.per_team} onChange={this.handleOnChange} placeholder="1-4" /><br />
          <Form.Label>Entry Code (4 Characters)</Form.Label><br />
          <Form.Control type="text" name="entry_code" value={this.state.entry_code} onChange={this.handleOnChange} placeholder="ABCD" /><br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
