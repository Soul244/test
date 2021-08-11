import PropTypes from 'prop-types'
import { useContext } from 'preact/hooks'

import Translate from '../translate/Translate'
import StarRatings from './StarRating'
import { LocaleContext } from '../translate/locale.context'

function ReviewBox({ review, ...rest }) {
  const lang = useContext(LocaleContext)
  const commentDate = new Date(review.commentDate)

  return (
    <div className="box br-radius-sm" {...rest}>
      <div className="box__header">
        <figure className="box__user-image-container">
          <img
            className="box__user-image"
            src={review.profileImageUrl}
            alt={review.name}
          />
        </figure>
        <div className="box__header-right">
          <p>
            <b>{review.name}</b>
          </p>
          <p className="box__small-text">
            {commentDate.toLocaleDateString(lang)}
          </p>
          <StarRatings rating={review.star} />
        </div>
      </div>
      <p className="mt-10 mb-10">{review.comment}</p>
      <hr />
      <div className="flex">
        <span
          className={`icon icon-lg icon-${review.providerReviewChannel.slug} mr-10`}
        />
        <div className="flex flex-column">
          {lang !== 'tr' && (
            <p className="box__small-text">
              <Translate stringKey="POSTED_ON" />
            </p>
          )}
          <p>{review.providerReviewChannel.channel}</p>
          {lang === 'tr' && (
            <p className="box__small-text">
              <Translate stringKey="POSTED_ON" />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

ReviewBox.propTypes = {}

export default ReviewBox
