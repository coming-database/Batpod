import React from 'react'
import uuidv4 from 'uuid/v4'
import { FileInput, Toaster, Intent } from '@blueprintjs/core'

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props)
    this.storageRef = firebase.storage().ref()
  }
  fileChangeHandler = event => {
    const selectedFile = event.target.files[0]
    const ext = selectedFile.name.split('.')[1]
    const uploadTask = this.storageRef.child(`images/${uuidv4()}.${ext}`).put(selectedFile)
    uploadTask
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        Toaster.create().show({
          intent: Intent.SUCCESS,
          message: 'Upload Success'
        })
      })
      .catch(error => {
        Toaster.create().show({
          intent: Intent.DANGER,
          message: `Upload Failed: ${error.message}`
        })
      })
  }
  render() {
    return <FileInput text="Choose file..." onInputChange={this.fileChangeHandler} />
  }
}
