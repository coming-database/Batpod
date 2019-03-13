import React from 'react'
import PropTypes from 'prop-types'
import { Button, MenuItem } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

export default class CommonSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  render() {
    const { query } = this.state
    const { items = [], value = 'MATURE' } = this.props
    return (
      <Select
        items={items.filter(item => item.toLowerCase().includes(query))}
        itemRenderer={item => {
          return <MenuItem active={value === item} key={item} text={item.toString()} />
        }}
        onItemSelect={item => {
          console.log(item)
          return item
        }}
        query={query}
        onQueryChange={queryStr =>
          this.setState({
            query: queryStr
          })
        }
      >
        <Button>{value}</Button>
      </Select>
    )
  }
}

CommonSelect.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string
}

CommonSelect.defaultProps = {
  items: [],
  value: 'MATURE'
}
