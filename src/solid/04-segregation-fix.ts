// Ejemplo de violación del principio de segregación de interface

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimingBird {
  swim(): void;
}

class Tucan2 implements Bird, FlyingBird {
  public fly () { return 100 }
  public eat () {}
}

class Humminbird2 implements Bird, FlyingBird {
  public fly () { return 300 }
  public eat () {}
}

class Ostrich2 implements Bird, RunningBird {
  public eat () {}
  public run () {}
}

class Pinguin2 implements Bird, SwimingBird {
  public eat () {}
  public swim() {} // Esta propiedad del pingüino debería incluirse en el iterface, lo que obliga a las demás clases a implementarla
}