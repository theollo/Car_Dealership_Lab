const Car = require('./car');
let ford;
beforeEach(()=>{
    ford=new Car('Ford',1000,'fuel')
})
test('checks car values are correct', ()=>{
    const expected = 'Ford';
        expect(ford.manufacturer).toBe(expected);
    })

    test('checks car values are correct', ()=>{
        const expected = 1000;
        expect(ford.price).toBe(expected);
        })
    
        test('checks car values are correct', ()=>{
            const expected = 'fuel';
            expect(ford.engineType).toBe(expected);
            })
  