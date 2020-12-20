import React from 'react'
import Transaction from './transaction'

class TransactionsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    // bind value to constructor due to method losing its context
    this.handleInput = this.handleInput.bind(this)
    this.addTransaction = this.addTransaction.bind(this)
    this.deleteTransaction = this.deleteTransaction.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }

  // change state according to input
  handleInput (e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  // add transaction via "Enter" and onClick function
  addTransaction (e) {
    // prevent from elements default behavior
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  // delete transaction if id based on key
  deleteTransaction (key) {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filteredItems
    })
  }

  // update already existing input
  setUpdate (text, key) {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
    })
    this.setState({
      items: items
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addTransaction}>
          <input
            onChange={this.handleInput}
            placeholder='Enter Transaction'
            type='text'
            value={this.state.currentItem.text}
          />
          <button type='submit'>Add Transaction</button>
        </form>
        <Transaction deleteTransaction={this.deleteTransaction} items={this.state.items} setUpdate={this.setUpdate} />
      </div>
    )
  }
}

export default TransactionsList
