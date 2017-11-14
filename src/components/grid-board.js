import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getShape } from '../utils/shapes'
import { getColor } from '../utils/colors'

import GridSquare from './grid-square'

class GridBoard extends Component {

  makeGrid() {
    const { shape, rotation, x, y } = this.props.currentBlock
    const block = getShape(shape)[rotation]
    const blockColor = shape

    console.log(block);

    return this.props.grid.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        const blockX = col - x
        const blockY = row - y
        let color = 0

        if (blockX >= 0 && blockX < 4 && blockY >= 0 && blockY < 4) {
          console.log(block[blockX][blockY]);
          color = block[blockX][blockY] === 0 ? 0 : blockColor
        }

        const k = row * 12 + col;
        return <GridSquare key={k} square={square} color={color}>{color}</GridSquare>
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
    grid: state.grid,
    currentBlock: state.currentBlock
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)




/*


draw: function(r, x, y, c) {
  var i, j;
  for (i = 0; i < 4; ++i) {
    for (j = 0; j < 4; ++j) {
      if (tetris.curShape[r][j][i]) {
        tetris.cells[y + j][x + i].css('backgroundColor', c);
      }
    }
  }
}


*/
