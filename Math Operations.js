function solve(num1, num2, operation) {
    let result = 0
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1*num2;
    } else if (operation === '/') {
        result = num1/num2;
    } else if (operation === '**') {
        result = num1**num2;
    } 
    console.log(result);
}
solve()