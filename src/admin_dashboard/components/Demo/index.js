/* eslint-disable */
import React from 'react'
import withFirebaseFetch from '../../../common/hocs/withFirebaseFetch'

@withFirebaseFetch({
  query: db => db.collection('games').get()
})
export default class Demo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.firebaseFetch)
    return <div>Hello</div>
  }
}
