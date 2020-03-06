<template>
  <div id="app">
    <img src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ" alt="bg-full" class="bg-full" />
    <b-container>
      <Post />
    </b-container>
  </div>
</template>

<script>
import Post from "./components/Post.vue";

export default {
  name: "App",
  components: {
    Post
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
