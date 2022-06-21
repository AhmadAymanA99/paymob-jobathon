const solution = (N = 0) => {
  console.log(`example ${N} solution: \n`);
  for (let i = 0; i < N; i++) {
    if (i === N - 1) {
      let row = "";
      for (let j = 0; j < N; j++)
      row += "L";
      console.log(row + "\n");
    } 
    else console.log("L\n");
  }
};
console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
