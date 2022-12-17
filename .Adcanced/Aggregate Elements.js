function solve(params) {
    let sum = 0;
    let sumOne = 0;
    let concat = '';
    for (let index = 0; index < params.length; index++) {
        let element = params[index];
        sum += element;
        sumOne += 1 / element;
        element = element.toString();
        concat += element
      
    }
    console.log(sum);
    console.log(sumOne);
    console.log(concat);
}
solve([1, 2, 3])
Footer