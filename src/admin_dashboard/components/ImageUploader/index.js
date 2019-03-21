import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import { FileInput } from '@blueprintjs/core'

import toaster from '../../../common/util/toaster'
import OverlayLoading from '../../../common/components/OverlayLoading'

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props)
    this.storageRef = firebase.storage().ref()
    this.state = {
      loading: false
    }
  }

  fileChangeHandler = event => {
    const { onChange } = this.props
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
        toaster.success('Upload Success')
        this.setState({
          loading: false
        })
      })
      .catch(error => {
        toaster.error(`Upload Failed: ${error.message}`)
        this.setState({
          loading: false
        })
      })
  }

  render() {
    const { loading } = this.state
    const { value } = this.props
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

ImageUploader.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

ImageUploader.defaultProps = {
  onChange: function anonymous() {},
  value: 'Choose file...'
}
