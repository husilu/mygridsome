<template>
  <Layout>
    <header class="masthead" :style="{
      backgroundImage: $page.posts.cover ? `url(http://106.75.71.140:1337${$page.posts.cover.url})` : ''
    }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.posts.title}}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <span class="meta"
                >Posted by
                <!-- <a href="#">Start Bootstrap</a> -->
                {{$page.posts.created_at}}</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.posts.content)">
            
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query($id: ID!) {
  posts:strapiPost (id: $id) {
     	id
      title
      content
      created_at
    	cover {
        url
      }
      tags {
        id
        title
      }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it';
const md = new  MarkdownIt();

export default {
  name: "PostPage",
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  }
};
</script>

<style>
</style>