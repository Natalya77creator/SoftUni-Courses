function solve(input) {
    return input
    .map(element => {
        let data = element.split(' <-> ');
        return {
            name : data[0],
            population : Number(data[1])
        }
})
.reduce((registry, town) => {
if (registry[town.name] === undefined) {
    registry[town.name] = town.population;
} else {
    registry[town.name] += town.population;
}
}, {})

}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])