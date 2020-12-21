import React from 'react'
import TransactionsList from '../components/transactionsList'
import { css } from '@emotion/react'

export function Home () {
  return (
    <div
      css={css`
    background-color: indianred;
    min-height: 500px;
    width: 500px;
    margin: 40px auto;
    color: white;
    text-align: center
  `}
    >
      {/* <Link to='/another'>Another route</Link> */}
      <h1>List of Transactions</h1>
      <TransactionsList />
    </div>
  )
}
