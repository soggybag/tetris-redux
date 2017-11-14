import { random } from '../utils'

export const INIT = "INIT"
export const START = "START"
export const KEY = "KEY"
export const PAUSE = "PAUSE"
export const RESUME = "RESUME"
export const GAME_OVER = "GAME_OVER"
export const MOVE_LEFT = "MOVE_LEFT"
export const MOVE_RIGHT = "MOVE_RIGHT"
export const ROTATE = "ROTATE"
export const MOVE_DOWN = "MOVE_DOWN"
export const REFRESH = "REFRESH"
export const SET_NEXT = "SET_NEXT"
export const NEXT_BLOCK = "NEXT_BLOCK"


export const setNext = () => {
  return {
    type: SET_NEXT
  }
}

export const moveRight = () => {
  return {
    type: MOVE_RIGHT
  }
}

export const moveLeft = () => {
  return {
    type: MOVE_LEFT
  }
}

export const rotate = () => {
  return {
    type: ROTATE
  }
}

export const moveDown = () => {
  return {
    type: MOVE_DOWN
  }
}

export const nextBlock = () => {
  return {
    type: NEXT_BLOCK
  }
}




//
