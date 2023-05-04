const Car = require('./car');
const Dealership = require('./dealership');

 let londonMotors;
// let car1;
// let car2;
// let car3;

beforeEach(()=>{
    londonMotors = new Dealership('London Motors',4)
    car1 = new Car('Ford',1000, 'petrol');
    car2 = new Car('MC',2000, 'petrol');
    car3 = new Car('Honda',500, 'diesel');
    londonMotors.addCar(car1);
    londonMotors.addCar(car2);
    londonMotors.addCar(car3);
})

test('prints number of current cars', ()=>{
    const expected = 3;
    expect(londonMotors.numberCarsInStock()).toBe(3);
})

test('returns number of cars by manufacturer', ()=>{
const expected = 1;
expect(londonMotors.carsByManufacturer('Ford')).toBe(1)
})


