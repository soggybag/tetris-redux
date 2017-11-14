import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moveLeft, moveRight, rotate, moveDown } from '../actions'

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <button className="button"
          onMouseDown={(e) => {
            this.props.moveDown()
          }}>Down</button>

        <button className="button"
          onMouseDown={(e) => {
            this.props.rotate()
          }}>Rotate</button>

        <button className="button"
          onMouseDown={(e) => {
            this.props.moveLeft()
          }}>Left</button>

        <button className="button"
          onMouseDown={(e) => {
            this.props.moveRight()
          }}>Right</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

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
