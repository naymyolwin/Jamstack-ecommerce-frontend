import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import frame from "../../images/product-frame-list.svg"
import Rating from "../home/Rating"
import Sizes from "./Sizes"
import Swatches from "./Swatches"
import QtyButton from "./QtyButton"

import { colorIndex } from "./ProductFrameGrid"
import { getStockDisplay } from "../product-detail/ProductInfo"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "28rem",
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      height: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "26rem",
    },
  },
  productImage: {
    height: "20rem",
    width: "20rem",
  },
  stock: {
    color: "#fff",
  },
  sizesAndSwatches: {
    maxWidth: "13rem",
  },
  chipLabel: {
    fontSize: "2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

const ProductFrameList = ({
  product,
  variant,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  hasStyle,
  stock,
}) => {
  const classes = useStyles()
  const imageIndex = colorIndex(product, variant, selectedColor)
  const images =
    imageIndex !== -1
      ? product.node.variants[imageIndex].images
      : variant.images

  const selectedVariant =
    imageIndex === -1 ? product.node.variants.indexOf(variant) : imageIndex

  const stockDisplay = getStockDisplay(stock, selectedVariant)

  return (
    <Grid item container>
      <Grid
        lg={9}
        item
        container
        classes={{ root: classes.frame }}
        alignItems="center"
        justifyContent="space-around"
      >
        {images.map(image => (
          <Grid
            item
            key={image.url}
            component={Link}
            to={`/${product.node.category.name.toLowerCase()}/${product.node.name
              .split(" ")[0]
              .toLowerCase()}${hasStyle ? `?style=${variant.style}` : ""}`}
          >
            <img
              src={process.env.GATSBY_STRAPI_URL + image.url}
              alt={image.url}
              className={classes.productImage}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        lg={3}
        item
        container
        direction="column"
        classes={{ root: classes.info }}
        justifyContent="space-between"
      >
        <Grid
          item
          container
          direction="column"
          component={Link}
          to={`/${product.node.category.name.toLowerCase()}/${product.node.name
            .split(" ")[0]
            .toLowerCase()}${hasStyle ? `?style=${variant.style}` : ""}`}
        >
          <Grid item>
            <Typography variant="h4">
              {product.node.name.split(" ")[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Rating number={3} />
          </Grid>
          <Grid item>
            <Chip
              label={`$${variant.price}`}
              classes={{ label: classes.chipLabel }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" classes={{ root: classes.stock }}>
              {stockDisplay}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          classes={{ root: classes.sizesAndSwatches }}
        >
          <Sizes
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <Swatches
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Grid>

        <QtyButton stock={stock} selectedVariant={selectedVariant} />
      </Grid>
    </Grid>
  )
}

export default ProductFrameList
