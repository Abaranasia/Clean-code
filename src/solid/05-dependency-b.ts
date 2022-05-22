import { JsonDataBaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: JsonDataBaseService) {} // For dependency inversion we do a dep injection in the constructor

    // async getPosts() {
    //     const jsonDB = new LocalDataBaseService();
    //     this.posts = await jsonDB.getFakePosts();

    //     return this.posts;
    // }

    async getPosts() { // Now reading from the JSON
    //const jsonDB = new JsonDataBaseService();
    //this.posts = await jsonDB.getPosts();
    this.posts = await this.postProvider.getPosts();


    return this.posts;
    }
    
}