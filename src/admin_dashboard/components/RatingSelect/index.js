import React from 'react'

import Select from '../../../common/components/Select'
import ratings from '../../../common/constants/ESRB_ratings'

export default function RatingSelect() {
  return <Select items={Object.values(ratings)} />
}
