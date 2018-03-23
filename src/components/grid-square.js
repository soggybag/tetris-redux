import React, { Component } from 'react'
import { getColor } from '../utils/colors'

// Represents a block with a color

class GridSquare extends Component {

  render () {
    const classes = `grid-square color-${this.props.color}`
    return <div className={classes} />
  }
}

export default GridSquare
