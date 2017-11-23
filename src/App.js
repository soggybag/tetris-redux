import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { startTimer } from './utils/timer'
import { moveDown } from './actions'

import './App.css'

import GridBoard from './components/grid-board'
import Controls from './components/controls'
import NextBlock from './components/next-block'
import ScoreBoard from './components/score-board'


export const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>Turbo Umbrella</h1>
          <div className="game-container">
            <GridBoard />
            <Controls />
            <NextBlock />
            <ScoreBoard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
