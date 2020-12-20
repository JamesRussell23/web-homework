import React from 'react'
import PropTypes from 'prop-types'

// functionality for each individual transaction
const Transaction = props => {
  const items = props.items
  const list = items.map(item => {
    return (
      <div key={item.key}>
        <p>
          <input
            id={item.key}
            onChange={e => {
              props.setUpdate(e.target.value, item.key)
            }}
            type='text'
            value={item.text}
          />
          <br />
          <span>
            <button onClick={() => props.deleteTransaction(item.key)}>Delete</button>
          </span>
        </p>
      </div>
    )
  })
  return <div>{list}</div>
}

Transaction.propTypes = {
  items: PropTypes.array.isRequired,
  setUpdate: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired
}

export default Transaction
