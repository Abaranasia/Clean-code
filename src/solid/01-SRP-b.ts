(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    // Un servicio aglutina métodos para comunicar nuestro código con una API o una BD
    // Trasnladaremos aquí nuestros métodos para leer/escribir productos

    // private httpAdapter: Object; // Este objecto sería el conector hacia el API, privado a esta clase

    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo

      // Llama a la API y obtiene un valor que devuelve
      const response = { id, name: 'OLED Tv' }; // supuesta respuesta desde la API
      return response;
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailer {
    // Igualmente creamos una nueva clase solo para la notificación de los clinetes
    private masterEmail: string = 'rank@gm.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo a los clientes', template);
    }
  }

  // EL método onAddToCart no tenia sentido dentro de ProductBloc, por lo que se ha extraido y ubicado dentro de una clase propia
  class CardBlock {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  // Rediseñamos la clase ProductBloc para hacer uso de los métodos que usaba pero ahora repartidos en sus propias clases
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      //Inyectamos dependencias en el constructor
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['pepe@WebGLProgram.com'], 'to-clients');
    }

    // onAddToCart()  ... extraido
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cardBloc = new CardBlock();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cardBloc.addToCart(10);
})();
