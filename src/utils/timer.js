

let timer
let speed = 1000

export const startTimer = (callback, speed) => {
  timer = setInterval(() => {
    callback()
  }, speed)
}

export const stopTimer = () => {
  clearInterval(timer)
}
