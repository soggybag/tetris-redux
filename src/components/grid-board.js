import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getShape } from '../utils/shapes'
import { getColor } from '../utils/colors'
import { moveDown } from '../actions/'

import GridSquare from './grid-square'

// Display the main game board
// Also handles game updates

class GridBoard extends Component {
  constructor(props) {
    super(props)

    this.lastUpdateTime = 0
    this.progressTime = 0
  }

  componentDidMount() {
    window.requestAnimationFrame(this.update.bind(this))
  }

  componentWillUnmount() {
    //
  }

  // Handle game updates
  update(time) {
    window.requestAnimationFrame(this.update.bind(this))
    if (!this.props.isRunning) {

      return
    }

    if (!this.lastUpdateTime) {
      this.lastUpdateTime = time
    }

    const deltaTime = time - this.lastUpdateTime
    this.progressTime += deltaTime
    if (this.progressTime > this.props.speed) {
      this.props.moveDown()
      this.progressTime = 0
    }

    this.lastUpdateTime = time
  }

  makeGrid() {
    const { grid, shape, rotation, x, y } = this.props
    const block = getShape(shape)[rotation]
    const blockColor = shape

    return grid.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        const blockX = col - x
        const blockY = row - y
        let color = square

        // Map current falling block to grid
        if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
          color = block[blockY][blockX] === 0 ? color : blockColor
        }
        // Generate a unique key for every block
        const k = row * grid[0].length + col;
        // Generate a grid square
        return <GridSquare
                key={k}
                square={square}
                color={color}>{square}</GridSquare>
      })
    })
  }

  render () {
    const { isRunning } = this.props
    // Generate a state class
    const enabledClass = isRunning ? "" : "disabled"

    return (
      <div className={`grid-board ${enabledClass}`}>
        {this.makeGrid()}
      </div>
    )
  }
}

// Setup Redux

const mapStateToProps = (state) => {
  return {
    grid: state.game.grid,
    shape: state.game.shape,
    rotation: state.game.rotation,
    x: state.game.x,
    y: state.game.y,
    speed: state.game.speed,
    isRunning: state.game.isRunning
  }
}

const mapDispatchToProps = () => {
  return {
    moveDown
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)
