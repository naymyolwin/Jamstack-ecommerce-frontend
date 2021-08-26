import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  swatch: {
    border: "3px solid #fff",
    height: "3rem",
    width: "3rem",
    minWidth: 0,
    borderRadius: 50,
  },
  swatchesContainer: {
    marginTop: "0.5rem",
    "&:not(:first-child)": {
      marginLeft: "-0.5rem",
    },
  },
  selected: {
    borderColor: theme.palette.secondary.main,
  },
}))

const Swatches = ({ colors, selectedColor, setSelectedColor }) => {
  const classes = useStyles()
  return (
    <Grid item container>
      {colors.sort().map(color => (
        <Grid item key={color} classes={{ root: classes.swatchesContainer }}>
          <Button
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            classes={{
              root: clsx(classes.swatch, {
                [classes.selected]: color === selectedColor,
              }),
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Swatches