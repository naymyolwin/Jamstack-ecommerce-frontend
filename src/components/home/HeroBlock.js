import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Lottie from "react-lottie"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import animationData from "../../images/data.json"

const useStyles = makeStyles(theme => ({
  textContainer: {
    padding: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5rem",
    },
  },
}))

const HeroBlock = () => {
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {/* Hero Text */}
      <Grid item>
        <Grid
          item
          container
          direction="column"
          classes={{ root: classes.textContainer }}
        >
          <Grid item>
            <Typography
              align="center"
              variant="h1"
              classes={{ root: classes.heading }}
            >
              Premier <br /> Developer Cloting Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h3">
              High quality, custom-designed shirts, hats, and hoodies.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* animation */}
      <Grid item>
        <Lottie
          options={defaultOptions}
          width={
            matchesXS
              ? "20rem"
              : matchesMD
              ? "30rem"
              : matchesLG
              ? "40rem"
              : "50rem"
          }
        />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
