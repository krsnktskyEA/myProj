import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import styles from '../static/EntryPage.css'

import BtnClickedCounter from '../components/BtnClickedCounter'
import Counter from '../components/Counter'


class EntryPage extends React.Component {
  componentDidMount() {
    console.log('Hello world!!')
  }

  incrementFunk(par) {
    this.props.incrementBtn(par)
  }

  decrementFunk(par) {
    this.props.decrementBtn(par)
  }

  render() {
    return (
      <div className={styles.entrypagebody}>
        <Counter prop2={this.props.Counter} />
        <BtnClickedCounter prop1={this.props.BtnsClickedCounter} />
        <button className={styles.counterButton} onClick={this.incrementFunk.bind(this, 3)}>Increment</button>
        <button className={styles.counterButton} onClick={this.decrementFunk.bind(this, 3)}>Decrement</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    BtnsClickedCounter: state.BtnsClickedCounter,
    Counter: state.Counter,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    incrementBtn: par => dispatch(actions.incrementBtn(par)),
    decrementBtn: par => dispatch(actions.decrementBtn(par)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EntryPage)
