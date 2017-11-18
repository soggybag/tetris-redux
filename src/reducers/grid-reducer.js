
import { SET_NEXT, MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE } from '../actions'

import { randomShape } from '../utils/shapes'
import {
  shapeCount,
  canMoveTo,
  nextRotation,
  addBlockToGrid,
  gridDefault,
  defaultShape,
  defaultState
} from '../utils/shapes'

// TODO: Add is running state and actions
// TODO: Start and Pause game

const gridReducer = (state = defaultState(), action) => {
  let { grid, shape, rotation, x, y, nextShape, isRunning } = state

  switch(action.type) {
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
      const newState = {
        grid: newGrid,
        shape: nextShape,
        x: 4,
        y: 0,
        rotation: 0,
        nextShape: randomShape()
      }

      // TODO: Check for compete rows
      // TODO: Score points
      // TODO: Check and Set level
      // TODO: Check canMoveTo if not game over

      return newState

    default:
      return state
  }
}

export default gridReducer
