(()=> {

  type Gender = 'M' | 'F';

  // Version tradicional

  /* class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
        this.name= name;
        this.gender= gender;
        this.birthdate=birthdate;
    }; */


    // version simplificada
    class Person {
 
      constructor(
        public name: string,
        public gender: Gender,
        public birthdate: Date,
        ) {   
      };
  };

// Creamos una nueva clase que user que se extiende desde Person, lo que complica la situación por aumentar los argumentos
  class User extends Person {
    
    public lastAccess: Date;

    constructor (
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
      ) {
        super(name, gender, birthdate);
        this.lastAccess= new Date();
      };

      checkCredentials() {
        return true
      };
  };

  // Una tercera clase que extiende de la anterior complica nomblemente las cosas
  class UserSettings extends User {
    constructor (
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super (email, role, name, gender, birthdate)
    }
  }

  const newPerson= new Person('Fernando', 'M', new Date('1985-10-21'));
  console.log(newPerson);

  const newUserWithSettings= new UserSettings(
    'usr/home/',
    '/home',
    'fernand@gmail.com',
    'Admin',
    'Fernando', 
    'M', 
    new Date('1985-10-21')
  );

  console.log({newUserWithSettings})
})()