import React, { Component } from 'react'
import { connect } from 'react-redux'

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <button className="button">Down</button>
        <button className="button">Rotate</button>
        <button className="button">Left</button>
        <button className="button">Right</button>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Controls)
