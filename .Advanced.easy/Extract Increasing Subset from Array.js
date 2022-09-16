function solve(params) {
  let array = [params[0]];
  let maxNum = Math.max(...params);
  
  for (let i = 0; i < params.length; i++) {
    if (params[0] === maxNum) {
        return array
    } else if (params[i] < params[i + 1]) {
      array.push(params[i + 1]);
    }
  }
  return array;
}
solve([20,3,2,15,6,1]);
