export function getRandom(length = 8) {
  return Math.trunc(Math.random() * Math.pow(10, length));
}
