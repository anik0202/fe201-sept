import { sum, diff, NUM } from "./math.js";

const multiplicationOfSumAndDiff = (a, b) => {
  const summation = sum(a, b);
  const difference = diff(a, b);
  console.log("NUM", NUM);

  return summation * difference;
};

const result = multiplicationOfSumAndDiff(4, 2);
console.log(result);
export const TEST = "test";
