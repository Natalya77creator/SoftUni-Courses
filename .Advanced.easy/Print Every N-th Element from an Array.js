function solve(arr, num) {
   
    let resultArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i % num === 0) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
solve(["dsa", "asd", "test", "tset"], 2);
