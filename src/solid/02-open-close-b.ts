// Hay que agregar la dependencia de axios ```yarn add axios```
import axios from 'axios';

import { HttpClient } from "./02-open-close-c"; // New one

/**
 * La idea aquí es, por un lado, desacoplar esta clase de axios para luego quitarlo y, por otro, 
 * ser capaces de desarrollar un método único que nos permita hacer todas las peticiones sin repetir código
 */

export class TodoService { // Versión inicial

    constructor ( private http: HttpClient ) {} // New

    async getTodoItems() {
       // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}

export class PostService {
  
    constructor ( private http: HttpClient ) {} // New

    async getPosts() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}

export class PhotosService {

    constructor ( private http: HttpClient ) {} // New

    async getPhotos() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
};

/*********************************************************************/

export class AllService { // Aplicando el principio de responsabilidad única
  constructor ( private http: HttpClient, public url: string ) {}

  async getItems() {
    const { data } = await this.http.get( this.url );
    return data;
}
};
