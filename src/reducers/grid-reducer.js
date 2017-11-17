
import { SET_NEXT, MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE } from '../actions'

import { random } from '../utils'
import { shapeCount, canMoveTo, nextRotation, addBlockToGrid, gridDefault } from '../utils/shapes'

const defaultShape = () => {
  return {shape: 2, rotation: 2, x: 5, y: 0}
}

const defaultState = () => {
  return {
    grid: gridDefault(),
    shape: 1,
    rotation: 0,
    x: 5,
    y: 0,
    nextShape: 0
  }
}

const gridReducer = (state = defaultState(), action) => {
  let { grid, shape, rotation, x, y } = state

  switch(action.type) {
    case SET_NEXT:
      return { ...state, shape: random(1, shapeCount), rotation: 0, x: 4, y: 6 }

    case ROTATE:
      rotation = nextRotation(state.rotation, state.shape)
      if (canMoveTo(shape, grid, rotation, x, y)) {
          return { ...state, rotation }
      }
      return state

    case MOVE_RIGHT:
      x = x + 1
      if (canMoveTo(shape, grid, rotation, x, y)) {
          return { ...state, x }
      }
      return state

    case MOVE_LEFT:
      x = x - 1
      if (canMoveTo(shape, grid, rotation, x, y)) {
          return { ...state, x }
      }
      return state

    case MOVE_DOWN:
      const maybeY = y + 1
      if (canMoveTo(shape, grid, rotation, x, maybeY)) {
          return { ...state, y: maybeY }
      }

      const newGrid = addBlockToGrid(grid, shape, rotation, x, y)
      const newState = defaultState()
      newState.grid = newGrid
      // get next block
      // generate new next block

      return newState // newState

    default:
      return state
  }
}

export default gridReducer
