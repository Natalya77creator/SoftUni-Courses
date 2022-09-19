function solve(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return {
        name,
        population,
        treasury
    }
}
solve('Tortuga',7000,15000)