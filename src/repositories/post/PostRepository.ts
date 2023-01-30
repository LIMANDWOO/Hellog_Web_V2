import { customAxios } from "@/libs/axios";
import { Post } from "@/types/post/post.type";

class PostRepository {
  public async getTrendingPosts(): Promise<Post[]> {
    const { data } = await customAxios.get("/posting/trending");
    return data;
  }
}

export default new PostRepository();
