import React from "react"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"

import filter from "../../images/filter.svg"
import close from "../../images/close.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "1rem 0",
  },
  checkbox: {
    color: "#fff",
  },
  optionContainer: {
    [theme.breakpoints.down("xs")]: {
      "& > :not(:last-child)": {
        marginBottom: "2rem",
      },
    },
  },
}))

const Filter = props => {
  const { setOption, filterOptions, setFilterOptions } = props
  const classes = useStyles()

  const handleFilter = (option, i) => {
    const newFilter = { ...filterOptions }
    newFilter[option][i].checked = !newFilter[option][i].checked
    setFilterOptions(newFilter)
  }

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={filter} alt="filter" />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid
          container
          justifyContent="space-around"
          classes={{ root: classes.optionContainer }}
        >
          {Object.keys(filterOptions)
            .filter(option => filterOptions[option] !== null)
            .map(option => (
              <Grid item key={option}>
                <Grid container direction="column">
                  <Grid item>
                    <Chip label={option} />
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <FormGroup>
                        {filterOptions[option].map(({ label, checked }, i) => (
                          <FormControlLabel
                            key={label}
                            label={label}
                            classes={{ label: classes.checkbox }}
                            control={
                              <Checkbox
                                onChange={() => handleFilter(option, i)}
                                checked={checked}
                                name={label}
                                classes={{ root: classes.checkbox }}
                              />
                            }
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={close} alt="close" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Filter
