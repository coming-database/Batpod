import React from 'react'
import { set } from 'mobx'
import {
  FormGroup,
  ButtonGroup,
  InputGroup,
  Card,
  Elevation,
  Button,
  Intent,
  Tab,
  Tabs,
  TextArea,
  Tag,
  Switch
} from '@blueprintjs/core'
import { observer } from 'mobx-react'

import withMobx from '../../../common/hocs/withMobx'
import GameStore from '../../stores/game'
import ImageUploader from '../ImageUploader'
import OverlayLoading from '../../../common/components/OverlayLoading'
import style from './index.less'

const TABS = {
  BASIC: 'BASIC',
  OTHER: 'OTHER',
  PLATFORMS: 'PLATFORMS'
}

const FilledTag = ({ filledCount, totalCount }) => {
  return (
    <Tag intent={filledCount === totalCount ? Intent.SUCCESS : Intent.DANGER}>
      {filledCount} / {totalCount}
    </Tag>
  )
}

@withMobx(new GameStore())
@observer
export default class GameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: TABS.BASIC
    }
  }
  inputChangeHandler(property, e) {
    const { store } = this.props
    set(store, property, e.target.checked || e.target.value)
  }
  onlineSwitchChangeHandler = e => {
    const { store } = this.props
    set(store, 'online', e.target.checked)
  }
  coverImageChangeHandler = url => {
    const {
      store: { updateCoverUrl }
    } = this.props
    updateCoverUrl(url)
  }
  render() {
    const { store } = this.props
    const { activeTab } = this.state

    const {
      online,
      name,
      coverUrl,
      price,
      region,
      releaseDate,
      basicInfoFilledCondition,

      developer,
      distributor,
      categories,
      ageRating,
      otherInfoFilledCondition,

      create
    } = store
    return (
      <div>
        <OverlayLoading />
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
              title={
                <span>
                  <span>Basic </span>
                  <FilledTag
                    filledCount={basicInfoFilledCondition.filledCount}
                    totalCount={basicInfoFilledCondition.totalCount}
                  />
                </span>
              }
              panel={
                <div className={style.tabContent}>
                  <FormGroup label="Name" labelFor="name-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'name')}
                      value={name}
                      id="name-input"
                    />
                  </FormGroup>
                  <FormGroup label="Cover Image">
                    <ImageUploader onChange={this.coverImageChangeHandler} value={coverUrl} />
                  </FormGroup>
                  <FormGroup label="Region" labelFor="region-input">
                    <InputGroup value={region} id="region-input" disabled />
                  </FormGroup>
                  <FormGroup label="Price" labelFor="price-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'price')}
                      value={price}
                      id="price-input"
                    />
                  </FormGroup>
                  <FormGroup label="Release Date" labelFor="release-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'releaseDate')}
                      value={releaseDate}
                      id="release-input"
                    />
                  </FormGroup>
                </div>
              }
            />
            <Tab
              id={TABS.OTHER}
              title={
                <span>
                  <span>Other</span>
                  <FilledTag
                    filledCount={otherInfoFilledCondition.filledCount}
                    totalCount={otherInfoFilledCondition.totalCount}
                  />
                </span>
              }
              panel={
                <div className={style.tabContent}>
                  <FormGroup label="Developer" labelFor="developer-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'developer')}
                      value={developer}
                      id="developer-input"
                    />
                  </FormGroup>
                  <FormGroup label="Distributor" labelFor="distributor-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'distributor')}
                      value={distributor}
                      id="distributor-input"
                    />
                  </FormGroup>
                  <FormGroup label="Category" labelFor="category-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'categories')}
                      value={categories}
                      id="category-input"
                    />
                  </FormGroup>
                  <FormGroup label="Age Rating" labelFor="age-input">
                    <InputGroup
                      onChange={this.inputChangeHandler.bind(this, 'ageRating')}
                      value={ageRating}
                      id="age-input"
                    />
                  </FormGroup>
                </div>
              }
            />
            <Tab
              id={TABS.PLATFORMS}
              title={<span>Platforms</span>}
              panel={
                <div>
                  <TextArea
                    large={true}
                    intent={Intent.PRIMARY}
                    className={style.platforms}
                    onChange={this.inputChangeHandler.bind(this, 'platforms')}
                    placeholder={JSON.stringify(
                      {
                        steam: {
                          sku: '',
                          url: ''
                        }
                      },
                      null,
                      4
                    )}
                  />
                </div>
              }
            />
          </Tabs>
          <div className={style.actionGroup}>
            <Switch
              onChange={this.onlineSwitchChangeHandler}
              checked={online}
              label="Online"
              className={style.onlineSwitch}
            />
            <ButtonGroup>
              <Button icon="trash" intent={Intent.DANGER}>
                Delete
              </Button>
              <Button onClick={create} icon="saved" intent={Intent.PRIMARY}>
                Save
              </Button>
            </ButtonGroup>
          </div>
        </Card>
      </div>
    )
  }
}
