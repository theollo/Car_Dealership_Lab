const Car = require('./car');
const Dealership = function(name, maxCars,carsInStock){
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}
module.exports = Dealership

Dealership.prototype.numberCarsInStock = function() {
    return this.carsInStock.length;
}

Dealership.prototype.addCar = function(car){
    // if(this.carsInStock() < this.maxCars){
        this.carsInStock.push(car);
    //    return console.log(carsInStock);
    // } else {
    //     return console.log('The lot is full!');
    // }
}

Dealership.prototype.carsByManufacturer = function(manufacturer){
    return this.carsInStock.filter(car=>car.manufacturers === manufacturer)
}
Dealership.prototype.carManufacturer = function(manufacturer){
    return this.carsInStock.map(car => car.manufacturer);
}

// this.valueOfLot = function(car, manufacturer){
//     return this.carsInStock.
// }