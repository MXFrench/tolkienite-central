export function randInt(min, max) {
  if (min > max) throw new Error("Min must be less than max.");
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function capitalize(str) {
  const words = str.toLowerCase().split(" ");
  const capWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
  return capWords.join(" ");
}

export function randArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}