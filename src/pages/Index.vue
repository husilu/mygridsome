<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style='background:url(/img/banner-bg.jpg) no-repeat;background-size: cover;'>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{$page.general.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.general.edges[0].node.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for='edge in $page.posts.edges' :key='edge.node.id'>
            <g-link :to="{
              path: `/post/${edge.node.id}`
            }">
              <h2 class="post-title">
                {{edge.node.title}}
              </h2>
              <!-- <h3 class="post-subtitle">
                {{edge.content}}
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <!-- <a href="#">{{edge.node.}}</a> -->
              {{edge.node.created_at}}
            </p>
              <p class='flex'>
                <span v-for='item in edge.node.tags' :key='item.id' class='mr10'>
                  <g-link :to="'/tag/' + item.id">{{item.title}}</g-link>
                </span>
              </p>
          </div>
          <!-- Pager -->
          <pager :info='$page.posts.pageInfo'/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  posts: allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        created_at
				tags {
          id
          title
        }
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome';
export default {
  name: "PostPage",
  components: {
    Pager
  }
};
</script>
<style scoped>
.flex {
  display: flex;
}
.mr10 {
  margin-right: 10px;
}
</style>
