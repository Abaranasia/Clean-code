(() => {
  /** Versión B - refactorizar minimizando el número de argumentos empleando interfaces con objetos */

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  // version simplificada con desestructuración desde un interface
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    //lastAccess: Date;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  // La clase user que extiende desde Person hará también uso de un interface 
  // que aglutine sus props y las de su padre
  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // para la tercera clase creamos, de nuevo, un interface que concentre todas las propiedades 
  // propias y heredadas para luego tomar lo necesario desestructurando
  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // const newPerson = new Person('Fernando', 'M', new Date('1985-10-21'));
  // console.log(newPerson);

  const newUserWithSettings = new UserSettings({
    workingDirectory:'usr/home/',
    lastOpenFolder:'/home',
    email: 'fernand@gmail.com',
    role: 'Admin',
    name: 'Fernando',
    gender: 'M',
    birthdate: new Date('1985-10-21')
  }
  );
  console.log({newUserWithSettings})
})();
