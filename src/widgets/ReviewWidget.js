import PropTypes from 'prop-types'
import { useState, useEffect } from 'preact/hooks'

import Translate from '../translate/Translate'
import { LocaleContext } from '../translate/locale.context'

import OverallRatings from '../components/OverallRatings'
import ReviewBox from '../components/ReviewBox'

import { mockReviewsGoogle, mockReviewsFacebook } from '../mocks'

const allReviews = {
  channel: <Translate stringKey="ALL_REVIEWS" />,
  id: 0,
  source: '',
  status: true,
  slug: 'all-reviews',
  hasReviewButton: true,
}

function ReviewWidget({ providerId, api, hashUrl, lang }) {
  const [reviewChannels, setReviewChannels] = useState([])
  const [reviews, setReviews] = useState({})
  const [activeTab, setActiveTab] = useState(allReviews.slug)
  const [locale] = useState(lang)

  useEffect(() => {
      console.log("Widget js shipped 🚀")
  }, [])

  useEffect(() => {
    fetch(`${api}providers/${providerId}/review-channels`, {
      method: 'GET',
      headers: {
        'X-Access-Token': '39515a834f4a1575aa108db179a5e9f0',
        'X-Consumer-Key': '7a651ab85c5dc325c1b36c022002fe5a',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const newReviewChannels = response.data.map((reviewChannel) => {
          if (
            reviewChannel.slug === 'dugun' ||
            reviewChannel.slug === 'zafaf' ||
            reviewChannel.slug === 'weddinghero'
          ) {
            return {
              ...reviewChannel,
              hasReviewButton: true,
            }
          }
          return reviewChannel
        })
        setReviewChannels([allReviews, ...newReviewChannels])
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [api, providerId])

  useEffect(() => {
    if (!reviews[activeTab]) {
      // TODO: API Request
      if (activeTab === 'google') {
        setReviews({
          ...reviews,
          [activeTab]: mockReviewsGoogle,
        })
      }
      if (activeTab === 'facebook') {
        setReviews({
          ...reviews,
          [activeTab]: mockReviewsFacebook,
        })
      }
    }
  }, [activeTab, reviews, hashUrl])

  const tabsHeaders = () => (
    <div className="tabs">
      {reviewChannels.map((reviewChannel, index) => (
        <div
          className={`tab-item ${
            activeTab === reviewChannel.slug ? 'tab-item--active' : ''
          }`}
          key={`tab-item-${reviewChannel.id}`}
          onClick={() => setActiveTab(reviewChannel.slug)}
        >
          {index !== 0 && (
            <span
              className={`icon icon-md icon-${
                activeTab === reviewChannel.slug
                  ? reviewChannel.slug
                  : `${reviewChannel.slug}-grey`
              } mr-10`}
            />
          )}
          <span className="mr-5">{reviewChannel.channel}</span>
          {reviewChannel.overallRating && (
            <span>
              <b>{reviewChannel.overallRating.toFixed(1)}</b>
            </span>
          )}
        </div>
      ))}
    </div>
  )

  const tabContent = () =>
    reviewChannels.map(
      (reviewChannel) =>
        activeTab === reviewChannel.slug && (
          <>
            <OverallRatings
              overallRating={reviewChannel.overallRating}
              totalReviews={reviewChannel.totalReviews}
              hasReviewButton={reviewChannel.hasReviewButton}
              key={reviewChannel.slug}
            />
            {reviews[reviewChannel.slug] &&
              reviews[reviewChannel.slug].reviews.map((review) => (
                <ReviewBox key={review.id} review={review} />
              ))}
          </>
        ),
    )

  return (
    <LocaleContext.Provider value={locale}>
      <div>
        <h2>
          <Translate stringKey="TITLE" />
        </h2>
        {tabsHeaders()}
        {tabContent()}
        <a className="show-more-button">
          <span className="icon icon-lg icon-show-more mb-5" />
          <p>
            <b>
              <Translate stringKey="SHOW_MORE" />
            </b>
          </p>
        </a>
      </div>
    </LocaleContext.Provider>
  )
}

ReviewWidget.propTypes = {}

export default ReviewWidget
