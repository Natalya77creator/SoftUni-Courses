function solve(params) {
    let obj = params.map((element) => {
    let data = element.split(" / ");
    let I = data[2].split(", ");
    return {
        name : data[0],
        level: Number(data[1]),
        items: I,
      };
  });
   
  let myJSON = JSON.stringify(obj);
  console.log(myJSON);
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
