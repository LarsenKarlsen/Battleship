const Ship = require("../src/ship")

it("ship init",()=>{
    expect(Ship(4).getState())
    .toEqual({'length': 4,
              'shipState': ['s', 's', 's', 's',],
              'orientation':'horizontal',
              'sunk':false},)
})

it("ship hit and sunk",()=>{
    const ship = Ship(1)
    ship.hit(0)
    expect(ship.getState())
    .toEqual({'length': 1,
              'shipState': ['x'],
              'orientation': 'horizontal',
              'sunk':true},)
})

it("ship orientation, hit",()=>{
    const ship = Ship(3)
    ship.hit(2)
    ship.changeOrientation()
    expect(ship.getState())
    .toEqual({'length': 3,
              'shipState': ['s','s','x'],
              'orientation': 'vertical',
              'sunk':false},)
})