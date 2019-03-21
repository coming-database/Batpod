import { observable, computed, action } from 'mobx'

import toaster from '../../common/util/toaster'
import GameSchema from '../../common/schemas/game'
import REGIONS from '../../common/constants/regions'

function checkFilledCount(values) {
  return values.filter(val => !!val).length
}

export default class Game {
  @observable loading = false

  @observable online = false

  @observable id = ''

  @observable name = ''

  @observable coverUrl = ''

  @observable price = -1

  @observable region = REGIONS.US

  @observable releaseDate = ''

  @computed
  get basicInfoFields() {
    return [this.name, this.coverUrl, this.price, this.region, this.releaseDate]
  }

  @computed
  get basicInfoFilledCondition() {
    return {
      filledCount: checkFilledCount(this.basicInfoFields),
      totalCount: this.basicInfoFields.length
    }
  }

  @observable developer = ''

  @observable distributor = ''

  @observable categories = ''

  @observable ageRating = ''

  @computed
  get otherInfoFields() {
    return [this.developer, this.distributor, this.categories, this.ageRating]
  }

  @computed
  get otherInfoFilledCondition() {
    return {
      filledCount: checkFilledCount(this.otherInfoFields),
      totalCount: this.otherInfoFields.length
    }
  }

  @observable platforms = '{}'

  @computed
  get supportedPlatforms() {
    return Object.keys(JSON.parse(this.platforms))
  }

  constructor(game) {
    this.db = firebase.firestore()
    console.log(game)
    if (game) {
      this.id = game.id
      this.name = game.name
      this.online = game.online
      this.coverUrl = game.coverUrl
      this.ageRating = game.ageRating
      this.developer = game.developer
      this.distributor = game.distributor
      this.price = game.price
      this.region = game.region
      this.releaseDate = game.releaseDate
      this.platforms = JSON.stringify(game.platforms, null, 2)
      this.categories = game.categories.join(',')
    }
  }

  @action
  updateCoverUrl = url => {
    if (this.coverUrl) {
      firebase
        .storage()
        .refFromURL(this.coverUrl)
        .delete()
        .then()
        .catch(error => {
          toaster.error(`Delete Uploaded Image Failed: ${error.toString()}`)
        })
    }
    this.coverUrl = url
  }

  assembleData = () => {
    const game = GameSchema({
      online: this.online,
      name: this.name,
      price: this.price,
      coverUrl: this.coverUrl,
      region: this.region,
      releaseDate: this.releaseDate,
      developer: this.developer,
      distributor: this.distributor,
      categories: this.categories.split(','),
      ageRating: this.ageRating,
      platforms: JSON.parse(this.platforms),
      supportedPlatforms: this.supportedPlatforms
    })
    console.log(game)
    return game
  }

  @action
  createSave = () => {
    const game = this.assembleData()

    this.loading = true
    this.db
      .collection('games')
      .add(game)
      .then(() => {
        this.loading = false
        toaster.success('Create Success')
      })
      .catch(error => {
        this.loading = false
        toaster.error(`Create Falied: ${error.toString()}`)
      })
  }

  @action
  editSave = () => {
    const game = this.assembleData()

    this.loading = true
    firebase
      .database()
      .ref(`games/${this.id}`)
      .set(game)
      .then(() => {
        this.loading = false
        toaster.success('Edit Success')
      })
      .catch(error => {
        this.loading = false
        toaster.error(`Create Falied: ${error.toString()}`)
      })
  }

  @action
  deleteGame = () => {
    this.loading = true
    firebase
      .database()
      .ref(`games/${this.id}`)
      .delete()
      .then(() => {
        this.loading = false
        toaster.success('Delete Success')
      })
      .catch(error => {
        this.loading = false
        toaster.error(`Delete Falied: ${error.toString()}`)
      })
  }
}
