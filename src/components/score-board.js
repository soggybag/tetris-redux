import React, { Component } from 'react'
import { connect } from 'react-redux'

import { } from '../actions'

class ScoreBoard extends Component {

  render() {
    return (
      <div className="score-board">
        <div>Title</div>
        <div>Score: 000</div>
        <div>Level: 000</div>
        <button>Pause</button>
        <button>Start</button>
        <div>
          <div>Next block</div>
          <div>shape: {this.props.shape}</div>
          <div>rotation: {this.props.rotation}</div>
          <div>- Block -</div>
          <div>x: {this.props.x} y: {this.props.y}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nextBlock: state.nextBlock,
    shape: state.grid.shape,
    rotation: state.grid.rotation,
    x: state.grid.x,
    y: state.grid.y
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard)
