import React, { Component } from 'react'
import { getColor } from '../utils/colors'

class GridSquare extends Component {

  render () {
    const styles = { backgroundColor: getColor(this.props.color) }
    return <div className="grid-square" style={styles}>{this.props.children}</div>
  }
}

export default GridSquare
