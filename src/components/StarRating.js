import React from 'react'
import StarRatings from 'react-star-ratings'

function StarRating(props) {
  return (
    <StarRatings
      starDimension="18px"
      starSpacing="0px"
      starRatedColor="#FDC302"
      name="rating"
      {...props}
    />
  )
}

export default StarRating
