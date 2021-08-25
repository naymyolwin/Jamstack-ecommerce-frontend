import React from "react"
import Layout from "../components/ui/layout"
import Grid from "@material-ui/core/Grid"
import { graphql } from "gatsby"

import DynamicToolbar from "../components/product-list/DynamicToolbar"
import ListOfProducts from "../components/product-list/ListOfProducts"

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
        <ListOfProducts products={products} />
      </Grid>
    </Layout>
  )
}

export default ProductList

export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          name
          variants {
            color
            id
            price
            size
            style
            images {
              url
            }
          }
        }
      }
    }
  }
`
