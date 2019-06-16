import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class HoleInput extends Component {

  state = {
    name: '',
    start_time: '',
    duration: 30,
    par: '',
    birdie: '',
    eagle: '',
    tournament_id: this.props.tournament_id
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addHole(this.state)
    this.setState({
      name: '',
      time: '',
      duration: 0,
      par: '',
      birdie: '',
      eagle: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="formBasicHole">
          <Form.Label>Hole Name</Form.Label><br />
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter Hole Name" /><br />
          <Form.Label>Time</Form.Label><br />
          <Form.Control type="time" name="start_time" value={this.state.start_time} onChange={this.handleOnChange}/><br />
          <Form.Label>Duration</Form.Label><br />
          <Form.Control type="number" name="duration" value={this.state.duration} onChange={this.handleOnChange} placeholder='30' /><br />
          <Form.Label>Par</Form.Label><br />
          <Form.Control type="text" name="par" value={this.state.par} onChange={this.handleOnChange} placeholder="Bud Light" /><br />
          <Form.Label>Birdie</Form.Label><br />
          <Form.Control type="text" name="birdie" value={this.state.birdie} onChange={this.handleOnChange} placeholder="Cocktail" /><br />
          <Form.Label>Eagle</Form.Label><br />
          <Form.Control type="text" name="eagle" value={this.state.eagle} onChange={this.handleOnChange} placeholder="Game of Luck/Skill" /><br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
