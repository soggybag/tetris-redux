import { random } from '../utils'


export const testRandom = () => {
  const a = []
  for (let i = 0; i < 100; i++) {
    console.log(random(1, 9));
  }
}
