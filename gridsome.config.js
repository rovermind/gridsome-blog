module.exports = {
  siteName: "rororo's blog",
  siteUrl: "https://rororo.netlify.com",
  // siteDescription: "Run blog by Gridsome and Vue.js",
  // icon: "",
  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        route: "/blog/:slug"
      }
    }
  ]
}
