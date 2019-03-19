import React from 'react'

// import GameForm from '../GameForm'
import PageLoading from '../../../common/components/PageLoading'

export default class GameList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.db = firebase.firestore()
    this.query()
  }

  query = () => {
    this.db
      .collection('games')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
        })
      })
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <PageLoading />
    }
    return <div />
  }
}
