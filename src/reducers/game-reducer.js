
import {
  SET_NEXT,
  MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, ROTATE,
  PAUSE, RESUME, RESTART, GAME_OVER
} from '../actions'

import { randomShape, checkRows } from '../utils/shapes'

import {
  shapeCount,
  canMoveTo,
  nextRotation,
  addBlockToGrid,
  gridDefault,
  defaultShape,
  defaultState
} from '../utils/shapes'

import { startTimer, stopTimer } from '../utils/timer'
import store from '../App'

const gameReducer = (state = defaultState(), action) => {
  let { grid, shape, rotation, x, y, nextShape, isRunning, score, speed } = state

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
      const newState = defaultState()
      newState.grid = newGrid
      newState.shape = nextShape
      newState.nextShape = randomShape()
      newState.score = score
      newState.isRunning = isRunning

      // TODO: Check canMoveTo if not game over
      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        // Game Over
        console.log("Game Should be over...")
        newState.shape = 0
        return { ...state, gameOver: true }
      }

      // TODO: Check and Set level
      // Score increases decrease interval

      newState.score = score + checkRows(newGrid)

      return newState

    case RESUME:
      console.log("Pause");
      return { ...state, isRunning: true }

    case PAUSE:
      console.log("Resume");
      return { ...state, isRunning: false }

    case GAME_OVER:
      console.log("Game Over")
      return { ...state, isRunning: false}

    case RESTART:
      console.log("Restart Game")
      return defaultState()

    default:
      return state
  }
}

export default gameReducer
