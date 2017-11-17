
import { SET_NEXT, MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE } from '../actions'

import { random } from '../utils'
import { shapeCount, canMoveTo, nextRotation, addBlockToGrid, gridDefault, defaultShape, defaultState } from '../utils/shapes'

// TODO: Move next block into grid state
// TODO: Create interval for game clock
// TODO: Add is running state and actions 

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
      // TODO: Get next block set as current block
      // TODO: Generate random next block
      // TODO: Check for compete rows
      // TODO: Score points
      // TODO: Check and Set level
      return newState

    default:
      return state
  }
}

export default gridReducer
