import { SET_NEXT } from '../actions'
import { random } from '../utils'

import { shapeCount } from '../utils/shapes'

const nextBlockReducer = (state = {shape: 1, rotation: 0}, action) => {
  switch(action.type) {
    case SET_NEXT:
      return { shape: random(1, shapeCount), rotation: 0 }
    default:
      return state
  }
}

export default nextBlockReducer
