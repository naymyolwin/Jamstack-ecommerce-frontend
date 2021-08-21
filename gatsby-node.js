/**
import { graphql } from 'gatsby';
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(
    `
      {
        products: allStrapiProduct {
          edges {
            node {
              name
              strapiId
              category {
                name
              }
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
              description
            }
          }
        }
      }
    `
  )
  if (results.errors) {
    throw results.errors
  }
  const products = resutls.data.products.edges
  const categories = resutls.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.tolowerCase()}/${encodeURIComponent(
        product.node.name.split(" ")[0]
      )}`,
      component: require.resolve("./src/template/ProductDetail.js"),
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.tolowerCase()}`,
      component: require.resolve("./src/template/ProductList.js"),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
      },
    })
  })
}
