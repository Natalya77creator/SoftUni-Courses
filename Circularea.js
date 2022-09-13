function solve(params) {
    let type = typeof params;
    if (type === "number") {
    let A = Math.pow(params,2)*Math.PI
    console.log(A.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
solve('name');
