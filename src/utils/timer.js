

let timer
let speed = 1000

export const startTimer = (callback) => {
  timer = setInterval(() => {
    callback()
  }, speed)
}
