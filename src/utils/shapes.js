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
  // console.log("current shape");
  // console.log(currentShape);
  // console.log("x, y");
  // console.log(x, y);
  // Loop through all rows and cols of the **shape**
  for (let row = 0; row < currentShape.length; row++) {         // Loop through rows
    for (let col = 0; col < currentShape[row].length; col++) {  // Loop through cols
      if (currentShape[row][col]) {                             // Look for a 1 here
        // console.log("currentShape[row][col]");
        // console.log(currentShape[row][col])
        // console.log("row, col");
        // console.log(row, col);
        const proposedX = row + x                               // x offset on grid
        const proposedY = col + y                               // y offset on grid
        const possibleRow = grid[proposedY]                     // Get the row
        // console.log('proposed x, y')
        // console.log(proposedX, proposedY)
        if (possibleRow) {                                      // Check row exists
          // console.log(possibleRow[proposedX]);
          if (possibleRow[proposedX]) {                         // check the contents
            return false                                         // something other than 0
          }
        }
      }
    }
  }
  return true
}
