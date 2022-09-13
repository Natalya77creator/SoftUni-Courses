function solve(fruit, weight, value) {
    console.log(`I need $${(weight/1000 * value).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
    
}
solve('orange', 2500, 1.80)