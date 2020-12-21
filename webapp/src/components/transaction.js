import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

// functionality for each individual transaction
const Transaction = props => {
  const items = props.items
  const list = items.map(item => {
    return (
      <div key={item.key}>
        <p>
          <input
            css={css`
            width: 200px;
            height: 25px;
            margin: 20px auto;
            border-radius: 5px;
            text-align: center;
            font-family: Arial;
            `}
            id={item.key}
            onChange={e => {
              props.setUpdate(e.target.value, item.key)
            }}
            type='text'
            value={item.text}
          />
          <br />
          <span>
            <button
              css={css`
              border-radius: 5px;
              margin: 5px auto;
              font-family: Impact;
              &:hover {
                background-color: orangered;
              }
              `}
              onClick={() => props.deleteTransaction(item.key)}>Delete</button>
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
