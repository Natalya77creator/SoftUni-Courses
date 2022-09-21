function solve(data) {
    let result ={};
    result.model = data.model;

    if (data.power <= 90) {
        result.engine = {
            power : 90,
            volume : 1800
        }
    } else if (data.power <= 120) {
        result.engine = {
            power : 120,
            volume : 2400
        }
    } else {
        result.engine = {
            power : 200,
            volume : 3500
        }
    }
    if (data.carriage === 'hatchback') {
        result.carriage = {
            type : 'hatchback',
            color : data.color
        } 
    } else {
        result.carriage = {
            type : 'coupe',
            color : data.color
        } 
    }
    let sizes;
    if (data.wheelsize % 2 !== 0) {
        sizes = data.wheelsize
    } else {
        sizes = data.wheelsize - 1;
    }
    result.wheels = [sizes, sizes, sizes, sizes];
    
    return result
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });