import { PostService } from './05-dependency-b';
import { JsonDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonDataBaseService();

    const postService = new PostService( provider ); // We must send the provider because it is now a dependency
    const posts = await postService.getPosts();

    console.log({ posts })


})();