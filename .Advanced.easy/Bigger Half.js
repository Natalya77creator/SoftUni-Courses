function solve(params) {
  let newArray = params.sort((a,b) => a-b);
  let arr = [];
  let L = Math.floor(params.length / 2);

    arr = newArray.slice(L);
  
  return arr;
}
solve([3, 19, 14, 7, 2, 19, 6]);
