import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getShape } from '../utils/shapes'
import { getColor } from '../utils/colors'

import GridSquare from './grid-square'

class GridBoard extends Component {

  makeGrid() {
    const { grid, shape, rotation, x, y } = this.props
    const block = getShape(shape)[rotation]
    const blockColor = shape

    return grid.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        const blockX = col - x
        const blockY = row - y
        let color = 0

        if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
          color = block[blockY][blockX] === 0 ? 0 : blockColor
        }

        const k = row * grid[0].length + col;
        return <GridSquare key={k} square={square} color={color}>{square}</GridSquare>
      })
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
    grid: state.grid.grid,
    shape: state.grid.shape,
    rotation: state.grid.rotation,
    x: state.grid.x,
    y: state.grid.y
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)
