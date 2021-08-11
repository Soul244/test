import habitat from 'preact-habitat'

import ReviewWidget from './widgets/ReviewWidget'
import FooterReviewWidget from './widgets/FooterReviewWidget'
import './style.css'

let reviewWidget = habitat(ReviewWidget)
let footerReviewWidget = habitat(FooterReviewWidget)

reviewWidget.render({
  selector: '#dugun-review-widget',
  defaultProps: {
    lang: 'tr',
    providerId: null,
    api: null,
    hashUrl: null,
  },
  clean: true,
})

footerReviewWidget.render({
  selector: '#dugun-footer-review-widget',
  defaultProps: {
    lang: 'tr',
    providerId: null,
    api: null,
    hashUrl: null,
  },
  clean: true,
})
