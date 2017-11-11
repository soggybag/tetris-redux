import React, { Component } from 'react'
import { connect } from 'react-redux'

import GridSquare from './grid-square'

class GridBoard extends Component {

  makeGrid() {
    return this.props.grid.map((rowArray, row) => {
      return (<div key={row} className="grid-row">{rowArray.map((square, col) => {
        return <GridSquare key={col} square={square} />
      })}</div>)
    })
  }

  render () {
    return (
      <div className="grid-board">
        {this.makeGrid()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    grid: state.grid
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)
