import { Tesla, Audi, Toyota, Honda, Vehicle } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {

      // Versión 1: en todos ellos llamamos al método getNumberOfSeats de los objetos heredados de Vehicle
      /*  for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfSeats() )
                continue;
            }         
        } */

    // Version 2: alternativa más legible, óptima y ligera
    cars.forEach( car => {
      console.log(car.constructor.name, car.getNumberOfSeats())
    });

    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();