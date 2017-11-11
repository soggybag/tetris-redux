import React, { Component } from 'react'
import { connect } from 'react-redux'

class ScoreBoard extends Component {

  render() {
    return (
      <div className="score-board">
        <div>Title</div>
        <div>Score: 000</div>
        <div>Level: 000</div>
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

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard)
