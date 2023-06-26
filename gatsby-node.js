const redirects = require("./redirects.json")
const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createRedirect, createPage } = actions;
  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )

  // Create pages here

  createPage({
    path: '/pl/blog/',
    component: path.resolve('./src/templates/blog-archive.js'),
  });

  const { data: { allSanityBlogCategories: { nodes: blogCategories } } } = await graphql(`
    query {
      allSanityBlogCategories {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  blogCategories.forEach(({ id, slug: { current: slug } }) => {
    createPage({
      path: `/pl/blog/${slug}`,
      component: path.resolve('./src/templates/blog-category.js'),
      context: {
        id: id,
        slug: slug
      }
    });
  })
}