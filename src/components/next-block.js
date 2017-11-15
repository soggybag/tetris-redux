import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shapes, getShape } from '../utils/shapes'
import { getColor } from '../utils/colors'

import GridSquare from './grid-square'

class NextBlock extends Component {

  makeGrid() {
    const { shape, rotation } = this.props.nextBlock
    const block = getShape(shape)[rotation]
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        const blockColor = block[row][col] === 0 ? 0 : shape
        return <GridSquare key={col} color={blockColor} />
      })})
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
