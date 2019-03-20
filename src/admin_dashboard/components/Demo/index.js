/* eslint-disable */
import React from 'react'
import { Button } from '@blueprintjs/core'
import ImageUploader from '../ImageUploader'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.storageRef = firebase.storage().ref()
    this.state = {
      url: ''
    }
  }

  deleteImage = () => {
    firebase
      .storage()
      .refFromURL(
        'https://firebasestorage.googleapis.com/v0/b/comingdb.appspot.com/o/images%2F1f009a2a-8e1b-43f6-9994-88aabc2d5bb9.png?alt=media&token=52b4f799-80ea-48fa-b242-708557a666c6'
      )
      .delete()
      .then(success => {
        console.log('success--->', success)
      })
      .catch(error => {
        console.log('error--->', error)
      })
  }

  render() {
    return (
      <div>
        <ImageUploader
          onChange={url =>
            this.setState({
              url
            })
          }
        />
        <Button onClick={this.deleteImage}>Delete</Button>
      </div>
    )
  }
}
