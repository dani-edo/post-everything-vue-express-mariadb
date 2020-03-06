<template>
  <div>
    <b-jumbotron class="mt-3">
      <template v-slot:header class="h3">Post Something</template>

      <template v-slot:lead>
        Type everithing you want. Delete if that post makes you remember about
        your ex girlfriend
      </template>

      <b-button variant="info" href="#" @click="toggleForm"
        >Make a post</b-button
      >
      <hr class="my-4" />
      <b-form @submit="Submit" v-if="show_form">
        <!-- <b-form-group label="Title" label-for="title">
          <b-form-input
            id="title"
            v-model="description"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group> -->

        <b-form-group label="Description" label-for="description">
          <b-form-textarea
            id="description"
            v-model="description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-jumbotron>

    <div class="posts">
      <b-card
        border-variant="light"
        :header="
          `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getYear()}`
        "
        class="text-center my-3"
        v-for="(post, index) in posts"
        :key="post._id"
        :index="index"
      >
        <b-card-text>{{ post.text }}</b-card-text>
        <b-button
          type="reset"
          variant="danger"
          class="float-right"
          @click="deletePost(post._id)"
          ><b-icon-trash-fill></b-icon-trash-fill>
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import PostService from "../postService";

export default {
  name: "PostSomething",
  data() {
    return {
      posts: [],
      error: "",
      description: "",
      show: true,
      show_form: false
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    toggleForm() {
      this.show_form = !this.show_form;
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    async Submit() {
      await PostService.insertPost(this.description);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
