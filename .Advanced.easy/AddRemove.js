function solve(params) {
    let arr = [];
    let num = 1;
    params.forEach(command => {
        command === 'add' ? arr.push(num) : arr.pop();
        num++;
    });
    return arr.length === 0 ? 'Empty' : arr.join(`\n`);
}
