function solve(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let sumRowOne = matrix[i].reduce((accum, el) => accum + el);
        let sumRowTwo = matrix[i+1].reduce((accum, el) => accum + el);
        let sumCollOne = 0;
        let sumCollTow = 0;
        for (let col = 0; col < array.length; col++) {
            sumCollOne += matrix[i][col];
            sumCollTow += matrix[i+1][col]
        } 
        if (sumRowOne !== sumRowTwo || sumCollOne !== sumCollTow) {
            return false;
        }
    }
    return true;
}