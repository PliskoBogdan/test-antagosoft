export default function getRandomInt(min, max) {
  const ceilMinVal = Math.ceil(min);
  const floorMaxVal = Math.floor(max);
  return Math.floor(Math.random() * (floorMaxVal - ceilMinVal + 1)) + ceilMinVal;
}
