exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/pl`,
  })
}