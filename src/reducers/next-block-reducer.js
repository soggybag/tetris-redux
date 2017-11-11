
const defaultState = () => {
  return [[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]]
}

const nextBlockReducer = (state = defaultState(), action) => {
  switch(action.type) {

    default:
      return state
  }
}

export default nextBlockReducer
