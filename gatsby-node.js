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
        urlBasis: '/pl/blog',
        breadcrumbs: [
          {
            name: 'Blog',
            link: '/pl/blog'
          }
        ]
      }
    });
  }

  createPage({
    path: '/pl/blog',
    component: path.resolve('./src/templates/blog-archive.js'),
    context: {
      currentPage: 1,
      perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
      skip: 0,
      totalCount: allSanityBlogEntries.totalCount,
      urlBasis: '/pl/blog',
      breadcrumbs: [
        {
          name: 'Blog',
          link: '/pl/blog'
        }
      ]
    }
  });

  // Blog categories and pagination

  const { data: { allSanityBlogEntries: { nodes: blogPosts }, allSanityBlogCategories: { nodes: blogCategories } } } = await graphql(`
    query {
      allSanityBlogEntries {
        nodes {
          id
          name : title
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
          name
          slug {
            current
          }
        }
      }
    }
  `);

  blogCategories.forEach(({ name, id, slug: { current: slug } }) => {

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
          urlBasis: `/pl/blog/kategoria/${slug}`,
          breadcrumbs: [
            {
              name: 'Blog',
              link: '/pl/blog'
            },
            {
              name: name,
              link: `/pl/blog/kategoria/${slug}`
            }
          ]
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
        urlBasis: `/pl/blog/kategoria/${slug}`,
        breadcrumbs: [
          {
            name: 'Blog',
            link: '/pl/blog'
          },
          {
            name: name,
            link: `/pl/blog/kategoria/${slug}`
          }
        ]
      }
    });
  })

  blogPosts.forEach(({ name, slug: { current: slug }, id }) => {
    createPage({
      path: `/pl/blog/${slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        id: id,
        slug: slug,
        breadcrumbs: [
          {
            name: 'Blog',
            link: '/pl/blog'
          },
          {
            name: name,
            link: `/pl/blog/${slug}`
          }
        ]
      }
    });
  })

  // Akademia and pagination

  const { data: { allSanityCuriosityEntries } } = await graphql(`
    query {
      allSanityCuriosityEntries {
        totalCount
      }
    }
  `);

  for (let i = 1; i < Math.ceil(allSanityCuriosityEntries.totalCount / process.env.GATSBY_PAGE_ITEM_COUNT); i++) {
    let page = i + 1
    createPage({
      path: `/pl/akademia/${page}`,
      component: path.resolve('./src/templates/akademia-archive.js'),
      context: {
        currentPage: page,
        perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
        skip: i * process.env.GATSBY_PAGE_ITEM_COUNT,
        totalCount: allSanityCuriosityEntries.totalCount,
        urlBasis: '/pl/akademia',
        breadcrumbs: [
          {
            name: 'Akademia',
            url: '/pl/akademia'
          }
        ]
      }
    });
  }

  createPage({
    path: '/pl/akademia',
    component: path.resolve('./src/templates/akademia-archive.js'),
    context: {
      currentPage: 1,
      perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
      skip: 0,
      totalCount: allSanityCuriosityEntries.totalCount,
      urlBasis: '/pl/akademia',
      breadcrumbs: [
        {
          name: 'Akademia',
          link: '/pl/akademia'
        }
      ]
    }
  });

  // Akademia categories and pagination

  const { data: { allSanityCuriosityEntries: { nodes: akademiaPosts }, allSanityCuriosityCategories: { nodes: akademiaCategories } } } = await graphql(`
    query {
      allSanityCuriosityEntries {
        nodes {
          id
          name : title
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
      allSanityCuriosityCategories {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  akademiaCategories.forEach(({ name, id, slug: { current: slug } }) => {

    const postsCount = akademiaPosts.filter(({ categories }) => categories.some(({ slug: { current: categorySlug } }) => categorySlug === slug)).length

    for (let i = 1; i < Math.ceil(postsCount / process.env.GATSBY_PAGE_ITEM_COUNT); i++) {
      let page = i + 1

      createPage({
        path: `/pl/akademia/kategoria/${slug}/${page}`,
        component: path.resolve('./src/templates/akademia-category.js'),
        context: {
          id: id,
          slug: slug,
          currentPage: page,
          perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
          skip: i * process.env.GATSBY_PAGE_ITEM_COUNT,
          totalCount: postsCount,
          urlBasis: `/pl/akademia/kategoria/${slug}`,
          breadcrumbs: [
            {
              name: 'Akademia',
              url: '/pl/akademia'
            },
            {
              name: name,
              url: `/pl/akademia/kategoria/${slug}`
            }
          ]
        }
      });
    }

    createPage({
      path: `/pl/akademia/kategoria/${slug}`,
      component: path.resolve('./src/templates/akademia-category.js'),
      context: {
        id: id,
        slug: slug,
        currentPage: 1,
        perPage: Number(process.env.GATSBY_PAGE_ITEM_COUNT),
        skip: 0,
        totalCount: postsCount,
        urlBasis: `/pl/akademia/kategoria/${slug}`,
        breadcrumbs: [
          {
            name: 'Akademia',
            url: '/pl/akademia'
          },
          {
            name: name,
            url: `/pl/akademia/kategoria/${slug}`
          }
        ]
      }
    });
  })

  akademiaPosts.forEach(({ name, slug: { current: slug }, id }) => {
    createPage({
      path: `/pl/akademia/${slug}`,
      component: path.resolve('./src/templates/akademia-post.js'),
      context: {
        id: id,
        slug: slug,
        breadcrumbs: [
          {
            name: 'Akademia',
            link: '/pl/akademia'
          },
          {
            name: name,
            link: `/pl/akademia/${slug}`
          }
        ]
      }
    });
  })

  // Create pages


  createPage({
    path: `/pl/web-development`,
    component: path.resolve('./src/templates/web-development.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Web development',
          link: '/pl/web-development'
        }
      ]
    }
  });

  createPage({
    path: `/pl/web-development/strony-internetowe`,
    component: path.resolve('./src/templates/web-development-strony-internetowe.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Web development',
          link: '/pl/web-development'
        },
        {
          name: 'Strony internetowe',
          link: '/pl/web-development/strony-internetowe'
        }
      ]
    }
  });

  createPage({
    path: `/pl/web-development/sklepy-internetowe`,
    component: path.resolve('./src/templates/web-development-sklepy-internetowe.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Web development',
          link: '/pl/web-development'
        },
        {
          name: 'Sklepy internetowe',
          link: '/pl/web-development/sklepy-internetowe'
        }
      ]
    }
  });

  createPage({
    path: `/pl/web-development/aplikacje-internetowe`,
    component: path.resolve('./src/templates/web-development-aplikacje-internetowe.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Web development',
          link: '/pl/web-development'
        },
        {
          name: 'Aplikacje internetowe',
          link: '/pl/web-development/aplikacje-internetowe'
        }
      ]
    }
  });

  createPage({
    path: `/pl/grafika-design`,
    component: path.resolve('./src/templates/grafika-design.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Grafika & design',
          link: '/pl/grafika-design'
        }
      ]
    }
  });

  createPage({
    path: `/pl/grafika-design/projektowanie-logo`,
    component: path.resolve('./src/templates/grafika-design-projektowanie-logo.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Grafika & design',
          link: '/pl/grafika-design'
        },
        {
          name: 'Projektowanie logo',
          link: '/pl/grafika-design/projektowanie-logo'
        }
      ]
    }
  });

  createPage({
    path: `/pl/grafika-design/identyfikacja-wizualna-marki`,
    component: path.resolve('./src/templates/grafika-design-identyfikacja-wizualna-marki.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Grafika & design',
          link: '/pl/grafika-design'
        },
        {
          name: 'Identyfikacja wizualna marki',
          link: '/pl/grafika-design/identyfikacja-wizualna-marki'
        }
      ]
    }
  });

  createPage({
    path: `/pl/grafika-design/audyt-ux-ui`,
    component: path.resolve('./src/templates/grafika-design-audyt-ux-ui.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Grafika & design',
          link: '/pl/grafika-design'
        },
        {
          name: 'Audyt UX/UI',
          link: '/pl/grafika-design/audyt-ux-ui'
        }
      ]
    }
  });

  createPage({
    path: `/pl/warsztaty-strategiczny`,
    component: path.resolve('./src/templates/warsztaty-strategiczny.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Warsztat strategiczny',
          link: '/pl/warsztaty-strategiczny'
        }
      ]
    }
  });

  createPage({
    path: `/pl/polityka-prywatnosci`,
    component: path.resolve('./src/templates/polityka-prywatnosci.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Polityka prywatności',
          link: '/pl/polityka-prywatnosci'
        }
      ]
    }
  });

  createPage({
    path: `/pl/opieka-agencyjna`,
    component: path.resolve('./src/templates/opieka-agencyjna.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Opieka agencyjna',
          link: '/pl/opieka-agencyjna'
        }
      ]
    }
  });

  createPage({
    path: `/pl/mapa-strony`,
    component: path.resolve('./src/templates/mapa-strony.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Mapa strony',
          link: '/pl/mapa-strony'
        }
      ]
    }
  });

  createPage({
    path: `/pl/kontakt`,
    component: path.resolve('./src/templates/kontakt.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Mapa strony',
          link: '/pl/kontakt'
        }
      ]
    }
  });

  createPage({
    path: `/pl/`,
    component: path.resolve('./src/templates/index.js'),
    context: {
      breadcrumbs: []
    }
  });

  createPage({
    path: `/pl/brief-z-kryptonum`,
    component: path.resolve('./src/templates/brief-z-kryptonum.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Brief z Kryptonum',
          link: '/pl/brief-z-kryptonum'
        }
      ]
    }
  });

  createPage({
    path: `/pl/zespol`,
    component: path.resolve('./src/templates/zespol.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Zespół',
          link: '/pl/zespol'
        }
      ]
    }
  });

  const { data: { allSanityTeamMember } } = await graphql(`
    query {
      allSanityTeamMember {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  allSanityTeamMember.nodes.forEach(({ id, name, slug: { current } }) => {
    createPage({
      path: `/pl/zespol/${current}`,
      component: path.resolve('./src/templates/zespol-osoba.js'),
      context: {
        id: id,
        breadcrumbs: [
          {
            name: 'Zespół',
            link: '/pl/zespol'
          },
          {
            name: name,
            link: `/pl/zespol/${current}`
          }
        ]
      }
    });
  })

  createPage({
    path: `/pl/portfolio`,
    component: path.resolve('./src/templates/portfolio.js'),
    context: {
      breadcrumbs: [
        {
          name: 'Portfolio',
          link: '/pl/portfolio'
        }
      ]
    }
  });

  const { data: { allSanityCaseStudyEntries } } = await graphql(`
    query {
      allSanityCaseStudyEntries {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  allSanityCaseStudyEntries.nodes.forEach(({ id, name, slug: { current } }) => {
    createPage({
      path: `/pl/portfolio/${current}`,
      component: path.resolve('./src/templates/portfolio-case.js'),
      context: {
        id: id,
        breadcrumbs: [
          {
            name: 'Portfolio',
            link: '/pl/portfolio'
          },
          {
            name: name,
            link: `/pl/portfolio/${current}`
          }
        ]
      }
    });
  })
}