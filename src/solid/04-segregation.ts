// Ejemplo de violación del principio de segregación de interface

interface BirdInt {
  fly(): void;
  run(): void;
  eat(): void;
}


class Tucan implements BirdInt {
  public fly () { }
  public eat () { }
  public run () { } // No estaba inicialmente pero al emplear el interface me obliga a tenerlo aunque no lo use
}

class Humminbird implements BirdInt {
  public fly () { }
  public eat () { }
  public run () { }
}

class Ostrich implements BirdInt {
  public fly () { } // Tampoco es usable por esta clase
  public eat () { }
  public run () { }
}

class Pinguin implements BirdInt {
  public fly () { } // Tampoco es usable por esta clase
  public eat () { }
  public run () { }
  public swim() { } // Esta propiedad del pingüino debería incluirse en el iterface, lo que obliga a las demás clases a implementarla
}