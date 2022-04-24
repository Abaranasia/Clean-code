(() => {
  /** Versión C - refactorizar incluyendo el Principio de Responsabilidad Única */

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  // version simplificada con desestructuración desde un interface; igual que en versión anterior
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

  
  // La clase user, que incialmente extendía desde Perso, ahora elimina ese vínculo familiar
  // para ello deja de extenderse y deja de heredar las props de Person, conservando solo sus props naturales
  interface UserProps {
    email: string;
    role: string;
  };

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }


  // La tercera clase pierde también su vínculo hereditario y conserva solo sus nuevas props
  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  };

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

// Creamos una cuarta clase, UserSettings que será una composición de las anteriores
interface UserSettingsProps {
  workingDirectory: string;
  lastOpenFolder: string;
  email: string;
  role: string;
  name: string;
  gender: Gender;
  birthdate: Date;
}

// Esta nueva clase ofrece un mejor mantenimiento y comprensión al tener todo más estructurado y al margen de la herencia
// La definición de sus propiedades en base aotros objetospermite que estos permanezcan en clases aisladas y más fáciles de mantener
// Un último paso para aumentar la claridad y el mantenimiento sería separar cada clase en un archivo independiente
class UserSettings {
  public person   : Person;
  public user     : User;
  public settings : Settings;

  constructor({
    workingDirectory,
    lastOpenFolder,
    email,
    role,
    name,
    gender,
    birthdate,
  }: UserSettingsProps) {
      this.person = new Person({name, gender, birthdate });
      this.user = new User({email, role });
      this.settings = new Settings({workingDirectory, lastOpenFolder });
  };
}

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
