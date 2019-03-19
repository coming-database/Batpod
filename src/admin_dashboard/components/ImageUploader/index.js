import React from 'react'
import uuidv4 from 'uuid/v4'

import OverlayLoading from '../../../common/components/OverlayLoading'
import { FileInput, Toaster, Intent } from '@blueprintjs/core'

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props)
    this.storageRef = firebase.storage().ref()
    this.state = {
      loading: false
    }
  }
  fileChangeHandler = event => {
    const { onChange = new Function() } = this.props
    const selectedFile = event.target.files[0]
    const ext = selectedFile.name.split('.')[1]
    const uploadTask = this.storageRef.child(`images/${uuidv4()}.${ext}`).put(selectedFile)
    this.setState({
      loading: true
    })
    uploadTask
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        onChange(url)
        Toaster.create().show({
          intent: Intent.SUCCESS,
          message: 'Upload Success'
        })
        this.setState({
          loading: false
        })
      })
      .catch(error => {
        Toaster.create().show({
          intent: Intent.DANGER,
          message: `Upload Failed: ${error.message}`
        })
        this.setState({
          loading: false
        })
      })
  }
  render() {
    const { loading } = this.state
    const { value = 'Choose file...' } = this.props
    return (
      <div>
        <OverlayLoading />
        <FileInput
          disabled={loading}
          text={loading ? 'Uploading...' : value}
          onInputChange={this.fileChangeHandler}
        />
      </div>
    )
  }
}
