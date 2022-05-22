import { JsonDataBaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() {}

    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }

    async getJsonPosts() { // Now reading from the JSON
    const jsonDB = new JsonDataBaseService();
    this.posts = await jsonDB.getPosts();

    return this.posts;
    }
    
}