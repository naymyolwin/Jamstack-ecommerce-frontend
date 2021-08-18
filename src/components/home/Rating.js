import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import fullStar from "../../images/full-star.svg"
import halfStar from "../../images/half-star.svg"
import emptyStar from "../../images/empty-star.svg"

const useStyles = makeStyles(theme => ({
  size: {
    height: "2rem",
    width: "2rem",
  },
}))

const Rating = ({ number }) => {
  const clasess = useStyles()

  const diff = 5 - Math.ceil(number)

  return (
    <div>
      {[...Array(Math.floor(number))].map((e, i) => (
        <img src={fullStar} alt="full star" key={i} className={clasess.size} />
      ))}
      {number % 1 !== 0 ? (
        <img src={halfStar} alt="half star" className={clasess.size} />
      ) : null}
      {[...Array(diff)].map((e, i) => (
        <img
          src={emptyStar}
          alt="empty star"
          key={`${i}-empty`}
          className={clasess.size}
        />
      ))}
    </div>
  )
}

export default Rating
