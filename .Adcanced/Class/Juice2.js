function solve(input) {
  class Juicies {
    constructor(juice, quantity) {
      this.juice = juice;
      this.quantity = Number(quantity);
    }
  }
  let juicies = [];
  let bottle = 0;
  let newJuice = [];

  for (let data of input) {
    let [juice, quantity] = data.split(" => ");
    let newJuice = new Juicies(juice, quantity);
    juicies.push(newJuice);
  }
  for (let i = 0; i < juicies.length; i++) {
    if (juicies[i].quantity < 1000) {
      for (let j = i + 1; j < juicies.length; j++) {
        if (juicies[i].juice === juicies[j].juice) {
          juicies[i].quantity += juicies[j].quantity;
          juicies.splice(j, 1);
          newJuice.push(juicies[i]);
        }
      }
    } else {
      for (let j = i + 1; j < juicies.length; j++) {
        if (juicies[i].juice === juicies[j].juice) {
          juicies[i].quantity += juicies[j].quantity;
          juicies.splice(j, 1);
        }
      }
      bottle = Math.trunc(juicies[i].quantity / 1000);
      console.log(`${juicies[i].juice} => ${bottle}`);
    }
  }
  if (newJuice.length !== 0) {
    for (let i = 0; i < newJuice.length; i++) {
      if (newJuice[i].quantity > 0) {
        bottle = Math.trunc(newJuice[i].quantity / 1000);
        console.log(`${juicies[i].juice} => ${bottle}`);
      }
    }
  }
}
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
