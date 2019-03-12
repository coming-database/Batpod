const gameCnTranslation = require('../i18n/game/cn.json')

const langCodes = {
  en: 'en',
  cn: 'cn'
}

const languages = {
  game: {
    [langCodes.en]: null,
    [langCodes.cn]: gameCnTranslation
  },
  admin: {}
}

module.exports = {
  languages,
  langCodes
}
