import React, { Component } from 'react';
import Hole from './Hole'

export default class Scores extends Component {

  listOfHoles = () => {
    return this.props.holes.map((hole,index) => {
        return (
          <div key={index}>
            <Hole hole={hole} />
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
