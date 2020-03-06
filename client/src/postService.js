import axios from "axios";

const url = "http://localhost:14045/api/posts/";

class PostService {
  // Get Post
  static async getPosts() {
    try {
      const respons = await axios.get(url);
      const data = respons.data;

      return data.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt)
      }));
    } catch (error) {
      throw new Error(error);
    }
  }

  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
