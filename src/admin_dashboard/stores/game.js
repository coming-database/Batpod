import { observable, computed, action } from 'mobx'
import { Toaster, Intent } from '@blueprintjs/core'

import GameSchema from '../../common/schemas/game'
import REGIONS from '../../common/constants/regions'

function checkFilledCount(values) {
  return values.filter(val => !!val).length
}

export default class Game {
  @observable loading = false

  @observable online = false

  @observable name = ''

  @observable coverUrl = ''

  @observable price = ''

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

  @observable platforms = {}

  @computed
  get supportedPlatforms() {
    return Object.keys(this.platforms)
  }

  constructor() {
    this.db = firebase.firestore()
    this.uploadedCoverImageUrls = []
  }

  @action
  updateCoverUrl = url => {
    if (this.coverUrl) {
      this.uploadedCoverImageUrls.push(this.coverUrl)
    }
    this.coverUrl = url
  }

  @action
  create = () => {
    const game = GameSchema({
      online: this.online,
      name: this.name,
      coverUrl: this.coverUrl,
      region: this.region,
      releaseDate: this.releaseDate,
      developer: this.developer,
      distributor: this.distributor,
      categories: this.categories.split(','),
      ageRating: this.ageRating,
      platforms: this.platforms,
      supportedPlatforms: this.supportedPlatforms
    })

    this.loading = true
    console.log(game)
    this.db
      .collection('games')
      .add(game)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
        this.loading = false
        Toaster.create().show({
          intent: Intent.SUCCESS,
          message: 'Create Success'
        })
      })
      .catch(error => {
        console.error('Error adding document: ', error)
        this.loading = false
        Toaster.create().show({
          intent: Intent.DANGER,
          message: `Create Falied: ${error.toString()}`
        })
      })
  }

  @action
  edit = () => {}

  @action
  deleteGame = () => {}
}
