/* eslint-disable */
import { Schema, Types } from 'schemaor'

/* prettier-ignore */
const GameSchema = Schema({
  online: Types().boolean(),
  name: Types().string().required(),
  coverUrl: '',
  region: Types().string().required(),
  releaseDate: '',
  developer: '',
  distributor: '',
  categories: Types().array(),
  ageRating: '',
  platforms: Types().object(),
  supportedPlatforms: Types().array()
})

export default GameSchema
