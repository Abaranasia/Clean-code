

export abstract class Vehicle {
  // Una solución buena para reemplazar todas las clases y métodos es crear una clase abstracta por encima de la que extienden las demás

  // throw Error ('Method not implemented') 
  abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehicle{
  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Audi extends Vehicle{
  constructor( private numberOfSeats: number ) {
     super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle{
  constructor( private numberOfSeats: number ) {
     super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Honda extends Vehicle{
  constructor( private numberOfSeats: number ) {
     super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Volvo extends Vehicle{
  constructor( private numberOfSeats: number ) {
     super();
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}