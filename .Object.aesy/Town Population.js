function solve(array) {
    let inf = {};

  for (let line of array) {
    let [name, population] = line.split(" <-> ");
    if (!inf.hasOwnProperty(name)) {
    inf[name] = population;
    } else {
        let oldValue = inf[name];
        inf[name] =  Number(oldValue) + Number(population);
    }
  }
  let entries = Object.entries(inf);
  for (let [name, population] of entries) {
    console.log(`${name} : ${Number(population)}`);
  }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])