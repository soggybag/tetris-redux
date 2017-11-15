import { SET_NEXT, MOVE_RIGHT, MOVE_LEFT, ROTATE, MOVE_DOWN } from '../actions'
import { random } from '../utils'
import { canMoveTo } from '../utils/shapes'

import { shapeCount, nextRotation } from '../utils/shapes'

import { store } from '../App'


const currentBlockReducer = (state = {shape: 2, rotation: 2, x: 5, y: 0}, action) => {
  let grid
  let { shape, rotation, x, y } = state

  switch(action.type) {
    case SET_NEXT:
      return { shape: random(1, shapeCount), rotation: 0, x: 4, y: 6 }

    case MOVE_RIGHT:
      grid = store.getState().grid
      x = x + 1
      if (!canMoveTo(shape, grid, rotation, x, y)) {
          return state
      }
      return { ...state, x }

    case MOVE_LEFT:
      grid = store.getState().grid
      x = x - 1
      if (!canMoveTo(shape, grid, rotation, x, y)) {
          return state
      }
      return { ...state, x }

    case MOVE_DOWN:
      grid = store.getState().grid
      y = y + 1
      if (!canMoveTo(shape, grid, rotation, x, y)) {
          return state
      }
      return { ...state, y }

    case ROTATE:
      grid = store.getState().grid
      rotation = nextRotation(state.rotation, state.shape)
      if (!canMoveTo(shape, grid, rotation, x, y)) {
          return state
      }
      return { ...state, rotation }

    default:
      return state
  }
}

export default currentBlockReducer
