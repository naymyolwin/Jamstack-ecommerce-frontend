import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"

import frame from "../../images/product-frame-list.svg"
import Rating from "../home/Rating"
import Sizes from "./Sizes"
import Swatches from "./Swatches"
import QtyButton from "./QtyButton"

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
}) => {
  const classes = useStyles()
  return (
    <Grid item container>
      <Grid
        xs={9}
        item
        container
        classes={{ root: classes.frame }}
        alignItems="center"
        justifyContent="space-around"
      >
        {variant.images.map(image => (
          <Grid item key={image.url}>
            <img
              src={process.env.GATSBY_STRAPI_URL + image.url}
              alt={image.url}
              className={classes.productImage}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        xs={3}
        item
        container
        direction="column"
        classes={{ root: classes.info }}
        justifyContent="space-between"
      >
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h4">
              {product.node.name.split(" ")[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Rating number={3} />
          </Grid>
          <Grid item>
            <Chip label={`$${variant.price}`} />
          </Grid>
          <Grid item>
            <Typography variant="h3" classes={{ root: classes.stock }}>
              12 Currently In Stock
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

        <QtyButton />
      </Grid>
    </Grid>
  )
}

export default ProductFrameList
