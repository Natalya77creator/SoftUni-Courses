function solve(input) {
    let cars = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, producedCars });
        } else if (cars[carBrand].some(car => car.carModel === carModel)) {
            let targetCar = cars[carBrand].find(car => car.carModel === carModel);
            targetCar.producedCars += producedCars;
        } else {
            cars[carBrand].push({ carModel, producedCars });
        }
    }

    console.log(cars)
    for (const [brand, car] of Object.entries(cars)) {
        console.log(brand);
        for (const currentCar of Object.values(car)) {
            console.log(`###${currentCar.carModel} -> ${currentCar.producedCars}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q7 | 2000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])