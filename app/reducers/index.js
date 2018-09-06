// REDUCERS-----------------------------------------------------------------------
import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'
import * as actions from '../actions/index'


const BtnsClickedCounter = createReducer({

  [actions.incrementBtn]: state => state + 1,
  [actions.decrementBtn]: state => state + 1,

}, 0)

const Counter = createReducer({

  [actions.incrementBtn]: (state, par) => state + par,
  [actions.decrementBtn]: (state, par) => state - par,

}, 0)

const Coords = createReducer({

  [actions.coordsAdded]: (state, par) => par,

}, null)


const allReducers = combineReducers({
  BtnsClickedCounter,
  Counter,
  Coords,
})


export default allReducers
// REDUCERS---------------------------------------------------------------------
