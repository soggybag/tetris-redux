import { random } from './index'
export const shapes = [
  // none
  [[[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]]],
  // I
  [[[0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]]],

  // T
  [[[0,0,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [0,1,1,0],
    [0,1,0,0],
    [0,0,0,0]]],

  // L
  [[[0,0,0,0],
    [1,1,1,0],
    [1,0,0,0],
    [0,0,0,0]],

   [[1,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

   [[0,0,1,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,0,0,0]]],

  // J
  [[[1,0,0,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

   [[0,1,1,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

   [[0,0,0,0],
    [1,1,1,0],
    [0,0,1,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [0,1,0,0],
    [1,1,0,0],
    [0,0,0,0]]],

  // Z
  [[[0,0,0,0],
    [1,1,0,0],
    [0,1,1,0],
    [0,0,0,0]],

   [[0,0,1,0],
    [0,1,1,0],
    [0,1,0,0],
    [0,0,0,0]]],

  // S
  [[[0,0,0,0],
    [0,1,1,0],
    [1,1,0,0],
    [0,0,0,0]],

   [[0,1,0,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,0,0]]],

  // O
  [[[0,1,1,0],
    [0,1,1,0],
    [0,0,0,0],
    [0,0,0,0]]]]

export const shapeCount = shapes.length
export const getShape = (index) => {
  return shapes[index]
}

export const nextRotation = (rotation, shape) => {
  return (rotation + 1) % shapes[shape].length
}

export const startAt = [0, -1, -1, -1, 0, -1, -1, 0]

export const getStartY = (index) => {
  return startAt[index]
}

export const canMoveTo = (shape, grid, r, x, y) => {
  const currentShape = shapes[shape][r]
  // Loop through all rows and cols of the **shape**
  for (let row = 0; row < currentShape.length; row++) {         // Loop through rows
    for (let col = 0; col < currentShape[row].length; col++) {  // Loop through cols
      // console.log(`row:${row} col:${col} x:${x} y:${y}`);
      // console.log(`Grid: ${currentShape[row][col]}`);
      if (currentShape[row][col] !== 0) {                      // Look for a 1 here
        const proposedX = col + x                               // x offset on grid
        const proposedY = row + y                               // y offset on grid
        const possibleRow = grid[proposedY]                     // Get the row
        if (possibleRow) {                                      // Check row exists
          if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {                         // check the contents
            return false                                         // something other than 0
          }
        } else {
          return false
        }
      }
    }
  }
  return true
}

export const addBlockToGrid = (grid, shape, rotation, x, y) => {
  const block = shapes[shape][rotation]
  console.log(grid, shape, rotation, x, y);
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        grid[row + y][col + x] = shape
      }
    }
  }
  return grid.slice(0)
}

export const gridDefault = () => {
  const rows = 18
  const cols = 10
  const array = []
  for (let row = 0; row < rows; row++) {
    array.push([])
    for (let col = 0; col < cols; col++) {
      array[row].push(0)
    }
  }
  return array
  // Why doesn't this work?
  // return Array(rows).fill(Array(cols).fill(0))
}

export const defaultShape = () => {
  return {shape: 2, rotation: 2, x: 5, y: 0}
}

export const randomShape = () => {
  return random(1, shapes.length - 1)
}

export const defaultState = () => {
  return {
    grid: gridDefault(),
    shape: randomShape(),
    rotation: 0,
    x: 5,
    y: 0,
    nextShape: randomShape(),
    isRunning: true
  }
}

export const checkRows = (grid) => {
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      grid.splice(row, 1)
      grid.unshift(Array(10).fill(0))
    }
  }

  // const completedRows = grid.reduce((acc, row, index) => {
  //   if (row.indexOf(0) === -1) {
  //     return acc += 1
  //   }
  //   return acc
  // }, 0)
  return points[completedRows]
}
