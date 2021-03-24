// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.71.140:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag'], // 要查询的数据类型
        // typeName: 'Strapi'
        singleTypes: ['general'],  // 单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    },
  ],
  templates: {
    StrapiPost: [
      {
        path:'/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path:'/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
