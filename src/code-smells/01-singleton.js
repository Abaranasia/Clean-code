const Singleton = (function () {

  // Patron a evitar: es difícil de testear y no es fácil rastrear de dónde vienen los cambios

  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function main() {

  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', (instance1 === instance2));
}
main();
// Execute by typing node src/code-smells/01-singleton.js