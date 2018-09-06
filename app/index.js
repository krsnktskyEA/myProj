/* eslint-env node */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route } from 'react-router-dom'

import allReducers from './reducers/index'
import RootSaga from './sagas/index'
import EntryPage from './containers/EntryPage'
import Deputy from './containers/Deputy'


// CREATING STORE AND SAGA------------------------------------------------------------------
const saga = createSagaMiddleware()
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducers, composeEnchancers(applyMiddleware(saga)))
saga.run(RootSaga)
// CREATING STORE AND SAGA------------------------------------------------------------------


// RENDERING ROOT COMPONENT-------------------------------------------------------------------
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter basename="/myProj">
      <div>
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/deputy" component={Deputy} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('app'),
)
// RENDERING ROOT COMPONENT------------------------------------------------------------------
