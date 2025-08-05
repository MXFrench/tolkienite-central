export function randInt(min, max) {
  if (min > max) throw new Error("Min must be less than max.");
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function capitalize(str) {
  if (!str) return null;
  const words = str.toLowerCase().split(" ");
  const capWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
  return capWords.join(" ");
}

export function randArr(arr) {
  if (!arr) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

export function noSpace(str) {
  if (!str) return null;
  return str.split(" ").join("");
}

export function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}