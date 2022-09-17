function solve(input){
    let result = [];
    array = input.sort((a, b) => a - b);
    while(array.length !== 0){
      result.push(array[0]) && array.shift();
      result.push(array[array.length-1]) && array.pop();
    }
 return result
 }
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99])