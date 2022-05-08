import { AllService, PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';


(async () => {

  const httpClient = new HttpClient(); // New

    const todoService = new TodoService( httpClient ); // Ahora pasamos el objeto httpClient a cada método
    const postService = new PostService( httpClient );
    const photosService = new PhotosService( httpClient );
    
    
    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
   // console.log({ todos, posts, photos });
    
   /**************************************************************** */

    const urlTodo = 'https://jsonplaceholder.typicode.com/todos/';
    const urlPost = 'https://jsonplaceholder.typicode.com/posts';
    const urlphotos = 'https://jsonplaceholder.typicode.com/photos';

    const todoServiceAll = new AllService(httpClient, urlTodo);
    const postServiceAll = new AllService(httpClient, urlPost);
    const photosServiceAll = new AllService(httpClient, urlphotos);
    
    const todosAll = await todoServiceAll.getItems();
    const postsAll = await postServiceAll.getItems();
    const photosAll = await photosServiceAll.getItems();

    console.log({ todosAll, postsAll, photosAll });

})();