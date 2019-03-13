import React from 'react'
import {
  FormGroup,
  ButtonGroup,
  InputGroup,
  Card,
  Elevation,
  Button,
  Intent,
  FileInput,
  Divider,
  Switch,
  Tab,
  Tabs,
  Popover
} from '@blueprintjs/core'
import { inject, observer } from 'mobx-react'

import style from './index.less'

const TABS = {
  BASIC: 'BASIC',
  OTHER: 'OTHER',
  PLATFORMS: 'PLATFORMS'
}

@observer
export default class GameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: TABS.BASIC
    }
  }
  render() {
    const { activeTab } = this.state
    return (
      <div>
        <Card className={style.gameForm} elevation={Elevation.TWO}>
          <Tabs
            className={style.tabs}
            animate
            selectedTabId={activeTab}
            onChange={tabId =>
              this.setState({
                activeTab: tabId
              })
            }
          >
            <Tab
              id={TABS.BASIC}
              title="Basic"
              panel={
                <div className={style.tabContent}>
                  <FormGroup label="Name" labelFor="name-input">
                    <InputGroup id="name-input" />
                  </FormGroup>
                  <FormGroup label="Cover Image" labelFor="cover-upload">
                    <FileInput id="cover-upload" text="Choose file..." />
                  </FormGroup>
                  <FormGroup label="Price" labelFor="price-input">
                    <InputGroup id="price-input" text="Choose file..." />
                  </FormGroup>
                  <FormGroup label="Release Date" labelFor="release-input">
                    <InputGroup id="release-input" />
                  </FormGroup>
                </div>
              }
            />
            <Tab
              id={TABS.OTHER}
              title="Other"
              panel={
                <div className={style.tabContent}>
                  <FormGroup label="Developer" labelFor="developer-input">
                    <InputGroup id="developer-input" />
                  </FormGroup>
                  <FormGroup label="Category" labelFor="category  -input">
                    <InputGroup id="category  -input" />
                  </FormGroup>
                  <FormGroup label="Publisher" labelFor="publisher-input">
                    <InputGroup id="publisher-input" />
                  </FormGroup>
                  <FormGroup label="Age Rating" labelFor="age-input">
                    <InputGroup id="age-input" />
                  </FormGroup>
                </div>
              }
            />
            <Tab id={TABS.PLATFORMS} title="Platforms" />
          </Tabs>
          <div>
            <ButtonGroup>
              <Button icon="tick-circle" intent={Intent.PRIMARY}>
                Go Online
              </Button>
              <Button icon="delete" intent={Intent.PRIMARY}>
                Go Offline
              </Button>
              <Button icon="trash" intent={Intent.DANGER}>
                Delete
              </Button>
              <Button icon="saved" intent={Intent.PRIMARY}>
                Save
              </Button>
            </ButtonGroup>
          </div>
        </Card>
      </div>
    )
  }
}
