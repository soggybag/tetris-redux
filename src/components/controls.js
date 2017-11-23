import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moveLeft, moveRight, rotate, moveDown } from '../actions'

class Controls extends Component {

  render() {
    const { isRunning } = this.props
    const enabled = this.props.isRunning ? "" : "disabled"

    return (
      <div className={`controls ${enabled}`}>
        <button className="button"
          onMouseDown={(e) => {
            if (!isRunning) { return }
            this.props.moveDown()
          }}>Down</button>

        <button className="button"
          onMouseDown={(e) => {
            if (!isRunning) { return }
            this.props.rotate()
          }}>Rotate</button>

        <button className="button"
          onMouseDown={(e) => {
            if (!isRunning) { return }
            this.props.moveLeft()
          }}>Left</button>

        <button className="button"
          onMouseDown={(e) => {
            if (!isRunning) { return }
            this.props.moveRight()
          }}>Right</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.game.isRunning
  }
}

const mapDispatchToProps = () => {
  return {
    moveRight,
    moveLeft,
    moveDown,
    rotate
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Controls)
