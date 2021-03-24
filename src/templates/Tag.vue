<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{$page.tags.title}}</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for='item in $page.tags.posts' :key='item.id'>
            <g-link :to="{
              path: `/post/${item.id}`
            }">
              <h2 class="post-title">
                {{item.title}}
              </h2>
              <!-- <h3 class="post-subtitle">
                {{edge.content}}
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <!-- <a href="#">{{item.}}</a> -->
              {{item.created_at}}
            </p>
              <p class='flex'>
                <span v-for='item in item.tags' :key='item.id' class='mr10'>
                  <g-link :to="'/tag/' + item.id">{{item.title}}</g-link>
                </span>
              </p>
          </div>
          <!-- Pager -->
          <!-- <pager :info='$page.posts.pageInfo'/> -->
        </div>
      </div>
    </div>
    <!-- <ul>
      <li v-for='item in $page.tags.posts' :key='item.id'>
       <span>
          {{item.title}}
       </span>
      </li>
    </ul> -->

  </Layout>
</template>
<page-query>
query($id: ID!) {
  tags:strapiTag(id: $id) {
    id
    title
    posts {
      id
      title
    }
  }
}
</page-query>
<script>
export default {
  name: 'TagPage'
}
</script>

<style>

</style>