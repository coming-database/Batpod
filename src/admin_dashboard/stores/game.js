import { observable, computed, action } from 'mobx'
import REGIONS from '../../common/constants/regions'

function checkFilledCount(values) {
  return values.filter(val => !!val).length
}

export default class Game {
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

  constructor() {
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
  createGame = () => {}

  @action
  editGame = () => {}
}
