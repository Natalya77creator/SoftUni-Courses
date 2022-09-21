function solve(params) {
  let obj = {};
  let sort = params.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sort.length; i++) {
    let num = sort[i][0].charCodeAt();
    let letter = String.fromCharCode(num);
    let [product, cost] = sort[i].split(" : ");
    cost = +cost;
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = {};
      obj[letter] = [[product, cost]];
    } else {
      for (const key in obj) {
        if (key === letter) {
          obj[letter].push([product, cost]);
        }
      }
    }
  }
  let A = ''
  let K = Object.entries(obj).forEach(element => {
    console.log(element[0]);
        element[1].forEach(el => {
            console.log(`${el[0]}: ${el[1]}`);
        });
  });
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
