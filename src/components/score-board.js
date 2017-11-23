import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pause, resume } from '../actions'

class ScoreBoard extends Component {

  render() {
    return (
      <div className="score-board">
        <div>Title</div>
        <div>Score:{ this.props.score }</div>
        <div>Level: 000</div>

        <button onClick={(e) => {
          this.props.isRunning ? this.props.pause() : this.props.resume()
        }}>{this.props.isRunning ? "Pause" : "Resume"}</button>

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
    shape: state.game.shape,
    rotation: state.game.rotation,
    x: state.game.x,
    y: state.game.y,
    score: state.game.score,
    isRunning: state.game.isRunning
  }
}

const mapDispatchToProps = () => {
  return {
    pause,
    resume
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard)
