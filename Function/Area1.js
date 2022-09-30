function solve(area, vol, input) {
  return JSON.parse(input).map((entry) => {
    return {
      area: area.call(entry),
      volume: vol.call(entry),
    };
  });
}

let area = function area() {
  return Math.abs(this.x * this.y);
};

let vol = function vol() {
  return Math.abs(this.x * this.y * this.z);
};

solve(area,vol,`[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`);
