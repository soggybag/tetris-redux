import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shapes, getShape } from '../utils/shapes'
import { getColor } from '../utils/colors'

import GridSquare from './grid-square'

class NextBlock extends Component {

  makeGrid() {
    const { shape } = this.props
    const block = getShape(shape)[0]
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
    shape: state.game.nextShape
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(NextBlock)
