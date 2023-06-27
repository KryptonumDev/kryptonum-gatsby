const redirects = require("./redirects.json")
const path = require("path");
require("dotenv").config({
  path: `.env`,
})

exports.createPages = async ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions;
  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )

  // Blog and pagination

  const { data: { allSanityBlogEntries } } = await graphql(`
    query {
      allSanityBlogEntries {
        totalCount
      }
    }
  `);

  for (let i = 1; i < Math.ceil(allSanityBlogEntries.totalCount / process.env.GATSBY_PAGE_ITEM_COUNT); i++) {
    let page = i + 1

    createPage({
      path: `/pl/blog/${page}`,
      component: path.resolve('./src/templates/blog-archive.js'),
      context: {
        currentPage: page,
        perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
        skip: i * process.env.GATSBY_PAGE_ITEM_COUNT,
        totalCount: allSanityBlogEntries.totalCount,
        urlBasis: '/pl/blog'
      }
    });
  }

  createPage({
    path: '/pl/blog/',
    component: path.resolve('./src/templates/blog-archive.js'),
    context: {
      currentPage: 1,
      perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
      skip: 0,
      totalCount: allSanityBlogEntries.totalCount,
      urlBasis: '/pl/blog'
    }
  });

  // Blog categories and pagination

  const { data: { allSanityBlogEntries: { nodes: blogPosts }, allSanityBlogCategories: { nodes: blogCategories } } } = await graphql(`
    query {
      allSanityBlogEntries {
        nodes {
          id
          slug{
            current
          }
          categories {
            slug {
              current
            }
          }
        }
      }
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

    const postsCount = blogPosts.filter(({ categories }) => categories.some(({ slug: { current: categorySlug } }) => categorySlug === slug)).length

    for (let i = 1; i < Math.ceil(postsCount / process.env.GATSBY_PAGE_ITEM_COUNT); i++) {
      let page = i + 1

      createPage({
        path: `/pl/blog/kategoria/${slug}/${page}`,
        component: path.resolve('./src/templates/blog-category.js'),
        context: {
          id: id,
          slug: slug,
          currentPage: page,
          perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
          skip: i * process.env.GATSBY_PAGE_ITEM_COUNT,
          totalCount: postsCount,
          urlBasis: `/pl/blog/kategoria/${slug}`
        }
      });
    }

    createPage({
      path: `/pl/blog/kategoria/${slug}`,
      component: path.resolve('./src/templates/blog-category.js'),
      context: {
        id: id,
        slug: slug,
        currentPage: 1,
        perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
        skip: 0,
        totalCount: postsCount,
        urlBasis: `/pl/blog/kategoria/${slug}`
      }
    });
  })

  blogPosts.forEach(({ slug: { current: slug }, id }) => {
    createPage({
      path: `/pl/blog/${slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        id: id,
        slug: slug,
      }
    });
  })
}