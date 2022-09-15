function solve(array) {
    max = array.reduce(function max(a, b) {
        return Math.max(Array.isArray(a) ? a.reduce(max) : a, Array.isArray(b) ? b.reduce(max) : b);
    });
    console.log(max);
}
solve([[20, 50, 10],
    [8, 33, 145]])