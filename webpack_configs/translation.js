const cnTranslation = require('../i18n/cn.json')

const langCodes = {
  en: 'en',
  cn: 'cn'
}

const languages = {
  [langCodes.en]: null,
  [langCodes.cn]: cnTranslation
}

module.exports = {
  languages,
  langCodes
}
