import React from 'react'
import { Alert } from '@blueprintjs/core'

// import GameForm from '../GameForm'
import GameList from '../GameList'
import PageLoading from '../../../common/components/PageLoading'

export default class GameListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: null,
      error: null
    }
    this.db = firebase.firestore()
  }

  componentDidMount() {
    this.query()
  }

  query = () => {
    this.setState({
      loading: true
    })
    this.db
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
        this.setState({
          loading: false,
          data
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        })
      })
  }

  retry = () => {
    this.setState(
      {
        error: null
      },
      this.query
    )
  }

  render() {
    const { loading, error, data } = this.state
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
          onConfirm={this.retry}
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
