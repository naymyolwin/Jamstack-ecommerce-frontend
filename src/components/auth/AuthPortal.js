import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Login from "./Login"
import SignUp from "./SignUp"
import Complete from "./Complete"
import { UserContext } from "../../contexts"

const useStyles = makeStyles(theme => ({
  paper: {
    border: `2rem solid ${theme.palette.secondary.main}`,
    width: "50rem",
    height: "40rem",
    borderRadius: 0,
  },
  inner: {
    height: "40rem",
    width: "100%",
    border: `2rem solid ${theme.palette.primary.main}`,
  },
  container: {
    marginBottom: "8rem",
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}))

const AuthPortal = () => {
  const classes = useStyles()

  const [selectedStep, setSelectedStep] = useState(0)
  const { user, dispatchUser } = useContext(UserContext)

  const steps = [
    { component: Login, label: "Login" },
    { component: SignUp, label: "Sign Up" },
    { component: Complete, label: "Complete" },
  ]

  return (
    <Grid
      container
      justifyContent="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <Paper elevation={6} classes={{ root: classes.paper }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            classes={{ root: classes.inner }}
          >
            {steps.map((Step, i) =>
              selectedStep === i ? (
                <Step.component
                  setSelectedStep={setSelectedStep}
                  steps={steps}
                  key={Step.label}
                  user={user}
                  dispatchUser={dispatchUser}
                />
              ) : null
            )}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AuthPortal
