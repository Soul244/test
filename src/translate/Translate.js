import PropTypes from 'prop-types'
import { useState, useContext } from 'preact/hooks'
import { LocaleContext } from './locale.context'

import en from '../assets/locales/en.json'
import tr from '../assets/locales/tr.json'

function Translate({ stringKey }) {
  const [langs] = useState({
    en,
    tr,
  })
  const lang = useContext(LocaleContext)

  return langs[lang][stringKey]
}

Translate.propTypes = {
  stringKey: PropTypes.string.isRequired,
}

export default Translate
