(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {} // quitamos todos los argumentos heredados desde HtmlElement y el super
  }

  class InputEvents {
   
      constructor( ) {} // quitamos todos los argumentos y el super

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }

  // Creamos una nueva clase que aglutine todas las anteriores
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    // Tomamos los argumentos orginales para repartirlos entre los constructores de la composición
    constructor(value: string, placeholder: string, id: string ) { 
        this.htmlElement= new HtmlElement (id, 'input');
        this.inputAttributes= new InputAttributes (value, placeholder);
        this.inputEvents= new InputEvents;
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})()