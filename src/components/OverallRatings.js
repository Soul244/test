import PropTypes from 'prop-types'
import StarRatings from './StarRating'
import Translate from '../translate/Translate'

function OverallRatings({ overallRating, totalReviews, hasReviewButton }) {
  return (
    <div className="box flex flex-column flex-align-center br-radius-sm">
      <p className="mb-10">
        <b>
          <Translate stringKey="OVERALL_RATING" />
        </b>
      </p>
      {overallRating && (
        <div className="flex mb-10">
          <StarRatings rating={overallRating} />
          <b className="ml-5">{overallRating.toFixed(2)}</b>
        </div>
      )}
      <p className="mb-10">
        {totalReviews} <Translate stringKey="REVIEWS" />
      </p>
      {hasReviewButton && (
        <button className="btn btn-primary">
          <Translate stringKey="WRITE_A_REVIEW" />
        </button>
      )}
    </div>
  )
}

OverallRatings.propTypes = {}

export default OverallRatings
