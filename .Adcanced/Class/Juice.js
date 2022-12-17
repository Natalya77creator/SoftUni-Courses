function solve(input) {
  let juicies = {};

  for (let data of input) {
    let [juice, quantity] = data.split(" => ");
    quantity = Number(quantity);

    if (!juicies[juice]) {
      juicies[juice] = [];
      if (quantity < 1000) {
      juicies[juice].push(quantity);
      } else {
      juicies[juice].unshift(quantity)
      }
    } else {
      for (let key in juicies) {
        if (key === juice) {
          let oldQuantity = juicies[juice]
          juicies[juice] = oldQuantity + quantity;
        }
      }
    }
  }

  let bottle = 0;
  for (const [key, value] of Object.entries(juicies)) {
    if (value > 1000) {
      bottle = Math.trunc(value / 1000);
      console.log(`${key} => ${bottle}`);
      delete juicies[key];
    }
  }

  let sum = 0;
  for (const [key, value] of Object.entries(juicies)) {
    sum = value.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    juicies[key] = sum;
  }
  Object.entries(juicies).forEach(ent => {
    if (ent[1] > 1000) {
      bottle = Math.trunc(ent[1] / 1000);
      console.log(`${ent[0]} => ${bottle}`);
    }
  })
}

solve([
  'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'
]);
