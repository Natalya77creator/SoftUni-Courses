function rectangle(width, height, color) {
    let rec = {
        width,
        height,
        color:color[0].toUpperCase() + color.substring(1),
        calcArea: function() {
            return this.width * this.height;
        }
    }
    return rec
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());