function solve(params) {
    let array = String(params).split('');
    let firtsWord = array[0];
    let sum = 0;
    let isSame = true;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (array[index] !== firtsWord) {
            isSame = false;
           
        }
        sum += Number(array[index]);
    }
    console.log(isSame);
    console.log(sum);
    }
solve(22542)