import React, { useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"

import background from "../../images/toolbar-background.svg"
import ListIcon from "../../images/List"
import GridIcon from "../../images/Grid"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  description: {
    color: "#fff",
  },
  descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "15rem",
    width: "60rem",
    borderRadius: 25,
    padding: "1rem",
  },
  mainContainer: {
    padding: "3rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
  },
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRightColor: `${theme.palette.primary.main} !important`,
    borderRadius: 25,
    backgroundColor: "#fff",
    padding: "0.5rem 1.5rem",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  buttonGroup: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "3rem",
    marginBottom: "3rem",
  },
}))

const DescriptionContainer = props => {
  const { name, description, layout, setLayout, setPage } = props
  const classes = useStyles()

  const changeLayout = option => {
    setPage(1)
    setLayout(option)
  }

  return (
    <Grid
      item
      container
      classes={{ root: classes.mainContainer }}
      justifyContent="center"
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h4" paragraph gutterBottom align="center">
          {name}
        </Typography>
        <Typography
          variant="body1"
          classes={{ root: classes.description }}
          align="center"
        >
          {description}
        </Typography>
      </Grid>
      <Grid item classes={{ root: classes.buttonGroup }}>
        <ButtonGroup>
          <Button
            onClick={() => changeLayout("list")}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selected]: layout === "list",
              }),
            }}
          >
            <ListIcon color={layout === "list" ? "#fff" : undefined} />
          </Button>
          <Button
            onClick={() => changeLayout("grid")}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selected]: layout === "grid",
              }),
            }}
          >
            <GridIcon color={layout === "grid" ? "#fff" : undefined} />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
