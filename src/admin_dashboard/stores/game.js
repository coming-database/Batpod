import { observable, computed, action } from 'mobx'
import REGIONS from '../../common/constants/regions'

function checkFilledCount(values) {
  return values.filter(val => !!val).length
}

export default class Game {
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
    this.db
      .collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  @action
  edit = () => {}

  @action
  deleteGame = () => {}
}
