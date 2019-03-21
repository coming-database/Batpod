import React from 'react'
import { withRouter } from 'react-router-dom'

import GameForm from '../GameForm'
import withFirebaseFetch from '../../../common/hocs/withFirebaseFetch'

@withFirebaseFetch({
  query: (db, props) => {
    const {
      match: {
        params: { id: gameId }
      }
    } = props
    return db
      .collection('games')
      .doc(gameId)
      .get()
      .then(doc => doc.data())
      .catch(error => error)
  }
})
@withRouter
export default class GameEditorContainer extends React.Component {
  render() {
    const {
      firebaseFetch: { loading, error, data }
    } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>{error.toString()}</div>
    }

    return <GameForm editMode game={data} />
  }
}
