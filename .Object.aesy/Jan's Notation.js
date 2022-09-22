function solve(arr) {
    let res = [];
    let number = [];
    let operator = [];
    let operationNum = {
        '+':(a,b) => a+b,
        '-':(a,b) => a-b,
        '*':(a,b) => a*b,
        '/':(a,b) => a/b
    };

    for (const el of arr) {
        if (typeof(el) === 'number') {
            number.push(el);
        } else {
            operator.push(el);
        }
    }
    if (operator.length < number.length - 1) {
        console.log(`Error: too many operands!`);
        return
    } else if (operator.length === number.length || number.length === 0){
        console.log(`Error: not enough operands!`);
        return
    }
    for (const el of arr) {
        if (typeof(el) === 'number') {
            res.push(el);
            continue;
        } 
        let numA = res.pop();
        let numB = res.pop();
        let result = operationNum[el](numB,numA);
        res.push(result);
        }
       console.log(res.join());
    }

solve([3,4,'+'])