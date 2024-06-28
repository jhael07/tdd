// coffeeMachine.js

class CoffeeMachine {
  constructor() {
    this.cupSize = null;
    this.sugar = 0;
  }

  selectCupSize(size) {
    const validSizes = ["pequeño", "mediano", "grande"];
    if (validSizes.includes(size)) {
      this.cupSize = size;
    } else {
      throw new Error("Tamaño de vaso no válido");
    }
  }

  getCupSize() {
    return this.cupSize;
  }

  selectSugar(amount) {
    if (amount >= 0) {
      this.sugar = amount;
    } else {
      throw new Error("Cantidad de azúcar no válida");
    }
  }

  getSugar() {
    return this.sugar;
  }

  getCoffee() {
    if (!this.cupSize) {
      throw new Error("No se ha seleccionado un tamaño de vaso");
    }
    return {
      size: this.cupSize,
      sugar: this.sugar,
    };
  }
}

module.exports = CoffeeMachine;
