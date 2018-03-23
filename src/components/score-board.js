import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pause, resume, restart } from '../actions'

// Draws the score, stats, and pause/resume button
// TODO: Implement levels
// TODO: Style the score board...
// TODO: Remove block position

class ScoreBoard extends Component {

  render() {
    return (
      <div className="score-board">
        <div>Title</div>
        <div>Score:{ this.props.score }</div>
        <div>Level: 000</div>

        <button onClick={(e) => {
          if (this.props.gameOver) { return }
          this.props.isRunning ? this.props.pause() : this.props.resume()
        }}>{this.props.isRunning ? "Pause" : "Resume"}</button>

        <button onClick={(e) => {
          this.props.restart()
        }}>Restart</button>

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

// Set up Redux

const mapStateToProps = (state) => {
  return {
    shape: state.game.shape,
    rotation: state.game.rotation,
    x: state.game.x,
    y: state.game.y,
    score: state.game.score,
    isRunning: state.game.isRunning,
    gameOver: state.gameOver
  }
}

const mapDispatchToProps = () => {
  return {
    pause,
    resume,
    restart
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard)
