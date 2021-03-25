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
              {{edge.node.created_at | getTime}}
            </p>
              <p class='flex'>
                <span v-for='item in edge.node.tags' :key='item.id' class='mr10 tag-code'>
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
  posts: allStrapiPost(perPage: 7, page: $page) @paginate {
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
import moment from 'moment';
import { Pager } from 'gridsome';
export default {
  name: "PostPage",
  components: {
    Pager
  },
  filters: {
    getTime(val) {
      return moment(val).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
}
.tag-code {
  background: #F5F5F5;
  color: #666666;
  font-size: 12px;
  margin-right: 10px;
  height: 30px;
  line-height:30px;
  padding: 0 10px;
}

.tag-code a {
  text-decoration: none;
}
nav a{
  display: inline-block;
  margin: 0 5px;
  background-color: #f4f4f5;
  /* color: #606266; */
  border-radius: 2px;
  padding: 0 4px;
  font-size: 13px;
  line-height: 30px;
  min-width: 30px;
  height:30px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
}
</style>
