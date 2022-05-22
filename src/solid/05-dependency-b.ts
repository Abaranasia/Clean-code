import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    // constructor(private postProvider: JsonDataBaseService) {} // For dependency inversion we do a dep injection in the constructor
    constructor(private postProvider: PostProvider) {} // For dependency inversion we do a dep injection in the constructor

    async getPosts() { // Now it doesn't matters from where I read, as both classes use the same method, so we can switch between them    
      this.posts = await this.postProvider.getPosts();
      return this.posts;
    }
    
}