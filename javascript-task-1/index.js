const solution = (A = [], B = [], X = 0, Y = 0) => {
  if (A.length === B.length)
    for (let icon = 0; icon < A.length; icon++) {
      if (
        Math.pow(X - A[icon], 2) + Math.pow(Y - B[icon], 2) <=
        Math.pow(20, 2)
      ) {
        return icon;
      }
    }
  return -1;
};

console.log("Example 1 solution: ", solution([100, 200, 100], [50, 100, 100], 100, 100));
console.log("Example 2 solution: ", solution([100, 200, 100], [50, 100, 100], 100, 70));
console.log("Example 3 solution: ", solution([100, 200, 100], [50, 100, 100], 200, 60));
