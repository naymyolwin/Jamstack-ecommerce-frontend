import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import FunctionContainer from "./FunctionContainer"
import DescriptionContainer from "./DescriptionContainer"

const useStyles = makeStyles(theme => ({
  toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "auto",
    marginBottom: "5rem",
  },
}))

const DynamicToolbar = props => {
  const {
    filterOptions,
    setFilterOptions,
    name,
    description,
    layout,
    setLayout,
    sortOptions,
    setSortOptions,
  } = props
  const classes = useStyles()
  const [option, setOption] = useState(null)
  return (
    <Grid item container direction="column" classes={{ root: classes.toolbar }}>
      <FunctionContainer
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        option={option}
        setOption={setOption}
        sortOptions={sortOptions}
        setSortOptions={setSortOptions}
      />
      {option === null && (
        <DescriptionContainer
          name={name}
          description={description}
          layout={layout}
          setLayout={setLayout}
        />
      )}
    </Grid>
  )
}

export default DynamicToolbar
