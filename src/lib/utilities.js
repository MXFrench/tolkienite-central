export function randInt(min, max) {
  if (min > max) throw new Error("Min must be less than max.");
  return Math.floor(Math.random() * (max - min + 1) + min);
}