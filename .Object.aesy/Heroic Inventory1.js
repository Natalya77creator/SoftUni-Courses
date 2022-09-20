function solve(params) {
    let result = []
    for (const iterator of params) {
        let [name, level, items] = iterator.split(' / ');
        level = + level;
        items = items ? items.split(', ') : [];

        result.push({name, level, items})
    }
   let myJSON = JSON.stringify(result)
   console.log(myJSON)
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])