import React from 'react'
import { Alert } from '@blueprintjs/core'
import { Cell, Column, Table } from '@blueprintjs/table'

// import GameForm from '../GameForm'
import PageLoading from '../../../common/components/PageLoading'

export default class GameList extends React.Component {
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
        const data = {}
        querySnapshot.forEach(doc => {
          data[doc.id] = doc.data()
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
    const { loading, data, error } = this.state
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
        <Table numRows={data.length}>
          {/* <Column name="Dollars" cellRenderer={cellRenderer} /> */}
        </Table>
      </div>
    )
  }
}
