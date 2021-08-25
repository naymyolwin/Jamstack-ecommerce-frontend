import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

import filter from "../../images/filter.svg"
import sort from "../../images/sort.svg"
import Sort from "./Sort"
import Filter from "./Filter"

const useStyles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "6rem",
    height: "auto",
    borderRadius: ({ option }) => (option !== null ? "10px" : "10px 10px 0 0"),
  },
}))

const FunctionContainer = props => {
  const { filterOptions, option, setOption } = props
  const classes = useStyles({ option })

  const content = () => {
    switch (option) {
      case "sort":
        return <Sort setOption={setOption} />

      case "filter":
        return <Filter setOption={setOption} filterOptions={filterOptions} />

      default:
        const items = [
          { icon: filter, alt: "filter" },
          { icon: sort, alt: "sort" },
        ]
        return (
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
          >
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton onClick={() => setOption(item.alt)}>
                  <img src={item.icon} alt={item.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )
    }
  }

  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionContainer
