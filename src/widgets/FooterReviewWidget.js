import { useState } from 'preact/hooks'

import Translate from '../translate/Translate'
import { LocaleContext } from '../translate/locale.context'
import StarRatings from '../components/StarRating'

function FooterReviewWidget({ lang }) {
  const [locale] = useState(lang)
  return (
    <LocaleContext.Provider value={locale}>
      <div className="box box-shadow-md br-radius-md text-align-center">
        <h2 className="mb-10">
          <Translate stringKey="RATING" />
        </h2>
        <div className="flex flex-align-center flex-justify-center mb-10">
          <p className="mr-10" style="font-size: 18px">
            <b>4.3</b>
          </p>
          <StarRatings rating={4.3} />
        </div>
        <a href="https://www.google.com" target="_blank" className="link">
          <Translate stringKey="FOOTER_SUB_TEXT_HEAD" />
          {` 1.493 `}
          <Translate stringKey="FOOTER_SUB_TEXT_LAST" />
        </a>
      </div>
    </LocaleContext.Provider>
  )
}

export default FooterReviewWidget
