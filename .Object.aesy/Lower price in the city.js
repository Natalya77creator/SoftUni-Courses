function solve(params) {
  let obj = {};
  for (const iterator of params) {
    let [town, product, cost] = iterator.split(" | ");
    cost = +cost;
    if (!obj.hasOwnProperty(product)) {
      obj[product] = {};
      obj[product] = [town, cost];
    } else {
      for (let key in obj) {
        if (key === product) {
          if (obj[key][1] > cost) {
            obj[product] = [town, cost];
          }
        }
      }
    }
  }
  let myObject = Object.entries(obj).forEach(element => {
    console.log(`${element[0]} -> ${element[1][1]} (${element[1][0]})`);
  });

}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
