import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Cell, Column, Table } from '@blueprintjs/table'

export default function GameList({ data }) {
  function commonCellRenderer(field, rowIndex) {
    return <Cell>{data[rowIndex][field]}</Cell>
  }

  function arrayCellRenderer(field, rowIndex) {
    return <Cell>{data[rowIndex][field].join(',')}</Cell>
  }

  function editActionCellRenderer(rowIndex) {
    return (
      <Cell>
        <React.Fragment>
          <span>
            <Link to={`/edit/${data[rowIndex].id}`}>Edit</Link>
          </span>
        </React.Fragment>
      </Cell>
    )
  }

  const commonFields = ['name', 'releaseDate', 'price', 'developer', 'distributor', 'ageRating']
  const arrayFields = ['categories', 'supportedPlatforms']

  return (
    <Table numRows={data.length}>
      {commonFields.map(field => {
        return (
          <Column key={field} name={field} cellRenderer={commonCellRenderer.bind(this, field)} />
        )
      })}
      {arrayFields.map(field => {
        return (
          <Column key={field} name={field} cellRenderer={arrayCellRenderer.bind(this, field)} />
        )
      })}
      <Column name="action" cellRenderer={editActionCellRenderer} />
    </Table>
  )
}

GameList.propTypes = {
  data: PropTypes.array
}

GameList.defaultProps = {
  data: []
}
