<template>
  <Layout>
    <header class="masthead" style="background-image: url('/img/about-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>About Me</h1>
            <span class="subheading">This is what I do.</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <p>欢迎访问我的Github主页</p>
        <a href='https://github.com/husilu'>
          https://github.com/husilu
        </a>
      </div>
    </div>
  </div>
  </Layout>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About us'
  }
}
</script>
