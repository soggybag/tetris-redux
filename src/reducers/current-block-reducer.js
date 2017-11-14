import { SET_NEXT, MOVE_RIGHT, MOVE_LEFT, ROTATE, MOVE_DOWN } from '../actions'
import { random } from '../utils'

import { shapeCount, nextRotation } from '../utils/shapes'

const currentBlockReducer = (state = {shape: 1, rotation: 0, x: 0, y: 0}, action) => {
  switch(action.type) {
    case SET_NEXT:
      return { shape: random(1, shapeCount), rotation: 0, x: 4, y: 6 }

    case MOVE_RIGHT:
      return { ...state, x: state.x += 1 }

    case MOVE_LEFT:
      return { ...state, x: state.x -= 1 }

    case MOVE_DOWN:
      return { ...state, y: state.y += 1 }

    case ROTATE:
      return { ...state, rotation: nextRotation(state.rotation, state.shape) }

    default:
      return state
  }
}

export default currentBlockReducer
