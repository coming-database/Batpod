import React from 'react'
import { withRouter } from 'react-router-dom'

export default function withFirebaseFetch({ query }) {
  return function anonymous(ComposedComponent) {
    class AnonymousClass extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          loading: true,
          error: null,
          data: null
        }
        this.db = firebase.firestore()
      }

      componentDidMount() {
        this.fetch()
      }

      fetch = () => {
        this.setState({
          loading: true,
          error: null,
          data: null
        })

        query(this.db, this.props)
          .then(data => {
            this.setState({
              loading: false,
              error: null,
              data
            })
          })
          .catch(error => {
            this.setState({
              loading: false,
              error,
              data: null
            })
          })
      }

      render() {
        return <ComposedComponent refetch={this.fetch} firebaseFetch={this.state} />
      }
    }
    return withRouter(AnonymousClass)
  }
}
