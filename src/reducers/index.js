import { combineReducers } from 'redux'
import gridReducer from './grid-reducer'
import scoreReducer from './score-reducer'
import linesReducer from './lines-reducer'
import levelReducer from './level-reducer'
import nextBlockReducer from './next-block-reducer'

const reducers = combineReducers({
  level: levelReducer,
  lines: linesReducer,
  score: scoreReducer,
  grid: gridReducer,
  nextBlock: nextBlockReducer
})

export default reducers
