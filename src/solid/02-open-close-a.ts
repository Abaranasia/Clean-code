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
    
    
    console.log({ todos, posts, photos });
    
    const allService = new AllService(httpClient);
    

})();