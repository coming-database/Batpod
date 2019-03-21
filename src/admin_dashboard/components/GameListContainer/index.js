import React from 'react'
import { Alert } from '@blueprintjs/core'

import GameList from '../GameList'
import PageLoading from '../../../common/components/PageLoading'
import withFirebaseFetch from '../../../common/hocs/withFirebaseFetch'

@withFirebaseFetch({
  query: db => {
    return db
      .collection('games')
      .get()
      .then(querySnapshot => {
        const data = []
        querySnapshot.forEach(doc => {
          data.push({
            id: doc.id,
            ...doc.data()
          })
        })
        return data
      })
      .catch(error => error)
  }
})
export default class GameListContainer extends React.Component {
  render() {
    const {
      firebaseFetch: { loading, error, data, refetch }
    } = this.props

    if (loading) {
      return <PageLoading />
    }

    if (error) {
      return (
        <Alert
          icon="error"
          canEscapeKeyCancel={false}
          canOutsideClickCancel={false}
          confirmButtonText="Retry"
          onConfirm={refetch}
          isOpen
        >
          <p>Get Data Failed: {error.toString()}</p>
        </Alert>
      )
    }

    return (
      <div>
        <GameList data={data} />
      </div>
    )
  }
}
