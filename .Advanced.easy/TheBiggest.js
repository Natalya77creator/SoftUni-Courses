function solve(params) {
  let arr = [params[0]];
  for (const element of params) {
    if (element > params[0]) {
        arr.push(element)
      params[0] = element;
    }
  }
  arr.shift();
  return arr
}
