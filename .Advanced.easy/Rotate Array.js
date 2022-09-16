function solve(array,num) {
    
    for (let i = 1; i <= num; i++) {
        let lastEl = array.pop(array[array.legth-1]);
        array.unshift(lastEl)
    }
    console.log(array.join(' '));
}
solve(['1','2','3','4'], 2)