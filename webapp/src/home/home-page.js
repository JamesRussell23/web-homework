import React, { Fragment } from 'react'
import TransactionsList from '../components/transactionsList'

export function Home () {
  return (
    <Fragment>
      {/* <Link to='/another'>Another route</Link> */}
      <div>Ready, steady, go!</div>
      <TransactionsList />
    </Fragment>
  )
}
