import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiService } from './05-dependency-c';


// Main
(async () => {

    // Now we only need to indicate the class from where we want to read and send it as the provider 
    // No other code must be updated if we decide to expand the service while it implements from 
    // the abstract class to match it definitions. This solution satifies Open/Close and Liskov principles 

    //const provider = new LocalDataBaseService();
    //const provider = new JsonDataBaseService();
    const provider = new WebApiService();

    const postService = new PostService( provider ); // We must send the provider because it is now a dependency
    const posts = await postService.getPosts();

    console.log({ posts })


})();