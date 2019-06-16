import React, { Component } from 'react';
import Hole from './Hole'

export default class HoleList extends Component {

  handleDelete = (event) => {
    debugger;
    this.props.deleteHole({hole_id: event.target.name, tournament_id: event.target.value})
  }

  listOfHoles = () => {
    return this.props.holes.map((hole,index) => {
        return (
          <div key={index}>
            <Hole hole={hole} deleteHole={this.handleDelete}/>
          </div>
        )
      })
    }
  render() {
    return (
      <div>
        {this.listOfHoles()}
      </div>
    )
  }
}
