const CoffeeMachine = require("./coffeeMachine");

test("Seleccionar tamaño del vaso", () => {
  const machine = new CoffeeMachine();
  machine.selectCupSize("pequeño");
  expect(machine.getCupSize()).toBe("pequeño");
  machine.selectCupSize("mediano");
  expect(machine.getCupSize()).toBe("mediano");
  machine.selectCupSize("grande");
  expect(machine.getCupSize()).toBe("grande");
});

test("Seleccionar cantidad de azúcar", () => {
  const machine = new CoffeeMachine();
  machine.selectSugar(2);
  expect(machine.getSugar()).toBe(2);
  machine.selectSugar(0);
  expect(machine.getSugar()).toBe(0);
});

test("Recoger el vaso de café", () => {
  const machine = new CoffeeMachine();
  machine.selectCupSize("mediano");
  machine.selectSugar(1);
  const coffee = machine.getCoffee();
  expect(coffee.size).toBe("mediano");
  expect(coffee.sugar).toBe(1);
});
