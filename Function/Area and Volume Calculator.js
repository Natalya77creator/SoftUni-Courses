function solve(area, vol, input) {
    let data = JSON.parse(input);
    let result = [];

    for (const entry of data) {
        let calArea = area.call(entry);
        let calVol = vol.call(entry);
        result.push({
            area: calArea,
            volume: calVol,
        });
    }
    return result
}
let area = function area() {
    return Math.abs(this.x * this.y);
};
let vol = function vol() {
  return Math.abs(this.x * this.y * this.z);
};

let result = solve(area, vol,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
console.log(JSON.stringify(result));
