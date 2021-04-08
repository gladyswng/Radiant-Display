/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)


async function turnCategoryIntoPages({ graphql, actions }) {

  const categoryTemplate = path.resolve('./src/templates/Category.tsx')

  const { data } = await graphql(`
    query {
      category: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.category.nodes.forEach(category => {
    actions.createPage({
      path: `category/${category.slug.current}`,
      component: categoryTemplate,
      context: {
        slug: category.slug.current,

      }
    })
  })

}

async function turnProductIntoPages({ graphql, actions }) {

  const productTemplate = path.resolve('./src/templates/StandardProduct.tsx')

  const { data } = await graphql(`
    query {
      product: allSanityProduct {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.product.nodes.forEach(product => {
    actions.createPage({
      path: `product/${product.slug.current}`,
      component: productTemplate,
      context: {
        slug: product.slug.current
      }
    })
  })

}

exports.createPages = async(params) => {
  await Promise.all([
    turnCategoryIntoPages(params),
    turnProductIntoPages(params)
  ])
}