import { randInt } from "./utilities";

export function getRandomQuotePath () {
  const totalNum = 2384;
  const chosenNum = randInt(0, totalNum -1);
  return `/quote?offset=${chosenNum}&limit=1`;
}