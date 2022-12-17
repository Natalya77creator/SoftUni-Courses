function solve(input) {
  let juicies = {};

  for (let data of input) {
      let [juice, quantity] = data.split(" => ");
      quantity = Number(quantity);

      if (!juicies[juice]) {
        juicies[juice] = quantity;
      } else {
       for (let key in juicies) {
        if (key === juice) {
          let oldQuantity = juicies[juice]
          juicies[juice] = oldQuantity + quantity;
        }
      }
    }
  }
 let bottle = 0
  for (const [key,value] of Object.entries(juicies)) {
    if (value > 1000) {
     bottle = Math.trunc(value / 1000);
    console.log(`${key} => ${bottle}`);
    }
  }
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
