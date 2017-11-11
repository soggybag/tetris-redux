import React, { Component } from 'react'
import { connect } from 'react-redux'

import GridSquare from './grid-square'

class NextBlock extends Component {

  makeGrid() {
    return this.props.nextBlock.map((rowArray, row) => {
      return <div key={row} className="grid-row">{rowArray.map((square, col) => {
        return <GridSquare key={col} />
      })}</div>
    })
  }

  render () {
    return (
      <div className="next-block">
        {this.makeGrid()}
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

export default connect(mapStateToProps, mapDispatchToProps())(NextBlock)
