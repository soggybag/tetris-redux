import React, { Component } from 'react'
import { connect } from 'react-redux'

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
          <div>shape: {this.props.nextBlock.shape}</div>
          <div>rotation: {this.props.nextBlock.rotation}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nextBlock: state.nextBlock
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard)
